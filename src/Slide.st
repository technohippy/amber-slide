Smalltalk createPackage: 'Slide'!
Widget subclass: #PagenatorWidget
	instanceVariableNames: 'maxPage target'
	package: 'Slide'!

!PagenatorWidget methodsFor: 'accessing'!

maxPage
	^ maxPage
!

maxPage: anObject
	maxPage := anObject
!

target
	^ target
!

target: anObject
	target := anObject
! !

!PagenatorWidget methodsFor: 'actions'!

moveNext
	target
		moveNext;
		showCurrentSlide.
!

movePrev
	target
		movePrev;
		showCurrentSlide.
! !

!PagenatorWidget methodsFor: 'rendering'!

renderOn: html
	self setupEventHandler.
	
	html
		with: [
			html button
				class: 'prev paginate'; 
				onClick: [self movePrev];
				with: '<'.
			html button
				class: 'next paginate';
				onClick: [self moveNext];
				with: '>'].
!

setupEventHandler
	window addEventListener: 'keypress' do: [ :event |
		(event charCode == 112) ifTrue: [ self movePrev ].
		(event charCode == 110 | event charCode == 13) ifTrue: [ self moveNext ]].
! !

Object subclass: #Presentation
	instanceVariableNames: 'widget slides cursor title author organization presentedAt shouldGenerateTitle shouldGenerateToc tocTitle generatedTitleAt generatedTocAt'
	package: 'Slide'!

!Presentation methodsFor: 'accessing'!

author
	^ author
!

author: aString
	author := aString.
	^ self
!

cursor
	^ cursor
!

cursor: anObject
	cursor := anObject
!

organization
	^ organization
!

organization: anObject
	organization := anObject
!

presentedAt
	^ presentedAt
!

presentedAt: anObject
	presentedAt := anObject
!

slides
	^ slides
!

title
	^ title
!

title: aString
	title := aString.
	^ self
!

widget
	^ widget
!

widget: anObject
	widget := anObject
! !

!Presentation methodsFor: 'actions'!

currentSlide
	^ slides at: self cursor + 1
!

hasNext
	^ cursor < slides size
!

moveNext
	(self hasNext)
		ifTrue: [
			(cursor + 1 < slides size)
				ifTrue: [ cursor := cursor + 1 ]
				ifFalse: [ cursor := 0 ]]
		ifFalse: [
			cursor := 0 ].
!

movePrev
	(0 < cursor)
		ifTrue: [ cursor := cursor - 1 ] 
		ifFalse: [ cursor := slides size - 1 ]
!

moveTo: aNumber
	cursor := aNumber
!

showCurrentSlide
	self currentSlide show.
!

start
	self generateTitleIfNeeded.
	self generateTocIfNeeded.
	
	widget := PresentationWidget new model: self.
	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).
! !

!Presentation methodsFor: 'evaluating'!

alertIt: aString
	window alert: (self doIt: aString)
!

doIt: aString
	^ Evaluator evaluate: aString for: self.
!

printIt: aString
	| ret |
	ret := self doIt: aString.
	Transcript show: ret.
	window console log: ret.
! !

!Presentation methodsFor: 'initialization'!

initialize
	slides := #().
	cursor := 0.
	tocTitle := 'Abstract'.
	shouldGenerateTitle := true.
	shouldGenerateToc := true.
	generatedTitleAt := 1.
	generatedTocAt := 2.
	
	window addEventListener: 'keypress' do: [ :event |
		(event charCode == 4) ifTrue: [ "Ctrl+d"
			| selectedText |
			selectedText := window getSelection toString.
			(selectedText isEmpty) ifFalse: [
				self alertIt: selectedText]]].
! !

!Presentation methodsFor: 'manage slide'!

addSlide: aSlide
	aSlide presentation: self.
	slides add: aSlide.
!

addSlide: aSlide beforeIndex: index
	aSlide presentation: self.
	slides add: aSlide beforeIndex: index.
!

generateTitle
	| titleSlide |
	titleSlide := Slide new.
	"TODO"
	self putSlide: titleSlide at: 1.
!

putSlide: aSlide at: index
	aSlide presentation: self.
	slides at: index put: aSlide.
! !

!Presentation methodsFor: 'private'!

generateTitleIfNeeded
	shouldGenerateTitle ifTrue: [
		| titleSlide |
		titleSlide := Slide new
			title: title;
			shouldAppearInToc: false;
			addClass: 'title';
			addDiv: author class: 'author';
			addDiv: organization class: 'organization';
			addDiv: presentedAt class: 'presented-at'.
		self addSlide: titleSlide beforeIndex: generatedTitleAt.
	].
!

generateTocIfNeeded
	shouldGenerateToc ifTrue: [
		| titles tocSlide |	
		titles := #().
		slides do: [ :slide |
			slide shouldAppearInToc ifTrue: [titles add: slide title]].
		tocSlide := Slide new
			title: tocTitle;
			addClass: 'toc';
			shouldAppearInToc: false;
			addOrderedList: titles.
		self addSlide: tocSlide beforeIndex: generatedTocAt.
	].
! !

!Presentation class methodsFor: 'presentation'!

tenka1AltJs2014
	"Build a presentation for tenka 1 altJS conf"
	| presentation slide |
	presentation := Presentation new
		title: 'Amber';
		author: 'あんどうやすし';
		organization: '株式会社ノハナ';
		presentedAt: '2014-06-08'.
	presentation.
	
	presentation addSlide: (Slide new
		title: 'What''s Amber?';
		addTextBr: 'Amber';
		addTextBr: '= Jtalk';
		addText: '= "J"avaScript Small"talk"').
	
	presentation addSlide: (Slide new
		title: 'What''s Smalltalk?';
		addTextBr: 'Smalltalk';
		addText: '= Language + Libraries + IDE'). 
		
	slide := Slide new
		title: '次のページ';
		addText: '説明'.
	presentation addSlide: slide.
	
	slide := Slide new
		title: '最後のページ';
		addText: 'まとめ'.
	presentation addSlide: slide.
	
	^ presentation
! !

Widget subclass: #PresentationWidget
	instanceVariableNames: 'model pagenator slideContainer'
	package: 'Slide'!

!PresentationWidget methodsFor: 'accessing'!

model
	^ model
!

model: anObject
	model := anObject.
	^ self
!

pagenator
	^ pagenator
!

pagenator: anObject
	pagenator := anObject
!

slideContainer
	^ slideContainer
!

slideContainer: anObject
	slideContainer := anObject
! !

!PresentationWidget methodsFor: 'rendering'!

renderOn: html
	PagenatorWidget new maxPage: model slides size;
		target: model;
		renderOn: html.
		
	slideContainer := html div.
"	slideContainer := html div class: 'slide'."
	model currentSlide show.
! !

Object subclass: #Slide
	instanceVariableNames: 'widget presentation title contents shouldAppearInToc classes'
	package: 'Slide'!

!Slide methodsFor: 'accessing'!

addClass: aString
	classes add: aString
!

classes
	^ classes
!

classes: anObject
	classes := anObject
!

contents
	^ contents
!

contents: anObject
	contents := anObject
!

presentation
	^ presentation
!

presentation: anObject
	presentation := anObject.
!

removeClass: aString
	classes remove: aString ifAbsent: []
!

shouldAppearInToc
	^ shouldAppearInToc
!

shouldAppearInToc: anObject
	shouldAppearInToc := anObject
!

title
	^ title
!

title: anObject
	title := anObject
!

widget
	^ widget
!

widget: anObject
	widget := anObject
! !

!Slide methodsFor: 'actions'!

add: aBlock
	contents add: aBlock.
!

addBold: aString
	self add: [ :html | html with: aString. ]
!

addBr
	self add: [ :html | html br. ]
!

addDiv: aString
	self add: [ :html | html div with: aString. ]
!

addDiv: aString class: class
	self add: [ :html | html div class: class; with: aString. ]
!

addList: anArray
	self add: [ :html |
		html ul with: [ :ulHtml |
			anArray do: [ :item |
				ulHtml li with: item]]]
!

addOrderedList: anArray
	self add: [ :html |
		html ol with: [ :ulHtml |
			anArray do: [ :item |
				ulHtml li with: item]]]
!

addSpan: aString
	self add: [ :html | html span with: aString. ]
!

addSpan: aString class: class
	self add: [ :html | html span class: class; with: aString. ]
!

addText: aString
	self add: [ :html | html with: aString. ]
!

addTextBr: aString
	self add: [ :html | html with: aString; br. ]
!

show
	| container |
	container := presentation widget slideContainer.
	container class: (classes join: ' ').
	widget := SlideWidget new 
		model: self; 
		container: container.
	widget renderOn: nil.
! !

!Slide methodsFor: 'initialization'!

initialize
	classes := #('slide').
	contents := #().
	shouldAppearInToc := true.
! !

Widget subclass: #SlideWidget
	instanceVariableNames: 'model container'
	package: 'Slide'!

!SlideWidget methodsFor: 'accessing'!

container
	^ container
!

container: anObject
	container := anObject
!

model
	^ model
!

model: anObject
	model := anObject
! !

!SlideWidget methodsFor: 'rendering'!

renderOn: html
	| bodyContainer |
	container contents: [ :containerHtml |
		containerHtml with: (containerHtml h1 with: model title).
		containerHtml with: (containerHtml div class: 'body'; contents: [ :bodyHtml |
			model contents do: [ :content |
				content value: bodyHtml.
			]]
		)].
! !

Object subclass: #Timer
	instanceVariableNames: 'widget'
	package: 'Slide'!

