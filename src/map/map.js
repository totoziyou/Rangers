
var MapLayer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var sw=appSize.srcWidth,sh=appSize.srcHeight,
            rb=appSize.bgRate,rm=appSize.emRate,
            sideX=sw-550*rm,sideY=sh-90*rm;

        this.bg=cc.Sprite.create(res.map.bg);
        this.bg.attr({x:sw/2,y:sh/2,scale:rb});
        this.addChild(this.bg, 0);

        this.sideBg= new cc.LayerColor(cc.color(197,165,81),550*rm,sh);
        this.sideBg.attr({x:sideX});
        this.addChild(this.sideBg,1);

        this.header=new Header();
        this.header.attr({x:0,y:sh,scale:rm});
        this.addChild(this.header,2);

        this.side=new xUnit.MapSide();
        this.side.attr({x:sideX,y:sideY,scale:rm});
        this.addChild(this.side,3);

        //this.schedule(this._onGotoSceneStation,3);

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