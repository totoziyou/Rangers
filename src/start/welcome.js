/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-7-16
 * Time: 上午9:31
 * To change this template use File | Settings | File Templates.
 */

var WelcomeLayer = cc.Layer.extend({
    bg:null,
    _failCount:0,
    ctor:function () {

        this._super();

        var sw=appSize.srcWidth,sh=appSize.srcHeight,
            rb=appSize.bgRate,rm=appSize.emRate;

        this.bg=cc.Sprite.create(res.welcome.bg);
        this.bg.attr({x:sw/2,y:sh/2,scale:rb});
        this.addChild(this.bg, 0);

        this.gameLogo=cc.Sprite.create(res.welcome.gameLogo);
        this.gameLogo.attr({x:sw/2,y:sh/2+60*rm,scale:rm});
        this.addChild(this.gameLogo, 1);

        this.authorIcon=cc.Sprite.create(res.common.authorIcon);
        this.authorIcon.attr({x:sw-10*rm,y:sh-10*rm,scale:rm,anchorX:1,anchorY:1});
        this.addChild(this.authorIcon, 1);

        //进度条

        this.progressNode=cc.Node.create();
        this.progressNode.attr({x:sw/2,scale:rm,anchorY:1});
        appSize.place(this.progressNode,null,"bottom",100);
        this.addChild(this.progressNode, 2);

        this.progressBg=cc.Sprite.create(res.welcome.progressBg);
        this.progressBg.attr({visible:false});
        this.progressNode.addChild(this.progressBg, 1);

        this.title = cc.LabelTTF.create("检查更新","Arial", 30);
        this.progressNode.addChild(this.title,2);

        //如果是应用程序
//        if(cc.sys.isNative){
//            this.title.setString("开始更新");
//            this.checkUpdate();
//        }
        this.schedule(this.goCityScene,2);

        return true;
    },
    goCityScene:function(){
        manager.changeScene("City");
    },

    checkUpdate:function(){
        this.title.setString("check start");
        var manifestPath=res.manifest.ranger;
        var storagePath=((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/"));
        this._am=new jsb.AssetsManager(manifestPath,storagePath);
        // 由于下载过程是异步的，你需要增加manager的索引数以保证它不会被Cocos2d-x的内存管理释放掉
        this._am.retain();

        this.title.setString("AssetsManager ok!!");

        if (!this._am.getLocalManifest().isLoaded()){
            this.title.setString("isLoded/ Fail to update assets, step skipped.");
        }
        else{
            var that = this;
            this.title.setString("set listener");
            this.progressBg.attr({visible:true});

            var listener = new cc.EventListenerAssetsManager(this._am, function(event) {

                switch (event.getEventCode()){
                    //没有本地manifest配置文件
                    case cc.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                        that.title.setString("ERROR_NO_LOCAL_MANIFEST/"+"No local manifest file found, skip assets update.");
                        break;
                    //更新进度
                    case cc.EventAssetsManager.UPDATE_PROGRESSION:
                        that._percent = event.getPercent();
                        that._percentByFile = event.getPercentByFile();
                        that.title.setString("UPDATE_PROGRESSION/"+that._percent + "%"+that._percentByFile);
                        var msg = event.getMessage();
                        if (msg) {
                            that.title.setString("UPDATE_PROGRESSION/"+msg);
                        }
                        break;
                    //下载配置文件失败
                    case cc.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    //解析配置文件失败
                    case cc.EventAssetsManager.ERROR_PARSE_MANIFEST:
                        that.title.setString("ERROR_PARSE_MANIFEST/"+"Fail to download manifest file, update skipped.");
                        break;
                    case cc.EventAssetsManager.ALREADY_UP_TO_DATE:
                    //更新结束
                    case cc.EventAssetsManager.UPDATE_FINISHED:
                        that.title.setString("UPDATE_FINISHED/" + event.getMessage());
                        that._am.release();
                        cc.director.runScene(new WelcomeScene());
                        //Fn.exitGame();
                        break;
                    //更新失败
                    case cc.EventAssetsManager.UPDATE_FAILED:
                        that.title.setString("UPDATE_FAILED/"+ event.getMessage());

                        this._failCount ++;
                        if (this._failCount < 5)
                        {
                            that._am.downloadFailedAssets();
                        }
                        else
                        {
                            that.title.setString("UPDATE_FAILED/"+"Reach maximum fail count, exit update process");
                            this._failCount = 0;
                        }
                        break;
                    //更新错误
                    case cc.EventAssetsManager.ERROR_UPDATING:
                        that.title.setString("ERROR_UPDATING/"+"Asset update error: " + event.getAssetId() + ", " + event.getMessage());
                        break;
                    //解压失败
                    case cc.EventAssetsManager.ERROR_DECOMPRESS:
                        that.title.setString("ERROR_DECOMPRESS/"+event.getMessage());
                        break;
                    default:
                        break;
                }
            });

            cc.eventManager.addListener(listener, 1);
            this._am.update();
            //this._am.retain();
            cc.director.runScene(this);
        }
    }
});

var WelcomeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new WelcomeLayer();
        this.addChild(layer);
    }
});

xLayer.Welcome=WelcomeLayer;
xScene.Welcome=WelcomeScene;