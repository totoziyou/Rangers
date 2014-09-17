
xUnit.MapSide = cc.Node.extend({
    ctor:function(){
        this._super();

        this.sideBg= new cc.LayerColor(cc.color(255,255,255),20,20);
        this.sideBg.attr({y:-20});
        this.addChild(this.sideBg,1);

        this.worldMap=new xUnit.MapSideWorld(550,370);
        this.addChild(this.worldMap,2);

        this.nationSelect=new xUnit.MapSideNation(550,230);
        this.nationSelect.attr({y:-370});
        this.addChild(this.nationSelect,2);

        return true;
    },
    update:function(){

    }
});
//世界地图部分
xUnit.MapSideWorld=cc.Node.extend({
    ctor:function(w,h){
        this._super();

        if(w && h) this.setContentSize(cc.size(w,h));

        this.title=xCreate.label({
            text:"世界地图",
            width:550,
            height:40,
            color:"#000000",
            attr:{y:-20,anchorX:0,anchorY:1},
            owner:this,
            index:1
        });

        this.world=cc.Sprite.create(res.map.bg_sideWorldMap);
        this.world.attr({x:550/2,y:-93,anchorY:1});
        this.addChild(this.world,0);


        return true;
    }
});
//国家选择部分
xUnit.MapSideNation= cc.Node.extend({
    ctor:function(w,h){
        this._super();

        if(w && h) this.setContentSize(cc.size(w,h));

        this.bg= new cc.LayerColor(cc.color(175,138,43),550,230);
        this.bg.attr({y:-230});
        this.addChild(this.bg,1);

        return true;
    }
});
//国家地区选择部分
xUnit.MapSideState=cc.Node.extend({
    ctor:function(){
        this._super();
        return true;
    }
});