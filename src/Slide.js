define("Slide/Slide", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Slide');
smalltalk.packages["Slide"].transport = {"type":"amd","amdNamespace":"Slide"};

smalltalk.addClass('PagenatorWidget', globals.Widget, ['maxPage', 'target'], 'Slide');
smalltalk.addMethod(
smalltalk.method({
selector: "maxPage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@maxPage"];
return $1;
},
args: [],
source: "maxPage\x0a\x09^ maxPage",
messageSends: [],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "maxPage:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@maxPage"]=anObject;
return self},
args: ["anObject"],
source: "maxPage: anObject\x0a\x09maxPage := anObject",
messageSends: [],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "moveNext",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@target"];
_st($1)._moveNext();
$2=_st($1)._showCurrentSlide();
return self}, function($ctx1) {$ctx1.fill(self,"moveNext",{},globals.PagenatorWidget)})},
args: [],
source: "moveNext\x0a\x09target\x0a\x09\x09moveNext;\x0a\x09\x09showCurrentSlide.",
messageSends: ["moveNext", "showCurrentSlide"],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "movePrev",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@target"];
_st($1)._movePrev();
$2=_st($1)._showCurrentSlide();
return self}, function($ctx1) {$ctx1.fill(self,"movePrev",{},globals.PagenatorWidget)})},
args: [],
source: "movePrev\x0a\x09target\x0a\x09\x09movePrev;\x0a\x09\x09showCurrentSlide.",
messageSends: ["movePrev", "showCurrentSlide"],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._movePrev();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$2=_st($1)._with_("Prev");
$ctx2.sendIdx["with:"]=2;
$2;
$3=_st(html)._button();
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._moveNext();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$4=_st($3)._with_("Next");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self;
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PagenatorWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a\x09\x09with: [\x0a\x09\x09\x09html button onClick: [self movePrev];\x0a\x09\x09\x09\x09with: 'Prev'.\x0a\x09\x09\x09html button onClick: [self moveNext];\x0a\x09\x09\x09\x09with: 'Next'.\x0a\x09\x09].\x0a\x09^ self",
messageSends: ["with:", "onClick:", "button", "movePrev", "moveNext"],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "target",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@target"];
return $1;
},
args: [],
source: "target\x0a\x09^ target",
messageSends: [],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@target"]=anObject;
return self},
args: ["anObject"],
source: "target: anObject\x0a\x09target := anObject",
messageSends: [],
referencedClasses: []
}),
globals.PagenatorWidget);



smalltalk.addClass('Presentation', globals.Object, ['widget', 'slides', 'cursor', 'title', 'author', 'organization', 'presentedAt', 'shouldGenerateTitle', 'shouldGenerateToc'], 'Slide');
smalltalk.addMethod(
smalltalk.method({
selector: "addSlide:",
protocol: 'manage slide',
fn: function (aSlide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSlide)._presentation_(self);
_st(self["@slides"])._add_(aSlide);
return self}, function($ctx1) {$ctx1.fill(self,"addSlide:",{aSlide:aSlide},globals.Presentation)})},
args: ["aSlide"],
source: "addSlide: aSlide\x0a\x09aSlide presentation: self.\x0a\x09slides add: aSlide.",
messageSends: ["presentation:", "add:"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@author"];
return $1;
},
args: [],
source: "author\x0a\x09^ author",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "author:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@author"]=aString;
return self;
},
args: ["aString"],
source: "author: aString\x0a\x09author := aString.\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@slides"])._at_(_st(self._cursor()).__plus((1)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentSlide",{},globals.Presentation)})},
args: [],
source: "currentSlide\x0a\x09^ slides at: self cursor + 1.",
messageSends: ["at:", "+", "cursor"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "cursor",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@cursor"];
return $1;
},
args: [],
source: "cursor\x0a\x09^ cursor",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "cursor:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@cursor"]=anObject;
return self},
args: ["anObject"],
source: "cursor: anObject\x0a\x09cursor := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "generateTitle",
protocol: 'manage slide',
fn: function (){
var self=this;
var titleSlide;
function $Slide(){return globals.Slide||(typeof Slide=="undefined"?nil:Slide)}
return smalltalk.withContext(function($ctx1) { 
titleSlide=_st($Slide())._new();
self._putSlide_at_(titleSlide,(1));
return self}, function($ctx1) {$ctx1.fill(self,"generateTitle",{titleSlide:titleSlide},globals.Presentation)})},
args: [],
source: "generateTitle\x0a\x09| titleSlide |\x0a\x09titleSlide := Slide new.\x0a\x09\x22TODO\x22\x0a\x09self putSlide: titleSlide at: 1.\x0a\x09",
messageSends: ["new", "putSlide:at:"],
referencedClasses: ["Slide"]
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "hasNext",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cursor"]).__lt(_st(self["@slides"])._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasNext",{},globals.Presentation)})},
args: [],
source: "hasNext\x0a\x09^ cursor < slides size",
messageSends: ["<", "size"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
self["@slides"]=[];
self["@cursor"]=(0);
return self},
args: [],
source: "initialize\x0a\x09slides := #().\x0a\x09cursor := 0.",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "moveNext",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self._hasNext();
if(smalltalk.assert($1)){
$3=_st(self["@cursor"]).__plus((1));
$ctx1.sendIdx["+"]=1;
$2=_st($3).__lt(_st(self["@slides"])._size());
if(smalltalk.assert($2)){
self["@cursor"]=_st(self["@cursor"]).__plus((1));
self["@cursor"];
} else {
self["@cursor"]=(0);
self["@cursor"];
};
} else {
self["@cursor"]=(0);
self["@cursor"];
};
return self}, function($ctx1) {$ctx1.fill(self,"moveNext",{},globals.Presentation)})},
args: [],
source: "moveNext\x0a\x09(self hasNext)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(cursor + 1 < slides size)\x0a\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09cursor := cursor + 1.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09cursor := 0.\x0a\x09\x09\x09\x09]\x0a\x09\x09]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09cursor := 0.\x0a\x09\x09].",
messageSends: ["ifTrue:ifFalse:", "hasNext", "<", "+", "size"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "movePrev",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__lt(self["@cursor"]);
if(smalltalk.assert($1)){
self["@cursor"]=_st(self["@cursor"]).__minus((1));
$ctx1.sendIdx["-"]=1;
self["@cursor"];
} else {
self["@cursor"]=_st(_st(self["@slides"])._size()).__minus((1));
self["@cursor"];
};
return self}, function($ctx1) {$ctx1.fill(self,"movePrev",{},globals.Presentation)})},
args: [],
source: "movePrev\x0a\x09(0 < cursor)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09cursor := cursor - 1.\x0a\x09\x09] \x0a\x09\x09ifFalse: [\x0a\x09\x09\x09cursor := slides size - 1.\x0a\x09\x09].",
messageSends: ["ifTrue:ifFalse:", "<", "-", "size"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:",
protocol: 'actions',
fn: function (aNumber){
var self=this;
self["@cursor"]=aNumber;
return self},
args: ["aNumber"],
source: "moveTo: aNumber\x0a\x09cursor := aNumber.",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "organization",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@organization"];
return $1;
},
args: [],
source: "organization\x0a\x09^ organization",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "organization:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@organization"]=anObject;
return self},
args: ["anObject"],
source: "organization: anObject\x0a\x09organization := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "presentedAt",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@presentedAt"];
return $1;
},
args: [],
source: "presentedAt\x0a\x09^ presentedAt",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "presentedAt:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@presentedAt"]=anObject;
return self},
args: ["anObject"],
source: "presentedAt: anObject\x0a\x09presentedAt := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "putSlide:at:",
protocol: 'manage slide',
fn: function (aSlide,index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSlide)._presentation_(self);
_st(self["@slides"])._at_put_(index,aSlide);
return self}, function($ctx1) {$ctx1.fill(self,"putSlide:at:",{aSlide:aSlide,index:index},globals.Presentation)})},
args: ["aSlide", "index"],
source: "putSlide: aSlide at: index\x0a\x09aSlide presentation: self.\x0a\x09slides at: index put: aSlide.",
messageSends: ["presentation:", "at:put:"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "setup",
protocol: 'actions',
fn: function (){
var self=this;
return self;
},
args: [],
source: "setup\x0a\x09\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "showCurrentSlide",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentSlide())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCurrentSlide",{},globals.Presentation)})},
args: [],
source: "showCurrentSlide\x0a\x09self currentSlide show.\x0a\x09\x22\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).\x0a\x09\x22",
messageSends: ["show", "currentSlide"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slides",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@slides"];
return $1;
},
args: [],
source: "slides\x0a\x09^ slides",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
function $PresentationWidget(){return globals.PresentationWidget||(typeof PresentationWidget=="undefined"?nil:PresentationWidget)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=_st(_st($PresentationWidget())._new())._model_(self);
_st(self["@widget"])._renderOn_(_st($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return self;
}, function($ctx1) {$ctx1.fill(self,"start",{},globals.Presentation)})},
args: [],
source: "start\x0a\x09widget := PresentationWidget new model: self.\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).\x0a\x09^ self",
messageSends: ["model:", "new", "renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["PresentationWidget", "HTMLCanvas"]
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@title"];
return $1;
},
args: [],
source: "title\x0a\x09^ title",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@title"]=aString;
return self;
},
args: ["aString"],
source: "title: aString\x0a\x09title := aString.\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;
},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@widget"]=anObject;
return self},
args: ["anObject"],
source: "widget: anObject\x0a\x09widget := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "tenka1AltJs2014",
protocol: 'presentation',
fn: function (){
var self=this;
var presentation,slide;
function $Presentation(){return globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
function $Slide(){return globals.Slide||(typeof Slide=="undefined"?nil:Slide)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
$1=_st($Presentation())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._title_("Amber Smalltalk");
$ctx1.sendIdx["title:"]=1;
_st($1)._author_("あんどうやすし");
$2=_st($1)._organization_("株式会社ノハナ");
presentation=$2;
$3=_st($Slide())._new();
$ctx1.sendIdx["new"]=2;
_st($3)._title_("最初のページ");
$ctx1.sendIdx["title:"]=2;
$4=_st($3)._addContent_("ご挨拶");
$ctx1.sendIdx["addContent:"]=1;
slide=$4;
_st(slide)._addBr();
_st(slide)._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._button())._with_("ボタン");
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
_st(presentation)._addSlide_(slide);
$ctx1.sendIdx["addSlide:"]=1;
$5=_st($Slide())._new();
$ctx1.sendIdx["new"]=3;
_st($5)._title_("次のページ");
$ctx1.sendIdx["title:"]=3;
$6=_st($5)._addContent_("説明");
$ctx1.sendIdx["addContent:"]=2;
slide=$6;
_st(presentation)._addSlide_(slide);
$ctx1.sendIdx["addSlide:"]=2;
$7=_st($Slide())._new();
_st($7)._title_("最後のページ");
$8=_st($7)._addContent_("まとめ");
slide=$8;
_st(presentation)._addSlide_(slide);
_st(presentation)._setup();
$9=presentation;
return $9;
}, function($ctx1) {$ctx1.fill(self,"tenka1AltJs2014",{presentation:presentation,slide:slide},globals.Presentation.klass)})},
args: [],
source: "tenka1AltJs2014\x0a\x09\x22Build a presentation for tenka 1 altJS conf\x22\x0a\x09| presentation slide |\x0a\x09presentation := Presentation new\x0a\x09\x09title: 'Amber Smalltalk';\x0a\x09\x09author: 'あんどうやすし';\x0a\x09\x09organization: '株式会社ノハナ'.\x0a\x09\x0a\x09slide := Slide new\x0a\x09\x09title: '最初のページ';\x0a\x09\x09addContent: 'ご挨拶'.\x0a\x09slide addBr.\x0a\x09slide add: [ :html |\x0a\x09\x09html button with: 'ボタン'.\x0a\x09].\x0a\x09presentation addSlide: slide.\x0a\x09\x0a\x09slide := Slide new\x0a\x09\x09title: '次のページ';\x0a\x09\x09addContent: '説明'.\x0a\x09presentation addSlide: slide.\x0a\x09\x0a\x09slide := Slide new\x0a\x09\x09title: '最後のページ';\x0a\x09\x09addContent: 'まとめ'.\x0a\x09presentation addSlide: slide.\x0a\x09\x0a\x09presentation setup.\x0a\x09\x0a\x09^ presentation",
messageSends: ["title:", "new", "author:", "organization:", "addContent:", "addBr", "add:", "with:", "button", "addSlide:", "setup"],
referencedClasses: ["Presentation", "Slide"]
}),
globals.Presentation.klass);


smalltalk.addClass('PresentationWidget', globals.Widget, ['model', 'pagenator', 'slideContainer'], 'Slide');
smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
globals.PresentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@model"]=anObject;
return self;
},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject.\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.PresentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "pagenator",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@pagenator"];
return $1;
},
args: [],
source: "pagenator\x0a\x09^ pagenator",
messageSends: [],
referencedClasses: []
}),
globals.PresentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "pagenator:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@pagenator"]=anObject;
return self},
args: ["anObject"],
source: "pagenator: anObject\x0a\x09pagenator := anObject",
messageSends: [],
referencedClasses: []
}),
globals.PresentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $PagenatorWidget(){return globals.PagenatorWidget||(typeof PagenatorWidget=="undefined"?nil:PagenatorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($PagenatorWidget())._new();
_st($1)._maxPage_(_st(_st(self["@model"])._slides())._size());
_st($1)._target_(self["@model"]);
$2=_st($1)._renderOn_(html);
self["@slideContainer"]=_st(_st(html)._div())._class_("slide");
_st(_st(self["@model"])._currentSlide())._show();
return self;
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PresentationWidget)})},
args: ["html"],
source: " renderOn: html\x0a\x09PagenatorWidget new maxPage: model slides size;\x0a\x09\x09target: model;\x0a\x09\x09renderOn: html.\x0a\x09\x09\x0a\x09slideContainer := html div class: 'slide'.\x0a\x09model currentSlide show.\x0a\x09^ self",
messageSends: ["maxPage:", "new", "size", "slides", "target:", "renderOn:", "class:", "div", "show", "currentSlide"],
referencedClasses: ["PagenatorWidget"]
}),
globals.PresentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "slideContainer",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@slideContainer"];
return $1;
},
args: [],
source: "slideContainer\x0a\x09^ slideContainer",
messageSends: [],
referencedClasses: []
}),
globals.PresentationWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "slideContainer:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@slideContainer"]=anObject;
return self},
args: ["anObject"],
source: "slideContainer: anObject\x0a\x09slideContainer := anObject",
messageSends: [],
referencedClasses: []
}),
globals.PresentationWidget);



smalltalk.addClass('Slide', globals.Object, ['widget', 'presentation', 'title', 'contents'], 'Slide');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@contents"])._add_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aBlock:aBlock},globals.Slide)})},
args: ["aBlock"],
source: "add: aBlock\x0a\x09contents add: aBlock.",
messageSends: ["add:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addBr",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addContent_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._br();
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addBr",{},globals.Slide)})},
args: [],
source: "addBr\x0a\x09self addContent: [ :html | html br. ].",
messageSends: ["addContent:", "br"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addContent:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(aString);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addContent:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addContent: aString\x0a\x09self add: [ :html | html with: aString. ]",
messageSends: ["add:", "with:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@contents"];
return $1;
},
args: [],
source: "contents\x0a\x09^ contents",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
self["@contents"]=[];
return self},
args: [],
source: "initialize\x0a\x09contents := #().",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@presentation"];
return $1;
},
args: [],
source: "presentation\x0a\x09^ presentation",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@presentation"]=anObject;
return self},
args: ["anObject"],
source: "presentation: anObject\x0a\x09presentation := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
function $SlideWidget(){return globals.SlideWidget||(typeof SlideWidget=="undefined"?nil:SlideWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SlideWidget())._new();
_st($1)._model_(self);
$2=_st($1)._container_(_st(_st(self["@presentation"])._widget())._slideContainer());
self["@widget"]=$2;
_st(self["@widget"])._renderOn_(nil);
return self;
}, function($ctx1) {$ctx1.fill(self,"show",{},globals.Slide)})},
args: [],
source: "show\x0a\x09widget := SlideWidget new model: self; container: presentation widget slideContainer.\x0a\x09widget renderOn: nil.\x0a\x09^ self.",
messageSends: ["model:", "new", "container:", "slideContainer", "widget", "renderOn:"],
referencedClasses: ["SlideWidget"]
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@title"];
return $1;
},
args: [],
source: "title\x0a\x09^ title",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@title"]=anObject;
return self},
args: ["anObject"],
source: "title: anObject\x0a\x09title := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;
},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@widget"]=anObject;
return self},
args: ["anObject"],
source: "widget: anObject\x0a\x09widget := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Slide);



smalltalk.addClass('SlideWidget', globals.Widget, ['model', 'container'], 'Slide');
smalltalk.addMethod(
smalltalk.method({
selector: "container",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@container"];
return $1;
},
args: [],
source: "container\x0a\x09^ container",
messageSends: [],
referencedClasses: []
}),
globals.SlideWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "container:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@container"]=anObject;
return self},
args: ["anObject"],
source: "container: anObject\x0a\x09container := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlideWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
globals.SlideWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@model"]=anObject;
return self},
args: ["anObject"],
source: "model: anObject\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
globals.SlideWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var bodyContainer;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self["@container"])._contents_((function(containerHtml){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(containerHtml)._h1())._with_(_st(self["@model"])._title());
$ctx2.sendIdx["with:"]=2;
_st(containerHtml)._with_($1);
$ctx2.sendIdx["with:"]=1;
$2=_st(containerHtml)._div();
_st($2)._class_("body");
$3=_st($2)._contents_((function(bodyHtml){
return smalltalk.withContext(function($ctx3) {
return _st(_st(self["@model"])._contents())._do_((function(content){
return smalltalk.withContext(function($ctx4) {
return _st(content)._value_(bodyHtml);
}, function($ctx4) {$ctx4.fillBlock({content:content},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({bodyHtml:bodyHtml},$ctx2,2)})}));
return _st(containerHtml)._with_($3);
}, function($ctx2) {$ctx2.fillBlock({containerHtml:containerHtml},$ctx1,1)})}));
$ctx1.sendIdx["contents:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,bodyContainer:bodyContainer},globals.SlideWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09| bodyContainer |\x0a\x09container contents: [ :containerHtml |\x0a\x09\x09containerHtml with: (containerHtml h1 with: model title).\x0a\x09\x09containerHtml with: (containerHtml div class: 'body'; contents: [ :bodyHtml |\x0a\x09\x09\x09model contents do: [ :content |\x0a\x09\x09\x09\x09content value: bodyHtml.\x0a\x09\x09\x09].\x0a\x09\x09]). \x0a\x09].",
messageSends: ["contents:", "with:", "h1", "title", "class:", "div", "do:", "contents", "value:"],
referencedClasses: []
}),
globals.SlideWidget);



smalltalk.addClass('Timer', globals.Object, ['widget'], 'Slide');

});
