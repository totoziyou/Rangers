//地图数据
var mapData={
    nation:{
        1:{ name:"莱茵帝国",state:[101,102,103,104,105]}
    },
    state:{
        101:{ name:"莱茵努斯行省", city:[1,2,3],nation:1 },
        102:{ name:"纽尔卡行省", city:[],nation:1 },
        103:{ name:"瓦亚那西行省", city:[],nation:1 },
        104:{ name:"科蒙多行省", city:[],nation:1 },
        105:{ name:"米莱斯哥特行省", city:[],nation:1 }
    },
    city:{
        1:{ name:"莫桑科多",state:105,type:3 },
        2:{ name:"迪尔卡森",state:105,type:3 },
        3:{ name:"斯哥特",state:105,type:2 }
    }
};
//武器装备数据
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
//药剂数据
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

//英雄数据
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