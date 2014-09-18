var res = {
    manifest:{
        ranger: "res/manifests/ranger.manifest"
    },
    common:{
        authorIcon: "res/images/common/author.png",
        radius: "res/images/common/radius.png",
        itemListBoxBg: "res/images/common/bg-itemListBox.png",
        itemBlockBg: "res/images/common/bg-itemBlock.png"
    },
    welcome:{
        bg: "res/images/welcome/bg.jpg",
        gameLogo: "res/images/welcome/gamelogo.png",
        progressBg: "res/images/welcome/progressBg.png"
    },
    header:{
        bg: "res/images/header/bg.png",
        teamClassBg: "res/images/header/bg-teamClass.png",
        grade: "res/images/header/icon-grade.png",
        epBg: "res/images/header/bg-ep.png",
        spBg: "res/images/header/bg-sp.png",
        money: "res/images/header/icon-money.png",
        diamond: "res/images/header/icon-diamond.png",
        buy: "res/images/header/btn-buy.png"
    },
    city:{
        bg: "res/images/city/bg.jpg",
        menuBg: "res/images/city/bg-menu.png",
        menuIcon: "res/images/city/menuIcon.png",
        closeBtn: "res/images/city/btn-close.png"
    },
    club:{
        bg: "res/images/city/bg-club.jpg"
    },
    drunkery:{
        title: "res/images/city/drunkery-title.png",
        hire1: "res/images/city/drunkery-hire1.png",
        hire2: "res/images/city/drunkery-hire2.png",
        hire3: "res/images/city/drunkery-hire3.png",
        hire4: "res/images/city/drunkery-hire4.png"
    },
    pvp:{
        bg: "res/images/city/bg-pvp.jpg"
    },
    npc:{
        club:"res/images/npc/npc-club.png",
        drunkery:"res/images/npc/npc-drunkery.png",
        weaponShop:"res/images/npc/npc-weaponShop.png",
        itemShop:"res/images/npc/npc-itemShop.png",
        mysteryShop:"res/images/npc/npc-mysteryShop.png"
    },
    map:{
        bg: "res/images/map/bg.jpg",
        bg_sideWorldMap: "res/images/map/bg_worldMap.png",
        nationIcon: "res/images/map/nationIcon.png"
    },
    station:{
        bg: "res/images/station/bg.jpg",
        menuBg: "res/images/station/bg-menuNow.png",
        menuIcon: "res/images/station/menuIcon.png",
        heroListBg: "res/images/hero/bg-heroList.png",
        storeMenus: "res/images/station/storeMenus.png"
    },
    heroInfoView:{
        infoBg: "res/images/hero/bg-heroInfo.png",
        abilityBg: "res/images/hero/bg-heroAbility.png",
        valueBg: "res/images/hero/bg-heroValue.png"
    },
    hero:{
        heroRareBg: "res/images/hero/bg-heroRare.png",
        heroTypeIcon: "res/images/hero/heroTypeIcon.png",
        heroTypeIconSmall: "res/images/hero/heroTypeIcon-60.png",
        heroHalo: "res/images/hero/heroHalo.png",
        headIcon:{
            0: "res/images/hero/headIcon-0.png",
            1: "res/images/hero/headIcon-1.png"
        },
        sword:{
            halo: "",
            full:{ 0: "res/images/hero/sword-0.png" }
        },
        knife:{
            halo: "",
            full:{ 0: "res/images/hero/knife-0.png" }
        },
        shield:{
            halo: "",
            full:{ 0: "res/images/hero/shield-0.png" }
        },
        spear:{
            halo: "",
            full:{ 0: "res/images/hero/spear-0.png" }
        },
        bow:{
            halo: "",
            full:{ 0: "res/images/hero/bow-0.png" }
        }
    }
};

var weaponImg={
    sword:{
        001: "res/images/weapon/sword/001.png"
    }
};

var g_resources = [
    //image

    //common 公用的
    res.common.authorIcon,
    res.common.radius,
    res.common.itemListBoxBg,
    res.common.itemBlockBg,

    //welcome 欢迎页
    res.welcome.bg,
    res.welcome.gameLogo,
    res.welcome.progressBg,

    //header 头部
    res.header.bg,
    res.header.teamClassBg,
    res.header.epBg,
    res.header.spBg,
    res.header.grade,
    res.header.money,
    res.header.diamond,
    res.header.buy,

    //city
    res.city.bg,
    res.city.menuBg,
    res.city.menuIcon,
    res.city.closeBtn,

    res.club.bg,

    //drunkery 酒吧
    res.drunkery.title,
    res.drunkery.hire1,
    res.drunkery.hire2,
    res.drunkery.hire3,
    res.drunkery.hire4,

    res.pvp.bg,

    //npc
    res.npc.club,
    res.npc.drunkery,
    res.npc.weaponShop,
    res.npc.itemShop,
    res.npc.mysteryShop,

    //map
    res.map.bg,
    res.map.bg_sideWorldMap,
    res.map.nationIcon,

    //station 营地
    res.station.bg,
    res.station.menuBg,
    res.station.menuIcon,
    res.station.heroListBg,
    res.station.storeMenus,

    res.heroInfoView.infoBg,res.heroInfoView.abilityBg,res.heroInfoView.valueBg,

    res.hero.heroRareBg,res.hero.heroTypeIcon,res.hero.heroTypeIconSmall,res.hero.heroHalo,

    res.hero.headIcon[0],res.hero.headIcon[1],

    res.hero.sword.full[0],res.hero.knife.full[0],res.hero.shield.full[0],res.hero.spear.full[0],res.hero.bow.full[0],

    weaponImg.sword[001]

    //plist

    //fnt

    //tmx

    //bgm

    //effect
];