/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-9-3
 * Time: 上午11:23
 * To change this template use File | Settings | File Templates.
 */
var gameEvent={
    _id:0,
    _listenerObj:{},
    //事件关联表
    _listener:{},
    //是否停止事件处理
    _isStop:false,
    //获得tagId
    getId:function(eventTarget,isAdd){
        var i;
        for(i in this._listenerObj){
            if(this._listenerObj[i]==eventTarget){
                return i;
            }
            else if(!this._listenerObj[i]){
                delete this._listenerObj[i];
            }
        }
        if(isAdd){
            this._id++;
            this._listenerObj[this._id]=eventTarget;
            return this._id;
        }
        else return -1;
    },
    //注册一个监听器
    on:function(eventTarget,eventName,eventCallBack,options){
        var eventObj,tagId;
        //判断参数是否合法
        if(eventTarget && eventName && eventCallBack){
            //获得tagId
            tagId=this.getId(eventTarget,true);
            //是否有对象节点
            if(!this._listener[tagId]) this._listener[tagId]={};
            //是否有对象事件名
            if(!this._listener[tagId][eventName]) this._listener[tagId][eventName]=[];
            //将回调方法加入回调队列
            eventObj={
                Fn:eventCallBack,
                options:options,
                isPause:false
            };
            this._listener[tagId][eventName].push(eventObj);
            return {
                type:"eventObj",
                tagId:tagId,
                eventTarget:eventTarget,
                eventName:eventName,
                eventCallBack:eventCallBack
            };
        }
        return false;
    },
    //发射一个事件
    emit:function(eventTarget,eventName,eventData){
        //是否暂停所有事件处理
        if(this._isStop) return;
        //事件对象，事件名称是否存在
        if(eventTarget && eventName){
            //获得tagId
            tagId=this.getId(eventTarget);
            if(tagId==-1) return;
            //查找监听列表，是否注册了对应对象上的对应事件
            if(this._listener[tagId] && this._listener[tagId][eventName]){
                var i,calls=this._listener[tagId][eventName],ilen=calls.length;
                //执行所有回调
                for(i=0;i<ilen;i++){
                    //如果监听器被暂停了则不执行
                    if(!calls[i].isPause){
                        if(calls[i].options){
                            calls[i].Fn.call(calls[i].options,eventData);
                        }
                        else calls[i].Fn(eventData);
                    }
                }
            }
        }
    },
    //暂停一个事件监听
    pause:function(eventObj){
        this.setAttr(eventObj,"isPause",true);
    },
    //恢复一个事件监听
    resume:function(eventObj){
        this.setAttr(eventObj,"isPause",false);
    },
    //设置事件监听器属性
    setAttr:function(eventObj,attr,val){
        if(eventObj.type && eventObj.type=="eventObj"){
            var i,arr=this._listener[eventObj.eventTarget][eventObj.eventName],ilen=arr.length;
            for(i=0;i<ilen;i++){
                if(arr[i].Fn==eventObj.eventCallBack){
                    arr[i][attr]=val;
                    break;
                }
            }
        }
    },
    //移除监听
    remove:function(eventTarget,eventName,eventCallBack){
        var eTagId,eTag,eName,eFn;
        //如果传的是事件对象
        if(eventTarget.type=="eventObj"){
            eTagId=eventTarget.eventTagId;
            eTag=eventTarget.eventTarget;
            eName=eventTarget.eventName;
            eFn=eventTarget.eventCallBack;
        }
        else{
            eTag=eventTarget;
            eName=eventName;
            eFn=eventCallBack;
        }
        //判断参数是否合法
        if(eTag && eName && eFn){
            if(!eTagId){
                eTagId=this.getId(eventTarget);
            }
            //查找监听列表，是否注册了对应对象上的对应事件
            if(this._listener[eTagId] && this._listener[eTagId][eName]){
                var i,calls=this._listener[eTagId][eName],ilen=calls.length;
                //遍历所有回调
                for(i=0;i<ilen;i++){
                    //如果回调匹配，则删除该回调
                    if(calls[i]==eFn){
                        calls.splice(i,1);
                        break;
                    }
                }
                //如果所有回调都移除了
                if(calls.length==0){
                    delete this._listener[eTagId][eName];
                }
                //如果该目标下无任何事件监听
                if(this.isEmptyObject(this._listener[eTagId])){
                    delete this._listener[eTagId];
                }
            }
        }
    },
    //暂停所有监听处理
    pauseAll:function(){
        this._isStop=true;
    },
    //恢复所有监听处理
    resumeAll:function(){
        this._isStop=false;
    },
    //清除所有事件监听
    removeAll:function(){
        this._listener={};
    },
    //清除所有事件监听
    clearListener:function(){
        this._listener={};
    },
    //判断对象是否为空
    isEmptyObject:function(obj){
        for(var i in obj){
            return false;
        }
        return true;
    }
};
