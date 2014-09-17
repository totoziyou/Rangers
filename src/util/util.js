//工具类
var xUtil={
    //将#cccccc格式转成cc.color
    toColor:function(c){
        if(c.indexOf("#")==0){
            var c1=parseInt(c.substring(1,3),16),
                c2=parseInt(c.substring(3,5),16),
                c3=parseInt(c.substring(5,7),16);
            return cc.color(c1,c2,c3);
        }
        return c;
    }
};