(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.arkan = function() {
	this.initialize(img.arkan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2592,1574);


(lib.basee = function() {
	this.initialize(img.basee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,3300);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2702,1462);


(lib.eyes1 = function() {
	this.initialize(img.eyes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,543,145);


(lib.eyes2 = function() {
	this.initialize(img.eyes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,689,269);


(lib.eyes3 = function() {
	this.initialize(img.eyes3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,756,337);


(lib.eyes4 = function() {
	this.initialize(img.eyes4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,278);


(lib.eyes5 = function() {
	this.initialize(img.eyes5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1214,406);


(lib.eyes6 = function() {
	this.initialize(img.eyes6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,297);


(lib.eyes7 = function() {
	this.initialize(img.eyes7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,920,390);


(lib.hair1 = function() {
	this.initialize(img.hair1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,871,1225);


(lib.hair2 = function() {
	this.initialize(img.hair2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,895,694);


(lib.hair3 = function() {
	this.initialize(img.hair3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2138,2415);


(lib.hair4 = function() {
	this.initialize(img.hair4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1252,991);


(lib.hair5 = function() {
	this.initialize(img.hair5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1861,1610);


(lib.hair6 = function() {
	this.initialize(img.hair6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1377,1208);


(lib.IMG_3176 = function() {
	this.initialize(img.IMG_3176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2859,990);


(lib.IMG_3180 = function() {
	this.initialize(img.IMG_3180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1719,565);


(lib.lips1 = function() {
	this.initialize(img.lips1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,209);


(lib.lips2 = function() {
	this.initialize(img.lips2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,169);


(lib.lips3 = function() {
	this.initialize(img.lips3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,306);


(lib.lips4 = function() {
	this.initialize(img.lips4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,382);


(lib.lips5 = function() {
	this.initialize(img.lips5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,352);


(lib.lips6 = function() {
	this.initialize(img.lips6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,286);


(lib.lips7 = function() {
	this.initialize(img.lips7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,545,301);


(lib.necklace = function() {
	this.initialize(img.necklace);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1512,1010);


(lib.nose1 = function() {
	this.initialize(img.nose1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,258);


(lib.nose2 = function() {
	this.initialize(img.nose2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,318);


(lib.nose3 = function() {
	this.initialize(img.nose3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,503);


(lib.nose4 = function() {
	this.initialize(img.nose4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,546);


(lib.nose5 = function() {
	this.initialize(img.nose5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,309);


(lib.nose7 = function() {
	this.initialize(img.nose7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1149,1493);


(lib.rings = function() {
	this.initialize(img.rings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,862,210);


(lib.tat2 = function() {
	this.initialize(img.tat2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,462);


(lib.tat3 = function() {
	this.initialize(img.tat3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1539,1356);


(lib.tat4 = function() {
	this.initialize(img.tat4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,1356);


(lib.tattoo1 = function() {
	this.initialize(img.tattoo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,488);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.necklace();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-17.9,0.039,0.036);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-29.5,-17.9,59,35.9), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tat4();
	this.instance.parent = this;
	this.instance.setTransform(-22.6,-26.4,0.039,0.039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-22.6,-26.4,45.2,52.9), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rings();
	this.instance.parent = this;
	this.instance.setTransform(-54.2,-13.2,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-54.2,-13.2,108.5,26.4), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tat2();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-19.6,0.085,0.085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-26.5,-19.6,53.1,39.3), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tat3();
	this.instance.parent = this;
	this.instance.setTransform(-21.9,-19.3,0.028,0.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-21.9,-19.3,43.8,38.6), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tattoo1();
	this.instance.parent = this;
	this.instance.setTransform(-30.4,-28.9,0.119,0.119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-30.4,-28.9,60.9,58), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips7();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-12.4,0.083,0.083);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-22.5,-12.4,45.1,24.9), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips5();
	this.instance.parent = this;
	this.instance.setTransform(-20,-10.6,0.061,0.061);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-20,-10.6,40.2,21.4), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips4();
	this.instance.parent = this;
	this.instance.setTransform(-16.3,-11.1,0.058,0.058);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-16.3,-11.1,32.7,22.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips6();
	this.instance.parent = this;
	this.instance.setTransform(-19,-12,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-19,-12,38.1,24.2), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips3();
	this.instance.parent = this;
	this.instance.setTransform(-19.8,-11.7,0.076,0.076);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-19.8,-11.7,39.7,23.4), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips2();
	this.instance.parent = this;
	this.instance.setTransform(-19,-9.1,0.109,0.109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-19,-9.1,38,18.4), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lips1();
	this.instance.parent = this;
	this.instance.setTransform(-17.8,-12.1,0.105,0.116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-17.8,-12.1,35.8,24.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nose7();
	this.instance.parent = this;
	this.instance.setTransform(-9.9,-12.8,0.017,0.017);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-9.9,-12.8,19.8,25.7), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nose5();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-14.3,0.087,0.093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-13.3,-14.3,26.7,28.8), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nose4();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-14.5,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-10.5,-14.5,21.2,29.1), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nose3();
	this.instance.parent = this;
	this.instance.setTransform(-12.9,-16.2,0.065,0.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-12.9,-16.2,25.9,32.5), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nose2();
	this.instance.parent = this;
	this.instance.setTransform(-10.6,-14.3,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-10.6,-14.3,21.3,28.8), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nose1();
	this.instance.parent = this;
	this.instance.setTransform(-9,-12.3,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-9,-12.3,18,24.7), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes7();
	this.instance.parent = this;
	this.instance.setTransform(-31.8,-13.5,0.069,0.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-31.8,-13.5,63.7,27), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes6();
	this.instance.parent = this;
	this.instance.setTransform(-29.9,-10.6,0.08,0.072);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-29.9,-10.6,59.9,21.3), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes5();
	this.instance.parent = this;
	this.instance.setTransform(-28,-9.3,0.046,0.046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-28,-9.3,56.1,18.8), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes4();
	this.instance.parent = this;
	this.instance.setTransform(-29.1,-11.2,0.081,0.081);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-29.1,-11.2,58.3,22.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes3();
	this.instance.parent = this;
	this.instance.setTransform(-30.4,-13.5,0.08,0.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-30.4,-13.5,60.8,27.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes2();
	this.instance.parent = this;
	this.instance.setTransform(-29.4,-10.5,0.085,0.078);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-29.4,-10.5,58.9,21.1), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyes1();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-7.8,0.109,0.109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-29.5,-7.8,59,15.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair5();
	this.instance.parent = this;
	this.instance.setTransform(-48.1,-33.6,0.052,0.042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-48.1,-33.6,96.2,67.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair3();
	this.instance.parent = this;
	this.instance.setTransform(-87,-83.1,0.081,0.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-87,-83.1,174.1,166.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair6();
	this.instance.parent = this;
	this.instance.setTransform(-43.1,-35.9,0.063,0.06);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-43.1,-35.9,86.3,72), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair4();
	this.instance.parent = this;
	this.instance.setTransform(-44.4,-33.5,0.071,0.068);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-44.4,-33.5,88.9,67.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair2();
	this.instance.parent = this;
	this.instance.setTransform(-38,-27.5,0.085,0.079);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-38,-27.5,76.1,55.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hair1();
	this.instance.parent = this;
	this.instance.setTransform(-45.4,-66.5,0.104,0.109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-45.4,-66.5,90.8,133), null);


(lib.descriptionbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG_3176();
	this.instance.parent = this;
	this.instance.setTransform(-11,-4,0.039,0.039);

	this.instance_1 = new lib.c();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,-15,0.041,0.041);

	this.instance_2 = new lib.arkan();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-10,0.034,0.038);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-4,112.8,39.1);


(lib.tat4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_29.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_29);
		//
		//function fl_ClickToDrag_29(event:MouseEvent):void
		//{
		//	movieClip_29.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_29);
		//
		//function fl_ReleaseToDrop_29(event:MouseEvent):void
		//{
		//	movieClip_29.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_29 = new lib.Symbol29();
	this.movieClip_29.parent = this;
	this.movieClip_29.setTransform(26.6,19.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_29).wait(1));

}).prototype = getMCSymbolPrototype(lib.tat4_1, new cjs.Rectangle(0,0,53.1,39.3), null);


(lib.tat3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_27.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_27);
		//
		//function fl_ClickToDrag_27(event:MouseEvent):void
		//{
		//	movieClip_27.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_27);
		//
		//function fl_ReleaseToDrop_27(event:MouseEvent):void
		//{
		//	movieClip_27.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_27 = new lib.Symbol27();
	this.movieClip_27.parent = this;
	this.movieClip_27.setTransform(30.5,29);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_27).wait(1));

}).prototype = getMCSymbolPrototype(lib.tat3_1, new cjs.Rectangle(0,0,60.9,58), null);


(lib.tat2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_28.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_28);
		//
		//function fl_ClickToDrag_28(event:MouseEvent):void
		//{
		//	movieClip_28.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_28);
		//
		//function fl_ReleaseToDrop_28(event:MouseEvent):void
		//{
		//	movieClip_28.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_28 = new lib.Symbol28();
	this.movieClip_28.parent = this;
	this.movieClip_28.setTransform(21.9,19.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_28).wait(1));

}).prototype = getMCSymbolPrototype(lib.tat2_1, new cjs.Rectangle(0,0,43.8,38.6), null);


(lib.tat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_31.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_31);
		//
		//function fl_ClickToDrag_31(event:MouseEvent):void
		//{
		//	movieClip_31.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_31);
		//
		//function fl_ReleaseToDrop_31(event:MouseEvent):void
		//{
		//	movieClip_31.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_31 = new lib.Symbol31();
	this.movieClip_31.parent = this;
	this.movieClip_31.setTransform(22.6,26.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_31).wait(1));

}).prototype = getMCSymbolPrototype(lib.tat1, new cjs.Rectangle(0,0,45.2,52.9), null);


(lib.puka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_32.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_32);
		//
		//function fl_ClickToDrag_32(event:MouseEvent):void
		//{
		//	movieClip_32.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_32);
		//
		//function fl_ReleaseToDrop_32(event:MouseEvent):void
		//{
		//	movieClip_32.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_32 = new lib.Symbol32();
	this.movieClip_32.parent = this;
	this.movieClip_32.setTransform(29.5,18);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_32).wait(1));

}).prototype = getMCSymbolPrototype(lib.puka, new cjs.Rectangle(0,0,59,35.9), null);


(lib.nose6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_19.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_19);
		//
		//function fl_ClickToDrag_19(event:MouseEvent):void
		//{
		//	movieClip_19.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_19);
		//
		//function fl_ReleaseToDrop_19(event:MouseEvent):void
		//{
		//	movieClip_19.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_19 = new lib.Symbol19();
	this.movieClip_19.parent = this;
	this.movieClip_19.setTransform(9.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_19).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose6, new cjs.Rectangle(0,0,19.8,25.7), null);


(lib.nose5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_18.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_18);
		//
		//function fl_ClickToDrag_18(event:MouseEvent):void
		//{
		//	movieClip_18.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_18);
		//
		//function fl_ReleaseToDrop_18(event:MouseEvent):void
		//{
		//	movieClip_18.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_18 = new lib.Symbol18();
	this.movieClip_18.parent = this;
	this.movieClip_18.setTransform(13.4,14.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose5_1, new cjs.Rectangle(0,0,26.7,28.8), null);


(lib.nose4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_17.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_17);
		//
		//function fl_ClickToDrag_17(event:MouseEvent):void
		//{
		//	movieClip_17.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_17);
		//
		//function fl_ReleaseToDrop_17(event:MouseEvent):void
		//{
		//	movieClip_17.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_17 = new lib.Symbol17();
	this.movieClip_17.parent = this;
	this.movieClip_17.setTransform(10.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_17).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose4_1, new cjs.Rectangle(0,0,21.2,29.1), null);


(lib.nose3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_16.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_16);
		//
		//function fl_ClickToDrag_16(event:MouseEvent):void
		//{
		//	movieClip_16.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_16);
		//
		//function fl_ReleaseToDrop_16(event:MouseEvent):void
		//{
		//	movieClip_16.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_16 = new lib.Symbol16();
	this.movieClip_16.parent = this;
	this.movieClip_16.setTransform(13,16.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose3_1, new cjs.Rectangle(0,0,25.9,32.5), null);


(lib.nose2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_15.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_15);
		//
		//function fl_ClickToDrag_15(event:MouseEvent):void
		//{
		//	movieClip_15.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_15);
		//
		//function fl_ReleaseToDrop_15(event:MouseEvent):void
		//{
		//	movieClip_15.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_15 = new lib.Symbol15();
	this.movieClip_15.parent = this;
	this.movieClip_15.setTransform(10.6,14.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose2_1, new cjs.Rectangle(0,0,21.3,28.8), null);


(lib.nose1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_14.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_14);
		//
		//function fl_ClickToDrag_14(event:MouseEvent):void
		//{
		//	movieClip_14.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_14);
		//
		//function fl_ReleaseToDrop_14(event:MouseEvent):void
		//{
		//	movieClip_14.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_14 = new lib.Symbol14();
	this.movieClip_14.parent = this;
	this.movieClip_14.setTransform(9,12.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose1_1, new cjs.Rectangle(0,0,18,24.7), null);


(lib.nips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_30.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_30);
		//
		//function fl_ClickToDrag_30(event:MouseEvent):void
		//{
		//	movieClip_30.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_30);
		//
		//function fl_ReleaseToDrop_30(event:MouseEvent):void
		//{
		//	movieClip_30.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.nips = new lib.Symbol30();
	this.nips.parent = this;
	this.nips.setTransform(54.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.nips).wait(1));

}).prototype = getMCSymbolPrototype(lib.nips, new cjs.Rectangle(0,0,108.5,26.4), null);


(lib.lip7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_26.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_26);
		//
		//function fl_ClickToDrag_26(event:MouseEvent):void
		//{
		//	movieClip_26.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_26);
		//
		//function fl_ReleaseToDrop_26(event:MouseEvent):void
		//{
		//	movieClip_26.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_26 = new lib.Symbol26();
	this.movieClip_26.parent = this;
	this.movieClip_26.setTransform(22.6,12.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_26).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip7, new cjs.Rectangle(0,0,45.1,24.9), null);


(lib.lip6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_25.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_25);
		//
		//function fl_ClickToDrag_25(event:MouseEvent):void
		//{
		//	movieClip_25.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_25);
		//
		//function fl_ReleaseToDrop_25(event:MouseEvent):void
		//{
		//	movieClip_25.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_25 = new lib.Symbol25();
	this.movieClip_25.parent = this;
	this.movieClip_25.setTransform(20.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_25).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip6, new cjs.Rectangle(0,0,40.2,21.4), null);


(lib.lip5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_24.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_24);
		//
		//function fl_ClickToDrag_24(event:MouseEvent):void
		//{
		//	movieClip_24.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_24);
		//
		//function fl_ReleaseToDrop_24(event:MouseEvent):void
		//{
		//	movieClip_24.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_24 = new lib.Symbol24();
	this.movieClip_24.parent = this;
	this.movieClip_24.setTransform(16.3,11.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_24).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip5, new cjs.Rectangle(0,0,32.7,22.3), null);


(lib.lip4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_23.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_23);
		//
		//function fl_ClickToDrag_23(event:MouseEvent):void
		//{
		//	movieClip_23.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_23);
		//
		//function fl_ReleaseToDrop_23(event:MouseEvent):void
		//{
		//	movieClip_23.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_23 = new lib.Symbol23();
	this.movieClip_23.parent = this;
	this.movieClip_23.setTransform(19.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_23).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip4, new cjs.Rectangle(0,0,38.1,24.2), null);


(lib.lip3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_22.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_22);
		//
		//function fl_ClickToDrag_22(event:MouseEvent):void
		//{
		//	movieClip_22.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_22);
		//
		//function fl_ReleaseToDrop_22(event:MouseEvent):void
		//{
		//	movieClip_22.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_22 = new lib.Symbol22();
	this.movieClip_22.parent = this;
	this.movieClip_22.setTransform(19.9,11.7);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_22).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip3, new cjs.Rectangle(0,0,39.7,23.4), null);


(lib.lip2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_21.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_21);
		//
		//function fl_ClickToDrag_21(event:MouseEvent):void
		//{
		//	movieClip_21.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_21);
		//
		//function fl_ReleaseToDrop_21(event:MouseEvent):void
		//{
		//	movieClip_21.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_21 = new lib.Symbol21();
	this.movieClip_21.parent = this;
	this.movieClip_21.setTransform(19,9.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_21).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip2, new cjs.Rectangle(0,0,38,18.4), null);


(lib.lip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_20.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_20);
		//
		//function fl_ClickToDrag_20(event:MouseEvent):void
		//{
		//	movieClip_20.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_20);
		//
		//function fl_ReleaseToDrop_20(event:MouseEvent):void
		//{
		//	movieClip_20.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_20 = new lib.Symbol20();
	this.movieClip_20.parent = this;
	this.movieClip_20.setTransform(17.9,12.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_20).wait(1));

}).prototype = getMCSymbolPrototype(lib.lip1, new cjs.Rectangle(0,0,35.8,24.3), null);


(lib.hairnumber6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_6.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_6);
		//
		//function fl_ClickToDrag_6(event:MouseEvent):void
		//{
		//	movieClip_6.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_6);
		//
		//function fl_ReleaseToDrop_6(event:MouseEvent):void
		//{
		//	movieClip_6.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_6 = new lib.Symbol6();
	this.movieClip_6.parent = this;
	this.movieClip_6.setTransform(48.1,33.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.hairnumber6, new cjs.Rectangle(0,0,96.2,67.2), null);


(lib.hairnumber5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_5.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_5);
		//
		//function fl_ClickToDrag_5(event:MouseEvent):void
		//{
		//	movieClip_5.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_5);
		//
		//function fl_ReleaseToDrop_5(event:MouseEvent):void
		//{
		//	movieClip_5.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_5 = new lib.Symbol5();
	this.movieClip_5.parent = this;
	this.movieClip_5.setTransform(87.1,83.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.hairnumber5, new cjs.Rectangle(0,0,174.1,166.3), null);


(lib.hairnumber4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_4.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_4);
		//
		//function fl_ClickToDrag_4(event:MouseEvent):void
		//{
		//	movieClip_4.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_4);
		//
		//function fl_ReleaseToDrop_4(event:MouseEvent):void
		//{
		//	movieClip_4.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_4 = new lib.Symbol4();
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(43.1,36);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.hairnumber4, new cjs.Rectangle(0,0,86.3,72), null);


(lib.hairnumber3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_3.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_3);
		//
		//function fl_ClickToDrag_3(event:MouseEvent):void
		//{
		//	movieClip_3.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_3);
		//
		//function fl_ReleaseToDrop_3(event:MouseEvent):void
		//{
		//	movieClip_3.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_3 = new lib.Symbol3();
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(44.5,33.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.hairnumber3, new cjs.Rectangle(0,0,88.9,67.1), null);


(lib.hairnumber2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_2.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_2);
		//
		//function fl_ClickToDrag_2(event:MouseEvent):void
		//{
		//	movieClip_2.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_2);
		//
		//function fl_ReleaseToDrop_2(event:MouseEvent):void
		//{
		//	movieClip_2.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(38,27.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.hairnumber2, new cjs.Rectangle(0,0,76.1,55.1), null);


(lib.hairnumber1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_1.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag);
		//
		//function fl_ClickToDrag(event:MouseEvent):void
		//{
		//	movieClip_1.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop);
		//
		//function fl_ReleaseToDrop(event:MouseEvent):void
		//{
		//	movieClip_1.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(45.4,66.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.hairnumber1, new cjs.Rectangle(0,0,90.8,133), null);


(lib.eyes7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_13.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_13);
		//
		//function fl_ClickToDrag_13(event:MouseEvent):void
		//{
		//	movieClip_13.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_13);
		//
		//function fl_ReleaseToDrop_13(event:MouseEvent):void
		//{
		//	movieClip_13.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_13 = new lib.Symbol13();
	this.movieClip_13.parent = this;
	this.movieClip_13.setTransform(31.9,13.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes7_1, new cjs.Rectangle(0,0,63.7,27), null);


(lib.eyes6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_12.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_12);
		//
		//function fl_ClickToDrag_12(event:MouseEvent):void
		//{
		//	movieClip_12.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_12);
		//
		//function fl_ReleaseToDrop_12(event:MouseEvent):void
		//{
		//	movieClip_12.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_12 = new lib.Symbol12();
	this.movieClip_12.parent = this;
	this.movieClip_12.setTransform(30,10.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes6_1, new cjs.Rectangle(0,0,59.9,21.3), null);


(lib.eyes5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_11.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_11);
		//
		//function fl_ClickToDrag_11(event:MouseEvent):void
		//{
		//	movieClip_11.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_11);
		//
		//function fl_ReleaseToDrop_11(event:MouseEvent):void
		//{
		//	movieClip_11.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_11 = new lib.Symbol11();
	this.movieClip_11.parent = this;
	this.movieClip_11.setTransform(28.1,9.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes5_1, new cjs.Rectangle(0,0,56.1,18.8), null);


(lib.eyes4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_10.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_10);
		//
		//function fl_ClickToDrag_10(event:MouseEvent):void
		//{
		//	movieClip_10.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_10);
		//
		//function fl_ReleaseToDrop_10(event:MouseEvent):void
		//{
		//	movieClip_10.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_10 = new lib.Symbol10();
	this.movieClip_10.parent = this;
	this.movieClip_10.setTransform(29.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes4_1, new cjs.Rectangle(0,0,58.3,22.5), null);


(lib.eyes3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_9.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_9);
		//
		//function fl_ClickToDrag_9(event:MouseEvent):void
		//{
		//	movieClip_9.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_9);
		//
		//function fl_ReleaseToDrop_9(event:MouseEvent):void
		//{
		//	movieClip_9.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_9 = new lib.Symbol9();
	this.movieClip_9.parent = this;
	this.movieClip_9.setTransform(30.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes3_1, new cjs.Rectangle(0,0,60.8,27.1), null);


(lib.eyes2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_8.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_8);
		//
		//function fl_ClickToDrag_8(event:MouseEvent):void
		//{
		//	movieClip_8.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_8);
		//
		//function fl_ReleaseToDrop_8(event:MouseEvent):void
		//{
		//	movieClip_8.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_8 = new lib.Symbol8();
	this.movieClip_8.parent = this;
	this.movieClip_8.setTransform(29.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes2_1, new cjs.Rectangle(0,0,58.9,21.1), null);


(lib.eyes1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Drag and Drop
		//Makes the specified symbol instance moveable with drag and drop.
		//*/
		//
		//movieClip_7.addEventListener(MouseEvent.MOUSE_DOWN, fl_ClickToDrag_7);
		//
		//function fl_ClickToDrag_7(event:MouseEvent):void
		//{
		//	movieClip_7.startDrag();
		//}
		//
		//stage.addEventListener(MouseEvent.MOUSE_UP, fl_ReleaseToDrop_7);
		//
		//function fl_ReleaseToDrop_7(event:MouseEvent):void
		//{
		//	movieClip_7.stopDrag();
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_7 = new lib.Symbol7();
	this.movieClip_7.parent = this;
	this.movieClip_7.setTransform(29.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes1_1, new cjs.Rectangle(0,0,59,15.8), null);


// stage content:
(lib.gameinhtml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		this.nips.on("pressmove", moveNIPS) ;
		
		function moveNIPS (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.tat3.on("pressmove", moveNIPS) ;
		
		function moveTAT3 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.tat4.on("pressmove", moveNIPS) ;
		
		function moveTat4 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.puka.on("pressmove", moveNIPS) ;
		
		function movePuka (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.tat2.on("pressmove", moveNIPS) ;
		
		function moveTat2 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.tat1.on("pressmove", moveNIPS) ;
		
		function moveTat1 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		this.lip1.on("pressmove", moveNIPS) ;
		
		function moveLip1 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.lip2.on("pressmove", moveNIPS) ;
		
		function moveLip2 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.lip3.on("pressmove", moveNIPS) ;
		
		function moveLip3 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.lip4.on("pressmove", moveNIPS) ;
		
		function moveLip4 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.lip5.on("pressmove", moveNIPS) ;
		
		function moveLip5 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.lip6.on("pressmove", moveNIPS) ;
		
		function moveLip6 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.lip7.on("pressmove", moveNIPS) ;
		
		function moveLip7 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		this.eye1.on("pressmove", moveNIPS) ;
		
		function moveEye1 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.eye2.on("pressmove", moveNIPS) ;
		
		function moveEye2 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.eye3.on("pressmove", moveNIPS) ;
		
		function moveEye3 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.eye4.on("pressmove", moveNIPS) ;
		
		function moveEye4 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.eye5.on("pressmove", moveNIPS) ;
		
		function moveEye5 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.eye6.on("pressmove", moveNIPS) ;
		
		function moveEye6 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.eye7.on("pressmove", moveNIPS) ;
		
		function moveEye7 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.nose1.on("pressmove", moveNIPS) ;
		
		function moveNose1 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.nose2.on("pressmove", moveNIPS) ;
		
		function moveNose2 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.nose3.on("pressmove", moveNIPS) ;
		
		function moveNose3 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.nose4.on("pressmove", moveNIPS) ;
		
		function moveNose4 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.nose5.on("pressmove", moveNIPS) ;
		
		function moveNose5 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.nose6.on("pressmove", moveNIPS) ;
		
		function moveNose6 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		this.hair1.on("pressmove", moveNIPS) ;
		
		function moveHair1 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.hair2.on("pressmove", moveNIPS) ;
		
		function moveHair2 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.hair3.on("pressmove", moveNIPS) ;
		
		function moveHair3 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.hair4.on("pressmove", moveNIPS) ;
		
		function moveHair4 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.hair5.on("pressmove", moveNIPS) ;
		
		function moveHair5 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
		
		this.hair6.on("pressmove", moveNIPS) ;
		
		function moveHair6 (e) {
			
			e.currentTarget.x= e.stageX;
			e.currentTarget.y= e.stageY;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 8
	this.button_1 = new lib.descriptionbutton();
	this.button_1.parent = this;
	this.button_1.setTransform(494.7,738.2,2.182,2.182);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// extra
	this.puka = new lib.puka();
	this.puka.parent = this;
	this.puka.setTransform(1013.4,791.8,2.182,2.182,0,0,0,29.5,17.9);

	this.tat3 = new lib.tat4_1();
	this.tat3.parent = this;
	this.tat3.setTransform(1127.1,688.6,2.182,2.182,0,0,0,26.6,19.6);

	this.tat1 = new lib.tat3_1();
	this.tat1.parent = this;
	this.tat1.setTransform(1027.6,473.5,2.182,2.182);

	this.tat2 = new lib.tat2_1();
	this.tat2.parent = this;
	this.tat2.setTransform(973.1,600,2.182,2.182);

	this.tat4 = new lib.tat1();
	this.tat4.parent = this;
	this.tat4.setTransform(900.2,686,2.182,2.182,0,0,0,22.6,26.4);

	this.nips = new lib.nips();
	this.nips.parent = this;
	this.nips.setTransform(914.6,724.8,2.182,2.182,0,0,0,54.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nips},{t:this.tat4},{t:this.tat2},{t:this.tat1},{t:this.tat3},{t:this.puka}]}).wait(1));

	// lips
	this.lip7 = new lib.lip7();
	this.lip7.parent = this;
	this.lip7.setTransform(935.1,572.7,2.182,2.182,0,0,0,22.6,12.5);

	this.lip6 = new lib.lip6();
	this.lip6.parent = this;
	this.lip6.setTransform(934,503.3,2.182,2.182,0,0,0,20.1,10.7);

	this.lip5 = new lib.lip5();
	this.lip5.parent = this;
	this.lip5.setTransform(930.1,436.8,2.182,2.182,0,0,0,16.3,11.2);

	this.lip4 = new lib.lip4();
	this.lip4.parent = this;
	this.lip4.setTransform(802.9,569.5,2.182,2.182);

	this.lip3 = new lib.lip3();
	this.lip3.parent = this;
	this.lip3.setTransform(846.3,531.7,2.182,2.182,0,0,0,19.9,11.7);

	this.lip2 = new lib.lip2();
	this.lip2.parent = this;
	this.lip2.setTransform(807.3,453.8,2.182,2.182);

	this.lip1 = new lib.lip1();
	this.lip1.parent = this;
	this.lip1.setTransform(846.3,417.1,2.182,2.182,0,0,0,17.9,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lip1},{t:this.lip2},{t:this.lip3},{t:this.lip4},{t:this.lip5},{t:this.lip6},{t:this.lip7}]}).wait(1));

	// eyes
	this.nose6 = new lib.nose6();
	this.nose6.parent = this;
	this.nose6.setTransform(346.7,772.1,2.182,2.182,0,0,0,9.9,12.9);

	this.nose5 = new lib.nose5_1();
	this.nose5.parent = this;
	this.nose5.setTransform(277.7,775.2,2.182,2.182,0,0,0,13.3,14.3);

	this.nose4 = new lib.nose4_1();
	this.nose4.parent = this;
	this.nose4.setTransform(346.1,695.1,2.182,2.182,0,0,0,10.6,14.6);

	this.nose3 = new lib.nose3_1();
	this.nose3.parent = this;
	this.nose3.setTransform(279.3,692.1,2.182,2.182,0,0,0,13,16.2);

	this.nose2 = new lib.nose2_1();
	this.nose2.parent = this;
	this.nose2.setTransform(339.5,622.5,2.182,2.182,0,0,0,10.6,14.3);

	this.nose1 = new lib.nose1_1();
	this.nose1.parent = this;
	this.nose1.setTransform(277.1,618.1,2.182,2.182,0,0,0,9,12.3);

	this.eye7 = new lib.eyes7_1();
	this.eye7.parent = this;
	this.eye7.setTransform(314,544.4,2.182,2.182,0,0,0,31.9,13.5);

	this.eye6 = new lib.eyes6_1();
	this.eye6.parent = this;
	this.eye6.setTransform(309.6,483.5,2.182,2.182,0,0,0,29.9,10.6);

	this.eye5 = new lib.eyes5_1();
	this.eye5.parent = this;
	this.eye5.setTransform(312.2,428.3,2.182,2.182,0,0,0,28.1,9.3);

	this.eye4 = new lib.eyes4_1();
	this.eye4.parent = this;
	this.eye4.setTransform(310.2,373.5,2.182,2.182,0,0,0,29.2,11.2);

	this.eye3 = new lib.eyes3_1();
	this.eye3.parent = this;
	this.eye3.setTransform(312.9,313.3,2.182,2.182,0,0,0,30.4,13.6);

	this.eye2 = new lib.eyes2_1();
	this.eye2.parent = this;
	this.eye2.setTransform(310.7,249.8,2.182,2.182,0,0,0,29.4,10.5);

	this.eye1 = new lib.eyes1_1();
	this.eye1.parent = this;
	this.eye1.setTransform(310.9,194,2.182,2.182,0,0,0,29.5,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eye1},{t:this.eye2},{t:this.eye3},{t:this.eye4},{t:this.eye5},{t:this.eye6},{t:this.eye7},{t:this.nose1},{t:this.nose2},{t:this.nose3},{t:this.nose4},{t:this.nose5},{t:this.nose6}]}).wait(1));

	// hair
	this.hair6 = new lib.hairnumber6();
	this.hair6.parent = this;
	this.hair6.setTransform(1082.4,415.8,2.182,2.182,0,0,0,48.1,33.6);

	this.hair5 = new lib.hairnumber5();
	this.hair5.parent = this;
	this.hair5.setTransform(997.1,205.3,2.182,2.182,0,0,0,87,83.1);

	this.hair4 = new lib.hairnumber4();
	this.hair4.parent = this;
	this.hair4.setTransform(115.9,735.3,2.182,2.182,0,0,0,43.1,36);

	this.hair3 = new lib.hairnumber3();
	this.hair3.parent = this;
	this.hair3.setTransform(118.9,561.8,2.182,2.182,0,0,0,44.5,33.5);

	this.hair2 = new lib.hairnumber2();
	this.hair2.parent = this;
	this.hair2.setTransform(113.4,400.6,2.182,2.182,0,0,0,38,27.6);

	this.hair1 = new lib.hairnumber1();
	this.hair1.parent = this;
	this.hair1.setTransform(129.6,169.1,2.182,2.182,0,0,0,45.4,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair1},{t:this.hair2},{t:this.hair3},{t:this.hair4},{t:this.hair5},{t:this.hair6}]}).wait(1));

	// base
	this.instance = new lib.IMG_3180();
	this.instance.parent = this;
	this.instance.setTransform(430,39,0.193,0.193);

	this.instance_1 = new lib.basee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(395,177,0.154,0.154);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AuFuFIcLAAIAAcLI8LAAg");
	this.shape.setTransform(3536,-3099.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5CAA6").s().p("AuFOFIAA8KIcKAAIAAcKg");
	this.shape_1.setTransform(3536,-3099.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660000").ss(1,1,1).p("EgrHgfZMBWPAAAMAAAA+zMhWPAAAg");
	this.shape_2.setTransform(600.1,434.2,2.182,2.182);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5CAA6").s().p("EgrHAfaMAAAg+zMBWPAAAMAAAA+zg");
	this.shape_3.setTransform(600.1,434.2,2.182,2.182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(597,-2754.3,3630.2,4064.5);
// library properties:
lib.properties = {
	width: 1200,
	height: 873,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/arkan.jpg", id:"arkan"},
		{src:"images/basee.jpg", id:"basee"},
		{src:"images/c.jpg", id:"c"},
		{src:"images/eyes1.png", id:"eyes1"},
		{src:"images/eyes2.png", id:"eyes2"},
		{src:"images/eyes3.png", id:"eyes3"},
		{src:"images/eyes4.png", id:"eyes4"},
		{src:"images/eyes5.png", id:"eyes5"},
		{src:"images/eyes6.png", id:"eyes6"},
		{src:"images/eyes7.png", id:"eyes7"},
		{src:"images/hair1.png", id:"hair1"},
		{src:"images/hair2.png", id:"hair2"},
		{src:"images/hair3.png", id:"hair3"},
		{src:"images/hair4.png", id:"hair4"},
		{src:"images/hair5.png", id:"hair5"},
		{src:"images/hair6.png", id:"hair6"},
		{src:"images/IMG_3176.jpg", id:"IMG_3176"},
		{src:"images/IMG_3180.jpg", id:"IMG_3180"},
		{src:"images/lips1.png", id:"lips1"},
		{src:"images/lips2.png", id:"lips2"},
		{src:"images/lips3.png", id:"lips3"},
		{src:"images/lips4.png", id:"lips4"},
		{src:"images/lips5.png", id:"lips5"},
		{src:"images/lips6.png", id:"lips6"},
		{src:"images/lips7.png", id:"lips7"},
		{src:"images/necklace.png", id:"necklace"},
		{src:"images/nose1.png", id:"nose1"},
		{src:"images/nose2.png", id:"nose2"},
		{src:"images/nose3.png", id:"nose3"},
		{src:"images/nose4.png", id:"nose4"},
		{src:"images/nose5.png", id:"nose5"},
		{src:"images/nose7.png", id:"nose7"},
		{src:"images/rings.png", id:"rings"},
		{src:"images/tat2.png", id:"tat2"},
		{src:"images/tat3.png", id:"tat3"},
		{src:"images/tat4.png", id:"tat4"},
		{src:"images/tattoo1.png", id:"tattoo1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;