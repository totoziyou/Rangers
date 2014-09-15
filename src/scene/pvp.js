
var PvpLayer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var sw=appSize.srcWidth,sh=appSize.srcHeight,
            rb=appSize.bgRate,rm=appSize.emRate;

        this.bg=cc.Sprite.create(res.pvp.bg);
        this.bg.attr({x:sw/2,y:sh/2,scale:rb});
        this.addChild(this.bg, 0);

        this.header=new Header();
        this.header.attr({x:0,y:sh,scale:rm});
        this.addChild(this.header,1);

        this.npc=cc.Sprite.create(res.npc.weaponShop);
        this.npc.attr({x:0,y:0,scale:rm,anchorX:0,anchorY:0});
        this.addChild(this.npc, 2);

        var cw=sw-300*rm,
            ch=sh-110*rm,
            mx=300*rm+cw/2,
            my=ch/2;

        this.panel=cc.Node.create();
        this.panel.attr({x:mx,y:my,scale:rm});
        this.addChild(this.panel,3);


        this.closeBtn=cc.MenuItemImage.create(res.city.closeBtn,res.city.closeBtn,this._onClose,this);
        this.closeBtn.attr({x:750-10,y:450-10});

        this.Menu=cc.Menu.create(this.closeBtn);
        this.Menu.attr({x:0,y:0,anchorX:0,anchorY:0});
        this.panel.addChild(this.Menu,2);

        return true;
    },
    _onClose:function(){
        manager.changeScene("City");
    }
});

var PvpScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new PvpLayer();
        this.addChild(layer);
    }
});

xLayer.Pvp=PvpLayer;
xScene.Pvp=PvpScene;