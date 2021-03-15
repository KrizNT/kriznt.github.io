addLayer("BP", {
    name: "BP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    softcap: new Decimal(1e20), 
    softcapPower: new Decimal(0.5), 
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("BP", 13)) mult = mult.times(2);
        if (hasUpgrade("BP", 32)) mult = mult.times(((Array.isArray(tmp.BP.mastered))?tmp.BP.mastered.includes(this.layer):false)?1e50:1.8);
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        if (hasUpgrade("BP", 14)) exp = exp.times(1.01);
        return exp;
    },
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
                player.generating = false;
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
        let eff = player.points.plus(1).log10().pow(5.75).plus(1);
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
    description: "BP expo is raised to the power from 0.71 to 1.01.",
    cost: new Decimal(300),
    unlocked() { return (hasUpgrade(this.layer, 13))},
},

15: {
    title: "NT-Boost V1 but x is / 10K weaker",
    description: "AP boost their own generation... again ._.",
    cost: new Decimal(1e5),
    unlocked() { return (hasUpgrade(this.layer, 14))},
    effect() { 
        let eff = player.points.plus(1).log10().pow(2.2).plus(1);
        return eff;
        
    },
    effectDisplay() { return format(tmp.BP.upgrades[15].effect)+"x" },
},

21: {
    title: "NT-Boost V1 but its more weaker D:",
    description: "AP boost their own generation bc i said like that!",
    cost: new Decimal(1e7),
    unlocked() { return (hasUpgrade(this.layer, 15))},
    effect() { 
        let eff = player.points.plus(1).log10().pow(1.1).plus(1);
        return eff;
        
    },
    effectDisplay() { return format(tmp.BP.upgrades[21].effect)+"x" },

    },

    22: {
        title: "NT-Boost V1 but its like 4th one... Also its buffed up...",
        description: "AP generation is boosted for like 4th time!?",
        cost: new Decimal(4e7),
        unlocked() { return (hasUpgrade(this.layer, 21))},
        effect() { 
            let eff = player.points.plus(1).log10().pow(3.5).plus(1);
            return eff;
            
        },
        effectDisplay() { return format(tmp.BP.upgrades[22].effect)+"x" },
    
        },

        23: {
            title: "NT-Boost V1 but its like NT-Boost V1...",
            description: "AP generation is boosted for last time... I hope",
            cost: new Decimal(4.57e13),
            unlocked() { return (hasUpgrade(this.layer, 22))},
            effect() { 
                let eff = player.points.plus(1).log10().pow(5.75).plus(1);
                return eff;
                
            },
            effectDisplay() { return format(tmp.BP.upgrades[23].effect)+"x" },
        
            },

            24: {
                title: "NT-Boost V1 but its 2x stronger?",
                description: "AP generation is boosted for LAST TIME!!!",
                cost: new Decimal(4.57e19),
                unlocked() { return (hasUpgrade(this.layer, 23))},
                effect() { 
                    let eff = player.points.plus(1).log10().pow(9.75).plus(1);
                    return eff;
                    
                },
                effectDisplay() { return format(tmp.BP.upgrades[24].effect)+"x" },
            
                },

                
            25: {
                title: "NT-Boost V1 but its 2x stronger... Again?",
                description: "AP generation is boosted for LAST TIME!!!",
                cost: new Decimal(1e28),
                unlocked() { return (hasUpgrade(this.layer, 24))},
                effect() { 
                    let eff = player.points.plus(1).log10().pow(15.75).plus(1);
                    return eff;
                    
                },
                effectDisplay() { return format(tmp.BP.upgrades[25].effect)+"x" },
            
                },

                31: {
                    title: "NT-Boost V1 but its 1.24x stronger... Again... AGAIN?????",
                    description: "AP generation is boosted for LAST TIME!!! I promise...",
                    cost: new Decimal(3e41),
                    unlocked() { return (hasUpgrade(this.layer, 25))},
                    effect() { 
                        let eff = player.points.plus(1).log10().pow(10.75).plus(1);
                        return eff;
                        
                    },
                    effectDisplay() { return format(tmp.BP.upgrades[31].effect)+"x" },
                
                    },

                    32: {
                        title: "More BP",
                        description() { return "BP gain is increased by "+(((Array.isArray(tmp.BP.mastered))?tmp.BP.mastered.includes(this.layer):false)?"1e52":"80")+"%." },
                        cost: new Decimal(1e5),
                        unlocked() { return (hasUpgrade(this.layer, 13))},
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
                effectDescription: "Get to e20 BP! Also did i mention about softcap?",
                done() { return player.BP.points.gte(1e20) }
            },

            2: {
                title: "Someone is trespassing!",
                requirementDescription: "Someone is trespassing in my BP property!",
                effectDescription: "Get to e50 BP! How you got past softcap power???",
                done() { return player.BP.points.gte(1e50) }
            }
        },
    
     
    color: "#beff3d",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "BP", // Name of prestige currency
    baseResource: "AP", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.71, // Prestige currency exponent
    gainMult() {
        return new Decimal(1) // Calculate the multiplier for main currency from bonuses
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("M", {
    name: "M", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},

    color: "#0362fc",
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "M", // Name of prestige currency
    baseResource: "BP", // Name of resource prestige is based on
    baseAmount() {return player.BP.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.1, // Prestige currency exponent
    gainMult() {
        return new Decimal(1) // Calculate the multiplier for main currency from bonuses
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})