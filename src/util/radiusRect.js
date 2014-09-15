/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-22
 * Time: 下午3:25
 * To change this template use File | Settings | File Templates.
 */
var RadiusRect = cc.Node.extend({
    ctor:function(width,height,radius,color,opacity,angle){

        this._super();

        color=color||cc.color.BLACK;
        opacity=opacity||255;
        angle=angle||[1,1,1,1];

        //绘制矩形，左中右3片
        var sidew=radius,
            sideh=height-2*radius,
            middlew=width-2*radius,
            hw=width/ 2,
            hh=height/ 2,
            zx=-middlew/ 2,
            zy=-height/2;

        //左边
        var leftH=sideh,leftY=zy+radius;
        if(!angle[0] && !angle[3]){
            leftH=height;
            leftY=zy;
        }
        if(angle[0] && !angle[3]){
            leftH=height-radius;
            leftY=zy;
        }
        if(!angle[0] && angle[3]){
            leftH=height-radius;
            leftY=zy+radius;
        }
        this.leftRect= new cc.LayerColor(color,sidew,leftH);
        this.leftRect.attr({x:zx-sidew,y:leftY,opacity:opacity});
        this.addChild(this.leftRect,0);

        //中间
        this.midRect= new cc.LayerColor(color,middlew,height);
        this.midRect.attr({x:zx,y:zy,opacity:opacity});
        this.addChild(this.midRect,0);

        //右边
        var rightH=sideh,rightY=zy+radius;
        if(!angle[1] && !angle[2]){
            rightH=height;
            rightY=zy;
        }
        if(!angle[1] && angle[2]){
            rightH=height-radius;
            rightY=zy+radius;
        }
        if(angle[1] && !angle[2]){
            rightH=height-radius;
            rightY=zy;
        }
        this.rightRect= new cc.LayerColor(color,sidew,rightH);
        this.rightRect.attr({x:zx+middlew,y:rightY,opacity:opacity});
        this.addChild(this.rightRect,0);

        //绘制4个圆角
        if(angle[0]){
            this.LT=cc.Sprite.create(res.common.radius,cc.rect(0,0,radius,radius));
            this.LT.attr({x:-hw,y:hh,anchorX:0,anchorY:1,color:color,opacity:opacity});
            this.addChild(this.LT,0);
        }

        if(angle[1]){
            this.RT=cc.Sprite.create(res.common.radius,cc.rect(radius,0,radius,radius));
            this.RT.attr({x:hw,y:hh,anchorX:1,anchorY:1,color:color,opacity:opacity});
            this.addChild(this.RT,0);
        }

        if(angle[2]){
            this.RB=cc.Sprite.create(res.common.radius,cc.rect(radius,radius,radius,radius));
            this.RB.attr({x:hw,y:-hh,anchorX:1,anchorY:0,color:color,opacity:opacity});
            this.addChild(this.RB,0);
        }

        if(angle[3]){
            this.LB=cc.Sprite.create(res.common.radius,cc.rect(0,radius,radius,radius));
            this.LB.attr({x:-hw,y:-hh,anchorX:0,anchorY:0,color:color,opacity:opacity});
            this.addChild(this.LB,0);
        }

        return true;
    }
});