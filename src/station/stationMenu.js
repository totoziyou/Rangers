
var StationMenu = cc.Node.extend({
    ctor:function(type){

        this._super();

        var bgy;
        switch(type){
            case "formation": bgy=256;break;
            case "hero": bgy=88;break;
            case "store": bgy=-88;break;
            default: bgy=256;break;
            break;
        }
        this.menuBg=cc.Sprite.create(res.station.menuBg);
        this.menuBg.attr({x:-10,y:bgy,anchorX:1});
        this.addChild(this.menuBg,0);

        //添加开始按钮
        var btnFormation1 = cc.Sprite.create(res.station.menuIcon, cc.rect(0, 0, 140, 140)),
            btnFormation2 = cc.Sprite.create(res.station.menuIcon, cc.rect(0, 0, 140, 140)),
            btnFormation3 = cc.Sprite.create(res.station.menuIcon, cc.rect(0, 0, 140, 140));
        var btnHero1 = cc.Sprite.create(res.station.menuIcon, cc.rect(0, 140, 140, 140)),
            btnHero2 = cc.Sprite.create(res.station.menuIcon, cc.rect(0, 140, 140, 140)),
            btnHero3 = cc.Sprite.create(res.station.menuIcon, cc.rect(0, 140, 140, 140));
        var btnStore1= cc.Sprite.create(res.station.menuIcon, cc.rect(0, 280, 140, 140)),
            btnStore2= cc.Sprite.create(res.station.menuIcon, cc.rect(0, 280, 140, 140)),
            btnStore3= cc.Sprite.create(res.station.menuIcon, cc.rect(0, 280, 140, 140));
        var btnBackCity1= cc.Sprite.create(res.station.menuIcon, cc.rect(0, 420, 140, 140)),
            btnBackCity2= cc.Sprite.create(res.station.menuIcon, cc.rect(0, 420, 140, 140)),
            btnBackCity3= cc.Sprite.create(res.station.menuIcon, cc.rect(0, 420, 140, 140));

        this.btnFormation=cc.MenuItemSprite.create(btnFormation1,btnFormation2,btnFormation3,this._onGotoFormation,this);
        this.btnHero=cc.MenuItemSprite.create(btnHero1,btnHero2,btnHero3,this._onGotoHero,this);
        this.btnStore=cc.MenuItemSprite.create(btnStore1,btnStore2,btnStore3,this._onGotoStore,this);
        this.btnBackCity=cc.MenuItemSprite.create(btnBackCity1,btnBackCity2,btnBackCity3,this._onGotoCity,this);

        this.btnFormation.attr({x:0,y:256});
        this.btnHero.attr({x:0,y:88});
        this.btnStore.attr({x:0,y:-88});
        this.btnBackCity.attr({x:0,y:-256});

        this.Menu=cc.Menu.create(this.btnFormation,this.btnHero,this.btnStore,this.btnBackCity);
        this.Menu.attr({x:-90,y:0,anchorX:1});
        this.addChild(this.Menu,1);

        return true;
    },
    _onGotoFormation:function(){
        manager.changeScene("Station");
    },
    _onGotoHero:function(){
        manager.changeScene("StationHero");
    },
    _onGotoStore:function(){
        manager.changeScene("StationStore");
    },
    _onGotoCity:function(){
        manager.changeScene("City");
    },
    select:function(){

    }
});


