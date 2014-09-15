/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-19
 * Time: 下午10:56
 * To change this template use File | Settings | File Templates.
 */
var HeroHeadIcon = cc.Node.extend({
    ctor:function(data,owner){
        this._super();

        this.model=data;
        this.owner=owner;

        this.bg=cc.Sprite.create(res.hero.heroRareBg,cc.rect((data.rare-1)*164,0,164,164));
        this.bg.setPosition(0,0);
        this.bg.attr({anchorX:0,anchorY:1});
        this.addChild(this.bg,0);

        this.icon=cc.Sprite.create(res.hero.headIcon[data.face]);
        this.icon.attr({x:12,y:-12,anchorX:0,anchorY:1});
        this.addChild(this.icon,1);

        var typeId=heroData.heroTypeIcon[data.type]-1,
            x=parseInt(typeId%5)*60,
            y=parseInt(typeId/5)*60;
        this.typeIcon=cc.Sprite.create(res.hero.heroTypeIconSmall,cc.rect(x<0?240:x,y,60,60));
        this.typeIcon.setPosition(0,0);
        this.typeIcon.attr({x:92,y:-92,anchorX:0,anchorY:1});
        this.addChild(this.typeIcon,2);

        //this.addListener();

        return true;
    },

    addListener:function(){
        var self=this,startP,endP;
        var iconClick = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                startP=touch.getLocation();
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(startP);
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
            },
            onTouchEnded: function (touch, event) {
                endP=touch.getLocation();
                if(endP.x==startP.x && endP.y==startP.y){
                    self.owner.selectItem(self.model);
                }
            }
        });
        cc.eventManager.addListener(iconClick, this.bg);
    }
});