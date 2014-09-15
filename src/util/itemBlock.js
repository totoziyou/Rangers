/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-25
 * Time: 上午10:58
 * To change this template use File | Settings | File Templates.
 */
var ItemBlock = cc.Node.extend({
    ctor:function (imgRes) {

        this._super();

        this.ItemImg=cc.Sprite.create(imgRes);
        this.ItemImg.attr({anchorX:0,anchorY:1});
        this.addChild(this.ItemImg,1);

        this.itemsBg=cc.Sprite.create(res.common.itemBlockBg);
        this.itemsBg.attr({anchorX:0,anchorY:1});
        this.addChild(this.itemsBg,0);

        return true;
    },
    getSize:function(){
        cc.log(this.itemsBg.getContentSize());
    }
});