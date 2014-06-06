define("Slide/Slide", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
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
self._setupEventHandler();
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($1)._class_("prev paginate");
$ctx2.sendIdx["class:"]=1;
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._movePrev();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$2=_st($1)._with_("<");
$ctx2.sendIdx["with:"]=2;
$2;
$3=_st(html)._button();
_st($3)._class_("next paginate");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._moveNext();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$4=_st($3)._with_(">");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PagenatorWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09self setupEventHandler.\x0a\x09\x0a\x09html\x0a\x09\x09with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'prev paginate'; \x0a\x09\x09\x09\x09onClick: [self movePrev];\x0a\x09\x09\x09\x09with: '<'.\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09class: 'next paginate';\x0a\x09\x09\x09\x09onClick: [self moveNext];\x0a\x09\x09\x09\x09with: '>'].",
messageSends: ["setupEventHandler", "with:", "class:", "button", "onClick:", "movePrev", "moveNext"],
referencedClasses: []
}),
globals.PagenatorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setupEventHandler",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$6,$5,$4,$3;
_st(window)._addEventListener_do_("keypress",(function(event){
return smalltalk.withContext(function($ctx2) {
$2=_st(event)._charCode();
$ctx2.sendIdx["charCode"]=1;
$1=_st($2).__eq_eq((112));
$ctx2.sendIdx["=="]=1;
if(smalltalk.assert($1)){
self._movePrev();
};
$6=_st(event)._charCode();
$ctx2.sendIdx["charCode"]=2;
$5=_st($6).__eq_eq((110));
$4=_st($5).__or(_st(event)._charCode());
$3=_st($4).__eq_eq((13));
$ctx2.sendIdx["=="]=2;
if(smalltalk.assert($3)){
return self._moveNext();
};
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setupEventHandler",{},globals.PagenatorWidget)})},
args: [],
source: "setupEventHandler\x0a\x09window addEventListener: 'keypress' do: [ :event |\x0a\x09\x09(event charCode == 112) ifTrue: [ self movePrev ].\x0a\x09\x09(event charCode == 110 | event charCode == 13) ifTrue: [ self moveNext ]].",
messageSends: ["addEventListener:do:", "ifTrue:", "==", "charCode", "movePrev", "|", "moveNext"],
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



smalltalk.addClass('Presentation', globals.Object, ['widget', 'slides', 'cursor', 'title', 'author', 'organization', 'presentedAt', 'shouldGenerateTitle', 'shouldGenerateToc', 'tocTitle', 'generatedTitleAt', 'generatedTocAt'], 'Slide');
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
selector: "addSlide:beforeIndex:",
protocol: 'manage slide',
fn: function (aSlide,index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aSlide)._presentation_(self);
_st(self["@slides"])._add_beforeIndex_(aSlide,index);
return self}, function($ctx1) {$ctx1.fill(self,"addSlide:beforeIndex:",{aSlide:aSlide,index:index},globals.Presentation)})},
args: ["aSlide", "index"],
source: "addSlide: aSlide beforeIndex: index\x0a\x09aSlide presentation: self.\x0a\x09slides add: aSlide beforeIndex: index.",
messageSends: ["presentation:", "add:beforeIndex:"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "alertIt:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(self._doIt_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"alertIt:",{aString:aString},globals.Presentation)})},
args: ["aString"],
source: "alertIt: aString\x0a\x09window alert: (self doIt: aString)",
messageSends: ["alert:", "doIt:"],
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
source: "currentSlide\x0a\x09^ slides at: self cursor + 1",
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
selector: "doIt:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
function $Evaluator(){return globals.Evaluator||(typeof Evaluator=="undefined"?nil:Evaluator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Evaluator())._evaluate_for_(aString,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"doIt:",{aString:aString},globals.Presentation)})},
args: ["aString"],
source: "doIt: aString\x0a\x09^ Evaluator evaluate: aString for: self.",
messageSends: ["evaluate:for:"],
referencedClasses: ["Evaluator"]
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
selector: "generateTitleIfNeeded",
protocol: 'private',
fn: function (){
var self=this;
function $Slide(){return globals.Slide||(typeof Slide=="undefined"?nil:Slide)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@shouldGenerateTitle"];
if(smalltalk.assert($1)){
var titleSlide;
$2=_st($Slide())._new();
_st($2)._title_(self["@title"]);
_st($2)._shouldAppearInToc_(false);
_st($2)._addClass_("title");
_st($2)._addDiv_class_(self["@author"],"author");
$ctx1.sendIdx["addDiv:class:"]=1;
_st($2)._addDiv_class_(self["@organization"],"organization");
$ctx1.sendIdx["addDiv:class:"]=2;
$3=_st($2)._addDiv_class_(self["@presentedAt"],"presented-at");
titleSlide=$3;
titleSlide;
self._addSlide_beforeIndex_(titleSlide,self["@generatedTitleAt"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"generateTitleIfNeeded",{},globals.Presentation)})},
args: [],
source: "generateTitleIfNeeded\x0a\x09shouldGenerateTitle ifTrue: [\x0a\x09\x09| titleSlide |\x0a\x09\x09titleSlide := Slide new\x0a\x09\x09\x09title: title;\x0a\x09\x09\x09shouldAppearInToc: false;\x0a\x09\x09\x09addClass: 'title';\x0a\x09\x09\x09addDiv: author class: 'author';\x0a\x09\x09\x09addDiv: organization class: 'organization';\x0a\x09\x09\x09addDiv: presentedAt class: 'presented-at'.\x0a\x09\x09self addSlide: titleSlide beforeIndex: generatedTitleAt.\x0a\x09].",
messageSends: ["ifTrue:", "title:", "new", "shouldAppearInToc:", "addClass:", "addDiv:class:", "addSlide:beforeIndex:"],
referencedClasses: ["Slide"]
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "generateTocIfNeeded",
protocol: 'private',
fn: function (){
var self=this;
function $Slide(){return globals.Slide||(typeof Slide=="undefined"?nil:Slide)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@shouldGenerateToc"];
if(smalltalk.assert($1)){
var titles,tocSlide;
titles=[];
titles;
_st(self["@slides"])._do_((function(slide){
return smalltalk.withContext(function($ctx2) {
$2=_st(slide)._shouldAppearInToc();
if(smalltalk.assert($2)){
return _st(titles)._add_(_st(slide)._title());
};
}, function($ctx2) {$ctx2.fillBlock({slide:slide},$ctx1,2)})}));
$3=_st($Slide())._new();
_st($3)._title_(self["@tocTitle"]);
_st($3)._addClass_("toc");
_st($3)._shouldAppearInToc_(false);
$4=_st($3)._addOrderedList_(titles);
tocSlide=$4;
tocSlide;
self._addSlide_beforeIndex_(tocSlide,self["@generatedTocAt"]);
};
return self}, function($ctx1) {$ctx1.fill(self,"generateTocIfNeeded",{},globals.Presentation)})},
args: [],
source: "generateTocIfNeeded\x0a\x09shouldGenerateToc ifTrue: [\x0a\x09\x09| titles tocSlide |\x09\x0a\x09\x09titles := #().\x0a\x09\x09slides do: [ :slide |\x0a\x09\x09\x09slide shouldAppearInToc ifTrue: [titles add: slide title]].\x0a\x09\x09tocSlide := Slide new\x0a\x09\x09\x09title: tocTitle;\x0a\x09\x09\x09addClass: 'toc';\x0a\x09\x09\x09shouldAppearInToc: false;\x0a\x09\x09\x09addOrderedList: titles.\x0a\x09\x09self addSlide: tocSlide beforeIndex: generatedTocAt.\x0a\x09].",
messageSends: ["ifTrue:", "do:", "shouldAppearInToc", "add:", "title", "title:", "new", "addClass:", "shouldAppearInToc:", "addOrderedList:", "addSlide:beforeIndex:"],
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
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@slides"]=[];
self["@cursor"]=(0);
self["@tocTitle"]="Abstract";
self["@shouldGenerateTitle"]=true;
self["@shouldGenerateToc"]=true;
self["@generatedTitleAt"]=(1);
self["@generatedTocAt"]=(2);
_st(window)._addEventListener_do_("keypress",(function(event){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(event)._charCode()).__eq_eq((4));
if(smalltalk.assert($1)){
var selectedText;
selectedText=_st(_st(window)._getSelection())._toString();
selectedText;
$2=_st(selectedText)._isEmpty();
if(! smalltalk.assert($2)){
return self._alertIt_(selectedText);
};
};
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Presentation)})},
args: [],
source: "initialize\x0a\x09slides := #().\x0a\x09cursor := 0.\x0a\x09tocTitle := 'Abstract'.\x0a\x09shouldGenerateTitle := true.\x0a\x09shouldGenerateToc := true.\x0a\x09generatedTitleAt := 1.\x0a\x09generatedTocAt := 2.\x0a\x09\x0a\x09window addEventListener: 'keypress' do: [ :event |\x0a\x09\x09(event charCode == 4) ifTrue: [ \x22Ctrl+d\x22\x0a\x09\x09\x09| selectedText |\x0a\x09\x09\x09selectedText := window getSelection toString.\x0a\x09\x09\x09(selectedText isEmpty) ifFalse: [\x0a\x09\x09\x09\x09self alertIt: selectedText]]].",
messageSends: ["addEventListener:do:", "ifTrue:", "==", "charCode", "toString", "getSelection", "ifFalse:", "isEmpty", "alertIt:"],
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
source: "moveNext\x0a\x09(self hasNext)\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09(cursor + 1 < slides size)\x0a\x09\x09\x09\x09ifTrue: [ cursor := cursor + 1 ]\x0a\x09\x09\x09\x09ifFalse: [ cursor := 0 ]]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09cursor := 0 ].",
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
source: "movePrev\x0a\x09(0 < cursor)\x0a\x09\x09ifTrue: [ cursor := cursor - 1 ] \x0a\x09\x09ifFalse: [ cursor := slides size - 1 ]",
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
source: "moveTo: aNumber\x0a\x09cursor := aNumber",
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
selector: "printIt:",
protocol: 'evaluating',
fn: function (aString){
var self=this;
var ret;
function $Transcript(){return globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
ret=self._doIt_(aString);
_st($Transcript())._show_(ret);
_st(_st(window)._console())._log_(ret);
return self}, function($ctx1) {$ctx1.fill(self,"printIt:",{aString:aString,ret:ret},globals.Presentation)})},
args: ["aString"],
source: "printIt: aString\x0a\x09| ret |\x0a\x09ret := self doIt: aString.\x0a\x09Transcript show: ret.\x0a\x09window console log: ret.",
messageSends: ["doIt:", "show:", "log:", "console"],
referencedClasses: ["Transcript"]
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
selector: "showCurrentSlide",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentSlide())._show();
return self}, function($ctx1) {$ctx1.fill(self,"showCurrentSlide",{},globals.Presentation)})},
args: [],
source: "showCurrentSlide\x0a\x09self currentSlide show.",
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
self._generateTitleIfNeeded();
self._generateTocIfNeeded();
self["@widget"]=_st(_st($PresentationWidget())._new())._model_(self);
_st(self["@widget"])._renderOn_(_st($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.Presentation)})},
args: [],
source: "start\x0a\x09self generateTitleIfNeeded.\x0a\x09self generateTocIfNeeded.\x0a\x09\x0a\x09widget := PresentationWidget new model: self.\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery).",
messageSends: ["generateTitleIfNeeded", "generateTocIfNeeded", "model:", "new", "renderOn:", "onJQuery:", "asJQuery"],
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
var $1,$2,$3,$5,$6,$4,$7,$9,$10,$8,$11,$12,$13,$14,$15;
$1=_st($Presentation())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._title_("Amber");
$ctx1.sendIdx["title:"]=1;
_st($1)._author_("あんどうやすし");
_st($1)._organization_("株式会社ノハナ");
$2=_st($1)._presentedAt_("2014-06-08");
presentation=$2;
$3=presentation;
$5=_st($Slide())._new();
$ctx1.sendIdx["new"]=2;
_st($5)._title_("What's Amber?");
$ctx1.sendIdx["title:"]=2;
_st($5)._addTextBr_("Amber");
$ctx1.sendIdx["addTextBr:"]=1;
_st($5)._addTextBr_("= Jtalk");
$ctx1.sendIdx["addTextBr:"]=2;
$6=_st($5)._addText_("= \x22J\x22avaScript Small\x22talk\x22");
$ctx1.sendIdx["addText:"]=1;
$4=$6;
_st($3)._addSlide_($4);
$ctx1.sendIdx["addSlide:"]=1;
$7=presentation;
$9=_st($Slide())._new();
$ctx1.sendIdx["new"]=3;
_st($9)._title_("What's Smalltalk?");
$ctx1.sendIdx["title:"]=3;
_st($9)._addTextBr_("Smalltalk");
$10=_st($9)._addText_("= Language + Libraries + IDE");
$ctx1.sendIdx["addText:"]=2;
$8=$10;
_st($7)._addSlide_($8);
$ctx1.sendIdx["addSlide:"]=2;
$11=_st($Slide())._new();
$ctx1.sendIdx["new"]=4;
_st($11)._title_("次のページ");
$ctx1.sendIdx["title:"]=4;
$12=_st($11)._addText_("説明");
$ctx1.sendIdx["addText:"]=3;
slide=$12;
_st(presentation)._addSlide_(slide);
$ctx1.sendIdx["addSlide:"]=3;
$13=_st($Slide())._new();
_st($13)._title_("最後のページ");
$14=_st($13)._addText_("まとめ");
slide=$14;
_st(presentation)._addSlide_(slide);
$15=presentation;
return $15;
}, function($ctx1) {$ctx1.fill(self,"tenka1AltJs2014",{presentation:presentation,slide:slide},globals.Presentation.klass)})},
args: [],
source: "tenka1AltJs2014\x0a\x09\x22Build a presentation for tenka 1 altJS conf\x22\x0a\x09| presentation slide |\x0a\x09presentation := Presentation new\x0a\x09\x09title: 'Amber';\x0a\x09\x09author: 'あんどうやすし';\x0a\x09\x09organization: '株式会社ノハナ';\x0a\x09\x09presentedAt: '2014-06-08'.\x0a\x09presentation.\x0a\x09\x0a\x09presentation addSlide: (Slide new\x0a\x09\x09title: 'What''s Amber?';\x0a\x09\x09addTextBr: 'Amber';\x0a\x09\x09addTextBr: '= Jtalk';\x0a\x09\x09addText: '= \x22J\x22avaScript Small\x22talk\x22').\x0a\x09\x0a\x09presentation addSlide: (Slide new\x0a\x09\x09title: 'What''s Smalltalk?';\x0a\x09\x09addTextBr: 'Smalltalk';\x0a\x09\x09addText: '= Language + Libraries + IDE'). \x0a\x09\x09\x0a\x09slide := Slide new\x0a\x09\x09title: '次のページ';\x0a\x09\x09addText: '説明'.\x0a\x09presentation addSlide: slide.\x0a\x09\x0a\x09slide := Slide new\x0a\x09\x09title: '最後のページ';\x0a\x09\x09addText: 'まとめ'.\x0a\x09presentation addSlide: slide.\x0a\x09\x0a\x09^ presentation",
messageSends: ["title:", "new", "author:", "organization:", "presentedAt:", "addSlide:", "addTextBr:", "addText:"],
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
self["@slideContainer"]=_st(html)._div();
_st(_st(self["@model"])._currentSlide())._show();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PresentationWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09PagenatorWidget new maxPage: model slides size;\x0a\x09\x09target: model;\x0a\x09\x09renderOn: html.\x0a\x09\x09\x0a\x09slideContainer := html div.\x0a\x22\x09slideContainer := html div class: 'slide'.\x22\x0a\x09model currentSlide show.",
messageSends: ["maxPage:", "new", "size", "slides", "target:", "renderOn:", "div", "show", "currentSlide"],
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



smalltalk.addClass('Slide', globals.Object, ['widget', 'presentation', 'title', 'contents', 'shouldAppearInToc', 'classes'], 'Slide');
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
selector: "addBold:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(aString);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addBold:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addBold: aString\x0a\x09self add: [ :html | html with: aString. ]",
messageSends: ["add:", "with:"],
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
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._br();
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addBr",{},globals.Slide)})},
args: [],
source: "addBr\x0a\x09self add: [ :html | html br. ]",
messageSends: ["add:", "br"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addClass:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@classes"])._add_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"addClass:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addClass: aString\x0a\x09classes add: aString",
messageSends: ["add:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addDiv:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._div())._with_(aString);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addDiv:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addDiv: aString\x0a\x09self add: [ :html | html div with: aString. ]",
messageSends: ["add:", "with:", "div"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addDiv:class:",
protocol: 'actions',
fn: function (aString,class_){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
_st($1)._class_(class_);
$2=_st($1)._with_(aString);
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addDiv:class:",{aString:aString,class_:class_},globals.Slide)})},
args: ["aString", "class"],
source: "addDiv: aString class: class\x0a\x09self add: [ :html | html div class: class; with: aString. ]",
messageSends: ["add:", "class:", "div", "with:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addList:",
protocol: 'actions',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._ul())._with_((function(ulHtml){
return smalltalk.withContext(function($ctx3) {
return _st(anArray)._do_((function(item){
return smalltalk.withContext(function($ctx4) {
return _st(_st(ulHtml)._li())._with_(item);
}, function($ctx4) {$ctx4.fillBlock({item:item},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({ulHtml:ulHtml},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addList:",{anArray:anArray},globals.Slide)})},
args: ["anArray"],
source: "addList: anArray\x0a\x09self add: [ :html |\x0a\x09\x09html ul with: [ :ulHtml |\x0a\x09\x09\x09anArray do: [ :item |\x0a\x09\x09\x09\x09ulHtml li with: item]]]",
messageSends: ["add:", "with:", "ul", "do:", "li"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addOrderedList:",
protocol: 'actions',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._ol())._with_((function(ulHtml){
return smalltalk.withContext(function($ctx3) {
return _st(anArray)._do_((function(item){
return smalltalk.withContext(function($ctx4) {
return _st(_st(ulHtml)._li())._with_(item);
}, function($ctx4) {$ctx4.fillBlock({item:item},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({ulHtml:ulHtml},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addOrderedList:",{anArray:anArray},globals.Slide)})},
args: ["anArray"],
source: "addOrderedList: anArray\x0a\x09self add: [ :html |\x0a\x09\x09html ol with: [ :ulHtml |\x0a\x09\x09\x09anArray do: [ :item |\x0a\x09\x09\x09\x09ulHtml li with: item]]]",
messageSends: ["add:", "with:", "ol", "do:", "li"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addSpan:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._span())._with_(aString);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addSpan:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addSpan: aString\x0a\x09self add: [ :html | html span with: aString. ]",
messageSends: ["add:", "with:", "span"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addSpan:class:",
protocol: 'actions',
fn: function (aString,class_){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._span();
_st($1)._class_(class_);
$2=_st($1)._with_(aString);
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addSpan:class:",{aString:aString,class_:class_},globals.Slide)})},
args: ["aString", "class"],
source: "addSpan: aString class: class\x0a\x09self add: [ :html | html span class: class; with: aString. ]",
messageSends: ["add:", "class:", "span", "with:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addText:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(aString);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addText:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addText: aString\x0a\x09self add: [ :html | html with: aString. ]",
messageSends: ["add:", "with:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "addTextBr:",
protocol: 'actions',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._add_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(aString);
$1=_st(html)._br();
return $1;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addTextBr:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "addTextBr: aString\x0a\x09self add: [ :html | html with: aString; br. ]",
messageSends: ["add:", "with:", "br"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "classes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@classes"];
return $1;
},
args: [],
source: "classes\x0a\x09^ classes",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "classes:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@classes"]=anObject;
return self},
args: ["anObject"],
source: "classes: anObject\x0a\x09classes := anObject",
messageSends: [],
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
selector: "contents:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@contents"]=anObject;
return self},
args: ["anObject"],
source: "contents: anObject\x0a\x09contents := anObject",
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
self["@classes"]=["slide"];
self["@contents"]=[];
self["@shouldAppearInToc"]=true;
return self},
args: [],
source: "initialize\x0a\x09classes := #('slide').\x0a\x09contents := #().\x0a\x09shouldAppearInToc := true.",
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
selector: "removeClass:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@classes"])._remove_ifAbsent_(aString,(function(){
}));
return self}, function($ctx1) {$ctx1.fill(self,"removeClass:",{aString:aString},globals.Slide)})},
args: ["aString"],
source: "removeClass: aString\x0a\x09classes remove: aString ifAbsent: []",
messageSends: ["remove:ifAbsent:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldAppearInToc",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@shouldAppearInToc"];
return $1;
},
args: [],
source: "shouldAppearInToc\x0a\x09^ shouldAppearInToc",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldAppearInToc:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@shouldAppearInToc"]=anObject;
return self},
args: ["anObject"],
source: "shouldAppearInToc: anObject\x0a\x09shouldAppearInToc := anObject",
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
var container;
function $SlideWidget(){return globals.SlideWidget||(typeof SlideWidget=="undefined"?nil:SlideWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
container=_st(_st(self["@presentation"])._widget())._slideContainer();
_st(container)._class_(_st(self["@classes"])._join_(" "));
$1=_st($SlideWidget())._new();
_st($1)._model_(self);
$2=_st($1)._container_(container);
self["@widget"]=$2;
_st(self["@widget"])._renderOn_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"show",{container:container},globals.Slide)})},
args: [],
source: "show\x0a\x09| container |\x0a\x09container := presentation widget slideContainer.\x0a\x09container class: (classes join: ' ').\x0a\x09widget := SlideWidget new \x0a\x09\x09model: self; \x0a\x09\x09container: container.\x0a\x09widget renderOn: nil.",
messageSends: ["slideContainer", "widget", "class:", "join:", "model:", "new", "container:", "renderOn:"],
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
source: "renderOn: html\x0a\x09| bodyContainer |\x0a\x09container contents: [ :containerHtml |\x0a\x09\x09containerHtml with: (containerHtml h1 with: model title).\x0a\x09\x09containerHtml with: (containerHtml div class: 'body'; contents: [ :bodyHtml |\x0a\x09\x09\x09model contents do: [ :content |\x0a\x09\x09\x09\x09content value: bodyHtml.\x0a\x09\x09\x09]]\x0a\x09\x09)].",
messageSends: ["contents:", "with:", "h1", "title", "class:", "div", "do:", "contents", "value:"],
referencedClasses: []
}),
globals.SlideWidget);



smalltalk.addClass('Timer', globals.Object, ['widget'], 'Slide');

});
