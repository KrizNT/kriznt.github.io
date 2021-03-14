addLayer("BP", {
    name: "BP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    softcap: new Decimal(1e20), 
    softcapPower: new Decimal(0.7), 
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade(this.layer, 11)) mult = mult.times(2) // These upgrades don't exist
        if (hasUpgrade(this.layer, 21)) mult = mult.times(upgradeEffect(this.layer, 21))
        if (hasUpgrade(this.layer, 31)) mult = mult.times(upgradeEffect(this.layer, 31))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
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
        rows: 10,
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
        title: "NT 0.2x Booster",
        description: "AP/s Booster",
        cost: new Decimal(10),
        unlocked() { return (hasUpgrade(this.layer, 11))},
        effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
            let ret = player[this.layer].points.add(0.2).pow(player[this.layer].upgrades.includes(11)?0.2:(player[this.layer].upgrades.includes(11)?0.2:0.2)) 
            if (ret.gte("4")) ret = ret.sqrt().times("0.5")
            return ret;
        },
        effectDisplay() { return format(this.effect())+"x" },
    },

    13: {
        title: "NT 0.2x Booster V2",
        description: "AP/s Booster V2",
        cost: new Decimal(10),
        unlocked() { return (hasUpgrade(this.layer, 12))},
        effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
            let ret = player[this.layer].points.add(0.2).pow(player[this.layer].upgrades.includes(11)?0.2:(player[this.layer].upgrades.includes(11)?0.2:0.2)) 
            if (ret.gte("4")) ret = ret.sqrt().times("0.5")
            return ret;
        },
        effectDisplay() { return format(this.effect())+"x" },
    },

    14: {
        title: "NT 0.2x Booster V3",
        description: "AP/s Booster V3",
        cost: new Decimal(100),
        unlocked() { return (hasUpgrade(this.layer, 13))},
        effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
            let ret = player[this.layer].points.add(0.2).pow(player[this.layer].upgrades.includes(11)?0.2:(player[this.layer].upgrades.includes(11)?0.2:0.2)) 
            if (ret.gte("4")) ret = ret.sqrt().times("0.5")
            return ret;
        },
        effectDisplay() { return format(this.effect())+"x" },
    },

    15: {
        title: "NT 0.2x Booster V4",
        description: "AP/s Booster V4",
        cost: new Decimal(1e3),
        unlocked() { return (hasUpgrade(this.layer, 14))},
        effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
            let ret = player[this.layer].points.add(0.2).pow(player[this.layer].upgrades.includes(11)?0.2:(player[this.layer].upgrades.includes(11)?0.2:0.2)) 
            if (ret.gte("4")) ret = ret.sqrt().times("0.5")
            return ret;
        },
        effectDisplay() { return format(this.effect())+"x" },
    },

    21: {
        title: "NT 2.x",
        description: "Upgrade your Database to V5",
        cost: 2e3,
        unlocked() { return (hasUpgrade(this.layer, 15))},
        effectDisplay() {
            return "AP +" + upgradeEffect(this.layer, this.id);
        },
        onPurchase() {
            player.generating = false;
        },
        effect() {
            return new Decimal(50);

    },
},

22: {
    title: "NT 0.24x Booster",
    description: "AP/s Booster V6",
    cost: new Decimal(4e3),
    unlocked() { return (hasUpgrade(this.layer, 21))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.24).pow(player[this.layer].upgrades.includes(11)?0.24:(player[this.layer].upgrades.includes(11)?0.24:0.24)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

23: {
    title: "NT 0.24x Booster V2",
    description: "AP/s Booster V7",
    cost: new Decimal(8e3),
    unlocked() { return (hasUpgrade(this.layer, 22))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.24).pow(player[this.layer].upgrades.includes(11)?0.24:(player[this.layer].upgrades.includes(11)?0.24:0.24)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

24: {
    title: "NT 0.24x Booster V3",
    description: "AP/s Booster V8",
    cost: new Decimal(2e4),
    unlocked() { return (hasUpgrade(this.layer, 23))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.24).pow(player[this.layer].upgrades.includes(11)?0.24:(player[this.layer].upgrades.includes(11)?0.24:0.24)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

25: {
    title: "NT 0.24x Booster V4",
    description: "AP/s Booster V9",
    cost: new Decimal(4e4),
    unlocked() { return (hasUpgrade(this.layer, 24))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.24).pow(player[this.layer].upgrades.includes(11)?0.24:(player[this.layer].upgrades.includes(11)?0.24:0.24)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

31: {
    title: "NT 0.28x Booster V1",
    description: "AP/s Booster V10",
    cost: new Decimal(8e4),
    unlocked() { return (hasUpgrade(this.layer, 25))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.28).pow(player[this.layer].upgrades.includes(11)?0.28:(player[this.layer].upgrades.includes(11)?0.28:0.28)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

32: {
    title: "NT 0.28x Booster V2",
    description: "AP/s Booster V11",
    cost: new Decimal(2e5),
    unlocked() { return (hasUpgrade(this.layer, 31))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.28).pow(player[this.layer].upgrades.includes(11)?0.28:(player[this.layer].upgrades.includes(11)?0.28:0.28)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

33: {
    title: "NT 0.28x Booster V3",
    description: "AP/s Booster V12",
    cost: new Decimal(2e6),
    unlocked() { return (hasUpgrade(this.layer, 32))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.28).pow(player[this.layer].upgrades.includes(11)?0.28:(player[this.layer].upgrades.includes(11)?0.28:0.28)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

34: {
    title: "NT 0.28x Booster V4",
    description: "AP/s Booster V13",
    cost: new Decimal(2e7),
    unlocked() { return (hasUpgrade(this.layer, 33))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.28).pow(player[this.layer].upgrades.includes(11)?0.28:(player[this.layer].upgrades.includes(11)?0.28:0.28)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},

35: {
    title: "NT 0.28x Booster V5",
    description: "AP/s Booster V14",
    cost: new Decimal(2e8),
    unlocked() { return (hasUpgrade(this.layer, 34))},
    effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
        let ret = player[this.layer].points.add(0.28).pow(player[this.layer].upgrades.includes(11)?0.28:(player[this.layer].upgrades.includes(11)?0.28:0.28)) 
        if (ret.gte("4")) ret = ret.sqrt().times("0.5")
        return ret;
    },
    effectDisplay() { return format(this.effect())+"x" },
},
    },
    

        milestones: {
            0: {
                title: "Conversion",
                requirementDescription: "Conversion",
                effectDescription: "Get your 1st BP!",
                done() { return player.BP.points.gte(1) }
            }
        },
    
     
    color: "#beff3d",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "BP", // Name of prestige currency
    baseResource: "AP", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
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