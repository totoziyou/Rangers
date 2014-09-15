/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-19
 * Time: 下午10:51
 * To change this template use File | Settings | File Templates.
 */
var StationStoreLayer = cc.Layer.extend({
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

        this.stationMenu=new StationMenu("store");
        this.stationMenu.attr({x:sw,y:midY,scale:rm});
        this.addChild(this.stationMenu,1);

        //背景板
        var cw=sw-200*rm,
            ch=sh-90*rm,
            mw=cw-80,
            mh=ch-80,
            mx=cw/2,
            my=ch/2;

//        this.radiusRect=new RadiusRect(mw,mh,10,cc.color.BLACK,81);
//        this.radiusRect.attr({x:mx,y:my});
//        this.addChild(this.radiusRect,2);

        this.listBoxBg=cc.Sprite.create(res.common.itemListBoxBg);
        this.listBoxBg.attr({x:mx,y:my,scale:rm});
        this.addChild(this.listBoxBg,1);

        //选项卡按钮
        var btnAll1 = cc.Sprite.create(res.station.storeMenus, cc.rect(0, 0, 234, 81)),
            btnAll2 = cc.Sprite.create(res.station.storeMenus, cc.rect(0, 81, 234, 81)),
            btnAll3 = cc.Sprite.create(res.station.storeMenus, cc.rect(0, 162, 234, 81));
        var btnWeapon1 = cc.Sprite.create(res.station.storeMenus, cc.rect(234, 0, 234, 81)),
            btnWeapon2 = cc.Sprite.create(res.station.storeMenus, cc.rect(234, 81, 234, 81)),
            btnWeapon3 = cc.Sprite.create(res.station.storeMenus, cc.rect(234, 162, 234, 81));
        var btnCure1= cc.Sprite.create(res.station.storeMenus, cc.rect(468, 0, 234, 81)),
            btnCure2= cc.Sprite.create(res.station.storeMenus, cc.rect(468, 81, 234, 81)),
            btnCure3= cc.Sprite.create(res.station.storeMenus, cc.rect(468, 162, 234, 81));
        var btnUpClass1= cc.Sprite.create(res.station.storeMenus, cc.rect(702, 0, 234, 81)),
            btnUpClass2= cc.Sprite.create(res.station.storeMenus, cc.rect(702, 81, 234, 81)),
            btnUpClass3= cc.Sprite.create(res.station.storeMenus, cc.rect(702, 162, 234, 81));
        var btnOther1 = cc.Sprite.create(res.station.storeMenus, cc.rect(936, 0, 234, 81)),
            btnOther2 = cc.Sprite.create(res.station.storeMenus, cc.rect(936, 81, 234, 81)),
            btnOther3 = cc.Sprite.create(res.station.storeMenus, cc.rect(936, 162, 234, 81));

        this.btnAll=cc.MenuItemSprite.create(btnAll1,btnAll2,btnAll3,this._onViewAll,this);
        this.btnWeapon=cc.MenuItemSprite.create(btnWeapon1,btnWeapon2,btnWeapon3,this._onViewWeapon,this);
        this.btnCure=cc.MenuItemSprite.create(btnCure1,btnCure2,btnCure3,this._onViewCure,this);
        this.btnUpClass=cc.MenuItemSprite.create(btnUpClass1,btnUpClass2,btnUpClass3,this._onViewClass,this);
        this.btnOther=cc.MenuItemSprite.create(btnOther1,btnOther2,btnOther3,this._onViewOther,this);

        this.btnAll.attr({x:0,y:0,anchorX:0,anchorY:1});
        this.btnWeapon.attr({x:250,y:0,anchorX:0,anchorY:1});
        this.btnCure.attr({x:500,y:0,anchorX:0,anchorY:1});
        this.btnUpClass.attr({x:750,y:0,anchorX:0,anchorY:1});
        this.btnOther.attr({x:1000,y:0,anchorX:0,anchorY:1});

        this.Menu=cc.Menu.create(this.btnAll,this.btnWeapon,this.btnCure,this.btnUpClass,this.btnOther);
        this.Menu.attr({x:mx-800*rm,y:my+436*rm,scale:rm,anchorX:0,anchorY:0});
        this.addChild(this.Menu,5);

        this.nowViewBtn=this.btnAll;
        this.btnAll.attr({enabled:false});

        //物品列表

        this.scrollBox=new ScrollListBox(cc.size(1520,700),cc.size(200,200),10);
        this.scrollBox.attr({x:mx,y:my-50*rm,scale:rm,anchorX:0.5,anchorY:0.5});
        this.addChild(this.scrollBox,3);

        this.scrollBoxListener=gameEvent.on(this.scrollBox,"ClickItem",this._onClickItem,this);

        this.items=[];

        for(var j=0;j<28;j++){
            this.items[j]=new StationItem(weaponImg.sword[001]);
            this.scrollBox.pushItem(this.items[j]);
        }

        return true;
    },
    _selectTab:function(tabName){
        if(this.nowViewBtn) this.nowViewBtn.attr({enabled:true});
        this.nowViewBtn=this[tabName];
        this[tabName].attr({enabled:false});
    },
    _onViewAll:function(){
        this._selectTab("btnAll");
    },
    _onViewWeapon:function(){
        this._selectTab("btnWeapon");
    },
    _onViewCure:function(){
        this._selectTab("btnCure");
    },
    _onViewClass:function(){
        this._selectTab("btnUpClass");
    },
    _onViewOther:function(){
        this._selectTab("btnOther");
    },
    _onClickItem:function(arg){
        var item=arg.item;
        manager.changeScene("City");
    },
    destroy:function(){
        gameEvent.remove(this.scrollBoxListener);
    }
});

var StationStoreScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.layer = new StationStoreLayer();
        this.addChild(this.layer);
    },
    destroy:function(){
        if(this.layer.destroy) this.layer.destroy();
    }
});

xLayer.StationStore=StationStoreLayer;
xScene.StationStore=StationStoreScene;