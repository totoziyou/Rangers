cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    //cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
    //cc.view.resizeWithBrowserSize(true);

    //load resources
    cc.LoaderScene.preload(g_resources, function () {

        appSize.srcWidth=1920;
        appSize.srcHeight=1080;
        appSize.getRate();

        //sc=new WelcomeScene();
        sc=new MapScene();
        cc.director.runScene(sc);
        manager.currentScene=sc;

    }, this);
};
cc.game.run();