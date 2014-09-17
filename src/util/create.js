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
        if(params.owner && params.index){
            params.owner.addChild(obj,params.index);
        }
        return obj;
    }
};