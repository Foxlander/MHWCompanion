/**
 * Icon mapping for materials, weapons, and armor
 * Converts icon filenames to actual asset paths
 */

const IconMapping = {
    // Material/Component images
    components: {
        "QualityBone.png": "WhiteBone.webp",
        "CarbaliteOre.png": "PurpleOre.webp",
        "MachaliteOre.png": "FadedBlueOre.webp",
        "DragoniteOre.png": "TealOre.webp",
        "FuciumOre.png": "FadedPinkOre.webp",
        "DragonveinCrystal.png": "DarkOrangeOre.webp",
        "MonsterBoneSmall.png": "YellowBone.webp",
        "MonsterBoneMedium.png": "YellowBone.webp",
        "MonsterBoneLarge.png": "YellowBone.webp",
        "AncientBone.png": "FadedGreenBone.webp",
        "MonsterKeenbone.png": "FadedPinkBone.webp",
        "MonsterHardbone.png": "DarkRedBone.webp",
        "BoulderBone.png": "YellowBone.webp",
        "WingdrakeHide.png": "WhiteWing.webp",

        "AquaSac.png": "FadedBlueSac.webp",
        "BirdWyvernGem.png": "FadedGreenGem.webp",
        "BlackSpiralHorn.png": "BlackBone.webp",
        "BlosMedulla.png": "DarkOrangeBone.webp",
        "CoralCrystal.png": "TealOre.webp",
        "EarthCrystal.png": "WhiteOre.webp",
        "ElderDragonBlood.png": "DarkRedPotion.webp",
        "ElderDragonBone.png": "VioletBone.webp",
        "Electrode.png": "FadedBlueBone.webp",
        "ElectroSac.png": "YellowSac.webp",
        "FertileMud.png": "FadedOrangeMud.webp",
        "FirecellStone.png": "DarkOrangeOre.webp",
        "FireDragonScale.png": "DarkRedScale.webp",
        "FlameSac.png": "DarkRedSac.webp",
        "GajauScale.png": "YellowPelt.webp",
        "ImmortalDragonscale.png": "GreyScale.webp",
        "InfernoSac.png": "DarkRedSac.webp",
        "MajesticHorn.png": "DarkOrangeClaw.webp",
        "Novacrystal.png": "WhiteOre.webp",
        "PiercingClaw.png": "GreyClaw.webp",
        "PoisonSac.png": "VioletSac.webp",
        "SharpClaw.png": "WhiteClaw.webp",
        "ThunderSac.png": "YellowSac.webp",
        "ToxinSac.png": "FadedGreenSac.webp",
        "TwistedHorn.png": "FadedPinkClaw.webp",
        "WarmPelt.png": "FadedGreenPelt.webp",
        "WyvernGem.png": "FadedBlueGem.webp",

        // Great Jagras
        "GreatJagrasClaw.png": "YellowClaw.webp",
        "GreatJagrasHide.png": "YellowPelt.webp",
        "GreatJagrasMane.png": "YellowPart.webp",
        "GreatJagrasScale.png": "YellowScale.webp",

        // Barroth
        "BarrothCarapace.png": "DarkOrangeShell.webp",
        "BarrothClaw.png": "DarkOrangeClaw.webp",
        "BarrothRidge.png": "DarkOrangePart.webp",
        "BarrothShell.png": "DarkOrangeShell.webp",

        // Tobi Kadachi
        "TobiKadachiClaw.png": "BlueClaw.webp",
        "TobiKadachiElectrode.png": "BluePart.webp",
        "TobiKadachiMembrane.png": "BlueWing.webp",
        "TobiKadachiPelt.png": "BluePelt.webp",
        "TobiKadachiScale.png": "BlueScale.webp",

        // Black Diablos
        "BlackDiablosCarapace.png": "BlackShell.webp",
        "BlackDiablosRidge.png": "BlackPart.webp",

        // Kulu Ya Ku
        "KuluYaKuBeak.png": "DarkYellowHead.webp",
        "KuluYaKuHide.png": "DarkYellowPelt.webp",
        "KuluYaKuPlume.png": "DarkYellowPart.webp",
        "KuluYaKuScale.png": "DarkYellowScale.webp",

        // Jyuratodus
        "JyuratodusCarapace.png": "DarkYellowHead.webp",
        "JyuratodusFang.png": "DarkYellowPelt.webp",
        "JyuratodusFin.png": "DarkYellowPart.webp",
        "JyuratodusScale.png": "DarkYellowScale.webp",
        "JyuratodusShell.png": "LightOrangeShell.webp",

        // Pukei Pukei
        "PukeiPukeiCarapace.png": "LightTealShell.webp",
        "PukeiPukeiQuill.png": "LightTealWing.webp",
        "PukeiPukeiSac.png": "LightTealSac.webp",
        "PukeiPukeiScale.png": "LightTealScale.webp",
        "PukeiPukeiTail.png": "LightTealTail.webp",
        "PukeiPukeiWing.png": "LightTealWing.webp",

        // Anjanath
        "AnjanathFang.png": "FadedPinkClaw.webp",
        "AnjanathNoseBone.png": "FadedPinkBone.webp",
        "AnjanathPelt.png": "FadedPinkPelt.webp",
        "AnjanathScale.png": "FadedPinkScale.webp",
        "AnjanathTail.png": "FadedPinkTail.webp",

        // Diablos
        "DiablosCarapace.png": "LightOrangeShell.webp",
        "DiablosFang.png": "LightOrangeClaw.webp",
        "DiablosRidge.png": "LightOrangePart.webp",
        "DiablosShell.png": "LightOrangeShell.webp",

        // Kushala Daora
        "DaoraCarapace.png": "FadedPurpleShell.webp",
        "DaoraClaw.png": "FadedPurpleClaw.webp",
        "DaoraDragonScale.png": "FadedPurpleScale.webp",
        "DaoraDragonGem.png": "FadedPurpleGem.webp",
        "DaoraDragonHorn.png": "FadedPurpleClaw.webp",
        "DaoraDragonTail.png": "FadedPurpleTail.webp",
        "DaoraDragonWebbing.png": "FadedPurpleWebbing.webp",

        // Teostra
        "TeostraCarapace.png": "FadedPinkShell.webp",
        "TeostraClaw.png": "FadedPinkClaw.webp",
        "TeostraGem.png": "FadedPinkGem.webp",
        "TeostraHorn.png": "FadedPinkClaw.webp",
        "TeostraMane.png": "FadedPinkPart.webp",
        "TeostraPowder.png": "FadedPinkSac.webp",

        // Rathalos
        "RathalosCarapace.png": "DarkRedShell.webp",
        "RathalosScale.png": "DarkRedScale.webp",
        "RathalosShell.png": "DarkRedShell.webp",
        "RathalosTail.png": "DarkRedTail.webp",
        "RathalosWebbing.png": "DarkRedWebbing.webp",
        "RathalosWing.png": "DarkRedWing.webp",
        "RathalosWingtalon.png": "DarkRedClaw.webp",
        "RathalosMarrow.png": "DarkRedBone.webp",
        "RathalosMedulla.png": "DarkRedBone.webp",
        "RathalosPlate.png": "DarkRedGem.webp",

        // Azure Rathalos
        "AzureRathCarapace.png": "BlueShell.webp",
        "AzureRathScale.png": "BlueScale.webp",
        "AzureRathTail.png": "BlueTail.webp",
        "AzureRathWing.png": "BlueWing.webp",
        "AzureRathMarrow.png": "BlueBone.webp",
        "AzureRathPlate.png": "BlueGem.webp",

        // Nergigante
        "NergigantCarapace.png": "GreyShell.webp",
        "NergigantHorn.png": "GreyClaw.webp",
        "NergigantTail.png": "GreyTail.webp",
        "NergigantTalon.png": "GreyClaw.webp",
        "NergigantRegrowthPlate.png": "GreyGem.webp",
        "NergigantGem.png": "GreyGem.webp"
    },

    // Armor images by slot and rarity
    armor: {
        head: {
            1: "HelmetRarity1.webp",
            2: "HelmetRarity2.webp",
            3: "HelmetRarity3.webp",
            4: "HelmetRarity4.webp",
            5: "HelmetRarity5.webp"
        },
        chest: {
            1: "ChestRarity1.webp",
            2: "ChestRarity2.webp",
            3: "ChestRarity3.webp",
            4: "ChestRarity4.webp",
            5: "ChestRarity5.webp"
        },
        legs: {
            1: "LegRarity1.webp",
            2: "LegRarity2.webp",
            3: "LegRarity3.webp",
            4: "LegRarity4.webp",
            5: "LegRarity5.webp"
        }
    },

    // Weapon images by type and rarity
    weapons: {
        "Grande Épée": {
            1: "GreatSwordRarity1.webp",
            2: "GreatSwordRarity2.webp",
            3: "GreatSwordRarity3.webp",
            4: "GreatSwordRarity4.webp",
            5: "GreatSwordRarity5.webp"
        },
        "Marteau": {
            1: "HammerRarity1.webp",
            2: "HammerRarity2.webp",
            3: "HammerRarity3.webp",
            4: "HammerRarity4.webp",
            5: "HammerRarity5.webp"
        }
    },

    /**
     * Get the material icon path
     * @param {string} iconFilename - Icon filename from gameData (e.g., "CarbaliteOre.png")
     * @returns {string} Full path to the icon asset
     */
    getMaterialIcon(iconFilename) {
        const mappedFile = this.components[iconFilename];
        if (mappedFile) {
            return `assets/components/${mappedFile}`;
        }
        // Fallback to default icon if mapping not found
        console.warn(`Icon mapping not found for: ${iconFilename}`);
        return 'assets/icon.png';
    },

    /**
     * Get the armor icon path
     * @param {string} slot - Armor slot (head, chest, legs)
     * @param {number} defense - Defense value to determine rarity
     * @returns {string} Full path to the armor asset
     */
    getArmorIcon(slot, defense) {
        // Determine rarity based on defense value
        let rarity = 1;
        if (defense >= 4) rarity = 5;
        else if (defense >= 3) rarity = 4;
        else if (defense >= 2) rarity = 3;
        else if (defense >= 1) rarity = 2;

        if (this.armor[slot] && this.armor[slot][rarity]) {
            return `assets/armor/${this.armor[slot][rarity]}`;
        }

        console.warn(`Armor icon not found for slot: ${slot}, rarity: ${rarity}`);
        return 'assets/icon.png';
    },

    /**
     * Get the weapon icon path
     * @param {string} type - Weapon type (e.g., "Grande Épée")
     * @param {number} attack - Attack value to determine rarity
     * @returns {string} Full path to the weapon asset
     */
    getWeaponIcon(type, attack) {
        // Determine rarity based on attack value
        let rarity = 1;
        if (attack >= 20) rarity = 5;
        else if (attack >= 15) rarity = 4;
        else if (attack >= 10) rarity = 3;
        else if (attack >= 5) rarity = 2;

        if (this.weapons[type] && this.weapons[type][rarity]) {
            const weaponFolder = type === 'Grande Épée' ? 'greatSword' : 'hammer';
            return `assets/weapons/${weaponFolder}/${this.weapons[type][rarity]}`;
        }

        console.warn(`Weapon icon not found for type: ${type}, rarity: ${rarity}`);
        return 'assets/icon.png';
    }
};
