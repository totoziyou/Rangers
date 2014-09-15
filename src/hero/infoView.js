/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-20
 * Time: 下午12:06
 * To change this template use File | Settings | File Templates.
 */
var HeroInfoView=cc.Node.extend({
    ctor:function(owner,data){

        this._super();

        this.owner=owner;
        this.model=data;

        var tleft=appSize.left,
            tcenter=appSize.center,
            tmiddle=appSize.middle

        this.heroBody=new HeroFullSize("sword","0");
        this.heroBody.attr({y:50});
        this.addChild(this.heroBody,0);

        //基本信息

        this.infoBg=cc.Sprite.create(res.heroInfoView.infoBg);
        this.infoBg.attr({x:360,y:112});
        this.addChild(this.infoBg, 1);

        this.heroName = cc.LabelTTF.create(data.name,"Tahoma",36,cc.size(360,74),tcenter,tmiddle);
        this.heroName.attr({x:360,y:320-37});
        this.heroName.enableStroke(cc.color(255,255,255),1);
        this.addChild(this.heroName,2);

        var typeName=heroData.heroTypeName[data.type][data.typeClass];

        this.heroType = cc.LabelTTF.create(typeName,"Tahoma",28,cc.size(360,32),tleft,tmiddle);
        this.heroType.attr({x:470,y:320-106});
        this.addChild(this.heroType,2);

        var weapon=weaponData[data.type][data.weaponId];

        this.weaponName = cc.LabelTTF.create(weapon.name,"Tahoma",28,cc.size(360,32),tleft,tmiddle);
        this.weaponName.attr({x:470,y:320-156});
        this.addChild(this.weaponName,2);

        this.abilityBg=cc.Sprite.create(res.heroInfoView.abilityBg);
        this.abilityBg.attr({x:360,y:-250});
        this.addChild(this.abilityBg, 1);

        //武力值

        this.valueBg=cc.Sprite.create(res.heroInfoView.valueBg);
        this.valueBg.attr({x:-380,y:0});
        this.addChild(this.valueBg, 1);

        var i,vname,vy,vper,
            vorder=heroData.heroValueOrder,
            vmax=heroData.heroValueMax,
            ilen=vorder.length,
            fontName="Tahoma",
            fontSize=30,
            vsize=cc.size(70,36),
            stepHeight=50;

        this.values={};
        this.valueBars={};

        for(i=0;i<ilen;i++){
            vname=vorder[i];
            vy=142-i*stepHeight;
            vper=data[vname]*100/vmax[i];
            //数值显示
            this.values[vname] = cc.LabelTTF.create(data[vname],fontName,fontSize,vsize,tleft,tmiddle);
            this.values[vname].attr({x:-240,y:vy,anchorX:0});
            this.addChild(this.values[vname],1);
            //数值条显示
            this.valueBars[vname]= new cc.LayerColor(cc.color(111,160,47),2.3*vper,16);
            this.valueBars[vname].attr({x:-485,y:vy-7,anchorX:0});
            this.addChild(this.valueBars[vname],2);
        }

        return true;
    },
    changeHero:function(data){
        var typeName=heroData.heroTypeName[data.type][data.typeClass],
            weapon=weaponData[data.type][data.weaponId];
        this.model=data;
        this.heroBody.changeHero(data.type,"0");
        this.heroName.setString(data.name);
        this.heroType.setString(typeName);
        this.weaponName.setString(weapon.name);
        this.updateValue(data);
    },
    updateValue:function(data){
        var i,vname,vper,
            vorder=heroData.heroValueOrder,
            vmax=heroData.heroValueMax,
            ilen=vorder.length;

        for(i=0;i<ilen;i++){
            vname=vorder[i];
            vper=data[vname]*100/vmax[i];
            this.values[vname].setString(data[vname]);
            this.valueBars[vname].width=2.3*vper;
        }
    }
});