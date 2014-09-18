var xCreate={
    fontType:"Tahoma",
    //创建一个label
    label:function(params){
        var text=params.text,
            fontType=params.fontType || this.fontType,
            fontSize=params.fontSize || 30,
            alignV=params.alignV || appSize.center,
            alignH=params.alignH || appSize.middle,
            areaSize=cc.size(params.width,params.height);
        var obj=cc.LabelTTF.create(text,fontType,fontSize,areaSize,alignV,alignH);
        if(params.attr){
            obj.attr(params.attr);
        }
        if(params.color){
            obj.color=xUtil.toColor(params.color);
        }
        if(params.placeAt && params.placeAt.owner && params.placeAt.index){
            params.placeAt.owner.addChild(obj,params.placeAt.index);
        }
        return obj;
    },
    sprite:function(params){
        var res=params.res;
        var obj=cc.Sprite.create(res);
        if(params.attr){
            obj.attr(params.attr);
        }
        if(params.placeAt){
            this.place(obj,params.placeAt);
        }
        return obj;
    },
    place:function(obj,params){
        if(params.owner && params.index){
            params.owner.addChild(obj,params.index);
        }
    }
};