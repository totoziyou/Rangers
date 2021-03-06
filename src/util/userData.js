var userData={
    //佣兵团等级
    teamClass:"FF",
    //佣兵团积分
    grade:"0",
    //体力
    ep:0,
    epTime:10*60000,
    //精力
    sp:0,
    spTime:10*60000,
    //金币
    money:10000,
    //钻石
    diamond:10,
    //成员
    heros:{
        //结构：姓名，职业类型，转职等级，脸，头发，武器，经验值，等级，稀有度
        //     生命，力量，防御，魔力，魔防，技能，速度，幸运
        7:[
            {
                name:"奥卡索",type:"sword",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:7,
                life:561,power:128,defense:105,magic:25,magicDefense:35,skill:80,speed:85,luck:8
            }
        ],
        6:[
            {
                name:"德拉卡多蒙斯",type:"bow",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:6,
                life:335,power:88,defense:85,magic:15,magicDefense:25,skill:60,speed:55,luck:12
            }
        ],
        5:[
            {
                name:"茜斯伦",type:"spear",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:5,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            }
        ],
        4:[
            {
                name:"哈拉法尔",type:"shield",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:4,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            }
        ],
        3:[
            {
                name:"乔恩",type:"sword",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:3,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            }
        ],
        2:[
            {
                name:"伊黛丽",type:"bow",typeClass:0,face:1,hair:0,weaponId:1,exp:100,lv:5,rare:2,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            },
            {
                name:"卡恩德隆",type:"shield",typeClass:0,face:1,hair:0,weaponId:1,exp:100,lv:5,rare:2,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            }
        ],
        1:[
            {
                name:"哈拉法尔",type:"sword",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:1,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            },
            {
                name:"威尔斯",type:"spear",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:1,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            },
            {
                name:"迪拉普地",type:"knife",typeClass:0,face:0,hair:0,weaponId:1,exp:100,lv:5,rare:1,
                life:135,power:28,defense:15,magic:5,magicDefense:5,skill:20,speed:15,luck:8
            }
        ]
    },
    items:{
        weapon:[
            { type:"sword",id:1,kill:5,canUse:15 }
        ],
        cure:{

        },
        upClass:{

        },
        other:{

        }
    },
    map:{
        now:{
            nation:1,
            state:105,
            city:1
        },
        open:{
            nation:1,
            state:105,
            city:1
        }
    },
    //英雄排序，按照稀有度，等级排列
    sortHeros:function(){
        var i,len=this.heros.length,heros=[];
        for(i=0;i<len;i++){

        }
    },
    //设置
    setData:function(options){
        for(var i in options){
            this[i]=options[i];
        }
    }
};