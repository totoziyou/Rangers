
var Fn={
    exitGame:function(){
        //cc.log("exit game!");
        cc.director.end();
    }
};

var xLayer={};
var xScene={};

var manager={
    currentScene:null,
    changeScene:function(scrName){
        if(xScene[scrName]){
            if(manager.currentScene.destroy){
                manager.currentScene.destroy();
            }
            manager.currentScene=new xScene[scrName]();
            cc.director.runScene(manager.currentScene);
        }
    },
    pushScene:function(){

    },
    popScene:function(){

    }
};