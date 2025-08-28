window.__require = function e(t, o, n) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var u = o[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return i(t[a][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
ActionsHelp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a38feHPGI5P0pC34B8+n7A1", "ActionsHelp");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Easing = void 0;
var n = e("../../Spript/Random"), i = e("../../GameDataConfig/Utils");
o.Easing = {
quadIn: "quadIn",
quadOut: "quadOut",
quadInOut: "quadInOut",
cubicIn: "cubicIn",
cubicOut: "cubicOut",
cubicInOut: "cubicInOut",
quartIn: "quartIn",
quartOut: "quartOut",
quartInOut: "quartInOut",
quintIn: "quintIn",
quintOut: "quintOut",
quintInOut: "quintInOut",
sineIn: "sineIn",
sineOut: "sineOut",
sineInOut: "sineInOut",
expoIn: "expoIn",
expoOut: "expoOut",
expoInOut: "expoInOut",
circIn: "circIn",
circOut: "circOut",
circInOut: "circInOut",
elasticIn: "elasticIn",
elasticOut: "elasticOut",
elasticInOut: "elasticInOut",
backIn: "backIn",
backOut: "backOut",
backInOut: "backInOut",
bounceIn: "bounceIn",
bounceOut: "bounceOut",
bounceInOut: "bounceInOut",
smooth: "smooth",
fade: "fade"
};
var r = function() {
function e() {}
e.panelOpenAnim = function(e, t, o, n, i) {
void 0 === t && (t = null);
void 0 === o && (o = .6);
void 0 === n && (n = .3);
void 0 === i && (i = null);
if (e) {
e.scale = o;
cc.tween(e).to(1 * n, {
scale: 1
}, {
easing: "backOut"
}).call(function() {
return t && t(i);
}).start();
}
};
e.buttonBreath = function(e, t, o) {
void 0 === t && (t = 1);
void 0 === o && (o = 1);
if (e) {
this.stopBreath(e, e.scale);
var n = e.scale;
cc.tween(e).repeatForever(cc.tween().to(.25 * t, {
scale: 1.05 * n * o
}).to(.5 * t, {
scale: .95 * n * o
}).to(.25 * t, {
scale: n
})).start();
}
};
e.stopBreath = function(e, t) {
void 0 === t && (t = 1);
if (e) {
e.scale = t;
cc.Tween.stopAllByTarget(e);
}
};
e.iconScaleAnim = function(e) {
if (e && e.isValid) {
e.scale = 1;
cc.Tween.stopAllByTarget(e);
cc.tween(e).to(.15, {
scale: 1.1
}).to(.15, {
scale: 1
}).start();
}
};
e.moveToAnim = function(e, t, o, n) {
void 0 === o && (o = .8);
void 0 === n && (n = null);
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).to(o, {
x: t.x,
y: t.y
}).call(function() {
return n && n();
}).start();
}
};
e.dropReboundAni = function(e, t, o) {
if (e) {
e.stopActionByTag(10001);
cc.tween(e).tag(10001).to(.2, {
y: t
}, {
easing: "cubicIn"
}).call(function() {
o && o();
}).start();
}
return .2;
};
e.jellyScaleAni = function(e, t, o, n) {
void 0 === t && (t = 1);
void 0 === o && (o = 0);
if (e) {
e.stopActionByTag(997);
var i = void 0;
switch (o) {
case 0:
i = this.getJellyAniXY(t, n);
break;

case 1:
i = this.getJellyAniX(t, n);
break;

case 2:
i = this.getJellyAniY(t, n);
}
i && cc.tween(e).then(i).start();
}
};
e.jellyScaleAniRepeat = function(e, t, o, n) {
void 0 === o && (o = 1);
void 0 === n && (n = 0);
if (e) {
e.stopActionByTag(998);
t || (t = cc.v2(e.scaleX, e.scaleY));
var i = this.getJellyAniXY(t);
cc.tween(e).tag(998).repeatForever(cc.tween().then(i).delay(o)).start();
}
};
e.getJellyAniXY = function(e, t, o) {
void 0 === o && (o = 0);
"number" == typeof e && (e = cc.v2(e, e));
return cc.tween().tag(997).to(.1, {
scaleX: 1.05 * e.x,
scaleY: .95 * e.y
}, {
easing: "sineOut"
}).to(.1, {
scaleX: .95 * e.x,
scaleY: 1.05 * e.y
}, {
easing: "sineInOut"
}).to(.1, {
scaleX: 1.03 * e.x,
scaleY: .98 * e.y
}, {
easing: "sineInOut"
}).to(.1, {
scaleX: .98 * e.x,
scaleY: 1.03 * e.y
}, {
easing: "sineInOut"
}).to(.1, {
scaleX: 1 * e.x,
scaleY: 1 * e.y
}, {
easing: "sineOut"
}).call(function() {
t && t();
}).union();
};
e.getJellyAniX = function(e, t, o) {
void 0 === o && (o = 0);
"number" == typeof e && (e = cc.v2(e, e));
return cc.tween().to(.1, {
scaleX: 1.05 * e.x
}, {
easing: "sineOut"
}).to(.1, {
scaleX: .95 * e.x
}, {
easing: "sineInOut"
}).to(.1, {
scaleX: 1.03 * e.x
}, {
easing: "sineInOut"
}).to(.1, {
scaleX: .98 * e.x
}, {
easing: "sineInOut"
}).to(.1, {
scaleX: 1 * e.x
}, {
easing: "sineOut"
}).call(function() {
t && t();
}).union();
};
e.getJellyAniY = function(e, t, o) {
void 0 === o && (o = 0);
"number" == typeof e && (e = cc.v2(e, e));
return cc.tween().to(.1, {
scaleY: .95 * e.y
}, {
easing: "sineOut"
}).to(.1, {
scaleY: 1.05 * e.y
}, {
easing: "sineInOut"
}).to(.1, {
scaleY: .98 * e.y
}, {
easing: "sineInOut"
}).to(.1, {
scaleY: 1.03 * e.y
}, {
easing: "sineInOut"
}).to(.1, {
scaleY: 1 * e.y
}, {
easing: "sineOut"
}).call(function() {
t && t();
}).union();
};
e.rotationRepeat = function(e, t) {
void 0 === t && (t = 4);
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).repeatForever(cc.tween().to(t, {
angle: 360
}).call(function() {
return e.angle = 0;
})).start();
}
};
e.playShake = function(e, t) {
void 0 === t && (t = .5);
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).repeatForever(cc.tween().to(t, {
opacity: 100
}).to(t, {
opacity: 180
})).start();
}
};
e.actRedScaleAni = function(e, t) {
void 0 === t && (t = 1);
if (e) {
cc.Tween.stopAllByTarget(e);
var o = this.getMainActRedAni(t);
cc.tween(e).repeatForever(o).start();
}
};
e.getMainActRedAni = function(e) {
void 0 === e && (e = 1);
return cc.tween().to(.2, {
scale: .8 * e
}).to(.2, {
scale: 1 * e
}).to(.2, {
scale: .9 * e
}).to(.2, {
scale: 1 * e
}).delay(.5).union();
};
e.shakeAni = function(e, t) {
void 0 === t && (t = .6);
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).repeatForever(cc.tween().to(.1, {
angle: -30
}).to(.2, {
angle: 30
}).to(.1, {
angle: 0
}).delay(t)).start();
}
};
e.moveToPos = function(e, t, n, i) {
void 0 === n && (n = 3e3);
if (e) {
null == i && (i = e.scale);
var r = e.position.sub(t).mag() / n;
e.zIndex = 1e3;
return new Promise(function(n) {
cc.tween(e).tag(2e4).to(r, {
position: t,
scale: i
}, {
easing: o.Easing.quadInOut
}).call(function() {
n(!0);
}).start();
});
}
};
e.shakeError = function(e, t) {
void 0 === t && (t = .6);
if (e) {
cc.Tween.stopAllByTarget(e);
var o = 0;
if (e.shakeError_x) {
e.x = e.shakeError_x;
o = e.shakeError_x;
} else {
o = e.x;
e.shakeError_x = o;
}
cc.tween(e).to(.05, {
x: o - 10
}).to(.05, {
x: o
}).to(.05, {
x: o + 10
}).to(.05, {
x: o
}).delay(t).call(function() {
e.x = o;
}).start();
}
};
e.shakeEffect = function(e) {
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).repeatForever(cc.tween().to(.02, cc.v2(1, 2)).to(.02, cc.v2(-1, 2)).to(.02, cc.v2(-4, 0)).to(.02, cc.v2(0, -2)).to(.02, cc.v2(-1, 1)).to(.02, cc.v2(1, -2)).to(.02, cc.v2(-3, -3)).to(.02, cc.v2(0, 2)).to(.02, cc.v2(0, 0))).start();
}
};
e.shakeOnce = function(e, t) {
void 0 === t && (t = 1);
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).to(.1, {
angle: -4 * t
}).to(.1, {
angle: 2 * t
}).to(.08, {
angle: -1 * t
}).to(.05, {
angle: 0 * t
}).start();
}
};
e.caiqiuXuanZhong = function(e, t) {
if (e) {
cc.Tween.stopAllByTarget(e);
cc.tween(e).to(.1, {
y: -3,
scale: 1.05
}).to(.06666666666666667, {
y: 0,
scale: 1
}).to(.06666666666666667, {
y: 3,
scale: 1.05
}).to(.1, {
y: 0,
scale: 1
}).to(.1, {
y: -3,
scale: 1.05
}).to(.06666666666666667, {
y: 0,
scale: 1
}).to(.1, {
y: 3,
scale: 1.05
}).to(.06666666666666667, {
y: 0,
scale: 1
}).to(.1, {
y: -3,
scale: 1.05
}).to(.06666666666666667, {
y: 0,
scale: 1
}).to(.1, {
y: 3,
scale: 1.05
}).to(.06666666666666667, {
y: 0,
scale: 1
}).call(function() {
return t && t();
}).start();
}
};
e.btnOut = function(e, t, o) {
void 0 === t && (t = 0);
void 0 === o && (o = null);
if (e) {
e.scale = 0;
cc.Tween.stopAllByTarget(e);
cc.tween(e).delay(t).to(.16666666666666666, {
scale: 1.11
}).to(.16666666666666666, {
scale: .98
}).to(.16666666666666666, {
scale: 1
}).call(function() {
return o && o();
}).start();
}
};
e.createFlyEffect = function(e, t, o, r, a, c, s, l, u, p) {
var f = a || 1;
l = l || 1;
var h = e ? r.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.Vec3.ZERO)) : r.convertToNodeSpaceAR(cc.Vec3.ZERO), d = t ? r.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec3.ZERO)) : r.convertToNodeSpaceAR(cc.Vec3.ZERO), _ = d.sub(h).mag(), g = Math.min(_ / 650, .5);
g /= l;
for (var y = .2 / l, m = function(e) {
var t = setTimeout(function() {
var a = cc.instantiate(o);
a.parent = r;
a.position = new cc.Vec3(h.x, h.y, h.z);
var l = null;
if (p) l = cc.delayTime(0); else {
var _ = n.default.rangeInt(-45, 45), m = n.default.rangeInt(0, 65), v = n.default.rangeInt(-55, 55), b = _ > 0 ? m : -m, S = cc.v3(a.position.x + b, a.position.y + v, 0), w = n.default.rangeInt(95, 130);
l = i.default.create_beisizer(y, a.position, S, w, _);
}
var B = cc.callFunc(function() {
var t;
t = u ? i.default.create_bezier_linear(g, a.position, d, cc.v2(-100, 250), 90) : cc.moveTo(g, d);
cc.tween(a).sequence(t, cc.tween().call(function() {
s && s();
e == f - 1 && c && c();
a.destroy();
})).start();
});
a.runAction(cc.sequence([ l, cc.delayTime(.1), B ]));
clearTimeout(t);
}, e * n.default.rangeInt(10, 60));
}, v = 0; v < f; v++) m(v);
};
e.playSpine = function(e, t) {
void 0 === t && (t = "animation");
return new Promise(function(o) {
if (e) if (e.findAnimation(t)) {
e.setAnimation(0, t, !1);
e.setCompleteListener(function() {
o(!0);
e.setCompleteListener(null);
});
} else o(!1); else o(!1);
});
};
e.prototype.showJump = function(e, t) {
void 0 === t && (t = .2);
var o = 50 + 100 * t, n = cc.sequence(cc.jumpTo(t, cc.v2(0, 0), o, 1), cc.callFunc(function() {}, this, this));
e.runAction(n);
};
return e;
}();
o.default = r;
cc._RF.pop();
}, {
"../../GameDataConfig/Utils": "Utils",
"../../Spript/Random": "Random"
} ],
AtlasItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "773acQEfm5MgbV1i1u8pB1v", "AtlasItem");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AtlasItem = void 0;
var n = e("./AtlasRecord"), i = function() {
function e(e, t) {
this.config = null;
this.record = null;
this.index = null;
this.index = t;
this.config = e;
this.record = n.AtlasRecord.getRecord();
}
e.prototype.getConfig = function() {
return this.config;
};
e.prototype.getType = function() {
return this.config.type;
};
e.prototype.getIndex = function() {
return this.index;
};
e.prototype.getUnlockLevel = function() {
return this.config.unlock_level;
};
e.prototype.getId = function() {
return this.config.id;
};
e.prototype.isUnlock = function() {
return this.record.isUnlock(this.getId());
};
e.prototype.unlock = function() {
this.record.addUnlockId(this.getId());
};
e.prototype.getIconPath = function() {
return "GamePlay/Atlas/icon" + this.getType() + "/" + (this.index + 1);
};
e.prototype.getLockIconPath = function() {
return "GamePlay/Atlas/icon" + this.getType() + "/" + (this.index + 1);
};
e.prototype.getDesc = function() {
return this.config.desc;
};
e.prototype.getName = function() {
return this.config.name;
};
e.prototype.getCount = function() {
return this.record.getItemCount(this.getId());
};
return e;
}();
o.AtlasItem = i;
cc._RF.pop();
}, {
"./AtlasRecord": "AtlasRecord"
} ],
AtlasMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b09cdV+5yZPLqzbdnSFpz4O", "AtlasMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AtlasMgr = void 0;
var c = e("../GameDataConfig/GameDataConfig"), s = e("../Spript/Singleton"), l = e("../HiFive/Views/MahjongManager"), u = e("./AtlasItem"), p = e("./AtlasRecord"), f = e("./AtlasRepeatItem"), h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.record = null;
t.barrage_data = null;
t.item_list_list = [];
t.atlas_repeat_item_list = [];
t.cash_configs = null;
return t;
}
t.prototype.getBarrageData = function() {
return this.barrage_data || [];
};
t.prototype.getItemListList = function() {
return this.item_list_list;
};
t.prototype.getAtlasRepeatItemList = function() {
return this.atlas_repeat_item_list;
};
t.prototype.getCashConfigs = function() {
return this.cash_configs;
};
t.prototype.unlockItem = function(e) {
var t = this.getUnlockItem(e);
t && t.unlock();
return t;
};
t.prototype.getRepeatCount = function() {
for (var e = 0, t = 0; t < this.item_list_list.length; t++) for (var o = 0; o < this.item_list_list[t].length; o++) this.item_list_list[t][o].getCount() > 1 && (e += this.item_list_list[t][o].getCount() - 1);
return e;
};
t.prototype.getUnlockItem = function(e) {
for (var t = this.flatten(this.item_list_list), o = 0; o < t.length; o++) {
var n = t[o];
if (n.getUnlockLevel() === e || n.getUnlockLevel() === e - t.length) return n;
}
return null;
};
t.prototype.getUnlockItemListByTypeIndex = function(e) {
for (var t = [], o = this.item_list_list[e], n = 0; n < o.length; n++) {
var i = o[n];
i.isUnlock() && t.push(i);
}
return t;
};
t.prototype.getCashState = function(e) {
var t;
return r(this, void 0, Promise, function() {
var o, n, i, r, c, s, u;
return a(this, function(a) {
switch (a.label) {
case 0:
o = this.item_list_list[e];
n = o.filter(function(e) {
return e.isUnlock();
}).length;
i = o.length;
if (n < i) return [ 2, {
index: 0,
cur: n,
total: i
} ];
r = this.cash_configs[e];
return [ 4, this.requestTravelInfo() ];

case 1:
c = a.sent();
return (s = (null === (t = null == c ? void 0 : c.cashLimit) || void 0 === t ? void 0 : t.userVideoNum) || 0) < r.video ? [ 2, {
index: 1,
video_count: s,
need_video_count: r.video
} ] : (u = l.MahjongManager.getInstance().getLevelEntityByType().cur_level) < r.level ? [ 2, {
index: 2,
cur_level: u,
need_level: r.level
} ] : [ 2, {
index: 3,
quota: r.people
} ];
}
});
});
};
t.prototype.refreshBarrageData = function() {};
t.prototype.onInit = function() {
this.record = p.AtlasRecord.getRecord();
var e = c.default.get_config_array("AtlasConfig");
this.item_list_list = [];
for (var t = 0; t < e.length; ++t) {
var o = e[t].type - 1;
this.item_list_list[o] || (this.item_list_list[o] = []);
this.item_list_list[o].push(new u.AtlasItem(e[t], this.item_list_list[o].length));
}
this.cash_configs = c.default.get_config_array("AtlasCashConfig");
this.atlas_repeat_item_list = [];
for (var n = c.default.get_config_array("AtlasRepeatConfig"), i = 0; i < n.length; ++i) this.atlas_repeat_item_list.push(new f.AtlasRepeatItem(n[i]));
};
t.prototype.flatten = function(e) {
return e.reduce(function(e, t) {
return e.concat(t);
}, []);
};
t.prototype.requestTravelInfo = function() {
return null;
};
return t;
}(s.Singleton);
o.AtlasMgr = h;
cc._RF.pop();
}, {
"../GameDataConfig/GameDataConfig": "GameDataConfig",
"../HiFive/Views/MahjongManager": "MahjongManager",
"../Spript/Singleton": "Singleton",
"./AtlasItem": "AtlasItem",
"./AtlasRecord": "AtlasRecord",
"./AtlasRepeatItem": "AtlasRepeatItem"
} ],
AtlasRecord: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cd632ZZ7e9Hb56bVj44svCw", "AtlasRecord");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AtlasRecord = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.base_name = "AtlasRecord";
t.unlock_id_obj = {};
t.apply_auto_update();
return t;
}
t.prototype.addUnlockId = function(e) {
null == this.unlock_id_obj["" + e] ? this.unlock_id_obj["" + e] = 1 : this.unlock_id_obj["" + e] += 1;
this.store();
};
t.prototype.getItemCount = function(e) {
return this.unlock_id_obj["" + e] || 0;
};
t.prototype.isUnlock = function(e) {
return this.unlock_id_obj["" + e] > 0;
};
t._name = "AtlasRecord";
return t;
}(e("../GameDataConfig/BaseRecord").default);
o.AtlasRecord = r;
cc._RF.pop();
}, {
"../GameDataConfig/BaseRecord": "BaseRecord"
} ],
AtlasRepeatItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bc56dGY7lVMPK/ApLG0DbXu", "AtlasRepeatItem");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AtlasRepeatItem = void 0;
var n = e("./AtlasMgr"), i = function() {
function e(e) {
this.config = null;
this.config = e;
}
e.prototype.getNeedStarNum = function() {
return this.config.star;
};
e.prototype.getStarCount = function() {
return n.AtlasMgr.getInstance().getRepeatCount();
};
e.prototype.getRewardValue = function() {
return this.config.cash;
};
e.prototype.isComplete = function() {
return this.getStarCount() >= this.getNeedStarNum();
};
e.prototype.getCashState = function() {
return null;
};
return e;
}();
o.AtlasRepeatItem = i;
cc._RF.pop();
}, {
"./AtlasMgr": "AtlasMgr"
} ],
AudioConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fd84a4SQOJDDKZ4iMoV63UT", "AudioConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.take = o.AudioConfigData = o.IAudioID = void 0;
(function(e) {
e[e.bgm = 1] = "bgm";
e[e.ceshi = 2] = "ceshi";
})(o.IAudioID || (o.IAudioID = {}));
o.AudioConfigData = new Map([]);
o.take = function(e) {
return o.AudioConfigData.get(e);
};
cc._RF.pop();
}, {} ],
AudioManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cb7a0rzeRtOxoOmSD/YRW0E", "AudioManager");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.audioManager = o.AudioManager = void 0;
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function e() {}
e.prototype.playSound = function(e, t, o) {
void 0 === t && (t = !1);
void 0 === o && (o = 1);
return cc.audioEngine.play(e, t, o);
};
e.prototype.playMusic = function(e, t, o) {
void 0 === t && (t = !0);
void 0 === o && (o = 1);
return cc.audioEngine.playMusic(e, t);
};
e.prototype.stopMusic = function(e) {
cc.audioEngine.stop(e);
};
e.prototype.pause_music = function() {
cc.audioEngine.pauseMusic();
};
e.prototype.resume_music = function() {
cc.audioEngine.resumeMusic();
};
e.prototype.pauseAll = function() {
cc.audioEngine.pauseAll();
};
e.prototype.resumeAll = function() {
cc.audioEngine.resumeAll();
};
return n([ r ], e);
}());
o.AudioManager = a;
o.audioManager = new a();
cc._RF.pop();
}, {} ],
AudioSBNMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e4d71H74odM/rXaz0fA9hYa", "AudioSBNMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AudioSBNMgr = void 0;
var r = e("../config/AudioConfig"), a = e("../utils/CoreSBN"), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._musicSwitch = !0;
t._bgmVolume = 1;
t._soundSwitch = !0;
t._soundIdMap = new Map();
t._clipCacheMap = new Map();
return t;
}
t.prototype.onLoad = function() {
this._musicSwitch = !!a.CoreSBN.gameData.getSettingByKey("music");
this._soundSwitch = !!a.CoreSBN.gameData.getSettingByKey("sound");
};
Object.defineProperty(t.prototype, "musicSwitch", {
get: function() {
return this._musicSwitch;
},
set: function(e) {
if (e !== this._musicSwitch) {
this._musicSwitch = e;
a.CoreSBN.gameData.setSettingBykey("music", e);
e ? this._bgm && cc.audioEngine.playMusic(this._bgm, !0) : cc.audioEngine.stopMusic();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "musicVolum", {
set: function(e) {
this._bgmVolume = e;
cc.audioEngine.setMusicVolume(e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "soundSwitch", {
get: function() {
return this._soundSwitch;
},
set: function(e) {
if (e !== this._soundSwitch) {
this._soundSwitch = e;
a.CoreSBN.gameData.setSettingBykey("sound", e);
e || this.stopAllSound();
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "soundVolum", {
set: function(e) {
cc.audioEngine.setEffectsVolume(e);
},
enumerable: !1,
configurable: !0
});
t.prototype.playMusic = function(e, t) {
void 0 === t && (t = !0);
if (!this._musicSwitch) return -1;
var o = this._clipCacheMap.get(e);
return o ? cc.audioEngine.playMusic(o, t) : -1;
};
t.prototype.playSound = function(e, t) {
var o = this;
void 0 === t && (t = !1);
if (!this._soundSwitch) return -1;
var n = this._clipCacheMap.get(e);
if (!n) return -1;
var i = cc.audioEngine.playEffect(n, t);
this._soundIdMap.set(i, !0);
cc.audioEngine.setFinishCallback(i, function() {
return o._soundIdMap.delete(i);
});
return i;
};
t.prototype.stopSoundByid = function(e) {
cc.audioEngine.stopEffect(e);
};
t.prototype.stopAllSound = function() {
this._soundIdMap.clear();
cc.audioEngine.stopAllEffects();
};
t.prototype.loadAllAudios = function() {
var e = this, t = r.AudioConfigData, o = Promise.resolve();
t.forEach(function(t, n) {
o = o.then(function() {
return new Promise(function(o) {
t.remote ? cc.assetManager.loadRemote(t.url, {
ext: ".mp3"
}, function(t, i) {
if (!t && i) {
i.addRef();
e._clipCacheMap.set(n, i);
o();
} else o();
}) : cc.resources.load(t.url, cc.AudioClip, function(t, i) {
if (!t && i) {
i.addRef();
e._clipCacheMap.set(n, i);
o();
} else o();
});
});
});
});
return o;
};
return t;
}(cc.Component);
o.AudioSBNMgr = c;
cc._RF.pop();
}, {
"../config/AudioConfig": "AudioConfig",
"../utils/CoreSBN": "CoreSBN"
} ],
AutoConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cecfavRiNZMvakfql0QgcRn", "AutoConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AutoConfig = void 0;
var n = function() {
function e() {}
Object.defineProperty(e, "hotVersion", {
get: function() {
return this._hotVersion;
},
enumerable: !1,
configurable: !0
});
e._hotVersion = "1.24";
e._hotVersionDebug = "1.45";
e._bundleVersion = "";
return e;
}();
o.AutoConfig = n;
cc._RF.pop();
}, {} ],
BaseActionClass: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "53722d+mf1CwZ29GYG0xvTi", "BaseActionClass");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.prototype.runAction = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
BaseCom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2cd84iw9i9Mnb/yWK/e4oxB", "BaseCom");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseNode"), c = e("./PlayboardEnum"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.game_type = c.PlayBoardEnum.Game;
return t;
}
Object.defineProperty(t.prototype, "change", {
get: function() {
return this._change;
},
enumerable: !1,
configurable: !0
});
t.prototype.setChangeHandler = function(e) {
this._change = e;
};
t.prototype.onEnterScene = function() {
this.node.active = !0;
};
t.prototype.onLeaveScene = function() {
this.node.active = !1;
};
return r([ l ], t);
}(a.default));
o.default = u;
cc._RF.pop();
}, {
"../../common/BaseNode": "BaseNode",
"./PlayboardEnum": "PlayboardEnum"
} ],
BaseNode: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ffe8cZtm8BDbp2np61ps938", "BaseNode");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../Spript/EventManager"), c = e("../GameDataConfig/Loader"), s = e("../GameDataConfig/Utils"), l = cc._decorator, u = l.ccclass, p = (l.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.events = [];
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {};
t.prototype.flush_ui_image = function(e, t) {
var o = this, n = s.default.get_ui_interface_sprite_path_and_sprite_name(e, t), i = n[0], r = n[1];
console.log(r);
r.length > 0 && c.default.recursion_load_sprite_frame(r, function(e, t) {
var n = o[i[t]];
try {
n && (n.spriteFrame = e);
} catch (e) {}
});
};
t.prototype.update = function() {};
t.prototype.register_event = function(e, t, o, n) {
var i = {
name: e,
call_back: t,
target: o,
is_swallow: n
};
this.events.push(i);
a.default.get_instance().listen(i);
};
t.prototype.unregister_event = function(e, t) {
t = t || this;
a.default.get_instance().cancel_listen(e, t, null);
};
t.prototype.onDestroy = function() {
for (var e = 0, t = this.events; e < t.length; e++) {
var o = t[e];
a.default.get_instance().cancel_listen(o.name, o.target, o.call_back);
}
};
t.prototype.register_touch_button = function() {};
return r([ u ], t);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../GameDataConfig/Loader": "Loader",
"../GameDataConfig/Utils": "Utils",
"../Spript/EventManager": "EventManager"
} ],
BaseRecord: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d6ddc+e+ldH3a+W8tlLdGZW", "BaseRecord");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.getRecord = function() {
this.instance || (this.instance = cc.js.getClassByName("GameLocalData").get_instance().get_data(this));
return this.instance;
};
e.prototype.decode_json = function(e) {
for (var t in this) e.hasOwnProperty(t) && (this[t] = e[t]);
};
e.prototype.init = function(e) {
void 0 === e && (e = {});
};
e.prototype.store = function() {
cc.js.getClassByName("GameLocalData").get_instance().set_local_storeage();
};
e.prototype.auto_call = function() {};
e.prototype.apply_auto_update = function() {
var t = this, o = function(o) {
if (n.hasOwnProperty(o)) {
var i = n[o];
Object.defineProperty(n, o, {
set: function(o) {
var n = !0;
"number" != typeof i && "string" != typeof i || i != o || (n = !1);
i = o;
if (n) {
e.update_data && e.update_data();
t.auto_call && t.auto_call();
}
},
get: function() {
return i;
}
});
}
}, n = this;
for (var i in this) o(i);
};
e.update_data = null;
e.instance = null;
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
BaseUI: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "61a3dBLAF9I7pIu51Ui45Zq", "BaseUI");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.registerUIPath = void 0;
var a = e("../Spript/EventManager"), c = e("../UIManager/UIManager"), s = e("../UIManager/UIConfig"), l = e("../GameDataConfig/Loader"), u = e("../GameDataConfig/Utils"), p = e("../utils/CoreSBN"), f = cc._decorator, h = f.ccclass, d = f.property;
o.registerUIPath = function(e) {
return function(t) {
var o = e.substring(e.lastIndexOf("/") + 1);
s.default[o] ? console.error("prefab" + o + " The path already exists " + s.default[o]) : s.default[o] = e;
t.__UIName = o;
};
};
var _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.contentNode = null;
t.forceRefitAfterShow = !1;
t.hideOnTouchOutBoundContainer = !1;
t.block_input_events = null;
t.ui_param_interface = null;
t.controller = null;
t.widget = null;
t.c_time = new Date().getTime();
t.events = [];
t._adComp = null;
t._inTouch = !1;
return t;
}
t.open = function(e, t) {
void 0 === t && (t = !1);
var o = this.__UIName;
if (o) {
var n = e || {
param: {}
}, i = Object.assign({
ui_config_path: s.default[o],
ui_config_name: o
}, n);
t ? c.default.show_ui_stack(i) : c.default.show_ui(i);
} else console.warn("view " + this.name + " no __UIName property");
};
t.prototype.getName = function() {
var e;
return null === (e = this.ui_param_interface) || void 0 === e ? void 0 : e.ui_config_name;
};
t.prototype.onLoad = function() {
var e, t = this;
this.widget = this.node.getComponent(cc.Widget);
this.block_input_events = this.addComponent(cc.BlockInputEvents);
if (this.hideOnTouchOutBoundContainer && this.contentNode) {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t._inTouch = !0;
});
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
if (t._inTouch) {
var o = t.contentNode, n = t.node.convertToWorldSpaceAR(o.position), i = cc.rect(n.x - o.width * o.anchorX, n.y - o.height * o.anchorY, o.width, o.height), r = cc.v2();
cc.Camera.main.getScreenToWorldPoint(e.getLocation(), r);
i.contains(r) || t.on_close_call();
}
t._inTouch = !1;
});
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
t._inTouch = !1;
});
}
var o = null === (e = this.node.getChildByName("topNode")) || void 0 === e ? void 0 : e.getComponent(cc.Widget);
o && (p.CoreSBN.publicFun.isAdaptationViewLong() ? o.top = p.CoreSBN.config.topLongHeight : o.top = p.CoreSBN.config.topShortHeight);
};
t.prototype.android_back_callback = function() {
this.on_close_call();
};
t.prototype.show = function(e) {
var t, o = this;
this.ui_param_interface = e;
this.node.active = !0;
null === (t = this._adComp) || void 0 === t || t.showAd();
this.forceRefitAfterShow && this.scheduleOnce(function() {
cc.director.once(cc.Director.EVENT_AFTER_DRAW, function() {
o._adComp.fitContainerY(!0);
});
});
};
t.prototype.register_event = function(e, t, o, n) {
var i = {
name: e,
call_back: t,
target: o,
is_swallow: n
};
this.events.push(i);
a.default.get_instance().listen(i);
};
t.prototype.unregister_event = function(e, t, o) {
a.default.get_instance().cancel_listen(e, o, t);
};
t.prototype.onDestroy = function() {
for (var e = 0, t = this.events; e < t.length; e++) {
var o = t[e];
a.default.get_instance().cancel_listen(o.name, o.target, o.call_back);
}
};
t.prototype.hide = function() {
this.node.active && (this.node.active = !1);
};
t.prototype.on_close_call = function(e) {
for (var t, o, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
c.default.close_ui(e || (null === (o = this.node) || void 0 === o ? void 0 : o.name));
if (this.ui_param_interface) {
this.ui_param_interface.close_callback && (t = this.ui_param_interface).close_callback.apply(t, n);
this.ui_param_interface.isStackView && c.default.popStackView(this.ui_param_interface);
}
};
t.prototype.start = function() {};
t.prototype.flush_ui_image = function(e, t) {
var o = this, n = u.default.get_ui_interface_sprite_path_and_sprite_name(e, t), i = n[0], r = n[1];
l.default.recursion_load_sprite_frame(r, function(e, t) {
var n = o[i[t]];
try {
n && (n.spriteFrame = e);
} catch (e) {
console.log("point fail", e);
}
});
};
t.prototype.onAddFinished = function() {};
t.prototype.pop_effect = function(e) {
if (null != e && 0 != e.active) return new Promise(function(t) {
try {
cc.Tween.stopAllByTag(1232);
cc.tween(e).tag(1232).call(function() {
e.opacity = 200;
e.scale = .2;
}).to(.15, {
scale: 1.1,
opacity: 255
}).to(.1, {
scale: 1
}).call(function() {
e.scale = 1;
t(!0);
}).start();
} catch (e) {
t(!0);
}
});
};
t.prototype.delay_add_nodes = function(e, t, o, n) {
void 0 === n && (n = .1);
this.schedule(function() {
var e = cc.instantiate(t);
o(e);
}, n, e, n);
};
r([ d(cc.Node) ], t.prototype, "contentNode", void 0);
r([ d() ], t.prototype, "forceRefitAfterShow", void 0);
r([ d() ], t.prototype, "hideOnTouchOutBoundContainer", void 0);
return r([ h ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../GameDataConfig/Loader": "Loader",
"../GameDataConfig/Utils": "Utils",
"../Spript/EventManager": "EventManager",
"../UIManager/UIConfig": "UIConfig",
"../UIManager/UIManager": "UIManager",
"../utils/CoreSBN": "CoreSBN"
} ],
BattleEmojyItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "96079RyULpBd6K8DOx6aPEn", "BattleEmojyItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.iconSp = null;
t.iconSpArr = [];
t.iconAni = null;
return t;
}
t.prototype.step = function(e) {
this.iconSp.spriteFrame = this.iconSpArr[e];
};
t.prototype.start = function() {
var e = this;
this.iconAni.on(cc.Animation.EventType.FINISHED, function() {
e.node.destroy();
});
};
r([ s(cc.Sprite) ], t.prototype, "iconSp", void 0);
r([ s(cc.SpriteFrame) ], t.prototype, "iconSpArr", void 0);
r([ s(cc.Animation) ], t.prototype, "iconAni", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
BattleLoadingView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4fbb8Xdun9JDp9PMZMvCkLH", "BattleLoadingView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/BattleSBNName"), c = e("../../config/EnumDeclareSg"), s = e("../../manager/UserDataSBNMgr"), l = e("../../utils/CoreSBN"), u = e("./HeadBattleItem"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgSpine = null;
t.timeLab = null;
t.selfHead = null;
t.enemyHead = null;
t._isTime = !1;
t._isloadRes = 0;
return t;
}
t.prototype.onLoad = function() {
cc.game.addPersistRootNode(this.node);
};
t.prototype.step = function() {
var e = this;
this.loadSp();
this.timeLab.node.opacity = 0;
this.bgSpine.setAnimation(0, s.BattleSpineNameSBN.load_start, !1);
cc.director.preloadScene(c.SceneNameSBN.Main);
this.bgSpine.setCompleteListener(function(t) {
if (t.animation.name == s.BattleSpineNameSBN.load_start) {
e.timeLab.getComponent(cc.Animation).play();
e.bgSpine.setAnimation(0, s.BattleSpineNameSBN.load_loop, !0);
var o = l.CoreSBN.publicFun.getRandomInt(3, 5);
e.scheduleOnce(function() {
e._isTime = !0;
e.enterStart2();
}, o);
} else if (t.animation.name == s.BattleSpineNameSBN.load_start2) {
var n = l.CoreSBN.publicFun.getRandomInt(1, 8), i = l.CoreSBN.publicFun.getRandomByObjectListOne(a.BattleSBNName) || "?";
s.default.ins.curEmptyHead = n;
s.default.ins.curEmptyName = i;
e.enemyHead.setHead(n, i);
e.bgSpine.setAnimation(0, s.BattleSpineNameSBN.load_loop2, !0);
console.log("battle round lv", 16);
l.CoreSBN.gameData.setCurLevelMap(16);
s.default.ins.battleState = s.BattleStateSBN.battle_start;
l.CoreSBN.gameData.gameType = c.GameTypeSBN.Battle;
e.scheduleOnce(function() {
e.bgSpine.setAnimation(0, s.BattleSpineNameSBN.load_end, !1);
l.CoreSBN.gameData.currScene == c.SceneNameSBN.Home && l.CoreSBN.gameData.changeScene(c.SceneNameSBN.Main);
}, 1);
} else if (t.animation.name == s.BattleSpineNameSBN.load_end) {
e.node.active = !1;
cc.director.emit(s.MsgUserEnumSBN.battle_ani_complete);
}
});
this.selfHead.setHead(s.default.ins.UserHead, s.default.ins.UserName);
this.enemyHead.setHead(0, "???");
};
t.prototype.loadSp = function() {
var e = this, t = Object.values(l.CoreSBN.gameData.saveTex), o = l.CoreSBN.publicFun.getRandomByObjectListOne(t);
if (o) l.CoreSBN.res.loadImgList(l.CoreSBN.config.remoteBundle, [ o.texIndex ], function() {
e._isloadRes = 1;
l.CoreSBN.gameData.curLevelImg = o.texIndex;
e.enterStart2();
}, function() {
e._isloadRes = 2;
e.enterStart2();
}); else {
this._isloadRes = 2;
this.enterStart2();
}
};
t.prototype.enterStart2 = function() {
if (this._isTime && this._isloadRes) if (2 == this._isloadRes) {
console.warn("img load fail");
this.node.active = !1;
} else this.bgSpine.setAnimation(0, s.BattleSpineNameSBN.load_start2, !1);
};
t.prototype.start = function() {};
r([ h(sp.Skeleton) ], t.prototype, "bgSpine", void 0);
r([ h(cc.Label) ], t.prototype, "timeLab", void 0);
r([ h(u.default) ], t.prototype, "selfHead", void 0);
r([ h(u.default) ], t.prototype, "enemyHead", void 0);
return r([ f ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../config/BattleSBNName": "BattleSBNName",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN",
"./HeadBattleItem": "HeadBattleItem"
} ],
BattleLoseView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f70abqWGhhAoohXi2nOsWgh", "BattleLoseView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../manager/UserDataSBNMgr"), s = e("../../UIManager/UIManager"), l = e("../../utils/CoreSBN"), u = e("./BattleEmojyItem"), p = e("./HeadResultItem"), f = cc._decorator, h = f.ccclass, d = f.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgSpine = null;
t.timeLab = null;
t.selfHeadItem = null;
t.enemyHeadItem = null;
t.starLab = null;
t.loveLab = null;
t._pro = 0;
t._isClickEmojy = !1;
return t;
}
t.prototype.step = function(e, t) {
this._pro = e;
this.timeLab.string = l.CoreSBN.publicFun.formatSecondsTomin(t);
};
t.prototype.start = function() {
var e = this;
this.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_lose_start, !1);
this.bgSpine.setCompleteListener(function(t) {
if (t.animation.name == c.BattleSpineNameSBN.battle_lose_start) {
e.timeLab.getComponent(cc.Animation).play();
e.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_lose_loop, !0);
}
});
this.selfHeadItem.setData(c.default.ins.UserHead, c.default.ins.UserName, this._pro);
this.enemyHeadItem.setData(c.default.ins.curEmptyHead, c.default.ins.curEmptyName, 100);
c.default.ins.setRank(-1);
};
t.prototype.onHomeBtn = function() {
this.node.destroy();
l.CoreSBN.gameData.changeScene(a.SceneNameSBN.Home);
};
t.prototype.agingBtn = function() {
if (c.default.ins.consumePower(c.default.ins.PowerConsume)) {
this.node.destroy();
l.CoreSBN.message.emit(a.EventNameSBN.battle_re_match, !0);
} else s.default.show_toast("Insufficient stamina");
};
t.prototype.emojyBtn = function(e, t) {
var o = Number(t), n = l.CoreSBN.pool.requestObject(l.CoreSBN.config.battleBundle, a.PrefabNameSBN.BattleEmojyItem, this.selfHeadItem.node);
if (n) {
n.setPosition(0, this.selfHeadItem.node.height / 2);
n.getComponent(u.default).step(o);
if (!this._isClickEmojy) {
this._isClickEmojy = !0;
var i = l.CoreSBN.publicFun.getRandomInt(10, 20) / 10;
this.scheduleOnce(this.schaduleEmojy, i);
}
}
};
t.prototype.schaduleEmojy = function() {
this._isClickEmojy = !1;
var e = l.CoreSBN.pool.requestObject(l.CoreSBN.config.battleBundle, a.PrefabNameSBN.BattleEmojyItem, this.enemyHeadItem.node);
if (e) {
e.setPosition(0, this.enemyHeadItem.node.height / 2);
var t = l.CoreSBN.publicFun.getRandomInt(0, 3);
e.getComponent(u.default).step(t);
}
};
r([ d(sp.Skeleton) ], t.prototype, "bgSpine", void 0);
r([ d(cc.Label) ], t.prototype, "timeLab", void 0);
r([ d(p.default) ], t.prototype, "selfHeadItem", void 0);
r([ d(p.default) ], t.prototype, "enemyHeadItem", void 0);
r([ d(cc.Label) ], t.prototype, "starLab", void 0);
r([ d(cc.Label) ], t.prototype, "loveLab", void 0);
return r([ h ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../UIManager/UIManager": "UIManager",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN",
"./BattleEmojyItem": "BattleEmojyItem",
"./HeadResultItem": "HeadResultItem"
} ],
BattleSBNName: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3b769Fi6YRCTKDBpvElqZ0a", "BattleSBNName");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BattleSBNName = void 0;
o.BattleSBNName = [ "Ethan Carter", "محمد علي", "김민수", "佐藤健", "Иван Петров", "Olivia Bennett", "فاطمة حمد", "이지연", "鈴木奈々", "Анна Иванова", "Liam Parker", "احمد عبدالله", "박찬호", "高橋翔太", "Михаил Смирнов", "Ava Mitchell", "زينب سعيد", "최수진", "田中結衣", "Екатерина Кузнецова", "Noah Collins", "يوسف محمد", "정우성", "伊藤大輔", "Алексей Васильев", "Sophia Edwards", "هدى علي", "강하늘", "山本舞香", "Ольга Павлова", "Oliver Wilson", "عمر سلمان", "황보윤", "中村拓海", "Дмитрий Морозов", "Isabella Thompson", "رقية عبدالرحمن", "윤서연", "小林星奈", "Наталья Соколова", "Elijah Davis", "عبدالرحمن فريد", "김태형", "斉藤亮介", "Сергей Козлов", "Charlotte Rodriguez", "سارة علي", "이은주", "加藤愛", "Татьяна Лебедева", "William Martinez", "ياسر محمد", "박지민", "吉田太郎", "Андрей Новиков", "Mia Anderson", "نورة عبدالله", "최민호", "福田桃子", "Мария Федорова", "James Taylor", "حسن سعيد", "정수연", "松本潤", "Николай Иванов", "Amelia Thomas", "منى حمد", "강동원", "井上真央", "Светлана Михайлова", "Benjamin Jackson", "علي احمد", "홍길동", "木村拓哉", "Павел Андреев", "Harper White", "لجين محمد", "윤두준", "山口百恵", "Юлия Кравцова", "Lucas Harris", "خالد عبدالرحمن", "김하늘", "橋本環奈", "Владимир Попов", "Evelyn Clark", "رania سلمان", "이종석", "菅田将暉", "Елена Смирнова", "Henry Lewis", "ماجد فريد", "박보검", "新垣結衣", "Константин Алексеев", "Abigail Lee", "دينا علي", "최유리", "岡田将生", "Анжелика Васильева", "Alexander Walker", "طارق محمد", "정해인", "堀北真希", "Роман Кузнецов", "Elizabeth Young", "هاجر عبدالله", "강민경", "小栗旬", "Галина Морозова", "Michael Allen", "محمد سعيد", "황정민", "長澤雅美", "Юрий Соколов", "Sofia King", "سامية حمد", "윤아라", "妻夫木聡", "Ирина Лебедева", "Daniel Wright", "احمد علي", "김수현", "北川景子", "Артем Павлов", "Ella Scott", "ريم عبدالرحمن", "이보영", "櫻井翔", "Ксения Новикова", "Matthew Green", "يوسف سلمان", "박서준", "広末涼子", "Даниил Федоров", "Scarlett Adams", "نور فريد", "최다니엘", "二宮和也", "Валентина Михайлова", "Joseph Baker", "عمر محمد", "정은지", "蒼井優", "Григорий Андреев", "Zoe Nelson", "نيله علي", "강호동", "山下智久", "Софья Попова", "John Hill", "حسن عبدالله", "홍진호", "戶田惠梨香", "Олег Иванов", "Lily Carter", "شهد سعيد", "윤종신", "龜梨和也", "Дарья Смирнова", "David Phillips", "عبدالرحمن حمد", "김종국", "深田恭子", "Максим Кузнецов", "Grace Evans", "عائشة علي", "이효리", "山田涼介", "Анна Васильева", "Andrew Turner", "ياسر عبدالرحمن", "박명수", "桐谷美玲", "Тимур Морозов", "Chloe Mitchell", "ليان سلمان", "최시원", "千葉雄大", "Наталья Сокółова", "Jackson Campbell", "خالد فريد", "정재영", "有村架純", "Руслан Павлов", "Nora Parker", "مريم محمد", "강동석", "岡田准一", "Екатерина Новикова", "Logan Roberts", "طارق علي", "황민현", "澤尻英龍華", "Лев Федоров", "Hannah Edwards", "رفقة عبدالله", "윤세라", "向井理", "Ольга Михайлова", "Gabriel Collins", "ماجد سعيد", "김지원", "佐佐木希", "Филипп Андреев", "Lila Wilson", "سارة حمد", "이준기", "玉木宏", "Светлана Попова", "Samuel Thompson", "علي عبدالرحمن", "박은빈", "井上真央", "Иван Иванов", "Aria Davis", "نورة سلمان", "최강창민", "錦戶亮", "Мария Смирнова", "Anthony Rodriguez", "محمد فريد", "정성인", "天海祐希", "Сергей Кузнецов", "Stella Martinez", "لجين علي", "강민아", "大野智", "Татьяна Васильева", "Isaac Anderson", "احمد محمد", "황보라", "松島菜菜子", "Андрей Морозов", "Maya Taylor", "دينا عبدالله", "윤석열", "福山雅治", "Юлия Соколов", "Jacob Thomas", "يوسف حمد", "김연아", "吉高由里子", "Михаил Павлов", "Layla Jackson", " علي", "이수경", "瀧澤秀明", "Елена Новикова" ];
cc._RF.pop();
}, {} ],
BattleStartAniView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b8482znbNNAIK1AvaCCJEE", "BattleStartAniView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../manager/UserDataSBNMgr"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgNode = null;
t.bgSpine = null;
t.readlyLab = null;
t.timeLab = null;
t._isTime = !1;
t._isloadRes = 0;
t._time = 3;
return t;
}
t.prototype.onLoad = function() {
this.bgSpine.node.active = !1;
cc.director.on(c.MsgUserEnumSBN.battle_ani_complete, this.startAni, this);
if (s.CoreSBN.gameData.gameType != a.GameTypeSBN.Battle) {
this.timeLab.node.active = !1;
this.readlyLab.node.setPosition(0, 0);
this.readlyLab.string = "Level " + s.CoreSBN.gameData.CurLevel;
}
};
t.prototype.start = function() {};
t.prototype.startAni = function() {
var e = this;
this.bgSpine.node.active = !0;
this.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_start, !1);
this.bgSpine.setCompleteListener(function(t) {
if (t.animation.name == c.BattleSpineNameSBN.battle_start) {
e.bgNode.active = !1;
e.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_loop, !0);
s.CoreSBN.gameData.gameType == a.GameTypeSBN.Battle ? e.schedule(e.startTime, 1, cc.macro.REPEAT_FOREVER) : e.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_end, !1);
} else if (t.animation.name == c.BattleSpineNameSBN.battle_end) {
cc.director.emit(c.MsgUserEnumSBN.game_start_ani_complete);
e.node.destroy();
}
});
};
t.prototype.startTime = function() {
var e = this;
this._time--;
this.timeLab.string = this._time + "s";
if (this._time <= 0) {
this.readlyLab.string = "Go !";
this.timeLab.node.active = !1;
this.unschedule(this.startTime);
this.scheduleOnce(function() {
e.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_end, !1);
}, .2);
}
};
t.prototype.onDestroy = function() {
cc.director.off(c.MsgUserEnumSBN.battle_ani_complete, this.startAni, this);
};
r([ p(cc.Node) ], t.prototype, "bgNode", void 0);
r([ p(sp.Skeleton) ], t.prototype, "bgSpine", void 0);
r([ p(cc.Label) ], t.prototype, "readlyLab", void 0);
r([ p(cc.Label) ], t.prototype, "timeLab", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
BattleWinView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "433e3I2X/RH0Ii7SDxDP7Xr", "BattleWinView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../manager/UserDataSBNMgr"), s = e("../../UIManager/UIManager"), l = e("../../utils/CoreSBN"), u = e("./BattleEmojyItem"), p = e("./HeadResultItem"), f = cc._decorator, h = f.ccclass, d = f.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgSpine = null;
t.timeLab = null;
t.selfHeadItem = null;
t.enemyHeadItem = null;
t.starLab = null;
t.loveLab = null;
t._pro = 0;
t._isClickEmojy = !1;
return t;
}
t.prototype.step = function(e, t) {
this._pro = e;
this.timeLab.string = l.CoreSBN.publicFun.formatSecondsTomin(t);
};
t.prototype.start = function() {
var e = this;
this.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_win_start, !1);
this.bgSpine.setCompleteListener(function(t) {
if (t.animation.name == c.BattleSpineNameSBN.battle_win_start) {
e.timeLab.getComponent(cc.Animation).play();
e.bgSpine.setAnimation(0, c.BattleSpineNameSBN.battle_win_loop, !0);
}
});
this.selfHeadItem.setData(c.default.ins.UserHead, c.default.ins.UserName, 100);
this.enemyHeadItem.setData(c.default.ins.curEmptyHead, c.default.ins.curEmptyName, this._pro);
c.default.ins.setRank(1);
};
t.prototype.onHomeBtn = function() {
this.node.destroy();
l.CoreSBN.gameData.changeScene(a.SceneNameSBN.Home);
};
t.prototype.agingBtn = function() {
if (c.default.ins.consumePower(c.default.ins.PowerConsume)) {
this.node.destroy();
l.CoreSBN.message.emit(a.EventNameSBN.battle_re_match, !0);
} else s.default.show_toast("Insufficient stamina");
};
t.prototype.emojyBtn = function(e, t) {
var o = Number(t), n = l.CoreSBN.pool.requestObject(l.CoreSBN.config.battleBundle, a.PrefabNameSBN.BattleEmojyItem, this.selfHeadItem.node);
if (n) {
n.setPosition(0, this.selfHeadItem.node.height / 2);
n.getComponent(u.default).step(o);
if (!this._isClickEmojy) {
this._isClickEmojy = !0;
var i = l.CoreSBN.publicFun.getRandomInt(10, 20) / 10;
this.scheduleOnce(this.schaduleEmojy, i);
}
}
};
t.prototype.schaduleEmojy = function() {
this._isClickEmojy = !1;
var e = l.CoreSBN.pool.requestObject(l.CoreSBN.config.battleBundle, a.PrefabNameSBN.BattleEmojyItem, this.enemyHeadItem.node);
if (e) {
e.setPosition(0, this.enemyHeadItem.node.height / 2);
var t = l.CoreSBN.publicFun.getRandomInt(0, 3);
e.getComponent(u.default).step(t);
}
};
r([ d(sp.Skeleton) ], t.prototype, "bgSpine", void 0);
r([ d(cc.Label) ], t.prototype, "timeLab", void 0);
r([ d(p.default) ], t.prototype, "selfHeadItem", void 0);
r([ d(p.default) ], t.prototype, "enemyHeadItem", void 0);
r([ d(cc.Label) ], t.prototype, "starLab", void 0);
r([ d(cc.Label) ], t.prototype, "loveLab", void 0);
return r([ h ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../UIManager/UIManager": "UIManager",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN",
"./BattleEmojyItem": "BattleEmojyItem",
"./HeadResultItem": "HeadResultItem"
} ],
BeginLevelConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "89011kXEpxA+pTnn+LiX+bf", "BeginLevelConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BeginLevelConfig = void 0;
(function(e) {
var t = {
1: {
level_id: 1,
model_id: [ 1 ],
level_reward_value: 1200,
level_reward_multiple: 1,
is_special: 0,
level_pic: [ 1001 ],
level_pic1: []
},
2: {
level_id: 2,
model_id: [ 2 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1006 ],
level_pic1: []
},
3: {
level_id: 3,
model_id: [ 3 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1002 ],
level_pic1: []
},
4: {
level_id: 4,
model_id: [ 4 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1003 ],
level_pic1: []
},
5: {
level_id: 5,
model_id: [ 5 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1007 ],
level_pic1: []
},
6: {
level_id: 6,
model_id: [ 6 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1004 ],
level_pic1: []
},
7: {
level_id: 7,
model_id: [ 7 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1005 ],
level_pic1: []
},
8: {
level_id: 8,
model_id: [ 8 ],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: [ 1008 ],
level_pic1: []
}
}, o = -1;
e.query = function(e) {
return t[e + ""];
};
e.size = function() {
if (o < 0) {
o = 0;
for (var e in n()) ++o;
}
return o;
};
function n() {
return t;
}
e.getDatas = n;
})(o.BeginLevelConfig || (o.BeginLevelConfig = {}));
cc._RF.pop();
}, {} ],
BoxC: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e30d1k2uylKTJxcFFfF7OQL", "BoxC");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../config/EnumDeclareSg"), l = e("../core/managers/ActionsHelp"), u = e("../HiFive/Framework/Util/Box"), p = e("../HiFive/Framework/Util/Dart"), f = e("../HiFive/Framework/Util/GameConst"), h = e("../HiFive/Framework/Util/NailSpine"), d = e("../HiFive/Views/SoundManager"), _ = e("../utils/CoreSBN"), g = e("./Tools"), y = cc._decorator, m = y.ccclass, v = y.property, b = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.target_bg = null;
t.holes_imgs = [];
t.balloons = [];
t._balloons = [];
return t;
}
Object.defineProperty(t.prototype, "empty_count", {
get: function() {
return this._balloons.length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "nails_count", {
get: function() {
return 3 - this._balloons.length;
},
enumerable: !1,
configurable: !0
});
t.prototype.setSkin = function(e) {
var t = this, o = f.ImgName[e];
cc.resources.load("Mahjong/boxc/" + o + "1", cc.SpriteFrame, function(e, n) {
n ? t.target_bg.spriteFrame = n : console.warn("Mahjong/boxc/" + o + "1", e.message);
});
cc.resources.load("Mahjong/boxc/" + o + "2", cc.SpriteFrame, function(e, n) {
n ? t.holes_imgs.forEach(function(e) {
e.spriteFrame = n;
}) : console.warn("Mahjong/box/" + o + "2", e.message);
});
};
t.prototype.init = function(e, t) {
this._interceptor = null;
this.state_handler = t;
this.is_prop = !1;
this.node.opacity = 255;
for (var o = 1, n = 0, i = this.balloons; n < i.length; n++) i[n].node.parent.zIndex = o++;
if ("number" == typeof e) {
this.color = e;
this.setSkin(e);
this.setBalloons(0);
} else {
this.color = e.color;
this.setSkin(this.color);
this.setBalloons(e.count);
}
};
t.prototype.setBalloons = function(e) {
var t = "" + (this.color + 1);
this._balloons = [];
for (var o = 0; o < 3; o++) {
var n = this.balloons[o];
n.node.active = o >= e;
if (n.node.active) {
n.setSkin(t);
n.clearTracks();
n.setCompleteListener(null);
n.setAnimation(0, "qiqiu", !0);
this._balloons.push(n);
}
}
console.log("init qiuqiu num", this._balloons.length);
};
t.prototype.putNailToBox = function(e) {
var t = this;
Array.isArray(e) || (e = [ e ]);
var o = this.empty_count, n = e.slice(0, Math.min(e.length, o));
n.length == e.length ? e.length = 0 : g.utils.removeElementsFromArray(e, n);
for (var i = [], r = 0, a = n; r < a.length; r++) {
var c = a[r], s = this._balloons.shift(), l = this.shootBalloon(c.node, s);
c.node.destroy();
i.push(l);
}
this.empty_count <= 0 && (this.state = f.eBoxState.Closing);
var u = this.state;
this._interceptor ? this._interceptor(u, function() {
Promise.all(i).finally(function() {
t.dealState(u);
});
}) : Promise.all(i).finally(function() {
t.dealState(u);
});
return e;
};
t.prototype.shootBalloon = function(e, t) {
return a(this, void 0, void 0, function() {
var o, n, i, r, a, u, f, y, m;
return c(this, function(c) {
switch (c.label) {
case 0:
o = this.node.parent;
n = _.CoreSBN.pool.requestObject(_.CoreSBN.config.commenBundle, s.PrefabNameSBN.Dart, o);
(i = n.getComponent(p.default)).node.zIndex = 100;
i.init(this.color);
r = o.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v3()));
i.node.position = r;
a = _.CoreSBN.pool.requestObject(_.CoreSBN.config.commenBundle, s.PrefabNameSBN.NailSpine, o);
(u = a.getComponent(h.default)).node.position = r;
u.up();
f = o.convertToNodeSpaceAR(t.node.convertToWorldSpaceAR(cc.v3())), y = g.utils.getAngle(r, f);
i.node.angle = 270 + y;
m = 4e-4 * r.sub(f).mag();
return [ 4, new Promise(function(e) {
cc.tween(i.node).to(m, {
position: f,
scale: 1
}).call(function() {
e();
}).start();
}) ];

case 1:
c.sent();
i.icon.node.active = !1;
t.node.parent.zIndex = 10;
d.SoundManager.playSound(s.SoundNameSBN.qiqiuBoom);
l.default.playSpine(t, "bao").then(function() {
t.node.active = !1;
i.node.destroy();
});
return [ 4, g.utils.sleep(300, this) ];

case 2:
c.sent();
return [ 2 ];
}
});
});
};
t.prototype.born = function(e) {
return a(this, void 0, void 0, function() {
var t, o, n = this;
return c(this, function(i) {
switch (i.label) {
case 0:
this.state = f.eBoxState.Readying;
i.label = 1;

case 1:
i.trys.push([ 1, 3, , 4 ]);
this.node.position = cc.v3(this.node.x, 500);
t = cc.v3(this.node.x, 0), o = this.node.position.sub(t).mag() / 2e3;
cc.tween(this.node).delay(e).to(o, {
position: t
}).call(function() {
n.node.zIndex = 0;
l.default.jellyScaleAni(n.node, 1, 2);
}).start();
return [ 4, g.utils.sleep(1e3 * (o + .1), this) ];

case 2:
i.sent();
this.node.zIndex = 0;
this.node.y = 0;
return [ 3, 4 ];

case 3:
i.sent();
this.node.y = 0;
this.node.zIndex = 0;
return [ 3, 4 ];

case 4:
this.state = f.eBoxState.Idle;
return [ 2 ];
}
});
});
};
t.prototype.close = function() {
return !0;
};
t.prototype.die = function() {
var e = this;
this.state = f.eBoxState.Dying;
var t = cc.v3(500, this.node.y), o = this.node.position.sub(t).mag() / 2e3;
this.node.zIndex = 100;
d.SoundManager.playSound(s.SoundNameSBN.biaobagenghua);
cc.tween(this.node).to(o, {
position: t
}).call(function() {
e.node.destroy();
}).start();
};
r([ v(cc.Sprite) ], t.prototype, "target_bg", void 0);
r([ v([ cc.Sprite ]) ], t.prototype, "holes_imgs", void 0);
r([ v([ sp.Skeleton ]) ], t.prototype, "balloons", void 0);
return r([ m ], t);
}(u.default);
o.default = b;
cc._RF.pop();
}, {
"../HiFive/Framework/Util/Box": "Box",
"../HiFive/Framework/Util/Dart": "Dart",
"../HiFive/Framework/Util/GameConst": "GameConst",
"../HiFive/Framework/Util/NailSpine": "NailSpine",
"../HiFive/Views/SoundManager": "SoundManager",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../core/managers/ActionsHelp": "ActionsHelp",
"../utils/CoreSBN": "CoreSBN",
"./Tools": "Tools"
} ],
Boxes: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8c7eaDh2X1KBbn0Cpdt8Q95", "Boxes");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../HiFive/Framework/Util/Box"), c = e("../HiFive/Framework/Util/GameConst"), s = e("../utils/CoreSBN"), l = e("../config/EnumDeclareSg"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.box_panel = null;
t._game_node = null;
t._box_nodes = null;
t.boxes = [];
t.lock_boxes = new Map();
t.box_die_handler = null;
t.box_born_handler = null;
t.open_hole_handler = null;
t.box_ids = null;
t.open_prop = null;
t.onBoxStateChange = function(e) {
if (e.state == c.eBoxState.Idle) t.box_born_handler && t.box_born_handler(e); else if (e.state == c.eBoxState.Dying) {
t.box_die_handler && t.box_die_handler(e);
t.tryCreateNewBox(e);
}
};
return t;
}
Object.defineProperty(t.prototype, "game_node", {
get: function() {
this._game_node || (this._game_node = this.box_panel.getChildByName("game_node"));
return this._game_node;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "box_nodes", {
get: function() {
if (!this._box_nodes) {
this._box_nodes = [];
for (var e = 1; e <= 3; e++) this._box_nodes.push(this.box_panel.getChildByName("box" + e));
}
return this._box_nodes;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "remain_box_count", {
get: function() {
for (var e = this.box_ids.length, t = 0, o = this.boxes; t < o.length; t++) {
var n = o[t];
n && n.state <= c.eBoxState.Readying && e++;
}
return e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "open_count", {
get: function() {
return Math.min(c.BoxCount + this.open_prop.use_count - this.open_prop.limit_count, c.BoxCount);
},
enumerable: !1,
configurable: !0
});
t.prototype.getSlotPosByIndex = function(e) {
e = cc.misc.clampf(e, 0, this.box_nodes.length - 1);
return this.game_node.convertToNodeSpaceAR(this.box_nodes[e].convertToWorldSpaceAR(cc.Vec3.ZERO));
};
t.prototype.setBoxHandler = function(e, t, o) {
this.box_die_handler = t;
this.box_born_handler = o;
this.open_hole_handler = e;
};
t.prototype.filterBoxes = function(e) {
e || (e = function(e) {
return !!e;
});
return this.boxes.filter(e);
};
t.prototype.getAllBoxNailIds = function() {
for (var e = [], t = [], o = 0, n = this.box_ids; o < n.length; o++) if ("number" == typeof (s = n[o])) e.push(s); else {
for (var i = 0; i < s.count; i++) t.push(s.color);
e.push(s.color);
}
for (var r = 0, a = this.boxes; r < a.length; r++) {
var s;
if ((s = a[r]) && s.state <= c.eBoxState.Readying) {
e.push(s.color);
for (var l = 3 - s.empty_count, u = 0; u < l; u++) t.push(s.color);
}
}
return [ e, t ];
};
t.prototype.build = function() {
for (var e = Array.from(this.box_ids), t = this.boxes.length - 1; t >= 0; t--) {
var o = this.boxes[t];
o && o.state <= c.eBoxState.Readying && e.unshift({
color: o.color,
count: o.nails_count
});
}
return e;
};
t.prototype.init = function(e, t) {
this.box_ids = e;
this.open_prop = t;
this.lock_boxes.clear();
for (var o = 0; o < c.BoxCount; o++) if (o < 3) {
var n = e.shift();
if (null != n) {
var i = this.addNewBox(n, o);
i && (i.state = c.eBoxState.Idle);
}
}
s.CoreSBN.gameData.gameType == l.GameTypeSBN.Special ? this.box_panel.setPosition(0, 40) : s.CoreSBN.gameData.gameType == l.GameTypeSBN.Battle ? this.box_panel.setPosition(0, 90) : this.box_panel.setPosition(0, 70);
};
t.prototype.addNailsToData = function(e) {
for (var t = [], o = e.length - 1; o >= 0; o--) for (var n = e[o], i = 0; i < this.box_ids.length; i++) {
var r = this.box_ids[i];
if ("number" == typeof r) {
if (r == n.color) {
r = {
color: r,
count: 1
};
this.box_ids[i] = r;
t.push(n);
e.splice(o, 1);
break;
}
} else if (r.color == n.color && r.count < 3) {
r.count++;
t.push(n);
e.splice(o, 1);
break;
}
}
return t;
};
t.prototype.checkBoxesIsCanOver = function() {
return !0;
};
t.prototype.setBoxOpen = function() {
var e = c.BoxCount - this.open_count;
if (this.lock_boxes.size > e) {
var t = this.getFirstLockBoxKey(), o = this.lock_boxes.get(t);
if (o) {
o.open();
this.lock_boxes.delete(t);
this.tryCreateNewBox(t);
}
}
};
t.prototype.getFirstLockBoxKey = function() {
for (var e = 1e3, t = 0, o = Array.from(this.lock_boxes); t < o.length; t++) {
var n = o[t], i = n[0];
n[1];
i < e && (e = i);
}
return e;
};
t.prototype.tryCreateNewBox = function(e) {
var t;
if ("number" == typeof e) t = e; else {
t = this.boxes.indexOf(e);
this.boxes[t] = null;
}
if (this.box_ids.length > 0) {
var o = this.box_ids.shift();
this.addNewBox(o, t).born(0);
}
};
t.prototype.addNewBox = function(e, t) {
var o = s.CoreSBN.pool.requestObject(s.CoreSBN.config.commenBundle, l.PrefabNameSBN.BoxC, this.game_node).getComponent(a.default);
o.init(e, this.onBoxStateChange);
o.boxes = this;
this.boxes[t] = o;
var n = this.getSlotPosByIndex(t);
o.gotoPosition(n);
return o;
};
t.prototype.tryPutNailToBox = function(e, t) {
t || (t = function(e) {
return e.state == c.eBoxState.Idle;
});
var o = this.getBoxWithType(e.color, t);
if (o && o.empty_count > 0) {
o.putNailToBox(e);
return o;
}
};
t.prototype.getBoxWithType = function(e, t) {
for (var o, n = 0, i = this.boxes; n < i.length; n++) {
var r = i[n];
r && r.color == e && t(r) && (o ? o.empty_count > r.empty_count && (o = r) : o = r);
}
return o;
};
t.prototype.reset = function() {
var e = this.game_node.children;
e.length > 0 && Array.from(e).forEach(function(e) {
e.stopAllActions();
e.destroy();
});
this.boxes = [];
};
r([ f(cc.Node) ], t.prototype, "box_panel", void 0);
return r([ p ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../HiFive/Framework/Util/Box": "Box",
"../HiFive/Framework/Util/GameConst": "GameConst",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../utils/CoreSBN": "CoreSBN"
} ],
Box: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ba4c8Lv39FE67FqTp+Wf0qC", "Box");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("./GameConst"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.holes = [];
t.nail_scale = 1;
t.color = 0;
t.nails = [];
t.is_prop = !1;
t.boxes = null;
t._state = s.eBoxState.Idle;
t.state_handler = null;
t._interceptor = null;
return t;
}
Object.defineProperty(t.prototype, "empty_count", {
get: function() {
return 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "state", {
get: function() {
return this._state;
},
set: function(e) {
if (e != this._state) {
this._state = e;
this.state_handler && this.state_handler(this);
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "nails_count", {
get: function() {
return 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "fulled", {
get: function() {
return this.nails.length >= this.holes.length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "interceptor", {
set: function(e) {
this._interceptor = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function() {};
t.prototype.putNailToBox = function() {
return null;
};
t.prototype.changeParent = function(e, t) {
if (cc.isValid(e) && e.parent != t) {
var o = t.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v3(0, 0)));
e.parent = t;
e.position = o;
}
};
t.prototype.dealState = function(e) {
e == s.eBoxState.Closing && this.close() && this.die();
};
t.prototype.checkSelf = function() {
return a(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
if (!(this.empty_count <= 0)) return [ 3, 2 ];
this.state = s.eBoxState.Closing;
return [ 4, this.dealState(this.state) ];

case 1:
e.sent();
return [ 2, this ];

case 2:
return [ 2 ];
}
});
});
};
t.prototype.gotoPosition = function(e) {
this.node.position = e;
};
t.prototype.setSkin = function() {};
t.prototype.born = function() {};
t.prototype.close = function() {
return null;
};
t.prototype.die = function() {};
t.prototype.clean = function() {
this.holes.forEach(function(e) {
e.children.forEach(function(e) {
e.destroy();
});
});
};
r([ p([ cc.Node ]) ], t.prototype, "holes", void 0);
r([ p ], t.prototype, "nail_scale", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./GameConst": "GameConst"
} ],
CoinItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "da104q6mTNLHZr2oqjmW733", "CoinItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.numLab = null;
return t;
}
t.prototype.start = function() {
this.updaeNum();
c.CoreSBN.message.on(a.EventNameSBN.coin_change, this.updaeNum, this);
};
t.prototype.updaeNum = function() {
var e = c.CoreSBN.gameData.Coin;
console.log("num", e);
this.numLab.string = e.toString();
};
t.prototype.onDestroy = function() {
c.CoreSBN.message.removeAll(this);
};
r([ u(cc.Label) ], t.prototype, "numLab", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN"
} ],
CommonEnum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "22488nmEoVAS6fbIDYUjNjn", "CommonEnum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.EventName = o.GameSceneName = void 0;
o.GameSceneName = {
GameScene: "GamePlayScene",
LoadingScene: "LoadingScene"
};
o.EventName = {
webReload: "webReload",
webLeave: "webLeave",
reLogin: "reLogin"
};
cc._RF.pop();
}, {} ],
CommonReward: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b70be1UqoxOE7UOh+srO6MH", "CommonReward");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.redPacketNode = null;
t.dividendNode = null;
t.redPacketLabel = null;
t.dividendLabel = null;
t.redPacketTipLabel = null;
t.dividendTipLabel = null;
t.red_max_node = null;
t.div_max_node = null;
return t;
}
t.prototype.flush = function(e) {
if (e.red_packet_value) {
this.redPacketNode.active = !0;
e.red_packet_is_max ? this.redPacketLabel.string = "" + e.red_packet_value : this.redPacketLabel.string = "0";
this.div_max_node && (this.red_max_node.active = !!e.red_packet_is_max);
if (this.redPacketTipLabel) {
this.redPacketTipLabel.string = e.red_packet_tip;
this.redPacketTipLabel.node.parent.active = !!e.red_packet_tip;
}
} else this.redPacketNode.active = !1;
if (e.dividend_value) {
this.dividendNode.active = !0;
e.dividend_is_max ? this.dividendNode.getComponent(cc.Label).string = "" + e.dividend_value : this.dividendLabel.string = "0";
if (this.dividendTipLabel) {
this.dividendTipLabel.string = e.dividend_tip;
this.dividendTipLabel.node.parent.active = !!e.dividend_tip;
}
this.div_max_node && (this.div_max_node.active = !!e.dividend_is_max);
} else this.dividendNode.active = !1;
};
r([ s(cc.Node) ], t.prototype, "redPacketNode", void 0);
r([ s(cc.Node) ], t.prototype, "dividendNode", void 0);
r([ s(cc.Label) ], t.prototype, "redPacketLabel", void 0);
r([ s(cc.Label) ], t.prototype, "dividendLabel", void 0);
r([ s(cc.Label) ], t.prototype, "redPacketTipLabel", void 0);
r([ s(cc.Label) ], t.prototype, "dividendTipLabel", void 0);
r([ s(cc.Node) ], t.prototype, "red_max_node", void 0);
r([ s(cc.Node) ], t.prototype, "div_max_node", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
CommonToastRewardView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bf00a1Ke/1BcL//DNkOomS0", "CommonToastRewardView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("./SoundManager"), s = e("./CommonReward"), l = e("../../config/EnumDeclareSg"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.com_reward = null;
t.reward_label = null;
t.param = null;
t.tween = null;
return t;
}
t.prototype.show = function(t) {
var o, n = this;
e.prototype.show.call(this, t);
this.param = t.param;
this.refreshView();
null === (o = this.tween) || void 0 === o || o.stop();
this.tween = cc.tween(this.node).delay(1.5).call(function() {
n.flyReward();
n.tween = null;
}).start();
c.SoundManager.playSound(l.SoundNameSBN.rewardHengfu);
};
t.prototype.refreshView = function() {
this.com_reward.flush(this.param);
};
t.prototype.flyReward = function() {
this.on_close_call();
};
r([ f(s.default) ], t.prototype, "com_reward", void 0);
r([ f(cc.Label) ], t.prototype, "reward_label", void 0);
return r([ a.registerUIPath("GamePlay/Playboard/CommonToastRewardView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"./CommonReward": "CommonReward",
"./SoundManager": "SoundManager"
} ],
CoreSBN: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "57782zCfd5AYowdidLlD16g", "CoreSBN");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CoreSBN = void 0;
var n = e("../config/GameConfig"), i = e("../manager/DataGameContetrMgr"), r = e("../manager/PublicCommenMgr"), a = e("../manager/ResSBNMgr"), c = e("../manager/MessageSBNMgr"), s = e("../storage/StorageEntry"), l = e("../storage/StorageMgr"), u = e("./ObjectPoolManager"), p = e("../manager/SgballonADMgr"), f = e("../manager/SDKbridgeSBNMgr"), h = e("../manager/UserDataSBNMgr"), d = function() {
function e() {}
e.init = function() {
this.StorageMgr.init(new s.StorageEntry());
this.pool.init(e.config.commenBundle);
this.gameData.init();
h.default.ins.init();
};
Object.defineProperty(e, "config", {
get: function() {
return n.GameConfig.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "StorageMgr", {
get: function() {
return l.StorageMgr.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "gameData", {
get: function() {
return i.default.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "message", {
get: function() {
return c.default.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "publicFun", {
get: function() {
return r.PublicCommenMgr.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "res", {
get: function() {
return a.default.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "pool", {
get: function() {
return u.default.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "ad", {
get: function() {
return p.SgballonADMgr.ins();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "sdk", {
get: function() {
return f.SDKbridgeSBNMgr.ins();
},
enumerable: !1,
configurable: !0
});
return e;
}();
o.CoreSBN = d;
cc._RF.pop();
}, {
"../config/GameConfig": "GameConfig",
"../manager/DataGameContetrMgr": "DataGameContetrMgr",
"../manager/MessageSBNMgr": "MessageSBNMgr",
"../manager/PublicCommenMgr": "PublicCommenMgr",
"../manager/ResSBNMgr": "ResSBNMgr",
"../manager/SDKbridgeSBNMgr": "SDKbridgeSBNMgr",
"../manager/SgballonADMgr": "SgballonADMgr",
"../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../storage/StorageEntry": "StorageEntry",
"../storage/StorageMgr": "StorageMgr",
"./ObjectPoolManager": "ObjectPoolManager"
} ],
CubeEliminateEffect: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0529dp9p4NOWIyZOu0Sn8uR", "CubeEliminateEffect");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CubeEliminateEffect = void 0;
var a = e("../../Spript/Random"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.effectSkl = null;
t._cb = null;
return t;
}
t.prototype.onLoad = function() {
var e = this;
this.effectSkl.setCompleteListener(function() {
e.effectSkl.node.active = !1;
if (e._cb) {
e._cb();
e._cb = null;
}
});
};
t.prototype.playEffect = function(e, t) {
null == e && (e = a.default.rangeInt(1, 5));
this._cb = t;
this.effectSkl.node.active = !0;
this.effectSkl.setAnimation(0, "xx" + e, !1);
};
r([ l(sp.Skeleton) ], t.prototype, "effectSkl", void 0);
return r([ s ], t);
}(cc.Component);
o.CubeEliminateEffect = u;
cc._RF.pop();
}, {
"../../Spript/Random": "Random"
} ],
Dart: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0527bGqz6NCypKM+aO1yBk7", "Dart");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./GameConst"), c = cc._decorator, s = c.ccclass, l = c.property, u = [ "#b9ff00", "#ffac34", "#fdf300", "#ff4c5f", "#ff75d9", "#4eacff", "#71f1fd", "#9f6ffd", "#46556f", "#00ff40" ], p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.icon = null;
t.streak = null;
return t;
}
t.prototype.init = function(e) {
var t = this;
this.icon.node.active = !0;
var o = a.ImgName[e];
cc.resources.load("Mahjong/dart/" + o + "1", cc.SpriteFrame, function(e, o) {
cc.isValid(t.node) && o && (t.icon.spriteFrame = o);
});
this.streak.color = cc.color(u[e]);
};
r([ l(cc.Sprite) ], t.prototype, "icon", void 0);
r([ l(cc.MotionStreak) ], t.prototype, "streak", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./GameConst": "GameConst"
} ],
DataGameContetrMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "079f3J0bQ1OZ4bnf1Ly8LAR", "DataGameContetrMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ImgLocalKey = void 0;
var r = e("../config/EnumDeclareSg"), a = e("../config/ImageConfig"), c = e("../config/BeginLevelConfig"), s = e("../config/LoopLevelConfig"), l = e("../utils/IBassInsClass"), u = e("../utils/CoreSBN"), p = e("../UIManager/UIManager"), f = e("../game/view/LoadImgView");
o.ImgLocalKey = {
saveTex: "saveTex"
};
var h = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t._loclKey = "isgstoreGameLocalData";
t.settings = {};
t._coin = 0;
t._image_ad_config = {};
t.saveTex = {};
t.selectTex = -1;
t.signinData = {
totalDays: 1,
todayRewarded: !1
};
t.props = {};
t._curLevel = 1;
t.selectLev = -1;
t.isSpecialLevelRetain = !1;
t.preSpeTexArr = [];
t.prePuTexArr = [];
t.showAfterTexArr = [];
t.showBeforTexArr = [];
t.buyPropCost = 1e3;
t.videoPropCount = 3;
t.coinPropCount = 1;
t.loadResPro = 0;
t.gameType = r.GameTypeSBN.Normal;
t.bgTexId = -1;
t.curLevelImg = -1;
t.roundTexArr = [];
t.roundTexArrSR = [];
t.roundSpecialTexArr = [];
t.rewardData = null;
t.levelPic = 0;
t._curLevelMap = 0;
t.currScene = r.SceneNameSBN.Loading;
t.settings = {
sound: !0,
music: !0,
shake: !0
};
return t;
}
t.prototype.init = function() {
this.loadLocalData();
};
Object.defineProperty(t.prototype, "Coin", {
get: function() {
return this._coin || 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "CurLevel", {
get: function() {
return this._curLevel || 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "curLevelMap", {
get: function() {
return this._curLevelMap;
},
enumerable: !1,
configurable: !0
});
t.prototype.setCurLevelMap = function(e) {
this._curLevelMap = e;
};
t.prototype.setSettingBykey = function(e, t) {
this.settings[e] = t;
this.saveLocalData();
};
t.prototype.getSettingByKey = function(e) {
return this.settings[e];
};
t.prototype.addCoin = function(e, t) {
void 0 === t && (t = !0);
if (e) {
this._coin += e;
t && u.CoreSBN.message.emit(r.EventNameSBN.coin_change);
this.saveLocalData();
} else e = 0;
};
t.prototype.spendCoin = function(e, t) {
void 0 === t && (t = !0);
if (!e) {
e = 0;
return !0;
}
if (this._coin - e >= 0) {
this._coin -= e;
t && u.CoreSBN.message.emit(r.EventNameSBN.coin_change);
this.saveLocalData();
return !0;
}
return !1;
};
t.prototype.addProp = function(e, t) {
var o = e.toString();
this.props[o] || (this.props[o] = 0);
this.props[o] += t;
u.CoreSBN.message.emit(r.EventNameSBN.props_change, e);
this.saveLocalData();
};
t.prototype.consumeProps = function(e, t) {
var o = e.toString();
this.props[o] || (this.props[o] = 0);
if (this.props[o] - t >= 0) {
this.props[o] -= t;
u.CoreSBN.message.emit(r.EventNameSBN.use_prop, e);
u.CoreSBN.message.emit(r.EventNameSBN.props_change, e);
this.saveLocalData();
return !0;
}
return !1;
};
t.prototype.updateSigninStatus = function(e) {
this.signinData = e;
this.saveLocalData();
};
t.prototype.setTexByKey = function(e, t) {
this._image_ad_config[e] = t;
this.saveLocalData();
};
t.prototype.getTexByKey = function(e) {
return this._image_ad_config[e];
};
t.prototype.getRoundTex = function() {
this.roundTexArr = [];
this.roundTexArrSR = [];
this.roundSpecialTexArr = [];
var e = a.ImageConfig.getDatas(), t = c.BeginLevelConfig.size(), o = c.BeginLevelConfig.getDatas(), n = [];
for (var i in o) {
for (var r = (p = o[i]).level_pic, s = p.level_pic1, l = 0; l < r.length; l++) n.push(r[l]);
for (var u = 0; u < s.length; u++) n.push(s[u]);
}
for (var i in e) {
var p = e[i], f = !1;
for (var h in this.saveTex) p.pic_id != this.saveTex[h].texIndex || (f = !0);
if (!f) if (this.CurLevel > t) p.is_special ? this.roundSpecialTexArr.push(p.pic_id) : 1 == p.content_lv ? this.roundTexArr.push(p.pic_id) : this.roundTexArrSR.push(p.pic_id); else {
var d = !1;
for (u = 0; u < n.length; u++) p.pic_id != n[u] || (d = !0);
d || (p.is_special ? this.roundSpecialTexArr.push(p.pic_id) : 1 == p.content_lv ? this.roundTexArr.push(p.pic_id) : this.roundTexArrSR.push(p.pic_id));
}
}
if (this.roundTexArr.length < 1) for (var i in e) 1 == (p = e[i]).content_lv && this.roundTexArr.push(p.pic_id);
if (this.roundTexArrSR.length < 1) for (var i in e) 2 == (p = e[i]).content_lv && this.roundTexArrSR.push(p.pic_id);
if (this.roundSpecialTexArr.length < 1) for (var i in e) (p = e[i]).is_special && this.roundSpecialTexArr.push(p.pic_id);
};
t.prototype.getRoundLevData = function() {
var e = c.BeginLevelConfig.size(), t = this.CurLevel, o = null;
if (this.selectLev > -1) o = t > e ? s.LoopLevelConfig.query(this.selectLev) : c.BeginLevelConfig.query(this.selectLev); else {
if (t > e) {
var n = s.LoopLevelConfig.levelIdArr(), i = n[n.length - 1] || 1, r = (t - e - 1) % Number(i) + 1;
o = s.LoopLevelConfig.query(r);
this.selectLev = o.level_id;
} else {
o = c.BeginLevelConfig.query(t);
this.selectLev = t;
}
this.saveLocalData();
}
this.rewardData = o;
return o;
};
t.prototype.preNextImg = function() {
if (this.showBeforTexArr && this.showBeforTexArr.length > 0) {
for (var e = [], t = 0; t < this.showBeforTexArr.length; t++) {
var o = this.showBeforTexArr[t];
e.push(o);
}
a.ImageConfig.preloadImgList(e);
} else this.loadNextRoundTex(this.CurLevel);
};
t.prototype.loadNextRoundTex = function(e, t) {
void 0 === t && (t = !0);
if (this.showBeforTexArr && this.showBeforTexArr.length > 0) console.log("preload next:", this.showBeforTexArr.length); else {
this.showBeforTexArr = [];
var o = this._curLevel + 1;
e && e > 0 && (o = e);
var n = null, i = c.BeginLevelConfig.size();
this.clearShowImg();
if (o > i) {
if (this.prePuTexArr.length < 1 && this.prePuTexArr.length <= 0) {
var r = this.roundImgByType(1);
this.prePuTexArr.push(r);
}
if (this.preSpeTexArr.length <= 0) {
r = this.roundImgByType(2);
this.preSpeTexArr.push(r);
}
} else if (n = c.BeginLevelConfig.query(o)) if (n.is_special) {
n.level_pic && n.level_pic.length > 0 && (this.preSpeTexArr = n.level_pic.concat([]));
if (this.preSpeTexArr.length <= 0) {
r = this.roundImgByType(2);
this.preSpeTexArr.push(r);
}
if (n.level_pic1 && n.level_pic1.length > 0) for (var a = 0; a < n.level_pic1.length; a++) this.prePuTexArr.unshift(n.level_pic1[a]);
if (this.prePuTexArr.length < 1) {
r = this.roundImgByType(1);
this.prePuTexArr.push(r);
}
} else {
if (n.level_pic) for (a = 0; a < n.level_pic.length; a++) this.prePuTexArr.unshift(n.level_pic[a]);
if (n.level_pic1 && n.level_pic1.length > 0) for (a = 0; a < n.level_pic1.length; a++) this.prePuTexArr.unshift(n.level_pic1[a]);
if (this.prePuTexArr.length < 1) {
r = this.roundImgByType(1);
this.prePuTexArr.push(r);
}
}
this.showBeforTexArr = this.showBeforTexArr.concat(this.preSpeTexArr);
this.showBeforTexArr = this.showBeforTexArr.concat(this.prePuTexArr);
this.saveLocalData();
this.showBeforTexArr && this.showBeforTexArr.length > 0 && t && this.preNextImg();
}
};
t.prototype.clearShowImg = function() {
var e = this._curLevel, t = c.BeginLevelConfig.size(), o = c.BeginLevelConfig.query(e);
if (e <= t && o && this.prePuTexArr.length > 0) {
if (o.level_pic) for (var n = 0; n < o.level_pic.length; n++) for (var i = this.prePuTexArr.length - 1; i >= 0; i--) o.level_pic[n] == this.prePuTexArr[i] && this.prePuTexArr.splice(i, 1);
if (o.level_pic1) for (n = 0; n < o.level_pic1.length; n++) for (i = this.prePuTexArr.length - 1; i >= 0; i--) o.level_pic1[n] == this.prePuTexArr[i] && this.prePuTexArr.splice(i, 1);
}
};
t.prototype.roundImgByType = function(e) {
var t = a.ImageConfig.getDatas(), o = 0;
if (2 == e) {
if (this.roundSpecialTexArr.length < 1) for (var n in t) (i = t[n]).is_special && this.roundSpecialTexArr.push(i.pic_id);
o = u.CoreSBN.publicFun.getRandomValueChangeByArr(this.roundSpecialTexArr);
} else {
if (this.roundTexArr.length < 1 && this.roundTexArrSR.length < 1) for (var n in t) {
var i;
(i = t[n]).is_special || (1 == i.content_lv ? this.roundTexArr.push(i.pic_id) : this.roundTexArrSR.push(i.pic_id));
}
var r = this.roundTexArr.concat(this.roundTexArrSR);
o = u.CoreSBN.publicFun.getRandomValueChangeByArr(r);
for (var c = 0; c < this.roundTexArr.length; c++) if (this.roundTexArr[c] == o) {
this.roundTexArr.splice(c, 1);
break;
}
for (c = 0; c < this.roundTexArrSR.length; c++) if (this.roundTexArrSR[c] == o) {
this.roundTexArrSR.splice(c, 1);
break;
}
}
return o;
};
t.prototype.rouncGetImgByCont = function(e) {
return 1 == e ? this.isHaveContentImg(this.roundTexArr, e) : 2 == e ? this.isHaveContentImg(this.roundTexArrSR, e) : this.isHaveContentImg(this.roundSpecialTexArr, e);
};
t.prototype.isHaveContentImg = function(e, t) {
var o = a.ImageConfig.getDatas();
if (e.length <= 0) for (var n in o) {
var i = o[n];
i.content_lv == t && e.push(i.pic_id);
}
return u.CoreSBN.publicFun.getRandomValueChangeByArr(e) || 0;
};
t.prototype.addLev = function(e) {
e || (e = 0);
this._curLevel = e;
if (a.ImageConfig.query(this.curLevelImg)) {
var t = {
texIndex: this.curLevelImg,
like: !1
};
this.saveTex[this.curLevelImg] || (this.saveTex[this.curLevelImg] = t);
}
this.selectLev = -1;
this.selectTex = -1;
this.curLevelImg = -1;
this.getRoundTex();
this.saveLocalData();
};
t.prototype.likeUnlike = function(e) {
var t = this.saveTex[e.texIndex];
if (t) {
e.like;
if (t.like != e.like) {
this.saveTex[e.texIndex].like = e.like;
u.CoreSBN.message.emit(r.EventNameSBN.like_change);
this.saveLocalData();
}
}
};
t.prototype.setSelectTex = function(e, t) {
void 0 === t && (t = !0);
if (a.ImageConfig.query(e)) {
this.setLocalArr([]);
this.selectTex = e;
this.curLevelImg = e;
this.showBeforTexArr = [];
this.loadNextRoundTex(null, t);
this.saveLocalData();
}
};
t.prototype.setLocalArr = function(e) {
e || (e = []);
console.log("localTex:", e);
this.setTexByKey(a.IImgLocalKey.localTex, e);
this.saveLocalData();
};
t.prototype.localTexArr = function() {
return this.getTexByKey(a.IImgLocalKey.localTex) || [];
};
t.prototype.getTexUnShow = function(e) {
var t = null;
if (2 == e) if (this.preSpeTexArr.length > 0) t = this.preSpeTexArr.shift(); else {
t = this.roundImgByType(2);
this.showBeforTexArr.push(t);
} else if (1 == e) if (this.prePuTexArr.length > 0) t = this.prePuTexArr.shift(); else {
t = this.roundImgByType(1);
this.showBeforTexArr.push(t);
}
this.saveLocalData();
return t;
};
t.prototype.markTextureAsShown = function(e) {
for (var t = this.prePuTexArr.length - 1; t >= 0; t--) e == this.prePuTexArr[t] && this.prePuTexArr.splice(t, 1);
for (t = this.preSpeTexArr.length - 1; t >= 0; t--) e == this.preSpeTexArr[t] && this.preSpeTexArr.splice(t, 1);
this.saveLocalData();
};
t.prototype.selectImgView = function() {
var e = this;
this.getRoundLevData();
var t = this.getRoundLevData();
if (this.selectTex && this.selectTex > 0) {
var o = u.CoreSBN.gameData.currScene;
this.curLevelImg = this.selectTex;
var n = a.ImageConfig.query(this.selectTex);
n && n.is_special ? u.CoreSBN.gameData.gameType = r.GameTypeSBN.Special : u.CoreSBN.gameData.gameType = r.GameTypeSBN.Normal;
this.setCurLevelMap(this.CurLevel);
o == r.SceneNameSBN.Home ? u.CoreSBN.gameData.changeScene(r.SceneNameSBN.Main) : u.CoreSBN.message.emit(r.EventNameSBN.game_start, !0);
} else if (t) {
var i = [];
if (t.is_special && !this.isSpecialLevelRetain) {
if (t.level_pic && t.level_pic.length > 0) i = t.level_pic; else if ((l = this.localTexArr()).length > 0) i = l; else {
var c = this.getTexUnShow(2);
i.push(c);
}
for (var s = 0; s < i.length; s++) this.markTextureAsShown(i[s]);
this.setLocalArr(i);
} else {
if (t.is_special && this.isSpecialLevelRetain) (l = this.localTexArr()).length > 1 ? i = l : t.level_pic1 && t.level_pic1.length > 0 && (i = t.level_pic1); else {
var l;
(l = this.localTexArr()).length > 1 ? i = l : t.level_pic && t.level_pic.length > 0 && (i = t.level_pic);
}
if ((i.length || 0) < 1) {
c = this.getTexUnShow(1);
i.push(c);
}
this.setLocalArr(i);
for (s = 0; s < i.length; s++) this.markTextureAsShown(i[s]);
f.default.open({
loadList: [],
suc: function() {
var t = u.CoreSBN.gameData.currScene;
e.setCurLevelMap(e.CurLevel);
u.CoreSBN.gameData.setSelectTex(i[0]);
u.CoreSBN.gameData.gameType = r.GameTypeSBN.Normal;
t == r.SceneNameSBN.Home ? u.CoreSBN.gameData.changeScene(r.SceneNameSBN.Main) : u.CoreSBN.message.emit(r.EventNameSBN.game_start, !0);
},
fail: function() {
u.CoreSBN.gameData.currScene == r.SceneNameSBN.Main && u.CoreSBN.gameData.changeScene(r.SceneNameSBN.Home);
}
});
}
}
};
t.prototype.saveLocalData = function() {
u.CoreSBN.StorageMgr.set(this._loclKey, JSON.stringify({
settings: this.settings,
coin: this._coin,
curLevel: this._curLevel,
selectTex: this.selectTex,
saveTex: this.saveTex,
selectLev: this.selectLev,
signinData: this.signinData,
isSpecialLevelRetain: this.isSpecialLevelRetain,
preSpeTexArr: this.preSpeTexArr,
prePuTexArr: this.prePuTexArr,
shownTexArr: this.showAfterTexArr,
showBeforTexArr: this.showBeforTexArr,
props: this.props
}));
};
t.prototype.loadLocalData = function() {
var e = u.CoreSBN.StorageMgr.get(this._loclKey);
if (e) {
var t = JSON.parse(e);
this.settings = t.settings || this.settings;
this._coin = t.coin || this._coin;
this._curLevel = t.curLevel || this._curLevel;
this.selectTex = t.selectTex || this.selectTex;
this.selectLev = t.selectLev || this.selectLev;
this.saveTex = t.saveTex || this.saveTex;
this.signinData = t.signinData || this.signinData;
this.isSpecialLevelRetain = t.isSpecialLevelRetain || this.isSpecialLevelRetain;
this.preSpeTexArr = t.preSpeTexArr || [];
this.prePuTexArr = t.prePuTexArr || [];
this.showAfterTexArr = t.shownTexArr || [];
this.showBeforTexArr = t.showBeforTexArr || [];
this.props = t.props || this.props;
}
};
t.prototype.changeScene = function(e) {
if (e != u.CoreSBN.gameData.currScene) {
cc.director.loadScene(e);
p.default.clear_ui();
}
};
return t;
}(l.default);
o.default = h;
cc._RF.pop();
}, {
"../UIManager/UIManager": "UIManager",
"../config/BeginLevelConfig": "BeginLevelConfig",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../config/ImageConfig": "ImageConfig",
"../config/LoopLevelConfig": "LoopLevelConfig",
"../game/view/LoadImgView": "LoadImgView",
"../utils/CoreSBN": "CoreSBN",
"../utils/IBassInsClass": "IBassInsClass"
} ],
DialogManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "caeb95HpBBLF7NqakrXKU/U", "DialogManager");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DialogManager = void 0;
var r = e("../../Spript/Singleton"), a = e("../../Spript/FrameConst"), c = e("./Logger"), s = e("./Hi5_UIManager"), l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._dialogs = {};
t._assets = [];
return t;
}
t.prototype.onInit = function() {
this._init_assets();
};
t.prototype._init_assets = function() {
var e = this;
cc.resources.loadDir(a.Hi5Conf.dialog_dir_name, cc.Asset, function(t, o) {
e._assets = o;
c.logger.info("dialog assets load done");
});
};
t.prototype.wrap_node = function(e) {
var t = new cc.Node("_wrap_parent_" + e.name + "_");
e.zIndex = 9;
e.parent = t;
e.setPosition(cc.v2(0, 0));
t.addComponent(cc.BlockInputEvents);
var o = null;
if (o = s.UIManager.getInstance().get_mask_node()) o = cc.instantiate(o); else {
var n = (o = new cc.Node()).addComponent(cc.Sprite);
n.spriteFrame = s.UIManager.getInstance().get_mask();
n.sizeMode = cc.Sprite.SizeMode.CUSTOM;
n.type = cc.Sprite.Type.SIMPLE;
}
o.name = "_mask_" + e.name + "_";
o.zIndex = 1;
o.opacity = 190;
o.parent = t;
o.width = cc.view.getVisibleSize().width;
o.height = cc.view.getVisibleSize().height;
o.addComponent(cc.BlockInputEvents);
o.active = !0;
return t;
};
t.prototype.register = function(e, t, o) {
var n = this._dialogs[e];
if (n) {
c.logger.info("repeat register dlg ", e);
return n;
}
var i = this._assets.find(function(t) {
return t.name === e;
});
if (!i) {
c.logger.error("dlg prefab not exist ", e);
return null;
}
var r = cc.instantiate(i), l = this.wrap_node(r);
if (s.UIManager.getInstance().push(l, a.LayerOrder.Frontground)) {
var u = r.getComponents(cc.Component), p = u.find(function(e) {
return e.constructor.name === t.name;
});
o && o(p);
if (!u || u.length <= 0 || !p) {
c.logger.error("当前弹窗未配置脚本：", e);
return null;
}
c.logger.info("auto register dlg ", e);
return this._dialogs[e] = p;
}
c.logger.error("push dlg to ui error ", e);
return null;
};
t.prototype.open = function(e) {
var t = this.register(e.name, e.controller, e.complete_callback), o = Object.assign({}, e);
delete o.controller;
t && t.show(o);
};
t.ZINDEX = 1e4;
return t;
}(r.Singleton);
o.DialogManager = l;
cc._RF.pop();
}, {
"../../Spript/FrameConst": "FrameConst",
"../../Spript/Singleton": "Singleton",
"./Hi5_UIManager": "Hi5_UIManager",
"./Logger": "Logger"
} ],
Encourage: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3034daTRSVEcoKM3BGOSLgM", "Encourage");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../common/BaseNode"), c = e("../../Views/UIUtils"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.num_node = null;
t.hint_node = null;
t.num_frames = [];
t.pb_sprite = null;
t.count_num = 0;
t.cd_time = 15;
t._cur_time = 0;
t.pause = !1;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.reset = function() {
this.hint_node.active = !1;
this.count_num = 0;
this.cd_time = 3;
};
t.prototype.add = function(e) {
void 0 === e && (e = 0);
this.count_num++;
this.count_num >= 2 && this.showHint();
};
t.prototype.showHint = function() {
this.hint_node.stopAllActions();
this.hint_node.x = 0;
for (var e = "" + this.count_num, t = e.length, o = c.default.getInstance().copyNodeToList(t, Array.from(this.num_node.children)), n = 0; n < t; n++) {
var i = Number(e[n]);
o.shift().getComponent(cc.Sprite).spriteFrame = this.num_frames[i];
}
this.pb_sprite.fillRange = 1;
this.hint_node.active = !0;
this._cur_time = this.cd_time;
};
t.prototype.hideHint = function() {
var e = this;
this.count_num = 0;
cc.tween(this.hint_node).to(.1, {
x: -375
}).call(function() {
e.hint_node.active = !1;
}).start();
};
t.prototype.update = function(e) {
if (this.hint_node.active && this._cur_time > 0) {
if (this.pause) return;
this._cur_time -= e;
this.pb_sprite.fillRange = Math.max(this._cur_time / this.cd_time, 0);
this._cur_time <= 0 && this.hideHint();
}
};
r([ u(cc.Node) ], t.prototype, "num_node", void 0);
r([ u(cc.Node) ], t.prototype, "hint_node", void 0);
r([ u([ cc.SpriteFrame ]) ], t.prototype, "num_frames", void 0);
r([ u(cc.Sprite) ], t.prototype, "pb_sprite", void 0);
return r([ l ], t);
}(a.default);
o.default = p;
cc._RF.pop();
}, {
"../../../common/BaseNode": "BaseNode",
"../../Views/UIUtils": "UIUtils"
} ],
EnumDeclareSg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "65a98zpuChA24SyLZA+J9RN", "EnumDeclareSg");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SoundNameSBN = o.PropNameSBN = o.UnlockLevelSBN = o.SpineNameSBN = o.EventNameSBN = o.PrefabNameSBN = o.GameTypeSBN = o.SceneNameSBN = o.RewardTypeSBN = o.AssetType = void 0;
o.AssetType = {
Prefab: {
type: cc.Prefab,
path: "preload/view/"
},
ItemPrefab: {
type: cc.Prefab,
path: "preload/itemView/"
},
Json: {
type: cc.JsonAsset,
path: "preload/config/"
},
Sound: {
type: cc.AudioClip,
path: "preload/Sounds/"
},
Atlas: {
type: cc.SpriteAtlas,
path: "preload/Atlas/"
},
Sprites: {
type: cc.SpriteFrame,
path: "preload/tex/"
},
Bins: {
type: cc.BufferAsset,
path: "preload/Bins/"
}
};
o.RewardTypeSBN = {
coin: 0,
power: 1,
prop1: 2,
prop2: 3,
prop3: 4
};
o.SceneNameSBN = {
Loading: "LoadingScene",
Home: "HomeScene",
Main: "GamePlayScene"
};
o.GameTypeSBN = {
Normal: 0,
Special: 1,
Battle: 2
};
o.PrefabNameSBN = {
HomeGameUi: "HomeGameUi",
HeadSBnView: "HeadSBnView",
Plank: "Plank",
Nail: "Nail",
LockPot: "LockPot",
BoxC: "BoxC",
Hammer: "Hammer",
Tail: "Tail",
FlowerHint: "FlowerHint",
CubeEliminateEffect: "CubeEliminateEffect",
Dart: "Dart",
NailSpine: "NailSpine",
RankingView: "RankingView",
headHome: "HeadHomeItem",
BattleLoadingView: "BattleLoadingView",
BattleStartAniView: "BattleStartAniView",
headMainItem: "HeadMainItem",
BattleEmojyItem: "BattleEmojyItem",
BattleWinView: "BattleWinView",
BattleLoseView: "BattleLoseView",
SigninView: "SigninView"
};
o.EventNameSBN = {
time_change: "time_change",
coin_change: "coin_change",
props_change: "props_change",
like_change: "like_change",
change_day: "change_day",
game_start: "game_start",
use_prop: "use_prop",
battle_re_match: "battle_re_match",
battle_give_up: "battle_give_up",
save_img_status: "save_img_status",
save_video_status: "save_video_status"
};
o.SpineNameSBN = {
Win: "con_chu",
WinLoop: "con_daiji",
WinDuizhan: "win_chu",
WinDuizhanLoop: "win_daiji",
Reward: "animation",
Reward_event: "wt",
Reward_bg_enter: "animation",
Reward_bg_loop: "animation2"
};
o.UnlockLevelSBN = {
AddHole: 3,
Clean: 5,
Package: 7
};
o.PropNameSBN = {
AddHole: "AddHole",
Clean: "Clean",
Package: "Package"
};
o.SoundNameSBN = {
bgm: "bg",
dianzhan: "dianzhan",
banzisui: "banzisui",
get_tili: "get_tili",
wufayidong: "wufayidong",
rewardHengfu: "rewardHengfu",
shibai: "shibai",
shengli: "shengli",
qiqiuBoom: "qiqiuBoom",
biaobagenghua: "biaobagenghua"
};
cc._RF.pop();
}, {} ],
EventConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d36foLGBhIL7B5SzM41aN5", "EventConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = {
test: "test",
on_hide: "on_hide",
on_show: "on_show",
netting_hide: "netting_hide",
netting_show: "netting_show",
every_second_flush: "every_second_flush"
};
cc._RF.pop();
}, {} ],
EventManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3836cDmOyVO9pSoGIh3XQsL", "EventManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e(e, t, o) {
this.event_name = "";
this.target = null;
this.cb = null;
this.event_name = e;
this.target = t;
this.cb = o;
}
e.prototype.trigger = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
this.cb.apply(this.target, e);
};
return e;
}(), i = function() {
function e() {
this._event_dict = {};
}
e.get_instance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
e.prototype.listen = function(e) {
var t = this._event_dict[e.name];
if (t) this.cancel_listen(e.name, e.target, e.call_back); else {
t = [];
this._event_dict[e.name] = t;
}
var o = new n(e.name, e.target, e.call_back);
t.push(o);
};
e.prototype.cancel_listen = function(e, t) {
var o = this._event_dict[e];
if (o) for (var n = 0; n < o.length; ++n) if (o[n].target === t) {
o.splice(n, 1);
break;
}
};
e.prototype.emit = function(e) {
for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
"string" == typeof e && (e = {
name: e
});
var n = this._event_dict[e.name];
if (n) for (var i = n.length - 1; i >= 0 && !e.is_swallow; --i) {
for (var r = n[i], a = [ e ], c = 0; c < t.length; ++c) a.push(t[c]);
r.trigger.apply(r, a);
}
};
e._instance = null;
return e;
}();
o.default = i;
cc._RF.pop();
}, {} ],
FailureView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "79923vNvY5LnKSwnLfoL2Pj", "FailureView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../config/EnumDeclareSg"), s = e("../../utils/CoreSBN"), l = e("./SoundManager"), u = cc._decorator, p = u.ccclass, f = (u.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.param = null;
t.closeAction = null;
t.userAction = null;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.show = function(t) {
var o, n;
e.prototype.show.call(this, t);
this.param = t.param;
this.closeAction = null === (o = this.param) || void 0 === o ? void 0 : o.backAction;
this.userAction = null === (n = this.param) || void 0 === n ? void 0 : n.userAction;
l.SoundManager.playSound(c.SoundNameSBN.shibai);
};
t.prototype.onreviveBtn = function() {
s.CoreSBN.ad.showRewardVideo(this.onReward.bind(this), this.onfaild.bind(this));
};
t.prototype.onresatrtBtn = function() {
this.on_close_call();
this.closeAction && this.closeAction(!0);
};
t.prototype.omCloseBtn = function() {
this.on_close_call();
s.CoreSBN.gameData.changeScene(c.SceneNameSBN.Home);
};
t.prototype.onReward = function() {
if (this.node && this.node.isValid) {
this.on_close_call();
this.userAction && this.userAction();
}
};
t.prototype.onfaild = function() {};
return r([ p, a.registerUIPath("prefabSbn/FailureView") ], t);
}(a.default));
o.default = f;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN",
"./SoundManager": "SoundManager"
} ],
FlowerComp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cebfdf9cE1PzKLGpQxJ3FhS", "FlowerComp");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.eFlowerLayer = void 0;
var s = e("../../Views/PlayboardEnum"), l = e("./Prop"), u = e("./GameConst"), p = e("./Plank"), f = e("./FlowerEntity"), h = e("./Slot"), d = e("../../../Spript/Boxes"), _ = e("./Layer"), g = e("../../../UIManager/UIManager"), y = e("../../../Spript/Tools"), m = e("./Encourage"), v = e("../../../GameDataConfig/GameDataConfig"), b = e("../../../Spript/GamePlayConfigEnum"), S = e("../../Views/SoundManager"), w = e("../../../core/managers/ActionsHelp"), B = e("../../../GameDataConfig/Utils"), C = e("../../../utils/CoreSBN"), N = e("../../../config/EnumDeclareSg"), P = e("../../Views/MahjongManager"), O = e("../../../game/view/LockPropsView"), R = e("../../../manager/UserDataSBNMgr"), k = cc._decorator, A = k.ccclass, I = k.property;
o.eFlowerLayer = cc.Enum({
Pot: 0,
Flower: 200,
Top: 2e3
});
var D = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.game_type = s.PlayBoardEnum.Game;
t.game_panel = null;
t.game_touch = null;
t.props = [];
t.slot = null;
t.boxes = null;
t.encourage = null;
t.hint_node = null;
t.recycle_node = null;
t.open_hole_hint = null;
t.tipsBtn = null;
t.clicktouNode = null;
t.tipsWiget = null;
t.control = null;
t._layer_display_state = null;
t._package_count = 0;
t.layers = new Map();
t._state = new u.State();
t.zoom = 1;
t._open_hole_hint = [];
t.onBoxDied = function(e) {
var o = t.boxes.remain_box_count;
t.checkGameView(o);
var n = t.state.has(u.eGameState.Success);
n || e.is_prop || t.encourage.add(1);
t.control && t.control.onCompleteOneCard && t.control.onCompleteOneCard(e, e.is_prop, n, o);
t.saveGame();
};
t.map_data = null;
t.max_layer = 0;
t.onPlankDie = function(e) {
t.removePlankFromLayer(e);
t.saveGame();
t.checkGameView(null);
};
t.debug_label = null;
t._propsData = null;
return t;
}
t.prototype.onBoxBored = function(e) {
return a(this, void 0, void 0, function() {
return c(this, function(t) {
switch (t.label) {
case 0:
return [ 4, e.checkSelf() ];

case 1:
t.sent();
return e.state == u.eBoxState.Idle ? [ 4, this.checkSlotNails(e) ] : [ 3, 3 ];

case 2:
t.sent();
t.label = 3;

case 3:
this.check();
return [ 2 ];
}
});
});
};
Object.defineProperty(t.prototype, "layer_display_state", {
get: function() {
this._layer_display_state || (this._layer_display_state = JSON.parse(v.default.game_play_config_value(b.GamePlayConfigEnum.layer_display_state).value));
return this._layer_display_state;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "package_count", {
get: function() {
this._package_count <= 0 && (this._package_count = +v.default.game_play_config_value(b.GamePlayConfigEnum.package_count).value);
return this._package_count;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "open_hole_hint_data", {
get: function() {
this._open_hole_hint.length <= 0 && (this._open_hole_hint = JSON.parse(v.default.game_play_config_value(b.GamePlayConfigEnum.open_hole_hint).value));
return this._open_hole_hint;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "state", {
get: function() {
return this._state;
},
enumerable: !1,
configurable: !0
});
t.prototype.start = function() {
this.setTouchEvent();
};
t.prototype.onLoad = function() {
C.CoreSBN.publicFun.isAdaptationViewLong() ? this.tipsWiget.top = 82 + C.CoreSBN.config.topLongHeight : this.tipsWiget.top = 82 + C.CoreSBN.config.topShortHeight;
this.setupHint();
this.initDebug();
this.initProp();
this.setup();
};
t.prototype.initProp = function() {
var e = this;
this.props.forEach(function(t) {
t.setUsedPropHandler(function(t) {
e.onUseProp(t);
}, function(t) {
e.control.level_logic.addProp(t.type);
e.onUseProp(t);
});
});
};
t.prototype.getAllCanTouchNails = function(e) {
for (var t = [], o = [], n = this.max_layer; n >= 0; n--) {
var i = this.layers.get(n);
if (i && i.state == u.eLayer.Idle) for (var r = 0, a = i.planks; r < a.length; r++) {
for (var c = a[r], s = 0, l = c.nails; s < l.length; s++) {
var p = l[s];
e == p.color && f(p, o) && t.push(p);
}
o.push(c);
}
}
return t;
function f(e, t) {
for (var o = e.touch.getSharp().word_points, n = 0, i = t; n < i.length; n++) {
var r = i[n];
if (!(r.nails.indexOf(e) >= 0) && cc.Intersection.polygonPolygon(r.touch.getSharp().word_points, o)) return !1;
}
return !0;
}
};
t.prototype.setup = function() {
var e = this;
this.boxes.setBoxHandler(function() {
return e.onUseProp(s.PlayBoardPropsEnum.Open);
}, this.onBoxDied.bind(this), this.onBoxBored.bind(this));
};
t.prototype.checkGameView = function(e) {
var t = this;
null == e && (e = this.boxes.remain_box_count);
var o = e <= 0;
if (!o) {
for (var n = !0, i = 0, r = Array.from(this.layers); i < r.length; i++) {
var a = r[i];
a[0];
if (!a[1].complete) {
n = !1;
break;
}
}
o = n;
}
if (o && !this.state.has(u.eGameState.Success)) {
this.state.add(u.eGameState.Success);
this.scheduleOnce(function() {
if (t.state.has(u.eGameState.Success) && !t.state.has(u.eGameState.Complete)) {
t.control.onGamePassed();
t.state.add(u.eGameState.Complete);
}
}, 2);
}
return o;
};
t.prototype.checkSlotNails = function(e) {
return a(this, void 0, void 0, function() {
var t, o;
return c(this, function(n) {
switch (n.label) {
case 0:
t = this.slot.nails.filter(function(t) {
return t && t.color === e.color && t.state == u.eBoxState.Idle;
}), o = Math.min(t.length, e.empty_count);
if (!((t = t.slice(0, o)).length > 0)) return [ 3, 2 ];
this.slot.setNailEmpty(t);
return [ 4, e.putNailToBox(t) ];

case 1:
n.sent();
n.label = 2;

case 2:
return [ 2 ];
}
});
});
};
t.prototype.setupHint = function() {
var e = this;
this.state.change(function() {
e._state.cur == u.eGameState.playing ? e.startSoftHint(!0) : e.startSoftHint(!1);
e.hint_node.active = e.state.has(u.eGameState.Cleaning);
});
};
t.prototype.startSoftHint = function() {};
t.prototype.getGuideData = function() {
var e = this.boxes.boxes[0], t = [];
e && (t = this.getNailsByColorWithCount(e.color, e.empty_count));
return {
box: e,
nails: t
};
};
t.prototype.getNailsByColorWithCount = function(e, t) {
void 0 === t && (t = 3);
for (var o = [], n = this.max_layer; n >= 0; n--) {
var i = this.layers.get(n);
if (i && i.state == u.eLayer.Idle) for (var r = 0, a = i.planks; r < a.length; r++) for (var c = 0, s = a[r].nails; c < s.length; c++) {
var l = s[c];
if (l.color == e) {
o.push(l);
if (o.length >= t) return o;
}
}
}
return o;
};
t.prototype.reset = function() {
return a(this, void 0, void 0, function() {
var e, t = this;
return c(this, function(o) {
switch (o.label) {
case 0:
this.startSoftHint(!1);
this.open_hole_hint.active = !1;
this.encourage.reset();
this.slot.reset();
this.boxes.reset();
this.layers.clear();
this.unscheduleAllCallbacks();
(e = this.game_panel.children).length > 0 && Array.from(e).forEach(function(e) {
e.destroy();
});
return [ 4, new Promise(function(e) {
t.scheduleOnce(function() {
e(!0);
});
}) ];

case 1:
o.sent();
this.game_panel.width = this.game_panel.parent.width;
this.game_panel.height = this.game_panel.parent.height;
return [ 2 ];
}
});
});
};
t.prototype.flushLayer = function() {
for (var e = 0, t = this.max_layer; t >= 0; t--) {
var o = this.layers.get(t);
if (o && o.planks.length > 0) {
e <= this.layer_display_state[0] ? o.state = u.eLayer.Idle : e > this.layer_display_state[0] && e <= this.layer_display_state[1] ? o.state = u.eLayer.Lock : o.state = u.eLayer.Hide;
e++;
}
}
};
t.prototype.startPlaying = function(e, t) {
return a(this, void 0, void 0, function() {
return c(this, function(o) {
switch (o.label) {
case 0:
if (C.CoreSBN.gameData.gameType == N.GameTypeSBN.Battle) {
this.tipsBtn.active = !0;
this.clicktouNode.active = !0;
}
return [ 4, f.mj.initBoxData() ];

case 1:
o.sent();
this.control = t;
this.map_data = e;
return [ 4, this.reset() ];

case 2:
o.sent();
this._propsData = e.props;
this.props.forEach(function(e) {
e.startInit();
});
this.fixSize();
return [ 4, Promise.all([ this.createPlank(this.map_data.desk.layers), this.slot.init(this.map_data.desk.slots, e.props[s.PlayBoardPropsEnum.AddHole]), this.boxes.init(this.map_data.desk.boxes, e.props[s.PlayBoardPropsEnum.Open]) ]) ];

case 3:
o.sent();
this.printMapInfo();
this.state.cur = u.eGameState.playing;
this.flushLayer();
this.saveGame();
return [ 2 ];
}
});
});
};
t.prototype.showLockProp = function() {
if (C.CoreSBN.gameData.gameType != N.GameTypeSBN.Battle) {
var e = C.CoreSBN.gameData.CurLevel, t = 0, o = null, n = C.CoreSBN.gameData.getSettingByKey(s.PropsLocalQianzhuiLock + s.PlayBoardPropsEnum.AddHole) || 0;
if (e == N.UnlockLevelSBN.AddHole && !n) {
t = s.PlayBoardPropsEnum.AddHole;
o = this.props[0].node;
}
var i = C.CoreSBN.gameData.getSettingByKey(s.PropsLocalQianzhuiLock + s.PlayBoardPropsEnum.Clean) || 0;
if (e == N.UnlockLevelSBN.Clean && !i) {
t = s.PlayBoardPropsEnum.Clean;
o = this.props[1].node;
}
var r = C.CoreSBN.gameData.getSettingByKey(s.PropsLocalQianzhuiLock + s.PlayBoardPropsEnum.Package) || 0;
if (e == N.UnlockLevelSBN.Package && !r) {
t = s.PlayBoardPropsEnum.Package;
o = this.props[2].node;
}
if (t && o) {
var a = o.convertToWorldSpaceAR(cc.v3(0, 0));
O.default.open({
param: {
type: t,
tarPos: a
}
});
}
}
};
t.prototype.lockProp = function() {
for (var e in this.props) this.props[e].flush();
};
t.prototype.userProp = function(e) {
for (var t in this.props) {
var o = this.props[t];
o.type == e && o.useProp();
o.flush();
}
};
t.prototype.getPropByType = function(e) {
for (var t = 0, o = this.props; t < o.length; t++) {
var n = o[t];
if (n.type == e) return n;
}
};
t.prototype.saveGame = function() {
this.control.onCardsChanged && this.control.onCardsChanged();
};
t.prototype.fixSize = function() {
if (B.default.is_long_screen()) {
this.zoom = 1;
this.game_panel.y = 120;
} else {
this.zoom = .8;
this.game_panel.y = 60;
}
};
t.prototype.createPlank = function(e) {
return a(this, void 0, void 0, function() {
var t, o, n, i, r, a, s, l, f, h, d, g, m, v, b;
return c(this, function(c) {
switch (c.label) {
case 0:
t = this.game_panel, o = new Map();
n = 0, i = 0;
y.utils.shuffle(u.ColorPool);
r = 0;
for (a = 0; a < e.length; a++) if (!((s = e[a]).length <= 0)) {
(l = new cc.Node("layer-" + i)).parent = t;
l.zIndex = i;
f = new _.Layer(i);
o.set(i, f);
h = cc.color(u.ColorPool[r]);
++r >= u.ColorPool.length && (r = 0);
for (d = 0, g = s; d < g.length; d++) if ((m = g[d]).config.holes.length > 0) {
v = C.CoreSBN.pool.requestObject(C.CoreSBN.config.commenBundle, N.PrefabNameSBN.Plank);
(b = v.getComponent(p.default)).node.groupIndex = n > 25 ? 4 : n + 5;
b.init(m, h, i, this.zoom);
b.node || console.log("t.node", b.node);
b.node.parent = l;
b.initNails(l);
b.die_handler = this.onPlankDie;
f.push(b);
}
n++;
i++;
}
this.max_layer = o.size;
this.layers = o;
return [ 4, y.utils.sleep(50, this) ];

case 1:
c.sent();
return [ 2 ];
}
});
});
};
t.prototype.removePlankFromLayer = function(e) {
var t = this.layers.get(e.layer);
t && t.remove(e);
t && t.planks.length <= 0 && this.flushLayer();
};
t.prototype.build = function() {
for (var e = this.slot.nails.filter(function(e) {
return !!e;
}).map(function(e) {
return e.color;
}), t = this.boxes.build(), o = [], n = 0; n < this.max_layer; n++) {
var i = this.layers.get(n);
i && i.planks.length > 0 && o.push(i.build());
}
return {
slots: e,
boxes: t,
layers: o
};
};
t.prototype.setTouchEvent = function() {
var e = this;
this.game_touch.on(cc.Node.EventType.TOUCH_START, function(t) {
e.onTouchInBoard(t);
}, this, !1);
this.clicktouNode.on(cc.Node.EventType.TOUCH_START, function() {
e.clicktouNode.active = !1;
}, this);
};
t.prototype.onTipsBtn = function() {
this.clicktouNode.active = !0;
};
t.prototype.getPlankByPos = function(e) {
for (var t = null, o = this.max_layer; o >= 0; o--) {
var n = this.layers.get(o);
if (n && n.state == u.eLayer.Idle) for (var i = 0, r = n.planks; i < r.length; i++) {
var a = r[i];
a.touch.testPointInPolygon(e) && (t = a);
}
if (t) break;
}
return t;
};
t.prototype.getNailByPos = function(e) {
for (var t = null, o = null, n = this.max_layer, i = this.max_layer; i >= 0; i--) {
var r = this.layers.get(i);
if (r && r.state == u.eLayer.Idle) {
var a = r.getNailAndPlank(e);
if (a) {
t = a[1];
o = a[0];
n = i;
break;
}
}
}
if (o) {
for (var c = o.touch.getSharp().word_points, s = this.max_layer; s > n; s--) {
var l = this.layers.get(s);
if (l && l.state == u.eLayer.Idle) for (var p = 0, f = l.planks; p < f.length; p++) {
var h = f[p];
if (cc.Intersection.polygonPolygon(h.touch.getSharp().word_points, c)) {
o.playError();
return null;
}
}
}
return [ t, o ];
}
};
t.prototype.onTouchInBoard = function(e) {
if (!(this.state.has(u.eGameState.Lock) || this.state.has(u.eGameState.Success) || this.state.has(u.eGameState.Fail))) {
var t = e.getLocation();
if (this.state.has(u.eGameState.Cleaning)) {
var o = this.getPlankByPos(t);
o && this.dealClanPlank(o);
} else {
var n = this.getNailByPos(t);
if (n) {
this.dealNail(n[1], n[0]);
S.SoundManager.playSound(N.SoundNameSBN.dianzhan);
this.playVibrate();
}
}
this.saveGame();
}
};
t.prototype.playVibrate = function() {};
t.prototype.dealClanPlank = function(e) {
return a(this, void 0, void 0, function() {
var t, o, n, i, r, a, l, p, f, h, d, _;
return c(this, function(c) {
switch (c.label) {
case 0:
null === (t = this.control) || void 0 === t || t.setLock(!0);
n = Array.from(e.nails), i = this.boxes.addNailsToData(n);
(r = C.CoreSBN.pool.requestObject(C.CoreSBN.config.commenBundle, N.PrefabNameSBN.Hammer, this.game_panel)).x = e.node.x;
r.y = e.node.y;
r.zIndex = 199;
a = r.getComponent(sp.Skeleton);
w.default.playSpine(a, "zhongli").finally(function() {
r.destroy();
});
return [ 4, y.utils.sleep(500, this) ];

case 1:
c.sent();
S.SoundManager.playSound(N.SoundNameSBN.banzisui);
l = [];
for (p = 0, f = i; p < f.length; p++) {
(h = f[p]).node.position = this.game_panel.convertToNodeSpaceAR(h.node.convertToWorldSpaceAR(cc.v3(0)));
h.node.parent = this.game_panel;
l.push(h.moveToPos(this.recycle_node, !1));
}
if (n.length > 0) for (d = n.length - 1; d >= 0; d--) if (_ = this.boxes.tryPutNailToBox(n[d], function(e) {
return e.state <= u.eBoxState.Readying;
})) {
n.splice(d, 1);
_.state > u.eBoxState.Readying && (_.is_prop = !0);
}
e.setPlankDestroy(n);
this.control && this.control.level_logic.usedProp(s.PlayBoardPropsEnum.Clean);
return [ 4, Promise.all(l) ];

case 2:
c.sent();
null === (o = this.control) || void 0 === o || o.setLock(!1);
this.state.remove(u.eGameState.Lock);
this.state.remove(u.eGameState.Cleaning);
this.check();
return [ 2 ];
}
});
});
};
t.prototype.getPlankByNail = function(e) {
for (var t = this.max_layer; t >= 0; t--) {
var o = this.layers.get(t);
if (o && o.state == u.eLayer.Idle) for (var n = 0, i = o.planks; n < i.length; n++) {
var r = i[n];
if (r.nails.indexOf(e) >= 0) return r;
}
}
};
t.prototype.dealNail = function(e, t) {
return a(this, void 0, void 0, function() {
var o, n, i, r, a;
return c(this, function(c) {
switch (c.label) {
case 0:
if (!(o = this.boxes.tryPutNailToBox(e))) return [ 3, 1 ];
t && t.removeNail(e);
return [ 3, 3 ];

case 1:
return t ? [ 4, this.slot.tryPutNailToSlot(e, function() {
t.removeNail(e);
}) ] : [ 3, 3 ];

case 2:
c.sent();
n = this.slot.nails.filter(function(e) {
return !!e && e.state == u.eBoxState.Idle;
});
for (i = 0, r = n; i < r.length; i++) {
a = r[i];
(o = this.boxes.tryPutNailToBox(a)) && this.slot.setNailEmpty(a);
}
o || this.checkFailed();
c.label = 3;

case 3:
this.check();
return [ 2 ];
}
});
});
};
t.prototype.checkFailed = function() {
var e = this;
if (this.slot.fulled && this.boxes.checkBoxesIsCanOver(this.slot.nails)) {
this.state.add(u.eGameState.Fail);
if (this.state.has(u.eGameState.Fail) && !this.state.has(u.eGameState.Complete)) {
this.scheduleOnce(function() {
e.slot.fulled ? e.control.onGameFailed() : e.setPlaying();
}, 1);
this.state.add(u.eGameState.Complete);
}
}
};
t.prototype.getOpenSlotCount = function() {
var e = this.map_data.props[s.PlayBoardPropsEnum.Open];
return Math.min(4 - e.limit_count + e.use_count, 4);
};
t.prototype.setSlotOpen = function() {
this.onUseProp(s.PlayBoardPropsEnum.Open);
return !0;
};
t.prototype.setPlaying = function() {
this.state.cur = u.eGameState.playing;
};
t.prototype.openSlot = function() {
this.control.level_logic.usedProp(s.PlayBoardPropsEnum.Open);
this.boxes.setBoxOpen();
};
t.prototype.onUseProp = function(e) {
return a(this, void 0, void 0, function() {
return c(this, function() {
if (this.state.cur != u.eGameState.playing) return [ 2 ];
switch (e instanceof l.Prop ? e.type : e) {
case s.PlayBoardPropsEnum.AddHole:
this.addHole();
break;

case s.PlayBoardPropsEnum.Clean:
this.cleanSlotFlowers();
break;

case s.PlayBoardPropsEnum.Package:
this.packageFlower();
break;

case s.PlayBoardPropsEnum.Open:
this.openSlot();
}
return [ 2 ];
});
});
};
t.prototype.addHole = function() {
if (this.slot.open_count < this.slot.hole_total_count) {
C.CoreSBN.gameData.gameType != N.GameTypeSBN.Battle && C.CoreSBN.gameData.consumeProps(s.PlayBoardPropsEnum.AddHole, 1);
this.control.level_logic.usedProp(s.PlayBoardPropsEnum.AddHole);
this.slot.updateHoles(!0);
}
};
t.prototype.cleanSlotFlowers = function() {
C.CoreSBN.gameData.gameType != N.GameTypeSBN.Battle && C.CoreSBN.gameData.consumeProps(s.PlayBoardPropsEnum.Clean, 1);
this.state.add(u.eGameState.Cleaning);
g.default.show_toast("Knock out a piece of glass");
};
t.prototype.packageFlower = function(e) {
var t = this;
void 0 === e && (e = !1);
return new Promise(function() {
return a(t, void 0, void 0, function() {
function t(e, t) {
return a(this, void 0, void 0, function() {
return c(this, function(o) {
switch (o.label) {
case 0:
e.is_prop = !0;
return [ 4, e.putNailToBox(t) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
}
function o(e, t) {
var o = n.slot.nails.filter(function(t) {
return t && t.color == e;
});
if (o.length > 0) {
o = o.slice(0, Math.min(t, o.length));
t -= o.length;
o.forEach(function(e) {
t-- <= 0 || n.slot.setNailEmpty(e);
});
}
if (t > 0) for (var i = n.max_layer; i >= 0; i--) {
var r = n.layers.get(i);
if (r && r.planks.length > 0) for (var a = 0, c = r.planks; a < c.length; a++) {
for (var s = c[a], l = s.nails, u = !1, p = l.length - 1; p >= 0; p--) {
var f = l[p];
if (f && f.color == e) {
t--;
u = !0;
f.body = null;
f.node.opacity = 255;
o.push(f);
l.splice(p, 1);
if (t <= 0) break;
}
}
u && s.checkNails();
if (t <= 0) return o;
}
}
return o;
}
var n, i, r, l, p, f, h, d;
return c(this, function(a) {
switch (a.label) {
case 0:
this.control.setLock(!0);
n = this;
i = (i = this.boxes.filterBoxes(function(e) {
return !!e && e.state == u.eBoxState.Idle;
})).slice(0, Math.min(this.package_count, i.length));
r = [];
for (l = 0, p = i; l < p.length; l++) {
f = p[l];
(h = o(f.color, 3 - f.nails_count)).length + f.nails_count == 3 && r.push(t(f, h));
}
this.saveGame();
e || C.CoreSBN.gameData.gameType != N.GameTypeSBN.Battle && C.CoreSBN.gameData.consumeProps(s.PlayBoardPropsEnum.Package, 1);
a.label = 1;

case 1:
a.trys.push([ 1, 3, , 4 ]);
return [ 4, Promise.all(r) ];

case 2:
a.sent();
return [ 3, 4 ];

case 3:
d = a.sent();
console.error(d);
return [ 3, 4 ];

case 4:
this.control.setLock(!1);
this.check();
return [ 2, !0 ];
}
});
});
});
};
t.prototype.initDebug = function() {};
t.prototype.check = function() {};
t.prototype.printMapInfo = function() {
if (this.debug_label) {
this.debug_label.node.active = !0;
this.check();
}
};
t.prototype.onEnable = function() {
cc.director.getCollisionManager().enabled = !0;
cc.director.getPhysicsManager().enabled = !0;
cc.director.getPhysicsManager().gravity = cc.v2(0, -1e3);
P.gamebase.game_panel = this.game_panel;
P.gamebase.game_com = this;
C.CoreSBN.message.on(N.EventNameSBN.props_change, this.lockProp, this);
C.CoreSBN.message.on(N.EventNameSBN.use_prop, this.userProp, this);
cc.director.on(R.MsgUserEnumSBN.game_start_ani_complete, this.showLockProp, this);
};
t.prototype.onDisable = function() {
cc.director.getCollisionManager().enabled = !1;
cc.director.getPhysicsManager().enabled = !1;
cc.director.off(R.MsgUserEnumSBN.game_start_ani_complete, this.showLockProp, this);
P.gamebase.game_panel = null;
P.gamebase.game_com = null;
C.CoreSBN.message.removeAll(this);
};
r([ I({
type: cc.Enum(s.PlayBoardEnum)
}) ], t.prototype, "game_type", void 0);
r([ I(cc.Node) ], t.prototype, "game_panel", void 0);
r([ I(cc.Node) ], t.prototype, "game_touch", void 0);
r([ I(l.Prop) ], t.prototype, "props", void 0);
r([ I(h.default) ], t.prototype, "slot", void 0);
r([ I(d.default) ], t.prototype, "boxes", void 0);
r([ I(m.default) ], t.prototype, "encourage", void 0);
r([ I(cc.Node) ], t.prototype, "hint_node", void 0);
r([ I(cc.Node) ], t.prototype, "recycle_node", void 0);
r([ I(cc.Node) ], t.prototype, "open_hole_hint", void 0);
r([ I(cc.Node) ], t.prototype, "tipsBtn", void 0);
r([ I(cc.Node) ], t.prototype, "clicktouNode", void 0);
r([ I(cc.Widget) ], t.prototype, "tipsWiget", void 0);
return r([ A ], t);
}(cc.Component);
o.default = D;
cc._RF.pop();
}, {
"../../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../../GameDataConfig/Utils": "Utils",
"../../../Spript/Boxes": "Boxes",
"../../../Spript/GamePlayConfigEnum": "GamePlayConfigEnum",
"../../../Spript/Tools": "Tools",
"../../../UIManager/UIManager": "UIManager",
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../core/managers/ActionsHelp": "ActionsHelp",
"../../../game/view/LockPropsView": "LockPropsView",
"../../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/MahjongManager": "MahjongManager",
"../../Views/PlayboardEnum": "PlayboardEnum",
"../../Views/SoundManager": "SoundManager",
"./Encourage": "Encourage",
"./FlowerEntity": "FlowerEntity",
"./GameConst": "GameConst",
"./Layer": "Layer",
"./Plank": "Plank",
"./Prop": "Prop",
"./Slot": "Slot"
} ],
FlowerEntity: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "292a70m02JADqJTDc3/SR6h", "FlowerEntity");
var n = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.mj = void 0;
var i = e("../../../Spript/Random"), r = e("../../../Spript/Tools"), a = e("../../Views/LevelHelper"), c = e("./GameConst"), s = e("./NailData"), l = e("../../../GameDataConfig/GameDataConfig"), u = !1, p = null, f = new Map(), h = new Map();
function d(e) {
console.log("加载关卡数据", e);
return __awaiter(this, void 0, void 0, function() {
return n(this, function() {
return [ 2, h.has(e) ? h.get(e) : new Promise(function(t) {
var o = "Mahjong/config/" + e;
u ? cc.resources.load(o + "_bin", cc.TextAsset, function(o, n) {
if (o) t(null); else {
h.set(e, JSON.parse(r.utils.decrypt(n.text, "43f818319bcb2474708aa8b290518387", "6b34f6a72df077a3")));
t(h.get(e));
}
}) : cc.resources.load(o, cc.JsonAsset, function(o, n) {
if (o) t(null); else {
h.set(e, n.json);
t(h.get(e));
}
});
}) ];
});
});
}
function _(e) {
return __awaiter(this, void 0, void 0, function() {
var t, o, c, s, u, p, f, h, _, g, y, m, v, b;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!(t = a.LevelHelper.getRandomConfig(e))) {
cc.error("随机参数配置不存在", e);
return [ 2 ];
}
o = a.LevelHelper.getGroupConfig(t.group), c = i.default.rangeIntByArr(t.parts_count), 
s = Array.from(o.group);
r.utils.shuffle(s);
s = (s = s.slice(0, c)).sort(function(e, t) {
return e - t;
});
u = [], p = l.default.get_config_array("PartsConfig"), f = 0;
for (h = 0, _ = p; h < _.length; h++) {
g = _[h];
if (s.indexOf(g.id) >= 0) {
f += g.nail_count;
u.push(g);
}
}
y = [];
m = 0, v = u;
n.label = 1;

case 1:
return m < v.length ? [ 4, d(v[m].name) ] : [ 3, 4 ];

case 2:
b = n.sent();
y.push.apply(y, b);
n.label = 3;

case 3:
m++;
return [ 3, 1 ];

case 4:
return [ 2, {
layers: y,
nail_count: f,
nail_color: t.nail_color
} ];
}
});
});
}
function g(e) {
return __awaiter(this, void 0, void 0, function() {
var t, o;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!(t = a.LevelHelper.getMapConfig(e))) return [ 3, 2 ];
o = {};
return [ 4, d(t.name) ];

case 1:
return [ 2, (o.layers = n.sent(), o.nail_color = t.nail_color, o.nail_count = t.nail_count, 
o) ];

case 2:
cc.error("地图配置不存在", e);
return [ 2 ];
}
});
});
}
function y(e) {
return __awaiter(this, void 0, void 0, function() {
var t, o, i, r, c, s, u, p, f, h, _, g;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!(t = a.LevelHelper.getCombinationConfig(e))) {
cc.error("组合配置不存在", e);
return [ 2 ];
}
o = t.combination, i = l.default.get_config_array("PartsConfig"), r = 0, c = [];
for (s = 0, u = i; s < u.length; s++) {
p = u[s];
if (o.indexOf(p.id) >= 0) {
r += p.nail_count;
c.push(p);
}
}
f = [];
h = 0, _ = c;
n.label = 1;

case 1:
return h < _.length ? [ 4, d(_[h].name) ] : [ 3, 4 ];

case 2:
g = n.sent();
f.push.apply(f, g);
n.label = 3;

case 3:
h++;
return [ 3, 1 ];

case 4:
return [ 2, {
layers: f,
nail_color: t.nail_color,
nail_count: r
} ];
}
});
});
}
function m(e, t) {
return __awaiter(this, void 0, void 0, function() {
var o, i, r, c, l, u, p;
return n(this, function(n) {
switch (n.label) {
case 0:
o = null;
switch (t) {
case 1:
return [ 3, 1 ];

case 2:
return [ 3, 3 ];

case 3:
return [ 3, 5 ];
}
return [ 3, 7 ];

case 1:
return [ 4, g(e) ];

case 2:
o = n.sent();
return [ 3, 7 ];

case 3:
return [ 4, _(e) ];

case 4:
o = n.sent();
return [ 3, 7 ];

case 5:
return [ 4, y(e) ];

case 6:
o = n.sent();
n.label = 7;

case 7:
i = a.LevelHelper.getColorConfig(o.nail_color), r = new s.NailData(o.nail_count, i);
c = r.build(), l = c.nails, u = c.boxes;
p = Array.from(l).reverse();
return [ 2, {
desk: {
layers: o.layers.map(function(e) {
for (var t = [], o = 0; o < e.planks.length; o++) {
var n = e.planks[o], i = n.holes.map(function(e, t) {
return {
c: p.shift(),
i: t
};
});
t.push({
config: n,
colors: i
});
}
return t;
}),
boxes: u
},
nail_count: o.nail_count
} ];
}
});
});
}
o.mj = {
randomColor: function() {
return c.ColorPool[i.default.rangeInt(0, c.ColorPool.length - 1)];
},
getColor: function(e) {
var t = e % c.ColorPool.length, o = c.ColorPool[t];
return cc.color(o);
},
getBoxDataById: function(e) {
if (!p || !p[e]) throw new Error("包围盒子数据未初始胡");
if (f.has(e)) return f.get(e);
var t = p[e].map(function(e) {
return cc.v2(e[0], e[1]);
});
f.set(e, t);
return t;
},
initBoxData: function() {
return __awaiter(this, void 0, void 0, function() {
return n(this, function() {
return [ 2, p || new Promise(function(e) {
u ? cc.resources.load("Mahjong/config/box_data_bin", cc.TextAsset, function(t, o) {
e(t ? null : JSON.parse(r.utils.decrypt(o.text, "43f818319bcb2474708aa8b290518387", "6b34f6a72df077a3")));
}) : cc.resources.load("Mahjong/config/box_data", cc.JsonAsset, function(t, o) {
if (t) e(null); else {
p = o.json;
e(o.json);
}
});
}) ];
});
});
},
getMapConfigData: d,
getRandomData: _,
geFixedData: g,
getFixedCombination: y,
createMapData: m,
verifyDesk: function(e) {
if (!e) return !1;
if (!e.boxes || !e.layers || e.boxes.length <= 0 || e.layers.length < 0) return !1;
for (var t = [], o = [], n = 0, i = e.boxes; n < i.length; n++) {
var r = i[n];
if ("number" == typeof r) o.push(r); else {
o.push(r.color);
for (var a = 0; a < r.count; a++) t.push(r.color);
}
}
e.slots && t.push.apply(t, e.slots);
for (var c = 0, s = 0, l = e.layers; s < l.length; s++) for (var u = 0, p = l[s]; u < p.length; u++) {
var f = p[u];
t.push.apply(t, f.colors.map(function(e) {
return e.c;
}));
c++;
}
if (c <= 0) return !1;
var h = Object.create(null);
t.forEach(function(e) {
h[e] || (h[e] = {});
h[e].c = h[e].c ? h[e].c + 1 : 1;
});
o.forEach(function(e) {
h[e] || (h[e] = {});
h[e].b = h[e].b ? h[e].b + 1 : 1;
});
for (var d in h) if (!h[d].c || !h[d].b || h[d].c != 3 * h[d].b) return !1;
return !0;
},
checkAllLevelConfig: function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, o, i, r, c, s, u, p, f, h, d, _, g, y, v, b, S;
return n(this, function(n) {
switch (n.label) {
case 0:
e = a.LevelHelper.level_configs;
t = 0, o = e;
n.label = 1;

case 1:
if (!(t < o.length)) return [ 3, 8 ];
if (!(i = o[t]).level_id) return [ 3, 7 ];
r = 0, c = i.level_id;
n.label = 2;

case 2:
if (!(r < c.length)) return [ 3, 7 ];
s = c[r];
u = a.LevelHelper.getSmallLevelConfig(s);
n.label = 3;

case 3:
n.trys.push([ 3, 5, , 6 ]);
return [ 4, m(u.map_id, u.map_type) ];

case 4:
n.sent() || console.error("" + s, "没有数据");
return [ 3, 6 ];

case 5:
p = n.sent();
console.error("" + s, p);
return [ 3, 6 ];

case 6:
r++;
return [ 3, 2 ];

case 7:
t++;
return [ 3, 1 ];

case 8:
if (!(f = l.default.get_config_array("SmallLevelGroupConfig"))) return [ 3, 16 ];
h = 0, d = f;
n.label = 9;

case 9:
if (!(h < d.length)) return [ 3, 16 ];
if (!(_ = d[h]).group) return [ 3, 15 ];
g = 0, y = _.group;
n.label = 10;

case 10:
if (!(g < y.length)) return [ 3, 15 ];
v = y[g];
b = a.LevelHelper.getSmallLevelConfig(v);
n.label = 11;

case 11:
n.trys.push([ 11, 13, , 14 ]);
return [ 4, m(b.map_id, b.map_type) ];

case 12:
n.sent() || console.error("" + v, "没有数据");
return [ 3, 14 ];

case 13:
S = n.sent();
console.error("" + v, S);
return [ 3, 14 ];

case 14:
g++;
return [ 3, 10 ];

case 15:
h++;
return [ 3, 9 ];

case 16:
return [ 2 ];
}
});
});
}
};
cc._RF.pop();
}, {
"../../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../../Spript/Random": "Random",
"../../../Spript/Tools": "Tools",
"../../Views/LevelHelper": "LevelHelper",
"./GameConst": "GameConst",
"./NailData": "NailData"
} ],
FlyImageComp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "459b3VWeutOJLxlX5oxcHfg", "FlyImageComp");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./FlyImageToastComp"), c = e("../../common/BaseUI"), s = e("../../Spript/Random"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.imagesPanel = [];
t.toastPrefab = null;
t.targets = [];
t.fly_parent = null;
t.flyImageActionMap = {};
t.imagePool = new cc.NodePool();
t._callback = null;
t._reward = 0;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.show = function(t) {
var o = this;
e.prototype.show.call(this, t);
var n = t;
this._callback = n.callback;
this._reward = n.value || 0;
var i = new cc.Vec3(0, 0, 0), r = new cc.Node();
r.addComponent(cc.Sprite).spriteFrame = this.imagesPanel[n.imgType];
this.scheduleOnce(function() {
var e = o.node.convertToNodeSpaceAR(o.targets[n.imgType].convertToWorldSpaceAR(cc.v3(0, 0)));
o.runAction(e, i, r, function() {
o.flyImageToast(o._reward, e, n.imgType);
});
});
};
t.prototype.runActionBeisizer = function(e, t, o, n) {
for (var i = this, r = Math.min(e.sub(t).mag() / 650, .6), a = function(a) {
var c = setTimeout(function() {
var u = s.default.rangeInt(-45, 45), p = i.getFlyImageNode(o);
p.parent = i.node;
p.position = t;
var f = s.default.rangeInt(0, 65), h = s.default.rangeInt(-55, 55), d = u > 0 ? f : -f, _ = cc.v3(p.position.x + d, p.position.y + h, 0), g = s.default.rangeInt(95, 130), y = l.CoreSBN.publicFun.create_beisizer(.2, p.position, _, g, u), m = cc.callFunc(function() {
cc.tween(p).sequence(cc.tween().to(r, {
position: e
}), cc.tween().call(function() {
n && n(9 == a);
i.imagePool.put(p);
})).start();
});
p.runAction(cc.sequence([ y, cc.delayTime(.1), m ]));
clearTimeout(c);
}, a * s.default.rangeInt(10, 60));
}, c = 0; c < 10; c++) a(c);
};
t.prototype.runAction = function(e, t, o, n) {
var i = this, r = s.default.rangeInt(3, 5), a = 0, c = (Math.round(this._reward / r), 
e.sub(t).len()), l = Math.min(c / 800, .6), u = function(a) {
var c = i.getFlyImageNode(o);
c.parent = i.node;
c.position = t;
cc.tween(c).sequence(cc.tween().to(l, {
position: e.add(cc.v3(0, -38, 0))
}), cc.tween().call(function() {
a == r && n && n(a);
i.imagePool.put(c);
})).start();
}, p = setInterval(function() {
u(++a);
a == r && clearInterval(p);
}, 90);
};
t.prototype.flyImageToast = function(e, t, o) {
var n = this;
if (!(e < 1)) {
var i = cc.instantiate(this.toastPrefab), r = i.getComponent(a.default);
i.parent = this.node;
i.position = t;
l.CoreSBN.gameData.addCoin(e);
r.set_count(e, o, function() {
n.closeView();
});
cc.tween(this.targets[o]).sequence(cc.tween().to(.3, {
scale: 1.1
}), cc.tween().to(.1, {
scale: 1
})).start();
}
};
t.prototype.getFlyImageNode = function(e) {
var t = this.imagePool.get();
t || (t = cc.instantiate(e));
return t;
};
t.prototype.closeView = function() {
for (var e = 0; e < this.targets.length; e++) cc.Tween.stopAllByTarget(this.targets[e]);
this.on_close_call();
this._callback && this._callback();
this._callback = null;
};
t.prototype.onDestroy = function() {
this.imagePool.clear();
this.imagePool = null;
e.prototype.onDestroy.call(this);
};
r([ f(cc.SpriteFrame) ], t.prototype, "imagesPanel", void 0);
r([ f(cc.Prefab) ], t.prototype, "toastPrefab", void 0);
r([ f([ cc.Node ]) ], t.prototype, "targets", void 0);
r([ f(cc.Node) ], t.prototype, "fly_parent", void 0);
return r([ c.registerUIPath("prefabSbn/FlyImageComp"), p ], t);
}(c.default);
o.default = h;
cc._RF.pop();
}, {
"../../Spript/Random": "Random",
"../../common/BaseUI": "BaseUI",
"../../utils/CoreSBN": "CoreSBN",
"./FlyImageToastComp": "FlyImageToastComp"
} ],
FlyImageToastComp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "12443vSZ7NDL4vSfB75PpFO", "FlyImageToastComp");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.imageIcon = null;
t.valueLabel = null;
t.imagesPanel = [];
return t;
}
t.prototype.set_count = function(e, t, o) {
var n = "+";
e < 0 && (n = "");
this.valueLabel.string = n + "" + e;
this.imageIcon.spriteFrame = this.imagesPanel[t];
this.runAction(e, t, o);
};
t.prototype.runAction = function(e, t, o) {
var n = this;
cc.tween(this.node).sequence(cc.tween().to(1.2, {
y: this.node.y + 100
}), cc.tween().call(function() {
o && o();
n.node.destroy();
})).start();
};
r([ s(cc.Sprite) ], t.prototype, "imageIcon", void 0);
r([ s(cc.Label) ], t.prototype, "valueLabel", void 0);
r([ s(cc.SpriteFrame) ], t.prototype, "imagesPanel", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
FrameConst: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "af245tJy2xLW74gPmsfInNB", "FrameConst");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Hi5Conf = o.HttpConf = o.LogConf = o.EventName = o.LayerOrder = void 0;
o.LayerOrder = {
Bottom: "Bottom",
Background: "Background",
Element: "Element",
UI: "UI",
Frontground: "Frontground",
Effect: "Effect",
Top: "Top"
};
o.EventName = {
open_page: "open_page",
_hi5_page_close: "_hi5_page_close",
Hi5_PAGE_CLOSE: "_Hi5_PAGE_CLOSE",
HI5_SP_FLY_GOLD_EFFECT: "_HI5_SP_FLY_GOLD_EFFECT",
Hi5_CHECK_SP_EXTRAL_REWARD: "_Hi5_CHECK_SP_EXTRAL_REWARD"
};
o.LogConf = {
close: !1,
level: "info, warn, error"
};
o.HttpConf = {
timeout: 5e3
};
o.Hi5Conf = {
bundle: "HiFive",
group_name: "UI",
dialog_dir_name: "HiFive/Dialog",
page_dir_name: "HiFive/Page"
};
cc._RF.pop();
}, {} ],
GameConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ef584uFeTJLtou+mhWvVJXA", "GameConfig");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GameConfig = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.commenBundle = "commenBundle";
t.battleBundle = "battleBundle";
t.BBundleatr = "BBundleatr";
t.remoteBundle = "commenBundle";
t.remoteCur = "";
t.remoteA = "";
t.remoteB = "";
t.gameNodePool = "gameNodePool";
t.gameBundle = "gameBundle";
t.privacyUrl = "";
t.gameName = "isgstore";
t.gameVersion = "1.0.0";
t.gameCode = "isgstore";
t.gamePackage = "com.isgstore";
t.isLocalEncryption = !1;
t.localEncryptionKey = "sadshajksfdha";
t.localEncryptionIv = "sadshajksfdtt";
t.phoneWid = 720;
t.phoneHei = 1600;
t.ipadWid = 720;
t.ipadHei = 1280;
t.retio = .56;
t.adaptMode = 1;
t.topLongHeight = 48;
t.bottomLongHeight = 0;
t.topShortHeight = 0;
t.bottomShortHeight = 0;
return t;
}
t.prototype.saveUrl = function() {
return this.remoteCur;
};
return t;
}(e("../utils/IBassInsClass").default);
o.GameConfig = r;
cc._RF.pop();
}, {
"../utils/IBassInsClass": "IBassInsClass"
} ],
GameConst: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f3640YBk3FMqqLovdr52nT3", "GameConst");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.State = o.eGameState = o.nail_radius = o.BoxCount = o.eBoxState = o.ColorPool = o.ImgName = o.CAR_SPEED_2000 = o.CAR_SPEED_1500 = o.CAR_SPEED = o.stop_pos_B = o.stop_pos = o.start_pos_B = o.start_pos = o.eLayer = o.OpenDebug = void 0;
o.OpenDebug = !0;
o.eLayer = cc.Enum({
None: 1,
Idle: 2,
Lock: 3,
Hide: 4
});
o.start_pos = cc.v3(-500, 75);
o.start_pos_B = cc.v3(-500, 0);
o.stop_pos = cc.v3(500, 75);
o.stop_pos_B = cc.v3(500, 0);
o.CAR_SPEED = 1e3;
o.CAR_SPEED_1500 = 1500;
o.CAR_SPEED_2000 = 2e3;
o.ImgName = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ];
o.ColorPool = [ "#91f99e", "#dbff86", "#8de8fc", "#8ec0ff", "#b189ff", "#fca2e3", "#ff8080", "#ffb777", "#ffe775" ];
o.eBoxState = cc.Enum({
None: 1,
Idle: 2,
Readying: 3,
Closing: 4,
Dying: 5
});
o.BoxCount = 3;
o.nail_radius = 26;
o.eGameState = cc.Enum({
Lock: 1,
playing: 2,
Success: 4,
Fail: 8,
Complete: 16,
Cleaning: 32
});
var n = function() {
function e() {
this._cur = 0;
this.list = [];
}
Object.defineProperty(e.prototype, "cur", {
get: function() {
return this._cur;
},
set: function(e) {
if (e != this._cur) {
this._cur = e;
this.notify();
}
},
enumerable: !1,
configurable: !0
});
e.prototype.change = function(e) {
-1 == this.list.indexOf(e) && this.list.push(e);
};
e.prototype.notify = function() {
var e = this;
this.list.forEach(function(t) {
t(e.cur);
});
};
e.prototype.add = function(e) {
if (!this.has(e)) {
this._cur |= e;
this.notify();
}
};
e.prototype.remove = function(e) {
if (this.has(e)) {
this._cur &= ~e;
this.notify();
}
};
e.prototype.has = function(e) {
return (this._cur & e) === e;
};
return e;
}();
o.State = n;
cc._RF.pop();
}, {} ],
GameDataConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "73b99Yc61VPZoXK+jelPLFM", "GameDataConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.init = function() {
var e = this;
this.config_request_retry_count = 0;
return new Promise(function(t) {
cc.resources.load("./config/config", cc.JsonAsset, function(o, n) {
if (o) t && t({}); else {
e.all_config_data = n.json;
t && t({});
}
});
});
};
e.get_config_by_id = function(e, t) {
var o = this.all_config_data[e];
if (o) for (var n = 0, i = o; n < i.length; n++) {
var r = i[n];
if (r.id == t) return r;
} else console.warn("当前读取配置信息失败 " + e + " " + t);
};
e.get_config_array = function(e) {
var t = this.all_config_data[e];
if (t) return t;
console.warn("当前读取配置信息失败 " + e);
};
e.game_play_config_value = function(e) {
for (var t = 0, o = this.all_config_data.GamePlayConfig; t < o.length; t++) {
var n = o[t];
if (n.key == e) return n;
}
console.warn("没有 " + e + " 的配置数据");
};
e.get_config_by_config_name_and_key = function(e, t) {
var o = this.all_config_data[e];
if (o) for (var n = 0, i = o; n < i.length; n++) {
var r = i[n];
if (r.key == t) return r.value;
}
};
e.all_config_data = {};
e.config_request_retry_count = 0;
e.remote_config_version = "1.0.0";
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
GameLocalData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2d3a6hiCJ5D8ozO2NspDlFQ", "GameLocalData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./BaseRecord"), i = e("./GameRecord"), r = e("./GuideData"), a = e("../HiFive/Views/GamePlayData"), c = e("../HiFive/Views/PlayBoardRecordData"), s = e("../HiFive/Views/ShopRecord"), l = e("../Atlas/AtlasRecord"), u = function() {
function e() {
this._game_data = {};
this._store_key = "lsxq";
this._store_tick = 20;
this._cur_store_tick_time = 0;
this._had_store_data = !1;
this._version = "1.0.4";
this.isSkipAd = !1;
this.had_init_data = !1;
this.game_message = null;
this._all_store_data = [ r.default, i.default ];
}
Object.defineProperty(e, "game_play_record", {
get: function() {
return [ a.default, c.PlayBoardRecordData, s.ShopRecord, l.AtlasRecord ];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "store_data_types", {
get: function() {
for (var t = this._all_store_data, o = 0, n = e.game_play_record; o < n.length; o++) {
var i = n[o];
t.push(i);
}
return t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "store_key", {
get: function() {
return this._store_key;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "game_data", {
get: function() {
return this._game_data;
},
enumerable: !1,
configurable: !0
});
e.get_instance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
e.prototype.init = function() {
console.log("init game local data");
var e = localStorage.getItem(this.store_key);
if (e) {
this.deal(e);
this.game_sync(null);
} else this.deal(null);
};
e.prototype.onGetGameMessageData = function() {};
e.prototype.request_game_message_data = function(e, t) {
e && e(t);
};
e.prototype.deal = function(e) {
n.default.update_data = this.store_data.bind(this);
var t = null;
(t = e ? JSON.parse(e) : JSON.parse(cc.sys.localStorage.getItem(this.store_key) || "{}")) || (t = {});
for (var o = 0, i = this.store_data_types; o < i.length; o++) {
var r = i[o], a = r._name, c = t[a];
if (c) {
var s = new r();
s.decode_json(c);
this._game_data[a] = s;
} else this._game_data[a] = new r();
}
this.had_init_data = !0;
this.set_local_storeage();
};
e.prototype.tick_store_data = function(e) {
void 0 === e && (e = 0);
this._cur_store_tick_time = this._cur_store_tick_time + e;
if (this._cur_store_tick_time >= this._store_tick && this._had_store_data) {
this._cur_store_tick_time = 0;
this._had_store_data = !1;
this.set_local_storeage();
}
};
e.prototype.set_local_storeage = function() {
localStorage.setItem(this.store_key, JSON.stringify(this._game_data));
};
e.prototype.store_data = function(e) {
if (0 != Object.keys(this._game_data).length) {
var t = e;
t || (t = this._game_data);
this._game_data = t;
this._had_store_data = !0;
e && this.set_local_storeage();
}
};
e.prototype.clear_data = function() {
this.store_data({});
};
e.prototype.get_data = function(e) {
return this._game_data[e._name];
};
e.prototype.remove_data = function(e) {
if (this._game_data[e._name]) {
this._game_data[e._name] = new e();
console.log("清空数据成功" + e._name);
this.set_local_storeage();
return !0;
}
return !1;
};
e.prototype.game_sync = function(e, t) {
void 0 === t && (t = null);
this.set_local_storeage();
};
e.prototype.getAdComplianceCode = function() {
var e;
return (null === (e = this.game_message) || void 0 === e ? void 0 : e.adCompliance) || -1;
};
e.prototype.checkIsUseAdCompliance = function() {
return -1 !== this.getAdComplianceCode();
};
e._instance = null;
e.all_convert_single_data = {};
return e;
}();
o.default = u;
cc.js.setClassName("GameLocalData", u);
cc._RF.pop();
}, {
"../Atlas/AtlasRecord": "AtlasRecord",
"../HiFive/Views/GamePlayData": "GamePlayData",
"../HiFive/Views/PlayBoardRecordData": "PlayBoardRecordData",
"../HiFive/Views/ShopRecord": "ShopRecord",
"./BaseRecord": "BaseRecord",
"./GameRecord": "GameRecord",
"./GuideData": "GuideData"
} ],
GamePlayConfigEnum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fdb55Q2NBxFWakBHVdpoEk/", "GamePlayConfigEnum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GamePlayConfigEnum = void 0;
o.GamePlayConfigEnum = {
init_money: "init_money",
init_star: "init_star",
red_bag_to_money: "red_bag_to_money",
everyday_max_video_count: "everyday_max_video_count",
kefu_url: "kefu_url",
qq_num: "qq_num",
show_kefu: "show_kefu",
barrage_scroll_duration: "barrage_scroll_duration",
view_show_max_list: "view_show_max_list",
flower_hint_data: "flower_hint_data",
gfjl_m: "gfjl_m",
gfjl_redpacket_show: "gfjl_redpacket_show",
invite_rule_info: "invite_rule_info",
eliminate_redpackage_limit_count: "eliminate_redpackage_limit_count",
cash_luckyUser_range: "cash_luckyUser_range",
cash_luckyUser_dividen_reward: "cash_luckyUser_dividen_reward",
cash_sp_data: "cash_sp_data",
cash_sp_conditions: "cash_sp_conditions",
cash_sp_yue_times: "cash_sp_yue_times",
cash_sp_txsm: "cash_sp_txsm",
force_video_relive_time: "force_video_relive_time",
force_video_win_time: "force_video_win_time",
guide_reward: "guide_reward",
normal_game_prop_limit: "normal_game_prop_limit",
default_prop_count_count: "default_prop_count_count",
hole_total_count: "hole_total_count",
layer_display_state: "layer_display_state",
package_count: "package_count",
open_hole_hint: "open_hole_hint",
force_video_official_time: "force_video_official_time",
display_b_ids: "display_b_ids",
display_b_time: "display_b_time",
icp: "icp",
dae_reward: "dae_reward",
dae_reward_step: "dae_reward_step",
isOppoLockHide: "isOppoLockHide",
force_video_open_lv: "force_video_open_lv",
screen_ad_open_condition_count: "screen_ad_open_condition_count",
screen_open_statistic_gfjl: "screen_open_statistic_gfjl",
screen_open_video_reward: "screen_open_video_reward",
screen_ad_open_condition_time: "screen_ad_open_condition_time",
succ_screen_ad_show_level: "succ_screen_ad_show_level"
};
cc._RF.pop();
}, {} ],
GamePlayData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f034e/flSNNPJvuAqf1tgFG", "GamePlayData");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.base_name = "GamePlayData";
t.cur_level = 0;
t.apply_auto_update();
return t;
}
t.prototype.init = function() {};
t._name = "GamePlayData";
return t;
}(e("../../GameDataConfig/BaseRecord").default);
o.default = r;
cc._RF.pop();
}, {
"../../GameDataConfig/BaseRecord": "BaseRecord"
} ],
GamePlayEnum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cab1cXS0m5D270Yqh4H7ojC", "GamePlayEnum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.OrderDetailViewOpenType = o.InventoryTabType = o.InventoryType = o.VideoScreenEnum = o.CommonAwardType = o.TaskStateType = o.MoneyBoxItemEnum = o.TreeHouseDecorationEnum = o.CookHearthStatusEnum = o.CookPotEnergyAgentType = o.CookPotViewTabType = o.CookStatusEnum = o.SelectFoodTypeEnum = o.MakeupFoodReasonEnum = o.OrderSelectTypeEnum = o.CookBookTypeEnum = o.TakeawayNextOrderStatusEnum = o.TakeawayStatusEnum = o.NormalFoodTypeEnum = o.CookBookStatusEnum = o.SevenCashStatusEnum = o.ActivityTypeEnum = o.ActivityRecordType = o.CashOutStatusEnum = o.GuideTaskRecordType = o.GuideTaskType = o.SpecialPeopleRewardType = o.AchievementRewardType = o.TaskRewardType = o.TaskConditionType = o.AchievementType = o.AchievementStatusEnum = o.DecorationStatus = o.DecorationManagementType = o.DecorationRecordStatue = o.OrderStatue = o.ManagementStatus = o.CookWomanState = o.TaskStatueType = o.TaskType = o.TableType = o.PlantType = o.ManagementType = o.TableStatue = o.PeopleSiteDownDoing = o.PeopleStatue = o.TableSitePosDir = o.TableSiteStatueEnum = o.PeopleType = o.PeopleStateAnimation = void 0;
o.ConsumerStatusType = o.PeopleDialogType = void 0;
o.PeopleStateAnimation = {
zhengmian_walk: "zhengmian_walk",
cemian_walk: "cemian_walk",
beimian_walk: "beimian_walk",
diancai: "diancai",
dakeshui: "dakeshui",
wanshouji: "wanshouji",
chifan: "chifan",
cemian_duancai: "cemian_duancai",
beimian_duancai: "beimian_duancai",
liulancaidan: "liulancaidan",
liuda: "liuda",
maimeng: "maimeng",
zhengmian_shangcai: "zhengmian_shangcai",
beimian_shangcai: "beimian_shangcai",
chaocai: "chaocai",
jiasuchaocai: "jiasuchaocai",
chaocaiwancheng: "chaocaiwancheng",
zhengmian_duancai: "zhengmian_duancai",
beimian_stan: "beimian_stan",
zhengmian_stan: "zhengmian_stan",
cemian_stan: "cemian_stan",
eat_start: "eat_start",
eat_finish: "eat_finish",
site_down: "site_down"
};
var n;
o.PeopleType = cc.Enum({
big_cook_woman: 0,
cook_woman: 1,
customer: 2,
special_people: 3,
cashier: 4
});
o.TableSiteStatueEnum = {
empty: "empty",
customer: "customer",
slect_food: "slect_food",
wait_food: "wait_food",
eating: "eating"
};
o.TableSitePosDir = {
left: "left",
right: "right",
up: "up"
};
o.PeopleStatue = {
in: "in",
out: "out",
wander: "wander",
see_foods: "see_foods",
cooking: "cooking",
send_food: "send_food",
send_food_finished: "send_food_finished",
into_sort_peoples: "into_sort_peoples",
into_sort_peoples_move_front: "into_sort_peoples_move_front",
special_people_into: "special_people_into",
special_people_into_wait_deal: "special_people_into_wait_deal",
special_people_move_front: "special_people_move_front",
special_people_out: "special_people_out"
};
o.PeopleSiteDownDoing = {
selec_free_food: "selec_free_food",
select_un_lock_food: "select_un_lock_food",
None: "None",
eat: "eat"
};
o.TableStatue = {
using: "using",
own: "own"
};
o.ManagementType = cc.Enum({
NONE: 0,
PLANT: 1,
ANIMAL: 2,
FACILITY: 3
});
o.PlantType = cc.Enum({
NONE: 0,
BLOCK: 1,
BUSH: 2,
LAND: 3
});
o.TableType = cc.Enum({
Table: 1,
Bar: 2
});
o.TaskType = cc.Enum({
day: 1,
archivement: 2
});
o.TaskStatueType = cc.Enum({
wait_finish: 0,
finish: 1,
rewarded: 2
});
o.CookWomanState = cc.Enum({
Null: 0,
Stroll: 1,
GetOrder: 2,
GoCook: 3,
Cook: 4,
CompleteCook: 5,
SendMenu: 6,
CompleteSendMenu: 7
});
o.ManagementStatus = cc.Enum({
Locked: 0,
Upgrade: 1,
LevelMax: 2
});
o.OrderStatue = {
oking: "oking",
dealing: "dealing",
doing: "doing",
send: "send",
finished: "finished"
};
o.DecorationRecordStatue = {
own: "own",
using: "using"
};
o.DecorationManagementType = cc.Enum({
Table: 1,
Decoration: 2,
CookTable: 3
});
o.DecorationStatus = cc.Enum({
None: 0,
Purchased: 1,
Using: 2,
Unlock: 3,
Unavailable: 4
});
o.AchievementStatusEnum = cc.Enum({
wait_finish: 0,
finish: 1,
rewarded: 2
});
o.AchievementType = cc.Enum({
harvest_block_count: 1,
harvest_bush_count: 2,
harvest_land_count: 3,
harvest_animal_count: 4,
total_decoration: 5,
get_waiter_count: 6,
total_double_profit: 7,
total_speed_up_all: 8,
get_guardian_count: 9,
get_customer_gift: 10,
get_neighbor_gift: 11,
cook_food_count: 12,
total_video: 13
});
o.TaskConditionType = {
finish_all_task: "240",
login_reward: "255",
much_video_task: "246",
collect_medicne_speed: "248",
craft_accelerate: "249",
cook_any_medicine: "243",
ground_harvest: "244",
plant_speed_all: "250",
server_special_guest: "251"
};
o.TaskRewardType = cc.Enum({
money: 3,
red_bag: 2
});
o.AchievementRewardType = cc.Enum({
money: 3,
red_bag: 2
});
o.SpecialPeopleRewardType = cc.Enum({
customer: 4,
money: 3,
red_bag: 2,
food: 5
});
o.GuideTaskType = cc.Enum({
unlock_plant_block: -1,
harvest_plant: 1,
craft_food: 2,
claim_orders: 3,
upgrade_facility: 4,
collect_lys: 5
});
o.GuideTaskRecordType = cc.Enum({
record_on_start: 1,
get_on_start: 2
});
o.CashOutStatusEnum = cc.Enum({
NONE: 0,
VERIFY_PROCESSING: 1,
VERIFY_PASS: 2,
VERIFY_FAIL_PRE_REFUND: 3,
VERIFY_FAIL_REFUND: 4,
WITHDRAW_SUCCESS: 5,
WITHDRAW_FAIL_PRE_REFUND: 6,
WITHDRAW_FAIL_REFUND: 7
});
o.ActivityRecordType = cc.Enum({
GET_ON_START: 1,
RECORD_EVERYDAY: 2
});
o.ActivityTypeEnum = cc.Enum({
CustomerCount: 1,
VideoGetCustomers: 2,
ShopLevel: 3,
VideoGetWaiter: 4,
DoubleProfit: 5,
InviteCount: 7
});
o.SevenCashStatusEnum = cc.Enum({
NONE: 0,
LOCKED: 1,
IN_PROGRESS: 2,
TOMORROW_OPEN: 3,
CLAIMABLE: 4,
VERIFY: 5,
CLAIMED: 6
});
o.CookBookStatusEnum = cc.Enum({
NONE: 0,
UNLOCKED: 1,
TO_UNLOCK: 2,
LOCKED: 3
});
o.NormalFoodTypeEnum = cc.Enum({
NONE: 0,
VEG: 1,
MEAT: 2,
SOUP: 3
});
o.TakeawayStatusEnum = cc.Enum({
NONE: 0,
NEW_ORDER: 1,
DELIVERING: 2,
CLAIMABLE: 3
});
o.TakeawayNextOrderStatusEnum = cc.Enum({
NONE: 0,
READY: 1,
COUNTING_DOWN: 2,
NO_CHANCE: 3
});
o.CookBookTypeEnum = cc.Enum({
NONE: 0,
NORMAL: 1,
SPECIAL: 2
});
o.OrderSelectTypeEnum = cc.Enum({
VEG: 1,
MEAT: 2,
SOUP: 4,
SPECIAL: 8,
ALL: 15
});
o.MakeupFoodReasonEnum = cc.Enum({
NONE: 0,
LACK_CAPACITY: 1,
LACK_MONEY: 2
});
o.SelectFoodTypeEnum = cc.Enum({
None: 0,
Handle: 1,
Auto: 2
});
o.CookStatusEnum = cc.Enum({
NONE: 0,
IDLE: 1,
COOKING: 2,
BLOCK_NO_SLOT: 3,
BLOCK_SLOT_FULL: 4
});
o.CookPotViewTabType = {
ENERGYAGENT: "energy_agent",
COOK_FOOD: "cook_food"
};
o.CookPotEnergyAgentType = cc.Enum({
LandEnerayAgent: 1,
BushEnerayAgent: 2,
FruiterEnerayAgent: 3,
AnimalEnerayAgentJT: 4,
AnimalEnerayAgentZN: 5
});
o.CookHearthStatusEnum = cc.Enum({
LOCKED: 0,
IDLE: 1,
COOKING: 2,
COOKFINISH: 3
});
o.TreeHouseDecorationEnum = cc.Enum({
TreeHouse: 1,
Bed: 2,
Fireplace: 3,
Self: 4,
Window: 5,
Lamp: 6,
Table: 7,
Chair: 8,
Flower: 9,
Door: 10,
Pendant: 11,
Carpet: 12,
Floor: 13
});
o.MoneyBoxItemEnum = cc.Enum({
Small: 1,
Big: 2
});
n || (n = {});
o.TaskStateType = cc.Enum({
wait_finish: 0,
finish: 1,
rewarded: 2
});
o.CommonAwardType = {
money: "money",
red_packet: "red_packet",
material: "material",
rare_treasure: "rare_treasure",
fertilizer: "fertilizer",
wc_red_packet: "wc_red_packet"
};
o.VideoScreenEnum = cc.Enum({
None: 0,
PassedSuccessfully: 1,
PassedFailed: 2,
DoubleReward: 3
});
o.InventoryType = cc.Enum({
NONE: 0,
MAT: 1,
FOOD: 2,
TREASURE: 4,
NEVER: 5
});
o.InventoryTabType = cc.Enum({
NONE: 0,
Inventory: 1,
Market: 2
});
o.OrderDetailViewOpenType = cc.Enum({
NONE: 0,
DETAIL: 1,
LACK_INVENTORY: 2
});
o.PeopleDialogType = cc.Enum({
NONE: 0,
MasterDialog: 5,
GirlWalk: 6,
BoyWalk: 7,
GirlIdle: 8
});
o.ConsumerStatusType = cc.Enum({
None: 1,
Idle: 2,
Walk: 3,
Wait: 4,
GoBuy: 5,
Buying: 6,
Leave: 7
});
cc._RF.pop();
}, {} ],
GamePlayScene: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "02e4e6+JytFVbSWoAw4ZJCD", "GamePlayScene");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../config/EnumDeclareSg"), l = e("../HiFive/Framework/Util/GameView"), u = e("../HiFive/Views/PlayboardEnum"), p = e("../utils/CoreSBN"), f = cc._decorator, h = f.ccclass, d = f.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gameview = null;
t.lock_node = null;
t.cur_type = u.PlayBoardEnum.None;
return t;
}
t.prototype.onLoad = function() {
p.CoreSBN.publicFun.cjangeScreen();
p.CoreSBN.gameData.currScene = s.SceneNameSBN.Main;
};
t.prototype.start = function() {
this.enterGame();
};
t.prototype.enterGame = function() {
return a(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.gameview.onEnterScene() ];

case 1:
e.sent();
this.cur_type = u.PlayBoardEnum.Game;
this.lock_node.active = !1;
return [ 2 ];
}
});
});
};
r([ d(l.default) ], t.prototype, "gameview", void 0);
r([ d(cc.Node) ], t.prototype, "lock_node", void 0);
return r([ h ], t);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../HiFive/Framework/Util/GameView": "GameView",
"../HiFive/Views/PlayboardEnum": "PlayboardEnum",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../utils/CoreSBN": "CoreSBN"
} ],
GameRecord: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78d96dwW89Ag6BUgmiPrNzj", "GameRecord");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.base_name = "GameRecord";
t.cur_guid_id = 0;
t.game_count = 0;
t.share_count = 0;
t.upper_login_date = "";
t.apply_auto_update();
return t;
}
t._name = "GameRecord";
return t;
}(e("./BaseRecord").default);
o.default = r;
cc._RF.pop();
}, {
"./BaseRecord": "BaseRecord"
} ],
GameRewardsManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "31ad9Sm/rpObpFamDp1XOD1", "GameRewardsManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GameRewardsManager = o.BalanceConfigType = o.DiamondConfigType = void 0;
var n = e("../../Spript/Random"), i = e("../../GameDataConfig/GameLocalData"), r = e("./GamePlayData");
o.DiamondConfigType = cc.Enum({
One: 1,
Two: 2
});
o.BalanceConfigType = cc.Enum({
"官方奖励看视频": 1,
"官方奖励只要": 2
});
var a = function() {
function e() {
this.every_day_data = null;
this.gamePlayData = null;
this.balance_1_award_rp_configs = null;
this.view_show_max_list = [ 80, 100 ];
}
Object.defineProperty(e, "Instance", {
get: function() {
if (!this._instance) {
this._instance = new e();
this._instance.init();
}
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
this.gamePlayData = i.default.get_instance().get_data(r.default);
};
e.prototype.addRedpacket = function(e, t) {
void 0 === t && (t = 0);
t > 0 ? this.gamePlayData.sync_red_bag(t) : e.addCount > 0 && this.gamePlayData.add_red_bag(e);
};
e.prototype.addMoney = function(e) {
e > 0 && this.gamePlayData.add_money(e);
};
e.prototype.addDividend = function(e, t, o) {
void 0 === o && (o = 0);
o > 0 ? this.gamePlayData.sync_dividend(o) : e > 0 && this.gamePlayData.add_dividend(e, t);
};
e.prototype.addSatisfy = function() {};
e.prototype.getViewShowMax = function() {
return Math.floor(100 * n.default.rangeByArr(this.view_show_max_list)) / 100;
};
e.prototype.getDividendOfOfficial = function(e) {
var t = this.getBalance1AwardRPConfig(e);
return [ n.default.rangeIntByArr(t.rp1), n.default.rangeIntByArr(t.rp2) ];
};
e.prototype.getBalance1AwardRPConfig = function(e) {
for (var t = this.balance_1_award_rp_configs[0], o = this.balance_1_award_rp_configs.length - 1; o >= 0; --o) if (e >= this.balance_1_award_rp_configs[o].fblr) {
t = this.balance_1_award_rp_configs[o];
break;
}
return t;
};
e.prototype.getDiamondRewardCount = function(e, t) {
void 0 === e && (e = o.DiamondConfigType.One);
void 0 === t && (t = -1);
};
e.prototype.checkDiamondBack = function() {
return null;
};
e.prototype.getAddDividend = function() {};
e._instance = null;
return e;
}();
o.GameRewardsManager = a;
cc._RF.pop();
}, {
"../../GameDataConfig/GameLocalData": "GameLocalData",
"../../Spript/Random": "Random",
"./GamePlayData": "GamePlayData"
} ],
GameUI: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3a37dqWmOFBo7HFFBdlx0SU", "GameUI");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseNode"), c = e("../../GameDataConfig/GameLocalData"), s = e("./GamePlayData"), l = e("../../GameDataConfig/Utils"), u = e("./SyncBridge"), p = e("./MahjongManager"), f = cc._decorator, h = f.ccclass, d = f.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.star_label = null;
t.dividend_label = null;
t.dividend_labelB = null;
t.money_icon_node = null;
t.moneyLb = null;
t.star_node = null;
t.touch_star_btn = null;
t.top_margin_node = null;
t.star_icon = null;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.flush_money();
u.syncBridge.init();
p.gamebase.game_ui = this;
console.log("update test");
this.flush_red_bag();
this.flush_divide_money();
this.profit_top_ui();
};
t.prototype.profit_top_ui = function() {
var e = this.top_margin_node.getComponent(cc.Widget);
if (l.default.is_long_screen()) {
cc.winSize.height, cc.winSize.height;
e.top = 50;
} else e.top = -5;
e.updateAlignment();
};
t.prototype.show_on_line_view = function() {};
t.prototype.flush_red_bag = function() {
this.star_label.node.stopAllActions();
this.star_label.node.runAction(cc.sequence([ cc.scaleTo(.2, 1.1), cc.scaleTo(.1, 1) ]));
c.default.get_instance().get_data(s.default).red_bag;
this.star_label.string = "0元";
};
t.prototype.flush_divide_money = function() {};
t.prototype.flush_money = function() {};
r([ d(cc.Label) ], t.prototype, "star_label", void 0);
r([ d(cc.Label) ], t.prototype, "dividend_label", void 0);
r([ d(cc.Label) ], t.prototype, "dividend_labelB", void 0);
r([ d(cc.Node) ], t.prototype, "money_icon_node", void 0);
r([ d(cc.Label) ], t.prototype, "moneyLb", void 0);
r([ d(cc.Node) ], t.prototype, "star_node", void 0);
r([ d(cc.Node) ], t.prototype, "touch_star_btn", void 0);
r([ d(cc.Node) ], t.prototype, "top_margin_node", void 0);
r([ d(cc.Node) ], t.prototype, "star_icon", void 0);
return r([ h ], t);
}(a.default);
o.default = _;
cc._RF.pop();
}, {
"../../GameDataConfig/GameLocalData": "GameLocalData",
"../../GameDataConfig/Utils": "Utils",
"../../common/BaseNode": "BaseNode",
"./GamePlayData": "GamePlayData",
"./MahjongManager": "MahjongManager",
"./SyncBridge": "SyncBridge"
} ],
GameView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a8684SQnfpBG6a1JxP8KCjw", "GameView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, s = this && this.__spreadArrays || function() {
for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
var n = Array(e), i = 0;
for (t = 0; t < o; t++) for (var r = arguments[t], a = 0, c = r.length; a < c; a++, 
i++) n[i] = r[a];
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = e("../../Views/SoundManager"), u = e("../../../Spript/Tools"), p = e("../../Views/SyncBridge"), f = e("../../Views/BaseCom"), h = e("../../Views/PlayboardEnum"), d = e("../../Views/SuccessView"), _ = e("../../Views/MahjongManager"), g = e("../../Views/TimeControl"), y = e("./FlowerComp"), m = e("./LevelAwardNode"), v = e("../../../utils/CoreSBN"), b = e("../../../config/EnumDeclareSg"), S = e("../../Views/FailureView"), w = e("../../../game/view/SettingTwoView"), B = e("../../../game/battle/HeadMainItem"), C = e("../../../manager/UserDataSBNMgr"), N = e("../../../game/battle/BattleStartAniView"), P = e("../../../game/battle/BattleWinView"), O = e("../../../game/battle/BattleLoadingView"), R = e("../../../game/battle/BattleLoseView"), k = e("../../../game/view/SettingView"), A = cc._decorator, I = A.ccclass, D = A.property, L = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.topWid = null;
t.game = null;
t.slot_node = null;
t.lock_node = null;
t.levelReward = null;
t.atlas_node = null;
t.bgSprite = null;
t.selfHeadNode = null;
t.emptyHeadNode = null;
t.cur_dae_step = 0;
t._level_data = null;
t.game_type = h.PlayBoardEnum.Game;
t.hasDae = !1;
t.selfHead = null;
t.emptyHead = null;
t._totla = 0;
return t;
}
Object.defineProperty(t.prototype, "level_logic", {
get: function() {
this._level_data || (this._level_data = _.MahjongManager.getInstance().getLevelEntityByType(h.PlayBoardEnum.Game));
return this._level_data;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
v.CoreSBN.publicFun.isAdaptationViewLong() ? this.topWid.top = v.CoreSBN.config.topLongHeight : this.topWid.top = v.CoreSBN.config.topShortHeight;
if (v.CoreSBN.gameData.gameType == b.GameTypeSBN.Battle) {
var e = v.CoreSBN.pool.requestObject(v.CoreSBN.config.battleBundle, b.PrefabNameSBN.headMainItem);
if (e) {
e.parent = this.selfHeadNode;
this.selfHead = e.getComponent(B.default);
}
var t = v.CoreSBN.pool.requestObject(v.CoreSBN.config.battleBundle, b.PrefabNameSBN.headMainItem);
if (t) {
t.parent = this.emptyHeadNode;
this.emptyHead = t.getComponent(B.default);
}
}
};
t.prototype.onEnable = function() {
v.CoreSBN.message.on(b.EventNameSBN.game_start, this.onStartSbn, this);
v.CoreSBN.message.on(b.EventNameSBN.battle_give_up, this.onGameFailed, this);
v.CoreSBN.message.on(b.EventNameSBN.battle_re_match, this.battleStART, this);
cc.director.on(C.MsgUserEnumSBN.battle_ani_complete, this.pipeiAniEnd, this);
cc.director.on(C.MsgUserEnumSBN.game_start_ani_complete, this.aniCom, this);
};
t.prototype.onDisable = function() {
v.CoreSBN.message.removeAll(this);
cc.director.off(C.MsgUserEnumSBN.battle_ani_complete, this.pipeiAniEnd, this);
};
t.prototype.pipeiAniEnd = function() {
this.selfHead && this.selfHead.changeUi(C.default.ins.UserName, C.default.ins.UserHead, 0, this.game.boxes.remain_box_count);
this.emptyHead && this.emptyHead.changeUi(C.default.ins.curEmptyName, C.default.ins.curEmptyHead, 1, this.game.boxes.remain_box_count);
};
t.prototype.aniCom = function() {
if (this.emptyHead) {
this.emptyHead.startPro();
this.levelReward.isTime(!0);
}
};
t.prototype.battleStART = function() {
if (C.default.ins.battleLoadingView) {
C.default.ins.battleLoadingView.node.active = !0;
C.default.ins.battleLoadingView.step();
} else {
var e = v.CoreSBN.pool.requestObject(v.CoreSBN.config.battleBundle, b.PrefabNameSBN.BattleLoadingView);
if (e) {
cc.director.getScene().addChild(e);
C.default.ins.battleLoadingView = e.getComponent(O.default);
C.default.ins.battleLoadingView.step();
}
}
this.startGame();
};
t.prototype.loadSp = function() {
return a(this, void 0, void 0, function() {
var e, t = this;
return c(this, function() {
e = v.CoreSBN.gameData.curLevelImg;
v.CoreSBN.gameData.levelPic = e;
return [ 2, v.CoreSBN.res.loadImgList(v.CoreSBN.config.remoteBundle, [ e ], function() {
var o = v.CoreSBN.res.getImgAsset(v.CoreSBN.config.remoteBundle, "" + e);
o && (t.bgSprite.spriteFrame = o);
}, function() {}) ];
});
});
};
t.prototype.onStartSbn = function(e) {
void 0 === e && (e = !1);
this.startGame(e);
};
t.prototype.onEnterScene = function() {
return a(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
this.node.active = !0;
return [ 4, this.startGame() ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.startGame = function(e) {
var t = this;
void 0 === e && (e = !1);
return new Promise(function() {
return a(t, void 0, void 0, function() {
var e, t, o;
return c(this, function(n) {
switch (n.label) {
case 0:
e = v.CoreSBN.pool.requestObject(v.CoreSBN.config.battleBundle, b.PrefabNameSBN.BattleStartAniView);
t = cc.find("Canvas/View");
if (e && t) {
e.parent = t;
v.CoreSBN.gameData.gameType !== b.GameTypeSBN.Battle && this.scheduleOnce(function() {
e.getComponent(N.default).startAni();
}, 0);
}
return [ 4, this.loadSp() ];

case 1:
n.sent();
console.log("startGame");
g.TimeControl.getInstance().reset_time();
this.cur_dae_step = 0;
this.lock_node.active = !0;
this.level_logic.init();
this.level_logic.selectLevel(v.CoreSBN.gameData.curLevelMap);
this.game.game_panel.opacity = 0;
return [ 4, this.game.reset() ];

case 2:
n.sent();
return [ 4, this.level_logic.geMapData() ];

case 3:
o = n.sent();
console.log("load LV", o.level);
this.hasDae = !1;
return o ? [ 4, this.game.startPlaying(o, this) ] : [ 3, 5 ];

case 4:
n.sent();
n.label = 5;

case 5:
this._totla = this.game.boxes.remain_box_count;
this.hasDae || (this.game.game_panel.opacity = 255);
this.levelReward.init(this.game.boxes.remain_box_count, o.level);
this.lock_node.active = !1;
v.CoreSBN.gameData.preNextImg();
return [ 2 ];
}
});
});
});
};
t.prototype.onSettingBtn = function() {
var e = this;
v.CoreSBN.gameData.gameType == b.GameTypeSBN.Battle ? k.default.open({
parmas: 1
}, !1) : w.default.open({
param: {
backAction: function() {
e.startGame();
}
}
}, !1);
};
t.prototype.onLevelInputChange = function(e) {
var t = parseInt(e.string);
this.level_logic.setPlayingLevel(t);
this.startGame();
};
t.prototype.onLevelInputChange2 = function(e) {
void 0 === e && (e = 0);
this.level_logic.setPlayingLevel(this.level_logic.cur_level + e);
this.startGame();
};
t.prototype.onCompleteOneCard = function(e, t, o, n) {
if (e) {
t || _.MahjongManager.getInstance().checkEliminateReward(e.node, 1);
this.selfHead && this.selfHead.changePro(n);
this.levelReward.refreshView(n);
v.CoreSBN.sdk.vibrateShort();
p.syncBridge.active_user();
}
};
t.prototype.flyStarToAtlas = function(e) {
for (var t = e.holes, o = this.node.convertToNodeSpaceAR(this.atlas_node.convertToWorldSpaceAR(cc.v3(0, 0))), n = function(e) {
var t = i.node.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v3(0, 0))), n = o.sub(t).mag() / 1e3, r = v.CoreSBN.pool.requestObject(v.CoreSBN.config.commenBundle, b.PrefabNameSBN.Tail, i.node);
r.setPosition(t);
cc.tween(r).to(n, {
position: o
}).call(function() {
l.SoundManager.playSound(b.SoundNameSBN.get_tili);
r.destroy();
}).start();
}, i = this, r = 0, a = t; r < a.length; r++) n(a[r]);
};
t.prototype.onGamePassed = function() {
var e;
this.levelReward.isTime(!1);
this.emptyHead && this.emptyHead.closeTime();
if (v.CoreSBN.gameData.gameType == b.GameTypeSBN.Battle) {
var t = v.CoreSBN.pool.requestObject(v.CoreSBN.config.battleBundle, b.PrefabNameSBN.BattleWinView, this.node), o = cc.find("Canvas/View");
if (!t || !o) {
console.warn("battle win view not exist");
return;
}
t.getComponent(P.default).step((null === (e = this.emptyHead) || void 0 === e ? void 0 : e.Pro) || 0, this.levelReward.time_count);
} else {
var n = v.CoreSBN.gameData.CurLevel + 1;
this.level_logic.setPlayingLevel(n);
d.default.open({
param: {
level: n
}
}, !1);
}
};
t.prototype.onGameFailed = function() {
var e, t = this;
this.levelReward.isTime(!1);
this.emptyHead && this.emptyHead.closeTime();
if (v.CoreSBN.gameData.gameType == b.GameTypeSBN.Battle) {
var o = v.CoreSBN.pool.requestObject(v.CoreSBN.config.battleBundle, b.PrefabNameSBN.BattleLoseView, this.node), n = cc.find("Canvas/View");
if (!o || !n) {
console.warn("battle win view not exist");
return;
}
o.getComponent(R.default).step((null === (e = this.selfHead) || void 0 === e ? void 0 : e.Pro) || 0, this.levelReward.time_count);
} else S.default.open({
param: {
backAction: function() {
t.startGame();
},
userAction: function() {
new Promise(function() {
t.game.packageFlower(!0);
}).then(function() {
t.game.setPlaying();
});
}
}
}, !1);
};
t.prototype.onCardsChanged = function() {
this.level_logic.save(this.game.build());
};
t.prototype.useProp = function(e) {
for (var t, o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return (t = _.MahjongManager.getInstance()).useProp.apply(t, s([ this.level_logic, e ], o));
};
t.prototype.setLock = function(e) {
console.log("setLock", e);
this.lock_node.active = e;
};
r([ D(cc.Widget) ], t.prototype, "topWid", void 0);
r([ D(y.default) ], t.prototype, "game", void 0);
r([ D(cc.Node) ], t.prototype, "slot_node", void 0);
r([ D(cc.Node) ], t.prototype, "lock_node", void 0);
r([ D(m.default) ], t.prototype, "levelReward", void 0);
r([ D(cc.Node) ], t.prototype, "atlas_node", void 0);
r([ D(cc.Sprite) ], t.prototype, "bgSprite", void 0);
r([ D(cc.Node) ], t.prototype, "selfHeadNode", void 0);
r([ D(cc.Node) ], t.prototype, "emptyHeadNode", void 0);
r([ u.utils.throttler(500) ], t.prototype, "onCardsChanged", null);
return r([ I ], t);
}(f.default);
o.default = L;
cc._RF.pop();
}, {
"../../../Spript/Tools": "Tools",
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../game/battle/BattleLoadingView": "BattleLoadingView",
"../../../game/battle/BattleLoseView": "BattleLoseView",
"../../../game/battle/BattleStartAniView": "BattleStartAniView",
"../../../game/battle/BattleWinView": "BattleWinView",
"../../../game/battle/HeadMainItem": "HeadMainItem",
"../../../game/view/SettingTwoView": "SettingTwoView",
"../../../game/view/SettingView": "SettingView",
"../../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/BaseCom": "BaseCom",
"../../Views/FailureView": "FailureView",
"../../Views/MahjongManager": "MahjongManager",
"../../Views/PlayboardEnum": "PlayboardEnum",
"../../Views/SoundManager": "SoundManager",
"../../Views/SuccessView": "SuccessView",
"../../Views/SyncBridge": "SyncBridge",
"../../Views/TimeControl": "TimeControl",
"./FlowerComp": "FlowerComp",
"./LevelAwardNode": "LevelAwardNode"
} ],
GuideCtrl: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7e2baQPqg5EgKQahSvSYrpg", "GuideCtrl");
var n = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../GameDataConfig/GameLocalData"), r = e("../../UIManager/UIConfig"), a = e("../../UIManager/UIManager"), c = e("./GamePlayData"), s = e("../../Spript/Tools"), l = e("./MahjongManager"), u = function() {
function e() {}
Object.defineProperty(e.prototype, "isGuide", {
get: function() {
return c.default.getRecord().is_in_guide || e.isNowGuide;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isSoftGuide", {
get: function() {
return this.isNowGuide;
},
set: function(e) {
this._isSoftGuide = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isNowGuide", {
get: function() {
return this._isNowGuide;
},
set: function(e) {
this._isNowGuide = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Instance", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.change_parent = function(e, t, o) {
o || (o = e.convertToWorldSpaceAR(cc.v3(0, 0)));
var n = t.convertToNodeSpaceAR(o);
e.parent = t;
e.position = n;
};
e.prototype.try_start_guide = function() {
if (this.isInGuide()) {
e.isNowGuide = !0;
i.default.get_instance().get_data(c.default).is_in_guide = !1;
i.default.get_instance().set_local_storeage();
i.default.get_instance().game_sync();
this.guide_1();
} else e.isNowGuide = !1;
};
e.prototype.isInGuide = function() {
return !!i.default.get_instance().get_data(c.default).is_in_guide;
};
e.prototype.guide_1 = function() {
var e = this;
this.show_guide(function(t) {
t.flush_view({
id: 2,
tip_posY_offset_by_mask: 0,
tip_posX_offset_by_mask: 0,
is_show_next_step_btn: !0,
picIndex: 0,
hand_pos_node: t.next_btn,
sound_name: "lsxq1",
content_text: "测试",
next_call: function() {
return __awaiter(e, void 0, void 0, function() {
return n(this, function() {
this.guide_2();
return [ 2, !1 ];
});
});
}
});
});
};
e.prototype.guide_2 = function() {
var e = this, t = l.gamebase.game_view.game.boxes.boxes[0];
this.show_guide(function(o) {
o.flush_view({
id: 2,
tip_posY_offset_by_mask: -300,
mask_node: t.node,
picIndex: 1,
hand_pos_node: t.node,
sound_name: "lsxq2",
content_text: "测试",
next_call: function() {
return __awaiter(e, void 0, void 0, function() {
return n(this, function() {
this.guide_3();
return [ 2, !1 ];
});
});
}
});
});
};
e.prototype.guide_block = function(e, t, o, i) {
var r, a, c, l = this;
void 0 === i && (i = !1);
if (o) {
o.time;
r = o.ct;
a = o.sound_name;
c = o.picIndex;
}
var u = e.node.parent;
return new Promise(function(o) {
l.show_guide(function(p) {
l.change_parent(e.node, p.top_content);
p.setLock(!1);
p.flush_view({
id: 2,
mask_node: e.node,
mask_offset: cc.rect(0, 0, 0, 0),
hand_pos_node: e.node,
hand_pos_offset: cc.v3(0, 0),
tip_posY_offset_by_mask: 100,
content_text: r,
is_hide_mask: i,
picIndex: c,
sound_name: a,
tip_posX_offset_by_mask: -100,
next_call: function(i) {
return __awaiter(l, void 0, void 0, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
p.setLock(!0);
this.change_parent(e.node, u);
i.is_hide_mask = !0;
r = t.getPlankByNail(e);
return [ 4, t.dealNail(e, r) ];

case 1:
n.sent();
return [ 4, s.utils.sleep(1e3) ];

case 2:
n.sent();
o(!0);
p.setLock(!1);
return [ 2, !1 ];
}
});
});
}
});
});
});
};
e.prototype.guide_3 = function() {
var e = this, t = l.gamebase.game_view.game.game_touch;
this.show_guide(function(o) {
o.flush_view({
id: 2,
tip_posY_offset_by_mask: -500,
mask_node: t,
picIndex: 3,
sound_name: "lsxq3",
is_hide_hand: !0,
content_text: "测试",
next_call: function() {
return __awaiter(e, void 0, void 0, function() {
return n(this, function() {
this.guide_4();
return [ 2, !1 ];
});
});
}
});
});
};
e.prototype.guide_4 = function() {
var e = this, t = l.gamebase.game_view.game.slot.box_panel;
this.show_guide(function(o) {
o.flush_view({
id: 2,
tip_posY_offset_by_mask: -300,
mask_node: t,
picIndex: 2,
sound_name: "lsxq4",
is_hide_hand: !0,
content_text: "测试",
next_call: function() {
return __awaiter(e, void 0, void 0, function() {
return n(this, function() {
this.guide_5();
return [ 2, !1 ];
});
});
}
});
});
};
e.prototype.guide_5 = function() {
var e = this, t = l.gamebase.game_view.game.game_touch;
this.show_guide(function(o) {
o.flush_view({
id: 2,
tip_posY_offset_by_mask: -500,
mask_node: t,
picIndex: 4,
sound_name: "lsxq5",
is_hide_hand: !0,
content_text: "测试",
next_call: function() {
return __awaiter(e, void 0, void 0, function() {
return n(this, function() {
this.close_guide();
return [ 2, !1 ];
});
});
}
});
});
};
e.prototype.guide_blocks = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, o, i, r, a;
return n(this, function(n) {
switch (n.label) {
case 0:
e = l.gamebase.game_com, t = e.getGuideData(), o = t.nails;
if (!(i = t.box) || !o || o.length != i.empty_count) {
this.close_guide();
return [ 2 ];
}
r = [ {
ct: "点击钉子回收到相同颜色的运输车里",
time: 400,
sound_name: "houge2",
picIndex: 1
} ], a = o.shift();
n.label = 1;

case 1:
if (!a) return [ 3, 6 ];
n.label = 2;

case 2:
n.trys.push([ 2, 4, , 5 ]);
return [ 4, this.guide_block(a, e, r.shift()) ];

case 3:
if (!n.sent()) {
i.interceptor = null;
this.close_guide();
}
a = o.shift();
return [ 3, 5 ];

case 4:
n.sent();
this.close_guide();
i.interceptor = null;
return [ 3, 5 ];

case 5:
return [ 3, 1 ];

case 6:
return [ 2 ];
}
});
});
};
e.prototype.guide_box = function(e, t) {
var o = this;
return new Promise(function(i) {
o.show_guide(function(r) {
r.setLock(!1);
r.flush_view({
id: 2,
mask_node: e.node,
is_hide_hand: !0,
mask_offset: cc.rect(0, 0, 0, 0),
hand_pos_node: e.node,
hand_pos_offset: cc.v3(0, 0),
tip_posY_offset_by_mask: -300,
content_text: "拔除了3棵螺丝，成功发车！ ",
sound_name: "b3",
picIndex: 2,
tip_posX_offset_by_mask: -100,
next_call: function() {
return __awaiter(o, void 0, void 0, function() {
return n(this, function() {
i(!0);
this.close_guide();
t();
return [ 2, !1 ];
});
});
}
});
});
});
};
e.prototype.show_guide = function(e) {
cc.director.once(cc.Director.EVENT_AFTER_DRAW, function() {
var t = {
ui_config_path: r.default.GuideView,
ui_config_name: "GuideView",
param: {},
complete_callback: e
};
a.default.show_ui(t);
});
};
e.prototype.close_guide = function() {
a.default.close_ui("GuideView");
e.isNowGuide = !1;
};
e._instance = null;
e._isSoftGuide = !1;
e._isNowGuide = !1;
return e;
}();
o.default = u;
cc._RF.pop();
}, {
"../../GameDataConfig/GameLocalData": "GameLocalData",
"../../Spript/Tools": "Tools",
"../../UIManager/UIConfig": "UIConfig",
"../../UIManager/UIManager": "UIManager",
"./GamePlayData": "GamePlayData",
"./MahjongManager": "MahjongManager"
} ],
GuideData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "be2e6dX+INOloSNDZSLFasu", "GuideData");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.base_name = "GuideData";
t.cur_guid_id = 0;
t.pass_guide_ids = [];
t.had_guide_cash_out = 0;
t.apply_auto_update();
return t;
}
t.prototype.guide_finished = function(e) {
for (var t = 0, o = this.pass_guide_ids; t < o.length; t++) if (e == o[t]) return !0;
return !1;
};
t.prototype.pass_a_guide = function(e) {
this.pass_guide_ids.push(e);
this.pass_guide_ids = this.pass_guide_ids;
};
t._name = "GuideData";
return t;
}(e("./BaseRecord").default);
o.default = r;
cc._RF.pop();
}, {
"./BaseRecord": "BaseRecord"
} ],
HandleSBN: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3ba983qxWpEBKW/AAbGodP3", "HandleSBN");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e(e, t, o, n) {
void 0 === o && (o = []);
void 0 === n && (n = !1);
this.isRemove = !1;
this.setData(e, t, o, n);
}
e.prototype.setData = function(e, t, o, n) {
this.thecs = e;
this.method = t;
this.args = o;
this.once = n;
return this;
};
e.prototype.run = function() {
this.method && this.method.apply(this.thecs, this.args);
this.once && this.dispose();
};
e.prototype.dispose = function() {
if (!this.isRemove) {
this.isRemove = !0;
this.thecs = null;
this.method = null;
this.args = null;
e.sgHandlePool.push(this);
}
};
e.create = function(t, o, n, i) {
void 0 === n && (n = []);
void 0 === i && (i = !0);
var r;
if (this.sgHandlePool.length > 0) {
(r = this.sgHandlePool.pop()).isRemove = !1;
r.setData(t, o, n, i);
r.hashCode = e.hashCode++;
return r;
}
(r = new e(t, o, n, i)).hashCode = e.hashCode++;
return r;
};
e.sgHandlePool = [];
e.hashCode = 0;
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
HeadBattleItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c70b5bo+xDSoC2XUBXyrkN", "HeadBattleItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../manager/UserDataSBNMgr"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.roleSp = null;
t.nameLab = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setHead = function(e, t) {
this.nameLab.string = t;
var o = c.CoreSBN.res.getImgAsset(c.CoreSBN.config.battleBundle, "" + a.UserDataResPrefixSBN.head + e);
this.roleSp.spriteFrame = o;
};
r([ u(cc.Sprite) ], t.prototype, "roleSp", void 0);
r([ u(cc.Label) ], t.prototype, "nameLab", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
HeadHomeItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ee05dZwt5FFBoSoXssqRkw2", "HeadHomeItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../manager/UserDataSBNMgr"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nameLab = null;
t.headSprite = null;
return t;
}
t.prototype.start = function() {
cc.director.on(c.MsgUserEnumSBN.name_change, this.changeUi, this);
cc.director.on(c.MsgUserEnumSBN.head_change, this.changeUi, this);
this.changeUi();
};
t.prototype.changeUi = function() {
this.nameLab.string = c.default.ins.UserName;
var e = s.CoreSBN.res.getImgAsset(s.CoreSBN.config.battleBundle, "" + c.UserDataResPrefixSBN.head + c.default.ins.UserHead);
e && (this.headSprite.spriteFrame = e);
};
t.prototype.onClickBtn = function() {
var e = cc.find("Canvas/View"), t = s.CoreSBN.pool.requestObject(s.CoreSBN.config.battleBundle, a.PrefabNameSBN.HeadSBnView);
e && t && e.addChild(t);
};
t.prototype.onDestroy = function() {};
r([ p(cc.Label) ], t.prototype, "nameLab", void 0);
r([ p(cc.Sprite) ], t.prototype, "headSprite", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
HeadMainItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b808dCZ4hdC7pD4cnY/JQZh", "HeadMainItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../config/RankConfig"), s = e("../../manager/UserDataSBNMgr"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nameLab = null;
t.headSprite = null;
t.proSprite = null;
t.proLab = null;
t.proSpriteArr = [];
t.type = 0;
t._pro = 0;
t._total = 0;
t._curTotal = 0;
t._timeArr = [];
t._gametimer = 0;
t._curIndex = 0;
return t;
}
t.prototype.changeUi = function(e, t, o, n) {
this.nameLab.string = e;
var i = l.CoreSBN.res.getImgAsset(l.CoreSBN.config.battleBundle, "" + s.UserDataResPrefixSBN.head + t);
i && (this.headSprite.spriteFrame = i);
this._total = n;
this.proSprite.spriteFrame = this.proSpriteArr[o];
this.changePro(n);
this.closeTime();
this._curIndex = 0;
};
t.prototype.changePro = function(e) {
var t = e / this._total, o = Math.floor(Math.floor(1e4 * (1 - t)) / 100);
o > 100 && (o = 100);
this._pro = o;
this.proLab.string = o + "%";
this.proSprite.fillRange = o / 100;
};
Object.defineProperty(t.prototype, "Pro", {
get: function() {
return this._pro;
},
enumerable: !1,
configurable: !0
});
t.prototype.startPro = function() {
var e;
this._curTotal = this._total;
this._curIndex = 0;
this._timeArr = (null === (e = c.RankConfig.getRankDataByStar(s.default.ins.Rank)) || void 0 === e ? void 0 : e.timeArr) || [ 1, 2 ];
this.startTime();
};
t.prototype.closeTime = function() {
clearTimeout(this._gametimer);
};
t.prototype.startTime = function() {
var e = this, t = l.CoreSBN.publicFun.getRandomInt(this._timeArr[0], this._timeArr[1]);
this._gametimer = setTimeout(function() {
e.timeEnd();
}, 1e3 * t);
};
t.prototype.timeEnd = function() {
this._curIndex++;
this.closeTime();
if (this._curIndex >= 1) {
this._curIndex = 0;
this._curTotal--;
if (this._curTotal <= 0) {
l.CoreSBN.message.emit(a.EventNameSBN.battle_give_up);
this.closeTime();
} else this.startTime();
this.changePro(this._curTotal);
} else this.startTime();
};
t.prototype.onDestroy = function() {
this.closeTime();
};
r([ f(cc.Label) ], t.prototype, "nameLab", void 0);
r([ f(cc.Sprite) ], t.prototype, "headSprite", void 0);
r([ f(cc.Sprite) ], t.prototype, "proSprite", void 0);
r([ f(cc.Label) ], t.prototype, "proLab", void 0);
r([ f(cc.SpriteFrame) ], t.prototype, "proSpriteArr", void 0);
return r([ p ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../config/RankConfig": "RankConfig",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
HeadResultItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0def36ag+1NEKoEmIs9SWbt", "HeadResultItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../manager/UserDataSBNMgr"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.roleSprite = null;
t.nameLab = null;
t.proSprite = null;
t.proLb = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setData = function(e, t, o) {
var n = c.CoreSBN.res.getImgAsset(c.CoreSBN.config.battleBundle, a.UserDataResPrefixSBN.head + e);
n && (this.roleSprite.spriteFrame = n);
this.nameLab.string = t;
this.proLb.string = o + "%";
this.proSprite.fillRange = o / 100;
};
r([ u(cc.Sprite) ], t.prototype, "roleSprite", void 0);
r([ u(cc.Label) ], t.prototype, "nameLab", void 0);
r([ u(cc.Sprite) ], t.prototype, "proSprite", void 0);
r([ u(cc.Label) ], t.prototype, "proLb", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
HeadSBnItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a6fafD7jDFDNLSyWO8+e6pN", "HeadSBnItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/VirItemRender"), c = e("../../manager/UserDataSBNMgr"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.selecNode = null;
t.headSprite = null;
return t;
}
t.prototype.dataChanged = function() {
var e = s.CoreSBN.res.getImgAsset(s.CoreSBN.config.battleBundle, c.UserDataResPrefixSBN.head + this.data.index);
e && (this.headSprite.spriteFrame = e);
this.updateSlelect();
};
t.prototype.updateSlelect = function() {
this.data.index == this.data.select ? this.selecNode.active = !0 : this.selecNode.active = !1;
};
t.prototype.onClickCallback = function(t) {
e.prototype.onClickCallback.call(this, t);
this.data.index = this.data.select;
this.updateSlelect();
};
r([ p(cc.Node) ], t.prototype, "selecNode", void 0);
r([ p(cc.Sprite) ], t.prototype, "headSprite", void 0);
return r([ u ], t);
}(a.default);
o.default = f;
cc._RF.pop();
}, {
"../../commen/VirItemRender": "VirItemRender",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
HeadSBnView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ee91eHdoVBTYEP4Hju6fd8", "HeadSBnView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/ScreollVirtualView"), c = e("../../commen/ViewBase"), s = e("../../manager/UserDataSBNMgr"), l = e("../../UIManager/UIManager"), u = e("../../utils/CoreSBN"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.selfHead = null;
t.selfNameEdi = null;
t.scroVir = null;
t._curSelectIndexId = 1;
return t;
}
t.prototype.step = function() {
this.updateHeadAndName();
cc.director.on(s.MsgUserEnumSBN.head_change, this.updateHeadAndName, this);
this._curSelectIndexId = s.default.ins.UserHead;
this.showList();
};
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
cc.director.off(s.MsgUserEnumSBN.head_change, this.updateHeadAndName, this);
};
t.prototype.updateHeadAndName = function() {
var e = u.CoreSBN.res.getImgAsset(u.CoreSBN.config.battleBundle, s.UserDataResPrefixSBN.head + s.default.ins.UserHead);
e && (this.selfHead.spriteFrame = e);
this.selfNameEdi.string = s.default.ins.UserName;
};
t.prototype.showList = function() {
this.updateData();
this.scroVir.setTouchItemCallback(this.onClickItem, this);
};
t.prototype.updateData = function() {
for (var e = [], t = 0; t < s.default.ins.headMaxID; t++) e.push({
index: t + 1,
select: this._curSelectIndexId
});
this.scroVir.refreshData(e);
};
t.prototype.onClickItem = function(e) {
if (e.index != this._curSelectIndexId) {
this._curSelectIndexId = e.index;
this.updateData();
}
};
t.prototype.onCloseBtn = function() {
this.closeView();
};
t.prototype.onSaveBtn = function() {
var e = this.selfNameEdi.string;
if (e.length <= 0) {
this.selfNameEdi.string = s.default.ins.UserName;
console.warn("name is null");
} else {
s.default.ins.UserName = e;
s.default.ins.UserHead = this._curSelectIndexId;
l.default.show_toast("Save Success");
}
};
r([ h(cc.Sprite) ], t.prototype, "selfHead", void 0);
r([ h(cc.EditBox) ], t.prototype, "selfNameEdi", void 0);
r([ h(a.default) ], t.prototype, "scroVir", void 0);
return r([ f ], t);
}(c.default);
o.default = d;
cc._RF.pop();
}, {
"../../UIManager/UIManager": "UIManager",
"../../commen/ScreollVirtualView": "ScreollVirtualView",
"../../commen/ViewBase": "ViewBase",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
Hi5_UIManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ded21X8bJKlbRRiWCSsklL", "Hi5_UIManager");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.UIManager = void 0;
var r = e("../../Spript/Singleton"), a = e("../../Spript/FrameConst"), c = e("./Logger"), s = e("../../Spript/ImageUtil"), l = e("../../HiFive/Framework/Util/TipToast"), u = e("../../utils/CoreSBN"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._map_layer = new Map();
t._layers = {};
t._game_layer = null;
t._img_mask = null;
t._mask_layer = null;
t._mask_layer_timeout = null;
t._tip_toast = null;
t._prefab_dict = {
GuideView: null
};
return t;
}
Object.defineProperty(t.prototype, "zIndex", {
get: function() {
return this._game_layer ? this._game_layer.zIndex : 1e4;
},
enumerable: !1,
configurable: !0
});
t.prototype.onInit = function() {
this._scan_prefab();
this._init_root_layer();
this._init_mask();
this._init_tip_toast();
};
t.prototype._scan_prefab = function() {
for (var e = this, t = function(t) {
cc.resources.load("HiFive/Component/" + t, cc.Prefab, function(o, n) {
if (o) c.logger.warn(t + " was not found."); else {
e._prefab_dict[t] = n;
c.logger.info("load prefab", t);
}
});
}, o = 0, n = Object.keys(this._prefab_dict); o < n.length; o++) t(n[o]);
};
t.prototype.get_prefab = function(e) {
return this._prefab_dict[e];
};
t.prototype._init_root_layer = function() {
for (var e = new cc.Node("_hifive_game_layer_"), t = 0, o = 0, n = Object.keys(a.LayerOrder); o < n.length; o++) {
var i = n[o];
this._map_layer.set(a.LayerOrder[i], []);
var r = this._init_layer(i);
r.zIndex = t++;
this._layers[i] = r;
r.parent = e;
}
e.group = a.Hi5Conf.group_name || "default";
this._game_layer = e;
this._game_layer.zIndex = 1e4;
};
t.prototype._init_mask = function() {
var e = this;
s.ImageUtil.getTextureFromBase64("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUDBAYoM+OyAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==", function(t) {
e._img_mask = new cc.SpriteFrame(t, cc.rect(0, 0, 1, 1), !1, cc.v2(), cc.size(1, 1));
e._set_mask_layer();
});
};
t.prototype._init_tip_toast = function() {
var e = this, t = new cc.Node("_tip_toast").addComponent(l.default);
this._tip_toast = t;
s.ImageUtil.getTextureFromBase64("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm0AAABlCAYAAAAfx9T6AAAIh0lEQVR4nO3de69U1RkH4B9wgIOAXAQE8X6LtjW1prX/9GKjbVOTJv2E/QT9AEaTXkzapk2tUVs1Bi/U+62ioOKBA81K18TjWWfOzJ69N6A8TzI5nrVn9jgbor+sPe/7bglcXktJtvkzgMGU/67vcDkZ0WqS89/wC/xFs3IFuNyhrfwPe3ndY2d97FjzKL9vr89fWvP71uaMAADjWUnyaX18lOT9JG/X30d1qUJbCViHkhxOcl2SfUmurWENAODr7oMkryR5KclnY3yWsUJbCWRH1zz2XQG7egAAY7uQ5GSSZ5O8O+R7DRWk9iQ5nuSG+tjdPAMA4OpSbp2+mOS1JJ/3/eSLhralGs5uSnJj3UkDAKB1Mcl7Sd5M8lb9587FHF1CW9lNuzXJzUmOqfgDAFjIar11+kaSV5N8PM9JZoW2EtTuSnJbLSQAAGBY5Rbqk7POuNSs/F/ZUbuv7qgBADCeuWoBpoW2B+ysAQCM6kySZ5I8P8+bTLs9WvqnPSq4AQAM7qMa1k7UFiFzmRbaUqcR/Ly28gAAYHEXauuP52sFaWebhbbUMVE/SXJ3cwQAgHmUQoN/1tuhC5vVtuNiTYUXa182AAC6ebxvYEuHXmtlEOrpJLcYRwUA0MneJC/3vWRdGuR+mORUbQciuAEAzGd/HWk1VxPdabpONSjVDv9NcrvgBgAwt2uSvNTnci0yiqrstp2t46wAAJhtV5Kn+1ynrc3KfEq56nP+gAAA5nK672VaNLQVf6u7bgAAbO6ZTY/OoU9oK03inmpWAQBY69W+32dLz9CW2sNt7vELAABXmVLA+cchPnLf0Laa5HyzCgDA2dpY99wQV6JvaDtUZ5QCAPClcifyiSSfDHVN+oa2B5oVAAD+XCdKDaZPaLujTkcAAOBLZUD8C0Nfj0VDW5mh9eNmFQDg6lYKD/4yxhVYJLSV1zzsu2wAAF9xMcmfxirSXCS0PZTkSLMKAHB1e6UOhh9F19D2YJI7m1UAAHrNFp2lS2i7J8n9zSoAAGfr99lGM29ouyHJj5pVAAAuiXlC28EkvxigpxsAwDfVcpIbx/xss4LYriS/UikKADDTT2t2GsW2TU66lOTRJAeaIwAArFc2uY4lOVHHWA1qs9D2SJLjzSoAANPsTnJ9bf8xaHCbFtp+kOTeZhUAgFn2jhHcNgptt6oUBQDoZW/tvvFaktUhLuX60HZtLTzYKMwBADC/PUlursHtXN/rtjacba2FB3ubZwEAsIhd9S7mySQrfa7g2tD2PSOqAAAGtzPJHUneTPL5oiefhLbdtVpUA10AgOFtT3JXHSh/epGzT0JbqRY92hwFAGAo2+pdzdOLzCmdhLaHagIEAGA8W5LcVitK3+ka2srkgwebIwAAjOV4LVJ4vUtoK03fbklyTXMUAICxHE5yXa0sndmEd3J7tNxXvbtu2QEAcGnsr7tupZfb+c3ecRLaPk3yXt1x01gXAODS2V0z2Ka93NYGtE+SvFwT377mmQAAjGU5ye1J3khydqP3WL+rVtLdiSQf1kGnO5pXAAAwhh21Jcjb9S7opqFt4lSS52uIO1QrTAEAGNfSmuB2Zp7QVlxM8m6SF2qBwhGFCgAAo9tae7m9tXbHbbPQNrFaZ2WdqNPq9zfPAABgSNvqd9xOTr7j1qVS9ItaqFC+73bMBAUAgFFtq5mrfGVtofYep2p4O1pLVAEAGMcH9W7nwj3ZztXgdqzeMgUAYFivJPn9ZFpCn0a65QT/qZMU3CoFABjGZ0meTPLU2vFWfacfnK9Vpjc1RwAA6KJkqheTPF5vi37FECOrShq8r1kFAGBe79ew9kLt3NEYomnumXpyM0sBALoptz//nuS5utM21VCTDko7kGuaVQAANvNYnTc609aBLuP5ZgUAgFk2HA6/kaFCm1ujAADdPZxkeZ5XDRHayjl2NasAAMyyL8mv5wluQ4S2gwPu2AEAXG0O1OC26SbYEGHrtmYFAIAuDszacesb2nYkubdZBQCgq/1JHpn2mr6h7dubJUIAADq5YVpLtr6h7Z5mBQCAPjaciNAntJUdtr3NKgAAi1qZNhmhT2g72KwAANDHyrTXCm0AAFeOqQMLhDYAgCvHrlpF2hDaAACuLBv2wF00tG0R2gAARnHrRiddNLTtn9ZDBACAXg4n2bP+BIuGtsPNCgAAQ7lx/XkWDW3XNysAAAzl6PrzLBramvQHAMBgDg0R2m4yCQEAYFTXrj9519BWtuoealYBABhSU/DZLGyitPl4VNUoAMDoTq1/gy47bWV46ZvNKgAAQ3t2/fmmzrea4mSS65Ls2/gwAAA9/TvJ031D24UkLyfZmeRIcxQAgD6eSfLXjV7fNbRNvJ7k81pJuqU5CgBAF2eT/CHJv6a9ZtHQVryf5MM61LTP4HkAgKtZ+frZYzVbTdU3bJU3eaIWKQAA0N2FeV7RZ6dt4uN6nmPNEQAAZjmQ5O56B/OTac8dIrSlvsn9zSoAAPMofXDvTLKS5L2Nnj9UaCstQL7VrAIAMK8ttchzNck7618zRGgrW3q/rG1AAADo53iST5N8MFRoW07y/TqLdLk5CgDAosqO21tJzkxev0iPtV1Jvltvh5pDCgAwjtNJfpfkXDrutG1P8sMkP6uVonqzAQCMZ2fNam+kY2j7jUa6AACX1OEkL5Wq0i4BbLVZAQBgTCWrfScdd9peS7I3ycHmCAAAYyn569lFChEO10KEWwbs8wYAcCU7V6dAnVrz83RtzbFSj5dctWPNz621aHNn/blU17fXnzvW/L5cH7vr2nq/XSS0Teyswe14LUzY0zwDAODrY6WGsEkYK+Hso/o4cwk/RclUR5JcXwcYlH5t/+gT2qZZ32R3+4zihQuTUtaOynfszo/w7/9NtmVKesffB4ChfHGZr+Tlfv9xJPkfZL0YVRQpe0QAAAAASUVORK5CYII=", function(o) {
var n = new cc.SpriteFrame(o, cc.rect(0, 0, 40, 40), !1, cc.v2(), cc.size(40, 40));
n.insetTop = 15;
n.insetBottom = 15;
n.insetRight = 15;
n.insetLeft = 15;
var i = new cc.Node("bottom_sprite").addComponent(cc.Sprite);
i.node.parent = t.node;
i.node.width = 620;
i.node.height = 76.7;
i.type = cc.Sprite.Type.SLICED;
i.sizeMode = cc.Sprite.SizeMode.CUSTOM;
i.spriteFrame = n;
var r = i.node.addComponent(cc.Layout);
r.type = cc.Layout.Type.VERTICAL;
r.resizeMode = cc.Layout.ResizeMode.CONTAINER;
r.paddingBottom = 10;
r.paddingTop = 10;
r.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
var c = new cc.Node("label").addComponent(cc.Label);
c.node.parent = i.node;
c.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
c.verticalAlign = cc.Label.VerticalAlign.CENTER;
c.fontSize = 36;
cc.resources.load("CommonPrefab/texture/toast_bottom", cc.SpriteFrame, function(e, t) {
e || (i.spriteFrame = t);
});
cc.resources.load("font/HYTangMeiRen95W", cc.Font, function(e, t) {
e || (c.font = t);
});
c.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
c.node.width = 560;
c.node.height = 56.7;
t.node.parent = e._layers[a.LayerOrder.Top];
});
};
t.prototype._init_layer = function(e) {
var t = new cc.Node("_" + e.toLowerCase() + "_"), o = t.addComponent(cc.Widget);
o.top = 0;
o.right = 0;
o.bottom = 0;
o.left = 0;
o.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
return t;
};
t.prototype._set_mask_layer = function() {
var e = this._layers[a.LayerOrder.Background], t = new cc.Node("_mask_node_").addComponent(cc.Sprite);
t.node.parent = e;
t.node.zIndex = 1;
t.spriteFrame = this._img_mask;
t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
t.type = cc.Sprite.Type.SIMPLE;
t.node.opacity = 127.5;
t.node.width = cc.view.getVisibleSize().width;
t.node.height = cc.view.getVisibleSize().height;
t.node.addComponent(cc.BlockInputEvents);
t.node.active = !1;
this._map_layer.get(a.LayerOrder.Background).push(t.node);
this._mask_layer = t.node;
};
t.prototype._check_layer = function() {
if (!this._game_layer || this._game_layer.parent) this._game_layer.zIndex++; else {
var e = cc.director.getScene().getComponentInChildren(cc.Canvas);
if (!e) {
c.logger.error("no scene", cc.director.getScene());
return;
}
this._game_layer.parent = e.node.parent;
this._game_layer.setPosition(e.node.getPosition());
c.logger.warn("gamelayer === ", u.CoreSBN.gameData.currScene);
}
};
t.prototype.push = function(e, t) {
this._check_layer();
var o = this._map_layer.get(t);
if (!o.find(function(t) {
return t.name === e.name;
})) {
e.parent = this._layers[t];
o.push(e);
}
return e;
};
t.prototype.push_by_prefab = function(e, t) {
this._check_layer();
var o = this._map_layer.get(t), n = o.find(function(t) {
return t.name === e.name;
});
if (!n) {
(n = cc.instantiate(e)).parent = this._layers[t];
o.push(n);
}
return n;
};
t.prototype.remove = function(e, t) {
var o = this._map_layer.get(t), n = o.findIndex(function(t) {
return t.name === e.name;
});
n >= 0 && o.splice(n, 1);
e.parent = null;
try {
e.destroy();
} catch (e) {
c.logger.error(JSON.stringify(e));
}
};
t.prototype.get_mask = function() {
return this._img_mask;
};
t.prototype.get_mask_node = function() {
return this._mask_layer;
};
t.prototype.ui_mask = function(e) {
clearTimeout(this._mask_layer_timeout);
(this._mask_layer.active = !!e) && (this._mask_layer.active = !1);
};
t.prototype.show_toast = function(e) {
this._tip_toast.show(e);
};
return t;
}(r.Singleton);
o.UIManager = p;
cc._RF.pop();
}, {
"../../HiFive/Framework/Util/TipToast": "TipToast",
"../../Spript/FrameConst": "FrameConst",
"../../Spript/ImageUtil": "ImageUtil",
"../../Spript/Singleton": "Singleton",
"../../utils/CoreSBN": "CoreSBN",
"./Logger": "Logger"
} ],
Hi5_Util: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5566afki95L27gWetAq7Fb0", "Hi5_Util");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Util = void 0;
var n = function() {
function e() {}
e.uuid = function() {
var e = (new Date().getTime() + Math.random()).toString(), t = 0;
if (0 === e.length) return "";
for (var o = 0; o < e.length; o++) {
t = (t << 5) - t + e.charCodeAt(o);
t &= t;
}
return Math.abs(t).toString();
};
e.parseInt = function(e) {
return parseInt(e) == parseFloat(e) ? "" + parseInt(e) : e;
};
e.yuan = function(e, t) {
var o = "";
o = "" + e / t;
if (parseInt(o) == parseFloat(o)) return "" + parseInt(o);
var n = (o = o.toString()).indexOf(".");
return (o = -1 !== n ? o.substring(0, 2 + n + 1) : o.substring(0)).replace(/\.?0+$/, "");
};
e.yuan_100 = function(e, t) {
var o = "";
o = "" + e / t;
if (parseInt(o) == parseFloat(o)) o = "" + parseInt(o); else {
var n = (o = o.toString()).indexOf(".");
o = -1 !== n ? o.substring(0, 2 + n + 1) : o.substring(0);
}
return o.replace(/(?:\.0*|(\.\d+?)0+)$/, "$1");
};
e.yuan_1000 = function(e, t) {
return (e / 1e3).toFixed(t || 2);
};
e.yuan_10000 = function(e, t) {
return (Math.floor(e / 100) / 100).toFixed(t || 2);
};
e.yuan_100000 = function(e, t) {
var o = "";
o = "" + e / (t = t || 1e5);
if (parseInt(o) == parseFloat(o)) o = parseInt(o) + ""; else {
var n = (o = o.toString()).indexOf(".");
o = -1 !== n ? o.substring(0, 2 + n + 1) : o.substring(0);
}
return o;
};
e.yuan_1000000 = function(e) {
return "" + e / 1e4;
};
e.get_remote_picture = function(e, t) {
e && new RegExp("^https?://.*$").test(e) ? cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, o) {
if (e) {
console.error("load avator err, ", JSON.stringify(e));
t && t(null);
} else t && t(new cc.SpriteFrame(o));
}) : t && t(null);
};
e.fill_number = function(e, t) {
t || (t = Math.max(("" + e).length, 2));
return ("000000" + e).slice(-t);
};
e.check_node_callback = function(e, t) {
cc.isValid(e) && t && t();
};
e.moveN1toN2 = function(e, t) {
return t.parent.convertToNodeSpaceAR(e.parent.convertToWorldSpaceAR(e.position));
};
return e;
}();
o.Util = n;
cc._RF.pop();
}, {} ],
HintComp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7e551q1GzlHQ5TyGV+XdPVF", "HintComp");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.HintComp = void 0;
var a = e("../../GameDataConfig/GameDataConfig"), c = e("../../Spript/GamePlayConfigEnum"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._flower_hint_data = null;
t.open_fun = null;
t.cancel_fun = null;
t.hint_fun = null;
t._isOpen = !1;
t._cur_time = 0;
t._isSchedule = !1;
return t;
}
Object.defineProperty(t.prototype, "flower_hint_data", {
get: function() {
this._flower_hint_data || (this._flower_hint_data = JSON.parse(a.default.game_play_config_value(c.GamePlayConfigEnum.flower_hint_data).value));
return this._flower_hint_data;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isOpen", {
get: function() {
return this._isOpen && (!this.open_fun || this.open_fun());
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isSchedule", {
set: function(e) {
this._isSchedule = e;
if (e) {
this.cancel_fun && this.cancel_fun();
this._cur_time = this.flower_hint_data[0];
} else {
this.hint_fun && this.hint_fun();
this._cur_time = this.flower_hint_data[1];
}
},
enumerable: !1,
configurable: !0
});
t.prototype.startHint = function(e) {
this.isSchedule = !0;
this._isOpen = e;
};
t.prototype.update = function(e) {
if (this.isOpen) {
this._cur_time -= e;
this._cur_time <= 0 && (this.isSchedule = !this._isSchedule);
}
};
t.prototype.onEnable = function() {};
t.prototype.onDisable = function() {};
return r([ l ], t);
}(cc.Component));
o.HintComp = u;
cc._RF.pop();
}, {
"../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../Spript/GamePlayConfigEnum": "GamePlayConfigEnum"
} ],
HomeGameUi: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a4159glSSROjqdgZZkg1vZ4", "HomeGameUi");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../utils/CoreSBN"), s = e("./PhotoView"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.levLabel = null;
t.leftNode = null;
t._homeView = null;
return t;
}
t.prototype.start = function() {
this.updateLv();
this.addHead();
};
t.prototype.registView = function(e) {
this._homeView = e;
};
t.prototype.updateLv = function() {
this.levLabel.string = "Level " + c.CoreSBN.gameData.CurLevel;
};
t.prototype.addHead = function() {
var e = c.CoreSBN.pool.requestObject(c.CoreSBN.config.battleBundle, a.PrefabNameSBN.headHome, this.leftNode);
e && e.setPosition(90, 60);
};
t.prototype.onStartGameBtn = function() {
c.CoreSBN.gameData.selectImgView();
};
t.prototype.onStartBattleBtn = function() {
this._homeView && this._homeView.battleStart();
};
t.prototype.onAlbumBtn = function() {
s.default.open({});
};
t.prototype.onSignInBtn = function() {
var e = cc.find("Canvas/View"), t = c.CoreSBN.pool.requestObject(c.CoreSBN.config.battleBundle, a.PrefabNameSBN.SigninView);
e && t && e.addChild(t);
};
t.prototype.onOramentBtn = function() {};
t.prototype.onHeadEmit = function() {};
t.prototype.closeView = function() {
this.node.destroy();
};
t.prototype.onDestroy = function() {
this._homeView = null;
};
r([ p(cc.Label) ], t.prototype, "levLabel", void 0);
r([ p(cc.Node) ], t.prototype, "leftNode", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN",
"./PhotoView": "PhotoView"
} ],
HomeScene: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05be0m5WlZCrYI/TAZ4RD6r", "HomeScene");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../config/EnumDeclareSg"), c = e("../config/ImageConfig"), s = e("../HiFive/Views/FlyImageToastComp"), l = e("../manager/UserDataSBNMgr"), u = e("../UIManager/UIManager"), p = e("../utils/CoreSBN"), f = e("./battle/BattleLoadingView"), h = e("./view/HomeGameUi"), d = e("./view/RankingView"), _ = e("./view/SettingView"), g = cc._decorator, y = g.ccclass, m = g.property, v = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.topWid = null;
t.bgSprite = null;
t.middleNode = null;
t.gameWidget = null;
t.rankWidget = null;
t.flyNode = [];
t.lockNode = null;
t.toastPrefab = null;
t.imagesPanel = [];
t._gameuiView = null;
t._rankView = null;
t._select = 1;
return t;
}
t.prototype.onLoad = function() {
p.CoreSBN.publicFun.cjangeScreen();
this.gameWidget.right = cc.winSize.width / 2;
this.rankWidget.left = cc.winSize.width / 2;
p.CoreSBN.gameData.currScene = a.SceneNameSBN.Home;
p.CoreSBN.publicFun.isAdaptationViewLong() ? this.topWid.top = p.CoreSBN.config.topLongHeight : this.topWid.top = p.CoreSBN.config.topShortHeight;
};
t.prototype.start = function() {
this.lockNode.active = !1;
this.showView();
this.loadBg();
this.preLoadNexImg();
p.CoreSBN.message.on(l.MsgUserEnumSBN.power_change, this.changePower, this);
};
t.prototype.loadBg = function() {
var e = Object.values(p.CoreSBN.gameData.saveTex), t = e[e.length - 1];
t && (this.bgSprite.spriteFrame = p.CoreSBN.res.getImgAsset(p.CoreSBN.config.remoteBundle, "" + t.texIndex));
};
t.prototype.changePower = function(e) {
e && this.flyPower(a.RewardTypeSBN.power, e, !1);
};
t.prototype.flyPower = function(e, t, o, n) {
var i = this;
void 0 === o && (o = !0);
if (this.flyNode[e]) {
this.lockNode.active = !0;
var r = cc.instantiate(this.toastPrefab), c = r.getComponent(s.default);
r.parent = this.flyNode[e];
if (o) switch (e) {
case a.RewardTypeSBN.coin:
p.CoreSBN.gameData.addCoin(t);
break;

case a.RewardTypeSBN.power:
l.default.ins.setPower(t);
}
c.set_count(t, e, function() {
i.lockNode.active = !1;
n && n();
});
}
};
t.prototype.preLoadNexImg = function() {
var e = p.CoreSBN.gameData.selectTex;
if (!e || e < 0) p.CoreSBN.gameData.preNextImg(); else {
var t = [];
t.push(e);
c.ImageConfig.preloadImgList(t);
}
};
t.prototype.onSettingBtn = function() {
_.default.open({});
};
t.prototype.battleStart = function() {
l.default.ins.Power - l.default.ins.PowerConsume >= 0 ? this.flyPower(a.RewardTypeSBN.power, -l.default.ins.PowerConsume, !0, this.enterBattle) : u.default.show_toast("Insufficient stamina");
};
t.prototype.enterBattle = function() {
if (l.default.ins.battleLoadingView) {
l.default.ins.battleLoadingView.node.active = !0;
l.default.ins.battleLoadingView.step();
} else {
var e = p.CoreSBN.pool.requestObject(p.CoreSBN.config.battleBundle, a.PrefabNameSBN.BattleLoadingView);
if (e) {
cc.director.getScene().addChild(e);
l.default.ins.battleLoadingView = e.getComponent(f.default);
l.default.ins.battleLoadingView.step();
}
}
};
t.prototype.onSelectToge = function(e, t) {
var o = Number(t);
if (this._select != o) {
this._select = o;
this.showView();
}
};
t.prototype.showView = function() {
switch (this._select) {
case 1:
if (!this._gameuiView && (e = p.CoreSBN.pool.requestObject(p.CoreSBN.config.commenBundle, a.PrefabNameSBN.HomeGameUi, this.middleNode))) {
this._gameuiView = e.getComponent(h.default);
this._gameuiView.registView(this);
}
this.clearRanking();
break;

case 2:
if (!this._rankView) {
var e;
if (e = p.CoreSBN.pool.requestObject(p.CoreSBN.config.battleBundle, a.PrefabNameSBN.RankingView, this.middleNode)) {
this._rankView = e.getComponent(d.default);
this._rankView.registView(this);
}
}
this.clearGameui();
}
};
t.prototype.clearRanking = function() {
this._rankView && this._rankView.closeView();
this._rankView = null;
};
t.prototype.clearGameui = function() {
this._gameuiView && this._gameuiView.closeView();
this._gameuiView = null;
};
t.prototype.onDestroy = function() {
p.CoreSBN.message.removeAll(this);
};
r([ m(cc.Widget) ], t.prototype, "topWid", void 0);
r([ m(cc.Sprite) ], t.prototype, "bgSprite", void 0);
r([ m(cc.Node) ], t.prototype, "middleNode", void 0);
r([ m(cc.Widget) ], t.prototype, "gameWidget", void 0);
r([ m(cc.Widget) ], t.prototype, "rankWidget", void 0);
r([ m(cc.Node) ], t.prototype, "flyNode", void 0);
r([ m(cc.Node) ], t.prototype, "lockNode", void 0);
r([ m(cc.Prefab) ], t.prototype, "toastPrefab", void 0);
r([ m(cc.SpriteFrame) ], t.prototype, "imagesPanel", void 0);
return r([ y ], t);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../HiFive/Views/FlyImageToastComp": "FlyImageToastComp",
"../UIManager/UIManager": "UIManager",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../config/ImageConfig": "ImageConfig",
"../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../utils/CoreSBN": "CoreSBN",
"./battle/BattleLoadingView": "BattleLoadingView",
"./view/HomeGameUi": "HomeGameUi",
"./view/RankingView": "RankingView",
"./view/SettingView": "SettingView"
} ],
IBassInsClass: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "04703IzV29JqK1//jW98yg8", "IBassInsClass");
var n = this && this.__spreadArrays || function() {
for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
var n = Array(e), i = 0;
for (t = 0; t < o; t++) for (var r = arguments[t], a = 0, c = r.length; a < c; a++, 
i++) n[i] = r[a];
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function e() {}
e.ins = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
var o = this;
o._instance || (o._instance = new (o.bind.apply(o, n([ void 0 ], e)))());
return o._instance;
};
e.prototype.init = function() {};
e.prototype.clear = function() {};
return e;
}();
o.default = i;
cc._RF.pop();
}, {} ],
ImageConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "20610AWJQRPzKUcKpeJCR7w", "ImageConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ImageConfig = o.ImgPrefix = o.IImgLocalKey = void 0;
var n = e("../utils/CoreSBN");
o.IImgLocalKey = {
localTex: "localTex"
};
o.ImgPrefix = {
localTex: "",
localTex_Album: "photo_"
};
(function(e) {
var t = {
1001: {
pic_id: 1001,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1002: {
pic_id: 1002,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1003: {
pic_id: 1003,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1004: {
pic_id: 1004,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1005: {
pic_id: 1005,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1006: {
pic_id: 1006,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1007: {
pic_id: 1007,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1008: {
pic_id: 1008,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1009: {
pic_id: 1009,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1010: {
pic_id: 1010,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1011: {
pic_id: 1011,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1012: {
pic_id: 1012,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1013: {
pic_id: 1013,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1014: {
pic_id: 1014,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1015: {
pic_id: 1015,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1016: {
pic_id: 1016,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1017: {
pic_id: 1017,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1018: {
pic_id: 1018,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1019: {
pic_id: 1019,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1020: {
pic_id: 1020,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1021: {
pic_id: 1021,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1022: {
pic_id: 1022,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1023: {
pic_id: 1023,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1024: {
pic_id: 1024,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1025: {
pic_id: 1025,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1026: {
pic_id: 1026,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1027: {
pic_id: 1027,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1028: {
pic_id: 1028,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1029: {
pic_id: 1029,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1030: {
pic_id: 1030,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1031: {
pic_id: 1031,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1032: {
pic_id: 1032,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1033: {
pic_id: 1033,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1034: {
pic_id: 1034,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1035: {
pic_id: 1035,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1036: {
pic_id: 1036,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1037: {
pic_id: 1037,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1038: {
pic_id: 1038,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1039: {
pic_id: 1039,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
},
1040: {
pic_id: 1040,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1041: {
pic_id: 1041,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1042: {
pic_id: 1042,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1043: {
pic_id: 1043,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1044: {
pic_id: 1044,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1045: {
pic_id: 1045,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1046: {
pic_id: 1046,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1047: {
pic_id: 1047,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1048: {
pic_id: 1048,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1049: {
pic_id: 1049,
is_special: 0,
need_coin: 0,
content_lv: 1,
is_dance: 0
},
1050: {
pic_id: 1050,
is_special: 0,
need_coin: 0,
content_lv: 2,
is_dance: 0
}
}, o = -1;
e.query = function(e) {
return t[e + ""];
};
e.size = function() {
if (o < 0) {
o = 0;
for (var e in i()) ++o;
}
return o;
};
function i() {
return t;
}
e.getDatas = i;
e.loadImgList = function(e, t, o, i) {
void 0 === i && (i = ".jpg");
return n.CoreSBN.res.loadImgList(n.CoreSBN.config.remoteBundle, e || [], t, o, i);
};
e.preloadImgList = function(e, t) {
void 0 === t && (t = ".jpg");
return n.CoreSBN.res.lpreLadImgList(n.CoreSBN.config.remoteBundle, e || [], t);
};
})(o.ImageConfig || (o.ImageConfig = {}));
cc._RF.pop();
}, {
"../utils/CoreSBN": "CoreSBN"
} ],
ImageUtil: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0c31dlo64NIZY3u0a84pOyK", "ImageUtil");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ImageUtil = void 0;
var n = function() {
function e() {}
e.getTextureFromBase64 = function(e, t) {
var o = new Image(), n = new cc.Texture2D();
o.src = e;
n.initWithElement(o);
o.onload = function() {
t && t(n);
};
};
e.getRemotePicture = function(e, t) {
e && new RegExp("^https?://.*$").test(e) ? cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, o) {
if (e) {
console.error("load avator err, ", JSON.stringify(e));
t && t(null);
} else t && t(new cc.SpriteFrame(o));
}) : t && t(null);
};
return e;
}();
o.ImageUtil = n;
cc._RF.pop();
}, {} ],
ImagesPanel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bc53cH851dD95gO/vnOH+zr", "ImagesPanel");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = a.executeInEditMode, u = a.menu, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.images = [];
t._value = 0;
return t;
}
Object.defineProperty(t.prototype, "value", {
get: function() {
return this._value;
},
set: function(e) {
if (this._value !== e) {
this._value = e;
this._updateValue();
}
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this._loadPanel();
this._updateValue();
};
t.prototype._loadPanel = function() {
this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
};
t.prototype._updateValue = function() {
if (this._value >= 0 && this._value < this.images.length) {
var e = this.images[this._value], t = this.node.getComponent(cc.Sprite);
t && (t.spriteFrame = e);
}
};
r([ s({
type: [ cc.SpriteFrame ],
tooltip: "index show img",
displayName: "show img"
}) ], t.prototype, "images", void 0);
r([ s(cc.Integer) ], t.prototype, "value", null);
return r([ c, l, u("ImagesPanel") ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
LabelColorPicker: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2108c1AIqRBlZmPt2oIwvmt", "LabelColorPicker");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LabelColorPickerItem = void 0;
var a = cc._decorator, c = a.ccclass, s = a.property, l = (a.requireComponent, a.menu), u = a.executeInEditMode, p = function() {
function e() {
this.labelColor = new cc.Color();
this.isOutLineEnable = !1;
this.outLineColor = new cc.Color();
this.outLineWidth = 1;
}
r([ s({
displayName: "labColor"
}) ], e.prototype, "labelColor", void 0);
r([ s({
displayName: "is stroke"
}) ], e.prototype, "isOutLineEnable", void 0);
r([ s({
displayName: "stroke coloe",
visible: function() {
return this.isOutLineEnable;
}
}) ], e.prototype, "outLineColor", void 0);
r([ s({
displayName: "stroke wid",
visible: function() {
return this.isOutLineEnable;
}
}) ], e.prototype, "outLineWidth", void 0);
return r([ c("LabelColorPickerItem") ], e);
}();
o.LabelColorPickerItem = p;
var f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._options = [];
t._selectIndex = 0;
t.outLine = null;
return t;
}
Object.defineProperty(t.prototype, "options", {
get: function() {
return this._options;
},
set: function(e) {
this._options = e;
this.selectIndex = this.selectIndex;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "selectIndex", {
get: function() {
return this._selectIndex;
},
set: function(e) {
this._selectIndex = e;
this.select(e);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this.outLine = this.getComponent(cc.LabelOutline);
if (0 == this.options.length) {
var e = new p();
e.labelColor = this.node.color;
if (this.outLine) {
e.outLineColor = this.outLine.color;
e.outLineWidth = this.outLine.width;
}
this.options.push(e);
}
};
t.prototype.select = function(e) {
if (!(e < 0) && e < this.options.length) {
var t = this.options[e];
this.node.color = t.labelColor;
if (t.isOutLineEnable) {
var o = this.getComponent(cc.LabelOutline) || this.addComponent(cc.LabelOutline);
t.outLineColor && (o.color = t.outLineColor);
t.outLineWidth && (o.width = t.outLineWidth);
} else this.node.removeComponent(cc.LabelOutline);
}
};
r([ s({
type: [ p ]
}) ], t.prototype, "_options", void 0);
r([ s() ], t.prototype, "_selectIndex", void 0);
r([ s(p) ], t.prototype, "options", null);
r([ s() ], t.prototype, "selectIndex", null);
return r([ c, l("Blade/LabelColorPicker"), u() ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {} ],
Layer: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7d7e196XJlM37AWLKvUccw7", "Layer");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Layer = void 0;
var n = e("./GameConst"), i = function() {
function e(e) {
this.layer = null;
this._v = n.eLayer.None;
this.planks = [];
this.layer = e;
}
Object.defineProperty(e.prototype, "state", {
get: function() {
return this._v;
},
set: function(e) {
if (this._v != e) {
this._v = e;
this.planks.forEach(function(t) {
return t.setDisplayState(e);
});
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "complete", {
get: function() {
for (var e = 0, t = this.planks; e < t.length; e++) if (t[e].nails.length >= 0) return !1;
return !0;
},
enumerable: !1,
configurable: !0
});
e.prototype.push = function(e) {
this.planks.push(e);
};
e.prototype.remove = function(e) {
for (var t = 0; t < this.planks.length; t++) this.planks[t] == e && this.planks.splice(t, 1);
};
e.prototype.forEach = function(e) {
this.planks.forEach(e);
};
e.prototype.getNails = function(e) {
var t = [];
this.planks.forEach(function(o) {
o != e && t.push.apply(t, o.nails);
});
return t;
};
e.prototype.build = function() {
return this.planks.map(function(e) {
return e.build();
});
};
e.prototype.getNailAndPlank = function(e) {
for (var t = 0, o = this.planks; t < o.length; t++) {
var n = o[t], i = n.getNailInPlank(e);
if (i) return [ i, n ];
}
};
return e;
}();
o.Layer = i;
cc._RF.pop();
}, {
"./GameConst": "GameConst"
} ],
LevelAwardNode: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "966acM9rWhOAId3VvBK/4Hy", "LevelAwardNode");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../common/BaseNode"), c = e("../../Views/PlayboardEnum"), s = e("../../Views/MahjongManager"), l = e("../../../utils/CoreSBN"), u = e("../../../config/EnumDeclareSg"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.countLbl = null;
t.progress = null;
t.sheep_img = null;
t.touch_node = null;
t.lvLab = null;
t.timeLab = null;
t.setingNode = null;
t.fillRange = 0;
t._level_data = null;
t.total_count = 0;
t.time_count = 0;
t._isTime = !1;
return t;
}
Object.defineProperty(t.prototype, "level_data", {
get: function() {
this._level_data || (this._level_data = s.MahjongManager.getInstance().getLevelEntityByType(c.PlayBoardEnum.Game));
return this._level_data;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "cur_pb", {
get: function() {
return 1 - this.fillRange;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
l.CoreSBN.gameData.gameType == u.GameTypeSBN.Battle && l.CoreSBN.message.on(u.EventNameSBN.time_change, this.timechange, this);
};
t.prototype.init = function(e, t) {
this.total_count = this.level_data.total_box_count;
this.progress.fillRange = 0;
this.refreshView(e, !1);
this.updateLv(t);
if (l.CoreSBN.gameData.gameType == u.GameTypeSBN.Battle) {
this.lvLab.node.active = !1;
this.timeLab.node.active = !0;
this.time_count = 0;
this.updateTimeUI();
this.touch_node.active = !1;
} else {
this.lvLab.node.active = !0;
this.timeLab.node.active = !1;
this.isTime(!1);
this.touch_node.active = !0;
}
1 == l.CoreSBN.gameData.CurLevel ? this.setingNode.active = !1 : this.setingNode.active = !0;
};
t.prototype.isTime = function(e) {
void 0 === e && (e = !0);
this._isTime = e;
};
t.prototype.timechange = function() {
if (this._isTime) {
this.time_count++;
this.updateTimeUI();
}
};
t.prototype.updateTimeUI = function() {
this.timeLab.string = l.CoreSBN.publicFun.formatSecondsTomin(this.time_count);
};
t.prototype.setSheep = function() {};
t.prototype.updateLv = function(e) {
this.lvLab.string = "Level " + e;
};
t.prototype.refreshView = function(e, t) {
void 0 === t && (t = !0);
var o = this.total_count;
this.fillRange = e / o;
this.countLbl.string = Math.floor(Math.floor(1e4 * (1 - this.fillRange)) / 100) + "%";
t || (this.progress.fillRange = this.fillRange);
};
t.prototype.update = function() {
this.progress.fillRange > this.fillRange && (this.progress.fillRange = Math.min(.01 + this.progress.fillRange, this.fillRange));
};
r([ h(cc.Label) ], t.prototype, "countLbl", void 0);
r([ h(cc.Sprite) ], t.prototype, "progress", void 0);
r([ h(cc.Sprite) ], t.prototype, "sheep_img", void 0);
r([ h(cc.Node) ], t.prototype, "touch_node", void 0);
r([ h(cc.Label) ], t.prototype, "lvLab", void 0);
r([ h(cc.Label) ], t.prototype, "timeLab", void 0);
r([ h(cc.Node) ], t.prototype, "setingNode", void 0);
return r([ f ], t);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../../common/BaseNode": "BaseNode",
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/MahjongManager": "MahjongManager",
"../../Views/PlayboardEnum": "PlayboardEnum"
} ],
LevelData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4eae5N+oi9EJ67aG7mp3l6G", "LevelData");
var n = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LevelData = void 0;
var r = e("./LevelHelper"), a = e("./PlayboardEnum"), c = e("../../GameDataConfig/GameLocalData"), s = e("../Framework/Util/FlowerEntity"), l = e("../../utils/CoreSBN"), u = e("../../config/EnumDeclareSg"), p = function() {
function e(e, t, o) {
this.type = null;
this.record = null;
this.props = null;
this.game_data = null;
this.save_data = !0;
this.using_props = [ a.PlayBoardPropsEnum.Package, a.PlayBoardPropsEnum.Clean, a.PlayBoardPropsEnum.AddHole, a.PlayBoardPropsEnum.Relive, a.PlayBoardPropsEnum.Open ];
this._config = null;
this._level = -1;
this._small_config = null;
this.type = e;
this.record = t;
this.save_data = o && !1;
this.game_data = this.record.getLevelData(e);
}
Object.defineProperty(e.prototype, "level_config", {
get: function() {
if (!this._config || this._level != this.cur_level) {
this._config = r.LevelHelper.getLevelConfigByLevel(this.cur_level);
this._level = this.cur_level;
}
return this._config;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "small_level", {
get: function() {
return this._small_config;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "small_level_ids", {
get: function() {
return this.map_data && this.map_data.small_ids && this.map_data.small_ids.length > 0 ? this.map_data.small_ids : this.level_config.level_id && this.level_config.level_id.length > 0 ? this.level_config.level_id : [];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cur_level", {
get: function() {
return this.game_data.cur_level || 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "map_data", {
get: function() {
return this.game_data.map_data;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "total_box_count", {
get: function() {
var e = this.game_data.map_data.nail_count;
return Math.floor(e / 3 + .001);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "default_prop_count", {
get: function() {
if (!this.game_data.default_prop) {
this.game_data.default_prop = Object.create(null);
var e = r.LevelHelper._default_prop_count_count;
if (e && e.length > 0) for (var t = 0; t < this.using_props.length; t++) this.game_data.default_prop[this.using_props[t]] = e[t];
this.record.store();
}
return this.game_data.default_prop;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function(e) {
e && (this.game_data.cur_level = e);
};
e.prototype.resetMapData = function() {
delete this.game_data.map_data.desk;
};
e.prototype.saveData = function() {};
e.prototype.selectLevel = function(e) {
this.game_data.cur_level = e;
console.log("selectLevel", e);
this.record.store();
};
e.prototype.setPlayingLevel = function(e) {
this.game_data.cur_level = e;
l.CoreSBN.gameData.addLev(e);
this.record.store();
};
e.prototype.setLevelComplete = function() {
var e = this.small_level_ids.length;
this.game_data.map_data.cur_idx++;
this.record.store();
return this.game_data.map_data.cur_idx >= e;
};
e.prototype.geMapData = function() {
return n(this, void 0, void 0, function() {
var e, t, o, n, a, c, l, u, p;
return i(this, function(i) {
switch (i.label) {
case 0:
t = this.cur_level;
(o = null !== (e = this.game_data.map_data) && void 0 !== e ? e : null) && o.level == t || (o = {
cur_idx: 0,
level: t
});
if (!(n = o.small_ids)) {
this.level_config.random_range && (a = r.LevelHelper.getRandomSmallLevelIds(this.level_config.random_range));
(!a || a.length <= 0) && this.level_config.level_id && (a = this.level_config.level_id);
o.small_ids = a;
n = o.small_ids;
}
if (o.cur_idx >= n.length) {
console.log("level complete:", this.game_data.cur_level);
this.setPlayingLevel(t + 1);
return [ 2, this.geMapData() ];
}
o.small_lv = n[o.cur_idx];
c = this._small_config = r.LevelHelper.getSmallLevelConfig(o.small_lv);
o.map_id = c.map_id;
this.prop_limit = Array.from(r.LevelHelper.normal_game_prop_limit);
null != c.lock_car_count && (this.prop_limit[4] = c.lock_car_count);
l = null;
if (!this.game_data.data || this.game_data.data.id != c.id) return [ 3, 1 ];
l = JSON.parse(this.game_data.data.map_string);
return [ 3, 3 ];

case 1:
delete this.game_data.data;
return [ 4, s.mj.createMapData(c.map_id, c.map_type) ];

case 2:
l = i.sent();
this.game_data.data = {
id: c.id,
map_string: JSON.stringify(l) + ""
};
i.label = 3;

case 3:
u = this.props = this.initProp(), p = Object.assign(Object.assign(Object.assign({}, o), l), {
props: u
});
this.game_data.map_data = p;
this.record.store();
return [ 2, p ];
}
});
});
};
e.prototype.save = function(e) {
if (e && this.game_data.map_data && this.save_data) {
this.game_data.map_data.desk = e;
this.record.store();
}
};
e.prototype.initProp = function() {
for (var e = Object.create(null), t = 0; t < this.using_props.length; t++) {
var o = this.using_props[t];
e[o] = this.createProp(o);
}
return e;
};
e.prototype.createProp = function(e) {
var t = this.prop_limit, o = this.using_props.indexOf(e);
if (!(o < 0)) {
var n = this.getDefaultPropCountByType(e);
return {
use_count: 0,
limit_count: t[o] + n,
remain_count: n
};
}
};
e.prototype.getPropDataByType = function(e) {
var t = this.props[e];
if (!t) {
t = this.createProp(e);
this.props[e] = t;
}
return this.props[e];
};
e.prototype.getIsCanUseProp = function(e) {
var t = this.getPropDataByType(e);
return t.limit_count <= 0 || t.use_count < t.limit_count;
};
e.prototype.addProp = function(e, t) {
void 0 === t && (t = 1);
this.getPropDataByType(e).remain_count += t;
this.save_data && this.record.store();
this.type == a.PlayBoardEnum.Game && this.record.addPropRecord(this.cur_level, e);
l.CoreSBN.message.emit(u.EventNameSBN.props_change, this.type);
};
e.prototype.usedProp = function(e, t) {
void 0 === t && (t = 1);
var o = this.getPropDataByType(e);
o.use_count += t;
o.remain_count -= t;
if (this.default_prop_count && this.default_prop_count[e] > 0) {
this.default_prop_count[e] -= 1;
c.default.get_instance().game_sync();
}
this.save_data && this.record.store();
this.type == a.PlayBoardEnum.Game && this.record.addPropRecord(this.cur_level, e);
l.CoreSBN.message.emit(u.EventNameSBN.props_change, this.type);
};
e.prototype.getCurPropData = function() {
var e = Object.create(null);
for (var t in this.props) this.props[t].use_count > 0 && (e[t] = this.props[t].use_count);
return e;
};
e.prototype.getDefaultPropCountByType = function(e) {
var t = this.default_prop_count;
return t && t[e] && t[e] >= 0 ? t[e] : 0;
};
return e;
}();
o.LevelData = p;
cc._RF.pop();
}, {
"../../GameDataConfig/GameLocalData": "GameLocalData",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN",
"../Framework/Util/FlowerEntity": "FlowerEntity",
"./LevelHelper": "LevelHelper",
"./PlayboardEnum": "PlayboardEnum"
} ],
LevelHelperSBN: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "03d47Ns2RVEnoiqDLofUAuy", "LevelHelperSBN");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LevelHelperSBN = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._levelNailColorCount = 10;
t._levelDataMap = new Map();
return t;
}
Object.defineProperty(t.prototype, "levelNailColorCount", {
get: function() {
return this._levelNailColorCount;
},
enumerable: !1,
configurable: !0
});
t.prototype.getCurLevModalDataByLv = function(e) {
return this._levelDataMap.get(e) || [];
};
t.prototype.getCurNailCountByLv = function(e) {
for (var t = 0, o = this._levelDataMap.get(e) || [], n = 0; n < o.length; n++) for (var i = o[n].planks, r = 0; r < i.length; r++) t += i[r].holes.length;
return t || 0;
};
t.prototype.getLayersCount = function() {};
t.prototype.getLayersByLv = function(e) {
return (this._levelDataMap.get(e) || []).length || 0;
};
t.prototype.loadLevelRes = function(e) {
var t = this;
return new Promise(function(o) {
var n = "Mahjong/config/lv_" + (e - 1);
t._levelDataMap.get(e) ? o(t._levelDataMap.get(e)) : cc.resources.load(n, cc.JsonAsset, function(n, i) {
if (n) o(null); else {
t._levelDataMap.set(e, i.json);
o(t._levelDataMap.get(e) || []);
}
});
});
};
return t;
}(e("../utils/IBassInsClass").default);
o.LevelHelperSBN = r;
cc._RF.pop();
}, {
"../utils/IBassInsClass": "IBassInsClass"
} ],
LevelHelper: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "34921KZBi1IOo4mqJGAiLvD", "LevelHelper");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LevelHelper = void 0;
var n = e("../../GameDataConfig/GameDataConfig"), i = e("../../Spript/GamePlayConfigEnum"), r = e("../../Spript/Tools"), a = e("../../Spript/Random"), c = function() {
function e() {}
Object.defineProperty(e, "normal_game_prop_limit", {
get: function() {
this._normal_game_prop_limit || (this._normal_game_prop_limit = JSON.parse(n.default.game_play_config_value(i.GamePlayConfigEnum.normal_game_prop_limit).value));
return this._normal_game_prop_limit;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "dae_reward_step", {
get: function() {
this._dae_reward_step || (this._dae_reward_step = +n.default.game_play_config_value(i.GamePlayConfigEnum.dae_reward_step).value);
return this._dae_reward_step;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "dae_reward", {
get: function() {
this._dae_reward || (this._dae_reward = JSON.parse(n.default.game_play_config_value(i.GamePlayConfigEnum.dae_reward).value));
return this._dae_reward;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "level_configs", {
get: function() {
this._level_configs || (this._level_configs = n.default.get_config_array("NormalLevelConfig"));
return this._level_configs;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "map_configs", {
get: function() {
this._map_configs || (this._map_configs = n.default.get_config_array("MapConfig"));
return this._map_configs;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "map_color_configs", {
get: function() {
this._map_color_configs || (this._map_color_configs = n.default.get_config_array("NailColorConfig"));
return this._map_color_configs;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "small_configs", {
get: function() {
this._small_configs || (this._small_configs = n.default.get_config_array("SmallLevelConfig"));
return this._small_configs;
},
enumerable: !1,
configurable: !0
});
e.getMapConfig = function(e) {
return this.map_configs.find(function(t) {
return t.id == e;
});
};
e.getCombinationConfig = function(e) {
return n.default.get_config_array("CombinationConfig").find(function(t) {
return t.id == e;
});
};
e.getRandomSmallLevelIds = function(e) {
if (e.length < 3) return [];
var t = [], o = n.default.get_config_array("SmallLevelGroupConfig");
if (!o) return t;
var i = o.find(function(t) {
return t.id == e[2];
});
if (!i) return t;
var c = Array.from(i.group);
c = r.utils.shuffle(c);
for (var s = Math.min(a.default.rangeInt(e[0], e[1]), c.length); s > 0; ) {
t.push(c.pop());
s--;
}
return t;
};
e.getDaeConfig = function(e) {
return n.default.get_config_array("DaeConfig").find(function(t) {
return t.id == e;
});
};
e.getRandomConfig = function(e) {
return n.default.get_config_array("RandomConfig").find(function(t) {
return t.id == e;
});
};
e.getGroupConfig = function(e) {
return n.default.get_config_array("GroupConfig").find(function(t) {
return t.id == e;
});
};
e.getSmallLevelConfig = function(e) {
return this.small_configs.find(function(t) {
return t.id == e;
});
};
e.getColorConfig = function(e) {
return this.map_color_configs.find(function(t) {
return t.nail_color == e;
});
};
e.getLevelConfigByLevel = function(e) {
if (e <= this.level_configs.length) return this.level_configs[e - 1];
e -= this.level_configs.length;
var t = this.level_configs.filter(function(e) {
return 0 != e.circulate_level;
});
return t[e % t.length];
};
e._normal_game_prop_limit = null;
e._dae_reward_step = 0;
e._dae_reward = null;
e._red_package_reward_limit = null;
e._default_prop_count_count = null;
e._level_configs = null;
e._map_configs = null;
e._map_color_configs = null;
e._small_configs = null;
return e;
}();
o.LevelHelper = c;
cc._RF.pop();
}, {
"../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../Spript/GamePlayConfigEnum": "GamePlayConfigEnum",
"../../Spript/Random": "Random",
"../../Spript/Tools": "Tools"
} ],
LoadImgView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "66ffeaZ4PBM4LSO3QJyw5My", "LoadImgView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._suc = null;
t._fail = null;
return t;
}
t.prototype.start = function() {};
t.prototype.show = function(t) {
var o = this;
e.prototype.show.call(this, t);
this._fail = t.fail;
this._suc = t.suc;
var n = t.suffix ? t.suffix : ".jpg";
c.CoreSBN.res.loadImgList(c.CoreSBN.config.remoteBundle, t.loadList, function() {
console.log("loadImgList success");
if (o._suc) {
o._suc();
o._suc = null;
}
o._fail = null;
o.on_close_call();
}, function() {
if (o._fail) {
o._fail();
o._fail = null;
}
o._suc = null;
o.on_close_call();
}, n);
};
return r([ a.registerUIPath("prefabSbn/LoadImgView"), l ], t);
}(a.default));
o.default = u;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../utils/CoreSBN": "CoreSBN"
} ],
Loader: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b81baezARBHoqMrOthlg/sF", "Loader");
var n = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function e() {}
e.load_texture = function(e, t) {
cc.loader.loadRes(e, cc.Texture2D, function(o, n) {
o ? console.warn("tex  " + e + " no find") : t(n);
});
};
e.load_sprite_frame = function(e, t) {
cc.loader.loadRes(e, cc.SpriteFrame, function(o, n) {
o ? console.warn("tex  " + e + " no find") : t(n);
});
};
e.recursion_load_sprite_frame = function(e, t) {
var o = this, n = 0, i = function() {
var r = e[n];
o.load_texture(r, function(o) {
t(new cc.SpriteFrame(o), n);
if (n < e.length - 1) {
n++;
i();
}
});
};
i();
};
e.load_prefab = function(e, t) {
cc.loader.loadRes(e, cc.Prefab, function(o, n) {
o ? console.warn("prefab " + e + " load res faid") : t && t(n);
});
};
e.load_asset_async = function(e) {
return __awaiter(this, void 0, void 0, function() {
return n(this, function() {
return [ 2, new Promise(function(t) {
cc.loader.loadRes(e, cc.Prefab, function(e, o) {
t(e ? null : o);
});
}) ];
});
});
};
e.request_remote_image = function(e, t) {
cc.loader.load({
url: e,
type: "png"
}, function(o, n) {
o ? console.warn("cur url[" + e + "] download fail " + o) : t && t(new cc.SpriteFrame(n));
});
};
e.request_remote_assets = function(e, t, o) {
cc.loader.load(e, function(n, i) {
if (n) {
console.warn("cur url[" + e + "] download fail " + n);
o && o();
} else t && t(i);
});
};
e.load_buffer_asset_async = function(e) {
return __awaiter(this, void 0, void 0, function() {
return n(this, function() {
return [ 2, new Promise(function(t) {
cc.assetManager.loadRemote(e, cc.BufferAsset, function(e, o) {
console.log("cur bufferAsset = ", o);
t(e ? null : o);
});
}) ];
});
});
};
e.load_png_asset_async = function(e) {
return __awaiter(this, void 0, void 0, function() {
return n(this, function() {
return [ 2, new Promise(function(t) {
cc.assetManager.loadRemote(e, cc.SpriteFrame, function(e, o) {
console.log("cur bufferAsset = ", o);
t(e ? null : o);
});
}) ];
});
});
};
e.getSpineAsset = function(e) {
return new Promise(function(t) {
cc.loader.loadRes(e, sp.SkeletonData, function(e, o) {
t(e ? null : o);
});
});
};
return e;
}();
o.default = i;
cc._RF.pop();
}, {} ],
LoadingScene: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "81f92prp8FLg44314BxvJdJ", "LoadingScene");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../config/BeginLevelConfig"), l = e("../config/EnumDeclareSg"), u = e("../GameDataConfig/GameDataConfig"), p = e("../GameDataConfig/GameLocalData"), f = e("../HiFive/Views/SoundManager"), h = e("../UIManager/UIManager"), d = e("../utils/CoreSBN"), _ = cc._decorator, g = _.ccclass, y = _.property, m = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadLab = null;
t.loadingSprite = null;
t._isloading = !1;
t._isLoadA = !1;
t._isLoadB = !1;
t._isAllLoad = !1;
t._sceneName = l.SceneNameSBN.Home;
return t;
}
t.prototype.onLoad = function() {
d.CoreSBN.publicFun.cjangeScreen();
d.CoreSBN.gameData.currScene = l.SceneNameSBN.Loading;
this._isloading = !1;
d.CoreSBN.init();
d.CoreSBN.pool.init(d.CoreSBN.config.battleBundle);
};
t.prototype.start = function() {
this.loadResA();
this.loadResB();
};
t.prototype.loadResB = function() {
return a(this, void 0, void 0, function() {
return c(this, function() {
d.CoreSBN.sdk.sdkInitLis();
this._isLoadB = !0;
this.loadResSucces();
return [ 2 ];
});
});
};
t.prototype.loadResA = function() {
return a(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
return [ 4, d.CoreSBN.res.loadBundle(d.CoreSBN.config.commenBundle, .02) ];

case 1:
e.sent();
return [ 4, d.CoreSBN.res.loadRes(d.CoreSBN.config.commenBundle, l.AssetType.Prefab, .2) ];

case 2:
e.sent();
return [ 4, d.CoreSBN.res.loadRes(d.CoreSBN.config.commenBundle, l.AssetType.ItemPrefab, .2) ];

case 3:
e.sent();
return [ 4, d.CoreSBN.res.loadRes(d.CoreSBN.config.commenBundle, l.AssetType.Sound, .2) ];

case 4:
e.sent();
return [ 4, d.CoreSBN.res.loadBundle(d.CoreSBN.config.battleBundle, .02) ];

case 5:
e.sent();
return [ 4, d.CoreSBN.res.loadRes(d.CoreSBN.config.battleBundle, l.AssetType.Prefab, .2) ];

case 6:
e.sent();
return [ 4, d.CoreSBN.res.loadRes(d.CoreSBN.config.battleBundle, l.AssetType.Sprites, .2) ];

case 7:
e.sent();
this._isLoadA = !0;
this.loadResSucces();
return [ 2 ];
}
});
});
};
t.prototype.loadResSucces = function() {
var e = this;
if (this._isLoadA && this._isLoadB) {
var t = d.CoreSBN.gameData.saveTex;
u.default.init().then(function() {
return a(e, void 0, void 0, function() {
var e, o, n, i, r, a = this;
return c(this, function(c) {
switch (c.label) {
case 0:
p.default.get_instance().init();
h.default.init();
e = 0;
o = Object.values(d.CoreSBN.gameData.saveTex);
if (t && o.length > 0) {
n = o[o.length - 1];
e = n.texIndex;
}
i = l.SceneNameSBN.Home;
d.CoreSBN.gameData.getRoundLevData();
if (1 == d.CoreSBN.gameData.CurLevel) {
r = s.BeginLevelConfig.query(d.CoreSBN.gameData.CurLevel);
e = d.CoreSBN.publicFun.getRandomByObjectListOne(r.level_pic);
d.CoreSBN.gameData.setSelectTex(e, !1);
i = l.SceneNameSBN.Main;
}
return [ 4, d.CoreSBN.res.loadImgList(d.CoreSBN.config.remoteBundle, [ e ], function() {
a.enterGame(i);
}, function() {
console.log("loadImgList fail loading");
}) ];

case 1:
c.sent();
return [ 2 ];
}
});
});
}).catch(function() {
console.log("loadConfig fail loading");
});
}
};
t.prototype.enterGame = function(e) {
this._sceneName = e;
this._isloading = !0;
cc.director.preloadScene(e, this.onProgress.bind(this), this.onSuccess.bind(this));
};
t.prototype.onProgress = function() {};
t.prototype.onSuccess = function() {
var e = this;
d.CoreSBN.gameData.loadResPro = 1;
this.updateUi();
this.scheduleOnce(function() {
cc.director.loadScene(e._sceneName);
f.SoundManager.playMusic(l.SoundNameSBN.bgm);
}, .2);
};
t.prototype.onPriteBtn = function() {
d.CoreSBN.sdk.openUrl(d.CoreSBN.config.privacyUrl);
};
t.prototype.update = function(e) {
if (!this._isloading) {
this._isLoadA && (d.CoreSBN.gameData.loadResPro += e / 50);
d.CoreSBN.gameData.loadResPro = d.CoreSBN.gameData.loadResPro > .98 ? .98 : d.CoreSBN.gameData.loadResPro;
this.updateUi();
}
};
t.prototype.updateUi = function() {
var e = Math.ceil(100 * d.CoreSBN.gameData.loadResPro);
e > 100 && (e = 100);
this.loadingSprite.fillRange = e / 100;
this.loadLab.string = "Loading... " + e + "%";
};
r([ y(cc.Label) ], t.prototype, "loadLab", void 0);
r([ y(cc.Sprite) ], t.prototype, "loadingSprite", void 0);
return r([ g ], t);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../GameDataConfig/GameDataConfig": "GameDataConfig",
"../GameDataConfig/GameLocalData": "GameLocalData",
"../HiFive/Views/SoundManager": "SoundManager",
"../UIManager/UIManager": "UIManager",
"../config/BeginLevelConfig": "BeginLevelConfig",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../utils/CoreSBN": "CoreSBN"
} ],
LockPropsFlyView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "958a6ktp6ZHaaZJmygRDkoI", "LockPropsFlyView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../config/EnumDeclareSg"), s = e("../../HiFive/Views/PlayboardEnum"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.propsIcon = null;
t.propsIconArr = [];
return t;
}
t.prototype.show = function(t) {
var o = this;
e.prototype.show.call(this, t);
switch (t.param.type) {
case s.PlayBoardPropsEnum.AddHole:
this.propsIcon.spriteFrame = this.propsIconArr[0];
break;

case s.PlayBoardPropsEnum.Clean:
this.propsIcon.spriteFrame = this.propsIconArr[1];
break;

case s.PlayBoardPropsEnum.Package:
this.propsIcon.spriteFrame = this.propsIconArr[2];
}
cc.Tween.stopAllByTarget(this.propsIcon.node);
this.propsIcon.node.setPosition(0, 134, 0);
this.scheduleOnce(function() {
var e = new cc.Vec3();
o.node.convertToNodeSpaceAR(t.param.tarPos, e);
var n = cc.Vec3.distance(o.propsIcon.node.position, e) / 800;
cc.tween(o.propsIcon.node).to(n, {
position: e,
scale: .68
}, {
easing: cc.easing.sineIn
}).call(function() {
l.CoreSBN.gameData.addProp(t.param.type, 1);
l.CoreSBN.gameData.setSettingBykey(s.PropsLocalQianzhuiLock + t.param.type, 1);
l.CoreSBN.message.emit(c.EventNameSBN.props_change);
o.on_close_call();
}).start();
});
};
r([ f(cc.Sprite) ], t.prototype, "propsIcon", void 0);
r([ f(cc.SpriteFrame) ], t.prototype, "propsIconArr", void 0);
return r([ a.registerUIPath("prefabSbn/LockPropsFlyView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../HiFive/Views/PlayboardEnum": "PlayboardEnum",
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN"
} ],
LockPropsView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "85d71rp8phEd7FvCubUZS/d", "LockPropsView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../HiFive/Views/PlayboardEnum"), s = e("./LockPropsFlyView"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.propsIcon = null;
t.propsLab = null;
t.propsIconArr = [];
t._propsType = c.PlayBoardPropsEnum.AddHole;
t._tarPos = new cc.Vec3();
return t;
}
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this._propsType = t.param.type;
this._tarPos = t.param.tarPos;
switch (this._propsType) {
case c.PlayBoardPropsEnum.AddHole:
this.propsIcon.spriteFrame = this.propsIconArr[0];
break;

case c.PlayBoardPropsEnum.Clean:
this.propsIcon.spriteFrame = this.propsIconArr[1];
break;

case c.PlayBoardPropsEnum.Package:
this.propsIcon.spriteFrame = this.propsIconArr[2];
}
};
t.prototype.onCloseBtn = function() {
s.default.open({
param: {
type: this._propsType,
tarPos: this._tarPos
}
});
this.on_close_call();
};
r([ p(cc.Sprite) ], t.prototype, "propsIcon", void 0);
r([ p(cc.Label) ], t.prototype, "propsLab", void 0);
r([ p(cc.SpriteFrame) ], t.prototype, "propsIconArr", void 0);
return r([ a.registerUIPath("prefabSbn/LockPropsView"), u ], t);
}(a.default);
o.default = f;
cc._RF.pop();
}, {
"../../HiFive/Views/PlayboardEnum": "PlayboardEnum",
"../../common/BaseUI": "BaseUI",
"./LockPropsFlyView": "LockPropsFlyView"
} ],
LogEvent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2d77abn+mBN9LMJBge5jQ+Y", "LogEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.getInstance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
e.prototype.gameViewShowData = function() {};
e.prototype.gameViewClickData = function(e, t, o, n) {
"undefined" == o && (o = "");
"undefined" == n && (n = "");
};
e._instance = null;
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
LogSBNMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "7fab5OG4vRKnZ6gTHW6oFM4", "LogSBNMgr");
cc._RF.pop();
}, {} ],
Logger: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ba586mANcpAyqQSnFukTxpm", "Logger");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.logger = void 0;
var r = e("../../Spript/Singleton"), a = e("../../Spript/FrameConst"), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._head_slogan = null;
return t;
}
t.prototype.onInit = function() {
this._head_slogan = "[hifive]";
};
t.prototype._hasLevels = function(e) {
return !!a.LogConf.level && a.LogConf.level.indexOf(e) >= 0;
};
t.prototype.getDateString = function() {
var e = new Date(), t = e.getHours().toString(), o = "";
o += (1 == t.length ? "0" + t : t) + ":";
o += (1 == (t = e.getMinutes().toString()).length ? "0" + t : t) + ":";
return "[" + (o += 1 == (t = e.getSeconds().toString()).length ? "0" + t : t) + "]";
};
t.prototype.stack = function(e) {
var t = new Error().stack.split("\n");
t.shift();
var o = [];
t.forEach(function(e) {
var t, n = (e = e.substring(7)).split(" ");
n.length < 2 ? o.push(n[0]) : o.push(((t = {})[n[0]] = n[1], t));
});
var n = [];
if (e < o.length - 1) for (var i in o[e]) n.push(i);
if (n.length > 0) {
var r = n[0].split(".");
return "Game->" + r[0] + (r[1] ? "->" + r[1] + ":" : ":");
}
return "Game->";
};
t.prototype.info = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
if (!a.LogConf.close && this._hasLevels("info")) {
e.unshift("%c%s%s%s", "color:#f06c42", this._head_slogan, this.getDateString(), this.stack(2));
console.log.apply(this, e);
}
};
t.prototype.warn = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
if (!a.LogConf.close && this._hasLevels("warn")) {
e.unshift("%c%s%s%s", "color:#f06c42", this._head_slogan, this.getDateString(), this.stack(2));
console.warn.apply(this, e);
}
};
t.prototype.error = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
if (!a.LogConf.close && this._hasLevels("error")) {
e.unshift("%c%s%s%s", "color:#f06c42", this._head_slogan, this.getDateString(), this.stack(2));
console.error.apply(this, e);
}
};
return t;
}(r.Singleton);
o.logger = c.getInstance();
cc._RF.pop();
}, {
"../../Spript/FrameConst": "FrameConst",
"../../Spript/Singleton": "Singleton"
} ],
LoopLevelConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9a35e7YlfNN1IzBLwVU/BIk", "LoopLevelConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LoopLevelConfig = void 0;
(function(e) {
var t = {
1: {
level_id: 1,
model_id: [],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: []
},
2: {
level_id: 2,
model_id: [],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: []
},
3: {
level_id: 3,
model_id: [],
level_reward_value: 200,
level_reward_multiple: 3,
is_special: 0,
level_pic: []
}
}, o = -1;
e.query = function(e) {
return t[e + ""];
};
e.size = function() {
if (o < 0) {
o = 0;
for (var e in n()) ++o;
}
return o;
};
e.levelIdArr = function() {
return Object.keys(n()).map(function(e) {
return parseInt(e);
});
};
function n() {
return t;
}
e.getDatas = n;
})(o.LoopLevelConfig || (o.LoopLevelConfig = {}));
cc._RF.pop();
}, {} ],
MahjongManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2550flmPRhLkaW+Rnym1mny", "MahjongManager");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SyncLevelTask = o.MahjongManager = o.gamebase = void 0;
var c = e("../../GameDataConfig/GameDataConfig"), s = e("../../Spript/Singleton"), l = e("./PlayboardEnum"), u = e("./PlayBoardRecordData"), p = e("./LevelData");
o.gamebase = window;
var f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.level_data_map = new Map();
t.reward_config_map = new Map();
t.relive_props = [ l.PlayBoardPropsEnum.Relive ];
return t;
}
Object.defineProperty(t.prototype, "gfjl_is_exclude", {
get: function() {
var e = c.default.game_play_config_value("screen_open_statistic_gfjl");
return !!e && 1 == +e.value;
},
enumerable: !1,
configurable: !0
});
t.prototype.onInit = function() {};
t.prototype.getRewardConfig = function(e) {
void 0 === e && (e = -1);
-1 == e && (e = u.PlayBoardRecordData.getRecord().cur_level);
if (this.reward_config_map.has(e)) return this.reward_config_map.get(e);
for (var t = c.default.get_config_array("LevelPassRewardConfig"), o = null, n = 0, i = t; n < i.length; n++) {
var r = i[n];
if (e >= r.lvRange[0] && e <= r.lvRange[1]) {
o = r;
break;
}
}
o || (o = t[t.length - 1]);
this.reward_config_map.set(e, o);
return o;
};
t.prototype.checkEliminateReward = function(e, t) {
void 0 === t && (t = 1);
};
t.prototype.getLevelEntityByType = function(e) {
void 0 === e && (e = l.PlayBoardEnum.Game);
var t = this.level_data_map.get(e);
if (!t) {
t = new p.LevelData(e, u.PlayBoardRecordData.getRecord(), e == l.PlayBoardEnum.Game);
this.level_data_map.set(e, t);
}
return t;
};
t.prototype.useProp = function(e, t) {
for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
};
t.prototype.addProp = function(e, t) {
void 0 === t && (t = 1);
var o = this.getLevelEntityByType();
o && o.addProp(e, t);
};
t.prototype.tryRelive = function() {
return r(this, void 0, void 0, function() {
return a(this, function() {
return [ 2 ];
});
});
};
return t;
}(s.Singleton);
o.MahjongManager = f;
var h = function() {
function e(e) {
this.level = null;
this.syncing = !0;
this.result = null;
this.level = e;
this.syncing = !1;
this.result = e;
this.handler && this.handler(this.result);
}
e.prototype.check = function(e) {
this.syncing ? this.handler = e : e(this.result);
};
return e;
}();
o.SyncLevelTask = h;
cc._RF.pop();
}, {
"../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../Spript/Singleton": "Singleton",
"./LevelData": "LevelData",
"./PlayBoardRecordData": "PlayBoardRecordData",
"./PlayboardEnum": "PlayboardEnum"
} ],
MessageSBNMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "42fb7ZilRRKzreDbiItrrzf", "MessageSBNMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../commen/HandleSBN"), a = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._dic = {};
t.changeDic = {};
t._targetDic = {};
t._type = 1;
t._msgVo = [];
t._msgPool = [];
return t;
}
t.prototype.init = function() {};
t.prototype.clear = function() {
for (var e in this._targetDic) this._targetDic[e] && delete this._targetDic[e];
for (var t in this._dic) {
var o = this._dic[t];
if (o) {
var n = 0;
for (o.length; n != o.length; ) {
var i = o[n];
if (i) {
o.splice(n, 1);
i.dispose();
} else n++;
}
0 == o.length && delete this._dic[t];
}
}
};
t.prototype.on = function(e, t, o, n) {
void 0 === n && (n = !1);
var i = this._dic[e];
if (null == i) {
i = [];
this._dic[e] = i;
}
var a = o && o.uuid;
a || (a = o.name);
if (a) {
var c = this._targetDic[a];
if (null == c) {
c = [];
this._targetDic[a] = c;
}
c.push(e);
}
var s = r.default.create(o, t, null, n);
i.push(s);
};
t.prototype.removeListener = function(e, t) {
var o = this._dic[e];
if (o) {
var n = 0;
for (o.length; n != o.length; ) {
var i = o[n];
if (i.thecs === t || null == i.thecs) {
o.splice(n, 1);
i.dispose();
} else n++;
}
0 == o.length && delete this._dic[e];
}
};
t.prototype.removeAll = function(e) {
var t = e && e.uuid;
if (t) {
var o = this._targetDic[t];
if (o) {
for (var n = 0, i = o; n < i.length; n++) {
var r = i[n];
this.removeListener(r, e);
}
delete this._targetDic[t];
}
} else for (var a in this._dic) this.removeListener(a, e);
};
t.prototype.emit = function(e) {
for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
0 == this._type ? this._msgVo.push(this.getMessageVo(e, t)) : this.doMsg(e, t);
};
t.prototype.doMsg = function(e, t) {
var o = this._dic[e];
if (o && o.length) for (var n = o.length - 1, i = void 0; n >= 0; n--) if (i = o[n]) {
if (null == t) i.run(); else {
i.args = t;
i.run();
i.args = null;
}
i.once && o.splice(n, 1);
} else o.splice(n, 1);
this.changeDic[e] = e;
};
t.prototype.onRun = function() {};
t.prototype.getMessageVo = function(e, t) {
var o = this._msgPool.pop();
o || (o = new c());
o.type = e;
o.param = t;
return o;
};
t.prototype.getMsgList = function() {
return this._dic;
};
return t;
}(e("../utils/IBassInsClass").default);
o.default = a;
var c = function() {
function e() {}
e.prototype.dispose = function() {
this.type = null;
this.param = null;
};
return e;
}();
cc._RF.pop();
}, {
"../commen/HandleSBN": "HandleSBN",
"../utils/IBassInsClass": "IBassInsClass"
} ],
NailData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6a7fft3VTxLjLmdU8V3gyJv", "NailData");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NailData = void 0;
var n = [ 8, 6, 1, 9, 4, 3, 7, 2, 0, 5 ], i = function() {
function e(e, t) {
this.count = null;
this.nailColorConfig = null;
this.curColorList = [];
this.allColorCount = null;
this.lastNum = null;
this.count = e;
this.allColorCount = t.nail_color;
this.nailColorConfig = t;
}
e.prototype.build = function() {
for (var e = [], t = 0; t < this.count; t++) e.push({
c: -1
});
for (var o = [], i = 0; i < this.allColorCount; i++) this.curColorList.push(n[i]);
for (var r = 0; r < e.length; r++) {
var a = e[r];
if (-1 === a.c) {
var c;
c = r < .1 * e.length ? this.nailColorConfig.nail_1 : r < .2 * e.length ? this.nailColorConfig.nail_2 : r < .3 * e.length ? this.nailColorConfig.nail_3 : r < .4 * e.length ? this.nailColorConfig.nail_4 : r < .5 * e.length ? this.nailColorConfig.nail_5 : r < .6 * e.length ? this.nailColorConfig.nail_6 : this.nailColorConfig.nail_7;
var s = this.getCurColorRandom(c);
a.c = s;
o.push({
c: s
});
for (var l = e.slice(0, e.length * c * .1), u = 0; u < 2; u++) {
for (var p = 0; p < l.length; p++) if (-1 !== l[p].c) {
l.splice(p, 1);
p -= 1;
}
if (0 === l.length) for (var f = 0, h = e; f < h.length; f++) {
var d = h[f];
if (-1 === d.c) {
d.c = s;
break;
}
} else l[Math.floor(Math.random() * l.length)].c = s;
}
}
}
return {
nails: e.map(function(e) {
return e.c;
}),
boxes: o.map(function(e) {
return e.c;
})
};
};
e.prototype.getCurColorRandom = function(e) {
var t = this.curColorList.concat([]), o = t.indexOf(this.lastNum);
if (-1 !== o) {
t.splice(o, 1);
e -= 1;
}
var n = t[Math.floor(Math.random() * e)];
this.lastNum = n;
return n;
};
e.prototype.arrNumEliminate = function(e, t) {
for (var o = e.concat([]), n = 0, i = t; n < i.length; n++) {
var r = i[n], a = o.indexOf(r);
-1 !== a && o.splice(a, 1);
}
return o;
};
return e;
}();
o.NailData = i;
cc._RF.pop();
}, {} ],
NailSpine: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fa4f9tAD9hNgpUSvMgkr4E2", "NailSpine");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../core/managers/ActionsHelp"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nail_skin = null;
return t;
}
t.prototype.up = function() {
return a(this, void 0, void 0, function() {
return c(this, function(e) {
switch (e.label) {
case 0:
return [ 4, s.default.playSpine(this.nail_skin, "touch") ];

case 1:
e.sent();
return [ 2, this ];
}
});
});
};
t.prototype.down = function() {
return this;
};
r([ p(sp.Skeleton) ], t.prototype, "nail_skin", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../../core/managers/ActionsHelp": "ActionsHelp"
} ],
Nail: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "945ad0+v65IuJzltT/p9ZNG", "Nail");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../config/EnumDeclareSg"), l = e("../../../core/managers/ActionsHelp"), u = e("../../../utils/CoreSBN"), p = e("../../Views/MahjongManager"), f = e("../../Views/SoundManager"), h = e("./FlowerComp"), d = e("./GameConst"), _ = e("./TouchComp"), g = cc._decorator, y = g.ccclass, m = g.property, v = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nail_idle = null;
t.touch = null;
t._color = 0;
t._state = d.eBoxState.None;
t._body = null;
return t;
}
Object.defineProperty(t.prototype, "color", {
get: function() {
return this._color;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "state", {
get: function() {
return this._state;
},
set: function(e) {
e != this._state && (this._state = e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "body", {
get: function() {
if (!this._body) {
var e = new cc.Node();
this._body = e.addComponent(cc.RigidBody);
this._body.type = cc.RigidBodyType.Static;
e.parent = this.node;
}
return this._body;
},
set: function(e) {
this._body && this._body != e && this._body.node.destroy();
this._body = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(e) {
this.body = null;
this.setHint(!1);
this._color = e;
this.state = d.eBoxState.Idle;
this.setSkin(e);
};
t.prototype.setSkin = function(e) {
var t = this, o = d.ImgName[e];
cc.resources.load("Mahjong/planks/" + o + "1", cc.SpriteFrame, function(e, n) {
if (cc.isValid(t.node)) if (n) {
var i = n.getTexture();
i && i.setFilters(cc.Texture2D.Filter.LINEAR, cc.Texture2D.Filter.LINEAR);
t.nail_idle.spriteFrame = n;
} else console.warn("Mahjong/planks/" + o + "_1", e.message);
});
};
t.prototype.setHint = function(e) {
if (cc.isValid(this.node)) {
var t = this.node.getChildByName("hint");
if (t) t.active = e; else if (e) {
(t = u.CoreSBN.pool.requestObject(u.CoreSBN.config.commenBundle, s.PrefabNameSBN.FlowerHint, this.node)).zIndex = -1;
t.name = "hint";
}
}
};
t.prototype.changeParent = function(e) {
var t = e.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v3(0, 0)));
this.node.parent = e;
this.node.position = t;
};
t.prototype.moveToPos = function(e, t, o) {
void 0 === t && (t = !0);
void 0 === o && (o = 1);
return a(this, void 0, void 0, function() {
var t, n, i, r, a, s = this;
return c(this, function(c) {
switch (c.label) {
case 0:
t = this.node.parent, n = p.gamebase.game_panel;
cc.isValid(n) || (n = t);
this.changeParent(n);
i = n.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v3(0, 0))), r = this.node.zIndex;
this.node.zIndex = h.eFlowerLayer.Top;
this.node.angle = 0;
this.state = d.eBoxState.Readying;
a = this.node.position.sub(i).mag() / 2e3;
cc.tween(this.node).tag(2e4).to(a, {
position: i,
scale: 1
}, {
easing: l.Easing.quadInOut
}).start();
return [ 4, this.sleep(a + .01).then(function() {
s.node.position = i;
s.node.scale = o;
}) ];

case 1:
c.sent();
this.changeParent(t);
this.state = d.eBoxState.Idle;
this.node.zIndex = r;
return [ 2 ];
}
});
});
};
t.prototype.sleep = function(e) {
var t = this;
return new Promise(function(o) {
t.scheduleOnce(o, e);
});
};
t.prototype.playError = function() {
f.SoundManager.playSound(s.SoundNameSBN.wufayidong);
cc.tween(this.nail_idle.node).repeat(2, cc.tween().to(.05, {
angle: -5
}).to(.1, {
angle: 5
}).to(.05, {
angle: 0
})).start();
};
r([ m(cc.Sprite) ], t.prototype, "nail_idle", void 0);
r([ m({
type: _.default
}) ], t.prototype, "touch", void 0);
return r([ y ], t);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../core/managers/ActionsHelp": "ActionsHelp",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/MahjongManager": "MahjongManager",
"../../Views/SoundManager": "SoundManager",
"./FlowerComp": "FlowerComp",
"./GameConst": "GameConst",
"./TouchComp": "TouchComp"
} ],
NativeConsts: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6a023LZhWJIvpZIoJRfObIH", "NativeConsts");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NativeConsts = void 0;
var n = function() {
function e() {}
Object.defineProperty(e, "NativeClassPath", {
get: function() {
return this.isAndroid ? "org.cocos2dx.javascript.bridge.JSFunction" : this.isIOS ? "NativeOcClass" : "";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "appInfo", {
get: function() {
return e.isAndroid ? "getCommentInfo" : "getCommentInfo:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "wechartLogin", {
get: function() {
return e.isAndroid ? "loginWeChat" : "loginWeChat:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "shareWeChat", {
get: function() {
return e.isAndroid ? "shareWeChat" : "shareWeChat:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "showVideoAD", {
get: function() {
return e.isAndroid ? "showVideoAD" : "showVideoAD:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "sevenCashCheck", {
get: function() {
return "sevenCashCheck";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "showAdImage", {
get: function() {
return e.isAndroid ? "showAdImage" : "showAdImage:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "hideAdImage", {
get: function() {
return e.isAndroid ? "hideAdImage" : "hideAdImage:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "showBanner", {
get: function() {
return e.isAndroid ? "showBanner" : "showBanner:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "hideBanner", {
get: function() {
return e.isAndroid ? "hideBanner" : "hideBanner:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "logoutApp", {
get: function() {
return e.isAndroid ? "logoutApp" : "logoutApp:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "openNativeView", {
get: function() {
return e.isAndroid ? "openNativeView" : "openNativeView:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "openWebView", {
get: function() {
return e.isAndroid ? "openWebView" : "openWebView:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "sensorHit", {
get: function() {
return e.isAndroid ? "sensorHit" : "sensorHit:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "screenAds", {
get: function() {
return e.isAndroid ? "showScreenAds" : "screenAds:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "fullScreenAds", {
get: function() {
return e.isAndroid ? "showFullScreenAds" : "showFullScreenAds:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "copyText", {
get: function() {
return e.isAndroid ? "copyText" : "copyText:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "onGameUpgradeRole", {
get: function() {
return e.isAndroid ? "" : "onGameUpgradeRole";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "onClientCallCocos", {
get: function() {
return e.isAndroid ? "onClientCallCocos" : "onClientCallCocos:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "checkAppInstalled", {
get: function() {
return e.isAndroid ? "checkAppInstalled" : "checkAppInstalled:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "downloadStream", {
get: function() {
return e.isAndroid ? "downloadStream" : "downloadStream:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "reLogin", {
get: function() {
return e.isAndroid ? "reLoginDialog" : "reLoginDialog:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "getTDBlackBox", {
get: function() {
return e.isAndroid ? "getTDBlackBox" : "getTDBlackBox:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "readTask", {
get: function() {
return e.isAndroid, "readTaskCallback";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "Rsa", {
get: function() {
return e.isAndroid ? "Rsa" : "Rsa:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "RsaCallBack", {
get: function() {
return e.isAndroid ? "RsaCallback" : "RsaCallback:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "getBusinessMethod", {
get: function() {
return e.isAndroid ? "businessMethod" : "businessMethod:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "setNoNewUser", {
get: function() {
return e.isAndroid ? "setNoNewUser" : "setNoNewUser:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "addEventCalendar", {
get: function() {
return e.isAndroid ? "addEventCalendar" : "addEventCalendar:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "removeEventCalendar", {
get: function() {
return e.isAndroid ? "removeEventCalendar" : "removeEventCalendar:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "getCosFailData", {
get: function() {
return e.isAndroid ? "cosFailData" : "cosFailData:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "getOnHomePage", {
get: function() {
return e.isAndroid ? "onHomePage" : "onHomePage:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "showViewSuccess", {
get: function() {
return e.isAndroid ? "closeFunc" : "closeFunc:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "removeHis", {
get: function() {
return e.isAndroid ? "removeHis" : "removeHis:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "openDrama", {
get: function() {
return e.isAndroid ? "openDrama" : "openDrama:";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "homeBack", {
get: function() {
return e.isAndroid ? "homeBack" : "homeBack:";
},
enumerable: !1,
configurable: !0
});
e.isAndroid = cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID;
e.isIOS = cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS;
return e;
}();
o.NativeConsts = n;
cc._RF.pop();
}, {} ],
ObjectPoolManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "21f3c/d/wVDdJgGEi3w9vDf", "ObjectPoolManager");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._poolMap = {};
t._prefabMap = {};
return t;
}
t.prototype.init = function(e) {
if (!this._prefabMap[e] && !this._poolMap[e]) {
this._prefabMap[e] = {};
this._poolMap[e] = {};
}
};
t.prototype.clear = function() {};
t.prototype.cloneNode = function(e, t, o) {
if (this._prefabMap[e] && this._poolMap[e]) {
var n = t.name;
this._prefabMap[e][n] = t;
var i = null;
if (this._poolMap[e].hasOwnProperty(n)) i = (r = this._poolMap[e][n]).size() > 0 ? r.get() : cc.instantiate(t); else {
var r = new cc.NodePool();
this._poolMap[e][n] = r;
i = cc.instantiate(t);
}
if (o) {
i.parent = o;
i.active = !0;
}
return i;
}
};
t.prototype.requestObject = function(e, t, o, n) {
if (this._prefabMap[e] && this._poolMap[e]) {
var i, r;
if ("string" == typeof t) {
r = t;
if (!(i = this._prefabMap[e][t])) {
console.log("Pool invalidentifierentifierentifierentifierentifierentifier pdoRefreshab regionName = ", r);
return null;
}
} else {
i = t;
r = t.data.name;
}
var a = null;
if (this._poolMap[e].hasOwnProperty(r)) (c = this._poolMap[e][r]).size() > 0 ? (a = c.get()).active = !0 : a = cc.instantiate(i); else {
var c = new cc.NodePool();
this._poolMap[e][r] = c;
a = cc.instantiate(i);
}
if (o) {
a.parent = o;
a.active = !0;
n && (a.position = n);
}
return a;
}
};
t.prototype.returnObject = function(e, t, o) {
void 0 === o && (o = !1);
if (t && this._poolMap[e]) {
var n = t.name, i = null;
if (this._poolMap[e].hasOwnProperty(n)) i = this._poolMap[e][n]; else {
i = new cc.NodePool();
this._poolMap[e][n] = i;
}
i.put(t);
}
};
t.prototype.createPool = function(e) {
if (!this._prefabMap[e] && !this._poolMap[e]) {
this._prefabMap[e] = {};
this._poolMap[e] = {};
}
};
t.prototype.destroyPool = function(e) {
var t = this;
if (this._poolMap[e]) {
Object.keys(this._poolMap[e]).forEach(function(o) {
t._poolMap[e][o].clear();
});
delete this._poolMap[e];
}
if (this._prefabMap[e]) {
Object.keys(this._prefabMap[e]).forEach(function(o) {
t._prefabMap[e][o].decRef();
});
delete this._prefabMap[e];
}
};
t.prototype.registerPrefab = function(e, t, o) {
this._prefabMap[e] && (this._prefabMap[e][t] = o);
};
t.prototype.fetchPrefab = function(e, t) {
if (this._prefabMap[e]) return this._prefabMap[e][t];
};
return t;
}(e("./IBassInsClass").default);
o.default = r;
cc._RF.pop();
}, {
"./IBassInsClass": "IBassInsClass"
} ],
PageManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "daee3NaDIRA7q7Llpc2RLpX", "PageManager");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PageManager = void 0;
var r = e("../../Spript/Singleton"), a = e("../../Spript/FrameConst"), c = e("./Logger"), s = e("./Hi5_UIManager"), l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._assets = [];
return t;
}
t.prototype.onInit = function() {
t.MOVE_WIDTH = cc.view.getVisibleSize().width + 200;
this._init_assets();
};
t.prototype._init_assets = function() {
var e = this;
cc.resources.loadDir(a.Hi5Conf.page_dir_name, cc.Prefab, function(t, o) {
if (t) c.logger.error("load hifive page error: ", JSON.stringify(t)); else {
e._assets = o;
c.logger.info("page assets load done, length: ", o.length);
}
});
};
t.prototype._wrap_page = function(e) {
var t = new cc.Node("_wrap_parent_" + e.name + "_");
e.zIndex = 9;
e.parent = t;
e.setPosition(cc.v2(0, 0));
t.addComponent(cc.BlockInputEvents);
t.width = cc.view.getVisibleSize().width;
t.height = cc.view.getVisibleSize().height;
return t;
};
t.prototype._load_page = function(e, t) {
var o = this._assets.find(function(t) {
return t.name === e;
});
if (!o) {
c.logger.error("page prefab not exist ", e);
return null;
}
var n = cc.instantiate(o), i = this._wrap_page(n);
if (s.UIManager.getInstance().push(i, a.LayerOrder.UI)) {
var r = n.getComponents(cc.Component), l = r.find(function(e) {
return e.constructor.name === t.name;
});
if (!r || r.length <= 0 || !l) {
c.logger.error("当前页面未配置脚本：", e);
return null;
}
c.logger.info("auto load page", e);
return l;
}
c.logger.error("push page to ui error", e);
return null;
};
t.prototype.open = function(e) {
s.UIManager.getInstance().ui_mask(!0);
var t = this._load_page(e.name, e.controller);
if (t) {
var o = Object.assign(Object.assign({}, e), {
_on_opened: function() {
s.UIManager.getInstance().ui_mask(!1);
}
});
t.show(o);
}
};
t.prototype.remove = function(e) {
var t = "_wrap_parent_" + e.name + "_";
e.parent && e.parent.name === t ? s.UIManager.getInstance().remove(e.parent, a.LayerOrder.UI) : c.logger.error("无法移除节点，result：节点parent错误", e.parent ? e.parent.name : e);
};
t.MOVE_WIDTH = 0;
return t;
}(r.Singleton);
o.PageManager = l;
cc._RF.pop();
}, {
"../../Spript/FrameConst": "FrameConst",
"../../Spript/Singleton": "Singleton",
"./Hi5_UIManager": "Hi5_UIManager",
"./Logger": "Logger"
} ],
PakoData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b8eb0npPg1Goq8rrYgYbpJn", "PakoData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.compress_str = function(e) {
return JSON.stringify(e);
};
e.un_compress_data = function(e) {
return JSON.parse(e);
};
e.uint8array_to_string = function(e) {
for (var t = "", o = 0; o < e.length; o++) t += String.fromCharCode(e[o]);
return t;
};
e.string_touint8Array = function(e) {
for (var t = [], o = 0, n = e.length; o < n; ++o) t.push(e.charCodeAt(o));
return new Uint8Array(t);
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
PhotoItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "633252ICyJGTZ2wQJ1TGw9U", "PhotoItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/VirItemRender"), c = e("../../config/ImageConfig"), s = e("../../utils/CoreSBN"), l = e("../view/LoadImgView"), u = e("../view/PhotoLikeView"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.roSp = null;
t.aiXNode = null;
t.lockNode = null;
t._like = !1;
return t;
}
t.prototype.start = function() {};
t.prototype.dataChanged = function() {
this._like = !1;
var e = s.CoreSBN.gameData.saveTex[this.data.pic_id];
if (e) {
this.lockNode.active = !1;
this._like = this.aiXNode.active = !!e.like;
} else this.lockNode.active = !0;
this.loadRes();
};
t.prototype.loadRes = function() {
var e = this, t = this.data.pic_id;
c.ImageConfig.loadImgList([ c.ImgPrefix.localTex_Album + t ], function() {
if (e.isValid && t == e.data.pic_id) {
var o = s.CoreSBN.res.getImgAsset(s.CoreSBN.config.remoteBundle, c.ImgPrefix.localTex_Album + t);
e.roSp.spriteFrame = o;
}
}, function() {
console.warn("load img error:", t);
});
};
t.prototype.onClick = function() {
var e = this;
this.lockNode.active || l.default.open({
loadList: [ this.data.pic_id ],
suc: function() {
u.default.open({
texIndex: e.data.pic_id,
like: e._like,
index: 0
});
},
fail: function() {}
});
};
t.prototype.onItemRender = function(e) {
for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
};
r([ h(cc.Sprite) ], t.prototype, "roSp", void 0);
r([ h(cc.Node) ], t.prototype, "aiXNode", void 0);
r([ h(cc.Node) ], t.prototype, "lockNode", void 0);
return r([ f ], t);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../commen/VirItemRender": "VirItemRender",
"../../config/ImageConfig": "ImageConfig",
"../../utils/CoreSBN": "CoreSBN",
"../view/LoadImgView": "LoadImgView",
"../view/PhotoLikeView": "PhotoLikeView"
} ],
PhotoLikeView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9a7e5AsWSJET5WsnLiZRmQq", "PhotoLikeView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../manager/SDKbridgeSBNMgr"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgSprite = null;
t.downNode = null;
t.saveImgProgress = null;
t.leftNode = null;
t.rightNode = null;
t.likeSprite = null;
t.likeSpriteArr = [];
t._levPic = 0;
t._love = !1;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.onEnable = function() {};
t.prototype.onDisable = function() {
s.CoreSBN.message.removeAll(this);
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this._levPic = t.texIndex;
var o = t.like;
this.loadBg();
this.leftNode.active = !1;
this.rightNode.active = !1;
this._love = o;
this._updateLike();
};
t.prototype._updateLike = function() {
this._love ? this.likeSprite.spriteFrame = this.likeSpriteArr[1] : this.likeSprite.spriteFrame = this.likeSpriteArr[0];
};
t.prototype.loadBg = function() {
var e = s.CoreSBN.res.getImgAsset(s.CoreSBN.config.remoteBundle, "" + this._levPic);
e && (this.bgSprite.spriteFrame = e);
};
t.prototype.onImageSaveStatus = function(e, t) {
if (this.node && this.node.isValid && this.node.active) if (e == c.SaveLocalStatus.SaveSuc) {
this.saveImgProgress.progress = 1;
this.saveImgProgress.node.active = !1;
} else if (e == c.SaveLocalStatus.SaveFail) {
this.saveImgProgress.progress = 0;
this.saveImgProgress.node.active = !1;
} else e == c.SaveLocalStatus.GetPrmi || e == c.SaveLocalStatus.SaveProgress && (this.saveImgProgress.progress = t || 0);
};
t.prototype.downAdBtn = function() {
s.CoreSBN.ad.showRewardVideo(this.onReward.bind(this), this.onfaild.bind(this));
};
t.prototype.onReward = function() {
if (this.node && this.node.isValid) {
s.CoreSBN.sdk.downloadJpegImageToDevice(s.CoreSBN.config.saveUrl() + (this._levPic + ".jpg"), null, null);
this.saveImgProgress.node.active = !0;
this.saveImgProgress.progress = 0;
}
};
t.prototype.onfaild = function() {};
t.prototype.onLeftBtn = function() {};
t.prototype.onRightBtn = function() {};
t.prototype.likeBtn = function() {
this._love = !this._love;
s.CoreSBN.gameData.likeUnlike({
texIndex: this._levPic,
like: this._love
});
this._updateLike();
};
t.prototype.omCloseBtn = function() {
this.on_close_call();
};
r([ p(cc.Sprite) ], t.prototype, "bgSprite", void 0);
r([ p(cc.Node) ], t.prototype, "downNode", void 0);
r([ p(cc.ProgressBar) ], t.prototype, "saveImgProgress", void 0);
r([ p(cc.Node) ], t.prototype, "leftNode", void 0);
r([ p(cc.Node) ], t.prototype, "rightNode", void 0);
r([ p(cc.Sprite) ], t.prototype, "likeSprite", void 0);
r([ p(cc.SpriteFrame) ], t.prototype, "likeSpriteArr", void 0);
return r([ a.registerUIPath("prefabSbn/PhotoLikeView"), u ], t);
}(a.default);
o.default = f;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../manager/SDKbridgeSBNMgr": "SDKbridgeSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
PhotoView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1f864aqmqNPK6P5liblNEKQ", "PhotoView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/ScreollVirtualView"), c = e("../../common/BaseUI"), s = e("../../config/EnumDeclareSg"), l = e("../../config/ImageConfig"), u = e("../../utils/CoreSBN"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.allLab = null;
t.favorLab = null;
t.nullNode = null;
t.scroVir = null;
t._green = new cc.Color(0, 106, 31, 255);
t._blue = new cc.Color(43, 104, 192, 255);
t._curSele = 1;
t._curNum = 1;
t._allData = [];
t._favorData = [];
t.scroWidgetTop = 230;
return t;
}
t.prototype.setup = function() {};
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.scroVir.getComponent(cc.Widget) && (u.CoreSBN.publicFun.isAdaptationViewLong() ? this.scroVir.getComponent(cc.Widget).top = this.scroWidgetTop + u.CoreSBN.config.topLongHeight : this.scroVir.getComponent(cc.Widget).top = this.scroWidgetTop + u.CoreSBN.config.topShortHeight);
};
t.prototype.start = function() {};
t.prototype.onEnable = function() {
u.CoreSBN.message.on(s.EventNameSBN.like_change, this.changeLikeList, this);
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this.changeLikeList();
};
t.prototype.onDisable = function() {
u.CoreSBN.message.removeAll(this);
};
t.prototype.onSelectToge = function(e, t) {
var o = Number(t);
if (this._curNum != o) {
this._curNum = o;
if (e.isChecked && this._curSele != o) {
this._curSele = o;
this.onShowList();
}
}
};
t.prototype.changeLikeList = function() {
this._favorData = [];
this._allData = [];
var e = u.CoreSBN.gameData.saveTex;
for (var t in e) if (e && l.ImageConfig.query(e[t].texIndex)) {
var o = e[t];
l.ImageConfig.query(o.texIndex) && o.like && this._favorData.push(l.ImageConfig.query(o.texIndex));
}
for (var t in l.ImageConfig.getDatas()) this._allData.push(l.ImageConfig.query(t));
this.onShowList();
};
t.prototype.onclose = function() {
this.on_close_call();
};
t.prototype.onShowList = function() {
switch (this._curNum) {
case 1:
this.updateList(this._allData);
this.allLab.color = this._green;
this.favorLab.color = this._blue;
break;

case 2:
this.updateList(this._favorData);
this.allLab.color = this._blue;
this.favorLab.color = this._green;
}
};
t.prototype.updateList = function(e, t) {
void 0 === t && (t = !0);
!e || e.length < 1 ? this.nullNode.active = !0 : this.nullNode.active = !1;
this.scroVir.refreshData(e);
};
r([ h(cc.LabelOutline) ], t.prototype, "allLab", void 0);
r([ h(cc.LabelOutline) ], t.prototype, "favorLab", void 0);
r([ h(cc.Node) ], t.prototype, "nullNode", void 0);
r([ h(a.default) ], t.prototype, "scroVir", void 0);
return r([ c.registerUIPath("prefabSbn/PhotoView"), f ], t);
}(c.default);
o.default = d;
cc._RF.pop();
}, {
"../../commen/ScreollVirtualView": "ScreollVirtualView",
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../config/ImageConfig": "ImageConfig",
"../../utils/CoreSBN": "CoreSBN"
} ],
PhysicalItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "48c13psNnBCYYMV8LTeLYvL", "PhysicalItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../manager/UserDataSBNMgr"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.numLab = null;
t.timeLab = null;
t._isMan = !1;
return t;
}
t.prototype.start = function() {
s.CoreSBN.message.on(c.MsgUserEnumSBN.power_change, this.updateNum, this);
s.CoreSBN.message.on(a.EventNameSBN.time_change, this.updateTime, this);
this.timeLab.node.active = !1;
this.updateNum();
this.updateTime();
};
t.prototype.updateNum = function() {
var e = c.default.ins.Power;
this.numLab.string = e.toString();
var t = c.default.ins.MaxPower;
if (c.default.ins.Power >= t) {
this.timeLab.node.active = !1;
this._isMan = !0;
} else {
this.timeLab.node.active = !0;
this._isMan = !1;
}
this.updateTime();
};
t.prototype.updateTime = function() {
this._isMan || (this.timeLab.string = s.CoreSBN.publicFun.formatSeconds(c.default.ins.CurTime));
};
t.prototype.onDestroy = function() {
s.CoreSBN.message.removeAll(this);
};
r([ p(cc.Label) ], t.prototype, "numLab", void 0);
r([ p(cc.Label) ], t.prototype, "timeLab", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
Plank: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "84d2flZI8tC5o0FDG1zOhs/", "Plank");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../config/EnumDeclareSg"), c = e("../../../Spript/Tools"), s = e("../../../utils/CoreSBN"), l = e("../../Views/UIUtils"), u = e("./FlowerEntity"), p = e("./GameConst"), f = e("./Nail"), h = e("./TouchComp"), d = cc._decorator, _ = d.ccclass, g = d.property, y = d.executeInEditMode, m = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.center_sprite = null;
t.frame_sprite = null;
t.hole_node = null;
t.skin_node = null;
t.graphics = null;
t.nails_node = null;
t.polygon = null;
t.touch = null;
t.body = null;
t._test_plank = !1;
t.nails = [];
t.holes = [];
t.plank = null;
t.zoom = 1;
t.scale_x = 1;
t.scale_y = 1;
t._layer = 0;
t.normal_color = null;
t.check_die = !1;
t.die_handler = null;
return t;
}
Object.defineProperty(t.prototype, "test_plank", {
get: function() {
return this._test_plank;
},
set: function(e) {
this._test_plank = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "layer", {
get: function() {
return this._layer;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {};
t.prototype.init = function(e, t, o, n) {
this.zoom = n;
this.nails = [];
this.holes = [];
this.plank = e;
this._layer = o;
this.setConfig(e.config);
this.node.name = "plant-" + e.config.id;
this.normal_color = t;
this.node.opacity = 0;
};
t.prototype.initNails = function(e) {
var t = this;
this.node.getComponents(cc.RevoluteJoint).forEach(function(e) {
t.node.removeComponent(e);
});
for (var o = 0, n = this.plank.colors; o < n.length; o++) {
var i = n[o], r = i.c, c = i.i, l = s.CoreSBN.pool.requestObject(s.CoreSBN.config.commenBundle, a.PrefabNameSBN.Nail, e).getComponent(f.default), u = this.holes[c], p = e.convertToNodeSpaceAR(u.convertToWorldSpaceAR(cc.v3()));
l.node.position = p;
l.node.zIndex = 1e4 - p.y;
l.init(r);
this.nails.push(l);
l.__idx__ = c;
var h = this.node.addComponent(cc.RevoluteJoint);
h.anchor = cc.v2(u.x, u.y);
h.apply();
h.connectedBody = l.body;
}
};
t.prototype.build = function() {
var e = this.nails.map(function(e) {
return {
c: e.color,
i: e.__idx__
};
});
this.plank.colors = e;
return this.plank;
};
t.prototype.checkNails = function() {
this.nails.length <= 1 ? this.body.type = cc.RigidBodyType.Dynamic : this.body.type = cc.RigidBodyType.Static;
this.check_die = this.nails.length <= 0;
};
t.prototype.update = function() {
this.check_die && this.node.y < -1e3 && this.setPlankDie();
};
t.prototype.setPlankDie = function() {
this.die_handler && this.die_handler(this);
this.node.destroy();
};
t.prototype.playColorChange = function(e, t, o) {
return new Promise(function(n) {
cc.tween(e).delay(.1).sequence(cc.tween().to(.5, {
opacity: o
}), cc.tween().to(.5, {
color: t
})).call(function() {
n();
}).start();
});
};
t.prototype.setDisplayState = function(e) {
this.node.opacity = e == p.eLayer.Hide ? 0 : 255;
this.nails.forEach(function(t) {
t.node.opacity = e == p.eLayer.Idle ? 255 : 0;
});
if (e != p.eLayer.Hide) if (e == p.eLayer.Idle) {
this.nails_node.opacity = 0;
this.center_sprite.node.opacity = 210;
this.center_sprite.node.color = new cc.Color(200, 200, 200);
var t = cc.tintTo(.15, this.normal_color.r, this.normal_color.g, this.normal_color.b);
this.center_sprite.node.runAction(t);
this.frame_sprite.node.color = cc.Color.GRAY;
this.frame_sprite.node.runAction(cc.tintTo(.3, 255, 255, 255));
cc.tween(this.nails_node).delay(.3).to(.3, {
opacity: 255
}).start();
this.checkNails();
} else {
var o = cc.Color.GRAY;
this.frame_sprite.node.color = o;
this.center_sprite.node.color = new cc.Color(200, 200, 200);
this.center_sprite.node.opacity = 160;
this.hole_node.opacity = 255;
this.nails_node.opacity = 0;
}
};
t.prototype.setConfig = function(e) {
var t = e.pos;
if (t[3] == -t[4]) {
this.scale_x = this.zoom * t[3];
this.scale_y = this.zoom * t[4];
this.hole_node.children.forEach(function(e) {
e.getChildByName("hole").scaleX = 1 / t[3];
e.getChildByName("hole").scaleY = 1 / t[4];
});
} else {
this.scale_x = this.zoom;
this.scale_y = this.zoom;
this.hole_node.children.forEach(function(e) {
e.getChildByName("hole").scaleX = 1;
e.getChildByName("hole").scaleY = 1;
});
}
this.skin_node.scaleX = this.zoom * t[3];
this.skin_node.scaleY = this.zoom * t[4];
var o = e.holes;
this.nails_node.children.forEach(function(e) {
return e.destroy();
});
this.node.x = t[0] * this.zoom;
this.node.y = t[1] * this.zoom;
this.node.angle = t[2];
this.setImage(e.id);
this.initPolygon(e.id, this.zoom * t[3], this.zoom * t[4]);
this.initHole(o);
};
t.prototype.initPolygon = function(e, t, o) {
var n = u.mj.getBoxDataById(e);
n = Array.from(n);
1 == t && 1 == o || (n = n.map(function(e) {
return cc.v2(e.x * t, e.y * o);
}));
this.polygon && n && (this.polygon.points = n);
};
t.prototype.initHole = function(e) {
var t = this, o = l.default.getInstance().copyNodeToList(e.length, Array.from(this.hole_node.children));
this.holes = o.map(function(o, n) {
o.active = !0;
o.scale = t.zoom;
o.x = e[n][0] * t.scale_x;
o.y = e[n][1] * t.scale_y;
return o;
});
};
t.prototype.setImage = function(e) {
var t = this;
cc.resources.load("Mahjong/planks/" + e + "-1", cc.SpriteFrame, function(o, n) {
cc.isValid(t.node) && (n ? t.frame_sprite.spriteFrame = n : console.warn("Mahjong/planks/" + e + "_1", o.message));
});
cc.resources.load("Mahjong/planks/" + e + "-2", cc.SpriteFrame, function(o, n) {
cc.isValid(t.node) && (n ? t.center_sprite.spriteFrame = n : console.warn("Mahjong/planks/" + e + "_2", o.message));
});
};
t.prototype.getNailInPlank = function(e) {
for (var t = 0, o = this.nails; t < o.length; t++) {
var n = o[t];
if (n.touch.testPointInPolygon(e)) return n;
}
};
t.prototype.removeNail = function(e, t) {
void 0 === t && (t = !0);
e.body = null;
t && c.utils.removeElementFromArray(e, this.nails);
this.checkNails();
};
t.prototype.setPlankDestroy = function(e) {
e.length;
this.nails.forEach(function(e) {
e.body = null;
});
this.nails = [];
this.checkNails();
};
r([ g({
type: cc.Sprite
}) ], t.prototype, "center_sprite", void 0);
r([ g({
type: cc.Sprite
}) ], t.prototype, "frame_sprite", void 0);
r([ g(cc.Node) ], t.prototype, "hole_node", void 0);
r([ g(cc.Node) ], t.prototype, "skin_node", void 0);
r([ g(cc.Graphics) ], t.prototype, "graphics", void 0);
r([ g(cc.Node) ], t.prototype, "nails_node", void 0);
r([ g(cc.PhysicsPolygonCollider) ], t.prototype, "polygon", void 0);
r([ g({
type: h.default
}) ], t.prototype, "touch", void 0);
r([ g(cc.RigidBody) ], t.prototype, "body", void 0);
r([ g() ], t.prototype, "test_plank", null);
return r([ _, y ], t);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../../../Spript/Tools": "Tools",
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/UIUtils": "UIUtils",
"./FlowerEntity": "FlowerEntity",
"./GameConst": "GameConst",
"./Nail": "Nail",
"./TouchComp": "TouchComp"
} ],
PlayBoardRecordData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dcb49fQauFMX4sJnINmkXJh", "PlayBoardRecordData");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlayBoardRecordData = void 0;
var a = e("../../GameDataConfig/BaseRecord"), c = e("../../GameDataConfig/GameLocalData"), s = e("../../Spript/Tools"), l = e("./PlayboardEnum"), u = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.base_name = "PlayBoardRecordData";
t.eliminate_count = 0;
t.total_prop_record = Object.create(null);
t.game_data = Object.create(null);
t.default_prop_count_count = null;
t.inning = 0;
t.apply_auto_update();
return t;
}
Object.defineProperty(t.prototype, "cur_level", {
get: function() {
return this.getLevelData(l.PlayBoardEnum.Game).cur_level;
},
enumerable: !1,
configurable: !0
});
t.prototype.add_inning = function(e) {
void 0 === e && (e = 1);
this.inning += e;
this.store();
return this.inning;
};
t.prototype.get_inning = function() {
return this.inning;
};
t.prototype.getProRecord = function(e) {
var t = this.total_prop_record[e];
t || (this.total_prop_record[e] = t = Object.create(null));
return t;
};
t.prototype.addPropRecord = function(e, t, o) {
void 0 === o && (o = 1);
var n = this.getProRecord(e);
n[t] = n[t] || 0;
n[t] += o;
this.store();
};
t.prototype.getLevelData = function(e) {
void 0 === e && (e = l.PlayBoardEnum.Game);
var t = this.game_data[e];
if (!t) {
(t = Object.create(null)).cur_level = 1;
t.mahjong = Object.create(null);
this.game_data[e] = t;
this.store();
}
return t;
};
t.prototype.store = function() {
c.default.get_instance().set_local_storeage();
};
t.prototype.add_eliminate_count = function(e) {
void 0 === e && (e = 1);
this.eliminate_count += e;
this.store();
return this.eliminate_count;
};
t.prototype.get_eliminate_count = function() {
return this.eliminate_count;
};
t._name = "PlayBoardRecordData";
r([ s.utils.throttler(10) ], t.prototype, "store", null);
return t;
}(a.default);
o.PlayBoardRecordData = u;
cc._RF.pop();
}, {
"../../GameDataConfig/BaseRecord": "BaseRecord",
"../../GameDataConfig/GameLocalData": "GameLocalData",
"../../Spript/Tools": "Tools",
"./PlayboardEnum": "PlayboardEnum"
} ],
PlayDataMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "13c889C+3NBXbopghoNPH/K", "PlayDataMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PlayDataMgr = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._boxData = null;
t._boxMap = new Map();
return t;
}
Object.defineProperty(t.prototype, "boxData", {
get: function() {
return this._boxData;
},
enumerable: !1,
configurable: !0
});
t.prototype.initBoxData = function() {
var e = this;
return new Promise(function(t, o) {
e._boxData ? t() : cc.resources.load("Mahjong/config/box_data", cc.JsonAsset, function(n, i) {
if (n) {
o && o();
console.log("init box data error");
} else {
e._boxData = i;
t && t();
}
});
});
};
t.prototype.getBoxDataById = function(e) {
if (!this._boxData || !this._boxData[e]) throw new Error("boxData no init");
if (this._boxMap.has(e)) return this._boxMap.get(e);
var t = this._boxData[e].map(function(e) {
return cc.v2(e[0], e[1]);
});
this._boxMap.set(e, t);
return t;
};
return t;
}(e("../utils/IBassInsClass").default);
o.PlayDataMgr = r;
cc._RF.pop();
}, {
"../utils/IBassInsClass": "IBassInsClass"
} ],
PlayEnum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "863efwGnz9GR6IDXvpMbXsf", "PlayEnum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.State = o.eGameState = o.eLayer = o.Easing = o.ImgName = o.ColorPool = o.BoxCount = o.eBoxState = void 0;
(function(e) {
e[e.None = 1] = "None";
e[e.Idle = 2] = "Idle";
e[e.Readying = 3] = "Readying";
e[e.Closing = 4] = "Closing";
e[e.Dying = 5] = "Dying";
})(o.eBoxState || (o.eBoxState = {}));
o.BoxCount = 3;
o.ColorPool = [ "#91f99e", "#dbff86", "#8de8fc", "#8ec0ff", "#b189ff", "#fca2e3", "#ff8080", "#ffb777", "#ffe775" ];
o.ImgName = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ];
o.Easing = {
quadIn: "quadIn",
quadOut: "quadOut",
quadInOut: "quadInOut",
cubicIn: "cubicIn",
cubicOut: "cubicOut",
cubicInOut: "cubicInOut",
quartIn: "quartIn",
quartOut: "quartOut",
quartInOut: "quartInOut",
quintIn: "quintIn",
quintOut: "quintOut",
quintInOut: "quintInOut",
sineIn: "sineIn",
sineOut: "sineOut",
sineInOut: "sineInOut",
expoIn: "expoIn",
expoOut: "expoOut",
expoInOut: "expoInOut",
circIn: "circIn",
circOut: "circOut",
circInOut: "circInOut",
elasticIn: "elasticIn",
elasticOut: "elasticOut",
elasticInOut: "elasticInOut",
backIn: "backIn",
backOut: "backOut",
backInOut: "backInOut",
bounceIn: "bounceIn",
bounceOut: "bounceOut",
bounceInOut: "bounceInOut",
smooth: "smooth",
fade: "fade"
};
o.eLayer = cc.Enum({
None: 1,
Idle: 2,
Lock: 3,
Hide: 4
});
o.eGameState = cc.Enum({
Lock: 1,
playing: 2,
Success: 4,
Fail: 8,
Complete: 16,
Cleaning: 32
});
var n = function() {
function e() {
this._cur = 0;
this.list = [];
}
Object.defineProperty(e.prototype, "cur", {
get: function() {
return this._cur;
},
set: function(e) {
if (e != this._cur) {
this._cur = e;
this.notify();
}
},
enumerable: !1,
configurable: !0
});
e.prototype.change = function(e) {
-1 == this.list.indexOf(e) && this.list.push(e);
};
e.prototype.notify = function() {
var e = this;
this.list.forEach(function(t) {
t(e.cur);
});
};
e.prototype.add = function(e) {
if (!this.has(e)) {
this._cur |= e;
this.notify();
}
};
e.prototype.remove = function(e) {
if (this.has(e)) {
this._cur &= ~e;
this.notify();
}
};
e.prototype.has = function(e) {
return (this._cur & e) === e;
};
return e;
}();
o.State = n;
cc._RF.pop();
}, {} ],
PlayboardEnum: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18a30hIphRHeqy9PIkj1snT", "PlayboardEnum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PropsLocalSBN = o.PropsLocalQianzhuiLock = o.PlayBoardEnum = o.PlayBoardPropsEnum = void 0;
o.PlayBoardPropsEnum = cc.Enum({
None: 0,
Package: 1,
Clean: 5,
Shuffle: 3,
Recall: 2,
Omnipotent: 4,
Open: 6,
Relive: 7,
AddHole: 8
});
(function(e) {
e[e.None = 0] = "None";
e[e.Game = 1] = "Game";
e[e.Level = 2] = "Level";
e[e.Stand = 3] = "Stand";
})(o.PlayBoardEnum || (o.PlayBoardEnum = {}));
o.PropsLocalQianzhuiLock = "propsLock_";
o.PropsLocalSBN = "props_";
cc._RF.pop();
}, {} ],
PropsNoView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8c13cu1pw9EtqkhrAf2CTXb", "PropsNoView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../HiFive/Views/PlayboardEnum"), s = e("../../UIManager/UIManager"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.propsIcon = null;
t.propsLab = null;
t.propsIconArr = [];
t.videoCountLab = null;
t.coinLab = null;
t.coinCountLab = null;
t._propsType = c.PlayBoardPropsEnum.AddHole;
t._tarPos = new cc.Vec3();
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this._propsType = t.param.type;
switch (this._propsType) {
case c.PlayBoardPropsEnum.AddHole:
this.propsIcon.spriteFrame = this.propsIconArr[0];
break;

case c.PlayBoardPropsEnum.Clean:
this.propsIcon.spriteFrame = this.propsIconArr[1];
break;

case c.PlayBoardPropsEnum.Package:
this.propsIcon.spriteFrame = this.propsIconArr[2];
}
this.videoCountLab.string = "x" + l.CoreSBN.gameData.videoPropCount;
this.coinLab.string = "x" + l.CoreSBN.gameData.buyPropCost;
this.coinCountLab.string = "x" + l.CoreSBN.gameData.coinPropCount;
};
t.prototype.onCloseBtn = function() {
this.on_close_call();
};
t.prototype.onCoinBtn = function() {
if (l.CoreSBN.gameData.spendCoin(l.CoreSBN.gameData.buyPropCost)) {
l.CoreSBN.gameData.addProp(this._propsType, l.CoreSBN.gameData.coinPropCount);
this.on_close_call();
} else s.default.show_toast("Not enough gold coins");
};
t.prototype.onVideoBtn = function() {
l.CoreSBN.ad.showRewardVideo(this.onReward.bind(this), this.onfaild.bind(this));
};
t.prototype.onReward = function() {
if (this.node && this.node.isValid) {
l.CoreSBN.gameData.addProp(this._propsType, l.CoreSBN.gameData.videoPropCount);
this.on_close_call();
}
};
t.prototype.onfaild = function() {};
r([ f(cc.Sprite) ], t.prototype, "propsIcon", void 0);
r([ f(cc.Label) ], t.prototype, "propsLab", void 0);
r([ f(cc.SpriteFrame) ], t.prototype, "propsIconArr", void 0);
r([ f(cc.Label) ], t.prototype, "videoCountLab", void 0);
r([ f(cc.Label) ], t.prototype, "coinLab", void 0);
r([ f(cc.Label) ], t.prototype, "coinCountLab", void 0);
return r([ a.registerUIPath("prefabSbn/PropsNoView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../HiFive/Views/PlayboardEnum": "PlayboardEnum",
"../../UIManager/UIManager": "UIManager",
"../../common/BaseUI": "BaseUI",
"../../utils/CoreSBN": "CoreSBN"
} ],
Prop: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "be62eEMsYBGJpD3lweXle+S", "Prop");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Prop = void 0;
var a = e("../../Views/PlayboardEnum"), c = e("../../../UIManager/UIManager"), s = e("../../../utils/CoreSBN"), l = e("../../../config/EnumDeclareSg"), u = e("../../../game/view/PropsNoView"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.type = a.PlayBoardPropsEnum.Package;
t.tag_video = null;
t.tag_Node = null;
t.tag_lock = null;
t.count_label = null;
t.usedHandler = null;
t.addHandler = null;
t._lockType = 0;
t._self_count = 0;
t._limit_count = 0;
t._use_count = 0;
return t;
}
t.prototype.setUsedPropHandler = function(e, t) {
this.addHandler = t;
this.usedHandler = e;
};
t.prototype.start = function() {};
t.prototype.startInit = function() {
this._use_count = 0;
this._limit_count = 99999;
if (s.CoreSBN.gameData.gameType == l.GameTypeSBN.Battle) {
this._lockType = 1;
this._self_count = 1;
this._limit_count = 1;
} else this.type == a.PlayBoardPropsEnum.AddHole && (this._limit_count = 2);
this.flush();
};
t.prototype.useProp = function() {
this._use_count++;
this.flush();
};
t.prototype.flush = function() {
this.tag_Node.active = this.tag_video.active = this.tag_lock.active = !1;
s.CoreSBN.gameData.gameType == l.GameTypeSBN.Battle ? this._lockType = 1 : this._self_count = s.CoreSBN.gameData.props[this.type + ""] || 0;
if (s.CoreSBN.gameData.getSettingByKey(a.PropsLocalQianzhuiLock + this.type) || s.CoreSBN.gameData.gameType === l.GameTypeSBN.Battle) {
this._lockType = 2;
if (this._self_count <= 0 && this._use_count < this._limit_count) this.tag_video.active = !0; else if (this._self_count > 0 && this._use_count < this._limit_count) {
this.tag_Node.active = !0;
this.count_label.string = "" + this._self_count;
}
} else {
this._lockType = 0;
this.tag_lock.active = !0;
}
};
t.prototype.onBtnClick = function() {
if (0 != this._lockType) if (this._self_count > 0 && this._use_count < this._limit_count) {
s.CoreSBN.gameData.gameType == l.GameTypeSBN.Battle && this.useProp();
this.usedHandler && this.usedHandler(this);
} else this._self_count <= 0 && this._use_count < this._limit_count ? u.default.open({
param: {
type: this.type
}
}) : c.default.show_toast("This Prop has been used up"); else c.default.show_toast("Prop not unlocked");
};
r([ h({
type: cc.Enum(a.PlayBoardPropsEnum)
}) ], t.prototype, "type", void 0);
r([ h(cc.Node) ], t.prototype, "tag_video", void 0);
r([ h(cc.Node) ], t.prototype, "tag_Node", void 0);
r([ h(cc.Node) ], t.prototype, "tag_lock", void 0);
r([ h(cc.Label) ], t.prototype, "count_label", void 0);
return r([ f ], t);
}(cc.Component);
o.Prop = d;
cc._RF.pop();
}, {
"../../../UIManager/UIManager": "UIManager",
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../game/view/PropsNoView": "PropsNoView",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/PlayboardEnum": "PlayboardEnum"
} ],
PublicCommenMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0eed6KrhH9GU6/woTiywc3S", "PublicCommenMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.PublicCommenMgr = void 0;
var r = e("../utils/CoreSBN"), a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.getRandomInt = function(e, t, o) {
void 0 === o && (o = 2);
e = Math.ceil(e);
t = Math.floor(t);
switch (o) {
case 1:
return Math.floor(Math.random() * (t - e)) + e;

case 2:
return Math.floor(Math.random() * (t - e + 1)) + e;

case 3:
return Math.floor(Math.random() * (t - e - 1)) + e + 1;
}
return 0;
};
t.prototype.getRandomByObjectList = function(e, t) {
for (var o = e.slice(), n = [], i = 0; i < t; i++) {
var r = this.getRandomInt(0, o.length, 1);
n.push(o.splice(r, 1)[0]);
}
return n;
};
t.prototype.getRandomByObjectListOne = function(e) {
return e && 0 !== e.length ? e[Math.floor(Math.random() * e.length)] : null;
};
t.prototype.stringToNumber = function(e) {
var t = Number(e);
return !isNaN(t) && isFinite(t) ? t : 0;
};
t.prototype.cjangeScreen = function() {
cc.view.getCanvasSize().width / cc.view.getCanvasSize().height >= r.CoreSBN.config.retio ? cc.view.setDesignResolutionSize(r.CoreSBN.config.ipadWid, r.CoreSBN.config.ipadHei, cc.ResolutionPolicy.FIXED_HEIGHT) : cc.view.setDesignResolutionSize(r.CoreSBN.config.phoneWid, r.CoreSBN.config.phoneHei, cc.ResolutionPolicy.FIXED_WIDTH);
};
t.prototype.isAdaptationViewLong = function() {
return !(cc.winSize.height / cc.winSize.width < 1.9);
};
t.prototype.create_beisizer = function(e, t, o, n, i) {
var r = 3.14159 * i / 180, a = t.x + (o.x - t.x) / 4, c = cc.v2(a, n + t.y + Math.cos(r) * a), s = t.x + (o.x - t.x) / 2, l = cc.v2(s, n + t.y + Math.cos(r) * s);
return cc.bezierTo(e, [ c, l, o ]).easing(cc.easeInOut(.5));
};
t.prototype.getRandomValueChangeByArr = function(e) {
if (!e || 0 === e.length) return null;
var t = Math.floor(Math.random() * e.length), o = e[t];
e.splice(t, 1);
return o;
};
t.prototype.formatSeconds = function(e) {
var t = Math.floor(e / 3600), o = Math.floor(e % 3600 / 60), n = Math.floor(e % 60);
return (t < 10 ? "0" + t : "" + t) + ":" + (o < 10 ? "0" + o : "" + o) + ":" + (n < 10 ? "0" + n : "" + n);
};
t.prototype.formatSecondsTomin = function(e) {
var t = Math.floor(e / 3600), o = Math.floor(e % 3600 / 60), n = Math.floor(e % 60), i = o < 10 ? "0" + o : "" + o, r = n < 10 ? "0" + n : "" + n;
return t <= 0 ? i + ":" + r : (t < 10 ? "0" + t : "" + t) + ":" + i + ":" + r;
};
t.prototype.getCurLingdianTime = function() {
var e = new Date();
e.setHours(0, 0, 0, 0);
return e.getTime();
};
return t;
}(e("../utils/IBassInsClass").default);
o.PublicCommenMgr = a;
cc._RF.pop();
}, {
"../utils/CoreSBN": "CoreSBN",
"../utils/IBassInsClass": "IBassInsClass"
} ],
Random: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "26055Qq4zdAS65DkiWHv/kd", "Random");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e(e) {
this.seed = new Date().getTime();
this.seed = e;
this.seed || 0 == this.seed || (this.seed = new Date().getTime());
}
Object.defineProperty(e.prototype, "value", {
get: function() {
return this.range(0, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "insideUnitCircle", {
get: function() {
var e = this.range(0, 360), t = this.range(1, 0);
return {
x: t * Math.cos(e * Math.PI / 180),
y: t * Math.sin(e * Math.PI / 180)
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onUnitCircle", {
get: function() {
var e = this.range(0, 360);
return {
x: Math.cos(e * Math.PI / 180),
y: Math.sin(e * Math.PI / 180)
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "value", {
get: function() {
return this.range(1, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "insideUnitCircle", {
get: function() {
var e = this.range(0, 360), t = this.range();
return {
x: t * Math.cos(e * Math.PI / 180),
y: t * Math.sin(e * Math.PI / 180)
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "onUnitCircle", {
get: function() {
var e = this.range(0, 360);
return {
x: Math.cos(e * Math.PI / 180),
y: Math.sin(e * Math.PI / 180)
};
},
enumerable: !1,
configurable: !0
});
e.range = function(t, o) {
void 0 === t && (t = 0);
void 0 === o && (o = 1);
e.seed || 0 == e.seed || (e.seed = new Date().getTime());
o = o || 1;
t = t || 0;
e.seed = (9301 * e.seed + 49297) % 233280;
return t + e.seed / 233280 * (o - t);
};
e.rangeInt = function(t, o) {
var n = o - t, i = e.range(0, 1);
return t + Math.round(i * n);
};
e.rangeIntByArr = function(t) {
return t.length < 2 ? 0 : e.rangeInt(t[0], t[1]);
};
e.rangeByArr = function(t) {
return t.length < 2 ? 0 : e.range(t[0], t[1]);
};
e.rangeFromArr = function(t) {
return t[e.rangeInt(0, t.length - 1)];
};
e.getValueByWeight = function(t, o) {
for (var n = 0, i = 0, r = o; i < r.length; i++) n += r[i];
for (var a = e.range(0, n), c = 0, s = 0; s < t.length; s++) {
var l = o[s] + c;
if (a <= l) return t[s];
c = l;
}
return null;
};
e.uniformValue = function(e, t) {
void 0 === e && (e = 0);
void 0 === t && (t = 1);
return e + (t - e) * this._uniform(Date.now());
};
e._uniform = function(e) {
return (e = (9301 * e + 49297) % 233280) / 233280;
};
e.prototype.range = function(e, t) {
this.seed || 0 == this.seed || (this.seed = new Date().getTime());
t = t || 1;
e = e || 0;
this.seed = (9301 * this.seed + 49297) % 233280;
return e + this.seed / 233280 * (t - e);
};
e.seed = new Date().getTime();
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
RankConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ff22691CP1KCK6uQ53guDCj", "RankConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.RankConfig = void 0;
(function(e) {
var t = {
1: {
rankYype: 1,
star: 10,
timeArr: [ 5, 8 ]
},
2: {
rankYype: 1,
star: 10,
timeArr: [ 5, 8 ]
},
3: {
rankYype: 1,
star: 10,
timeArr: [ 5, 8 ]
},
4: {
rankYype: 1,
star: 10,
timeArr: [ 5, 8 ]
},
5: {
rankYype: 1,
star: 10,
timeArr: [ 5, 8 ]
},
6: {
rankYype: 2,
star: 10,
timeArr: [ 4, 6 ]
},
7: {
rankYype: 2,
star: 10,
timeArr: [ 4, 6 ]
},
8: {
rankYype: 2,
star: 10,
timeArr: [ 4, 6 ]
},
9: {
rankYype: 2,
star: 10,
timeArr: [ 4, 6 ]
},
10: {
rankYype: 2,
star: 10,
timeArr: [ 4, 6 ]
},
11: {
rankYype: 3,
star: 10,
timeArr: [ 3, 5 ]
},
12: {
rankYype: 3,
star: 10,
timeArr: [ 3, 5 ]
},
13: {
rankYype: 3,
star: 10,
timeArr: [ 3, 5 ]
},
14: {
rankYype: 3,
star: 10,
timeArr: [ 3, 5 ]
},
15: {
rankYype: 3,
star: 10,
timeArr: [ 3, 5 ]
},
16: {
rankYype: 4,
star: 10,
timeArr: [ 2, 4 ]
},
17: {
rankYype: 4,
star: 10,
timeArr: [ 2, 4 ]
},
18: {
rankYype: 4,
star: 10,
timeArr: [ 2, 4 ]
},
19: {
rankYype: 4,
star: 10,
timeArr: [ 2, 4 ]
},
20: {
rankYype: 4,
star: 10,
timeArr: [ 2, 4 ]
}
}, o = -1;
e.query = function(e) {
return t[e + ""];
};
e.size = function() {
if (o < 0) {
o = 0;
for (var e in n()) ++o;
}
return o;
};
e.getRankDataByStar = function(e) {
for (var t = Object.values(n()), o = 0, i = 0; i < t.length; i++) if (e <= (o += t[i].star)) return t[i];
if (e > o) return t[t.length - 1];
};
e.getMaxStar = function() {
for (var e = Object.values(n()), t = 0, o = 0; o < e.length; o++) t += e[o].star;
return t;
};
e.getRankByStar = function(e) {
for (var t = Object.values(n()), o = 0, i = 0, r = 0, a = [], c = 0; c < t.length; c++) {
if (!r || r !== t[c].rankYype) {
r = t[c].rankYype;
i = 0;
}
i++;
if (e <= (o += t[c].star)) {
a.push(t[c].rankYype);
a.push(i);
a.push(e - o + t[c].star);
break;
}
}
if (e > o) {
a.push(t[t.length - 1].rankYype);
a.push(i);
a.push(t[t.length - 1].star);
}
return a;
};
e.getRandInrByStar = function(e) {
for (var t = [], o = 0, i = Object.values(n()), r = 0; r < i.length; r++) if (e <= (o += i[r].star)) {
var a = o - i[r].star, c = o;
t.push(a);
t.push(c);
break;
}
if (0 == t.length) {
t.push(o - i[i.length - 1].star);
t.push(o);
}
console.log("getRandInrByStar==", t);
return t;
};
function n() {
return t;
}
e.getDatas = n;
})(o.RankConfig || (o.RankConfig = {}));
cc._RF.pop();
}, {} ],
RankingBattleItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6b405xsgrJBJJf+YoqQ0ESs", "RankingBattleItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/VirItemRender"), c = e("../../manager/UserDataSBNMgr"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bg = null;
t.bgArr = [];
t.indexBg = null;
t.roSp = null;
t.indexLab = null;
t.nameLab = null;
t.starLab = null;
t._writhColor = cc.Color.WHITE;
t._zongsetColor = new cc.Color(164, 72, 72, 255);
return t;
}
t.prototype.dataChanged = function() {
this.data.id == c.default.ins.curRankId ? this.bg.spriteFrame = this.bgArr[1] : this.bg.spriteFrame = this.bgArr[0];
this.indexLab.string = "" + this.data.index;
if (this.data.index <= 5) {
this.indexBg.node.active = !0;
this.indexLab.node.color = this._writhColor;
} else {
this.indexBg.node.active = !1;
this.indexLab.node.color = this._zongsetColor;
}
this.nameLab.string = this.data.name;
this.starLab.string = "" + this.data.star;
var e = s.CoreSBN.res.getImgAsset(s.CoreSBN.config.battleBundle, "" + c.UserDataResPrefixSBN.head + this.data.headIndex);
e && (this.roSp.spriteFrame = e);
};
r([ p(cc.Sprite) ], t.prototype, "bg", void 0);
r([ p(cc.SpriteFrame) ], t.prototype, "bgArr", void 0);
r([ p(cc.Sprite) ], t.prototype, "indexBg", void 0);
r([ p(cc.Sprite) ], t.prototype, "roSp", void 0);
r([ p(cc.Label) ], t.prototype, "indexLab", void 0);
r([ p(cc.Label) ], t.prototype, "nameLab", void 0);
r([ p(cc.Label) ], t.prototype, "starLab", void 0);
return r([ u ], t);
}(a.default);
o.default = f;
cc._RF.pop();
}, {
"../../commen/VirItemRender": "VirItemRender",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
RankingBattleTopItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "70bcfHlR+ZIpaXU9ElTPbWO", "RankingBattleTopItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../manager/UserDataSBNMgr"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.roSp = null;
t.nameLab = null;
t.starLab = null;
t._writhColor = cc.Color.WHITE;
t._zongsetColor = new cc.Color(164, 72, 72, 255);
t.data = null;
return t;
}
t.prototype.step = function(e) {
this.data = e;
this.dataChanged();
};
t.prototype.dataChanged = function() {
this.nameLab.string = this.data.name;
this.starLab.string = "" + this.data.star;
var e = c.CoreSBN.res.getImgAsset(c.CoreSBN.config.battleBundle, "" + a.UserDataResPrefixSBN.head + this.data.headIndex);
e && (this.roSp.spriteFrame = e);
};
r([ u(cc.Sprite) ], t.prototype, "roSp", void 0);
r([ u(cc.Label) ], t.prototype, "nameLab", void 0);
r([ u(cc.Label) ], t.prototype, "starLab", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
RankingDisItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "94117gHKw5OnYOuDbiPIbMo", "RankingDisItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../manager/UserDataSBNMgr"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = s.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.iconSp = null;
t.iconSpArr = [];
t.contentSp = null;
t.contentLab = null;
return t;
}
t.prototype.step = function(e) {
this.iconSp.spriteFrame = this.iconSpArr[e[0] - 1];
var t = 5 * (e[0] - 1) + e[1] - 1;
this.contentSp.spriteFrame = c.CoreSBN.res.getImgAsset(c.CoreSBN.config.battleBundle, "" + a.UserDataResPrefixSBN.rank + t);
switch (e[0]) {
case 1:
this.contentLab.string = "Bronze";
break;

case 2:
this.contentLab.string = "Silver";
break;

case 3:
this.contentLab.string = "Gold";
break;

case 4:
this.contentLab.string = "Diamond";
}
};
r([ u(cc.Sprite) ], t.prototype, "iconSp", void 0);
r([ u(cc.SpriteFrame) ], t.prototype, "iconSpArr", void 0);
r([ u(cc.Sprite) ], t.prototype, "contentSp", void 0);
r([ u(cc.Label) ], t.prototype, "contentLab", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
RankingView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1f203KfxGxDjYcntLYjuJzf", "RankingView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/ScreollVirtualView"), c = e("../../config/RankConfig"), s = e("../../manager/UserDataSBNMgr"), l = e("../battle/RankingBattleTopItem"), u = e("../battle/RankingDisItem"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.topItemArr = [];
t.scrollView = null;
t.rankDis = null;
t._rankData = [];
t._top3data = [];
t._otherdata = [];
t._homeView = null;
return t;
}
t.prototype.start = function() {
var e = c.RankConfig.getRankByStar(s.default.ins.LastRank) || [], t = c.RankConfig.getRankByStar(s.default.ins.Rank) || [];
if (e[0] != t[0] || e[1] != t[1]) {
s.default.ins.updateRankData(s.default.ins.Rank);
s.default.ins.setLastRank(s.default.ins.Rank);
}
this._rankData = s.default.ins.rankData;
for (var o = 0; o < this._rankData.length; o++) if ((r = this._rankData[o]).id == s.default.ins.curRankId) {
this._rankData[o].name = s.default.ins.UserName;
this._rankData[o].headIndex = s.default.ins.UserHead;
this._rankData[o].star = s.default.ins.Rank;
break;
}
this._rankData.sort(function(e, t) {
return t.star !== e.star ? t.star - e.star : e.id == s.default.ins.curRankId ? -1 : t.id == s.default.ins.curRankId ? 1 : 0;
});
for (var n = 0, i = 0; i < this.topItemArr.length; i++) {
var r;
(r = this._rankData[i]) && this.topItemArr[i].step(r);
}
for (;n < this._rankData.length; n++) if (n >= 3) {
this._rankData[n].index = n;
this._otherdata.push(this._rankData[n]);
}
this.scrollView.refreshData(this._otherdata);
var a = c.RankConfig.getRankByStar(s.default.ins.Rank);
this.rankDis.step(a);
console.log("排名数据", this._rankData, this._top3data, this._otherdata);
};
t.prototype.registView = function(e) {
this._homeView = e;
};
t.prototype.onStartBtn = function() {
this._homeView && this._homeView.battleStart();
};
t.prototype.closeView = function() {
this.node.destroy();
};
r([ h(l.default) ], t.prototype, "topItemArr", void 0);
r([ h(a.default) ], t.prototype, "scrollView", void 0);
r([ h(u.default) ], t.prototype, "rankDis", void 0);
return r([ f ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../commen/ScreollVirtualView": "ScreollVirtualView",
"../../config/RankConfig": "RankConfig",
"../../manager/UserDataSBNMgr": "UserDataSBNMgr",
"../battle/RankingBattleTopItem": "RankingBattleTopItem",
"../battle/RankingDisItem": "RankingDisItem"
} ],
RbRateListItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b48461TlmFFdadZggmZWebT", "RbRateListItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../Spript/LabelColorPicker"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.passLv = null;
t.yuan = null;
t.equal = null;
t.rateLb = null;
t.line = null;
return t;
}
t.prototype.setInfo = function(e, t, o) {
this.passLv.getComponent(cc.Label).string = "通过第" + e + "关";
this.rateLb.getComponent(cc.Label).string = t + "元";
var n = o ? 0 : 1;
this.passLv.select(n);
this.yuan.select(n);
this.equal.select(n);
this.rateLb.select(n);
};
r([ l(a.default) ], t.prototype, "passLv", void 0);
r([ l(a.default) ], t.prototype, "yuan", void 0);
r([ l(a.default) ], t.prototype, "equal", void 0);
r([ l(a.default) ], t.prototype, "rateLb", void 0);
r([ l(cc.Node) ], t.prototype, "line", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../Spript/LabelColorPicker": "LabelColorPicker"
} ],
ResSBNMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "908f9zKe2ZLhote2CVQEuFO", "ResSBNMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../config/EnumDeclareSg"), s = e("../utils/IBassInsClass"), l = e("../utils/CoreSBN"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.comBundle = "comBundle";
t.BBundle = "BBundle";
t._abBundleMap = {};
t._altsAssetObj = {};
t._jsonAssetObj = {};
t._clipAssetObj = {};
t._imgAsset = {};
return t;
}
t.prototype.loadBundle = function(e, t) {
return r(this, void 0, Promise, function() {
var o, n, i = this;
return a(this, function() {
if (this._abBundleMap[e]) return [ 2 ];
this._abBundleMap[e] = null;
this._altsAssetObj[e] || (this._altsAssetObj[e] = {});
this._jsonAssetObj[e] || (this._jsonAssetObj[e] = {});
this._clipAssetObj[e] || (this._clipAssetObj[e] = {});
this._imgAsset[e] || (this._imgAsset[e] = {});
o = l.CoreSBN.gameData.loadResPro;
n = e;
return [ 2, new Promise(function(r) {
cc.assetManager.loadBundle("" + e, function(e, a) {
if (e) console.log("[" + n + "] load error, error==", e); else {
i._abBundleMap[n] = a;
l.CoreSBN.gameData.loadResPro = o + t;
r && r();
}
});
}) ];
});
});
};
t.prototype.loadRes = function(e, t, o) {
void 0 === o && (o = 0);
return r(this, void 0, Promise, function() {
var n, i = this;
return a(this, function() {
if (!this._abBundleMap[e]) return [ 2 ];
n = 0;
return [ 2, new Promise(function(r) {
i._abBundleMap[e].loadDir(t.path, t.type, function(e, t) {
if (o > 0) {
var i = o * e / t;
if (n < i) {
l.CoreSBN.gameData.loadResPro = l.CoreSBN.gameData.loadResPro + i - n;
n = i;
}
}
}, function(o, n) {
if (o) {
console.log("Error===", o);
r && r();
} else {
var a;
if (t == c.AssetType.Prefab || t == c.AssetType.ItemPrefab) for (var s = 0; s < n.length; s++) {
(a = n[s]).addRef();
l.CoreSBN.pool.registerPrefab(e, a.data.name, a);
}
if (t == c.AssetType.Sound) for (s = 0; s < n.length; s++) {
a = n[s];
i._clipAssetObj[e] && (i._clipAssetObj[e][a.name] || (i._clipAssetObj[e][a.name] = a));
}
if (t == c.AssetType.Atlas) for (s = 0; s < n.length; s++) {
(a = n[s]).addRef();
i._clipAssetObj[e] && (i._altsAssetObj[e][a.name] || (i._altsAssetObj[e][a.name] = a));
}
if (t == c.AssetType.Json) for (s = 0; s < n.length; s++) {
(a = n[s]).addRef();
i._clipAssetObj[e] && (i._jsonAssetObj[e][a.name] || (i._jsonAssetObj[e][a.name] = a));
}
if (t == c.AssetType.Sprites) for (s = 0; s < n.length; s++) {
(a = n[s]).addRef();
i._imgAsset[e] && (i._imgAsset[e][a.name] || (i._imgAsset[e][a.name] = a));
}
r && r();
}
});
}) ];
});
});
};
t.prototype.loadImgList = function(e, t, o, n, i) {
void 0 === i && (i = ".jpg");
return r(this, void 0, void 0, function() {
var r = this;
return a(this, function() {
console.log("load img list", JSON.stringify(t));
return [ 2, Promise.all(t.map(function(t) {
return r.loadImg(e, t.toString(), l.CoreSBN.config.remoteCur + "" + t + i);
})).then(function() {
console.log("img succes");
o && o();
}).catch(function(e) {
console.error("img error:", e);
n && n();
}) ];
});
});
};
t.prototype.loadImg = function(e, t, o) {
return r(this, void 0, void 0, function() {
var n = this;
return a(this, function() {
this._imgAsset[e] || (this._imgAsset[e] = {});
return this._imgAsset[e][t] ? [ 2 ] : e == l.CoreSBN.config.commenBundle ? [ 2, new Promise(function(o, i) {
n._abBundleMap[e].load("preload/tex/" + t, cc.SpriteFrame, function() {}, function(r, a) {
if (r) {
console.log("[loadimg] error===", t);
i && i();
} else if (a && n._imgAsset[e][t] != a.name) {
n._imgAsset[e][t] = a;
o && o();
} else n._imgAsset[e][t] && o && o();
});
}) ] : [ 2, new Promise(function(i, r) {
cc.assetManager.loadRemote(o, function(o, a) {
if (o) {
console.log("[loadimg] error===", t);
r && r();
} else if (a && n._imgAsset[e][t] != a.name) {
var c = new cc.SpriteFrame(a);
a.addRef();
n._imgAsset[e][t] = c;
i && i();
} else n._imgAsset[e][t] && i && i();
});
}) ];
});
});
};
t.prototype.lpreLadImgList = function(e, t, o) {
var n = this;
void 0 === o && (o = ".jpg");
console.log("load img list", JSON.stringify(t));
return Promise.all(t.map(function(t) {
return n.preloadImg(e, t.toString(), l.CoreSBN.config.remoteCur + "" + t + o);
}));
};
t.prototype.preloadImg = function(e, t, o) {
var n = this;
return new Promise(function(i) {
n._imgAsset[e][t] || e == l.CoreSBN.config.commenBundle ? i && i() : cc.assetManager.preloadAny(o);
});
};
t.prototype.getJson = function(e, t) {
this._jsonAssetObj[e] || (this._jsonAssetObj[e] = {});
return this._jsonAssetObj[e][t];
};
t.prototype.setJson = function(e, t, o) {
this._jsonAssetObj[e] || (this._jsonAssetObj[e] = {});
this._jsonAssetObj[e][t] = o;
};
t.prototype.getClip = function(e, t) {
this._clipAssetObj[e] || (this._clipAssetObj[e] = {});
return this._clipAssetObj[e][t];
};
t.prototype.getImgAsset = function(e, t) {
this._imgAsset[e] || (this._imgAsset[e] = {});
return this._imgAsset[e][t];
};
return t;
}(s.default);
o.default = u;
cc._RF.pop();
}, {
"../config/EnumDeclareSg": "EnumDeclareSg",
"../utils/CoreSBN": "CoreSBN",
"../utils/IBassInsClass": "IBassInsClass"
} ],
ResultAlbumView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14672MXST5Kz5kHG/g3+WFh", "ResultAlbumView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../config/EnumDeclareSg"), s = e("../../manager/SDKbridgeSBNMgr"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgSprite = null;
t.downNode = null;
t.saveImgProgress = null;
t._levPic = 0;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.onEnable = function() {
l.CoreSBN.message.on(c.EventNameSBN.save_img_status, this.onImageSaveStatus, this);
};
t.prototype.onDisable = function() {
l.CoreSBN.message.removeAll(this);
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this._levPic = l.CoreSBN.gameData.levelPic;
this.loadBg();
};
t.prototype.loadBg = function() {
var e = l.CoreSBN.res.getImgAsset(l.CoreSBN.config.remoteBundle, "" + this._levPic);
e && (this.bgSprite.spriteFrame = e);
};
t.prototype.onImageSaveStatus = function(e, t) {
if (this.node && this.node.isValid && this.node.active) if (e == s.SaveLocalStatus.SaveSuc) {
this.saveImgProgress.progress = 1;
this.saveImgProgress.node.active = !1;
} else if (e == s.SaveLocalStatus.SaveFail) {
this.saveImgProgress.progress = 0;
this.saveImgProgress.node.active = !1;
} else e == s.SaveLocalStatus.GetPrmi || e == s.SaveLocalStatus.SaveProgress && (this.saveImgProgress.progress = t || 0);
};
t.prototype.downAdBtn = function() {
l.CoreSBN.ad.showRewardVideo(this.onReward.bind(this), this.onfaild.bind(this));
};
t.prototype.onReward = function() {
if (this.node && this.node.isValid) {
l.CoreSBN.sdk.downloadJpegImageToDevice(l.CoreSBN.config.saveUrl() + (this._levPic + ".jpg"), null, null);
this.saveImgProgress.node.active = !0;
this.saveImgProgress.progress = 0;
}
};
t.prototype.onfaild = function() {};
t.prototype.nextBtn = function() {
this.on_close_call();
l.CoreSBN.gameData.selectImgView();
};
t.prototype.omCloseBtn = function() {
this.on_close_call();
l.CoreSBN.gameData.changeScene(c.SceneNameSBN.Home);
};
r([ f(cc.Sprite) ], t.prototype, "bgSprite", void 0);
r([ f(cc.Node) ], t.prototype, "downNode", void 0);
r([ f(cc.ProgressBar) ], t.prototype, "saveImgProgress", void 0);
return r([ a.registerUIPath("prefabSbn/ResultAlbumView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../manager/SDKbridgeSBNMgr": "SDKbridgeSBNMgr",
"../../utils/CoreSBN": "CoreSBN"
} ],
RewardCommenItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6fb5hoHctA6o20LoVC/2kr", "RewardCommenItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = e("../../HiFive/Views/PlayboardEnum"), s = e("../../utils/CoreSBN"), l = cc._decorator, u = l.ccclass, p = l.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgspine = null;
t.iconSp = null;
t.iconSpArr = [];
t.valueLab = null;
return t;
}
t.prototype.initData = function(e, t) {
void 0 === t && (t = !0);
var o = c.PlayBoardPropsEnum.AddHole;
switch (e.type) {
case a.RewardTypeSBN.coin:
this.iconSp.spriteFrame = this.iconSpArr[0];
t && s.CoreSBN.gameData.addCoin(e.value);
break;

case a.RewardTypeSBN.prop1:
this.iconSp.spriteFrame = this.iconSpArr[1];
o = c.PlayBoardPropsEnum.AddHole;
t && s.CoreSBN.gameData.addProp(o, e.value);
break;

case a.RewardTypeSBN.prop2:
this.iconSp.spriteFrame = this.iconSpArr[2];
o = c.PlayBoardPropsEnum.Clean;
t && s.CoreSBN.gameData.addProp(o, e.value);
break;

case a.RewardTypeSBN.prop3:
this.iconSp.spriteFrame = this.iconSpArr[3];
o = c.PlayBoardPropsEnum.Package;
t && s.CoreSBN.gameData.addProp(o, e.value);
}
this.valueLab.string = "+" + e.value;
};
t.prototype.changeAni = function() {
this.bgspine.setAnimation(0, a.SpineNameSBN.Reward_bg_enter, !0);
};
t.prototype.start = function() {
var e = this;
this.bgspine.setCompleteListener(function(t) {
t.animation.name == a.SpineNameSBN.Reward_bg_enter && e.bgspine.setAnimation(0, a.SpineNameSBN.Reward_bg_loop, !0);
});
};
r([ p(sp.Skeleton) ], t.prototype, "bgspine", void 0);
r([ p(cc.Sprite) ], t.prototype, "iconSp", void 0);
r([ p(cc.SpriteFrame) ], t.prototype, "iconSpArr", void 0);
r([ p(cc.Label) ], t.prototype, "valueLab", void 0);
return r([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../HiFive/Views/PlayboardEnum": "PlayboardEnum",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN"
} ],
RewardCommenView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2dc95sC0opMCZf6N2vOktue", "RewardCommenView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../config/EnumDeclareSg"), s = e("../../game/item/RewardCommenItem"), l = e("./FlyImageComp"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgspine = null;
t.coinNode = null;
t.layout = null;
t.tipsLab = null;
t.rewardItem = null;
t.touchNode = null;
t.multipe = 1;
t._isClick = !1;
t._isHaveFlyValue = 0;
t._rewardData = [];
return t;
}
t.prototype.start = function() {
var t = this;
e.prototype.start.call(this);
this.bgspine.setCompleteListener(function(e) {
e.animation.name == c.SpineNameSBN.Reward && (t._isClick = !0);
});
this.bgspine.setEventListener(function(e, o) {
switch (o.data.name) {
case c.SpineNameSBN.Reward_event:
for (var n = 0; n < t.layout.childrenCount; n++) {
var i = t.layout.children[n];
i && i.getComponent(s.default).changeAni();
}
t.tipsLab.getComponent(cc.Animation).play();
}
});
};
t.prototype.onEnable = function() {
this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.onDisable = function() {
this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this._rewardData = [];
this._isClick = !1;
this.bgspine.setAnimation(0, c.SpineNameSBN.Reward, !1);
this.layout.removeAllChildren();
var o = null == t ? void 0 : t.param;
this._isHaveFlyValue = 0;
if (o) {
this._rewardData = o;
for (var n = 0; n < o.length; n++) {
var i = !0;
if (o[n].type == c.RewardTypeSBN.coin) {
this._isHaveFlyValue = o[n].value;
i = !1;
}
var r = cc.instantiate(this.rewardItem);
r.getComponent(s.default).initData(o[n], i);
this.layout.addChild(r);
}
}
};
t.prototype.onTouchStart = function() {
if (this._isClick) if (this._isHaveFlyValue) {
var e = this.coinNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
l.default.open({
value: this._isHaveFlyValue,
wardPos: e,
imgType: c.RewardTypeSBN.coin,
callback: null
}, !0);
this.closeSBNView();
} else this.closeSBNView();
};
t.prototype.closeSBNView = function() {
this.on_close_call();
};
r([ f(sp.Skeleton) ], t.prototype, "bgspine", void 0);
r([ f(cc.Node) ], t.prototype, "coinNode", void 0);
r([ f(cc.Node) ], t.prototype, "layout", void 0);
r([ f(cc.Node) ], t.prototype, "tipsLab", void 0);
r([ f(cc.Prefab) ], t.prototype, "rewardItem", void 0);
r([ f(cc.Node) ], t.prototype, "touchNode", void 0);
return r([ a.registerUIPath("prefabSbn/RewardCommenView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../game/item/RewardCommenItem": "RewardCommenItem",
"./FlyImageComp": "FlyImageComp"
} ],
SDKSbnMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eec15gYW8tP/4ArNAeXnu7F", "SDKSbnMgr");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SDKSbnMgr = void 0;
var n = e("../utils/CoreSBN"), i = e("./SDKbridgeSBNMgr"), r = function() {
function e() {
e._ins = this;
}
Object.defineProperty(e, "ins", {
get: function() {
e._ins || (e._ins = new e());
return e._ins;
},
enumerable: !1,
configurable: !0
});
e.prototype.vibrateShort = function(e) {
void 0 === e && (e = 1e3);
cc.sys.os, cc.sys.OS_IOS;
};
e.prototype.openUrl = function(e) {
cc.sys.os == cc.sys.OS_IOS || cc.sys.openURL(e);
};
e.prototype.selfIOSEvent = function(e, t) {
void 0 === t && (t = "");
cc.sys.os, cc.sys.OS_IOS;
};
e.prototype.isAudit = function() {
cc.sys.os, cc.sys.OS_IOS;
return !1;
};
e.prototype.getInviteCode = function() {
cc.sys.os, cc.sys.OS_IOS;
return "";
};
e.prototype.isIpad = function() {
cc.sys.os, cc.sys.OS_IOS;
return !1;
};
e.prototype.log = function() {
cc.sys.os, cc.sys.OS_IOS;
};
e.prototype.getVersion = function() {
cc.sys.os, cc.sys.OS_IOS;
return "1.0.0";
};
e.prototype.trackIOSEvent = function() {
cc.sys.os, cc.sys.OS_IOS;
};
e.prototype.downloadJpegImageToDevice = function(e, t) {
cc.sys.os == cc.sys.OS_IOS && (t == i.SaveLocalType.Img ? jsb.reflection.callStaticMethod("", "", t, e, "cc.js.getClassByName('SDKSbnMgr').saveImageCallback") : t == i.SaveLocalType.Video && jsb.reflection.callStaticMethod("", "", t, e, "cc.js.getClassByName('SDKSbnMgr').saveVideoCallback"));
};
e.prototype.saveImageCallback = function(e) {
n.CoreSBN.sdk.saveImgcallback(e);
};
e.prototype.saveVideoCallback = function(e) {
n.CoreSBN.sdk.saveVideocallback(e);
};
e._ins = null;
return e;
}();
o.SDKSbnMgr = r;
cc.js.setClassName("SDKSbnMgr", r);
cc._RF.pop();
}, {
"../utils/CoreSBN": "CoreSBN",
"./SDKbridgeSBNMgr": "SDKbridgeSBNMgr"
} ],
SDKbridgeSBNMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dbda4BmUUtKaZb4CqmL2JLm", "SDKbridgeSBNMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SDKbridgeSBNMgr = o.SaveLocalStatus = o.SaveLocalType = void 0;
var r, a, c = e("../config/EnumDeclareSg"), s = e("../utils/CoreSBN"), l = e("../utils/IBassInsClass"), u = e("./SDKSbnMgr");
(function(e) {
e.Img = "0";
e.Video = "1";
})(r = o.SaveLocalType || (o.SaveLocalType = {}));
(function(e) {
e.SaveSuc = "1";
e.SaveFail = "2";
e.GetPrmi = "3";
e.SaveProgress = "4";
})(a = o.SaveLocalStatus || (o.SaveLocalStatus = {}));
var p = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.sdkInitLis = function() {
s.CoreSBN.config.gameVersion = this.getVersion();
};
t.prototype.vibrateShort = function(e) {
void 0 === e && (e = 1e3);
u.SDKSbnMgr.ins.vibrateShort(e);
};
t.prototype.openUrl = function(e) {
u.SDKSbnMgr.ins.openUrl(e);
};
t.prototype.selfIOSEvent = function(e, t) {
void 0 === t && (t = "");
u.SDKSbnMgr.ins.selfIOSEvent(e, t);
};
t.prototype.isAudit = function() {
return u.SDKSbnMgr.ins.isAudit();
};
t.prototype.getInviteCode = function() {
return u.SDKSbnMgr.ins.getInviteCode();
};
t.prototype.isIpad = function() {
return u.SDKSbnMgr.ins.isIpad();
};
t.prototype.log = function(e) {
u.SDKSbnMgr.ins.log(e);
};
t.prototype.getVersion = function() {
return u.SDKSbnMgr.ins.getVersion() || "1.0.0";
};
t.prototype.trackIOSEvent = function(e, t) {
void 0 === t && (t = null);
var o = JSON.stringify(t);
console.log("trackIOSEvent   --", e, o);
u.SDKSbnMgr.ins.trackIOSEvent(e, o);
};
t.prototype.downloadJpegImageToDevice = function(e, t, o) {
try {
if (!e || e.length <= 0) return;
var n = cc.assetManager.cacheManager.cacheDir + "/" + cc.path.basename(e), i = new jsb.Downloader();
i.createDownloadFileTask(e, n, "downimage");
i.setOnFileTaskSuccess(function() {
u.SDKSbnMgr.ins.downloadJpegImageToDevice(e, r.Img);
});
i.setOnTaskError(function(e, t, n, i) {
console.log(t, n, i);
s.CoreSBN.message.emit(c.EventNameSBN.save_img_status, a.SaveFail);
o && o(null);
});
i.setOnTaskProgress(function(e, t, o, n) {
s.CoreSBN.message.emit(c.EventNameSBN.save_img_status, a.SaveProgress, o / n);
});
} catch (e) {}
};
t.prototype.saveImgcallback = function(e) {
var t = e;
"1" == e || "0" == e && (t = "2");
s.CoreSBN.message.emit(c.EventNameSBN.save_img_status, t);
};
t.prototype.saveVideocallback = function(e) {
var t = e;
"1" == e || "0" == e && (t = "2");
s.CoreSBN.message.emit(c.EventNameSBN.save_video_status, t);
};
return t;
}(l.default);
o.SDKbridgeSBNMgr = p;
cc._RF.pop();
}, {
"../config/EnumDeclareSg": "EnumDeclareSg",
"../utils/CoreSBN": "CoreSBN",
"../utils/IBassInsClass": "IBassInsClass",
"./SDKSbnMgr": "SDKSbnMgr"
} ],
ScreollVirtualView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c22d7QUvgFBIY8j/Xj3yZwk", "ScreollVirtualView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./VirItemRender"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemRenderer = null;
t.virtualList = !0;
t.infiniteScroll = !1;
t.autoChildrenSize = !1;
t.direction = new cc.Vec2();
t.padding = new cc.Vec2();
t.startPos = new cc.Vec2();
t.posToSize = {};
return t;
}
t.prototype.onLoad = function() {
this.isInit = !0;
this.itemList = [];
this.itemPool = [];
this.itemRendererList = [];
if (this.virtualList) {
this.contentLayout = this.content.getComponent(cc.Layout);
this.contentLayout.enabled = !1;
this._uiTransform = this.node;
this.resetSize();
this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onSelfSizeChange, this);
this.autoChildrenSize && this.contentLayout.type == cc.Layout.Type.GRID && (this.autoChildrenSize = !1);
}
this.dataList && this.refreshData(this.dataList);
};
t.prototype.onSelfSizeChange = function() {
this.unschedule(this.delayRefresh);
this.scheduleOnce(this.delayRefresh, .5);
};
t.prototype.delayRefresh = function() {
this.resetSize();
null != this.dataList && this.refreshData(this.dataList);
};
t.prototype.resetSize = function() {
var e, t, o, n, i = this.content.getComponent(cc.Widget);
i ? i.updateAlignment() : (i = this.getComponent(cc.Widget)) && i.updateAlignment();
var r = this.itemRenderer.data;
this.anchorPoint = r.getAnchorPoint().clone();
var a = r.width, c = r.height;
if (this.autoChildrenSize) {
a = null !== (t = null === (e = this.posToSize[0]) || void 0 === e ? void 0 : e.width) && void 0 !== t ? t : r.width;
c = null !== (n = null === (o = this.posToSize[0]) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : r.height;
}
this.direction.x = this.contentLayout.horizontalDirection == cc.Layout.HorizontalDirection.LEFT_TO_RIGHT ? 1 : -1;
this.direction.y = this.contentLayout.verticalDirection == cc.Layout.VerticalDirection.TOP_TO_BOTTOM ? -1 : 1;
this.padding.x = this.contentLayout.horizontalDirection == cc.Layout.HorizontalDirection.LEFT_TO_RIGHT ? this.contentLayout.paddingLeft : this.contentLayout.paddingRight;
this.padding.y = this.contentLayout.verticalDirection == cc.Layout.VerticalDirection.TOP_TO_BOTTOM ? this.contentLayout.paddingTop : this.contentLayout.paddingBottom;
this.startPos.x = (a - a * this.anchorPoint.x + this.padding.x) * this.direction.x;
this.startPos.y = (c - c * this.anchorPoint.y + this.padding.y) * this.direction.y;
this.itemW = r.width + this.contentLayout.spacingX;
this.itemH = r.height + this.contentLayout.spacingY;
var s = (this._uiTransform.width + this.contentLayout.spacingX - this.contentLayout.paddingLeft) / this.itemW, l = (this._uiTransform.height + this.contentLayout.spacingY - this.contentLayout.paddingTop) / this.itemH;
this.horizontalCount = Math.ceil(s) + 1;
this.verticalCount = Math.ceil(l) + 1;
this.contentLayout.type == cc.Layout.Type.GRID && (this.contentLayout.startAxis == cc.Layout.AxisDirection.HORIZONTAL ? this.horizontalCount = Math.floor(s) : this.verticalCount = Math.floor(l));
};
t.prototype.onDestroy = function() {
this.infiniteScrollCb = null;
this.infiniteScrollThis = null;
this.callback = null;
this.cbThis = null;
this.dataList = null;
this.itemList = null;
this.itemRendererList = null;
this.posToSize = null;
this.itemPool.forEach(function(e) {
e.destroy();
});
this.itemPool = null;
this.interval && clearInterval(this.interval);
this.node.targetOff(this);
};
t.prototype.setContentPosition = function(t) {
e.prototype.setContentPosition.call(this, t);
this.refresh = !0;
};
t.prototype.setTouchItemCallback = function(e, t) {
this.callback = e;
this.cbThis = t;
};
t.prototype.onItemTap = function(e) {
this.callback && this.callback.call(this.cbThis, e);
};
t.prototype.setInfiniteScrollCallback = function(e, t) {
this.infiniteScrollCb = e;
this.infiniteScrollThis = t;
};
t.prototype.onInfiniteScrollCallback = function() {
this.moveBottom = !1;
this.infiniteScrollCb && this.infiniteScrollCb.call(this.infiniteScrollThis);
};
t.prototype.refreshData = function(e) {
Array.isArray(e) ? this.dataList = e : this.dataList = [ e ];
if (this.isInit) {
this.interval && clearInterval(this.interval);
this.addItem();
if (this.virtualList) {
this.refreshContentSize();
this.forcedRefresh = !0;
this.refresh = !0;
this.interval = setInterval(this.refreshItem.bind(this), 100);
this.refreshItem();
}
}
};
t.prototype.addItem = function() {
var e = this, t = 0;
if (this.virtualList) {
switch (this.contentLayout.type) {
case cc.Layout.Type.HORIZONTAL:
t = this.horizontalCount;
break;

case cc.Layout.Type.VERTICAL:
t = this.verticalCount;
break;

case cc.Layout.Type.GRID:
t = this.horizontalCount * this.verticalCount;
}
t = Math.min(t, this.dataList.length);
} else t = this.dataList.length;
var o = this.itemList.length;
if (o < t) for (var n = null, i = o; i < t; i++) {
var r = this.itemPool.length > 0 ? this.itemPool.shift() : cc.instantiate(this.itemRenderer);
this.content.addChild(r);
this.itemList.push(r);
n = r.getComponent(a.default);
this.itemRendererList.push(n);
n.isClick && n.setTouchCallback(this.onItemTap, this);
this.autoChildrenSize && r.on(cc.Node.EventType.SIZE_CHANGED, this.delayChangeRefreshMark.bind(this, r), this);
} else for (var c = this.content.childrenCount, s = void 0; c > t; ) {
s = this.itemList[c - 1];
this.content.removeChild(s);
this.itemList.splice(c - 1, 1);
this.itemRendererList.splice(c - 1, 1);
this.itemPool.push(s);
c = this.content.childrenCount;
}
this.virtualList || this.dataList.forEach(function(t, o) {
e.itemRendererList[o].data = t;
});
};
t.prototype.delayChangeRefreshMark = function(e) {
var t = this.posToSize[e.nowDataIdx];
if (t) {
if (t.width == e.width && t.height == e.height) return;
t.width = e.width;
t.height = e.height;
} else t = e.getContentSize().clone();
this.posToSize[e.nowDataIdx] = t;
this.refresh = !0;
this.refreshItem();
};
t.prototype.changeRefreshMark = function() {
this.refresh = !0;
};
t.prototype.refreshContentSize = function() {
var e, t, o, n, i, r, a, c, s, l = this.contentLayout, u = this.dataList.length;
switch (this.contentLayout.type) {
case cc.Layout.Type.VERTICAL:
s = l.paddingTop + l.paddingBottom;
if (this.autoChildrenSize) for (var p = 0; p < u; p++) s += (null !== (t = null === (e = this.posToSize[p]) || void 0 === e ? void 0 : e.height) && void 0 !== t ? t : this.itemH - this.contentLayout.spacingY) + this.contentLayout.spacingY; else s += u * this.itemH;
this.contentLayout.verticalDirection == cc.Layout.VerticalDirection.BOTTOM_TO_TOP && (s = Math.max(s, null !== (n = null === (o = this.content.parent) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : 0));
this.content.height = s;
break;

case cc.Layout.Type.HORIZONTAL:
s = l.paddingLeft + l.paddingRight;
if (this.autoChildrenSize) for (p = 0; p < u; p++) s += (null !== (r = null === (i = this.posToSize[p]) || void 0 === i ? void 0 : i.width) && void 0 !== r ? r : this.itemW - this.contentLayout.spacingX) + this.contentLayout.spacingX; else s += u * this.itemW;
this.contentLayout.horizontalDirection == cc.Layout.HorizontalDirection.RIGHT_TO_LEFT && (s = Math.max(s, null !== (c = null === (a = this.content.parent) || void 0 === a ? void 0 : a.width) && void 0 !== c ? c : 0));
this.content.width = s;
break;

case cc.Layout.Type.GRID:
this.contentLayout.startAxis == cc.Layout.AxisDirection.HORIZONTAL ? this.content.height = l.paddingTop + Math.ceil(u / this.horizontalCount) * this.itemH + l.paddingBottom : this.contentLayout.startAxis == cc.Layout.AxisDirection.VERTICAL && (this.content.width = l.paddingLeft + Math.ceil(u / this.verticalCount) * this.itemW + l.paddingRight);
}
};
t.prototype.refreshItemData = function(e, t, o) {
if (this.itemRendererList && this.itemRendererList.length > 0) for (var n = 0; n < this.itemRendererList.length; n++) if (this.itemRendererList[n].data[e] == t) {
this.itemRendererList[n].data = o;
break;
}
if (this.dataList && this.dataList.length > 0) for (n = 0; n < this.dataList.length; n++) if (this.dataList[n][e] == t) {
this.dataList[n] = o;
break;
}
};
t.prototype.refreshItem = function() {
this.moveBottom && this.onInfiniteScrollCallback();
if (this.refresh) {
switch (this.contentLayout.type) {
case cc.Layout.Type.HORIZONTAL:
this.refreshHorizontal();
break;

case cc.Layout.Type.VERTICAL:
this.refreshVertical();
break;

case cc.Layout.Type.GRID:
this.refreshGrid();
}
this.refreshContentSize();
this.refresh = !1;
this.forcedRefresh = !1;
}
};
t.prototype.refreshHorizontal = function() {
var e = this.getStart(), t = e + this.horizontalCount;
if (t > this.dataList.length) {
t = this.dataList.length;
e = Math.max(t - this.horizontalCount, 0);
}
for (var o, n, i = 0, r = this.itemList.length, a = 0; a < r; a++) {
n = (e + a) % r;
o = this.itemList[n];
i = this.getPos(e + a);
if (o.x != i || this.forcedRefresh) {
o.x = i;
this.itemRendererList[n].node.nowDataIdx = e + a;
this.itemRendererList[n].data = this.dataList[e + a];
this.posToSize[e + a] = o.getContentSize().clone();
this.infiniteScroll && e > 0 && e + a == this.dataList.length - 1 && (this.moveBottom = !0);
}
}
};
t.prototype.refreshVertical = function() {
var e = this.getStart(), t = e + this.verticalCount;
if (t > this.dataList.length) {
t = this.dataList.length;
e = Math.max(t - this.verticalCount, 0);
}
for (var o, n, i = 0, r = this.itemList.length, a = 0; a < r; a++) {
n = (e + a) % r;
o = this.itemList[n];
i = this.getPos(e + a);
if (o.y != i || this.forcedRefresh) {
o.y = i;
this.itemRendererList[n].node.nowDataIdx = e + a;
this.itemRendererList[n].data = this.dataList[e + a];
this.posToSize[e + a] = o.getContentSize().clone();
this.infiniteScroll && e > 0 && e + a == this.dataList.length - 1 && (this.moveBottom = !0);
}
}
};
t.prototype.refreshGrid = function() {
var e = this.contentLayout.startAxis == cc.Layout.AxisDirection.VERTICAL, t = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH) * this.horizontalCount;
if (e) {
t = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW) * this.verticalCount;
this.getContentPosition().x > 0 && (t = 0);
} else this.getContentPosition().y < 0 && (t = 0);
t < 0 && (t = 0);
var o = t + this.horizontalCount * this.verticalCount;
if (o > this.dataList.length) {
o = this.dataList.length;
t = Math.max(o - this.horizontalCount * this.verticalCount, 0);
}
for (var n, i, r = 0, a = 0, c = this.itemList.length, s = 0; s < c; s++) {
i = (t + s) % c;
n = this.itemList[i];
if (e) {
r = this.startPos.x + Math.floor((t + s) / this.verticalCount) * this.itemW;
a = this.startPos.y + -(t + s) % this.verticalCount * this.itemH;
} else {
r = this.startPos.x + (t + s) % this.horizontalCount * this.itemW;
a = this.startPos.y + -Math.floor((t + s) / this.horizontalCount) * this.itemH;
}
if (n.y != a || n.x != r || this.forcedRefresh) {
n.x = r;
n.y = a;
this.itemRendererList[i].data = this.dataList[t + s];
this.infiniteScroll && t > 0 && t + s == this.dataList.length - 1 && (this.moveBottom = !0);
}
}
};
t.prototype.getStart = function() {
var e, t, o, n, i = 0, r = 0;
switch (this.contentLayout.type) {
case cc.Layout.Type.HORIZONTAL:
if (this.autoChildrenSize) {
r = Math.abs(this.content.position.x);
for (var a in this.posToSize) {
if ((r -= (null !== (t = null === (e = this.posToSize[a]) || void 0 === e ? void 0 : e.width) && void 0 !== t ? t : this.itemW - this.contentLayout.spacingX) + this.contentLayout.spacingX) <= 0) break;
i++;
}
} else i = Math.floor(Math.abs(this.content.position.x) / this.itemW);
(this.contentLayout.horizontalDirection == cc.Layout.HorizontalDirection.LEFT_TO_RIGHT && this.content.position.x > 0 || this.contentLayout.horizontalDirection == cc.Layout.HorizontalDirection.RIGHT_TO_LEFT && this.content.position.x < 0) && (i = 0);
break;

case cc.Layout.Type.VERTICAL:
if (this.autoChildrenSize) {
r = Math.abs(this.content.position.y);
for (var a in this.posToSize) {
if ((r -= (null !== (n = null === (o = this.posToSize[a]) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : this.itemH - this.contentLayout.spacingY) + this.contentLayout.spacingY) <= 0) break;
i++;
}
} else i = Math.floor(Math.abs(this.content.position.y) / this.itemH);
(this.contentLayout.verticalDirection == cc.Layout.VerticalDirection.TOP_TO_BOTTOM && this.content.position.y < 0 || this.contentLayout.verticalDirection == cc.Layout.VerticalDirection.BOTTOM_TO_TOP && this.content.position.y > 0) && (i = 0);
break;

case cc.Layout.Type.GRID:
}
i < 0 && (i = 0);
return i;
};
t.prototype.getPos = function(e) {
var t, o, n, i, r, a, c, s, l, u, p, f, h, d, _ = 0;
switch (this.contentLayout.type) {
case cc.Layout.Type.HORIZONTAL:
if (this.autoChildrenSize) {
if (0 == e) {
d = null !== (o = null === (t = this.posToSize[0]) || void 0 === t ? void 0 : t.width) && void 0 !== o ? o : this.itemH - this.contentLayout.spacingX;
this.startPos.x = d * this.anchorPoint.x * this.direction.x;
}
_ += this.startPos.x + this.padding.x * this.direction.x;
for (var g = 1; g <= e; g++) {
_ += ((d = null !== (i = null === (n = this.posToSize[g - 1]) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : this.itemW - this.contentLayout.spacingX) - d * this.anchorPoint.x + this.contentLayout.spacingX) * this.direction.x;
_ += (d = null !== (a = null === (r = this.posToSize[g]) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : this.itemW - this.contentLayout.spacingX) * this.anchorPoint.x * this.direction.x;
}
} else _ = this.startPos.x + e * this.itemW * this.direction.x;
break;

case cc.Layout.Type.VERTICAL:
if (this.autoChildrenSize) {
if (0 == e) {
h = null !== (s = null === (c = this.posToSize[0]) || void 0 === c ? void 0 : c.height) && void 0 !== s ? s : this.itemH - this.contentLayout.spacingY;
this.startPos.y = (h - h * this.anchorPoint.y) * this.direction.y;
}
_ += this.startPos.y + this.padding.y * this.direction.y;
for (g = 1; g <= e; g++) {
_ += (h = (null !== (u = null === (l = this.posToSize[g - 1]) || void 0 === l ? void 0 : l.height) && void 0 !== u ? u : this.itemH - this.contentLayout.spacingY) * this.anchorPoint.y + this.contentLayout.spacingY) * this.direction.y;
_ += ((h = null !== (f = null === (p = this.posToSize[g]) || void 0 === p ? void 0 : p.height) && void 0 !== f ? f : this.itemH - this.contentLayout.spacingY) - h * this.anchorPoint.y) * this.direction.y;
}
} else _ = this.startPos.y + e * this.itemH * this.direction.y;
break;

case cc.Layout.Type.GRID:
}
return _;
};
r([ l({
type: cc.Prefab,
serializable: !0,
displayName: "dd"
}) ], t.prototype, "itemRenderer", void 0);
r([ l({
displayName: "vir"
}) ], t.prototype, "virtualList", void 0);
r([ l({
tooltip: "call",
visible: function() {
return this.virtualList;
}
}) ], t.prototype, "infiniteScroll", void 0);
r([ l({
tooltip: "shiying",
visible: function() {
return this.virtualList;
}
}) ], t.prototype, "autoChildrenSize", void 0);
return r([ s ], t);
}(cc.ScrollView);
o.default = u;
cc._RF.pop();
}, {
"./VirItemRender": "VirItemRender"
} ],
SettingTwoView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "298daRdCM5NHYoEV9CWFeKX", "SettingTwoView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../config/EnumDeclareSg"), s = e("../../HiFive/Views/SoundManager"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.musicSprite = null;
t.shake = null;
t.soundSprite = null;
t.spriteBgArr = [];
t._music = !0;
t._shake = !0;
t._sound = !0;
t.closeAction = null;
return t;
}
t.prototype.show = function(t) {
var o, n, i, r;
e.prototype.show.call(this, t);
this._music = null === (o = l.CoreSBN.gameData.settings) || void 0 === o ? void 0 : o.music;
this._shake = null === (n = l.CoreSBN.gameData.settings) || void 0 === n ? void 0 : n.shake;
this._sound = null === (i = l.CoreSBN.gameData.settings) || void 0 === i ? void 0 : i.sound;
this.updateUi();
this.closeAction = null === (r = t.param) || void 0 === r ? void 0 : r.backAction;
};
t.prototype.onMusiBtn = function() {
this._music = !this._music;
l.CoreSBN.gameData.setSettingBykey("music", this._music);
this.updateUi();
this._music ? s.SoundManager.resumeMusic() : s.SoundManager.pauseMusic();
};
t.prototype.onSoundBtn = function() {
this._sound = !this._sound;
l.CoreSBN.gameData.setSettingBykey("sound", this._sound);
this.updateUi();
};
t.prototype.onShakeBtn = function() {
this._shake = !this._shake;
l.CoreSBN.gameData.setSettingBykey("shake", this._shake);
this.updateUi();
};
t.prototype.onHomeBtn = function() {
this.on_close_call();
l.CoreSBN.gameData.changeScene(c.SceneNameSBN.Home);
};
t.prototype.onRestartBtn = function() {
this.on_close_call();
this.closeAction && this.closeAction(!0);
};
t.prototype.onMoreGameBtn = function() {};
t.prototype.updateUi = function() {
this.musicSprite.spriteFrame = this.spriteBgArr[this._music ? 0 : 1];
this.shake.spriteFrame = this.spriteBgArr[this._shake ? 0 : 1];
this.soundSprite.spriteFrame = this.spriteBgArr[this._sound ? 0 : 1];
};
t.prototype.closeViewSBN = function() {
this.on_close_call();
};
r([ f(cc.Sprite) ], t.prototype, "musicSprite", void 0);
r([ f(cc.Sprite) ], t.prototype, "shake", void 0);
r([ f(cc.Sprite) ], t.prototype, "soundSprite", void 0);
r([ f(cc.SpriteFrame) ], t.prototype, "spriteBgArr", void 0);
return r([ a.registerUIPath("prefabSbn/SettingTwoView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../HiFive/Views/SoundManager": "SoundManager",
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN"
} ],
SettingView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a3273o9kzNEio9qsikH5Glz", "SettingView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("../../config/EnumDeclareSg"), s = e("../../HiFive/Views/SoundManager"), l = e("../../utils/CoreSBN"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.musicSprite = null;
t.shake = null;
t.soundSprite = null;
t.spriteBgArr = [];
t.moreNode = null;
t.surrenderNode = null;
t.idLab = null;
t.verLab = null;
t._music = !0;
t._shake = !0;
t._sound = !0;
return t;
}
t.prototype.show = function(t) {
var o, n, i;
e.prototype.show.call(this, t);
this._music = null === (o = l.CoreSBN.gameData.settings) || void 0 === o ? void 0 : o.music;
this._shake = null === (n = l.CoreSBN.gameData.settings) || void 0 === n ? void 0 : n.shake;
this._sound = null === (i = l.CoreSBN.gameData.settings) || void 0 === i ? void 0 : i.sound;
this.updateUi();
this.showVersion();
this.moreNode.active = !1;
t.parmas ? this.surrenderNode.active = !0 : this.surrenderNode.active = !1;
};
t.prototype.showVersion = function() {
this.verLab.string = "v" + l.CoreSBN.config.gameVersion;
l.CoreSBN.sdk.getInviteCode() ? this.idLab.string = "ID:" + l.CoreSBN.sdk.getInviteCode() : this.idLab.string = "";
};
t.prototype.onMusiBtn = function() {
this._music = !this._music;
l.CoreSBN.gameData.setSettingBykey("music", this._music);
this.updateUi();
this._music ? s.SoundManager.resumeMusic() : s.SoundManager.pauseMusic();
};
t.prototype.onSoundBtn = function() {
this._sound = !this._sound;
l.CoreSBN.gameData.setSettingBykey("sound", this._sound);
this.updateUi();
};
t.prototype.onShakeBtn = function() {
this._shake = !this._shake;
l.CoreSBN.gameData.setSettingBykey("shake", this._shake);
this.updateUi();
};
t.prototype.onMoreGameBtn = function() {};
t.prototype.onsurrendBtn = function() {
this.closeViewSBN();
l.CoreSBN.message.emit(c.EventNameSBN.battle_give_up);
};
t.prototype.onPriBtn = function() {
l.CoreSBN.sdk.openUrl(l.CoreSBN.config.privacyUrl);
};
t.prototype.updateUi = function() {
this.musicSprite.spriteFrame = this.spriteBgArr[this._music ? 0 : 1];
this.shake.spriteFrame = this.spriteBgArr[this._shake ? 0 : 1];
this.soundSprite.spriteFrame = this.spriteBgArr[this._sound ? 0 : 1];
};
t.prototype.closeViewSBN = function() {
this.on_close_call();
};
r([ f(cc.Sprite) ], t.prototype, "musicSprite", void 0);
r([ f(cc.Sprite) ], t.prototype, "shake", void 0);
r([ f(cc.Sprite) ], t.prototype, "soundSprite", void 0);
r([ f(cc.SpriteFrame) ], t.prototype, "spriteBgArr", void 0);
r([ f(cc.Node) ], t.prototype, "moreNode", void 0);
r([ f(cc.Node) ], t.prototype, "surrenderNode", void 0);
r([ f(cc.Label) ], t.prototype, "idLab", void 0);
r([ f(cc.Label) ], t.prototype, "verLab", void 0);
return r([ a.registerUIPath("prefabSbn/SettingView"), p ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../HiFive/Views/SoundManager": "SoundManager",
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN"
} ],
SgballonADMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "021c96IWN5JgqvI8qzjgBKJ", "SgballonADMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SgballonADMgr = void 0;
var r = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.showRewardVideo = function(e, t, o) {
void 0 === o && (o = "");
e();
};
t.prototype.showInterAD = function(e, t, o) {
void 0 === o && (o = "");
e();
};
return t;
}(e("../utils/IBassInsClass").default);
o.SgballonADMgr = r;
cc._RF.pop();
}, {
"../utils/IBassInsClass": "IBassInsClass"
} ],
ShopRecord: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e4b5cUoJF9PzYNqvL3TwllY", "ShopRecord");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ShopRecord = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.base_name = "ShopRecord";
t.claim_id_list = [];
t.show_unlock_view_id_list = [];
t.apply_auto_update();
return t;
}
t.prototype.addClaimId = function(e) {
this.claim_id_list.push(e);
this.store();
};
t.prototype.checkHasClaim = function(e) {
return -1 != this.claim_id_list.indexOf(e);
};
t.prototype.addShowUnlockViewId = function(e) {
this.show_unlock_view_id_list.push(e);
this.store();
};
t.prototype.checkHasShowUnlockView = function(e) {
return -1 != this.show_unlock_view_id_list.indexOf(e);
};
t._name = "ShopRecord";
return t;
}(e("../../GameDataConfig/BaseRecord").default);
o.ShopRecord = r;
cc._RF.pop();
}, {
"../../GameDataConfig/BaseRecord": "BaseRecord"
} ],
SignRewardItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0aabalkAhlGjKVZafRYXcWf", "SignRewardItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../config/EnumDeclareSg"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.iconSp = null;
t.iconSpArr = [];
t.valueLab = null;
t._curNColor = cc.color(74, 132, 29, 255);
return t;
}
t.prototype.initData = function(e, t) {
switch (e.type) {
case a.RewardTypeSBN.coin:
this.iconSp.spriteFrame = this.iconSpArr[0];
break;

case a.RewardTypeSBN.prop1:
this.iconSp.spriteFrame = this.iconSpArr[1];
break;

case a.RewardTypeSBN.prop2:
this.iconSp.spriteFrame = this.iconSpArr[2];
break;

case a.RewardTypeSBN.prop3:
this.iconSp.spriteFrame = this.iconSpArr[3];
}
this.valueLab.string = "+" + e.value;
t ? this.changeColor(t) : this.changeColor(this._curNColor);
};
t.prototype.changeColor = function(e) {
void 0 === e && (e = null);
this.valueLab.node.color = e;
};
t.prototype.start = function() {};
r([ l(cc.Sprite) ], t.prototype, "iconSp", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "iconSpArr", void 0);
r([ l(cc.Label) ], t.prototype, "valueLab", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../config/EnumDeclareSg": "EnumDeclareSg"
} ],
SigninPuItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e337e81T2VMPac1uY+j2twM", "SigninPuItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./SignRewardItem"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bg = null;
t.dayLabel = null;
t.maskNode = null;
t.bgArr = [];
t.layout = null;
t.rewardItem = null;
t._curColor = cc.color(234, 62, 174, 255);
t._curNColor = cc.color(161, 62, 68, 255);
t._curDay = 0;
t.dayData = null;
return t;
}
t.prototype.initData = function(e, t, o) {
this.dayData = e;
if (this.layout.childrenCount <= 0) for (var n = 0; n < this.dayData.reward.length; n++) {
var i = cc.instantiate(this.rewardItem);
i.parent = this.layout;
i.getComponent(a.default).initData(e.reward[n]);
}
this._curDay = t;
this.refresh(o);
};
t.prototype.start = function() {};
t.prototype.refresh = function(e) {
this.dayData.day < this._curDay ? this.maskNode.active = !0 : this.dayData.day == this._curDay && e ? this.maskNode.active = !0 : this.maskNode.active = !1;
if (this.dayData.day == this._curDay) {
this.bg.spriteFrame = this.bgArr[1];
for (var t = 0; t < this.layout.children.length; t++) this.layout.children[t].getComponent(a.default).changeColor(this._curColor);
} else {
this.bg.spriteFrame = this.bgArr[0];
for (t = 0; t < this.layout.children.length; t++) this.layout.children[t].getComponent(a.default).changeColor(this._curNColor);
}
};
r([ l(cc.Sprite) ], t.prototype, "bg", void 0);
r([ l(cc.Label) ], t.prototype, "dayLabel", void 0);
r([ l(cc.Node) ], t.prototype, "maskNode", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "bgArr", void 0);
r([ l(cc.Node) ], t.prototype, "layout", void 0);
r([ l(cc.Prefab) ], t.prototype, "rewardItem", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./SignRewardItem": "SignRewardItem"
} ],
SigninView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "66b3buc1e1DXbH1PT9N8J7H", "SigninView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../commen/ViewBase"), c = e("../../config/EnumDeclareSg"), s = e("../../HiFive/Views/RewardCommenView"), l = e("../../utils/CoreSBN"), u = e("../item/SigninPuItem"), p = cc._decorator, f = p.ccclass, h = p.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.layoutNode = null;
t.btnLatLabel = null;
t.benNode = null;
t.labNode = null;
t.signinData = {
totalDays: 0,
todayRewarded: !1
};
t._rewardsList = [ {
day: 1,
reward: [ {
type: c.RewardTypeSBN.coin,
value: 500
} ]
}, {
day: 2,
reward: [ {
type: c.RewardTypeSBN.prop1,
value: 3
} ]
}, {
day: 3,
reward: [ {
type: c.RewardTypeSBN.coin,
value: 500
} ]
}, {
day: 4,
reward: [ {
type: c.RewardTypeSBN.prop2,
value: 3
} ]
}, {
day: 5,
reward: [ {
type: c.RewardTypeSBN.coin,
value: 500
} ]
}, {
day: 6,
reward: [ {
type: c.RewardTypeSBN.prop3,
value: 3
} ]
}, {
day: 7,
reward: [ {
type: c.RewardTypeSBN.coin,
value: 1e3
}, {
type: c.RewardTypeSBN.prop1,
value: 3
}, {
type: c.RewardTypeSBN.prop2,
value: 3
}, {
type: c.RewardTypeSBN.prop3,
value: 3
} ]
} ];
t._isDown = !1;
return t;
}
t.prototype.start = function() {
this.signinData = l.CoreSBN.gameData.signinData;
this.updateSigninStatus();
this.showLab();
l.CoreSBN.message.on(c.EventNameSBN.change_day, this.updateSigninStatus, this);
};
t.prototype.showLab = function() {
this.btnLatLabel.string = "x2";
};
t.prototype.saveSigninData = function() {
l.CoreSBN.gameData.updateSigninStatus(this.signinData);
};
t.prototype.initSigninItems = function() {
for (var e = 0; e < this.layoutNode.children.length; e++) {
this.layoutNode.children[e].getComponent(u.default).initData(this._rewardsList[e], this.signinData.totalDays, this.signinData.todayRewarded);
}
};
t.prototype.updateSigninStatus = function() {
if (this.signinData.todayRewarded) {
this.benNode.active = !1;
this.labNode.active = !1;
} else {
this.benNode.active = !0;
this.labNode.active = !1;
}
this.initSigninItems();
this.signinData.totalDays > 7 && this.closeView();
};
t.prototype.onReceive = function() {
var e = this.signinData.totalDays;
e <= 0 || e > 7 || this.signinData.todayRewarded || this.sendRewards();
};
t.prototype.onVideoBtn = function() {
var e = this.signinData.totalDays;
e <= 0 || e > 7 || this.signinData.todayRewarded || l.CoreSBN.ad.showRewardVideo(this.onSuccess.bind(this), this.onFail.bind(this));
};
t.prototype.onSuccess = function() {
if (this.node && this.node.isValid) {
this._isDown = !1;
this.sendRewards(2);
} else console.log("delete:node");
};
t.prototype.onFail = function() {
this.node && this.node.isValid ? this._isDown = !1 : console.log("delete:node");
};
t.prototype.sendRewards = function(e) {
void 0 === e && (e = 1);
var t = this.signinData.totalDays;
if (t > 0 && t <= 7) {
this.signinData.todayRewarded = !0;
l.CoreSBN.gameData.updateSigninStatus(this.signinData);
this.saveSigninData();
this.initSigninItems();
for (var o = this._rewardsList[t - 1].reward, n = 0; n < o.length; n++) o[n].value = o[n].value * e;
s.default.open({
param: o
}, !1);
this.closeView();
}
};
t.prototype.onDestroy = function() {
l.CoreSBN.message.removeAll(this);
};
r([ h(cc.Node) ], t.prototype, "layoutNode", void 0);
r([ h(cc.Label) ], t.prototype, "btnLatLabel", void 0);
r([ h(cc.Node) ], t.prototype, "benNode", void 0);
r([ h(cc.Node) ], t.prototype, "labNode", void 0);
return r([ f ], t);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../HiFive/Views/RewardCommenView": "RewardCommenView",
"../../commen/ViewBase": "ViewBase",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../utils/CoreSBN": "CoreSBN",
"../item/SigninPuItem": "SigninPuItem"
} ],
Singleton: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2cc41N+Nv9EV4HNA4kLcUUN", "Singleton");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Singleton = void 0;
var n = function() {
function e() {}
e.getInstance = function() {
if (!this._instance) {
this._instance = new this();
this._instance.onInit();
}
return this._instance;
};
e._instance = null;
return e;
}();
o.Singleton = n;
cc._RF.pop();
}, {} ],
Slot: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10afbKNtVxAfJ8z+OoafMwD", "Slot");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = e("../../../GameDataConfig/GameDataConfig"), l = e("../../../Spript/GamePlayConfigEnum"), u = e("../../../core/managers/ActionsHelp"), p = e("../../Views/UIUtils"), f = e("../../Views/CubeEliminateEffect"), h = e("./Nail"), d = e("../../../utils/CoreSBN"), _ = e("../../../config/EnumDeclareSg"), g = cc._decorator, y = g.ccclass, m = g.property, v = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.box_panel = null;
t.slot_nodes = [];
t.nails = [];
t._hole_node = null;
t._game_node = null;
t.prop = null;
t._hole_count = 0;
t._remain_count = 0;
t._open_count = 0;
return t;
}
Object.defineProperty(t.prototype, "hole_node", {
get: function() {
this._hole_node || (this._hole_node = this.box_panel.getChildByName("hole_node"));
return this._hole_node;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "game_node", {
get: function() {
this._game_node || (this._game_node = this.box_panel.getChildByName("game_node"));
return this._game_node;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "hole_total_count", {
get: function() {
this._hole_count < 1 && (this._hole_count = +s.default.game_play_config_value(l.GamePlayConfigEnum.hole_total_count).value);
return this._hole_count;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "fulled", {
get: function() {
return this.nails.filter(function(e) {
return !!e;
}).length >= this._open_count;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "remain_count", {
get: function() {
return this.open_count - this.nails.filter(function(e) {
return !!e;
}).length;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "open_count", {
get: function() {
return Math.min(this.hole_total_count + this.prop.use_count - this.prop.limit_count, this.hole_total_count);
},
enumerable: !1,
configurable: !0
});
t.prototype.setup = function(e) {
this.change_handler = e;
};
t.prototype.init = function(e, t) {
return a(this, void 0, void 0, function() {
var o, n, i, r;
return c(this, function(a) {
switch (a.label) {
case 0:
this.prop = t;
this.nails = [];
this.slot_nodes = p.default.getInstance().copyNodeToList(this.hole_total_count, Array.from(this.hole_node.children));
return [ 4, this.updateHoles() ];

case 1:
a.sent();
if (e) for (o = 0; o < e.length; o++) {
n = d.CoreSBN.pool.requestObject(d.CoreSBN.config.commenBundle, _.PrefabNameSBN.Nail, this.game_node);
(i = n.getComponent(h.default)).init(e[o]);
i.node.scale = 1;
r = this.getSlotPosByIndex(o);
i.node.position = r;
this.nails[o] = i;
}
this.checkOpenCount();
return [ 2 ];
}
});
});
};
t.prototype.checkOpenCount = function() {
if (this.change_handler && this._remain_count != this.remain_count) {
this._remain_count = this.remain_count;
this.change_handler(this._remain_count);
}
};
t.prototype.updateHoles = function(e) {
void 0 === e && (e = !1);
for (var t = this._open_count = this.open_count, o = 35 * (1 - t), n = 0; n < this.slot_nodes.length; n++) this.slot_nodes[n].active = n < t;
this.nails.forEach(function(t, n) {
t && (e ? cc.tween(t.node).to(.15, {
x: o + 70 * n
}).start() : t.node.x = o + 70 * n);
});
this.slot_nodes.forEach(function(t, n) {
t && t.active && (e ? cc.tween(t).to(.15, {
x: o + 70 * n
}).start() : t.x = o + 70 * n);
});
this.checkOpenCount();
};
t.prototype.setNailEmpty = function(e) {
if (Array.isArray(e)) {
for (var t = 0, o = e; t < o.length; t++) for (var n = o[t], i = 0; i < this.nails.length; i++) if (this.nails[i] == n) {
this.nails[i] = null;
break;
}
} else for (n = 0; n < this.nails.length; n++) if (this.nails[n] == e) {
this.nails[n] = null;
break;
}
this.checkOpenCount();
};
t.prototype.getSlotPosByIndex = function(e) {
var t = this.slot_nodes[e].position;
return cc.v3(t.x, t.y);
};
t.prototype.reset = function() {
var e = this.game_node.children;
e.length > 0 && Array.from(e).forEach(function(e) {
e.stopAllActions();
e.destroy();
});
};
t.prototype.clean = function() {
return a(this, void 0, void 0, function() {
var e, t = this;
return c(this, function(o) {
switch (o.label) {
case 0:
if (!((e = this.game_node.children).length > 0)) return [ 3, 2 ];
Array.from(e).forEach(function(e) {
var t = d.CoreSBN.pool.requestObject(d.CoreSBN.config.commenBundle, _.PrefabNameSBN.CubeEliminateEffect, e.parent), o = t.getComponent(f.CubeEliminateEffect);
t.x = e.x;
t.y = e.y;
o.playEffect(null, null);
cc.tween(e).to(.2, {
opacity: 0
}).call(function() {
e.destroy();
}).start();
});
return [ 4, new Promise(function(e) {
t.scheduleOnce(function() {
e();
}, .2);
}) ];

case 1:
o.sent();
o.label = 2;

case 2:
this.nails = [];
return [ 2 ];
}
});
});
};
t.prototype.tryPutNailToSlot = function(e, t) {
if (!this.fulled) {
for (var o = -100, n = 0; n < this._open_count; n++) if (!this.nails[n]) {
this.nails[n] = e;
o = n;
break;
}
if (o >= 0) {
t && t();
var i = this.game_node.convertToNodeSpaceAR(e.node.convertToWorldSpaceAR(cc.v3()));
e.node.parent = this.game_node;
e.node.position = i;
this.checkOpenCount();
return e.moveToPos(this.slot_nodes[o]);
}
}
};
t.prototype.getNailInSlot = function(e) {
for (var t = 0, o = this.nails; t < o.length; t++) {
var n = o[t];
if (n && n.touch.getSharp().testPointInPolygon(e)) {
u.default.jellyScaleAni(n.node);
return n;
}
}
};
r([ m(cc.Node) ], t.prototype, "box_panel", void 0);
return r([ y ], t);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../../Spript/GamePlayConfigEnum": "GamePlayConfigEnum",
"../../../config/EnumDeclareSg": "EnumDeclareSg",
"../../../core/managers/ActionsHelp": "ActionsHelp",
"../../../utils/CoreSBN": "CoreSBN",
"../../Views/CubeEliminateEffect": "CubeEliminateEffect",
"../../Views/UIUtils": "UIUtils",
"./Nail": "Nail"
} ],
SoundManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5fe2eIcisZN1bE46AN3qfUD", "SoundManager");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SoundManager = void 0;
var i = e("./AudioManager"), r = e("../../GameDataConfig/GameLocalData"), a = e("./GamePlayData"), c = e("../../utils/CoreSBN"), s = cc._decorator, l = s.ccclass, u = (s.property, 
function() {
function e() {}
e.get_effect_toggle = function() {
return r.default.get_instance().get_data(a.default).mine_effect_toggle;
};
e.get_music_toggle = function() {
return r.default.get_instance().get_data(a.default).mine_music_toggle;
};
e.playSound = function(e, t, o, n) {
void 0 === t && (t = !1);
void 0 === o && (o = 1);
void 0 === n && (n = function() {});
if (c.CoreSBN.gameData.getSettingByKey("sound")) {
var r = c.CoreSBN.res.getClip(c.CoreSBN.config.commenBundle, e);
r && i.audioManager.playSound(r, t, o);
}
};
e.playClickSound = function(e, t, o) {
void 0 === e && (e = "btn_click");
void 0 === t && (t = !1);
void 0 === o && (o = 1);
};
e.playMusic = function(e, t, o) {
void 0 === t && (t = !0);
void 0 === o && (o = 1);
var n = c.CoreSBN.res.getClip(c.CoreSBN.config.commenBundle, e);
this._current_music_name = e;
n && c.CoreSBN.gameData.getSettingByKey("music") && (this.music_id = i.audioManager.playMusic(n, t, o));
};
e.stopMusic = function() {};
e.resumeMusic = function() {
this.music_id ? cc.audioEngine.resume(this.music_id) : this._current_music_name && this.playMusic(this._current_music_name);
};
e.pauseMusic = function() {
i.audioManager.pause_music();
};
e.pauseAll = function() {
i.audioManager.pauseAll();
};
e.resumeAll = function() {
i.audioManager.resumeAll();
};
e.music_is_open = !0;
e.music_id = 0;
e._current_music_name = null;
return n([ l ], e);
}());
o.SoundManager = u;
cc._RF.pop();
}, {
"../../GameDataConfig/GameLocalData": "GameLocalData",
"../../utils/CoreSBN": "CoreSBN",
"./AudioManager": "AudioManager",
"./GamePlayData": "GamePlayData"
} ],
StorageEntry: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4e6f2CIhB5B16/N5lZwRQi1", "StorageEntry");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.StorageEntry = void 0;
var n = e("../utils/CoreSBN"), i = function() {
function e() {
this.secretkey = null;
var e = n.CoreSBN.config.localEncryptionKey, t = n.CoreSBN.config.localEncryptionIv;
this.secretkey = e + t;
}
e.prototype.encrypt = function(e) {
for (var t = "", o = 0; o < e.length; o++) t += String.fromCharCode(e.charCodeAt(o) ^ this.secretkey.charCodeAt(o % this.secretkey.length));
return t;
};
e.prototype.decrypt = function(e) {
for (var t = "", o = 0; o < e.length; o++) t += String.fromCharCode(e.charCodeAt(o) ^ this.secretkey.charCodeAt(o % this.secretkey.length));
return t;
};
e.prototype.encryptKey = function(e) {
return this.encrypt(e);
};
return e;
}();
o.StorageEntry = i;
cc._RF.pop();
}, {
"../utils/CoreSBN": "CoreSBN"
} ],
StorageMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7c132MbnodC44xVi99YMh8l", "StorageMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.StorageMgr = void 0;
var r = e("../utils/IBassInsClass"), a = e("../utils/CoreSBN"), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.id = null;
t.iss = null;
return t;
}
Object.defineProperty(t.prototype, "encrypted", {
get: function() {
return a.CoreSBN.config.isLocalEncryption;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(e) {
this.iss = e;
};
t.prototype.setUser = function(e) {
this.id = e;
};
t.prototype.set = function(e, t) {
var o = this.getKey(e);
if (null != e) {
this.encrypted && (o = this.iss.encryptKey(o));
if (null != t) if ("function" != typeof t) {
if ("object" == typeof t) try {
t = JSON.stringify(t);
} catch (e) {
console.error("entry error，str = " + t);
return;
} else "number" == typeof t ? t += "" : "boolean" == typeof t && (t = String(t));
this.encrypted && (t = this.iss.encrypt(t));
cc.sys.localStorage.setItem(o, t);
} else console.error("value no function"); else {
console.warn("key is null，remove");
this.remove(e);
}
} else console.error("save key no null");
};
t.prototype.get = function(e, t) {
void 0 === t && (t = "");
if (null == e) {
console.error("save key no null");
return null;
}
e = this.getKey(e);
this.encrypted && (e = this.iss.encryptKey(e));
var o = cc.sys.localStorage.getItem(e);
null != o && "" !== o && this.encrypted && (o = this.iss.decrypt(o));
return null === o ? t : o;
};
t.prototype.getNumber = function(e, t) {
void 0 === t && (t = 0);
var o = this.get(e);
return "0" == o ? Number(o) : Number(o) || t;
};
t.prototype.getBoolean = function(e) {
return "true" === this.get(e).toLowerCase();
};
t.prototype.getJson = function(e, t) {
var o = this.get(e);
return o && JSON.parse(o) || t;
};
t.prototype.remove = function(e) {
if (null != e) {
var t = this.getKey(e);
this.encrypted && (t = this.iss.encryptKey(t));
localStorage.removeItem(t);
} else console.error("save key no null");
};
t.prototype.clear = function() {
localStorage.clear();
};
t.prototype.getKey = function(e) {
return null == this.id || "" == this.id ? e : this.id + "_" + e;
};
return t;
}(r.default);
o.StorageMgr = c;
cc._RF.pop();
}, {
"../utils/CoreSBN": "CoreSBN",
"../utils/IBassInsClass": "IBassInsClass"
} ],
SuccessView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2924aZJ9GtHypv0abloeHpK", "SuccessView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../common/BaseUI"), c = e("./SoundManager"), s = e("../../config/EnumDeclareSg"), l = e("../../utils/CoreSBN"), u = e("./FlyImageComp"), p = e("../../game/view/ResultAlbumView"), f = cc._decorator, h = f.ccclass, d = f.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.titleSpine = null;
t.coinNode = null;
t.coinLabel = null;
t.levelLab = null;
t.NoVIdeo = null;
t.VideoBtnNode = null;
t._curGetCoin = 0;
t.multipe = 1;
return t;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
};
t.prototype.start = function() {
var t = this;
e.prototype.start.call(this);
this.titleSpine.setCompleteListener(function(e) {
e.animation.name == s.SpineNameSBN.Win && t.titleSpine.setAnimation(0, s.SpineNameSBN.WinLoop, !0);
});
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
if (l.CoreSBN.gameData.rewardData) {
this._curGetCoin = l.CoreSBN.gameData.rewardData.level_reward_value || 0;
this.multipe = l.CoreSBN.gameData.rewardData.level_reward_multiple || 1;
} else {
this._curGetCoin = 0;
this.multipe = 1;
}
this.coinLabel.string = "+" + this._curGetCoin;
this.levelLab.string = "Level " + t.param.level;
c.SoundManager.playSound(s.SoundNameSBN.shengli);
};
t.prototype.onVideoReward = function() {
l.CoreSBN.ad.showRewardVideo(this.onReward.bind(this), this.onfaild.bind(this));
};
t.prototype.onReward = function() {
if (this.node && this.node.isValid) {
var e = Math.ceil(this._curGetCoin * (this.multipe - 1));
this._curGetCoin += e;
this.onBtnRe();
}
};
t.prototype.onfaild = function() {};
t.prototype.rewardFinsh = function() {
this.on_close_call();
p.default.open({});
};
t.prototype.onBtnRe = function() {
var e = this.coinNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
u.default.open({
value: this._curGetCoin,
wardPos: e,
imgType: s.RewardTypeSBN.coin,
callback: this.rewardFinsh.bind(this)
}, !0);
};
t.prototype.onAddFinished = function() {
this.titleSpine.setAnimation(0, s.SpineNameSBN.Win, !1);
};
r([ d(sp.Skeleton) ], t.prototype, "titleSpine", void 0);
r([ d(cc.Node) ], t.prototype, "coinNode", void 0);
r([ d(cc.Label) ], t.prototype, "coinLabel", void 0);
r([ d(cc.Label) ], t.prototype, "levelLab", void 0);
r([ d(cc.Node) ], t.prototype, "NoVIdeo", void 0);
r([ d(cc.Node) ], t.prototype, "VideoBtnNode", void 0);
return r([ a.registerUIPath("prefabSbn/SuccessView"), h ], t);
}(a.default);
o.default = _;
cc._RF.pop();
}, {
"../../common/BaseUI": "BaseUI",
"../../config/EnumDeclareSg": "EnumDeclareSg",
"../../game/view/ResultAlbumView": "ResultAlbumView",
"../../utils/CoreSBN": "CoreSBN",
"./FlyImageComp": "FlyImageComp",
"./SoundManager": "SoundManager"
} ],
SyncBridge: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df452GDu5lHyYPCfnoFUSnj", "SyncBridge");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.syncBridge = void 0;
var n = e("./SyncMaster"), i = e("../../GameDataConfig/GameLocalData"), r = function() {
function e() {
this._everyDayData = null;
this._gameplayData = null;
this._mergeSyncWorker = null;
this._batchRedPacketSyncer = null;
this.addList = [];
}
e.prototype.init = function() {
this._everyDayData = i.default.get_instance().get_data({
_name: "EveryDayData"
});
this._gameplayData = i.default.get_instance().get_data({
_name: "GamePlayData"
});
this._mergeSyncWorker = n.SyncMaster.Instance.createWorker("每日消除数量");
};
e.prototype.onMergeCountChange = function(e) {
this._mergeSyncWorker.update(e);
};
e.prototype.beforeWithdrawShow = function(e) {
n.SyncMaster.Instance.forceSync(n.SyncGroupType.WITHDRAW, e);
};
e.prototype.beforeRankShow = function(e) {
n.SyncMaster.Instance.forceSync(n.SyncGroupType.RANK_LADDER, e);
};
e.prototype.getSign = function() {
return null;
};
e.prototype.sync_money_to_server = function() {
this._gameplayData.handle_add_money();
};
e.prototype.active_user = function() {};
e.prototype.updateRegisterTime = function() {};
e.prototype.syncLevel = function() {};
e.prototype.syncInning = function() {};
return e;
}();
o.syncBridge = new r();
cc._RF.pop();
}, {
"../../GameDataConfig/GameLocalData": "GameLocalData",
"./SyncMaster": "SyncMaster"
} ],
SyncMaster: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8ffb5Q1aLxLAbMOUuExMJ8h", "SyncMaster");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SyncMaster = o.SyncGroupType = o.SyncStatus = o.SyncType = void 0;
var n = e("./SyncWorker");
o.SyncType = cc.Enum({
NONE: 0,
BY_COUNT: 1
});
o.SyncStatus = cc.Enum({
NONE: 0,
DIRTY: 1,
SYNCING: 2,
SYNCING_DIRTY: 3
});
o.SyncGroupType = cc.Enum({
NONE: 0,
WITHDRAW: 1,
RANK_LADDER: 2,
OTHERS: 4
});
var i = function() {
function e() {
this._syncQueue = [];
this._syncingQueue = [];
this._syncEndHooks = new Map();
this._requestTimePromise = null;
}
Object.defineProperty(e, "Instance", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function(e) {
this._requestTimePromise = e;
};
e.prototype.createWorker = function(e) {
var t = new n.SyncWorker(this, e);
this._syncQueue.push(t);
return t;
};
e.prototype.requestSync = function(e) {
if (!this._syncingQueue.includes(e)) {
this._syncingQueue.push(e);
e.beforeSync();
}
};
e.prototype.requestTimeStamp = function() {
return this._requestTimePromise();
};
e.prototype.tick = function(e) {
for (var t = 0, o = this._syncQueue; t < o.length; t++) o[t].tick(e);
this._syncingQueue.length > 0 && this.syncQueue();
};
e.prototype.syncQueue = function() {
for (var e = this, t = 0, o = this._syncingQueue; t < o.length; t++) o[t].beforeSync();
var n = this._syncingQueue.slice();
this._syncingQueue.length = 0;
this._requestTimePromise().then(function(t) {
var o = [];
Promise.all(n.map(function(e) {
return e.sync(t);
})).then(function() {
n.forEach(function(e) {
e.afterSync();
o.includes(e.groupId) || o.push(e.groupId);
});
o.forEach(function(t) {
e.triggerSyncEndHook(t);
});
});
});
};
e.prototype.getHookListByGroup = function(e) {
var t = this._syncEndHooks.get(e);
if (!t) {
t = [];
this._syncEndHooks.set(e, t);
}
return t;
};
e.prototype.addHook = function(e, t) {
var o = this.getHookListByGroup(e);
o.includes(t) || o.push(t);
};
e.prototype.triggerSyncEndHook = function(e) {
var t = this.getHookListByGroup(e);
t.forEach(function(e) {
return e();
});
t.length = 0;
};
e.prototype.forceSync = function(e, t) {
var o = this._syncQueue.filter(function(t) {
return t.checkIsInGroup(e);
});
if (o.length <= 0) {
console.warn("没有指定的同步组" + e + "的同步对象", e);
t && t();
} else {
for (var n = !1, i = 0, r = o; i < r.length; i++) {
var a = r[i];
if (a.checkIsOkToSync()) {
this.requestSync(a);
n = !0;
} else a.checkIsSyncing() && (n = !0);
}
n ? this.addHook(e, t) : t && t();
}
};
e._instance = null;
return e;
}();
o.SyncMaster = i;
cc._RF.pop();
}, {
"./SyncWorker": "SyncWorker"
} ],
SyncWorker: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8fe34tqQdBNpoXthuLf32pb", "SyncWorker");
var n = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SyncWorker = void 0;
var i = e("./SyncMaster"), r = function() {
function e(e, t) {
this._master = null;
this._syncFunc = null;
this._syncStatus = i.SyncStatus.NONE;
this._syncKey = "";
this.groupId = 0;
this._threshold = 10;
this._syncTimeThreshold = 1e4;
this._timer = 0;
this._counter = 0;
this._master = e;
this._syncKey = t;
}
e.prototype.register = function(e, t, o, n) {
this.groupId = e;
this._threshold = o;
this._syncTimeThreshold = n;
this._syncFunc = t;
};
e.prototype.markDirty = function() {
this._syncStatus === i.SyncStatus.NONE ? this._syncStatus = i.SyncStatus.DIRTY : this._syncStatus === i.SyncStatus.SYNCING && (this._syncStatus = i.SyncStatus.SYNCING_DIRTY);
};
e.prototype.syncSolo = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, o = this;
return n(this, function(n) {
switch (n.label) {
case 0:
this.beforeSync();
return [ 4, this._master.requestTimeStamp() ];

case 1:
t = n.sent();
this.sync(t).then(function() {
o.afterSync();
e && e();
});
return [ 2 ];
}
});
});
};
e.prototype.beforeSync = function() {
this._counter = 0;
this._syncStatus = i.SyncStatus.SYNCING;
};
e.prototype.sync = function(e) {
return this._syncFunc(e);
};
e.prototype.afterSync = function() {
this._syncStatus === i.SyncStatus.SYNCING ? this._syncStatus = i.SyncStatus.NONE : this._syncStatus === i.SyncStatus.SYNCING_DIRTY && (this._syncStatus = i.SyncStatus.DIRTY);
this._counter = 0;
this._timer = 0;
};
e.prototype.tick = function(e) {
this._timer += e;
if (this._timer >= this._syncTimeThreshold) {
this._counter = 0;
this.checkIsOkToSync() && this._master.requestSync(this);
}
};
e.prototype.update = function(e) {
this._counter += e;
this.markDirty();
if (this._counter >= this._threshold) {
this._counter = 0;
this.checkIsOkToSync() && this._master.requestSync(this);
}
};
e.prototype.checkIsInGroup = function(e) {
return 0 != (e & this.groupId);
};
e.prototype.checkIsOkToSync = function() {
return this._syncStatus === i.SyncStatus.DIRTY;
};
e.prototype.checkIsSyncing = function() {
return this._syncStatus === i.SyncStatus.SYNCING || this._syncStatus === i.SyncStatus.SYNCING_DIRTY;
};
return e;
}();
o.SyncWorker = r;
cc._RF.pop();
}, {
"./SyncMaster": "SyncMaster"
} ],
TimeControl: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "371c49lLY1F84RHpD2p43Bv", "TimeControl");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TimeControl = void 0;
var r = e("../../GameDataConfig/GameDataConfig"), a = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._start_time = Date.now();
t._limit_time = -1;
return t;
}
Object.defineProperty(t.prototype, "limit_time", {
get: function() {
if (this._limit_time < 0) {
var e = r.default.game_play_config_value("screen_ad_open_condition_time");
this._limit_time = e ? +e.value : 0;
}
return this._limit_time;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "is_open", {
get: function() {
return Date.now() - this._start_time >= 1e3 * this.limit_time;
},
enumerable: !1,
configurable: !0
});
t.prototype.onInit = function() {};
t.prototype.reset_time = function() {
this._start_time = Date.now();
};
return t;
}(e("../../Spript/Singleton").Singleton);
o.TimeControl = a;
cc._RF.pop();
}, {
"../../GameDataConfig/GameDataConfig": "GameDataConfig",
"../../Spript/Singleton": "Singleton"
} ],
Time: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cfa0aKm2etOmJ5h0VVGnxe6", "Time");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.seconds_to_hms = function(e, t) {
void 0 === t && (t = !1);
var o = Math.floor(e % 60), n = Math.floor(e / 60 % 60), i = Math.floor(e / 3600), r = o < 10 ? "0" + o : o, a = n < 10 ? "0" + n : n;
return t && 0 === i ? a + ":" + r : (i < 10 ? "0" + i : i) + ":" + a + ":" + r;
};
e.seconds_to_hms_text = function(e, t) {
void 0 === t && (t = !1);
var o = Math.floor(e / 60 % 60), n = Math.floor(e / 3600), i = o < 10 ? "" + o : o, r = n < 10 ? "" + n : n;
return Number(r) <= 0 ? e < 60 ? e + "秒" : i + "分钟" : r + "小时" + i + "分钟";
};
e.seconds_to_cn_hms = function(e) {
var t = Math.floor(e % 60), o = Math.floor(e / 60 % 60), n = Math.floor(e / 3600 % 24), i = Math.floor(e / 86400), r = t < 10 ? "" + t : t, a = o < 10 ? "" + o : o, c = n < 10 ? "" + n : n;
return 0 === i ? n <= 0 ? a + "分" + r + "秒" : n <= 0 && o <= 0 ? r + "秒" : c + "小时" + a + "分" + r + "秒" : i + "天" + c + "小时" + a + "分" + r + "秒";
};
e.seconds_to_cn_hmsc = function(e) {
var t = Math.floor(e % 60), o = Math.floor(e / 60 % 60), n = Math.floor(e / 3600 % 24), i = Math.floor(e / 86400), r = o < 10 ? "" + o : o, a = n < 10 ? "" + n : n;
return 0 === i ? a + "小时" + r + "分钟" + (t < 10 ? "" + t : t) + "秒" : i + "天" + a + "小时" + r + "分钟";
};
e.get_time = function() {
return new Date().getTime();
};
e.get_second_time = function() {
var e = this.get_time() / 1e3;
return Math.floor(e);
};
e.format_timestamp_to_date = function(e) {
var t = new Date(e);
return "" + t.getFullYear() + (t.getMonth() + 1) + t.getDate();
};
e.cur_time_format_timestamp_to_date = function() {
var e = new Date(this.get_time());
return "" + e.getFullYear() + (e.getMonth() + 1) + e.getDate();
};
e.server_time_format_timestamp_to_date = function(e) {
var t = new Date(e);
return "" + t.getFullYear() + (t.getMonth() + 1) + t.getDate();
};
e.convert_date_to_string = function(e) {
var t = e.split(" "), o = t[0].split("-"), n = t[1].split(":"), i = new Date();
i.setFullYear(o[0]);
i.setMonth(o[1] - 1);
i.setDate(o[2]);
i.setHours(n[0]);
i.setMinutes(n[1]);
i.setSeconds(n[2]);
return i.toISOString();
};
e.is_new_day = function(e, t) {
if (!e || !t) throw new Error("have one date is wrong");
return t.getFullYear() !== e.getFullYear() || t.getMonth() !== e.getMonth() || t.getDate() !== e.getDate();
};
e.days_between = function(e, t) {
var o = e.getMonth() + 1, n = e.getDate(), i = e.getFullYear(), r = t.getMonth() + 1, a = t.getDate(), c = t.getFullYear(), s = (Date.parse(o + "/" + n + "/" + i) - Date.parse(r + "/" + a + "/" + c)) / 864e5;
return Math.abs(s);
};
e.get_end_of_day = function(e) {
return new Date(new Date(e.toLocaleDateString()).getTime() + 864e5 - 1).getTime();
};
e.get_zero_time_stamp_with_day_offset = function(e) {
void 0 === e && (e = 0);
var t = new Date(), o = t.getFullYear(), n = t.getMonth(), i = t.getDate() + e;
return new Date(o, n, i).valueOf();
};
e.dateFormat = function(e, t) {
void 0 === t && (t = "yyyy-MM-dd hh:mm:ss");
var o = "" + e.getFullYear(), n = ("0" + (e.getMonth() + 1)).slice(-2), i = ("0" + e.getDate()).slice(-2), r = ("0" + e.getHours()).slice(-2), a = ("0" + e.getMinutes()).slice(-2), c = ("0" + e.getSeconds()).slice(-2), s = ("000" + e.getMilliseconds()).slice(-3);
return (t || "yyyy-MM-dd hh:mm:ss").replace(/yyyy/g, o).replace(/MM/g, n).replace(/dd/g, i).replace(/hh/g, r).replace(/mm/g, a).replace(/ss/g, c).replace(/ms/g, s);
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
TipToast: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2be46DP0dBCWom38YMbsUO5", "TipToast");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../Framework/Dialog/DialogManager"), c = cc._decorator, s = c.ccclass, l = c.menu, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.text_label = null;
t.bottom_sprite = null;
t._show_timer = null;
t._toast_params = null;
return t;
}
t.prototype.onLoad = function() {
var e = this;
this.bottom_sprite = this.node.getChildByName("bottom_sprite").getComponent(cc.Sprite);
this.text_label = this.bottom_sprite.node.getChildByName("label").getComponent(cc.Label);
this.node.active = !1;
cc.resources.load("font/HYTangMeiRen85W", cc.Font, function(t, o) {
e.text_label.font = o;
});
};
t.prototype.show = function(e) {
var t = this;
if (e && e.text) {
this.node.zIndex = a.DialogManager.ZINDEX++;
this._toast_params = e;
this.text_label.string = this._toast_params.text ? this._toast_params.text : "请填写提示信息";
this.node.x = 0;
this.node.y = 0;
this.node.active = !0;
this.node.stopAllActions();
if (this._show_timer) {
clearTimeout(this._show_timer);
this._show_timer = null;
}
this._show_timer = setTimeout(function() {
clearTimeout(t._show_timer);
t._show_timer = null;
}, 1e3);
this.move_up();
}
};
t.prototype.move_up = function() {
var e = this;
cc.tween(this.node).to(.8, {
y: 50
}).delay(1).call(function() {
e.node.active = !1;
}).start();
};
return r([ s, l("HiFive/TipToast") ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../Framework/Dialog/DialogManager": "DialogManager"
} ],
Toast: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "23be0y17AxJ4KZ+BoHm1+EY", "Toast");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../common/BaseUI"), c = cc._decorator, s = c.ccclass, l = c.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.toast_interface = null;
t.text_label = null;
t.text_label2 = null;
t.bottom_sprite = null;
t.show_timer = null;
return t;
}
t.prototype.start = function() {};
t.prototype.show = function(t) {
var o = this;
e.prototype.show.call(this, t);
this.set_toast_interface(t.param);
this.flush_view();
var n = this.toast_interface.duration ? 1e3 * this.toast_interface.duration : 2e3;
this.show_timer && clearTimeout(this.show_timer);
this.show_timer = setTimeout(function() {
var e, t;
clearTimeout(o.show_timer);
o.on_close_call(null);
(null === (e = o.toast_interface) || void 0 === e ? void 0 : e.finishe_call) && (null === (t = o.toast_interface) || void 0 === t || t.finishe_call());
}, n);
this.toast_interface.animation && this.move_up();
};
t.prototype.set_toast_interface = function(e) {
this.toast_interface = e;
};
t.prototype.flush_view = function() {
this.flush_text_color();
this.flush_bottom_sprite_frame();
if (this.toast_interface.position) {
this.node.x = this.toast_interface.position.x;
this.node.y = this.toast_interface.position.y;
} else {
this.node.x = cc.winSize.width / 2;
this.node.y = cc.winSize.height / 2;
}
this.toast_interface.font_size ? this.text_label.fontSize = this.toast_interface.font_size : this.text_label.fontSize = 44;
this.text_label2.string = this.toast_interface.text ? this.toast_interface.text : "请填写提示信息";
};
t.prototype.flush_bottom_sprite_frame = function() {
this.toast_interface.bottom_sprite_frame && (this.bottom_sprite.spriteFrame = this.toast_interface.bottom_sprite_frame);
};
t.prototype.flush_text_color = function() {
this.toast_interface.text_color && (this.text_label.node.color = cc.Color.BLACK.fromHEX(this.toast_interface.text_color));
};
t.prototype.move_up = function() {
this.bottom_sprite.node.getComponent(cc.Animation).play("toast_move_up");
};
r([ l(cc.RichText) ], t.prototype, "text_label", void 0);
r([ l(cc.Label) ], t.prototype, "text_label2", void 0);
r([ l(cc.Sprite) ], t.prototype, "bottom_sprite", void 0);
return r([ s ], t);
}(a.default);
o.default = u;
cc._RF.pop();
}, {
"../common/BaseUI": "BaseUI"
} ],
Tools: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e145aiBxKdIyqRQtT/+zWxz", "Tools");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.utils = void 0;
var n = e("./crypto-js");
function i(e, t) {
return !isNaN(e) && !isNaN(e) && Math.abs(t - e) <= 1e-6;
}
o.utils = {
isSameArray: function(e, t) {
if (e.length != t.length) return !1;
for (var o = e.length - 1; o >= 0; o--) if (e[1] != t[o]) return !1;
return !0;
},
removeElementsFromArray: function(e, t) {
for (var o = e.length - 1; o >= 0; o--) t.indexOf(e[o]) >= 0 && e.splice(o, 1);
return e;
},
removeElementFromArray: function(e, t, o) {
void 0 === o && (o = 1);
for (var n = 0; n < o; n++) {
for (var i = [], r = 0; r < t.length && i.length < o; r++) t[r] === e && i.push(r);
i.sort(function(e, t) {
return t - e;
});
for (var a = 0, c = i; a < c.length; a++) {
var s = c[a];
t.splice(s, 1);
}
return t;
}
return t;
},
sleep: function(e, t) {
return t ? new Promise(function(o) {
return t.scheduleOnce(o, e / 1e3);
}) : new Promise(function(t) {
return setTimeout(t, e);
});
},
isContinuousAdd: function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
for (var o = Array.from(e), n = !0, r = o.length - 1, a = 0; a < r; a++) if (!(n = n && i(o[a] + 1, o[a + 1]))) return n;
return n;
},
isSameNum: i,
shuffle: function(e) {
for (var t = e.length - 1; t >= 0; t--) {
var o = Math.floor(Math.random() * (t + 1)), n = e[o];
e[o] = e[t], e[t] = n;
}
return e;
},
debounce: function(e, t) {
void 0 === t && (t = 50);
var o;
return function() {
for (var n = this, i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
clearTimeout(o);
o = setTimeout(function() {
e.apply(n, i);
}, t);
};
},
debouncer: function(e) {
return function(t, o, n) {
var i, r = n.value;
n.value = function() {
for (var t = this, o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
clearTimeout(i);
i = setTimeout(function() {
r.apply(t, o);
}, e);
};
return n;
};
},
throttle: function(e, t) {
void 0 === t && (t = 50);
var o = 0;
return function() {
for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
var r = Date.now();
if (r - o >= t) {
e.apply(this, n);
o = r;
}
};
},
throttler: function(e) {
void 0 === e && (e = 50);
return function(t, o, n) {
var i = n.value, r = 0;
n.value = function() {
for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
var n = Date.now();
if (n - r >= e) {
i.apply(this, t);
r = n;
}
};
return n;
};
},
encrypt: function(e, t, o) {
return n.AES.encrypt(e, n.enc.Utf8.parse(t), {
iv: n.enc.Utf8.parse(o),
mode: n.mode.CBC,
padding: n.pad.Pkcs7
}).ciphertext.toString();
},
decrypt: function(e, t, o) {
var i = n.AES.decrypt(n.format.Hex.parse(e), n.enc.Utf8.parse(t), {
iv: n.enc.Utf8.parse(o),
mode: n.mode.CBC,
padding: n.pad.Pkcs7
});
return n.enc.Utf8.stringify(i);
},
deepCopy: function e(t) {
if ("object" != typeof t) return t;
if (null == t) return t;
var o = t.constructor === Array ? [] : {};
for (var n in t) o[n] = e(t[n]);
return o;
},
uniqueArray: function(e) {
for (var t = [], o = 0; o < e.length; o++) -1 === t.indexOf(e[o]) && t.push(e[o]);
return t;
},
isObject: function(e) {
return "object" == typeof e && null !== e;
},
isNumber: function(e) {
return "number" == typeof e && !isNaN(e);
},
getAngle: function(e, t) {
return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI;
}
};
cc._RF.pop();
}, {
"./crypto-js": "crypto-js"
} ],
TouchBlocker: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ed1350nXBxBv5Ke8AkTB6dF", "TouchBlocker");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.target = null;
t.isBlockAll = !1;
t.isPassAll = !1;
return t;
}
t.prototype.onLoad = function() {
this.registerEvent();
};
t.prototype.start = function() {
this.reset();
};
t.prototype.onDestroy = function() {
this.unregisterEvent();
};
t.prototype.registerEvent = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchEvent, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEvent, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEvent, this);
};
t.prototype.unregisterEvent = function() {
this.node.targetOff(this);
};
t.prototype.reset = function() {
this.setSwallowTouches(!1);
};
t.prototype.onTouchEvent = function(e) {
if (!this.isPassAll) if (!this.isBlockAll && this.target) if (this.target.getBoundingBoxToWorld().contains(e.getLocation())) this.targetTouchCallback && this.targetTouchCallback(1); else {
e.stopPropagation();
this.targetTouchCallback && this.targetTouchCallback(0);
} else e.stopPropagation();
};
t.prototype.blockAll = function() {
this.isBlockAll = !0;
this.isPassAll = !1;
};
t.prototype.passAll = function() {
this.isPassAll = !0;
this.isBlockAll = !1;
};
t.prototype.setTarget = function(e, t) {
this.target = e;
this.isBlockAll = !1;
this.isPassAll = !1;
this.targetTouchCallback = t;
};
t.prototype.setSwallowTouches = function(e) {
this.node._touchListener && this.node._touchListener.setSwallowTouches(e);
};
r([ s({
type: cc.Node,
tooltip: ""
}) ], t.prototype, "target", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
TouchComp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e5de9t2ivFLTYmFrp3VjbUb", "TouchComp");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Rectangle = o.CircleSharp = o.PolygonSharp = o.Circle = o.EBoxType = void 0;
var a = cc._decorator, c = a.ccclass, s = a.property;
o.EBoxType = cc.Enum({
Circle: 1,
Rectangle: 2,
Polygon: 3
});
var l = function() {
function e() {
this.node = null;
this.zoom = 1;
this.flag = 0;
}
Object.defineProperty(e.prototype, "word_pos", {
get: function() {
return this.node.convertToWorldSpaceAR(cc.v2());
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
var e = this;
this.zoom = 1;
this.node.on(cc.Node.EventType.POSITION_CHANGED, function() {
e.onChange();
}, this);
this.node.on(cc.Node.EventType.ROTATION_CHANGED, function() {
e.onChange();
}, this);
this.node.on(cc.Node.EventType.SCALE_CHANGED, function() {
e.onChange();
}, this);
};
e.prototype.onChange = function() {
this.flag++;
};
e.prototype.setZoom = function() {
this.zoom = 0;
};
e.prototype.testPointInPolygon = function() {
return !1;
};
e.prototype.intersecting = function() {
return !1;
};
r([ s(cc.Node) ], e.prototype, "node", void 0);
return r([ c("Circle") ], e);
}();
o.Circle = l;
var u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.polygon1 = null;
t.polygon2 = null;
t.points = null;
return t;
}
Object.defineProperty(t.prototype, "polygon", {
get: function() {
return this.polygon1 ? this.polygon1 : this.polygon2;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "word_points", {
get: function() {
var e = this;
this.points = this.polygon.points.map(function(t) {
return e.node.convertToWorldSpaceAR(cc.v2(.95 * t.x, .95 * t.y));
});
this.flag = 0;
return this.points;
},
enumerable: !1,
configurable: !0
});
t.prototype.intersecting = function(e) {
if (!this.polygon || !e.polygon) return !1;
var t = this.word_points, o = e.word_points;
return cc.Intersection.polygonPolygon(t, o);
};
t.prototype.testPointInPolygon = function(e) {
return !!this.polygon && cc.Intersection.pointInPolygon(e, this.word_points);
};
r([ s(cc.PhysicsPolygonCollider) ], t.prototype, "polygon1", void 0);
r([ s(cc.PolygonCollider) ], t.prototype, "polygon2", void 0);
return r([ c("PolygonSharp") ], t);
}(l);
o.PolygonSharp = u;
var p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.center = cc.v2();
t.radius = 1;
return t;
}
t.prototype.intersecting = function(e) {
return this.node.position.sub(e.node.position).mag() < 2 * this.radius;
};
t.prototype.testPointInPolygon = function(e) {
return this.word_pos.sub(e).mag() < this.radius;
};
r([ s(cc.Vec2) ], t.prototype, "center", void 0);
r([ s(cc.Integer) ], t.prototype, "radius", void 0);
return r([ c("CircleSharp") ], t);
}(l);
o.CircleSharp = p;
var f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.touch_node = null;
t.shader_node = null;
return t;
}
Object.defineProperty(t.prototype, "points", {
get: function() {
var e = this.touch_node.getBoundingBoxToWorld();
return [ cc.v2(e.xMin, e.yMin), cc.v2(e.xMax, e.yMin), cc.v2(e.xMax, e.yMax), cc.v2(e.xMin, e.yMax) ];
},
enumerable: !1,
configurable: !0
});
t.prototype.testPointInPolygon = function(e) {
return this.touch_node.getBoundingBoxToWorld().contains(e);
};
t.prototype.intersecting = function(e) {
var t = this.touch_node.getBoundingBoxToWorld(), o = e.touch_node.getBoundingBoxToWorld();
return t.containsRect(o);
};
t.prototype.setZoom = function(e) {
this.zoom = e;
};
r([ s({
type: cc.Node,
displayName: "触摸节点"
}) ], t.prototype, "touch_node", void 0);
r([ s({
type: cc.Node,
displayName: "相加节点"
}) ], t.prototype, "shader_node", void 0);
return r([ c("Rectangle") ], t);
}(l);
o.Rectangle = f;
var h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.type = o.EBoxType.Circle;
t.circle_sharp = null;
t.polygon_sharp = null;
t.rect_sharp = null;
t._shape = null;
return t;
}
Object.defineProperty(t.prototype, "shape", {
get: function() {
if (this._shape) return this._shape;
switch (this.type) {
case o.EBoxType.Rectangle:
this._shape = this.rect_sharp;
break;

case o.EBoxType.Circle:
this._shape = this.circle_sharp;
break;

case o.EBoxType.Polygon:
this._shape = this.polygon_sharp;
}
return this._shape;
},
enumerable: !1,
configurable: !0
});
t.prototype.getSharp = function() {
return this.shape;
};
t.prototype.onLoad = function() {
this.shape.init(1);
};
t.prototype.testPointInPolygon = function(e) {
return this.shape.testPointInPolygon(e);
};
t.prototype.setZoom = function(e) {
void 0 === e && (e = 1);
this.shape.setZoom(e);
};
t.prototype.intersecting = function(e) {
return this.shape.intersecting(e.shape);
};
r([ s({
type: cc.Enum(o.EBoxType)
}) ], t.prototype, "type", void 0);
r([ s({
type: p,
visible: function() {
return this.type == o.EBoxType.Circle;
}
}) ], t.prototype, "circle_sharp", void 0);
r([ s({
type: u,
visible: function() {
return this.type == o.EBoxType.Polygon;
}
}) ], t.prototype, "polygon_sharp", void 0);
r([ s({
type: f,
visible: function() {
return this.type == o.EBoxType.Rectangle;
}
}) ], t.prototype, "rect_sharp", void 0);
return r([ c ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {} ],
UIConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1660dCq+mZDpadBXSN4EI7y", "UIConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = {
Toast: "./CommonPrefab/Toast",
NetworkLoading: "./CommonPrefab/NetworkLoading",
GuideView: "./CommonPrefab/GuideView",
InterView: "./CommonPrefab/InterView",
BannerView: "./CommonPrefab/BannerView"
};
cc._RF.pop();
}, {} ],
UIManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d1f05i+rLVH1oYwgFnde0Lh", "UIManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../Spript/EventConfig"), i = e("../Spript/EventManager"), r = e("./UIConfig"), a = function() {
function e() {}
e.init = function() {
var e = this, t = {
name: n.default.netting_show,
call_back: function() {
e.netting_show();
},
target: this
};
i.default.get_instance().listen(t);
};
e.show_ui = function(e) {
var t = this;
console.log("show ui name = ", e.ui_config_name);
if (!this.ui_is_loading[e.ui_config_name]) {
this.ui_is_loading[e.ui_config_name] = !0;
if (this.all_ui[e.ui_config_name]) {
this.all_ui[e.ui_config_name].show(e);
this.all_ui[e.ui_config_name].controller = e.controller;
this.ui_is_loading[e.ui_config_name] = !1;
Object.keys(this.all_ui);
this.all_ui[e.ui_config_name].node.zIndex = this.max_zindex() + 1;
e.complete_callback && e.complete_callback(this.all_ui[e.ui_config_name]);
this.all_ui[e.ui_config_name].onAddFinished();
} else cc.loader.loadRes(e.ui_config_path, cc.Prefab, function(o, n) {
if (o) {
t.ui_is_loading[e.ui_config_name] = !1;
console.warn("cue show UI: " + e.ui_config_path + " fail");
e.complete_callback && e.complete_callback(null);
} else {
var i = cc.instantiate(n), r = i.getComponent(e.ui_config_name);
r.show(e);
r.controller = e.controller;
r.controller && (r.controller.view = r);
t.all_ui[e.ui_config_name] = r;
t.ui_is_loading[e.ui_config_name] = !1;
Object.keys(t.all_ui);
cc.director.getScene().addChild(i, t.max_zindex() + 1);
e.complete_callback && e.complete_callback(r);
r.onAddFinished();
}
});
}
};
e.show_ui_stack = function(e, t) {
void 0 === t && (t = !1);
console.log("show ui params = ", e.ui_config_name);
e.isStackView = !0;
t ? this.stackList.unshift(e) : this.stackList.push(e);
e.stackSortIndex && this.stackList.sort(function(e, t) {
return e.stackSortIndex && t.stackSortIndex ? e.stackSortIndex - t.stackSortIndex : e.stackSortIndex || t.stackSortIndex ? -1 : 0;
});
1 == this.stackList.length && this.showStackView();
};
e.showStackView = function() {
if (this.stackList.length > 0) {
var e = this.stackList[0];
this.show_ui(e);
}
};
e.popStackView = function(e) {
if (this.stackList.length > 0) {
for (var t = this.stackList.length - 1; t >= 0; t--) if (this.stackList[t] == e) {
this.stackList.splice(t, 1);
break;
}
this.showStackView();
}
};
e.max_zindex = function() {
for (var e = 0, t = 0, o = Object.keys(this.all_ui); t < o.length; t++) {
var n = o[t], i = this.all_ui[n].node;
i.zIndex > e && (e = i.zIndex);
}
return e;
};
e.get_top_node = function() {
for (var e = null, t = 0, o = Object.keys(this.all_ui); t < o.length; t++) {
var n = o[t], i = this.all_ui[n].node;
(!e || i.active && i.zIndex > e.zIndex) && (e = i);
}
return e;
};
e.close_ui = function(e) {
this.all_ui[e] && this.all_ui[e].hide();
};
e.nagivate_route = function(t) {
var o = new t.controller(), n = {
ui_config_path: r.default[t.ui_config_name],
ui_config_name: t.ui_config_name,
controller: o,
param: t.param,
router: t
};
e.show_ui(n);
};
e.test = function() {
i.default.get_instance().emit({
name: n.default.netting_show
});
};
e.hide = function() {
i.default.get_instance().emit({
name: n.default.netting_hide
});
};
e.clear_ui = function() {
for (var e = 0, t = Object.keys(this.all_ui); e < t.length; e++) {
var o = t[e], n = this.all_ui[o].node;
cc.isValid(n) && n.destroy();
}
this.all_ui = {};
this.ui_is_loading = {};
};
e.show_toast = function(t) {
var o;
(o = "string" == typeof t ? {
text: t
} : t).animation = !0;
var n = {
ui_config_path: r.default.Toast,
ui_config_name: "Toast",
param: o
};
e.show_ui(n);
};
e.netting_show = function() {
var t = {
ui_config_path: r.default.NetworkLoading,
ui_config_name: "NetworkLoading",
param: {}
};
e.show_ui(t);
};
e.show_guide_view = function(t) {
var o = {
ui_config_path: r.default.GuideView,
ui_config_name: "GuideView",
param: t
};
e.show_ui(o);
};
e.is_show_view = function() {
for (var e = 0, t = Object.keys(this.all_ui); e < t.length; e++) {
var o = t[e];
if (this.check_is_view_show(o)) return !0;
}
return !1;
};
e.check_is_view_show = function(e) {
var t = this.all_ui[e];
return !(!t || !t.node.active) || this.ui_is_loading[e];
};
e.close_all_views = function() {
for (var e in this.all_ui) {
var t = this.all_ui[e];
t.node.active && t.on_close_call();
}
};
e.ui_is_show = function(t) {
return !!e.all_ui[t] && e.all_ui[t].node.active;
};
e.get_ui = function(t) {
return e.all_ui[t] ? e.all_ui[t].node : null;
};
e.check_is_views_showing = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t];
if (this.check_is_view_show(n)) return !0;
}
return !1;
};
e.all_ui = {};
e.ui_is_loading = {};
e.stackList = [];
return e;
}();
o.default = a;
cc._RF.pop();
}, {
"../Spript/EventConfig": "EventConfig",
"../Spript/EventManager": "EventManager",
"./UIConfig": "UIConfig"
} ],
UIUtils: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b34e50EaQ9GqqpO+dT8zFR6", "UIUtils");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../../Spript/GamePlayEnum"), r = e("../../GameDataConfig/Loader"), a = e("../../GameDataConfig/Utils"), c = cc._decorator, s = c.ccclass, l = (c.property, 
function() {
function e() {
this._normalSpMaterial = null;
this._graySpMaterial = null;
}
t = e;
e.getInstance = function() {
null == t.m_instance && (t.m_instance = new t());
return t.m_instance;
};
e.createRandomBreathAction = function(e, t, o, n) {
return cc.tween().sequence(cc.tween().delay(e), cc.tween().repeatForever(cc.tween().sequence(cc.tween().to(t, {
scale: o
}), cc.tween().to(t, {
scale: n
}))));
};
e.prototype.setSpriteMaterial = function(e, t) {
var o = null;
if (t) {
if (!this._graySpMaterial) {
var n = cc.Material.BUILTIN_NAME.GRAY_SPRITE;
this._graySpMaterial = cc.Material.getBuiltinMaterial(n);
}
o = this._graySpMaterial;
} else {
if (!this._normalSpMaterial) {
var i = cc.Material.BUILTIN_NAME.SPRITE;
this._normalSpMaterial = cc.Material.getBuiltinMaterial(i);
}
o = this._normalSpMaterial;
}
e.setMaterial(0, o);
};
e.prototype.createPrefab_forResources = function(e, t, o) {
cc.loader.loadRes(e, cc.Prefab, function(e, n) {
if (e) console.warn("加载Prefab出现错误, err = " + e); else {
for (var i = cc.instantiate(n), r = !1, a = 0; a < t.children.length; a++) if (t.children[a].name == i.name) {
r = !0;
o && o(t.children[a]);
break;
}
if (r) {
i.parent = t;
o && o(i);
}
}
});
};
e.prototype.createPrefab_forRuning = function(e, t) {
var o = cc.instantiate(e);
o.parent = t;
return o;
};
e.prototype.copyNodeToList = function(e, t) {
if (t.length <= 0) return [];
var o;
if (e < t.length) {
o = t.slice(0, e);
for (var n = e; n < t.length; n++) t[n].destroy();
} else {
o = t.slice(0, t.length);
for (var i = void 0, r = t[0], a = t.length; a < e; a++) {
(i = cc.instantiate(r)).parent = r.parent;
o[a] = i;
t[a] = i;
}
}
o.forEach(function(e) {
return e.active = !0;
});
return o;
};
e.prototype.createSprite = function(e, t) {
cc.loader.loadRes(e, cc.SpriteFrame, function(e, o) {
var n = new cc.Node().addComponent(cc.Sprite);
n.spriteFrame = o;
t && t(n);
});
};
e.prototype.loadSpriteFrame = function(e, t) {
cc.loader.loadRes(e, cc.SpriteFrame, function(e, o) {
e ? console.log("UIUtils::loadSpriteFrame error " + e) : t(o);
});
};
e.prototype.httpDownloadImage = function(e, t) {
"" != e && "undefined" != e && null != e && null != t && cc.loader.load(e + "?aa=aa.jpg", function(o, n) {
if (o) console.log("httpDownloadImage error = " + o + ",url = " + e); else {
var i = new cc.SpriteFrame(n);
t.spriteFrame = i;
}
});
};
e.prototype.playSpine = function(e, t, o, n) {
void 0 === o && (o = !1);
e.setAnimation(0, t, o);
e.setCompleteListener(function() {
n(e);
});
};
e.prototype.createSpine = function(e, t, o) {
void 0 === t && (t = null);
void 0 === o && (o = new cc.Vec2(0, 0));
};
e.prototype.getScaleRadio = function() {
cc.find("Canvas").getComponent(cc.Canvas);
return 0;
};
e.prototype.loadResDir = function(e, t, o, n) {
cc.loader.loadResDir(e, t, o, function(e, o) {
e ? console.log(t + "资源有错：" + e) : n(o);
});
};
e.prototype.loadScene = function(e, t) {
void 0 === t && (t = null);
console.log("前往场景 ：" + e);
t ? cc.director.loadScene(e, t) : cc.director.loadScene(e);
};
e.prototype.setSpriteFrameWithId = function(e, t, o) {
void 0 === o && (o = 100);
e.spriteFrame = null;
var n = Math.floor(t / 1e3), c = null;
n === i.InventoryType.MAT ? c = "GamePlay/PlantIcon/p" + t : n === i.InventoryType.FOOD ? c = "GamePlay/FoodIcon/" + t : n === i.InventoryType.TREASURE ? c = "GamePlay/PlantIcon/p" + t : n === i.InventoryType.NEVER ? c = "GamePlay/PlantIcon/p" + t : console.warn("请检查ID是否合法, id:" + t);
c && r.default.load_texture("" + c, function(t) {
if (e && cc.isValid(e.node)) {
e.spriteFrame = new cc.SpriteFrame(t);
0 !== o && (e.node.scale = 1 * a.default.get_fit_scale(e.node, o, 3));
}
});
};
e.prototype.getInventoryType = function(e) {
return Math.floor(e / 1e3);
};
var t;
e.m_instance = null;
return t = n([ s ], e);
}());
o.default = l;
cc._RF.pop();
}, {
"../../GameDataConfig/Loader": "Loader",
"../../GameDataConfig/Utils": "Utils",
"../../Spript/GamePlayEnum": "GamePlayEnum"
} ],
UserDataSBNMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "26fbf9dUMFGU4rYKT1pKhZ3", "UserDataSBNMgr");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.UserDataResPrefixSBN = o.BattleStateSBN = o.BattleSpineNameSBN = o.MsgUserEnumSBN = void 0;
var n = e("../config/BattleSBNName"), i = e("../config/EnumDeclareSg"), r = e("../config/RankConfig"), a = e("../utils/CoreSBN");
o.MsgUserEnumSBN = {
name_change: "name_change",
head_change: "head_change",
power_change: "power_change",
battle_ani_complete: "battle_ani_complete",
game_start_ani_complete: "game_start_ani_complete"
};
o.BattleSpineNameSBN = {
load_start: "start",
load_loop: "loop",
load_start2: "start2",
load_loop2: "loop2",
load_end: "end",
battle_start: "start",
battle_loop: "loop",
battle_end: "end",
battle_win_start: "win_chu",
battle_win_loop: "win_daiji",
battle_lose_start: "chu",
battle_lose_loop: "daiji"
};
o.BattleStateSBN = {
default: 0,
battle_start: 1,
battle_end: 2
};
o.UserDataResPrefixSBN = {
head: "ningluos_h",
rank: "rankIndex_"
};
var c = function() {
function e() {
this._loclKey = "LocalUserSBNData";
this._powerConsume = 1;
this._powerRecover = 1;
this._userName = "You";
this._userHead = 1;
this._power = 0;
this._maxPower = 10;
this._rank = 0;
this._lastRank = 0;
this._lastTime = 0;
this.countdown = 600;
this._curTime = 0;
this._powerTimer = 0;
this.battleState = o.BattleStateSBN.default;
this.battleLoadingView = null;
this.curEmptyHead = 1;
this.curEmptyName = "";
this.headMaxID = 8;
this.curRankId = 999;
this.rankData = [];
this._timer = 0;
this.currentDayTimer = -1;
}
Object.defineProperty(e, "ins", {
get: function() {
this._instance || (this._instance = new e());
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
this.loadUserData();
this.initPower();
this.initRankData();
this.startTimer();
};
Object.defineProperty(e.prototype, "UserName", {
get: function() {
return this._userName || "";
},
set: function(e) {
e || (e = "");
this._userName = e;
cc.director.emit(o.MsgUserEnumSBN.head_change, e);
this.saveUserData();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "UserHead", {
get: function() {
return this._userHead || 1;
},
set: function(e) {
e || (e = 1);
this._userHead = e;
cc.director.emit(o.MsgUserEnumSBN.head_change, e);
this.saveUserData();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "Rank", {
get: function() {
return this._rank;
},
enumerable: !1,
configurable: !0
});
e.prototype.setRank = function(e) {
e < 0 && (e = 0);
this._rank += e;
this._rank < 0 && (this._rank = 0);
this._rank > r.RankConfig.getMaxStar() && (this._rank = r.RankConfig.getMaxStar());
this.saveUserData();
};
Object.defineProperty(e.prototype, "LastRank", {
get: function() {
return this._lastRank;
},
enumerable: !1,
configurable: !0
});
e.prototype.setLastRank = function(e) {
e < 0 && (e = 0);
this._lastRank += e;
this._lastRank < 0 && (this._lastRank = 0);
this.saveUserData();
};
Object.defineProperty(e.prototype, "Power", {
get: function() {
return this._power;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "PowerConsume", {
get: function() {
return this._powerConsume;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "PowerRecover", {
get: function() {
return this._powerRecover;
},
enumerable: !1,
configurable: !0
});
e.prototype.setPower = function(e, t) {
void 0 === t && (t = !0);
if (e) {
this._power += e;
this._power < 0 && (this._power = 0);
t && a.CoreSBN.message.emit(o.MsgUserEnumSBN.power_change, e);
this.saveUserData();
}
};
e.prototype.consumePower = function(e, t) {
void 0 === t && (t = !0);
if (!e) {
e = 0;
return !0;
}
if (this._power - e >= 0) {
this._power -= e;
t && a.CoreSBN.message.emit(o.MsgUserEnumSBN.power_change, e);
this.saveUserData();
return !0;
}
return !1;
};
Object.defineProperty(e.prototype, "MaxPower", {
get: function() {
return this._maxPower;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "LastTime", {
get: function() {
return this._lastTime || 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "CurTime", {
get: function() {
return this._curTime || 0;
},
enumerable: !1,
configurable: !0
});
e.prototype.initPower = function() {
if (!this._lastTime) {
this._lastTime = Date.now();
this._power = 5;
}
this._curTime || (this._curTime = this.countdown);
if (this._power >= this._maxPower) {
this._lastTime = Date.now();
this._curTime = this.countdown;
} else {
var e = Date.now() - this._lastTime, t = Math.floor(e / (1e3 * this.countdown));
if (t > 0) {
this._power = Math.min(this._maxPower, this._power + t);
this._lastTime = Date.now();
}
if (this._power < this._maxPower) {
var o = Math.ceil(this._curTime - e % (1e3 * this.countdown) / 1e3);
if (o <= 0) {
this._power = Math.min(this._maxPower, this._power + 1);
this._curTime = this.countdown + o;
} else this._curTime = o;
} else this._curTime = this.countdown;
this._lastTime || (this._lastTime = Date.now());
this.saveUserData();
}
};
e.prototype.startTimer = function() {
var e = this, t = this;
t._powerTimer = setInterval(function() {
t.updatePower();
t._lastTime = Date.now();
a.CoreSBN.message.emit(i.EventNameSBN.time_change);
e.timeScend();
t.saveUserData();
}, 1e3);
};
e.prototype.updatePower = function() {
if (this._power < this._maxPower) {
this._curTime--;
if (this._curTime <= 0) {
this.setPower(this.PowerRecover);
this.saveUserData();
this._curTime = this.countdown;
}
} else this._curTime = this.countdown;
};
e.prototype.initRankData = function() {
(!this.rankData || this.rankData.length <= 0) && (this.rankData = this.updateRankData(this.Rank));
};
e.prototype.updateRankData = function(t) {
var o = [];
this.rankData = [];
for (var i = r.RankConfig.getRandInrByStar(t), c = [], s = 0; s < n.BattleSBNName.length; s++) c.push(s);
for (s = 0; s < 9; s++) {
var l = a.CoreSBN.publicFun.getRandomValueChangeByArr(c);
o.push({
name: n.BattleSBNName[l],
id: s,
headIndex: a.CoreSBN.publicFun.getRandomInt(1, e.ins.headMaxID),
star: a.CoreSBN.publicFun.getRandomInt(i[0] + 1, i[1])
});
}
o.push({
name: this.UserName,
id: this.curRankId,
headIndex: this.UserHead,
star: this.Rank
});
this.rankData = o;
return o;
};
e.prototype.timeScend = function() {
var e = a.CoreSBN.publicFun.getCurLingdianTime();
if (e != this.currentDayTimer) {
console.log("change day");
this.currentDayTimer = e;
if (a.CoreSBN.gameData.signinData.todayRewarded) {
a.CoreSBN.gameData.signinData.todayRewarded = !1;
a.CoreSBN.gameData.signinData.totalDays++;
a.CoreSBN.gameData.updateSigninStatus(a.CoreSBN.gameData.signinData);
}
this.updateRankData(this.Rank);
a.CoreSBN.message.emit(i.EventNameSBN.change_day);
}
};
e.prototype.saveUserData = function() {
cc.sys.localStorage.setItem(this._loclKey, JSON.stringify({
power: this._power,
rank: this._rank,
userName: this.UserName,
userHead: this.UserHead,
lastTime: this._lastTime,
curTime: this._curTime,
battleState: this.battleState,
lastRank: this._lastRank,
rankData: this.rankData,
currentDayTimer: this.currentDayTimer
}));
};
e.prototype.loadUserData = function() {
var e = cc.sys.localStorage.getItem(this._loclKey);
if (e) {
var t = JSON.parse(e);
this._userName = t.userName || this._userName;
this._userHead = t.userHead || this._userHead;
this._power = t.power || this._power;
this._lastTime = t.lastTime || this._lastTime;
this._curTime = t.curTime || this._curTime;
this.battleState = t.battleState || this.battleState;
this._rank = t.rank || this._rank;
this._lastRank = t.lastRank || this._lastRank;
this.rankData = t.rankData || this.rankData;
this.currentDayTimer = t.currentDayTimer || this.currentDayTimer;
}
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {
"../config/BattleSBNName": "BattleSBNName",
"../config/EnumDeclareSg": "EnumDeclareSg",
"../config/RankConfig": "RankConfig",
"../utils/CoreSBN": "CoreSBN"
} ],
Utils: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4d42dtOdVJL65OSW3EhfC3i", "Utils");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.deepCopy = function(e) {
var t = Array.isArray(e) ? [] : {};
for (var o in e) t[o] = "object" == typeof e[o] ? this.deepCopy(e[o]) : e[o];
return t;
};
e.money = function(e, t) {
return (e / 100).toFixed(t || 1);
};
e.yuan_100 = function(e, t) {
return (e / 100).toFixed(t || 2);
};
e.sleep = function(e) {
return new Promise(function(t) {
return setTimeout(t, e);
});
};
e.get_ui_interface_sprite_path_and_sprite_name = function(e, t) {
for (var o = [], n = [], i = 0, r = Object.keys(e); i < r.length; i++) {
var a = r[i], c = e[a];
if (e[c]) {
var s = "" + t + c;
o.push(s);
n.push(a);
}
}
return [ n, o ];
};
e.is_long_screen = function() {
return !(cc.winSize.height / cc.winSize.width < 1.9);
};
e.generate_uuid = function(e, t) {
var o, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [];
if (e) for (o = 0; o < e; o++) i[o] = n[0 | Math.random() * t]; else {
var r;
i[8] = i[13] = i[18] = i[23] = "-";
i[14] = "4";
for (o = 0; o < 36; o++) if (!i[o]) {
r = 0 | 16 * Math.random();
i[o] = n[19 === o ? 3 & r | 8 : r];
}
}
return i.join("");
};
e.framing_execute = function(e, t) {
var o = this;
return new Promise(function() {
o.executePreFrame(e, t);
});
};
e.executePreFrame = function(e, t) {
return new Promise(function(o) {
var n = e, i = function() {
for (var e = new Date().getTime(), r = n.next(); ;r = n.next()) {
if (null == r || r.done) {
o();
return;
}
if (new Date().getTime() - e > t) {
cc.director.once(cc.Director.EVENT_AFTER_DRAW, i);
return;
}
}
};
i();
});
};
e.version_compare = function(e, t) {
console.log("cur version = ", e, t);
for (var o = e.split("."), n = t.split("."), i = 0; i < o.length; ++i) {
var r = parseInt(o[i]), a = parseInt(n[i] || 0);
if (r != a) return r - a;
}
return n.length > o.length ? -1 : 0;
};
e.breath_effect = function(e, t, o) {
cc.tween(e).sequence(cc.tween().to(0, {
scale: 1
}), cc.tween().to(.45, {
scale: t
}), cc.tween().to(.15, {
scale: o
}), cc.tween().to(.15, {
scale: 1
}), cc.tween().delay(.25)).repeatForever().start();
};
e.get_fit_scale = function(e, t, o) {
if (1 === o) return t / e.width;
if (2 === o) return t / e.height;
if (3 === o) return Math.min(t / e.width, t / e.height);
console.warn("screen fail", o);
return e.scale;
};
e.get_fit_scale_by_size = function(e, t, o) {
var n = t.width, i = t.height;
if (1 === o) return n / e.width;
if (2 === o) return i / e.height;
if (3 === o) return Math.min(n / e.width, i / e.height);
console.warn("screen fail", o);
return e.scale;
};
e.create_beisizer = function(e, t, o, n, i) {
var r = 3.14159 * i / 180, a = t.x + (o.x - t.x) / 4, c = cc.v2(a, n + t.y + Math.cos(r) * a), s = t.x + (o.x - t.x) / 2, l = cc.v2(s, n + t.y + Math.cos(r) * s);
return cc.bezierTo(e, [ c, l, o ]).easing(cc.easeInOut(.5));
};
e.create_bezier_linear = function(e, t, o, n, i) {
var r = 3.14159 * i / 180, a = t.x + (o.x - t.x) / 4, c = cc.v2(a, n.y + t.y + Math.cos(r) * a), s = t.x + (o.x - t.x) / 2 + n.x, l = cc.v2(s, n.y + t.y + Math.cos(r) * s);
return cc.bezierTo(e, [ c, l, o ]);
};
e.blockTime = function(e) {
return new Promise(function(t) {
setTimeout(function() {
t(1);
}, 1e3 * e);
});
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
ViewBase: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "616d2ggB89JOo6GdKivE+bK", "ViewBase");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgAni = null;
t.openAniName = "openView";
t.closeAniName = "closeView";
return t;
}
t.prototype.onLoad = function() {
var e, t;
null === (e = this.bgAni) || void 0 === e || e.play(this.openAniName);
var o = null === (t = this.bgAni) || void 0 === t ? void 0 : t.getAnimationState(this.openAniName);
this.bgAni && o && this.bgAni.on(cc.Animation.EventType.FINISHED, this.openAniFinsh, this);
this.step();
};
t.prototype.step = function() {};
t.prototype.openAniFinsh = function() {
this.bgAni && this.bgAni.off(cc.Animation.EventType.FINISHED, this.openAniFinsh, this);
};
t.prototype.closeView = function() {
var e, t = this;
null === (e = t.bgAni) || void 0 === e || e.play(t.closeAniName);
var o = t.getCloseAnimationTime();
o ? t.scheduleOnce(function() {
t.closeAniFinsh();
}, o) : this.closeAniFinsh();
};
t.prototype.closeAniFinsh = function() {
var e;
null === (e = this.node) || void 0 === e || e.destroy();
};
t.prototype.getCloseAnimationTime = function() {
var e, t = null === (e = this.bgAni) || void 0 === e ? void 0 : e.getAnimationState(this.closeAniName);
return null != t ? t.duration : 0;
};
r([ s(cc.Animation) ], t.prototype, "bgAni", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
ViewSBNBase: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0bf807EqL5BgYbRJypQfh+F", "ViewSBNBase");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.backMaskColorPri = cc.color(0, 0, 0, 178);
t.background = null;
t.main = null;
t._blockInputEvents = !0;
t.animDuration = .3;
t.blocker = null;
t.options = null;
t.finishCallback = null;
return t;
}
Object.defineProperty(t.prototype, "blockInputEvents", {
get: function() {
return this._blockInputEvents;
},
set: function(e) {
if (e !== this._blockInputEvents) {
this._blockInputEvents = e;
this._updateInputEventsBlock();
}
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
var t;
null === (t = e.prototype.onLoad) || void 0 === t || t.call(this);
this._updateInputEventsBlock();
this._updateBackgroundMask();
var o = this.getComponent(cc.Widget);
null == o && (o = this.addComponent(cc.Widget));
o.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
o.isAlignTop = !0;
o.isAlignBottom = !0;
o.isAlignLeft = !0;
o.isAlignRight = !0;
o.top = 0;
o.bottom = 0;
o.left = 0;
o.right = 0;
o.enabled = !1;
o.updateAlignment();
};
t.prototype.show = function(e, t) {
var o = this;
void 0 === t && (t = this.animDuration);
return new Promise(function(n) {
o.options = e;
var i = o.background, r = o.main;
o.node.active = !0;
i.active = !0;
i.opacity = 0;
r.active = !0;
r.scale = .5;
r.opacity = 0;
o.init(o.options);
o.updateDisplay(o.options);
cc.tween(i).to(.8 * t, {
opacity: 200
}).start();
cc.tween(r).to(t, {
scale: 1,
opacity: 255
}, {
easing: "backOut"
}).call(function() {
o.onShow && o.onShow();
n();
}).start();
});
};
t.prototype.hide = function(e, t) {
var o = this;
void 0 === e && (e = !1);
void 0 === t && (t = this.animDuration);
return new Promise(function(n) {
var i = o.node;
if (0 !== t) {
var r = o.blocker;
if (!r) {
(r = o.blocker = new cc.Node("blocker")).addComponent(cc.BlockInputEvents);
r.setParent(i);
r.setContentSize(i.getContentSize());
}
r.active = !0;
}
cc.tween(o.background).delay(.2 * t).to(.8 * t, {
opacity: 0
}).start();
cc.tween(o.main).to(t, {
scale: .5,
opacity: 0
}, {
easing: "backIn"
}).call(function() {
o.blocker && (o.blocker.active = !1);
i.active = !1;
o.onHide && o.onHide(e);
n();
o.finishCallback && o.finishCallback(e);
}).start();
});
};
t.prototype.init = function() {};
t.prototype.updateDisplay = function() {};
t.prototype.onShow = function() {};
t.prototype.onHide = function() {};
t.prototype.setFinishCallback = function(e) {
this.finishCallback = e;
};
t.prototype._updateInputEventsBlock = function() {
var e = this.getComponent(cc.BlockInputEvents);
if (this._blockInputEvents) {
null == e && (e = this.addComponent(cc.BlockInputEvents));
e.enabled = !0;
} else null != e && (e.enabled = !1);
};
t.prototype._updateBackgroundMask = function() {
var e, t = null !== (e = this.getComponent(cc.Graphics)) && void 0 !== e ? e : this.addComponent(cc.Graphics);
t.clear();
t.fillColor = this.backMaskColorPri;
t.fillRect(-2e3, -2e3, 4e3, 4e3);
t.close();
};
r([ s({
serializable: !0,
tooltip: "指定背景遮罩颜色，如不需要遮罩可直接设置透明度为 0"
}) ], t.prototype, "backMaskColorPri", void 0);
r([ s({
tooltip: "指定是否拦截触摸事件"
}) ], t.prototype, "blockInputEvents", null);
r([ s({
type: cc.Node,
tooltip: !1
}) ], t.prototype, "background", void 0);
r([ s({
type: cc.Node,
tooltip: !1
}) ], t.prototype, "main", void 0);
r([ s({
serializable: !0
}) ], t.prototype, "_blockInputEvents", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
ViewSBNMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "02925hx7I9J/qnkPailPbn9", "ViewSBNMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__awaiter || function(e, t, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
r(e);
}
}
function c(e) {
try {
s(n.throw(e));
} catch (e) {
r(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function c(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c, s, l = e("../commen/ViewSBNBase");
(function(e) {
e[e.Once = 1] = "Once";
e[e.Normal = 2] = "Normal";
e[e.Frequent = 3] = "Frequent";
})(c || (c = {}));
(function(e) {
e[e.Done = 1] = "Done";
e[e.Failed = 2] = "Failed";
e[e.Waiting = 3] = "Waiting";
})(s || (s = {}));
var u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._prefabCache = new Map();
t._nodeCache = new Map();
t._current = null;
t._queue = [];
t._suspended = [];
t.locked = !1;
t.container = null;
t.interval = .05;
t.loadStartCallback = null;
t.loadFinishCallback = null;
return t;
}
Object.defineProperty(t.prototype, "prefabCache", {
get: function() {
return this._prefabCache;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "nodeCache", {
get: function() {
return this._nodeCache;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "current", {
get: function() {
return this._current;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "queue", {
get: function() {
return this._queue;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "suspended", {
get: function() {
return this._suspended;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "CacheMode", {
get: function() {
return c;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "ShowResult", {
get: function() {
return s;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this.container = this.node;
};
t.prototype.show = function(e, t, o) {
var n = this;
return new Promise(function(i) {
return r(n, void 0, void 0, function() {
var n, c, u, p, f = this;
return a(this, function(h) {
switch (h.label) {
case 0:
o = this.parseParams(o);
if (!this._current && !this.locked) return [ 3, 3 ];
if (!o || !o.immediately) return [ 3, 2 ];
this.locked = !1;
return [ 4, this.suspend() ];

case 1:
h.sent();
return [ 3, 3 ];

case 2:
this.push(e, t, o);
i(s.Waiting);
return [ 2 ];

case 3:
this._current = {
path: e,
options: t,
params: o
};
n = this.getNodeFromCache(e);
if (cc.isValid(n)) return [ 3, 5 ];
this.loadStartCallback && this.loadStartCallback();
return [ 4, this.load(e) ];

case 4:
c = h.sent();
this.loadFinishCallback && this.loadFinishCallback();
if (!cc.isValid(c)) {
cc.warn("[PopupManager]", "弹窗加载失败", e);
this._current = null;
i(s.Failed);
return [ 2 ];
}
n = cc.instantiate(c);
h.label = 5;

case 5:
if (!(u = n.getComponent(l.default))) {
cc.warn("[PopupManager]", "未找到弹窗组件", e);
this._current = null;
i(s.Failed);
return [ 2 ];
}
this._current.popup = u;
this._current.node = n;
n.setParent(this.container || cc.Canvas.instance.node);
n.setSiblingIndex(cc.macro.MAX_ZINDEX);
p = function(t) {
return r(f, void 0, void 0, function() {
var r = this;
return a(this, function(a) {
switch (a.label) {
case 0:
if (t) return [ 2 ];
this.locked = this._suspended.length > 0 || this._queue.length > 0;
this.recycle(e, n, o.mode);
this._current = null;
i(s.Done);
return [ 4, new Promise(function(e) {
cc.Canvas.instance.scheduleOnce(e, r.interval);
}) ];

case 1:
a.sent();
this.next();
return [ 2 ];
}
});
});
};
u.setFinishCallback(p);
u.show(t);
return [ 2 ];
}
});
});
});
};
t.prototype.hide = function() {
this._current.popup && this._current.popup.hide();
};
t.prototype.getNodeFromCache = function(e) {
var t = this._nodeCache;
if (t.has(e)) {
var o = t.get(e);
if (cc.isValid(o)) return o;
t.delete(e);
}
var n = this._prefabCache;
if (n.has(e)) {
var i = n.get(e);
if (cc.isValid(i)) {
i.addRef();
return cc.instantiate(i);
}
n.delete(e);
}
return null;
};
t.prototype.next = function() {
if (!(this._current || 0 === this._suspended.length && 0 === this._queue.length)) {
var e = null;
e = this._suspended.length > 0 ? this._suspended.shift() : this._queue.shift();
this.locked = !1;
if (cc.isValid(e.popup)) {
this._current = e;
e.node.setParent(this.container);
e.popup.show(e.options);
} else this.show(e.path, e.options, e.params);
}
};
t.prototype.push = function(e, t, o) {
if (this._current || this.locked) {
this._queue.push({
path: e,
options: t,
params: o
});
this._queue.sort(function(e, t) {
return e.params.priority - t.params.priority;
});
} else this.show(e, t, o);
};
t.prototype.suspend = function() {
return r(this, void 0, void 0, function() {
var e;
return a(this, function(t) {
switch (t.label) {
case 0:
if (!this._current) return [ 2 ];
e = this._current;
this._suspended.push(e);
return [ 4, e.popup.hide(!0) ];

case 1:
t.sent();
this._current = null;
return [ 2 ];
}
});
});
};
t.prototype.recycle = function(e, t, o) {
switch (o) {
case c.Once:
this._nodeCache.delete(e);
t.destroy();
this.release(e);
break;

case c.Normal:
this._nodeCache.delete(e);
t.destroy();
break;

case c.Frequent:
t.removeFromParent(!1);
this._nodeCache.set(e, t);
}
};
t.prototype.load = function(e) {
var t = this;
return new Promise(function(o) {
var n = t._prefabCache;
if (n.has(e)) {
var i = n.get(e);
if (cc.isValid(i)) {
o(i);
return;
}
n.delete(e);
}
cc.resources.load(e, function(t, i) {
if (t) o(null); else {
n.set(e, i);
o(i);
}
});
});
};
t.prototype.getPrefabCom = function(e) {
return this.prefabCache.get(e) || null;
};
t.prototype.release = function(e) {
var t = this._nodeCache, o = t.get(e);
if (o) {
t.delete(e);
cc.isValid(o) && o.destroy();
o = null;
}
var n = this._prefabCache, i = n.get(e);
if (i) {
i.refCount <= 1 && n.delete(e);
i.decRef();
i = null;
}
};
t.prototype.parseParams = function(e) {
if (null == e) return new p();
if ("[object Object]" !== Object.prototype.toString.call(e)) {
cc.warn("[PopupManager]", "弹窗参数无效，使用默认参数");
return new p();
}
null == e.mode && (e.mode = c.Normal);
null == e.priority && (e.priority = 0);
null == e.immediately && (e.immediately = !1);
return e;
};
return t;
}(cc.Component);
o.default = u;
var p = function() {
this.mode = c.Normal;
this.priority = 0;
this.immediately = !1;
};
cc._RF.pop();
}, {
"../commen/ViewSBNBase": "ViewSBNBase"
} ],
VirItemRender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "95624pU+lBDSbX+iIXW7Rv9", "VirItemRender");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isClick = !1;
return t;
}
Object.defineProperty(t.prototype, "data", {
get: function() {
return this._data;
},
set: function(e) {
this._data = e;
this.dataChanged();
},
enumerable: !1,
configurable: !0
});
t.prototype.dataChanged = function() {};
t.prototype.refreshData = function() {
this.dataChanged();
};
t.prototype.onDestroy = function() {
this._data = null;
};
t.prototype.setTouchCallback = function(e, t) {
this.callback = e;
this.cbThis = t;
if (this.node) {
this.node.hasEventListener(cc.Node.EventType.TOUCH_END) && this.node.off(cc.Node.EventType.TOUCH_END, this.onClickCallback, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onClickCallback, this);
}
};
t.prototype.onClickCallback = function() {
this.callback && this.callback.call(this.cbThis, this.data);
};
r([ s({
displayName: "click"
}) ], t.prototype, "isClick", void 0);
return r([ c ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
WebViewJsBridge: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "24c89j+t1JMtJjDG8OnsXW3", "WebViewJsBridge");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.WebViewJsBridge = void 0;
var n = e("../../Spript/CommonEnum"), i = function() {
function e() {
this.m_notificationCenter = null;
this.m_WebViewJavascriptBridge = null;
this.initEventTarget();
}
e.getInstance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
e.prototype.initEventTarget = function() {
this.m_notificationCenter = new cc.EventTarget();
};
e.prototype.NativejsInit = function() {
this.registerHandler();
};
e.prototype.jsNativeInit = function(e) {
this.setupWebViewJavascriptBridge(function(t) {
console.log("==注册=WebViewJavascriptBridge=" + t + " " + t.init);
null != t && null != t.init && t.init(function(e, t) {
console.log("Javascript 接收从oc发送过来的信息:", e);
t && t({
"Javascript Responds": "Wee!"
});
});
window.WebViewJavascriptBridge = t;
e && e();
}.bind(this));
};
e.prototype.setupWebViewJavascriptBridge = function(e) {
if (window.WebViewJavascriptBridge) e(window.WebViewJavascriptBridge); else {
if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
window.WVJBCallbacks = [ e ];
var t = document.createElement("iframe");
t.style.display = "none";
this.m_platformIsAndroid ? document.addEventListener("WebViewJavascriptBridgeReady", function() {
e(window.WebViewJavascriptBridge);
}, !1) : t.src = "https://__BRIDGE_LOADED__";
document.documentElement.appendChild(t);
setTimeout(function() {
document.documentElement.removeChild(t);
}, 0);
}
};
e.prototype.registerHandler = function() {
var e = this;
window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.registerHandler("NENativeCallH5", function(t, o) {
console.log("==客户端调JS==", JSON.stringify(t));
var i = JSON.parse(t);
if (i.func == n.EventName.webReload) {
console.log("webviewjsbridge 收到 webReload的数据.");
o && o(i);
e.m_notificationCenter.emit(n.EventName.webReload, "test webReload.");
}
if (i.func == n.EventName.webLeave) {
console.log("webviewjsbridge 收到 webLeave的数据.");
o && o(i);
e.m_notificationCenter.emit(n.EventName.webLeave, "test webLeave");
}
});
};
e.prototype.callHandler = function(e, t) {
console.log("==JS调客户端=", JSON.stringify(e));
window.WebViewJavascriptBridge.callHandler("NEH5CallNative", e, t);
};
e.prototype.bridgeSend = function(e) {
console.log("==JS给客户端发送消息=", JSON.stringify(e));
window.location.href = e;
};
e.prototype.getWebViewJavaScriptBridge = function() {
return this.m_WebViewJavascriptBridge;
};
e.prototype.getNotificatonCenter = function() {
return this.m_notificationCenter;
};
e._instance = null;
return e;
}();
o.WebViewJsBridge = i;
window.WebViewJavascriptBridge = null;
window.WVJBCallbacks = null;
cc._RF.pop();
}, {
"../../Spript/CommonEnum": "CommonEnum"
} ],
"crypto-js": [ function(e, t) {
(function(o) {
"use strict";
cc._RF.push(t, "f5ee7l7NRZGv7I0gXqlAXz2", "crypto-js");
var n = t.exports;
(function(o) {
i = function() {
var t, n, i, r, a, c = c || function(t) {
var n;
"undefined" != typeof window && window.crypto && (n = window.crypto);
"undefined" != typeof self && self.crypto && (n = self.crypto);
"undefined" != typeof globalThis && globalThis.crypto && (n = globalThis.crypto);
!n && "undefined" != typeof window && window.msCrypto && (n = window.msCrypto);
!n && "undefined" != typeof o && o.crypto && (n = o.crypto);
if (!n && "function" == typeof e) try {
n = e("../lib/crypto");
} catch (e) {}
var i = function() {
if (n) {
if ("function" == typeof n.getRandomValues) try {
return n.getRandomValues(new Uint32Array(1))[0];
} catch (e) {}
if ("function" == typeof n.randomBytes) try {
return n.randomBytes(4).readInt32LE();
} catch (e) {}
}
throw new Error("Native crypto module could not be used to get secure random number.");
}, r = Object.create || function() {
function e() {}
return function(t) {
var o;
e.prototype = t;
o = new e();
e.prototype = null;
return o;
};
}(), a = {}, c = a.lib = {}, s = c.Base = {
extend: function(e) {
var t = r(this);
e && t.mixIn(e);
t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
t.$super.init.apply(this, arguments);
});
t.init.prototype = t;
t.$super = this;
return t;
},
create: function() {
var e = this.extend();
e.init.apply(e, arguments);
return e;
},
init: function() {},
mixIn: function(e) {
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
e.hasOwnProperty("toString") && (this.toString = e.toString);
},
clone: function() {
return this.init.prototype.extend(this);
}
}, l = c.WordArray = s.extend({
init: function(e, t) {
e = this.words = e || [];
this.sigBytes = null != t ? t : 4 * e.length;
},
toString: function(e) {
return (e || p).stringify(this);
},
concat: function(e) {
var t = this.words, o = e.words, n = this.sigBytes, i = e.sigBytes;
this.clamp();
if (n % 4) for (var r = 0; r < i; r++) {
var a = o[r >>> 2] >>> 24 - r % 4 * 8 & 255;
t[n + r >>> 2] |= a << 24 - (n + r) % 4 * 8;
} else for (var c = 0; c < i; c += 4) t[n + c >>> 2] = o[c >>> 2];
this.sigBytes += i;
return this;
},
clamp: function() {
var e = this.words, o = this.sigBytes;
e[o >>> 2] &= 4294967295 << 32 - o % 4 * 8;
e.length = t.ceil(o / 4);
},
clone: function() {
var e = s.clone.call(this);
e.words = this.words.slice(0);
return e;
},
random: function(e) {
for (var t = [], o = 0; o < e; o += 4) t.push(i());
return new l.init(t, e);
}
}), u = a.enc = {}, p = u.Hex = {
stringify: function(e) {
for (var t = e.words, o = e.sigBytes, n = [], i = 0; i < o; i++) {
var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
n.push((r >>> 4).toString(16));
n.push((15 & r).toString(16));
}
return n.join("");
},
parse: function(e) {
for (var t = e.length, o = [], n = 0; n < t; n += 2) o[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
return new l.init(o, t / 2);
}
}, f = u.Latin1 = {
stringify: function(e) {
for (var t = e.words, o = e.sigBytes, n = [], i = 0; i < o; i++) {
var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
n.push(String.fromCharCode(r));
}
return n.join("");
},
parse: function(e) {
for (var t = e.length, o = [], n = 0; n < t; n++) o[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
return new l.init(o, t);
}
}, h = u.Utf8 = {
stringify: function(e) {
try {
return decodeURIComponent(escape(f.stringify(e)));
} catch (e) {
throw new Error("Malformed UTF-8 data");
}
},
parse: function(e) {
return f.parse(unescape(encodeURIComponent(e)));
}
}, d = c.BufferedBlockAlgorithm = s.extend({
reset: function() {
this._data = new l.init();
this._nDataBytes = 0;
},
_append: function(e) {
"string" == typeof e && (e = h.parse(e));
this._data.concat(e);
this._nDataBytes += e.sigBytes;
},
_process: function(e) {
var o, n = this._data, i = n.words, r = n.sigBytes, a = this.blockSize, c = r / (4 * a), s = (c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * a, u = t.min(4 * s, r);
if (s) {
for (var p = 0; p < s; p += a) this._doProcessBlock(i, p);
o = i.splice(0, s);
n.sigBytes -= u;
}
return new l.init(o, u);
},
clone: function() {
var e = s.clone.call(this);
e._data = this._data.clone();
return e;
},
_minBufferSize: 0
}), _ = (c.Hasher = d.extend({
cfg: s.extend(),
init: function(e) {
this.cfg = this.cfg.extend(e);
this.reset();
},
reset: function() {
d.reset.call(this);
this._doReset();
},
update: function(e) {
this._append(e);
this._process();
return this;
},
finalize: function(e) {
e && this._append(e);
return this._doFinalize();
},
blockSize: 16,
_createHelper: function(e) {
return function(t, o) {
return new e.init(o).finalize(t);
};
},
_createHmacHelper: function(e) {
return function(t, o) {
return new _.HMAC.init(e, o).finalize(t);
};
}
}), a.algo = {});
return a;
}(Math);
n = (t = c).lib, i = n.Base, r = n.WordArray, (a = t.x64 = {}).Word = i.extend({
init: function(e, t) {
this.high = e;
this.low = t;
}
}), a.WordArray = i.extend({
init: function(e, t) {
e = this.words = e || [];
this.sigBytes = null != t ? t : 8 * e.length;
},
toX32: function() {
for (var e = this.words, t = e.length, o = [], n = 0; n < t; n++) {
var i = e[n];
o.push(i.high);
o.push(i.low);
}
return r.create(o, this.sigBytes);
},
clone: function() {
for (var e = i.clone.call(this), t = e.words = this.words.slice(0), o = t.length, n = 0; n < o; n++) t[n] = t[n].clone();
return e;
}
});
(function() {
if ("function" == typeof ArrayBuffer) {
var e = c.lib.WordArray, t = e.init;
(e.init = function(e) {
e instanceof ArrayBuffer && (e = new Uint8Array(e));
(e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
if (e instanceof Uint8Array) {
for (var o = e.byteLength, n = [], i = 0; i < o; i++) n[i >>> 2] |= e[i] << 24 - i % 4 * 8;
t.call(this, n, o);
} else t.apply(this, arguments);
}).prototype = e;
}
})();
(function() {
var e = c, t = e.lib.WordArray, o = e.enc;
o.Utf16 = o.Utf16BE = {
stringify: function(e) {
for (var t = e.words, o = e.sigBytes, n = [], i = 0; i < o; i += 2) {
var r = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
n.push(String.fromCharCode(r));
}
return n.join("");
},
parse: function(e) {
for (var o = e.length, n = [], i = 0; i < o; i++) n[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
return t.create(n, 2 * o);
}
};
o.Utf16LE = {
stringify: function(e) {
for (var t = e.words, o = e.sigBytes, i = [], r = 0; r < o; r += 2) {
var a = n(t[r >>> 2] >>> 16 - r % 4 * 8 & 65535);
i.push(String.fromCharCode(a));
}
return i.join("");
},
parse: function(e) {
for (var o = e.length, i = [], r = 0; r < o; r++) i[r >>> 1] |= n(e.charCodeAt(r) << 16 - r % 2 * 16);
return t.create(i, 2 * o);
}
};
function n(e) {
return e << 8 & 4278255360 | e >>> 8 & 16711935;
}
})();
(function() {
var e = c, t = e.lib.WordArray;
e.enc.Base64 = {
stringify: function(e) {
var t = e.words, o = e.sigBytes, n = this._map;
e.clamp();
for (var i = [], r = 0; r < o; r += 3) for (var a = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, c = 0; c < 4 && r + .75 * c < o; c++) i.push(n.charAt(a >>> 6 * (3 - c) & 63));
var s = n.charAt(64);
if (s) for (;i.length % 4; ) i.push(s);
return i.join("");
},
parse: function(e) {
var t = e.length, n = this._map, i = this._reverseMap;
if (!i) {
i = this._reverseMap = [];
for (var r = 0; r < n.length; r++) i[n.charCodeAt(r)] = r;
}
var a = n.charAt(64);
if (a) {
var c = e.indexOf(a);
-1 !== c && (t = c);
}
return o(e, t, i);
},
_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
function o(e, o, n) {
for (var i = [], r = 0, a = 0; a < o; a++) if (a % 4) {
var c = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
i[r >>> 2] |= c << 24 - r % 4 * 8;
r++;
}
return t.create(i, r);
}
})();
(function() {
var e = c, t = e.lib.WordArray;
e.enc.Base64url = {
stringify: function(e, t) {
void 0 === t && (t = !0);
var o = e.words, n = e.sigBytes, i = t ? this._safe_map : this._map;
e.clamp();
for (var r = [], a = 0; a < n; a += 3) for (var c = (o[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (o[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | o[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) r.push(i.charAt(c >>> 6 * (3 - s) & 63));
var l = i.charAt(64);
if (l) for (;r.length % 4; ) r.push(l);
return r.join("");
},
parse: function(e, t) {
void 0 === t && (t = !0);
var n = e.length, i = t ? this._safe_map : this._map, r = this._reverseMap;
if (!r) {
r = this._reverseMap = [];
for (var a = 0; a < i.length; a++) r[i.charCodeAt(a)] = a;
}
var c = i.charAt(64);
if (c) {
var s = e.indexOf(c);
-1 !== s && (n = s);
}
return o(e, n, r);
},
_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
_safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
};
function o(e, o, n) {
for (var i = [], r = 0, a = 0; a < o; a++) if (a % 4) {
var c = n[e.charCodeAt(a - 1)] << a % 4 * 2 | n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
i[r >>> 2] |= c << 24 - r % 4 * 8;
r++;
}
return t.create(i, r);
}
})();
(function(e) {
var t = c, o = t.lib, n = o.WordArray, i = o.Hasher, r = t.algo, a = [];
(function() {
for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
})();
var s = r.MD5 = i.extend({
_doReset: function() {
this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
},
_doProcessBlock: function(e, t) {
for (var o = 0; o < 16; o++) {
var n = t + o, i = e[n];
e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
}
var r = this._hash.words, c = e[t + 0], s = e[t + 1], h = e[t + 2], d = e[t + 3], _ = e[t + 4], g = e[t + 5], y = e[t + 6], m = e[t + 7], v = e[t + 8], b = e[t + 9], S = e[t + 10], w = e[t + 11], B = e[t + 12], C = e[t + 13], N = e[t + 14], P = e[t + 15], O = r[0], R = r[1], k = r[2], A = r[3];
O = l(O, R, k, A, c, 7, a[0]);
A = l(A, O, R, k, s, 12, a[1]);
k = l(k, A, O, R, h, 17, a[2]);
R = l(R, k, A, O, d, 22, a[3]);
O = l(O, R, k, A, _, 7, a[4]);
A = l(A, O, R, k, g, 12, a[5]);
k = l(k, A, O, R, y, 17, a[6]);
R = l(R, k, A, O, m, 22, a[7]);
O = l(O, R, k, A, v, 7, a[8]);
A = l(A, O, R, k, b, 12, a[9]);
k = l(k, A, O, R, S, 17, a[10]);
R = l(R, k, A, O, w, 22, a[11]);
O = l(O, R, k, A, B, 7, a[12]);
A = l(A, O, R, k, C, 12, a[13]);
k = l(k, A, O, R, N, 17, a[14]);
O = u(O, R = l(R, k, A, O, P, 22, a[15]), k, A, s, 5, a[16]);
A = u(A, O, R, k, y, 9, a[17]);
k = u(k, A, O, R, w, 14, a[18]);
R = u(R, k, A, O, c, 20, a[19]);
O = u(O, R, k, A, g, 5, a[20]);
A = u(A, O, R, k, S, 9, a[21]);
k = u(k, A, O, R, P, 14, a[22]);
R = u(R, k, A, O, _, 20, a[23]);
O = u(O, R, k, A, b, 5, a[24]);
A = u(A, O, R, k, N, 9, a[25]);
k = u(k, A, O, R, d, 14, a[26]);
R = u(R, k, A, O, v, 20, a[27]);
O = u(O, R, k, A, C, 5, a[28]);
A = u(A, O, R, k, h, 9, a[29]);
k = u(k, A, O, R, m, 14, a[30]);
O = p(O, R = u(R, k, A, O, B, 20, a[31]), k, A, g, 4, a[32]);
A = p(A, O, R, k, v, 11, a[33]);
k = p(k, A, O, R, w, 16, a[34]);
R = p(R, k, A, O, N, 23, a[35]);
O = p(O, R, k, A, s, 4, a[36]);
A = p(A, O, R, k, _, 11, a[37]);
k = p(k, A, O, R, m, 16, a[38]);
R = p(R, k, A, O, S, 23, a[39]);
O = p(O, R, k, A, C, 4, a[40]);
A = p(A, O, R, k, c, 11, a[41]);
k = p(k, A, O, R, d, 16, a[42]);
R = p(R, k, A, O, y, 23, a[43]);
O = p(O, R, k, A, b, 4, a[44]);
A = p(A, O, R, k, B, 11, a[45]);
k = p(k, A, O, R, P, 16, a[46]);
O = f(O, R = p(R, k, A, O, h, 23, a[47]), k, A, c, 6, a[48]);
A = f(A, O, R, k, m, 10, a[49]);
k = f(k, A, O, R, N, 15, a[50]);
R = f(R, k, A, O, g, 21, a[51]);
O = f(O, R, k, A, B, 6, a[52]);
A = f(A, O, R, k, d, 10, a[53]);
k = f(k, A, O, R, S, 15, a[54]);
R = f(R, k, A, O, s, 21, a[55]);
O = f(O, R, k, A, v, 6, a[56]);
A = f(A, O, R, k, P, 10, a[57]);
k = f(k, A, O, R, y, 15, a[58]);
R = f(R, k, A, O, C, 21, a[59]);
O = f(O, R, k, A, _, 6, a[60]);
A = f(A, O, R, k, w, 10, a[61]);
k = f(k, A, O, R, h, 15, a[62]);
R = f(R, k, A, O, b, 21, a[63]);
r[0] = r[0] + O | 0;
r[1] = r[1] + R | 0;
r[2] = r[2] + k | 0;
r[3] = r[3] + A | 0;
},
_doFinalize: function() {
var t = this._data, o = t.words, n = 8 * this._nDataBytes, i = 8 * t.sigBytes;
o[i >>> 5] |= 128 << 24 - i % 32;
var r = e.floor(n / 4294967296), a = n;
o[15 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
o[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
t.sigBytes = 4 * (o.length + 1);
this._process();
for (var c = this._hash, s = c.words, l = 0; l < 4; l++) {
var u = s[l];
s[l] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
}
return c;
},
clone: function() {
var e = i.clone.call(this);
e._hash = this._hash.clone();
return e;
}
});
function l(e, t, o, n, i, r, a) {
var c = e + (t & o | ~t & n) + i + a;
return (c << r | c >>> 32 - r) + t;
}
function u(e, t, o, n, i, r, a) {
var c = e + (t & n | o & ~n) + i + a;
return (c << r | c >>> 32 - r) + t;
}
function p(e, t, o, n, i, r, a) {
var c = e + (t ^ o ^ n) + i + a;
return (c << r | c >>> 32 - r) + t;
}
function f(e, t, o, n, i, r, a) {
var c = e + (o ^ (t | ~n)) + i + a;
return (c << r | c >>> 32 - r) + t;
}
t.MD5 = i._createHelper(s);
t.HmacMD5 = i._createHmacHelper(s);
})(Math);
(function() {
var e = c, t = e.lib, o = t.WordArray, n = t.Hasher, i = e.algo, r = [], a = i.SHA1 = n.extend({
_doReset: function() {
this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(e, t) {
for (var o = this._hash.words, n = o[0], i = o[1], a = o[2], c = o[3], s = o[4], l = 0; l < 80; l++) {
if (l < 16) r[l] = 0 | e[t + l]; else {
var u = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16];
r[l] = u << 1 | u >>> 31;
}
var p = (n << 5 | n >>> 27) + s + r[l];
p += l < 20 ? 1518500249 + (i & a | ~i & c) : l < 40 ? 1859775393 + (i ^ a ^ c) : l < 60 ? (i & a | i & c | a & c) - 1894007588 : (i ^ a ^ c) - 899497514;
s = c;
c = a;
a = i << 30 | i >>> 2;
i = n;
n = p;
}
o[0] = o[0] + n | 0;
o[1] = o[1] + i | 0;
o[2] = o[2] + a | 0;
o[3] = o[3] + c | 0;
o[4] = o[4] + s | 0;
},
_doFinalize: function() {
var e = this._data, t = e.words, o = 8 * this._nDataBytes, n = 8 * e.sigBytes;
t[n >>> 5] |= 128 << 24 - n % 32;
t[14 + (n + 64 >>> 9 << 4)] = Math.floor(o / 4294967296);
t[15 + (n + 64 >>> 9 << 4)] = o;
e.sigBytes = 4 * t.length;
this._process();
return this._hash;
},
clone: function() {
var e = n.clone.call(this);
e._hash = this._hash.clone();
return e;
}
});
e.SHA1 = n._createHelper(a);
e.HmacSHA1 = n._createHmacHelper(a);
})();
(function(e) {
var t = c, o = t.lib, n = o.WordArray, i = o.Hasher, r = t.algo, a = [], s = [];
(function() {
function t(t) {
for (var o = e.sqrt(t), n = 2; n <= o; n++) if (!(t % n)) return !1;
return !0;
}
function o(e) {
return 4294967296 * (e - (0 | e)) | 0;
}
for (var n = 2, i = 0; i < 64; ) {
if (t(n)) {
i < 8 && (a[i] = o(e.pow(n, .5)));
s[i] = o(e.pow(n, .3333333333333333));
i++;
}
n++;
}
})();
var l = [], u = r.SHA256 = i.extend({
_doReset: function() {
this._hash = new n.init(a.slice(0));
},
_doProcessBlock: function(e, t) {
for (var o = this._hash.words, n = o[0], i = o[1], r = o[2], a = o[3], c = o[4], u = o[5], p = o[6], f = o[7], h = 0; h < 64; h++) {
if (h < 16) l[h] = 0 | e[t + h]; else {
var d = l[h - 15], _ = (d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3, g = l[h - 2], y = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
l[h] = _ + l[h - 7] + y + l[h - 16];
}
var m = n & i ^ n & r ^ i & r, v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), b = f + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & u ^ ~c & p) + s[h] + l[h];
f = p;
p = u;
u = c;
c = a + b | 0;
a = r;
r = i;
i = n;
n = b + (v + m) | 0;
}
o[0] = o[0] + n | 0;
o[1] = o[1] + i | 0;
o[2] = o[2] + r | 0;
o[3] = o[3] + a | 0;
o[4] = o[4] + c | 0;
o[5] = o[5] + u | 0;
o[6] = o[6] + p | 0;
o[7] = o[7] + f | 0;
},
_doFinalize: function() {
var t = this._data, o = t.words, n = 8 * this._nDataBytes, i = 8 * t.sigBytes;
o[i >>> 5] |= 128 << 24 - i % 32;
o[14 + (i + 64 >>> 9 << 4)] = e.floor(n / 4294967296);
o[15 + (i + 64 >>> 9 << 4)] = n;
t.sigBytes = 4 * o.length;
this._process();
return this._hash;
},
clone: function() {
var e = i.clone.call(this);
e._hash = this._hash.clone();
return e;
}
});
t.SHA256 = i._createHelper(u);
t.HmacSHA256 = i._createHmacHelper(u);
})(Math);
(function() {
var e = c, t = e.lib.WordArray, o = e.algo, n = o.SHA256, i = o.SHA224 = n.extend({
_doReset: function() {
this._hash = new t.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
},
_doFinalize: function() {
var e = n._doFinalize.call(this);
e.sigBytes -= 4;
return e;
}
});
e.SHA224 = n._createHelper(i);
e.HmacSHA224 = n._createHmacHelper(i);
})();
(function() {
var e = c, t = e.lib.Hasher, o = e.x64, n = o.Word, i = o.WordArray, r = e.algo;
function a() {
return n.create.apply(n, arguments);
}
var s = [ a(1116352408, 3609767458), a(1899447441, 602891725), a(3049323471, 3964484399), a(3921009573, 2173295548), a(961987163, 4081628472), a(1508970993, 3053834265), a(2453635748, 2937671579), a(2870763221, 3664609560), a(3624381080, 2734883394), a(310598401, 1164996542), a(607225278, 1323610764), a(1426881987, 3590304994), a(1925078388, 4068182383), a(2162078206, 991336113), a(2614888103, 633803317), a(3248222580, 3479774868), a(3835390401, 2666613458), a(4022224774, 944711139), a(264347078, 2341262773), a(604807628, 2007800933), a(770255983, 1495990901), a(1249150122, 1856431235), a(1555081692, 3175218132), a(1996064986, 2198950837), a(2554220882, 3999719339), a(2821834349, 766784016), a(2952996808, 2566594879), a(3210313671, 3203337956), a(3336571891, 1034457026), a(3584528711, 2466948901), a(113926993, 3758326383), a(338241895, 168717936), a(666307205, 1188179964), a(773529912, 1546045734), a(1294757372, 1522805485), a(1396182291, 2643833823), a(1695183700, 2343527390), a(1986661051, 1014477480), a(2177026350, 1206759142), a(2456956037, 344077627), a(2730485921, 1290863460), a(2820302411, 3158454273), a(3259730800, 3505952657), a(3345764771, 106217008), a(3516065817, 3606008344), a(3600352804, 1432725776), a(4094571909, 1467031594), a(275423344, 851169720), a(430227734, 3100823752), a(506948616, 1363258195), a(659060556, 3750685593), a(883997877, 3785050280), a(958139571, 3318307427), a(1322822218, 3812723403), a(1537002063, 2003034995), a(1747873779, 3602036899), a(1955562222, 1575990012), a(2024104815, 1125592928), a(2227730452, 2716904306), a(2361852424, 442776044), a(2428436474, 593698344), a(2756734187, 3733110249), a(3204031479, 2999351573), a(3329325298, 3815920427), a(3391569614, 3928383900), a(3515267271, 566280711), a(3940187606, 3454069534), a(4118630271, 4000239992), a(116418474, 1914138554), a(174292421, 2731055270), a(289380356, 3203993006), a(460393269, 320620315), a(685471733, 587496836), a(852142971, 1086792851), a(1017036298, 365543100), a(1126000580, 2618297676), a(1288033470, 3409855158), a(1501505948, 4234509866), a(1607167915, 987167468), a(1816402316, 1246189591) ], l = [];
(function() {
for (var e = 0; e < 80; e++) l[e] = a();
})();
var u = r.SHA512 = t.extend({
_doReset: function() {
this._hash = new i.init([ new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209) ]);
},
_doProcessBlock: function(e, t) {
for (var o = this._hash.words, n = o[0], i = o[1], r = o[2], a = o[3], c = o[4], u = o[5], p = o[6], f = o[7], h = n.high, d = n.low, _ = i.high, g = i.low, y = r.high, m = r.low, v = a.high, b = a.low, S = c.high, w = c.low, B = u.high, C = u.low, N = p.high, P = p.low, O = f.high, R = f.low, k = h, A = d, I = _, D = g, L = y, x = m, T = v, M = b, j = S, E = w, F = B, V = C, H = N, U = P, G = O, z = R, W = 0; W < 80; W++) {
var q, J, K = l[W];
if (W < 16) {
J = K.high = 0 | e[t + 2 * W];
q = K.low = 0 | e[t + 2 * W + 1];
} else {
var Y = l[W - 15], X = Y.high, Z = Y.low, Q = (X >>> 1 | Z << 31) ^ (X >>> 8 | Z << 24) ^ X >>> 7, $ = (Z >>> 1 | X << 31) ^ (Z >>> 8 | X << 24) ^ (Z >>> 7 | X << 25), ee = l[W - 2], te = ee.high, oe = ee.low, ne = (te >>> 19 | oe << 13) ^ (te << 3 | oe >>> 29) ^ te >>> 6, ie = (oe >>> 19 | te << 13) ^ (oe << 3 | te >>> 29) ^ (oe >>> 6 | te << 26), re = l[W - 7], ae = re.high, ce = re.low, se = l[W - 16], le = se.high, ue = se.low;
J = (J = (J = Q + ae + ((q = $ + ce) >>> 0 < $ >>> 0 ? 1 : 0)) + ne + ((q += ie) >>> 0 < ie >>> 0 ? 1 : 0)) + le + ((q += ue) >>> 0 < ue >>> 0 ? 1 : 0);
K.high = J;
K.low = q;
}
var pe, fe = j & F ^ ~j & H, he = E & V ^ ~E & U, de = k & I ^ k & L ^ I & L, _e = A & D ^ A & x ^ D & x, ge = (k >>> 28 | A << 4) ^ (k << 30 | A >>> 2) ^ (k << 25 | A >>> 7), ye = (A >>> 28 | k << 4) ^ (A << 30 | k >>> 2) ^ (A << 25 | k >>> 7), me = (j >>> 14 | E << 18) ^ (j >>> 18 | E << 14) ^ (j << 23 | E >>> 9), ve = (E >>> 14 | j << 18) ^ (E >>> 18 | j << 14) ^ (E << 23 | j >>> 9), be = s[W], Se = be.high, we = be.low, Be = G + me + ((pe = z + ve) >>> 0 < z >>> 0 ? 1 : 0), Ce = ye + _e;
G = H;
z = U;
H = F;
U = V;
F = j;
V = E;
j = T + (Be = (Be = (Be = Be + fe + ((pe += he) >>> 0 < he >>> 0 ? 1 : 0)) + Se + ((pe += we) >>> 0 < we >>> 0 ? 1 : 0)) + J + ((pe += q) >>> 0 < q >>> 0 ? 1 : 0)) + ((E = M + pe | 0) >>> 0 < M >>> 0 ? 1 : 0) | 0;
T = L;
M = x;
L = I;
x = D;
I = k;
D = A;
k = Be + (ge + de + (Ce >>> 0 < ye >>> 0 ? 1 : 0)) + ((A = pe + Ce | 0) >>> 0 < pe >>> 0 ? 1 : 0) | 0;
}
d = n.low = d + A;
n.high = h + k + (d >>> 0 < A >>> 0 ? 1 : 0);
g = i.low = g + D;
i.high = _ + I + (g >>> 0 < D >>> 0 ? 1 : 0);
m = r.low = m + x;
r.high = y + L + (m >>> 0 < x >>> 0 ? 1 : 0);
b = a.low = b + M;
a.high = v + T + (b >>> 0 < M >>> 0 ? 1 : 0);
w = c.low = w + E;
c.high = S + j + (w >>> 0 < E >>> 0 ? 1 : 0);
C = u.low = C + V;
u.high = B + F + (C >>> 0 < V >>> 0 ? 1 : 0);
P = p.low = P + U;
p.high = N + H + (P >>> 0 < U >>> 0 ? 1 : 0);
R = f.low = R + z;
f.high = O + G + (R >>> 0 < z >>> 0 ? 1 : 0);
},
_doFinalize: function() {
var e = this._data, t = e.words, o = 8 * this._nDataBytes, n = 8 * e.sigBytes;
t[n >>> 5] |= 128 << 24 - n % 32;
t[30 + (n + 128 >>> 10 << 5)] = Math.floor(o / 4294967296);
t[31 + (n + 128 >>> 10 << 5)] = o;
e.sigBytes = 4 * t.length;
this._process();
return this._hash.toX32();
},
clone: function() {
var e = t.clone.call(this);
e._hash = this._hash.clone();
return e;
},
blockSize: 32
});
e.SHA512 = t._createHelper(u);
e.HmacSHA512 = t._createHmacHelper(u);
})();
(function() {
var e = c, t = e.x64, o = t.Word, n = t.WordArray, i = e.algo, r = i.SHA512, a = i.SHA384 = r.extend({
_doReset: function() {
this._hash = new n.init([ new o.init(3418070365, 3238371032), new o.init(1654270250, 914150663), new o.init(2438529370, 812702999), new o.init(355462360, 4144912697), new o.init(1731405415, 4290775857), new o.init(2394180231, 1750603025), new o.init(3675008525, 1694076839), new o.init(1203062813, 3204075428) ]);
},
_doFinalize: function() {
var e = r._doFinalize.call(this);
e.sigBytes -= 16;
return e;
}
});
e.SHA384 = r._createHelper(a);
e.HmacSHA384 = r._createHmacHelper(a);
})();
(function(e) {
var t = c, o = t.lib, n = o.WordArray, i = o.Hasher, r = t.x64.Word, a = t.algo, s = [], l = [], u = [];
(function() {
for (var e = 1, t = 0, o = 0; o < 24; o++) {
s[e + 5 * t] = (o + 1) * (o + 2) / 2 % 64;
var n = (2 * e + 3 * t) % 5;
e = t % 5;
t = n;
}
for (e = 0; e < 5; e++) for (t = 0; t < 5; t++) l[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
for (var i = 1, a = 0; a < 24; a++) {
for (var c = 0, p = 0, f = 0; f < 7; f++) {
if (1 & i) {
var h = (1 << f) - 1;
h < 32 ? p ^= 1 << h : c ^= 1 << h - 32;
}
128 & i ? i = i << 1 ^ 113 : i <<= 1;
}
u[a] = r.create(c, p);
}
})();
var p = [];
(function() {
for (var e = 0; e < 25; e++) p[e] = r.create();
})();
var f = a.SHA3 = i.extend({
cfg: i.cfg.extend({
outputLength: 512
}),
_doReset: function() {
for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new r.init();
this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
},
_doProcessBlock: function(e, t) {
for (var o = this._state, n = this.blockSize / 2, i = 0; i < n; i++) {
var r = e[t + 2 * i], a = e[t + 2 * i + 1];
r = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
(R = o[i]).high ^= a;
R.low ^= r;
}
for (var c = 0; c < 24; c++) {
for (var f = 0; f < 5; f++) {
for (var h = 0, d = 0, _ = 0; _ < 5; _++) {
h ^= (R = o[f + 5 * _]).high;
d ^= R.low;
}
var g = p[f];
g.high = h;
g.low = d;
}
for (f = 0; f < 5; f++) {
var y = p[(f + 4) % 5], m = p[(f + 1) % 5], v = m.high, b = m.low;
for (h = y.high ^ (v << 1 | b >>> 31), d = y.low ^ (b << 1 | v >>> 31), _ = 0; _ < 5; _++) {
(R = o[f + 5 * _]).high ^= h;
R.low ^= d;
}
}
for (var S = 1; S < 25; S++) {
var w = (R = o[S]).high, B = R.low, C = s[S];
if (C < 32) {
h = w << C | B >>> 32 - C;
d = B << C | w >>> 32 - C;
} else {
h = B << C - 32 | w >>> 64 - C;
d = w << C - 32 | B >>> 64 - C;
}
var N = p[l[S]];
N.high = h;
N.low = d;
}
var P = p[0], O = o[0];
P.high = O.high;
P.low = O.low;
for (f = 0; f < 5; f++) for (_ = 0; _ < 5; _++) {
var R = o[S = f + 5 * _], k = p[S], A = p[(f + 1) % 5 + 5 * _], I = p[(f + 2) % 5 + 5 * _];
R.high = k.high ^ ~A.high & I.high;
R.low = k.low ^ ~A.low & I.low;
}
R = o[0];
var D = u[c];
R.high ^= D.high;
R.low ^= D.low;
}
},
_doFinalize: function() {
var t = this._data, o = t.words, i = (this._nDataBytes, 8 * t.sigBytes), r = 32 * this.blockSize;
o[i >>> 5] |= 1 << 24 - i % 32;
o[(e.ceil((i + 1) / r) * r >>> 5) - 1] |= 128;
t.sigBytes = 4 * o.length;
this._process();
for (var a = this._state, c = this.cfg.outputLength / 8, s = c / 8, l = [], u = 0; u < s; u++) {
var p = a[u], f = p.high, h = p.low;
f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
l.push(h);
l.push(f);
}
return new n.init(l, c);
},
clone: function() {
for (var e = i.clone.call(this), t = e._state = this._state.slice(0), o = 0; o < 25; o++) t[o] = t[o].clone();
return e;
}
});
t.SHA3 = i._createHelper(f);
t.HmacSHA3 = i._createHmacHelper(f);
})(Math);
(function() {
var e = c, t = e.lib, o = t.WordArray, n = t.Hasher, i = e.algo, r = o.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), a = o.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), s = o.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), l = o.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), u = o.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), p = o.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]), f = i.RIPEMD160 = n.extend({
_doReset: function() {
this._hash = o.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(e, t) {
for (var o = 0; o < 16; o++) {
var n = t + o, i = e[n];
e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
}
var c, f, v, b, S, w, B, C, N, P, O, R = this._hash.words, k = u.words, A = p.words, I = r.words, D = a.words, L = s.words, x = l.words;
w = c = R[0];
B = f = R[1];
C = v = R[2];
N = b = R[3];
P = S = R[4];
for (o = 0; o < 80; o += 1) {
O = c + e[t + I[o]] | 0;
O += o < 16 ? h(f, v, b) + k[0] : o < 32 ? d(f, v, b) + k[1] : o < 48 ? _(f, v, b) + k[2] : o < 64 ? g(f, v, b) + k[3] : y(f, v, b) + k[4];
O = (O = m(O |= 0, L[o])) + S | 0;
c = S;
S = b;
b = m(v, 10);
v = f;
f = O;
O = w + e[t + D[o]] | 0;
O += o < 16 ? y(B, C, N) + A[0] : o < 32 ? g(B, C, N) + A[1] : o < 48 ? _(B, C, N) + A[2] : o < 64 ? d(B, C, N) + A[3] : h(B, C, N) + A[4];
O = (O = m(O |= 0, x[o])) + P | 0;
w = P;
P = N;
N = m(C, 10);
C = B;
B = O;
}
O = R[1] + v + N | 0;
R[1] = R[2] + b + P | 0;
R[2] = R[3] + S + w | 0;
R[3] = R[4] + c + B | 0;
R[4] = R[0] + f + C | 0;
R[0] = O;
},
_doFinalize: function() {
var e = this._data, t = e.words, o = 8 * this._nDataBytes, n = 8 * e.sigBytes;
t[n >>> 5] |= 128 << 24 - n % 32;
t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
e.sigBytes = 4 * (t.length + 1);
this._process();
for (var i = this._hash, r = i.words, a = 0; a < 5; a++) {
var c = r[a];
r[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
}
return i;
},
clone: function() {
var e = n.clone.call(this);
e._hash = this._hash.clone();
return e;
}
});
function h(e, t, o) {
return e ^ t ^ o;
}
function d(e, t, o) {
return e & t | ~e & o;
}
function _(e, t, o) {
return (e | ~t) ^ o;
}
function g(e, t, o) {
return e & o | t & ~o;
}
function y(e, t, o) {
return e ^ (t | ~o);
}
function m(e, t) {
return e << t | e >>> 32 - t;
}
e.RIPEMD160 = n._createHelper(f);
e.HmacRIPEMD160 = n._createHmacHelper(f);
})(Math);
(function() {
var e = c, t = e.lib.Base, o = e.enc.Utf8;
e.algo.HMAC = t.extend({
init: function(e, t) {
e = this._hasher = new e.init();
"string" == typeof t && (t = o.parse(t));
var n = e.blockSize, i = 4 * n;
t.sigBytes > i && (t = e.finalize(t));
t.clamp();
for (var r = this._oKey = t.clone(), a = this._iKey = t.clone(), c = r.words, s = a.words, l = 0; l < n; l++) {
c[l] ^= 1549556828;
s[l] ^= 909522486;
}
r.sigBytes = a.sigBytes = i;
this.reset();
},
reset: function() {
var e = this._hasher;
e.reset();
e.update(this._iKey);
},
update: function(e) {
this._hasher.update(e);
return this;
},
finalize: function(e) {
var t = this._hasher, o = t.finalize(e);
t.reset();
return t.finalize(this._oKey.clone().concat(o));
}
});
})();
(function() {
var e = c, t = e.lib, o = t.Base, n = t.WordArray, i = e.algo, r = i.SHA1, a = i.HMAC, s = i.PBKDF2 = o.extend({
cfg: o.extend({
keySize: 4,
hasher: r,
iterations: 1
}),
init: function(e) {
this.cfg = this.cfg.extend(e);
},
compute: function(e, t) {
for (var o = this.cfg, i = a.create(o.hasher, e), r = n.create(), c = n.create([ 1 ]), s = r.words, l = c.words, u = o.keySize, p = o.iterations; s.length < u; ) {
var f = i.update(t).finalize(c);
i.reset();
for (var h = f.words, d = h.length, _ = f, g = 1; g < p; g++) {
_ = i.finalize(_);
i.reset();
for (var y = _.words, m = 0; m < d; m++) h[m] ^= y[m];
}
r.concat(f);
l[0]++;
}
r.sigBytes = 4 * u;
return r;
}
});
e.PBKDF2 = function(e, t, o) {
return s.create(o).compute(e, t);
};
})();
(function() {
var e = c, t = e.lib, o = t.Base, n = t.WordArray, i = e.algo, r = i.MD5, a = i.EvpKDF = o.extend({
cfg: o.extend({
keySize: 4,
hasher: r,
iterations: 1
}),
init: function(e) {
this.cfg = this.cfg.extend(e);
},
compute: function(e, t) {
for (var o, i = this.cfg, r = i.hasher.create(), a = n.create(), c = a.words, s = i.keySize, l = i.iterations; c.length < s; ) {
o && r.update(o);
o = r.update(e).finalize(t);
r.reset();
for (var u = 1; u < l; u++) {
o = r.finalize(o);
r.reset();
}
a.concat(o);
}
a.sigBytes = 4 * s;
return a;
}
});
e.EvpKDF = function(e, t, o) {
return a.create(o).compute(e, t);
};
})();
c.lib.Cipher || function(e) {
var t = c, o = t.lib, n = o.Base, i = o.WordArray, r = o.BufferedBlockAlgorithm, a = t.enc, s = (a.Utf8, 
a.Base64), l = t.algo.EvpKDF, u = o.Cipher = r.extend({
cfg: n.extend(),
createEncryptor: function(e, t) {
return this.create(this._ENC_XFORM_MODE, e, t);
},
createDecryptor: function(e, t) {
return this.create(this._DEC_XFORM_MODE, e, t);
},
init: function(e, t, o) {
this.cfg = this.cfg.extend(o);
this._xformMode = e;
this._key = t;
this.reset();
},
reset: function() {
r.reset.call(this);
this._doReset();
},
process: function(e) {
this._append(e);
return this._process();
},
finalize: function(e) {
e && this._append(e);
return this._doFinalize();
},
keySize: 4,
ivSize: 4,
_ENC_XFORM_MODE: 1,
_DEC_XFORM_MODE: 2,
_createHelper: function() {
function e(e) {
return "string" == typeof e ? v : y;
}
return function(t) {
return {
encrypt: function(o, n, i) {
return e(n).encrypt(t, o, n, i);
},
decrypt: function(o, n, i) {
return e(n).decrypt(t, o, n, i);
}
};
};
}()
}), p = (o.StreamCipher = u.extend({
_doFinalize: function() {
return this._process(!0);
},
blockSize: 1
}), t.mode = {}), f = o.BlockCipherMode = n.extend({
createEncryptor: function(e, t) {
return this.Encryptor.create(e, t);
},
createDecryptor: function(e, t) {
return this.Decryptor.create(e, t);
},
init: function(e, t) {
this._cipher = e;
this._iv = t;
}
}), h = p.CBC = function() {
var t = f.extend();
t.Encryptor = t.extend({
processBlock: function(e, t) {
var n = this._cipher, i = n.blockSize;
o.call(this, e, t, i);
n.encryptBlock(e, t);
this._prevBlock = e.slice(t, t + i);
}
});
t.Decryptor = t.extend({
processBlock: function(e, t) {
var n = this._cipher, i = n.blockSize, r = e.slice(t, t + i);
n.decryptBlock(e, t);
o.call(this, e, t, i);
this._prevBlock = r;
}
});
function o(t, o, n) {
var i, r = this._iv;
if (r) {
i = r;
this._iv = e;
} else i = this._prevBlock;
for (var a = 0; a < n; a++) t[o + a] ^= i[a];
}
return t;
}(), d = (t.pad = {}).Pkcs7 = {
pad: function(e, t) {
for (var o = 4 * t, n = o - e.sigBytes % o, r = n << 24 | n << 16 | n << 8 | n, a = [], c = 0; c < n; c += 4) a.push(r);
var s = i.create(a, n);
e.concat(s);
},
unpad: function(e) {
var t = 255 & e.words[e.sigBytes - 1 >>> 2];
e.sigBytes -= t;
}
}, _ = (o.BlockCipher = u.extend({
cfg: u.cfg.extend({
mode: h,
padding: d
}),
reset: function() {
var e;
u.reset.call(this);
var t = this.cfg, o = t.iv, n = t.mode;
if (this._xformMode == this._ENC_XFORM_MODE) e = n.createEncryptor; else {
e = n.createDecryptor;
this._minBufferSize = 1;
}
if (this._mode && this._mode.__creator == e) this._mode.init(this, o && o.words); else {
this._mode = e.call(n, this, o && o.words);
this._mode.__creator = e;
}
},
_doProcessBlock: function(e, t) {
this._mode.processBlock(e, t);
},
_doFinalize: function() {
var e, t = this.cfg.padding;
if (this._xformMode == this._ENC_XFORM_MODE) {
t.pad(this._data, this.blockSize);
e = this._process(!0);
} else {
e = this._process(!0);
t.unpad(e);
}
return e;
},
blockSize: 4
}), o.CipherParams = n.extend({
init: function(e) {
this.mixIn(e);
},
toString: function(e) {
return (e || this.formatter).stringify(this);
}
})), g = (t.format = {}).OpenSSL = {
stringify: function(e) {
var t = e.ciphertext, o = e.salt;
return (o ? i.create([ 1398893684, 1701076831 ]).concat(o).concat(t) : t).toString(s);
},
parse: function(e) {
var t, o = s.parse(e), n = o.words;
if (1398893684 == n[0] && 1701076831 == n[1]) {
t = i.create(n.slice(2, 4));
n.splice(0, 4);
o.sigBytes -= 16;
}
return _.create({
ciphertext: o,
salt: t
});
}
}, y = o.SerializableCipher = n.extend({
cfg: n.extend({
format: g
}),
encrypt: function(e, t, o, n) {
n = this.cfg.extend(n);
var i = e.createEncryptor(o, n), r = i.finalize(t), a = i.cfg;
return _.create({
ciphertext: r,
key: o,
iv: a.iv,
algorithm: e,
mode: a.mode,
padding: a.padding,
blockSize: e.blockSize,
formatter: n.format
});
},
decrypt: function(e, t, o, n) {
n = this.cfg.extend(n);
t = this._parse(t, n.format);
return e.createDecryptor(o, n).finalize(t.ciphertext);
},
_parse: function(e, t) {
return "string" == typeof e ? t.parse(e, this) : e;
}
}), m = (t.kdf = {}).OpenSSL = {
execute: function(e, t, o, n) {
n || (n = i.random(8));
var r = l.create({
keySize: t + o
}).compute(e, n), a = i.create(r.words.slice(t), 4 * o);
r.sigBytes = 4 * t;
return _.create({
key: r,
iv: a,
salt: n
});
}
}, v = o.PasswordBasedCipher = y.extend({
cfg: y.cfg.extend({
kdf: m
}),
encrypt: function(e, t, o, n) {
var i = (n = this.cfg.extend(n)).kdf.execute(o, e.keySize, e.ivSize);
n.iv = i.iv;
var r = y.encrypt.call(this, e, t, i.key, n);
r.mixIn(i);
return r;
},
decrypt: function(e, t, o, n) {
n = this.cfg.extend(n);
t = this._parse(t, n.format);
var i = n.kdf.execute(o, e.keySize, e.ivSize, t.salt);
n.iv = i.iv;
return y.decrypt.call(this, e, t, i.key, n);
}
});
}();
c.mode.CFB = function() {
var e = c.lib.BlockCipherMode.extend();
e.Encryptor = e.extend({
processBlock: function(e, o) {
var n = this._cipher, i = n.blockSize;
t.call(this, e, o, i, n);
this._prevBlock = e.slice(o, o + i);
}
});
e.Decryptor = e.extend({
processBlock: function(e, o) {
var n = this._cipher, i = n.blockSize, r = e.slice(o, o + i);
t.call(this, e, o, i, n);
this._prevBlock = r;
}
});
function t(e, t, o, n) {
var i, r = this._iv;
if (r) {
i = r.slice(0);
this._iv = void 0;
} else i = this._prevBlock;
n.encryptBlock(i, 0);
for (var a = 0; a < o; a++) e[t + a] ^= i[a];
}
return e;
}();
c.mode.CTR = function() {
var e = c.lib.BlockCipherMode.extend(), t = e.Encryptor = e.extend({
processBlock: function(e, t) {
var o = this._cipher, n = o.blockSize, i = this._iv, r = this._counter;
if (i) {
r = this._counter = i.slice(0);
this._iv = void 0;
}
var a = r.slice(0);
o.encryptBlock(a, 0);
r[n - 1] = r[n - 1] + 1 | 0;
for (var c = 0; c < n; c++) e[t + c] ^= a[c];
}
});
e.Decryptor = t;
return e;
}();
c.mode.CTRGladman = function() {
var e = c.lib.BlockCipherMode.extend();
function t(e) {
if (255 == (e >> 24 & 255)) {
var t = e >> 16 & 255, o = e >> 8 & 255, n = 255 & e;
if (255 === t) {
t = 0;
if (255 === o) {
o = 0;
255 === n ? n = 0 : ++n;
} else ++o;
} else ++t;
e = 0;
e += t << 16;
e += o << 8;
e += n;
} else e += 16777216;
return e;
}
function o(e) {
0 === (e[0] = t(e[0])) && (e[1] = t(e[1]));
return e;
}
var n = e.Encryptor = e.extend({
processBlock: function(e, t) {
var n = this._cipher, i = n.blockSize, r = this._iv, a = this._counter;
if (r) {
a = this._counter = r.slice(0);
this._iv = void 0;
}
o(a);
var c = a.slice(0);
n.encryptBlock(c, 0);
for (var s = 0; s < i; s++) e[t + s] ^= c[s];
}
});
e.Decryptor = n;
return e;
}();
c.mode.OFB = function() {
var e = c.lib.BlockCipherMode.extend(), t = e.Encryptor = e.extend({
processBlock: function(e, t) {
var o = this._cipher, n = o.blockSize, i = this._iv, r = this._keystream;
if (i) {
r = this._keystream = i.slice(0);
this._iv = void 0;
}
o.encryptBlock(r, 0);
for (var a = 0; a < n; a++) e[t + a] ^= r[a];
}
});
e.Decryptor = t;
return e;
}();
c.mode.ECB = function() {
var e = c.lib.BlockCipherMode.extend();
e.Encryptor = e.extend({
processBlock: function(e, t) {
this._cipher.encryptBlock(e, t);
}
});
e.Decryptor = e.extend({
processBlock: function(e, t) {
this._cipher.decryptBlock(e, t);
}
});
return e;
}();
c.pad.AnsiX923 = {
pad: function(e, t) {
var o = e.sigBytes, n = 4 * t, i = n - o % n, r = o + i - 1;
e.clamp();
e.words[r >>> 2] |= i << 24 - r % 4 * 8;
e.sigBytes += i;
},
unpad: function(e) {
var t = 255 & e.words[e.sigBytes - 1 >>> 2];
e.sigBytes -= t;
}
};
c.pad.Iso10126 = {
pad: function(e, t) {
var o = 4 * t, n = o - e.sigBytes % o;
e.concat(c.lib.WordArray.random(n - 1)).concat(c.lib.WordArray.create([ n << 24 ], 1));
},
unpad: function(e) {
var t = 255 & e.words[e.sigBytes - 1 >>> 2];
e.sigBytes -= t;
}
};
c.pad.Iso97971 = {
pad: function(e, t) {
e.concat(c.lib.WordArray.create([ 2147483648 ], 1));
c.pad.ZeroPadding.pad(e, t);
},
unpad: function(e) {
c.pad.ZeroPadding.unpad(e);
e.sigBytes--;
}
};
c.pad.ZeroPadding = {
pad: function(e, t) {
var o = 4 * t;
e.clamp();
e.sigBytes += o - (e.sigBytes % o || o);
},
unpad: function(e) {
var t = e.words, o = e.sigBytes - 1;
for (o = e.sigBytes - 1; o >= 0; o--) if (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) {
e.sigBytes = o + 1;
break;
}
}
};
c.pad.NoPadding = {
pad: function() {},
unpad: function() {}
};
(function() {
var e = c, t = e.lib.CipherParams, o = e.enc.Hex;
e.format.Hex = {
stringify: function(e) {
return e.ciphertext.toString(o);
},
parse: function(e) {
var n = o.parse(e);
return t.create({
ciphertext: n
});
}
};
})();
(function() {
var e = c, t = e.lib.BlockCipher, o = e.algo, n = [], i = [], r = [], a = [], s = [], l = [], u = [], p = [], f = [], h = [];
(function() {
for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
var o = 0, c = 0;
for (t = 0; t < 256; t++) {
var d = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
d = d >>> 8 ^ 255 & d ^ 99;
n[o] = d;
i[d] = o;
var _ = e[o], g = e[_], y = e[g], m = 257 * e[d] ^ 16843008 * d;
r[o] = m << 24 | m >>> 8;
a[o] = m << 16 | m >>> 16;
s[o] = m << 8 | m >>> 24;
l[o] = m;
m = 16843009 * y ^ 65537 * g ^ 257 * _ ^ 16843008 * o;
u[d] = m << 24 | m >>> 8;
p[d] = m << 16 | m >>> 16;
f[d] = m << 8 | m >>> 24;
h[d] = m;
if (o) {
o = _ ^ e[e[e[y ^ _]]];
c ^= e[e[c]];
} else o = c = 1;
}
})();
var d = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], _ = o.AES = t.extend({
_doReset: function() {
if (!this._nRounds || this._keyPriorReset !== this._key) {
for (var e = this._keyPriorReset = this._key, t = e.words, o = e.sigBytes / 4, i = 4 * ((this._nRounds = o + 6) + 1), r = this._keySchedule = [], a = 0; a < i; a++) if (a < o) r[a] = t[a]; else {
l = r[a - 1];
if (a % o) o > 6 && a % o == 4 && (l = n[l >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & l]); else {
l = n[(l = l << 8 | l >>> 24) >>> 24] << 24 | n[l >>> 16 & 255] << 16 | n[l >>> 8 & 255] << 8 | n[255 & l];
l ^= d[a / o | 0] << 24;
}
r[a] = r[a - o] ^ l;
}
for (var c = this._invKeySchedule = [], s = 0; s < i; s++) {
a = i - s;
if (s % 4) var l = r[a]; else l = r[a - 4];
c[s] = s < 4 || a <= 4 ? l : u[n[l >>> 24]] ^ p[n[l >>> 16 & 255]] ^ f[n[l >>> 8 & 255]] ^ h[n[255 & l]];
}
}
},
encryptBlock: function(e, t) {
this._doCryptBlock(e, t, this._keySchedule, r, a, s, l, n);
},
decryptBlock: function(e, t) {
var o = e[t + 1];
e[t + 1] = e[t + 3];
e[t + 3] = o;
this._doCryptBlock(e, t, this._invKeySchedule, u, p, f, h, i);
o = e[t + 1];
e[t + 1] = e[t + 3];
e[t + 3] = o;
},
_doCryptBlock: function(e, t, o, n, i, r, a, c) {
for (var s = this._nRounds, l = e[t] ^ o[0], u = e[t + 1] ^ o[1], p = e[t + 2] ^ o[2], f = e[t + 3] ^ o[3], h = 4, d = 1; d < s; d++) {
var _ = n[l >>> 24] ^ i[u >>> 16 & 255] ^ r[p >>> 8 & 255] ^ a[255 & f] ^ o[h++], g = n[u >>> 24] ^ i[p >>> 16 & 255] ^ r[f >>> 8 & 255] ^ a[255 & l] ^ o[h++], y = n[p >>> 24] ^ i[f >>> 16 & 255] ^ r[l >>> 8 & 255] ^ a[255 & u] ^ o[h++], m = n[f >>> 24] ^ i[l >>> 16 & 255] ^ r[u >>> 8 & 255] ^ a[255 & p] ^ o[h++];
l = _;
u = g;
p = y;
f = m;
}
_ = (c[l >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & f]) ^ o[h++], 
g = (c[u >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & l]) ^ o[h++], 
y = (c[p >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & u]) ^ o[h++], 
m = (c[f >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & p]) ^ o[h++];
e[t] = _;
e[t + 1] = g;
e[t + 2] = y;
e[t + 3] = m;
},
keySize: 8
});
e.AES = t._createHelper(_);
})();
(function() {
var e = c, t = e.lib, o = t.WordArray, n = t.BlockCipher, i = e.algo, r = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], a = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], s = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], l = [ {
0: 8421888,
268435456: 32768,
536870912: 8421378,
805306368: 2,
1073741824: 512,
1342177280: 8421890,
1610612736: 8389122,
1879048192: 8388608,
2147483648: 514,
2415919104: 8389120,
2684354560: 33280,
2952790016: 8421376,
3221225472: 32770,
3489660928: 8388610,
3758096384: 0,
4026531840: 33282,
134217728: 0,
402653184: 8421890,
671088640: 33282,
939524096: 32768,
1207959552: 8421888,
1476395008: 512,
1744830464: 8421378,
2013265920: 2,
2281701376: 8389120,
2550136832: 33280,
2818572288: 8421376,
3087007744: 8389122,
3355443200: 8388610,
3623878656: 32770,
3892314112: 514,
4160749568: 8388608,
1: 32768,
268435457: 2,
536870913: 8421888,
805306369: 8388608,
1073741825: 8421378,
1342177281: 33280,
1610612737: 512,
1879048193: 8389122,
2147483649: 8421890,
2415919105: 8421376,
2684354561: 8388610,
2952790017: 33282,
3221225473: 514,
3489660929: 8389120,
3758096385: 32770,
4026531841: 0,
134217729: 8421890,
402653185: 8421376,
671088641: 8388608,
939524097: 512,
1207959553: 32768,
1476395009: 8388610,
1744830465: 2,
2013265921: 33282,
2281701377: 32770,
2550136833: 8389122,
2818572289: 514,
3087007745: 8421888,
3355443201: 8389120,
3623878657: 0,
3892314113: 33280,
4160749569: 8421378
}, {
0: 1074282512,
16777216: 16384,
33554432: 524288,
50331648: 1074266128,
67108864: 1073741840,
83886080: 1074282496,
100663296: 1073758208,
117440512: 16,
134217728: 540672,
150994944: 1073758224,
167772160: 1073741824,
184549376: 540688,
201326592: 524304,
218103808: 0,
234881024: 16400,
251658240: 1074266112,
8388608: 1073758208,
25165824: 540688,
41943040: 16,
58720256: 1073758224,
75497472: 1074282512,
92274688: 1073741824,
109051904: 524288,
125829120: 1074266128,
142606336: 524304,
159383552: 0,
176160768: 16384,
192937984: 1074266112,
209715200: 1073741840,
226492416: 540672,
243269632: 1074282496,
260046848: 16400,
268435456: 0,
285212672: 1074266128,
301989888: 1073758224,
318767104: 1074282496,
335544320: 1074266112,
352321536: 16,
369098752: 540688,
385875968: 16384,
402653184: 16400,
419430400: 524288,
436207616: 524304,
452984832: 1073741840,
469762048: 540672,
486539264: 1073758208,
503316480: 1073741824,
520093696: 1074282512,
276824064: 540688,
293601280: 524288,
310378496: 1074266112,
327155712: 16384,
343932928: 1073758208,
360710144: 1074282512,
377487360: 16,
394264576: 1073741824,
411041792: 1074282496,
427819008: 1073741840,
444596224: 1073758224,
461373440: 524304,
478150656: 0,
494927872: 16400,
511705088: 1074266128,
528482304: 540672
}, {
0: 260,
1048576: 0,
2097152: 67109120,
3145728: 65796,
4194304: 65540,
5242880: 67108868,
6291456: 67174660,
7340032: 67174400,
8388608: 67108864,
9437184: 67174656,
10485760: 65792,
11534336: 67174404,
12582912: 67109124,
13631488: 65536,
14680064: 4,
15728640: 256,
524288: 67174656,
1572864: 67174404,
2621440: 0,
3670016: 67109120,
4718592: 67108868,
5767168: 65536,
6815744: 65540,
7864320: 260,
8912896: 4,
9961472: 256,
11010048: 67174400,
12058624: 65796,
13107200: 65792,
14155776: 67109124,
15204352: 67174660,
16252928: 67108864,
16777216: 67174656,
17825792: 65540,
18874368: 65536,
19922944: 67109120,
20971520: 256,
22020096: 67174660,
23068672: 67108868,
24117248: 0,
25165824: 67109124,
26214400: 67108864,
27262976: 4,
28311552: 65792,
29360128: 67174400,
30408704: 260,
31457280: 65796,
32505856: 67174404,
17301504: 67108864,
18350080: 260,
19398656: 67174656,
20447232: 0,
21495808: 65540,
22544384: 67109120,
23592960: 256,
24641536: 67174404,
25690112: 65536,
26738688: 67174660,
27787264: 65796,
28835840: 67108868,
29884416: 67109124,
30932992: 67174400,
31981568: 4,
33030144: 65792
}, {
0: 2151682048,
65536: 2147487808,
131072: 4198464,
196608: 2151677952,
262144: 0,
327680: 4198400,
393216: 2147483712,
458752: 4194368,
524288: 2147483648,
589824: 4194304,
655360: 64,
720896: 2147487744,
786432: 2151678016,
851968: 4160,
917504: 4096,
983040: 2151682112,
32768: 2147487808,
98304: 64,
163840: 2151678016,
229376: 2147487744,
294912: 4198400,
360448: 2151682112,
425984: 0,
491520: 2151677952,
557056: 4096,
622592: 2151682048,
688128: 4194304,
753664: 4160,
819200: 2147483648,
884736: 4194368,
950272: 4198464,
1015808: 2147483712,
1048576: 4194368,
1114112: 4198400,
1179648: 2147483712,
1245184: 0,
1310720: 4160,
1376256: 2151678016,
1441792: 2151682048,
1507328: 2147487808,
1572864: 2151682112,
1638400: 2147483648,
1703936: 2151677952,
1769472: 4198464,
1835008: 2147487744,
1900544: 4194304,
1966080: 64,
2031616: 4096,
1081344: 2151677952,
1146880: 2151682112,
1212416: 0,
1277952: 4198400,
1343488: 4194368,
1409024: 2147483648,
1474560: 2147487808,
1540096: 64,
1605632: 2147483712,
1671168: 4096,
1736704: 2147487744,
1802240: 2151678016,
1867776: 4160,
1933312: 2151682048,
1998848: 4194304,
2064384: 4198464
}, {
0: 128,
4096: 17039360,
8192: 262144,
12288: 536870912,
16384: 537133184,
20480: 16777344,
24576: 553648256,
28672: 262272,
32768: 16777216,
36864: 537133056,
40960: 536871040,
45056: 553910400,
49152: 553910272,
53248: 0,
57344: 17039488,
61440: 553648128,
2048: 17039488,
6144: 553648256,
10240: 128,
14336: 17039360,
18432: 262144,
22528: 537133184,
26624: 553910272,
30720: 536870912,
34816: 537133056,
38912: 0,
43008: 553910400,
47104: 16777344,
51200: 536871040,
55296: 553648128,
59392: 16777216,
63488: 262272,
65536: 262144,
69632: 128,
73728: 536870912,
77824: 553648256,
81920: 16777344,
86016: 553910272,
90112: 537133184,
94208: 16777216,
98304: 553910400,
102400: 553648128,
106496: 17039360,
110592: 537133056,
114688: 262272,
118784: 536871040,
122880: 0,
126976: 17039488,
67584: 553648256,
71680: 16777216,
75776: 17039360,
79872: 537133184,
83968: 536870912,
88064: 17039488,
92160: 128,
96256: 553910272,
100352: 262272,
104448: 553910400,
108544: 0,
112640: 553648128,
116736: 16777344,
120832: 262144,
124928: 537133056,
129024: 536871040
}, {
0: 268435464,
256: 8192,
512: 270532608,
768: 270540808,
1024: 268443648,
1280: 2097152,
1536: 2097160,
1792: 268435456,
2048: 0,
2304: 268443656,
2560: 2105344,
2816: 8,
3072: 270532616,
3328: 2105352,
3584: 8200,
3840: 270540800,
128: 270532608,
384: 270540808,
640: 8,
896: 2097152,
1152: 2105352,
1408: 268435464,
1664: 268443648,
1920: 8200,
2176: 2097160,
2432: 8192,
2688: 268443656,
2944: 270532616,
3200: 0,
3456: 270540800,
3712: 2105344,
3968: 268435456,
4096: 268443648,
4352: 270532616,
4608: 270540808,
4864: 8200,
5120: 2097152,
5376: 268435456,
5632: 268435464,
5888: 2105344,
6144: 2105352,
6400: 0,
6656: 8,
6912: 270532608,
7168: 8192,
7424: 268443656,
7680: 270540800,
7936: 2097160,
4224: 8,
4480: 2105344,
4736: 2097152,
4992: 268435464,
5248: 268443648,
5504: 8200,
5760: 270540808,
6016: 270532608,
6272: 270540800,
6528: 270532616,
6784: 8192,
7040: 2105352,
7296: 2097160,
7552: 0,
7808: 268435456,
8064: 268443656
}, {
0: 1048576,
16: 33555457,
32: 1024,
48: 1049601,
64: 34604033,
80: 0,
96: 1,
112: 34603009,
128: 33555456,
144: 1048577,
160: 33554433,
176: 34604032,
192: 34603008,
208: 1025,
224: 1049600,
240: 33554432,
8: 34603009,
24: 0,
40: 33555457,
56: 34604032,
72: 1048576,
88: 33554433,
104: 33554432,
120: 1025,
136: 1049601,
152: 33555456,
168: 34603008,
184: 1048577,
200: 1024,
216: 34604033,
232: 1,
248: 1049600,
256: 33554432,
272: 1048576,
288: 33555457,
304: 34603009,
320: 1048577,
336: 33555456,
352: 34604032,
368: 1049601,
384: 1025,
400: 34604033,
416: 1049600,
432: 1,
448: 0,
464: 34603008,
480: 33554433,
496: 1024,
264: 1049600,
280: 33555457,
296: 34603009,
312: 1,
328: 33554432,
344: 1048576,
360: 1025,
376: 34604032,
392: 33554433,
408: 34603008,
424: 0,
440: 34604033,
456: 1049601,
472: 1024,
488: 33555456,
504: 1048577
}, {
0: 134219808,
1: 131072,
2: 134217728,
3: 32,
4: 131104,
5: 134350880,
6: 134350848,
7: 2048,
8: 134348800,
9: 134219776,
10: 133120,
11: 134348832,
12: 2080,
13: 0,
14: 134217760,
15: 133152,
2147483648: 2048,
2147483649: 134350880,
2147483650: 134219808,
2147483651: 134217728,
2147483652: 134348800,
2147483653: 133120,
2147483654: 133152,
2147483655: 32,
2147483656: 134217760,
2147483657: 2080,
2147483658: 131104,
2147483659: 134350848,
2147483660: 0,
2147483661: 134348832,
2147483662: 134219776,
2147483663: 131072,
16: 133152,
17: 134350848,
18: 32,
19: 2048,
20: 134219776,
21: 134217760,
22: 134348832,
23: 131072,
24: 0,
25: 131104,
26: 134348800,
27: 134219808,
28: 134350880,
29: 133120,
30: 2080,
31: 134217728,
2147483664: 131072,
2147483665: 2048,
2147483666: 134348832,
2147483667: 133152,
2147483668: 32,
2147483669: 134348800,
2147483670: 134217728,
2147483671: 134219808,
2147483672: 134350880,
2147483673: 134217760,
2147483674: 134219776,
2147483675: 0,
2147483676: 133120,
2147483677: 2080,
2147483678: 131104,
2147483679: 134350848
} ], u = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], p = i.DES = n.extend({
_doReset: function() {
for (var e = this._key.words, t = [], o = 0; o < 56; o++) {
var n = r[o] - 1;
t[o] = e[n >>> 5] >>> 31 - n % 32 & 1;
}
for (var i = this._subKeys = [], c = 0; c < 16; c++) {
var l = i[c] = [], u = s[c];
for (o = 0; o < 24; o++) {
l[o / 6 | 0] |= t[(a[o] - 1 + u) % 28] << 31 - o % 6;
l[4 + (o / 6 | 0)] |= t[28 + (a[o + 24] - 1 + u) % 28] << 31 - o % 6;
}
l[0] = l[0] << 1 | l[0] >>> 31;
for (o = 1; o < 7; o++) l[o] = l[o] >>> 4 * (o - 1) + 3;
l[7] = l[7] << 5 | l[7] >>> 27;
}
var p = this._invSubKeys = [];
for (o = 0; o < 16; o++) p[o] = i[15 - o];
},
encryptBlock: function(e, t) {
this._doCryptBlock(e, t, this._subKeys);
},
decryptBlock: function(e, t) {
this._doCryptBlock(e, t, this._invSubKeys);
},
_doCryptBlock: function(e, t, o) {
this._lBlock = e[t];
this._rBlock = e[t + 1];
f.call(this, 4, 252645135);
f.call(this, 16, 65535);
h.call(this, 2, 858993459);
h.call(this, 8, 16711935);
f.call(this, 1, 1431655765);
for (var n = 0; n < 16; n++) {
for (var i = o[n], r = this._lBlock, a = this._rBlock, c = 0, s = 0; s < 8; s++) c |= l[s][((a ^ i[s]) & u[s]) >>> 0];
this._lBlock = a;
this._rBlock = r ^ c;
}
var p = this._lBlock;
this._lBlock = this._rBlock;
this._rBlock = p;
f.call(this, 1, 1431655765);
h.call(this, 8, 16711935);
h.call(this, 2, 858993459);
f.call(this, 16, 65535);
f.call(this, 4, 252645135);
e[t] = this._lBlock;
e[t + 1] = this._rBlock;
},
keySize: 2,
ivSize: 2,
blockSize: 2
});
function f(e, t) {
var o = (this._lBlock >>> e ^ this._rBlock) & t;
this._rBlock ^= o;
this._lBlock ^= o << e;
}
function h(e, t) {
var o = (this._rBlock >>> e ^ this._lBlock) & t;
this._lBlock ^= o;
this._rBlock ^= o << e;
}
e.DES = n._createHelper(p);
var d = i.TripleDES = n.extend({
_doReset: function() {
var e = this._key.words;
if (2 !== e.length && 4 !== e.length && e.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
var t = e.slice(0, 2), n = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), i = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
this._des1 = p.createEncryptor(o.create(t));
this._des2 = p.createEncryptor(o.create(n));
this._des3 = p.createEncryptor(o.create(i));
},
encryptBlock: function(e, t) {
this._des1.encryptBlock(e, t);
this._des2.decryptBlock(e, t);
this._des3.encryptBlock(e, t);
},
decryptBlock: function(e, t) {
this._des3.decryptBlock(e, t);
this._des2.encryptBlock(e, t);
this._des1.decryptBlock(e, t);
},
keySize: 6,
ivSize: 2,
blockSize: 2
});
e.TripleDES = n._createHelper(d);
})();
(function() {
var e = c, t = e.lib.StreamCipher, o = e.algo, n = o.RC4 = t.extend({
_doReset: function() {
for (var e = this._key, t = e.words, o = e.sigBytes, n = this._S = [], i = 0; i < 256; i++) n[i] = i;
i = 0;
for (var r = 0; i < 256; i++) {
var a = i % o, c = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
r = (r + n[i] + c) % 256;
var s = n[i];
n[i] = n[r];
n[r] = s;
}
this._i = this._j = 0;
},
_doProcessBlock: function(e, t) {
e[t] ^= i.call(this);
},
keySize: 8,
ivSize: 0
});
function i() {
for (var e = this._S, t = this._i, o = this._j, n = 0, i = 0; i < 4; i++) {
o = (o + e[t = (t + 1) % 256]) % 256;
var r = e[t];
e[t] = e[o];
e[o] = r;
n |= e[(e[t] + e[o]) % 256] << 24 - 8 * i;
}
this._i = t;
this._j = o;
return n;
}
e.RC4 = t._createHelper(n);
var r = o.RC4Drop = n.extend({
cfg: n.cfg.extend({
drop: 192
}),
_doReset: function() {
n._doReset.call(this);
for (var e = this.cfg.drop; e > 0; e--) i.call(this);
}
});
e.RC4Drop = t._createHelper(r);
})();
(function() {
var e = c, t = e.lib.StreamCipher, o = e.algo, n = [], i = [], r = [], a = o.Rabbit = t.extend({
_doReset: function() {
for (var e = this._key.words, t = this.cfg.iv, o = 0; o < 4; o++) e[o] = 16711935 & (e[o] << 8 | e[o] >>> 24) | 4278255360 & (e[o] << 24 | e[o] >>> 8);
var n = this._X = [ e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16 ], i = this._C = [ e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0] ];
this._b = 0;
for (o = 0; o < 4; o++) s.call(this);
for (o = 0; o < 8; o++) i[o] ^= n[o + 4 & 7];
if (t) {
var r = t.words, a = r[0], c = r[1], l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), u = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), p = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
i[0] ^= l;
i[1] ^= p;
i[2] ^= u;
i[3] ^= f;
i[4] ^= l;
i[5] ^= p;
i[6] ^= u;
i[7] ^= f;
for (o = 0; o < 4; o++) s.call(this);
}
},
_doProcessBlock: function(e, t) {
var o = this._X;
s.call(this);
n[0] = o[0] ^ o[5] >>> 16 ^ o[3] << 16;
n[1] = o[2] ^ o[7] >>> 16 ^ o[5] << 16;
n[2] = o[4] ^ o[1] >>> 16 ^ o[7] << 16;
n[3] = o[6] ^ o[3] >>> 16 ^ o[1] << 16;
for (var i = 0; i < 4; i++) {
n[i] = 16711935 & (n[i] << 8 | n[i] >>> 24) | 4278255360 & (n[i] << 24 | n[i] >>> 8);
e[t + i] ^= n[i];
}
},
blockSize: 4,
ivSize: 2
});
function s() {
for (var e = this._X, t = this._C, o = 0; o < 8; o++) i[o] = t[o];
t[0] = t[0] + 1295307597 + this._b | 0;
t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0;
t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0;
t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0;
t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0;
t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0;
t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0;
t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0;
this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0;
for (o = 0; o < 8; o++) {
var n = e[o] + t[o], a = 65535 & n, c = n >>> 16, s = ((a * a >>> 17) + a * c >>> 15) + c * c, l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
r[o] = s ^ l;
}
e[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0;
e[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0;
e[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0;
e[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0;
e[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0;
e[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0;
e[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0;
e[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0;
}
e.Rabbit = t._createHelper(a);
})();
(function() {
var e = c, t = e.lib.StreamCipher, o = e.algo, n = [], i = [], r = [], a = o.RabbitLegacy = t.extend({
_doReset: function() {
var e = this._key.words, t = this.cfg.iv, o = this._X = [ e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16 ], n = this._C = [ e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0] ];
this._b = 0;
for (var i = 0; i < 4; i++) s.call(this);
for (i = 0; i < 8; i++) n[i] ^= o[i + 4 & 7];
if (t) {
var r = t.words, a = r[0], c = r[1], l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), u = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), p = l >>> 16 | 4294901760 & u, f = u << 16 | 65535 & l;
n[0] ^= l;
n[1] ^= p;
n[2] ^= u;
n[3] ^= f;
n[4] ^= l;
n[5] ^= p;
n[6] ^= u;
n[7] ^= f;
for (i = 0; i < 4; i++) s.call(this);
}
},
_doProcessBlock: function(e, t) {
var o = this._X;
s.call(this);
n[0] = o[0] ^ o[5] >>> 16 ^ o[3] << 16;
n[1] = o[2] ^ o[7] >>> 16 ^ o[5] << 16;
n[2] = o[4] ^ o[1] >>> 16 ^ o[7] << 16;
n[3] = o[6] ^ o[3] >>> 16 ^ o[1] << 16;
for (var i = 0; i < 4; i++) {
n[i] = 16711935 & (n[i] << 8 | n[i] >>> 24) | 4278255360 & (n[i] << 24 | n[i] >>> 8);
e[t + i] ^= n[i];
}
},
blockSize: 4,
ivSize: 2
});
function s() {
for (var e = this._X, t = this._C, o = 0; o < 8; o++) i[o] = t[o];
t[0] = t[0] + 1295307597 + this._b | 0;
t[1] = t[1] + 3545052371 + (t[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0;
t[2] = t[2] + 886263092 + (t[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0;
t[3] = t[3] + 1295307597 + (t[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0;
t[4] = t[4] + 3545052371 + (t[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0;
t[5] = t[5] + 886263092 + (t[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0;
t[6] = t[6] + 1295307597 + (t[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0;
t[7] = t[7] + 3545052371 + (t[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0;
this._b = t[7] >>> 0 < i[7] >>> 0 ? 1 : 0;
for (o = 0; o < 8; o++) {
var n = e[o] + t[o], a = 65535 & n, c = n >>> 16, s = ((a * a >>> 17) + a * c >>> 15) + c * c, l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
r[o] = s ^ l;
}
e[0] = r[0] + (r[7] << 16 | r[7] >>> 16) + (r[6] << 16 | r[6] >>> 16) | 0;
e[1] = r[1] + (r[0] << 8 | r[0] >>> 24) + r[7] | 0;
e[2] = r[2] + (r[1] << 16 | r[1] >>> 16) + (r[0] << 16 | r[0] >>> 16) | 0;
e[3] = r[3] + (r[2] << 8 | r[2] >>> 24) + r[1] | 0;
e[4] = r[4] + (r[3] << 16 | r[3] >>> 16) + (r[2] << 16 | r[2] >>> 16) | 0;
e[5] = r[5] + (r[4] << 8 | r[4] >>> 24) + r[3] | 0;
e[6] = r[6] + (r[5] << 16 | r[5] >>> 16) + (r[4] << 16 | r[4] >>> 16) | 0;
e[7] = r[7] + (r[6] << 8 | r[6] >>> 24) + r[5] | 0;
}
e.RabbitLegacy = t._createHelper(a);
})();
return c;
}, "object" == typeof n ? t.exports = n = i() : "function" == typeof define && define.amd ? define([], i) : (void 0).CryptoJS = i();
var i;
console.log("end");
}).call(void 0, "undefined" != typeof o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"../lib/crypto": void 0
} ]
}, {}, [ "AtlasItem", "AtlasMgr", "AtlasRecord", "AtlasRepeatItem", "DialogManager", "Hi5_UIManager", "Logger", "PageManager", "BaseRecord", "GameDataConfig", "GameLocalData", "GameRecord", "GuideData", "Loader", "PakoData", "Time", "Toast", "Utils", "Box", "Dart", "Encourage", "FlowerComp", "FlowerEntity", "GameConst", "GameView", "Layer", "LevelAwardNode", "Nail", "NailData", "NailSpine", "Plank", "Prop", "Slot", "TipToast", "TouchComp", "AudioManager", "BaseActionClass", "BaseCom", "CommonReward", "CommonToastRewardView", "CubeEliminateEffect", "FailureView", "FlyImageComp", "FlyImageToastComp", "GamePlayData", "GameRewardsManager", "GameUI", "GuideCtrl", "HintComp", "LevelData", "LevelHelper", "LogEvent", "MahjongManager", "NativeConsts", "PlayBoardRecordData", "PlayboardEnum", "RbRateListItem", "RewardCommenView", "ShopRecord", "SoundManager", "SuccessView", "SyncBridge", "SyncMaster", "SyncWorker", "TimeControl", "UIUtils", "WebViewJsBridge", "AutoConfig", "BoxC", "Boxes", "CommonEnum", "EventConfig", "EventManager", "FrameConst", "GamePlayConfigEnum", "GamePlayEnum", "Hi5_Util", "ImageUtil", "ImagesPanel", "LabelColorPicker", "Random", "Singleton", "Tools", "TouchBlocker", "crypto-js", "UIConfig", "UIManager", "HandleSBN", "ScreollVirtualView", "ViewBase", "ViewSBNBase", "VirItemRender", "BaseNode", "BaseUI", "AudioConfig", "BattleSBNName", "BeginLevelConfig", "EnumDeclareSg", "GameConfig", "ImageConfig", "LoopLevelConfig", "PlayEnum", "RankConfig", "ActionsHelp", "GamePlayScene", "HomeScene", "LoadingScene", "BattleEmojyItem", "BattleLoadingView", "BattleLoseView", "BattleStartAniView", "BattleWinView", "HeadBattleItem", "HeadHomeItem", "HeadMainItem", "HeadResultItem", "HeadSBnItem", "HeadSBnView", "PhysicalItem", "RankingBattleItem", "RankingBattleTopItem", "RankingDisItem", "CoinItem", "PhotoItem", "RewardCommenItem", "SignRewardItem", "SigninPuItem", "HomeGameUi", "LoadImgView", "LockPropsFlyView", "LockPropsView", "PhotoLikeView", "PhotoView", "PropsNoView", "RankingView", "ResultAlbumView", "SettingTwoView", "SettingView", "SigninView", "AudioSBNMgr", "DataGameContetrMgr", "LevelHelperSBN", "LogSBNMgr", "MessageSBNMgr", "PlayDataMgr", "PublicCommenMgr", "ResSBNMgr", "SDKSbnMgr", "SDKbridgeSBNMgr", "SgballonADMgr", "UserDataSBNMgr", "ViewSBNMgr", "StorageEntry", "StorageMgr", "CoreSBN", "IBassInsClass", "ObjectPoolManager" ]);