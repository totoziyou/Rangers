
var Header = cc.Node.extend({
    ctor:function(){

        this._super();

        this.bg=cc.Sprite.create(res.header.bg);
        this.bg.attr({anchorX:0,anchorY:1});
        this.addChild(this.bg,0);

        //佣兵团等级

        this.teamClassBg=cc.Sprite.create(res.header.teamClassBg);
        this.teamClassBg.attr({x:20,anchorX:0,anchorY:1});
        this.addChild(this.teamClassBg,1);

        this.teamClass = cc.LabelTTF.create(userData.teamClass,"Tahoma",36,cc.size(103,103),appSize.center,appSize.middle);
        this.teamClass.attr({x:20,anchorX:0,anchorY:1});
        this.teamClass.color=cc.color(182, 66, 66);
        this.addChild(this.teamClass,2);

        //成就

        this.gradeIcon=cc.Sprite.create(res.header.grade);
        this.gradeIcon.attr({x:140,anchorX:0,anchorY:1});
        this.addChild(this.gradeIcon,1);

        this.gradeVal = cc.LabelTTF.create(userData.grade,"Tahoma",36,cc.size(200,90),appSize.left,appSize.middle);
        this.gradeVal.attr({x:200,anchorX:0,anchorY:1});
        this.addChild(this.gradeVal,3);

        //体力

        this.epBg=cc.Sprite.create(res.header.epBg);
        this.epBg.attr({x:600,anchorX:0,anchorY:1});
        this.addChild(this.epBg,1);

        this.epBar= new cc.LayerColor(cc.color(111,160,47),27*userData.ep,32);
        this.epBar.attr({x:607,y:-60,anchorX:0,anchorY:1});
        this.addChild(this.epBar,2);

        this.epTitle = cc.LabelTTF.create("体力","Tahoma",40,cc.size(90,90),appSize.left,appSize.middle);
        this.epTitle.attr({x:510,anchorX:0,anchorY:1});
        this.epTitle.color=cc.color(130, 193, 48);
        this.addChild(this.epTitle,2);

        this.epVal = cc.LabelTTF.create(userData.ep,"Tahoma",36,cc.size(270,90),appSize.center,appSize.middle);
        this.epVal.attr({x:607,anchorX:0,anchorY:1});
        this.addChild(this.epVal,3);

        //精力

        this.spBg=cc.Sprite.create(res.header.spBg);
        this.spBg.attr({x:1000,anchorX:0,anchorY:1});
        this.addChild(this.spBg,1);

        this.spBar= new cc.LayerColor(cc.color(255,138,0),27*userData.sp,32);
        this.spBar.attr({x:1006,y:-60,anchorX:0,anchorY:1});
        this.addChild(this.spBar,2);

        this.spTitle = cc.LabelTTF.create("精力","Tahoma",40,cc.size(90,90),appSize.left,appSize.middle);
        this.spTitle.attr({x:910,anchorX:0,anchorY:1});
        this.spTitle.color=cc.color(255, 138, 0);
        this.addChild(this.spTitle,2);

        this.spVal = cc.LabelTTF.create(userData.sp,"Tahoma",36,cc.size(270,90),appSize.center,appSize.middle);
        this.spVal.attr({x:1006,anchorX:0,anchorY:1});
        this.addChild(this.spVal,3);

        //金币

        this.moneyIcon=cc.Sprite.create(res.header.money);
        this.moneyIcon.attr({x:1350,anchorX:0,anchorY:1});
        this.addChild(this.moneyIcon,1);

        this.moneyVal = cc.LabelTTF.create(userData.money,"Tahoma",40,cc.size(276,90),appSize.left,appSize.middle);
        this.moneyVal.attr({x:1410,anchorX:0,anchorY:1});
        this.addChild(this.moneyVal,2);

        //钻石

        this.diamondIcon=cc.Sprite.create(res.header.diamond);
        this.diamondIcon.attr({x:1626,anchorX:0,anchorY:1});
        this.addChild(this.diamondIcon,1);

        this.diamondVal = cc.LabelTTF.create(userData.diamond,"Tahoma",40,cc.size(200,90),appSize.left,appSize.middle);
        this.diamondVal.attr({x:1700,anchorX:0,anchorY:1});
        this.diamondVal.color=cc.color(169, 238, 255);
        this.addChild(this.diamondVal,2);

        this.diamondBuy=cc.Sprite.create(res.header.buy);
        this.diamondBuy.attr({x:1880,anchorX:1,anchorY:1});
        this.addChild(this.diamondBuy,2);

        return true;
    },
    update:function(){
        this.teamClass.setString(userData.teamClass);
        this.gradeVal.setString(userData.grade);
        this.epBar.width=27*userData.ep;
        this.epVal.setString(userData.ep);
        this.spBar.width=27*userData.sp;
        this.spVal.setString(userData.sp);
        this.moneyVal.setString(userData.money);
        this.diamondVal.setString(userData.diamond);
    }
});


