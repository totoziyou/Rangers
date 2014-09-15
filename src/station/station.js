/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-7-17
 * Time: 上午10:19
 * To change this template use File | Settings | File Templates.
 */
var StationLayer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var sw=appSize.srcWidth,sh=appSize.srcHeight,
            rb=appSize.bgRate,rm=appSize.emRate;

        var midY=(sh-90*rm)/2;

        this.bg=cc.Sprite.create(res.station.bg);
        this.bg.attr({x:sw/2,y:sh/2,scale:rb});
        this.addChild(this.bg, 0);

        this.header=new Header();
        this.header.attr({x:0,y:sh,scale:rm});
        this.addChild(this.header,1);

        this.stationMenu=new StationMenu("formation");
        this.stationMenu.attr({x:sw,y:midY,scale:rm});
        this.addChild(this.stationMenu,1);

        //英雄
        this.team=cc.Node.create();
        this.team.attr({x:sw/2,y:midY,scale:rm});
        this.addChild(this.team,2);

        this.hero=[];

        this.hero[1]=new HeroFullSize("sword","0");
        this.hero[1].attr({scale:0.66});
        this.team.addChild(this.hero[1],3);

        this.hero[2]=new HeroFullSize("knife","0");
        this.hero[2].attr({x:280,scale:0.6});
        this.team.addChild(this.hero[2],2);

        this.hero[3]=new HeroFullSize("shield","0");
        this.hero[3].attr({x:-280,scale:0.6});
        this.team.addChild(this.hero[3],2);

        this.hero[4]=new HeroFullSize("bow","0");
        this.hero[4].attr({x:520,scale:0.5});
        this.team.addChild(this.hero[4],1);

        this.hero[5]=new HeroFullSize("spear","0");
        this.hero[5].attr({x:-520,scale:0.5});
        this.team.addChild(this.hero[5],1);

        return true;
    }
});

var StationScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StationLayer();
        this.addChild(layer);
    }
});

xLayer.Station=StationLayer;
xScene.Station=StationScene;