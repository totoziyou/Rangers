/**
 * Created with JetBrains WebStorm.
 * User: WanXing
 * Date: 14-8-20
 * Time: 下午3:18
 * To change this template use File | Settings | File Templates.
 */
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

var weaponData={
    sword:{
        1:{name:"铁剑",attack:3,defense:0,magic:0,magicDefense:0,maxUse:30,isBuy:true,money:200,vipMoney:0,summary:""}
    },
    knife:{
        1:{name:"铁刀",attack:3,defense:0,magic:0,magicDefense:0,maxUse:30,isBuy:true,money:200,vipMoney:0}
    },
    assassin:{},
    shield:{
        1:{name:"铁盾",attack:3,defense:0,magic:0,magicDefense:0,maxUse:30,isBuy:true,money:200,vipMoney:0}
    },
    bow:{
        1:{name:"铁弓",attack:3,defense:0,magic:0,magicDefense:0,maxUse:30,isBuy:true,money:200,vipMoney:0}
    },
    magicBook:{},
    magicCane:{},
    medical:{},
    spear:{
        1:{name:"铁枪",attack:3,defense:0,magic:0,magicDefense:0,maxUse:30,isBuy:true,money:200,vipMoney:0}
    },
    crossBow:{},
    axe:{},
    bigSword:{},
    glove:{},
    magicBall:{},
    dart:{}
};

var cureData={
    lifeImg:"",
    life:{
        1:{ name:"小型治疗药水",type:"life",add:"50",summary:"恢复50点生命值"},
        2:{ name:"中型治疗药水",type:"life",add:"100",summary:"恢复100点生命值"},
        3:{ name:"大型治疗药水",type:"life",add:"200",summary:"恢复200点生命值"},
        4:{ name:"速效治疗药水",type:"life",add:"50%",summary:"恢复50%生命值"},
        5:{ name:"强力治疗药水",type:"life",add:"100%",summary:"恢复100%生命值"}
    }
};

var other={
    expImg:"",
    exp:{
        1:{ name:"经验神符",type:"exp",add:"5%",summary:"额外获得5%的经验"},
        2:{ name:"经验神符",type:"exp",add:"10%",summary:"额外获得10%的经验"},
        3:{ name:"经验神符",type:"exp",add:"15%",summary:"额外获得15%的经验"},
        4:{ name:"经验神符",type:"exp",add:"20%",summary:"额外获得20%的经验"},
        5:{ name:"经验神符",type:"exp",add:"30%",summary:"额外获得30%的经验"}
    }
};

var upClassData={};

var otherData={};

var heroData={
    heroValueOrder:["life","power","defense","magic","magicDefense","skill","speed","luck"],
    heroValueMax:[2000,200,200,200,200,100,100,20],
    heroTypeName:{
        sword:["见习剑士","剑士"],
        knife:["见习刀客","刀客"],
        assassin:["见习侦查兵","侦查兵"],
        shield:["见习盾剑士","盾剑士"],
        bow:["见习弓箭手","弓箭手"],
        magicBook:["见习法师","法书法师"],
        magicCane:["见习法师","权杖法师"],
        medical:["见习医者","医生"],
        spear:["见习枪兵","长枪兵"],
        crossBow:["见习弩手","弩手"],
        axe:["见习斧兵","斧兵"],
        bigSword:["见习大剑士","大剑士"],
        glove:["见习拳斗士","拳斗士"],
        magicBall:["见习法师","魔球法师"],
        dart:["见习投掷手","投掷手"]
    },
    heroTypeIcon:{
        sword:1,
        knife:2,
        assassin:3,
        shield:4,
        bow:5,
        magicBook:6,
        magicCane:7,
        medical:8,
        spear:9,
        crossBow:10,
        axe:11,
        bigSword:12,
        glove:13,
        magicBall:14,
        dart:15
    }
}