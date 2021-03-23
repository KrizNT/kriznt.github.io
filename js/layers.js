addLayer("BP", {
    name: "BP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    branches: ["SP"], // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    softcap: new Decimal(1e20), 
    softcapPower: new Decimal(0.02), 
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasAchievement("a", 31)) mult = mult.times(45);
		if (hasAchievement("a", 32)) mult = mult.times(90);
        if (hasAchievement("a", 33)) mult = mult.times(180);
		if (hasAchievement("a", 34)) mult = mult.times(360);
        if (hasUpgrade("BP", 14)) mult = mult.times(4);
        if (hasUpgrade('SP', 21)) mult = mult.times(upgradeEffect('SP', 21))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        if (hasUpgrade("SP", 11)) exp = exp.times(1.3);
        return exp
    },

    passiveGeneration() { return (hasMilestone("BP", 1)&&player.BP.current!="BP")?1000:0 },
    infoboxes:{
        coolInfo: {
            title: "Lore",
            titleStyle: {'color': '#FE0000'},
            body: "DEEP LORE!",
            bodyStyle: {'background-color': "#0000EE"}
        }
    },

    upgrades: {
        rows: 5,
        cols: 10,
        11: {
            title: "NT 1.x",
            description: "Upgrade your Database",
            cost: 1,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false
            },
            effect() {
                return new Decimal(8);

        },
    },

12: {
    title: "NT-Boost V1",
    description: "AP boost their own generation.",
    cost: new Decimal(1),
    unlocked() { return (hasUpgrade(this.layer, 11))},
    effect() { 
        let eff = player.points.plus(1).log10().pow(2).plus(1);
        return eff;
        
    },
    effectDisplay() { return format(tmp.BP.upgrades[12].effect)+"x" },



},

13: {
    title: "Reversed",
    description: "BP gain is boosted by your AP.",
    cost: new Decimal(100),
    effect() {
        let eff = player.points.plus(1).log10().cbrt().plus(1);
        return eff;
    },
    unlocked() { return (hasUpgrade(this.layer, 12))},
    effectDisplay() { return format(tmp.BP.upgrades[13].effect)+"x" },
},



14: {
    title: "Oh boy! Here we go again!",
    description: "BP gain is booster by your BP.",
    cost: new Decimal(300),
    effect() {
        let eff = player.points.plus(2).log10().cbrt().plus(2);
        return eff;
    },
    unlocked() { return (hasUpgrade(this.layer, 13))},
    effectDisplay() { return format(tmp.BP.upgrades[14].effect)+"x" },
},

15: {
    title: "NT-Boost V2",
    description: "AP boost their own generation... again ._.",
    cost: new Decimal(6e3),
    unlocked() { return (hasUpgrade(this.layer, 14))},
    effect() { 
        let eff = player.points.plus(1).log10().pow(2.2).plus(1);
        return eff;
        
    },
    effectDisplay() { return format(tmp.BP.upgrades[15].effect)+"x" },
},

21: {
    title: "NT-Boost V3",
    description: "AP boost their own generation bc i said like that!",
    cost: new Decimal(1e7),
    unlocked() { return (hasUpgrade(this.layer, 15))},
    effect() { 
        let eff = player.points.plus(1).log10().pow(2.4).plus(1);
        return eff;
        
    },
    effectDisplay() { return format(tmp.BP.upgrades[21].effect)+"x" },

    },

    22: {
        title: "NT-Boost V4",
        description: "AP generation is boosted for like 4th time!?",
        cost: new Decimal(4e7),
        unlocked() { return (hasUpgrade(this.layer, 21))},
        effect() { 
            let eff = player.points.plus(1).log10().pow(2.6).plus(1);
            return eff;
            
        },
        effectDisplay() { return format(tmp.BP.upgrades[22].effect)+"x" },
    
        },

        23: {
            title: "NT-Boost V5",
            description: "AP generation is boosted for last time... I hope",
            cost: new Decimal(4.57e13),
            unlocked() { return (hasUpgrade(this.layer, 22))},
            effect() { 
                let eff = player.points.plus(1).log10().pow(2.8).plus(1);
                return eff;
                
            },
            effectDisplay() { return format(tmp.BP.upgrades[23].effect)+"x" },
        
            },

            24: {
                title: "NT-Boost V6",
                description: "AP generation is boosted for LAST TIME!!!",
                cost: new Decimal(4.57e19),
                unlocked() { return (hasUpgrade(this.layer, 23))},
                effect() { 
                    let eff = player.points.plus(1).log10().pow(3).plus(1);
                    return eff;
                    
                },
                effectDisplay() { return format(tmp.BP.upgrades[24].effect)+"x" },
            
                },

                
            25: {
                title: "NT-Boost V.WEAK",
                description: "AP generation is boosted for LAST TIME!!!",
                cost: new Decimal(1e28),
                unlocked() { return (hasUpgrade(this.layer, 24))},
                effect() { 
                    let eff = player.points.plus(1).log10().pow(1.5).plus(1);
                    return eff;
                    
                },
                effectDisplay() { return format(tmp.BP.upgrades[25].effect)+"x" },
            
                },

                31: {
                    title: "NT-Boost V.WEAK.V2",
                    description: "AP generation is boosted for LAST TIME!!! I promise...",
                    cost: new Decimal(3e41),
                    unlocked() { return (hasUpgrade(this.layer, 25))},
                    effect() { 
                        let eff = player.points.plus(1).log10().pow(1.75).plus(1);
                        return eff;
                        
                    },
                    effectDisplay() { return format(tmp.BP.upgrades[31].effect)+"x" },
                
                    },

                    32: {
                        title: "Da Booster or idk",
                        description: "Each BP Upgrade makes AP gain better by 12 :)",
                        cost: new Decimal(15),
                        effect(){
                                let base = 12
                
                                let exp = player.BP.upgrades.length
                                
                                return Decimal.pow(base, exp)
                        },
                        effectDisplay(){
                                return format(tmp.BP.upgrades[32].effect)
                        },
                        unlocked(){
                                return hasUpgrade("BP", 11)
                        },
                },

                33: {
                    title: "KrizNT has been blessed you!!!",
                    description: "Each BP Upgrade makes AP gain better by 10 :o",
                    cost: new Decimal(1.5e10),
                    effect(){
                            let base = 10
            
                            let exp = player.BP.upgrades.length
                            
                            return Decimal.pow(base, exp)
                    },
                    effectDisplay(){
                            return format(tmp.BP.upgrades[33].effect)
                    },
                    unlocked(){
                            return hasUpgrade("BP", 21)
                    },

                },

                    34: {
                        title: "The God Of AP and BP...",
                        description: "Each BP Upgrade makes AP gain better by 14",
                        cost: new Decimal(2e24),
                        effect(){
                                let base = 14
                
                                let exp = player.BP.upgrades.length
                                
                                return Decimal.pow(base, exp)
                        },
                        effectDisplay(){
                                return format(tmp.BP.upgrades[34].effect)
                        },
                        unlocked(){
                                return hasUpgrade("BP", 24)
                        },
    

},

35: {
    title: "Reversed",
    description: "Each BP Upgrade makes AP gain better by 100",
    cost: new Decimal(1e29),
    effect(){
            let base = 100

            let exp = player.BP.upgrades.length
            
            return Decimal.pow(base, exp)
    },
    effectDisplay(){
            return format(tmp.BP.upgrades[35].effect)
    },
    unlocked(){
            return hasUpgrade("BP", 34)
    },

    


},

    },
        milestones: {
            0: {
                title: "Conversion",
                requirementDescription: "Conversion",
                effectDescription: "Get your 1st BP!",
                done() { return player.BP.points.gte(1) }
            },

            1: {
                title: "Richest Person Alive!",
                requirementDescription: "Richest Person Alive!",
                effectDescription: "Get to e20 BP! Also did i mention about softcap? || Reward: Gain 10K% BP/s",
                done() { return player.BP.points.gte(1e20) }
            },

            2: {
                title: "Pressurized",
                requirementDescription: "Pressurized",
                effectDescription: "Get to e27 BP! Isn't that tough aint it?",
                done() { return player.BP.points.gte(1e27) }
            },

            3: {
                title: "Someone is trespassing!",
                requirementDescription: "Softcap Breaker",
                effectDescription: "Get to e50 BP! You managed to bypass .2 expo softcap ._.",
                done() { return player.BP.points.gte(1e50) }
            }
        },
    
     
    color: "#beff3d",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "BP", // Name of prestige currency
    baseResource: "AP", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.81, // Prestige currency exponent
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    branches: ["SP"],
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("SP", {
    name: "SP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},  
    canBuyMax() { return hasMilestone('IP', 0) },
    resetsNothing() { return hasMilestone("SP", 0)&&player.BP.current!="SP" },

    effect() {
        let count = player.SP.points
        let mult = new Decimal(1)

        return [Decimal.pow(1.00001, count)]
    },
    effectDescription() {
        eff = this.effect();
        return `which are boosting AP by x${format(eff[0])}<br>`
    },
    
    autoPrestige() { return (hasMilestone("SP", 1) && player.SP.auto) },

    upgrades: {
        rows: 5,
        cols: 10,
        11: {
				title: "Expo Raiser",
				description: "BP gain is raised to the power of 1.3.",
				cost: new Decimal(1),
		
},

12: {
    title: "Anti-Reversed",
    description: "Each SP Upgrade makes AP gain better by 1K",
    cost: new Decimal(3),
    effect(){
            let base = 1000

            let exp = player.SP.upgrades.length
            
            return Decimal.pow(base, exp)
    },
    effectDisplay(){
            return format(tmp.SP.upgrades[12].effect)
    },
    unlocked(){
            return hasUpgrade("SP", 11)
    },
    },

    13: {
        title: "10K!",
        description: "Each SP Upgrade makes AP gain better by 10K",
        cost: new Decimal(9),
        effect(){
                let base = 10000
    
                let exp = player.SP.upgrades.length
                
                return Decimal.pow(base, exp)
        },
        effectDisplay(){
                return format(tmp.SP.upgrades[13].effect)
        },
        unlocked(){
                return hasUpgrade("SP", 12)
        },
        },

        14: {
            title: "Softcap Destroyer",
            description: "Each SP Upgrade makes AP gain better by 1B",
            cost: new Decimal(25),
            effect(){
                    let base = 1e9
        
                    let exp = player.SP.upgrades.length
                    
                    return Decimal.pow(base, exp)
            },
            effectDisplay(){
                    return format(tmp.SP.upgrades[14].effect)
            },
            unlocked(){
                    return hasUpgrade("SP", 13)
            },
            },

            15: {
                title: "Fast",
                description: "AP generation is faster based on unspent SP.",
                cost: new Decimal(50),
                unlocked() { return hasUpgrade("SP", 14)
            },
                effect() {
                    let ret = player[this.layer].points.add(1).pow(12/5)
                    return ret;
                },
                effectDisplay() { return format(this.effect())+"x" },
            },

            21: {
                title: "Hold on i forgot to nerf this",
                description: "Gain more AP based on SP.",
                cost: new Decimal(50),
                unlocked() { return hasUpgrade("SP", 14)
            },
                effect() {
                    let ret = player.points.add(1).pow(hasUpgrade('BP', 31)?1/5:1/7.5)
                    if (hasUpgrade('SP', 22)) ret = ret.pow(1.25)
                    return ret;
                },
                effectDisplay() { return format(this.effect())+"x" },
            },

            22: {
                title: "For 2nd IP!",
                description: "Gain more AP based on SP.",
                cost: new Decimal(150),
                unlocked() { return hasUpgrade("SP", 21)
            },
                effect() {
                    let ret = player.points.add(1).pow(hasUpgrade('BP', 31)?3/5:3/7.5)
                    if (hasUpgrade('SP', 22)) ret = ret.pow(1.25)
                    return ret;
                },
                effectDisplay() { return format(this.effect())+"x" },
            },
},


    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("SP", 0) && resettingLayer=="SP") keep.push("milestones")
        if (layers[resettingLayer].row > this.row) layerDataReset("BP", keep)
    },

    milestones: {
        0: {
            title: "Keep them ALL!",
            requirementDescription: "3 SP",
            effectDescription: "SP layer is now from VOLT -> NON-VOLT",
            done() { return player.SP.points.gte(3) }
        },
    

},

        color: "#f22f21",
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "SP", // Name of prestige currency
    baseResource: "AP", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 4.002, // Prestige currency exponent
    gainMult() {
        return new Decimal(1)  // Calculate the multiplier for main currency from bonuses
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "b: Reset for SP", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.BP.unlocked},
}),

addLayer("IP", {
    name: "IP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "IP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ["SP"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    resetsNothing() { return hasMilestone("IP", 0)&&player.SP.current!="IP" },
    resetsNothing() { return hasMilestone("IP", 0)&&player.BP.current!="IP" },

    milestones: {
        0: {
            title: "Bulk",
            requirementDescription: "1 IP",
            effectDescription: "You can bulk buy SP and IP is non-volatible layer",
            done() { return player.IP.points.gte(1) }
        },
    },
    color: "#ED9526",
    requires: new Decimal(400), // Can be a function that takes requirement increases into account
    resource: "IP", // Name of prestige currency
    baseResource: "SP", // Name of resource prestige is based on
    baseAmount() {return player.SP.points},
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.1, // Prestige currency exponent
    gainMult() {
        return new Decimal(1) // Calculate the multiplier for main currency from bonuses
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "c: Reset for Inf-P", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.SP.unlocked}
}),

addLayer("a", {
    startData() { return {
        unlocked: true,
    }},
    color: "yellow",
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievements: {
        rows: 10,
        cols: 4,
        11: {
            name: "AP I",
            done() { return player.points.gt(100) },
            tooltip: "Get to 100 AP!",
        },
        12: {
            name: "AP II",
            done() { return player.points.gte(1e7) },
            tooltip: "Get to 1e7 AP",
        },

        13: {
            name: "AP III",
            done() { return player.points.gt(1e15) },
            tooltip: "Get to 1e15 AP!",
        },
        14: {
            name: "AP IV",
            done() { return player.points.gte(1e30) },
            tooltip: "Get to 1e30 AP",
        },

        21: {
            name: "BP I",
            done() { return player.BP.points.gt(1000) },
            tooltip: "Get to 1000 BP!",
        },
        22: {
            name: "BP II",
            done() { return player.BP.points.gte(1e9) },
            tooltip: "Get to 1e9 BP",
        },

        23: {
            name: "BP III",
            done() { return player.BP.points.gt(1e22) },
            tooltip: "Get to 1e22 BP!",
        },
        24: {
            name: "BP IV",
            done() { return player.BP.points.gte(1e60) },
            tooltip: "Get to 1e60 BP",
        },

        31: {
            name: "Chain Linking",
            done() { return player.BP.upgrades.length>=2 },
            tooltip: "Purchase 2 BP Upgrades || Reward: Gain 45x more BP.",
        },

        32: {
            name: "Rope?",
            done() { return player.BP.upgrades.length>=6 },
            tooltip: "Purchase 6 BP Upgrades || Reward: Gain 90x more BP.",
        },

        33: {
            name: "So close...",
            done() { return player.BP.upgrades.length>=12 },
            tooltip: "Purchase 10 BP Upgrades || Reward: Gain 180x more BP",
        },

        34: {
            name: "Maxed Out!",
            done() { return player.BP.upgrades.length>=15 },
            tooltip: "Purchase 15 BP Upgrades || Reward: Gain 360x more BP",
        },
        41: {
            name: "SP I",
            done() { return player.SP.points.gte(1) },
            tooltip: "Get to 1 SP",
        },
        42: {
            name: "SP II",
            done() { return player.SP.points.gte(10) },
            tooltip: "Get to 10 SP",
        },
        43: {
            name: "SP III",
            done() { return player.SP.points.gte(45) },
            tooltip: "Get to 45 SP",
        },
        44: {
            name: "SP IV",
            done() { return player.SP.points.gte(400) },
            tooltip: "Get to 400 SP || Reward: New Layer!",
        },





    },
    tabFormat: [
        "blank", 
        ["display-text", function() { return "Achievements: "+player.a.achievements.length+"/"+(Object.keys(tmp.a.achievements).length-2) }], 
        "blank", "blank",
        "achievements",
    ],

    },	
 
)