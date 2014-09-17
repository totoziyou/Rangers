
var ScrollBox = cc.Node.extend({
    //容器的大小
    _scrollSize:null,
    _startPos:null,
    //滚动的高度
    _scrollTop:0,
    //列表的最大高度
    _maxHeight:0,
    //最大可滚动的高度
    _maxScrollTop:0,
    //是否需要拖动item
    _isDrag:false,

    ctor:function(boxSize,itemSize,itemMargin,isDrag) {

        this._super();

        var width=boxSize.width,
            height=boxSize.height;

        this._items=[];

        this._scrollSize=boxSize;
        this._itemSize=itemSize;
        this._itemMargin=itemMargin||0;
        this._isDrag=isDrag;
        this._startPos={x:0,y:height};
        this._colNum=parseInt((width+2*itemMargin)/(itemSize.width+2*itemMargin));

        cc.log(this._colNum);

        this.setContentSize(boxSize);

        this.box=cc.Node.create();
        this.box.setContentSize(boxSize);

        this.listNode=cc.Node.create();
        this.listNode.attr({y:height});
        this.box.addChild(this.listNode);

        this.bg= new cc.LayerColor(cc.color(111,160,47),width,height);
        this.addChild(this.bg,0);

        this.scrollView=cc.ScrollView.create(boxSize);
        this.scrollView.setViewSize(boxSize);
        this.scrollView.setContainer(this.box);
        this.scrollView.setTouchEnabled(true);
        this.scrollView.setBounceable(false);
        this.scrollView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        this.addChild(this.scrollView);

        this.addListener();

        return true;
    },

    addListener:function(){
        var startP,currentP,endP,
            startT,currentT,endT,
            self=this;
        var iconClick = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                startT=(new Date()).getTime();
                startP=touch.getLocation();
                currentP=touch.getLocation();
                var target = event.getCurrentTarget(),
                    locationInNode = target.convertToNodeSpace(startP),
                    s = target.getContentSize(),
                    rect = cc.rect(0, 0, s.width, s.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                var p=touch.getLocation();
                currentT=(new Date()).getTime();
                //如果停顿300毫秒，认为是进行拖拽
                if(self._isDrag && currentT-startT>300){
                    cc.log("drag");
                }
                else if(p.x!=startP.x || p.y!=startP.y){
                    var moveH=(p.y-currentP.y)/appSize.emRate;
                    self._scrollTop+=moveH;
                    if(self._scrollTop<=0) self._scrollTop=0;
                    if(self._scrollTop>=self._maxScrollTop) self._scrollTop=self._maxScrollTop;
                    self.onScroll();
                    currentP.x=p.x;
                    currentP.y=p.y;
                }
            },
            onTouchEnded: function (touch, event) {
                endP=touch.getLocation();
                if(endP.x==startP.x && endP.y==startP.y){
                    var pos=self.listNode.convertToNodeSpace(endP),
                        mg=self._itemMargin,
                        blockw=self._itemSize.width+2*mg,
                        blockh=self._itemSize.height+2*mg,
                        row=parseInt(-pos.y/blockw),
                        col=parseInt(pos.x/blockh),
                        index=row*self._colNum+col;
                    self.onClickItem(index);
                }
            }
        });
        cc.eventManager.addListener(iconClick, this.scrollView);
    },
    //滚动
    onScroll:function(){
        this.listNode.attr({y:this._scrollSize.height+this._scrollTop});
    }
});