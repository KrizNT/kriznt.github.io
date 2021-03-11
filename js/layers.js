addLayer("BP", {
    name: "BP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},

    upgrades: {
        rows: 5,
        cols: 5,
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
                return new Decimal(2);
        },
        },

        12: {
            title: "NT 1.1x",
            description: "Upgrade your Security",
            cost: 4,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(4);
        },
        },

        13: {
            title: "NT 1.26x",
            description: "Upgrade your CPU and RAM strenght",
            cost: 23,
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

        14: {
            title: "NT 1.5.9x",
            description: "Upgrade your Screen DPI and Resolution",
            cost: 80,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(16);
        },
        },

        15: {
            title: "NT 1.91x",
            description: "Upgrade your Hardware size and resistance",
            cost: 200,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(32);
        },
        },
        21: {
            title: "NT 2.x",
            description: "Upgrade your Database into DTB V2",
            cost: 500,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(64);
        },
        },

        22: {
            title: "NT 2.1x",
            description: "Upgrade your Security to V2",
            cost: 1.5e3,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(128);
        },
        },

        23: {
            title: "NT 2.26x",
            description: "Upgrade your CPU and RAM strength and exchange into better ones",
            cost: 2.3e3,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(256);
        },
        },

        24: {
            title: "NT 2.5.9x",
            description: "Upgrade your Screen DPI and Resolution and increase color pallete form 16 to 256",
            cost: 8e3,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(512);
        },
        },

        25: {
            title: "NT 2.91x",
            description: "Upgrade your Hardware size and resistance into V2",
            cost: 2e4,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(1e3);
        },
        },

        31: {
            title: "NT 3.x",
            description: "Upgrade your Database into DTB V3",
            cost: 5e5,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(2e3);
        },
        },

        32: {
            title: "NT 3.1x",
            description: "Upgrade your Security to V3",
            cost: 1.5e6,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(4e3);
        },
        },

        33: {
            title: "NT 3.26x",
            description: "Upgrade your CPU and RAM strength and exchange into better ones",
            cost: 2.3e6,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(8e3);
        },
        },

        34: {
            title: "NT 3.5.9x",
            description: "Upgrade your Screen DPI and Resolution and increase color pallete form 256 to 1028",
            cost: 8e6,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(1.6e4);
        },
        },

        35: {
            title: "NT 3.91x",
            description: "Upgrade your Hardware size and resistance into V3",
            cost: 1.6e7,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(3.2e4);
        },
        },

        41: {
            title: "NT 4.x",
            description: "Upgrade your Database into DTB V4 and increase TPS",
            cost: 3.2e7,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(6.4e4);
        },
        },

        42: {
            title: "NT 4.1x",
            description: "Upgrade your Security to V4 ",
            cost: 6.4e7,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(1.28e5);
        },
        },

        43: {
            title: "NT 4.26x",
            description: "Upgrade your CPU and RAM strength and exchange into RTX support",
            cost: 1.28e8,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(2.56e5);
        },
        },

        44: {
            title: "NT 4.5.9x",
            description: "Upgrade your Screen DPI and Resolution and make color pallete powered by CPU",
            cost: 2.56e8,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(5.12e5);
        },
        },

        45: {
            title: "NT 4.91x",
            description: "Upgrade your Hardware size and resistance into V4",
            cost: 5.12e8,
            effectDisplay() {
                return "AP +" + upgradeEffect(this.layer, this.id);
            },
            onPurchase() {
                player.generating = false;
            },
            effect() {
                return new Decimal(1e6);
        },
        },
    },    

    infoboxes:{
        coolInfo: {
            title: "Lore",
            titleStyle: {'color': '#FE0000'},
            body: "DEEP LORE!",
            bodyStyle: {'background-color': "#0000EE"}

        }
    },

    tabFormat: [
        "main-display",
        ["prestige-button", function() { return "Melt your points into " }],
        "blank",
        ["display-text",
            function() { return 'You Have ' + format(player.points) + ' AP!' },
            { "color": "#c9ff5e", "font-size": "25px", "font-family": "Monospace" }],
        "blank", 
        ["toggle", ["c", "beep"]],
        "milestones",
        "blank",
        "blank",
        "upgrades"
    ],
        
    color: "#beff3d",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "BP", // Name of prestige currency
    baseResource: "AP", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.4, // Prestige currency exponent
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
