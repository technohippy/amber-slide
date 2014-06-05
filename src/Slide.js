define("Slide/Slide", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Slide');
smalltalk.packages["Slide"].transport = {"type":"amd","amdNamespace":"Slide"};

smalltalk.addClass('Pagenator', globals.Object, ['widget'], 'Slide');


smalltalk.addClass('PagenatorWidget', globals.Widget, [], 'Slide');


smalltalk.addClass('Presentation', globals.Object, ['widget', 'slides', 'cursor', 'title', 'author', 'organization', 'presentedAt', 'shouldGenerateTitle', 'shouldGenerateToc'], 'Slide');
smalltalk.addMethod(
smalltalk.method({
selector: "addSlide:",
protocol: 'manage slide',
fn: function (aSlide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@slides"])._add_(aSlide);
return self}, function($ctx1) {$ctx1.fill(self,"addSlide:",{aSlide:aSlide},globals.Presentation)})},
args: ["aSlide"],
source: "addSlide: aSlide\x0a\x09slides add: aSlide.",
messageSends: ["add:"],
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
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@slides"])._size()).__lt(self["@cursor"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasNext",{},globals.Presentation)})},
args: [],
source: "hasNext\x0a\x09^ slides size < cursor",
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
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._hasNext();
if(smalltalk.assert($1)){
self["@cursor"]=_st(self["@cursor"]).__plus((1));
self["@cursor"];
} else {
self["@cursor"]=(0);
self["@cursor"];
};
return self}, function($ctx1) {$ctx1.fill(self,"moveNext",{},globals.Presentation)})},
args: [],
source: "moveNext\x0a\x09(self hasNext)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09cursor := cursor + 1.\x0a\x09\x09]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09cursor := 0.\x0a\x09\x09].",
messageSends: ["ifTrue:ifFalse:", "hasNext", "+"],
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
_st(self["@slides"])._at_put_(index,aSlide);
return self}, function($ctx1) {$ctx1.fill(self,"putSlide:at:",{aSlide:aSlide,index:index},globals.Presentation)})},
args: ["aSlide", "index"],
source: "putSlide: aSlide at: index\x0a\x09slides at: index put: aSlide.",
messageSends: ["at:put:"],
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
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
function $PresentationWidget(){return globals.PresentationWidget||(typeof PresentationWidget=="undefined"?nil:PresentationWidget)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=_st(_st($PresentationWidget())._new())._model_(self);
_st(self["@widget"])._renderOn_(_st($HTMLCanvas())._onJQuery_("body"._asJQuery()));
_st(window)._alert_("hello");
return self;
}, function($ctx1) {$ctx1.fill(self,"start",{},globals.Presentation)})},
args: [],
source: "start\x0a\x09widget := PresentationWidget new model: self.\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).\x0a\x09\x0a\x09window alert: 'hello'.\x0a\x09^ self",
messageSends: ["model:", "new", "renderOn:", "onJQuery:", "asJQuery", "alert:"],
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
var $1,$2,$3;
$1=_st($Presentation())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._title_("Amber Smalltalk");
_st($1)._author_("あんどうやすし");
$2=_st($1)._organization_("株式会社ノハナ");
presentation=$2;
slide=_st($Slide())._new();
_st(presentation)._addSlide_(slide);
_st(presentation)._setup();
$3=presentation;
return $3;
}, function($ctx1) {$ctx1.fill(self,"tenka1AltJs2014",{presentation:presentation,slide:slide},globals.Presentation.klass)})},
args: [],
source: "tenka1AltJs2014\x0a\x09\x22Build a presentation for tenka 1 altJS conf\x22\x0a\x09| presentation slide |\x0a\x09presentation := Presentation new\x0a\x09\x09title: 'Amber Smalltalk';\x0a\x09\x09author: 'あんどうやすし';\x0a\x09\x09organization: '株式会社ノハナ'.\x0a\x09\x0a\x09slide := Slide new.\x0a\x09presentation addSlide: slide.\x0a\x09\x0a\x09presentation setup.\x0a\x09\x0a\x09^ presentation",
messageSends: ["title:", "new", "author:", "organization:", "addSlide:", "setup"],
referencedClasses: ["Presentation", "Slide"]
}),
globals.Presentation.klass);


smalltalk.addClass('PresentationWidget', globals.Widget, ['model'], 'Slide');
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
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4;
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("こんにちは");
$ctx2.sendIdx["with:"]=2;
$2=_st(html)._span();
_st($2)._style_("font-weight:bold");
$3=_st($2)._with_("名前");
$ctx2.sendIdx["with:"]=4;
$1=$3;
_st(html)._with_($1);
$ctx2.sendIdx["with:"]=3;
$4=_st(html)._with_("さん");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self;
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PresentationWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09with: [\x0a\x09\x09\x09html\x0a\x09\x09\x09\x09with: 'こんにちは';\x0a\x09\x09\x09\x09with: (html span style: 'font-weight:bold'; with: '名前');\x0a\x09\x09\x09\x09with: 'さん'.\x0a\x09\x09].\x0a\x09^ self",
messageSends: ["with:", "div", "style:", "span"],
referencedClasses: []
}),
globals.PresentationWidget);



smalltalk.addClass('Slide', globals.Object, ['widget', 'title', 'contents'], 'Slide');


smalltalk.addClass('SlideWidget', globals.Widget, [], 'Slide');


smalltalk.addClass('Timer', globals.Object, ['widget'], 'Slide');

});
