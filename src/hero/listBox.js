/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-19
 * Time: 下午10:59
 * To change this template use File | Settings | File Templates.
 */
var HeroListBox = cc.Node.extend({
    ctor:function(owner){
        this._super();

        this.owner=owner;

        var startX=0,startY=124;

        this.menuBg=cc.Sprite.create(res.station.heroListBg);
        this.menuBg.attr({anchorX:0});
        this.addChild(this.menuBg,0);

        this.heroTotal = cc.LabelTTF.create("所有英雄(8)","Tahoma",36,cc.size(380,74),appSize.center,appSize.middle);
        this.heroTotal.attr({x:11,y:450,anchorX:0,anchorY:1});
        this.heroTotal.color=cc.color(0, 0, 0);
        this.addChild(this.heroTotal,1);

//        this.scrollBox=new ccui.ScrollView();
//        this.scrollBox.setDirection(ccui.ScrollView.DIR_VERTICAL);
//        this.scrollBox.setTouchEnabled(true);
//        //this.scrollBox.setBackGroundColor(cc.color(182, 66, 66));
//        //this.scrollBox.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
//        //this.scrollBox.setInnerContainerSize(cc.size(346, 600));
//        this.scrollBox.setContentSize(cc.size(346, 800));
//        this.scrollBox.attr({x:28,y:360,anchorX:0,anchorY:1});
//        //this.addChild(this.scrollBox,1);
//
//        this.heros=[];
//
//        this.listBox=cc.Node.create();
//        this.listBox.attr({anchorX:0,anchorY:1});
//        this.scrollBox.addChild(this.listBox,3);
//
//        var i,j,x,y,p,plen,index=0,heros=userData.heros,first=false;
//        for(i=7;i>0;i--){
//            p=heros[i];
//            plen= p.length;
//            for(j=0;j<plen;j++){
//                x=index%2*182;
//                y=parseInt(index/2)*182;
//                if(!first){
//                    this.firstData=p[j];
//                    first=true;
//                }
//                this.heros[index]=new HeroHeadIcon(p[j],this);
//                this.heros[index].attr({x:x,y:-y,anchorX:0,anchorY:1});
//                this.listBox.addChild(this.heros[index],1);
//                index++;
//            }
//        }
//
//        var totalHeight=(y+164)>800?(y+164):800;
//        this.listBox.attr({y:totalHeight});
//        this.scrollBox.setInnerContainerSize(cc.size(346, totalHeight));

        //this.addListener();

        this.items=[];

        this.scrollBox=new ScrollListBox(cc.size(348,800),cc.size(164,164),10);
        this.scrollBox.attr({x:27,y:360,anchorX:0,anchorY:1});
        this.addChild(this.scrollBox,5);

        var i,p,plen,index=0,heros=userData.heros,first=false;
        for(i=7;i>0;i--){
            p=heros[i];
            plen= p.length;
            for(j=0;j<plen;j++){
                if(!first){
                    this.firstData=p[j];
                    first=true;
                }
                this.items[index]=new HeroHeadIcon(p[j],this);
                this.scrollBox.pushItem(this.items[index]);
                index++;
            }
        }

        this.scrollBoxListener=gameEvent.on(this.scrollBox,"ClickItem",this._onClickItem,this);

        return true;
    },

    _onClickItem:function(arg){
        this.owner.changeHero(arg.item.model);
    },

    selectItem:function(data){
        this.owner.changeHero(data);
    },

    addListener:function(){
        var clickHeadIcon = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                cc.log("onTouchesBeganed");
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                cc.log(target);
                cc.log(locationInNode);
                cc.log(s);
                cc.log(rect);
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
            },
            onTouchEnded: function (touch, event) {
                cc.log("sprite onTouchesEnded.. ");
            }
        });
        cc.eventManager.addListener(clickHeadIcon, this.scrollBox);
    }
});