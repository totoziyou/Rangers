/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-19
 * Time: 下午10:50
 * To change this template use File | Settings | File Templates.
 */
var StationHeroLayer = cc.Layer.extend({
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

        this.stationMenu=new StationMenu("hero");
        this.stationMenu.attr({x:sw,y:midY,scale:rm});
        this.addChild(this.stationMenu,1);

        this.heroList=new HeroListBox(this);
        this.heroList.attr({x:20,y:midY,scale:rm});
        this.addChild(this.heroList,2);

        this.heroInfoView=new HeroInfoView(this,this.heroList.firstData);
        this.heroInfoView.attr({x:sw/2+160*rm,y:midY,scale:rm});
        this.addChild(this.heroInfoView,2);

        return true;
    },
    changeHero:function(data){
        this.heroInfoView.changeHero(data);
    }
});

var StationHeroScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new StationHeroLayer();
        this.addChild(layer);
    }
});

xLayer.StationHero=StationHeroLayer;
xScene.StationHero=StationHeroScene;