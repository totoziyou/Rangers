
var DrunkeryLayer = cc.Layer.extend({
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

        this.npc=cc.Sprite.create(res.npc.drunkery);
        this.npc.attr({x:0,y:0,scale:rm,anchorX:0,anchorY:0});
        this.addChild(this.npc, 2);

        var cw=sw-300*rm,
            ch=sh-90*rm,
            mx=300*rm+cw/2,
            my=ch/2;

        this.panel=cc.Node.create();
        this.panel.attr({x:mx,y:my,scale:rm});
        this.addChild(this.panel,3);

        this.radiusRect=new RadiusRect(1400,800,10,cc.color.BLACK,200);
        this.panel.addChild(this.radiusRect,0);

        this.title=cc.Sprite.create(res.drunkery.title);
        this.title.attr({y:400});
        this.panel.addChild(this.title,1);

        this.infoBg=new RadiusRect(1350,60,10,cc.color.WHITE,150);
        this.infoBg.attr({x:0,y:-320});
        this.panel.addChild(this.infoBg,0);

        var infoTxt="花费金币或钻石雇佣一个英雄，至少获得对应星级的英雄，也有一定几率获得更高星级的英雄";
        this.info=cc.LabelTTF.create(infoTxt,"Tahoma",30,cc.size(1350,60),appSize.center,appSize.middle);
        this.info.color=cc.color(0,0,0);
        this.infoBg.addChild(this.info,1);

        this.closeBtn=cc.MenuItemImage.create(res.city.closeBtn,res.city.closeBtn,this._onClose,this);
        this.closeBtn.attr({x:700-10,y:400-10});
        //雇佣普通英雄
        this.hire1=cc.MenuItemImage.create(res.drunkery.hire1,res.drunkery.hire1,this._onHireClass1,this);
        this.hire1.attr({x:-510,y:40});
        //雇佣高级英雄
        this.hire2=cc.MenuItemImage.create(res.drunkery.hire2,res.drunkery.hire2,this._onHireClass2,this);
        this.hire2.attr({x:-170,y:40});
        //雇佣精英英雄
        this.hire3=cc.MenuItemImage.create(res.drunkery.hire3,res.drunkery.hire3,this._onHireClass3,this);
        this.hire3.attr({x:170,y:40});
        //雇佣传奇英雄
        this.hire4=cc.MenuItemImage.create(res.drunkery.hire4,res.drunkery.hire4,this._onHireClass4,this);
        this.hire4.attr({x:510,y:40});

        this.Menu=cc.Menu.create(this.closeBtn,this.hire1,this.hire2,this.hire3,this.hire4);
        this.Menu.attr({x:0,y:0,anchorX:0,anchorY:0});
        this.panel.addChild(this.Menu,2);

        return true;
    },
    _gotoHire:function(type){

    },
    _onHireClass1:function(){
        this._gotoHire(1);
    },
    _onHireClass2:function(){
        this._gotoHire(2);
    },
    _onHireClass3:function(){
        this._gotoHire(3);
    },
    _onHireClass4:function(){
        this._gotoHire(4);
    },
    _onClose:function(){
        manager.changeScene("City");
    }
});

var DrunkeryScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new DrunkeryLayer();
        this.addChild(layer);
    }
});

xLayer.Drunkery=DrunkeryLayer;
xScene.Drunkery=DrunkeryScene;