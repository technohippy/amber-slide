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
	html
		with: [
			html button
				class: 'prev paginate'; 
				onClick: [self movePrev];
				with: '<'.
			html button
				class: 'next paginate';
				onClick: [self moveNext];
				with: '>'.	
		].
	^ self
! !

Object subclass: #Presentation
	instanceVariableNames: 'widget slides cursor title author organization presentedAt shouldGenerateTitle shouldGenerateToc'
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
	^ slides at: self cursor + 1.
!

hasNext
	^ cursor < slides size
!

moveNext
	(self hasNext)
		ifTrue: [
			(cursor + 1 < slides size)
				ifTrue: [
					cursor := cursor + 1.
				]
				ifFalse: [
					cursor := 0.
				]
		]
		ifFalse: [
			cursor := 0.
		].
!

movePrev
	(0 < cursor)
		ifTrue: [
			cursor := cursor - 1.
		] 
		ifFalse: [
			cursor := slides size - 1.
		].
!

moveTo: aNumber
	cursor := aNumber.
!

setup
	
	^ self
!

showCurrentSlide
	self currentSlide show.
	"
	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).
	"
!

start
	widget := PresentationWidget new model: self.
	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).
	^ self
! !

!Presentation methodsFor: 'initialization'!

initialize
	slides := #().
	cursor := 0.
! !

!Presentation methodsFor: 'manage slide'!

addSlide: aSlide
	aSlide presentation: self.
	slides add: aSlide.
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

!Presentation class methodsFor: 'presentation'!

tenka1AltJs2014
	"Build a presentation for tenka 1 altJS conf"
	| presentation slide |
	presentation := Presentation new
		title: 'Amber Smalltalk';
		author: 'あんどうやすし';
		organization: '株式会社ノハナ'.
	
	slide := Slide new
		title: '最初のページ';
		addContent: 'ご挨拶'.
	slide addBr.
	slide add: [ :html |
		html button with: 'ボタン'.
	].
	presentation addSlide: slide.
	
	slide := Slide new
		title: '次のページ';
		addContent: '説明'.
	presentation addSlide: slide.
	
	slide := Slide new
		title: '最後のページ';
		addContent: 'まとめ'.
	presentation addSlide: slide.
	
	presentation setup.
	
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
		
	slideContainer := html div class: 'slide'.
	model currentSlide show.
	^ self
! !

Object subclass: #Slide
	instanceVariableNames: 'widget presentation title contents'
	package: 'Slide'!

!Slide methodsFor: 'accessing'!

contents
	^ contents
!

presentation
	^ presentation
!

presentation: anObject
	presentation := anObject.
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

addBr
	self addContent: [ :html | html br. ].
!

addContent: aString
	self add: [ :html | html with: aString. ]
!

show
	widget := SlideWidget new model: self; container: presentation widget slideContainer.
	widget renderOn: nil.
	^ self.
! !

!Slide methodsFor: 'initialization'!

initialize
	contents := #().
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
			].
		]). 
	].
! !

Object subclass: #Timer
	instanceVariableNames: 'widget'
	package: 'Slide'!

