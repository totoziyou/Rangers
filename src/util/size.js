var appSize={
    srcWidth:0,
    srcHeight:0,
    appWidth:0,
    appHeight:0,
    centerX:0,
    centerY:0,
    bgRate:0,
    emRate:0,
    left:cc.TEXT_ALIGNMENT_LEFT,
    center:cc.TEXT_ALIGNMENT_CENTER,
    right:cc.TEXT_ALIGNMENT_RIGHT,
    top:cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    middle:cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
    bottom:cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM,
    //获得缩放比例，用于自适应屏幕
    //bgRate 背景使用的缩放比例
    //emRate Node使用的缩放比例
    getRate:function(){
        var size=cc.director.getWinSize(),
            rate1=size.width/this.srcWidth,
            rate2=size.height/this.srcHeight;
        if(rate1>rate2){
            appSize.bgRate=rate1;
            appSize.emRate=rate2;
        }
        else{
            appSize.bgRate=rate2;
            appSize.emRate=rate1;
        }
        appSize.srcWidth=size.width;
        appSize.srcHeight=size.height;
        appSize.centerX=size.width/2;
        appSize.centerY=size.height/2;
    },
    //放置对象的位置
    //参数说明：
    // node : cocos 的node对象
    // direction: 方向，设置依靠哪个方向，left,right,top,bottom
    // parent: 父节点对象
    // offset : 偏移量
    place:function(node,parentNode,direction,offset){
        var x, y, w, h,
            n=(offset||0)*appSize.emRate;
        if(parentNode){
            w=parentNode.width;
            h=parentNode.height;
        }
        else{
            w=appSize.srcWidth;
            h=appSize.srcHeight;
        }
        switch(direction){
            case "top"   : y=h-n;break;
            case "right" : x=w-n;break;
            case "bottom": y=0+n;break;
            case "left"  : x=0+n;break;
                break;
        }
        if(x!=undefined) node.x=x;
        if(y!=undefined) node.y=y;
    }
};
