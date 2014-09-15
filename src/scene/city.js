/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-7-17
 * Time: 上午10:19
 * To change this template use File | Settings | File Templates.
 */
var CityLayer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var sw=appSize.srcWidth,sh=appSize.srcHeight,
            rb=appSize.bgRate,rm=appSize.emRate;

        this.bg=cc.Sprite.create(res.city.bg);
        this.bg.attr({x:sw/2,y:sh/2,scale:rb});
        this.addChild(this.bg, 0);

        this.header=new Header();
        this.header.attr({x:0,y:sh,scale:rm});
        this.addChild(this.header,1);

        this.menuBg=cc.Sprite.create(res.city.menuBg);
        this.menuBg.attr({x:sw/2,scale:rm,anchorY:0});
        appSize.place(this.menuBg,null,"bottom",0);
        this.addChild(this.menuBg, 1);

        //添加开始按钮
        var btnStation1 = cc.Sprite.create(res.city.menuIcon, cc.rect(0, 0, 154, 200)),
            btnStation2 = cc.Sprite.create(res.city.menuIcon, cc.rect(0, 200, 154, 200)),
            btnStation3 = cc.Sprite.create(res.city.menuIcon, cc.rect(0, 200, 154, 200));
        var btnMap1 = cc.Sprite.create(res.city.menuIcon, cc.rect(154, 0, 154, 200)),
            btnMap2 = cc.Sprite.create(res.city.menuIcon, cc.rect(154, 200, 154, 200)),
            btnMap3 = cc.Sprite.create(res.city.menuIcon, cc.rect(154, 200, 154, 200));
        var btnHall1= cc.Sprite.create(res.city.menuIcon, cc.rect(308, 0, 154, 200)),
            btnHall2= cc.Sprite.create(res.city.menuIcon, cc.rect(308, 200, 154, 200)),
            btnHall3= cc.Sprite.create(res.city.menuIcon, cc.rect(308, 200, 154, 200));
        var btnClub1= cc.Sprite.create(res.city.menuIcon, cc.rect(462, 0, 154, 200)),
            btnClub2= cc.Sprite.create(res.city.menuIcon, cc.rect(462, 200, 154, 200)),
            btnClub3= cc.Sprite.create(res.city.menuIcon, cc.rect(462, 200, 154, 200));
        var btnSmithy1 = cc.Sprite.create(res.city.menuIcon, cc.rect(616, 0, 154, 200)),
            btnSmithy2 = cc.Sprite.create(res.city.menuIcon, cc.rect(616, 200, 154, 200)),
            btnSmithy3 = cc.Sprite.create(res.city.menuIcon, cc.rect(616, 200, 154, 200));
        var btnItem1= cc.Sprite.create(res.city.menuIcon, cc.rect(770, 0, 154, 200)),
            btnItem2= cc.Sprite.create(res.city.menuIcon, cc.rect(770, 200, 154, 200)),
            btnItem3= cc.Sprite.create(res.city.menuIcon, cc.rect(770, 200, 154, 200));
        var btnMarket1= cc.Sprite.create(res.city.menuIcon, cc.rect(924, 0, 154, 200)),
            btnMarket2= cc.Sprite.create(res.city.menuIcon, cc.rect(924, 200, 154, 200)),
            btnMarket3= cc.Sprite.create(res.city.menuIcon, cc.rect(924, 200, 154, 200));
        var btnAuction1= cc.Sprite.create(res.city.menuIcon, cc.rect(1078, 0, 154, 200)),
            btnAuction2= cc.Sprite.create(res.city.menuIcon, cc.rect(1078, 200, 154, 200)),
            btnAuction3= cc.Sprite.create(res.city.menuIcon, cc.rect(1078, 200, 154, 200));
        var btnBar1 = cc.Sprite.create(res.city.menuIcon, cc.rect(1232, 0, 154, 200)),
            btnBar2 = cc.Sprite.create(res.city.menuIcon, cc.rect(1232, 200, 154, 200)),
            btnBar3 = cc.Sprite.create(res.city.menuIcon, cc.rect(1232, 200, 154, 200));
        var btnFlight1= cc.Sprite.create(res.city.menuIcon, cc.rect(1386, 0, 154, 200)),
            btnFlight2= cc.Sprite.create(res.city.menuIcon, cc.rect(1386, 200, 154, 200)),
            btnFlight3= cc.Sprite.create(res.city.menuIcon, cc.rect(1386, 200, 154, 200));

        this.btnMap=cc.MenuItemSprite.create(btnMap1,btnMap2,btnMap3,this._onGotoMap,this);
        this.btnStation=cc.MenuItemSprite.create(btnStation1,btnStation2,btnStation3,this._onGotoStation,this);
        this.btnHall=cc.MenuItemSprite.create(btnHall1,btnHall2,btnHall3,this._onGotoHall,this);
        this.btnClub=cc.MenuItemSprite.create(btnClub1,btnClub2,btnClub3,this._onGotoClub,this);
        this.btnSmithy=cc.MenuItemSprite.create(btnSmithy1,btnSmithy2,btnSmithy3,this._onGotoSmithy,this);
        this.btnItem=cc.MenuItemSprite.create(btnItem1,btnItem2,btnItem3,this._onGotoItem,this);
        this.btnMarket=cc.MenuItemSprite.create(btnMarket1,btnMarket2,btnMarket3,this._onGotoMarket,this);
        this.btnAuction=cc.MenuItemSprite.create(btnAuction1,btnAuction2,btnAuction3,this._onGotoAuction,this);
        this.btnBar=cc.MenuItemSprite.create(btnBar1,btnBar2,btnBar3,this._onGotoBar,this);
        this.btnFlight=cc.MenuItemSprite.create(btnFlight1,btnFlight2,btnFlight3,this._onGotoFlight,this);

        this.btnMap.attr({x:0,y:0,anchorX:0,anchorY:0});
        this.btnHall.attr({x:230,y:0,anchorX:0,anchorY:0});
        this.btnClub.attr({x:394,y:0,anchorX:0,anchorY:0});

        this.btnAuction.attr({x:610,y:0,anchorX:0,anchorY:0});
        this.btnBar.attr({x:774,y:0,anchorX:0,anchorY:0});
        this.btnFlight.attr({x:938,y:0,anchorX:0,anchorY:0});

        this.btnSmithy.attr({x:1168,y:0,anchorX:0,anchorY:0});
        this.btnItem.attr({x:1332,y:0,anchorX:0,anchorY:0});
        this.btnMarket.attr({x:1496,y:0,anchorX:0,anchorY:0});
        this.btnStation.attr({x:1726,y:0,anchorX:0,anchorY:0});

        this.Menu=cc.Menu.create(this.btnMap,this.btnStation,this.btnHall,this.btnClub,this.btnSmithy,this.btnItem,
            this.btnMarket,this.btnAuction,this.btnBar,this.btnFlight);
        this.Menu.attr({x:10,y:10,scale:rm,anchorX:0,anchorY:0});
        this.addChild(this.Menu,3);

        this.schedule(this._updateData,3);

        return true;
    },
    _updateData:function(){
        userData.setData({grade:15,ep:7,sp:4});
        this.header.update();
    },
    _onGotoMap:function(){
        manager.changeScene("Map");
    },
    //营地
    _onGotoStation:function(){
        manager.changeScene("Station");
    },
    _onGotoHall:function(){

    },
    _onGotoClub:function(){
        manager.changeScene("Club");
    },
    _onGotoSmithy:function(){
        manager.changeScene("WeaponShop");
    },
    _onGotoItem:function(){
        manager.changeScene("ItemShop");
    },
    _onGotoMarket:function(){
        manager.changeScene("MysteryShop");
    },
    _onGotoAuction:function(){

    },
    _onGotoBar:function(){
        manager.changeScene("Drunkery");
    },
    _onGotoFlight:function(){
        manager.changeScene("Pvp");
    }
});

var CityScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new CityLayer();
        this.addChild(layer);
    }
});

xLayer.City=CityLayer;
xScene.City=CityScene;