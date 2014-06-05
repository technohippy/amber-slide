Smalltalk createPackage: 'Slide'!
Object subclass: #Pagenator
	instanceVariableNames: 'widget'
	package: 'Slide'!

Widget subclass: #PagenatorWidget
	instanceVariableNames: ''
	package: 'Slide'!

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

hasNext
	^ slides size < cursor
!

moveNext
	(self hasNext)
		ifTrue: [
			cursor := cursor + 1.
		]
		ifFalse: [
			cursor := 0.
		].
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

setup
	
	^ self
!

start
	widget := PresentationWidget new model: self.
	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).
	
	window alert: 'hello'.
	^ self
! !

!Presentation methodsFor: 'initialization'!

initialize
	slides := #().
	cursor := 0.
! !

!Presentation methodsFor: 'manage slide'!

addSlide: aSlide
	slides add: aSlide.
!

generateTitle
	| titleSlide |
	titleSlide := Slide new.
	"TODO"
	self putSlide: titleSlide at: 1.
!

putSlide: aSlide at: index
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
	
	slide := Slide new.
	presentation addSlide: slide.
	
	presentation setup.
	
	^ presentation
! !

Widget subclass: #PresentationWidget
	instanceVariableNames: 'model'
	package: 'Slide'!

!PresentationWidget methodsFor: 'accessing'!

model
	^ model
!

model: anObject
	model := anObject.
	^ self
! !

!PresentationWidget methodsFor: 'rendering'!

renderOn: html
	html div
		with: [
			html
				with: 'こんにちは';
				with: (html span style: 'font-weight:bold'; with: '名前');
				with: 'さん'.
		].
	^ self
! !

Object subclass: #Slide
	instanceVariableNames: 'widget title contents'
	package: 'Slide'!

Widget subclass: #SlideWidget
	instanceVariableNames: ''
	package: 'Slide'!

Object subclass: #Timer
	instanceVariableNames: 'widget'
	package: 'Slide'!

