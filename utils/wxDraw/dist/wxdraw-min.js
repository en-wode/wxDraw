"use strict";function WxDraw(t,s,e,i,h){this.canvas=t,this.wcid=_guid(),this.store=new Store,this.x=s,this.y=e,this.w=i,this.h=h}var _guid=require("./util/utils.js")._guid,Store=require("./store/store.js").Store,_shapeShapeJs="./shape/shape.js",Shape=_shapeShapeJs.Shape;WxDraw.prototype={add:function(t){this.store.add(t)},draw:function(){this.store.store.forEach(function(t){t.paint(this.canvas)},this)},detect:function(t){var s=this.getLoc(t.touches[0].x,t.touches[0].y);this.store.store.forEach(function(t){t.detect(s.x,s.y)},this)},moveDetect:function(t){var s=this.getLoc(t.touches[0].x,t.touches[0].y);this.store.store.forEach(function(t){t.moveDetect(s.x,s.y),console.log("item",t)},this),this.draw(),this.canvas.draw()},upDetect:function(){this.store.store.forEach(function(t){t.upDetect()},this)},getLoc:function(t,s){return{x:t-this.x>0?t-this.x>this.w?this.w:t-this.x:this.x,y:s-this.y>0?s-this.y>this.h?this.h:s-this.y:this.y}}},module.exports={WxDraw:WxDraw,Shape:Shape};
