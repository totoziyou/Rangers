
var HeroFullSize = cc.Node.extend({
    ctor:function(type,id){

        this._super();

        this.body=cc.Sprite.create(res.hero[type].full[id]);
        //this.body.attr({anchorX:0,anchorY:1});
        this.addChild(this.body,2);

        this.halo=cc.Sprite.create(res.hero.heroHalo);
        this.halo.attr({y:-420});
        this.addChild(this.halo,0);

        var typeId=heroData.heroTypeIcon[type]-1,
            x=parseInt(typeId%5)*400,
            y=parseInt(typeId/5)*400;
        this.typeIcon=cc.Sprite.create(res.hero.heroTypeIcon,cc.rect(x,y,400,400));
        this.typeIcon.setPosition(0,0);
        this.typeIcon.attr({scaleY:0.3,y:-420});
        this.addChild(this.typeIcon,1);

        return true;
    },
    changeHero:function(type,id){
        this.body.setTexture(res.hero[type].full[id]);
    }
});