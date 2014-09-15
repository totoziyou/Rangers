/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-7-17
 * Time: 上午10:19
 * To change this template use File | Settings | File Templates.
 */
var MapLayer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var sw=appSize.srcWidth,sh=appSize.srcHeight,
            rb=appSize.bgRate,rm=appSize.emRate;

        this.bg=cc.Sprite.create(res.map.bg);
        this.bg.attr({x:sw/2,y:sh/2,scale:rb});
        this.addChild(this.bg, 0);

        this.top=cc.Sprite.create(res.header.bg);
        this.top.attr({x:sw/2,scale:rm,anchorY:1});
        appSize.place(this.top,null,"top",0);
        this.addChild(this.top, 1);

        this.schedule(this._onGotoSceneStation,3);

//        this.menu=cc.Sprite.create(res.city.menu);
//        this.menu.attr({x:sw/2,scale:rm,anchorY:0});
//        appSize.place(this.menu,null,"bottom",0);
//        this.addChild(this.menu, 1);

        return true;
    },
    _onGotoSceneStation:function(){
        manager.changeScene("Station");
    }
});

var MapScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MapLayer();
        this.addChild(layer);
    }
});

xLayer.Map=MapLayer;
xScene.Map=MapScene;