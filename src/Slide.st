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
	window console
		log: event charCode;
		log: ',';
		log: event keyCode.
		"p"
		(event charCode == 112) ifTrue: [ self movePrev ].
		
		"n or enter"
		((event charCode == 110) | (event charCode == 13)) ifTrue: [ self moveNext ]].
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

generatedTitleAt
	^ generatedTitleAt
!

generatedTitleAt: anObject
	generatedTitleAt := anObject
!

generatedTocAt
	^ generatedTocAt
!

generatedTocAt: anObject
	generatedTocAt := anObject
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

shouldGenerateTitle
	^ shouldGenerateTitle
!

shouldGenerateTitle: anObject
	shouldGenerateTitle := anObject
!

shouldGenerateToc
	^ shouldGenerateToc
!

shouldGenerateToc: anObject
	shouldGenerateToc := anObject
!

slides
	^ slides
!

slides: anObject
	slides := anObject
!

title
	^ title
!

title: aString
	title := aString.
	^ self
!

tocTitle
	^ tocTitle
!

tocTitle: anObject
	tocTitle := anObject
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

browseIt: aString
	Browser openOn: (self doIt: aString).
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
	
	self setupEventHandler.
! !

!Presentation methodsFor: 'manage slide'!

addSlide: aSlide
	aSlide presentation: self.
	slides add: aSlide.
!

addSlide: aSlide beforeIndex: index
	aSlide presentation: self.
	"slides add: aSlide beforeIndex: index."
	"slides splice: index delete: 0 add: aSlide."
	self helpAddSlide: aSlide beforeIndex: index
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
			slide shouldAppearInToc ifTrue: [titles add: slide tocTitle]].
		tocSlide := Slide new
			title: tocTitle;
			addClass: 'toc';
			shouldAppearInToc: false;
			addOrderedList: titles class: 'small'.
		self addSlide: tocSlide beforeIndex: generatedTocAt.
	].
!

helpAddSlide: aSlide beforeIndex: index
	<self["@slides"].splice(index-1, 0, aSlide)>
!

setupEventHandler
	window addEventListener: 'keypress' do: [ :event |
		| selectedText |
		window console log: event charCode.
		selectedText := window getSelection toString.
		(selectedText isEmpty) ifFalse: [
			(event charCode = 4) ifTrue: [ "Ctrl+d"
				self alertIt: selectedText].
			(event charCode = 2) ifTrue: [ "Ctrl+b"
				self browseIt: selectedText]]].
! !

!Presentation class methodsFor: 'presentation'!

tenka1AltJs2014
	"Build a presentation for tenka 1 altJS conf"
	| presentation slide |
	presentation := Presentation new
		title: 'Amber';
		author: 'あんどうやすし';
		organization: '株式会社ノハナ';
		presentedAt: '2014-06-08';
		tocTitle: '目次'.
	
	presentation addSlide: (Slide new
		title: 'Amberとは？';
		addTextBr: 'Amber';
		addTextBr: '= Jtalk';
		addText: '= ';
		addStrongText: '"J"';
		addText: 'avaScript Small';
		addStrongText: '"talk"').

	presentation addSlide: (Slide new
		title: 'Smalltalkとは？';
		addTextBr: 'Smalltalk';
		addText: '= 言語 + ライブラリ + 環境'). 

	presentation addSlide: (Slide new
		title: 'Smalltalk - 言語';
		tocTitle: 'Smalltalk';
		addTextBr: 'メッセージ式';
		addOrderedList: #(
			'単項メッセージ: 1 negated.'
			'二項メッセージ: 1 + 1.'
			'キーワードメッセージ: 1 to: 10 by: 2.')). 

	presentation addSlide: (Slide new
		title: 'Smalltalk - ライブラリ';
		shouldAppearInToc: false;
		addTextBr: '反復';
		addList: #('BlockClosure#whileTrue');
		addTextBr: '分岐';
		addList: #('Boolean#ifTrue:ifFalse:')). 
		
	presentation addSlide: (Slide new
		title: 'Smalltalk - 環境';
		shouldAppearInToc: false;
		addImage: '/image/tenka1altjs2014/ide.png').

	presentation addSlide: (Slide new
		title: 'Amber - 言語';
		tocTitle: 'Amber';
		addText: 'Smalltalk - JS連携';
		addList: #(
			'ST->JS: (window jQuery: ''body'') css: ''background'' color: ''red'''
			'ST->JS: < if (true) {console.log(''hi'')} >'
			'JS->ST: dict = require(''amber/helpers'').Dictionary._new(); dict._at_put_(3, 4);') class: 'small').

	presentation addSlide: (Slide new
		title: 'Amber - ライブラリ';
		shouldAppearInToc: false;
		addText: 'jQuery';
		addList: #('window#jQuery:' 'String#asJQuery');
		addText: 'HTMLCanvas';
		addList: #('タグ生成メソッド各種')).
		
	presentation addSlide: (Slide new
		title: 'Amber - not 環境 but IDE';
		shouldAppearInToc: false;
		addList: #('Ctrl + SPC' 'Debugger')).
		
	presentation addSlide: (Slide new
		title: 'デモ';
		addConsole: #(
			'$ amber init' 
			'Welcome to Amber version 0.13.0-pre (NodeJS 0.11.10).'
			'...snip...'
			'Please answer the following:'
			'[?] Project title (Application or Library Title) HelloWorld'
			'...snip...'
			'$ ls'
            'Gruntfile.js      LICENSE-MIT       README.md'
			'bower.json        bower_components/ index.html'
			'node_modules/     package.json      src/')).

	presentation addSlide: (Slide new
		title: 'デモ';
		shouldAppearInToc: false;
		addConsole: #(
			'$ vim src/Helloworld.js'
			'  x define("amber_core/Helloworld", ...'
			'  o define("amber-helloworld/Helloworld", ...'
			''
			'  x ...,"amdNamespace":"amber_core"};'
			'  o ...,"amdNamespace":"amber-helloworld"};')).

	presentation addSlide: (Slide new
		title: 'デモ';
		shouldAppearInToc: false;
		addConsole: #('$ amber serve');
		addBr;
		addConsole: #('$ open http://localhost:4000')).

	presentation addSlide: (Slide new
		title: '利用例';
		addList: #(
			'Amber公式ページ: http://amber-lang.net/'
			'ToDoIt: http://goo.gl/CE0cXe'
			'このスライド: https://github.com/technohippy/amber-slide')).

	presentation addSlide: (Slide new
		title: 'まとめ';
		addList: #(
			'Smalltalkです'
			'JSとの連携が非常に簡単です'
			'コードを修正するとJSに変換してリロードが必要なのは少し面倒です'
			'Smalltalkの入門としてなかなかいいかもしれません')).


	presentation addSlide: (Slide new
		title: '参考';
		addList: #(
			'Amber公式ページ: http://amber-lang.net/'
			'Amber Github: https://github.com/amber-smalltalk/amber'
			'Amber公式サンプル: https://github.com/amber-smalltalk/amber-examples'
			'Smalltalk勉強会の資料集: http://www.smalltalk-users.jp/system/app/pages/search?scope=search-site&q=amber') class: 'small').

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
	instanceVariableNames: 'widget presentation title tocTitle contents shouldAppearInToc classes'
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

tocTitle
	tocTitle isNil
		ifTrue: [ ^ title ]
		ifFalse: [ ^ tocTitle ]
!

tocTitle: anObject
	tocTitle := anObject
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
	self add: [ :html | html br. ]
!

addConsole: anArray
	self add: [ :html |
		| pre |
		pre := html pre class: 'code small'.
		anArray do: [ :line | pre with: line; with: '
' ]]
!

addDiv: aString
	self add: [ :html | html div with: aString. ]
!

addDiv: aString class: class
	self add: [ :html | html div class: class; with: aString. ]
!

addImage: aUrl
	self add: [ :html | html img src: aUrl; align: 'center'. ]
!

addList: anArray
	self add: [ :html |
		html ul with: [ :ulHtml |
			anArray do: [ :item |
				ulHtml li with: item]]]
!

addList: anArray class: class
	self add: [ :html |
		html ul 
			class: class; 
			with: [ :ulHtml |
				anArray do: [ :item |
					ulHtml li with: item]]]
!

addOrderedList: anArray
	self add: [ :html |
		html ol with: [ :ulHtml |
			anArray do: [ :item |
				ulHtml li with: item]]]
!

addOrderedList: anArray class: class
	self add: [ :html |
		html ol 
			class: class;
			with: [ :ulHtml |
				anArray do: [ :item |
					ulHtml li with: item]]]
!

addSpan: aString
	self add: [ :html | html span with: aString. ]
!

addSpan: aString class: class
	self add: [ :html | html span class: class; with: aString. ]
!

addStrongText: aString
	self add: [ :html | html strong with: aString. ]
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
		containerHtml with: (
			containerHtml div class: 'body'; 
			contents: [ :bodyHtml |
				model contents do: [ :content |
					content value: bodyHtml]])].
! !

Object subclass: #Timer
	instanceVariableNames: 'widget'
	package: 'Slide'!

