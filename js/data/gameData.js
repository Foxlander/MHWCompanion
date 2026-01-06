/**
 * Game Data
 * Static game data (weapons, armor, items, skills, materials)
 * Contains example data - will be replaced with actual game data in Phase 6
 */

const GameData = {
    // Example weapons
    weapons: [
        {
            id: 'weapon-iron-sword',
            name: 'Épée de fer',
            type: 'Grande Épée',
            attack: 15,
            affinity: 0,
            element: null,
            skills: [],
            recipe: [
                { materialId: 'mat-ore-iron', quantity: 5 },
                { materialId: 'mat-bone', quantity: 3 }
            ]
        },
        {
            id: 'weapon-bone-blade',
            name: 'Lame d\'os',
            type: 'Grande Épée',
            attack: 12,
            affinity: 10,
            element: null,
            skills: [],
            recipe: [
                { materialId: 'mat-bone', quantity: 8 },
                { materialId: 'mat-claw', quantity: 2 }
            ]
        },
        {
            id: 'weapon-fire-sword',
            name: 'Épée de feu',
            type: 'Grande Épée',
            attack: 14,
            affinity: 0,
            element: { type: 'fire', value: 20 },
            skills: [],
            recipe: [
                { materialId: 'mat-ore-iron', quantity: 4 },
                { materialId: 'mat-scale', quantity: 5 },
                { materialId: 'mat-plate', quantity: 1 }
            ]
        },
        {
            id: 'weapon-iron-bow',
            name: 'Arc de fer',
            type: 'Arc',
            attack: 10,
            affinity: 0,
            element: null,
            skills: [],
            recipe: [
                { materialId: 'mat-ore-iron', quantity: 3 },
                { materialId: 'mat-bone', quantity: 2 }
            ]
        },
        {
            id: 'weapon-hunter-bow',
            name: 'Arc de chasseur',
            type: 'Arc',
            attack: 12,
            affinity: 5,
            element: null,
            skills: [],
            recipe: [
                { materialId: 'mat-bone', quantity: 5 },
                { materialId: 'mat-scale', quantity: 3 },
                { materialId: 'mat-claw', quantity: 2 }
            ]
        }
    ],

    // Example armor pieces
    armor: [
        // Head armor
        {
            id: 'armor-leather-helm',
            name: 'Casque de cuir',
            slot: 'head',
            defense: 5,
            skills: [
                { id: 'skill-attack', name: 'Attaque', level: 1, maxLevel: 7 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 2 },
                { materialId: 'mat-herb', quantity: 3 }
            ]
        },
        {
            id: 'armor-bone-helm',
            name: 'Casque d\'os',
            slot: 'head',
            defense: 7,
            skills: [
                { id: 'skill-defense', name: 'Défense', level: 1, maxLevel: 7 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 4 },
                { materialId: 'mat-carapace', quantity: 1 }
            ]
        },
        // Chest armor
        {
            id: 'armor-leather-mail',
            name: 'Armure de cuir',
            slot: 'chest',
            defense: 10,
            health: 10,
            skills: [
                { id: 'skill-health', name: 'Santé', level: 1, maxLevel: 3 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 3 },
                { materialId: 'mat-scale', quantity: 2 }
            ]
        },
        {
            id: 'armor-bone-mail',
            name: 'Armure d\'os',
            slot: 'chest',
            defense: 12,
            skills: [
                { id: 'skill-defense', name: 'Défense', level: 2, maxLevel: 7 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 6 },
                { materialId: 'mat-carapace', quantity: 2 },
                { materialId: 'mat-scale', quantity: 3 }
            ]
        },
        // Arms armor
        {
            id: 'armor-leather-vambraces',
            name: 'Brassards de cuir',
            slot: 'arms',
            defense: 5,
            skills: [
                { id: 'skill-attack', name: 'Attaque', level: 1, maxLevel: 7 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 2 },
                { materialId: 'mat-claw', quantity: 1 }
            ]
        },
        {
            id: 'armor-bone-vambraces',
            name: 'Brassards d\'os',
            slot: 'arms',
            defense: 6,
            skills: [
                { id: 'skill-sharpness', name: 'Affûtage', level: 1, maxLevel: 5 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 3 },
                { materialId: 'mat-claw', quantity: 2 },
                { materialId: 'mat-scale', quantity: 1 }
            ]
        },
        // Waist armor
        {
            id: 'armor-leather-belt',
            name: 'Ceinture de cuir',
            slot: 'waist',
            defense: 4,
            skills: [
                { id: 'skill-stamina', name: 'Endurance', level: 1, maxLevel: 3 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 2 }
            ]
        },
        {
            id: 'armor-bone-belt',
            name: 'Ceinture d\'os',
            slot: 'waist',
            defense: 5,
            stamina: 10,
            skills: [
                { id: 'skill-stamina', name: 'Endurance', level: 2, maxLevel: 3 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 4 },
                { materialId: 'mat-scale', quantity: 2 }
            ]
        },
        // Legs armor
        {
            id: 'armor-leather-greaves',
            name: 'Jambières de cuir',
            slot: 'legs',
            defense: 6,
            skills: [
                { id: 'skill-evade', name: 'Esquive', level: 1, maxLevel: 5 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 3 },
                { materialId: 'mat-herb', quantity: 2 }
            ]
        },
        {
            id: 'armor-bone-greaves',
            name: 'Jambières d\'os',
            slot: 'legs',
            defense: 7,
            skills: [
                { id: 'skill-defense', name: 'Défense', level: 1, maxLevel: 7 }
            ],
            recipe: [
                { materialId: 'mat-bone', quantity: 5 },
                { materialId: 'mat-carapace', quantity: 1 },
                { materialId: 'mat-scale', quantity: 2 }
            ]
        }
    ],

    // Example charms
    charms: [
        {
            id: 'charm-attack',
            name: 'Charme d\'attaque',
            skills: [
                { id: 'skill-attack', name: 'Attaque', level: 2, maxLevel: 7 }
            ]
        },
        {
            id: 'charm-defense',
            name: 'Charme de défense',
            skills: [
                { id: 'skill-defense', name: 'Défense', level: 2, maxLevel: 7 }
            ]
        },
        {
            id: 'charm-health',
            name: 'Charme de santé',
            skills: [
                { id: 'skill-health', name: 'Santé', level: 2, maxLevel: 3 }
            ]
        }
    ],

    // Example consumable items
    items: [
        {
            id: 'item-potion',
            name: 'Potion',
            category: 'consumable',
            description: 'Restaure une petite quantité de PV',
            effect: { type: 'heal', value: 50 }
        },
        {
            id: 'item-mega-potion',
            name: 'Méga potion',
            category: 'consumable',
            description: 'Restaure une grande quantité de PV',
            effect: { type: 'heal', value: 100 }
        },
        {
            id: 'item-ration',
            name: 'Ration',
            category: 'consumable',
            description: 'Restaure l\'endurance',
            effect: { type: 'stamina', value: 50 }
        },
        {
            id: 'item-demondrug',
            name: 'Drogue démoniaque',
            category: 'consumable',
            description: 'Augmente l\'attaque temporairement',
            effect: { type: 'buff', stat: 'attack', value: 5, duration: 180 }
        },
        {
            id: 'item-armorskin',
            name: 'Peau blindée',
            category: 'consumable',
            description: 'Augmente la défense temporairement',
            effect: { type: 'buff', stat: 'defense', value: 10, duration: 180 }
        },
        {
            id: 'item-whetstone',
            name: 'Pierre à aiguiser',
            category: 'tool',
            description: 'Affûte l\'arme',
            effect: { type: 'sharpen' }
        },
        {
            id: 'item-trap',
            name: 'Piège à choc',
            category: 'tool',
            description: 'Piège électrique pour immobiliser',
            effect: { type: 'trap', duration: 10 }
        },
        {
            id: 'item-bomb',
            name: 'Bombe tonneau',
            category: 'tool',
            description: 'Inflige des dégâts explosifs',
            effect: { type: 'damage', value: 150 }
        }
    ],

    // Materials from MHW Board Game
    materials: [
        // Common Materials - Ores, Bones, Hides
        { id: 'mat-carbalite-ore', name: 'Carbalite Ore', rarity: 2, category: 'Common', icon: 'CarbaliteOre.png' },
        { id: 'mat-machalite-ore', name: 'Malachite Ore', rarity: 2, category: 'Common', icon: 'MachaliteOre.png' },
        { id: 'mat-dragonite-ore', name: 'Dragonite Ore', rarity: 3, category: 'Common', icon: 'DragoniteOre.png' },
        { id: 'mat-fucium-ore', name: 'Fucium Ore', rarity: 3, category: 'Common', icon: 'FuciumOre.png' },
        { id: 'mat-dragonvein-crystal', name: 'Dragonvein Crystal', rarity: 4, category: 'Common', icon: 'DragonveinCrystal.png' },
        { id: 'mat-bone-small', name: 'Monster Bone Small', rarity: 1, category: 'Common', icon: 'MonsterBoneSmall.png' },
        { id: 'mat-bone-medium', name: 'Monster Bone Medium', rarity: 2, category: 'Common', icon: 'MonsterBoneMedium.png' },
        { id: 'mat-bone-large', name: 'Monster Bone Large', rarity: 3, category: 'Common', icon: 'MonsterBoneLarge.png' },
        { id: 'mat-ancient-bone', name: 'Ancient Bone', rarity: 3, category: 'Common', icon: 'AncientBone.png' },
        { id: 'mat-quality-bone', name: 'Quality Bone', rarity: 4, category: 'Common', icon: 'QualityBone.png' },
        { id: 'mat-keenbone', name: 'Monster Keenbone', rarity: 4, category: 'Common', icon: 'MonsterKeenbone.png' },
        { id: 'mat-hardbone', name: 'Monster Hardbone', rarity: 5, category: 'Common', icon: 'MonsterHardbone.png' },
        { id: 'mat-boulder-bone', name: 'Boulder Bone', rarity: 5, category: 'Common', icon: 'BoulderBone.png' },
        { id: 'mat-wingdrake-hide', name: 'Wingdrake Hide', rarity: 1, category: 'Common', icon: 'WingdrakeHide.png' },

        // Great Jagras
        { id: 'mat-jagras-claw', name: 'Great Jagras Claw', rarity: 2, category: 'Great Jagras', icon: 'GreatJagrasClaw.png' },
        { id: 'mat-jagras-hide', name: 'Great Jagras Hide', rarity: 2, category: 'Great Jagras', icon: 'GreatJagrasHide.png' },
        { id: 'mat-jagras-mane', name: 'Great Jagras Mane', rarity: 2, category: 'Great Jagras', icon: 'GreatJagrasMane.png' },
        { id: 'mat-jagras-scale', name: 'Great Jagras Scale', rarity: 2, category: 'Great Jagras', icon: 'GreatJagrasScale.png' },

        // Barroth
        { id: 'mat-barroth-carapace', name: 'Barroth Carapace', rarity: 3, category: 'Barroth', icon: 'BarrothCarapace.png' },
        { id: 'mat-barroth-claw', name: 'Barroth Claw', rarity: 3, category: 'Barroth', icon: 'BarrothClaw.png' },
        { id: 'mat-barroth-ridge', name: 'Barroth Ridge', rarity: 3, category: 'Barroth', icon: 'BarrothRidge.png' },
        { id: 'mat-barroth-shell', name: 'Barroth Shell', rarity: 3, category: 'Barroth', icon: 'BarrothShell.png' },

        // Anjanath
        { id: 'mat-anjanath-fang', name: 'Anjanath Fang', rarity: 3, category: 'Anjanath', icon: 'AnjanathFang.png' },
        { id: 'mat-anjanath-nosebone', name: 'Anjanath NoseBone', rarity: 3, category: 'Anjanath', icon: 'AnjanathNoseBone.png' },
        { id: 'mat-anjanath-pelt', name: 'Anjanath Pelt', rarity: 3, category: 'Anjanath', icon: 'AnjanathPelt.png' },
        { id: 'mat-anjanath-scale', name: 'Anjanath Scale', rarity: 3, category: 'Anjanath', icon: 'AnjanathScale.png' },
        { id: 'mat-anjanath-tail', name: 'Anjanath Tail', rarity: 3, category: 'Anjanath', icon: 'AnjanathTail.png' },

        // Jyuratodus
        { id: 'mat-jyuratodus-carapace', name: 'Jyuratodus Carapace', rarity: 3, category: 'Jyuratodus', icon: 'JyuratodusCarapace.png' },
        { id: 'mat-jyuratodus-fang', name: 'Jyuratodus Fang', rarity: 3, category: 'Jyuratodus', icon: 'JyuratodusFang.png' },
        { id: 'mat-jyuratodus-fin', name: 'Jyuratodus Fin', rarity: 3, category: 'Jyuratodus', icon: 'JyuratodusFin.png' },
        { id: 'mat-jyuratodus-scale', name: 'Jyuratodus Scale', rarity: 3, category: 'Jyuratodus', icon: 'JyuratodusScale.png' },
        { id: 'mat-jyuratodus-shell', name: 'Jyuratodus Shell', rarity: 3, category: 'Jyuratodus', icon: 'JyuratodusShell.png' },

        // Tobi Kadachi
        { id: 'mat-tobi-claw', name: 'Tobi Kadachi Claw', rarity: 3, category: 'Tobi Kadachi', icon: 'TobiKadachiClaw.png' },
        { id: 'mat-tobi-electrode', name: 'Tobi Kadachi Electrode', rarity: 3, category: 'Tobi Kadachi', icon: 'TobiKadachiElectrode.png' },
        { id: 'mat-tobi-membrane', name: 'Tobi Kadachi Membrane', rarity: 3, category: 'Tobi Kadachi', icon: 'TobiKadachiMembrane.png' },
        { id: 'mat-tobi-pelt', name: 'Tobi Kadachi Pelt', rarity: 3, category: 'Tobi Kadachi', icon: 'TobiKadachiPelt.png' },
        { id: 'mat-tobi-scale', name: 'Tobi Kadachi Scale', rarity: 3, category: 'Tobi Kadachi', icon: 'TobiKadachiScale.png' },

        // Pukei Pukei
        { id: 'mat-pukei-carapace', name: 'Pukei Pukei Carapace', rarity: 3, category: 'Pukei Pukei', icon: 'PukeiPukeiCarapace.png' },
        { id: 'mat-pukei-quill', name: 'Pukei Pukei Quill', rarity: 3, category: 'Pukei Pukei', icon: 'PukeiPukeiQuill.png' },
        { id: 'mat-pukei-sac', name: 'Pukei Pukei Sac', rarity: 3, category: 'Pukei Pukei', icon: 'PukeiPukeiSac.png' },
        { id: 'mat-pukei-scale', name: 'Pukei Pukei Scale', rarity: 3, category: 'Pukei Pukei', icon: 'PukeiPukeiScale.png' },
        { id: 'mat-pukei-tail', name: 'Pukei Pukei Tail', rarity: 3, category: 'Pukei Pukei', icon: 'PukeiPukeiTail.png' },
        { id: 'mat-pukei-wing', name: 'Pukei Pukei Wing', rarity: 3, category: 'Pukei Pukei', icon: 'PukeiPukeiWing.png' },

        // Kulu Ya Ku
        { id: 'mat-kulu-beak', name: 'Kulu Ya Ku Beak', rarity: 2, category: 'Kulu Ya Ku', icon: 'KuluYaKuBeak.png' },
        { id: 'mat-kulu-hide', name: 'Kulu Ya Ku Hide', rarity: 2, category: 'Kulu Ya Ku', icon: 'KuluYaKuHide.png' },
        { id: 'mat-kulu-plume', name: 'Kulu Ya Ku Plume', rarity: 2, category: 'Kulu Ya Ku', icon: 'KuluYaKuPlume.png' },
        { id: 'mat-kulu-scale', name: 'Kulu Ya Ku Scale', rarity: 2, category: 'Kulu Ya Ku', icon: 'KuluYaKuScale.png' },

        // Diablos
        { id: 'mat-diablos-carapace', name: 'Diablos Carapace', rarity: 4, category: 'Diablos', icon: 'DiablosCarapace.png' },
        { id: 'mat-diablos-fang', name: 'Diablos Fang', rarity: 4, category: 'Diablos', icon: 'DiablosFang.png' },
        { id: 'mat-diablos-ridge', name: 'Diablos Ridge', rarity: 4, category: 'Diablos', icon: 'DiablosRidge.png' },
        { id: 'mat-diablos-shell', name: 'Diablos Shell', rarity: 4, category: 'Diablos', icon: 'DiablosShell.png' },

        // Rathalos
        { id: 'mat-rathalos-carapace', name: 'Rathalos Carapace', rarity: 4, category: 'Rathalos', icon: 'RathalosCarapace.png' },
        { id: 'mat-rathalos-marrow', name: 'Rathalos Marrow', rarity: 4, category: 'Rathalos', icon: 'RathalosMarrow.png' },
        { id: 'mat-rathalos-medulla', name: 'Rathalos Medulla', rarity: 5, category: 'Rathalos', icon: 'RathalosMedulla.png' },
        { id: 'mat-rathalos-plate', name: 'Rathalos Plate', rarity: 5, category: 'Rathalos', icon: 'RathalosPlate.png' },
        { id: 'mat-rathalos-scale', name: 'Rathalos Scale', rarity: 4, category: 'Rathalos', icon: 'RathalosScale.png' },
        { id: 'mat-rathalos-shell', name: 'Rathalos Shell', rarity: 4, category: 'Rathalos', icon: 'RathalosShell.png' },
        { id: 'mat-rathalos-tail', name: 'Rathalos Tail', rarity: 4, category: 'Rathalos', icon: 'RathalosTail.png' },
        { id: 'mat-rathalos-webbing', name: 'Rathalos Webbing', rarity: 4, category: 'Rathalos', icon: 'RathalosWebbing.png' },
        { id: 'mat-rathalos-wing', name: 'Rathalos Wing', rarity: 4, category: 'Rathalos', icon: 'RathalosWing.png' },
        { id: 'mat-rathalos-wingtalon', name: 'Rathalos Wingtalon', rarity: 4, category: 'Rathalos', icon: 'RathalosWingtalon.png' },

        // Black Diablos
        { id: 'mat-black-diablos-carapace', name: 'Black Diablos Carapace', rarity: 5, category: 'Black Diablos', icon: 'BlackDiablosCarapace.png' },
        { id: 'mat-black-diablos-ridge', name: 'Black Diablos Ridge', rarity: 5, category: 'Black Diablos', icon: 'BlackDiablosRidge.png' },

        // Azure Rathalos
        { id: 'mat-azure-carapace', name: 'Azure Rath Carapace', rarity: 5, category: 'Azure Rathalos', icon: 'AzureRathCarapace.png' },
        { id: 'mat-azure-marrow', name: 'Azure Rath Marrow', rarity: 5, category: 'Azure Rathalos', icon: 'AzureRathMarrow.png' },
        { id: 'mat-azure-plate', name: 'Azure Rath Plate', rarity: 5, category: 'Azure Rathalos', icon: 'AzureRathPlate.png' },
        { id: 'mat-azure-scale', name: 'Azure Rath Scale', rarity: 5, category: 'Azure Rathalos', icon: 'AzureRathScale.png' },
        { id: 'mat-azure-tail', name: 'Azure Rath Tail', rarity: 5, category: 'Azure Rathalos', icon: 'AzureRathTail.png' },
        { id: 'mat-azure-wing', name: 'Azure Rath Wing', rarity: 5, category: 'Azure Rathalos', icon: 'AzureRathWing.png' },

        // Teostra
        { id: 'mat-teostra-carapace', name: 'Teostra Carapace', rarity: 5, category: 'Teostra', icon: 'TeostraCarapace.png' },
        { id: 'mat-teostra-claw', name: 'Teostra Claw', rarity: 5, category: 'Teostra', icon: 'TeostraClaw.png' },
        { id: 'mat-teostra-gem', name: 'Teostra Gem', rarity: 5, category: 'Teostra', icon: 'TeostraGem.png' },
        { id: 'mat-teostra-horn', name: 'Teostra Horn', rarity: 5, category: 'Teostra', icon: 'TeostraHorn.png' },
        { id: 'mat-teostra-mane', name: 'Teostra Mane', rarity: 5, category: 'Teostra', icon: 'TeostraMane.png' },
        { id: 'mat-teostra-powder', name: 'Teostra Powder', rarity: 5, category: 'Teostra', icon: 'TeostraPowder.png' },

        // Kushala Daora
        { id: 'mat-daora-carapace', name: 'Daora Carapace', rarity: 5, category: 'Kushala Daora', icon: 'DaoraCarapace.png' },
        { id: 'mat-daora-claw', name: 'Daora Claw', rarity: 5, category: 'Kushala Daora', icon: 'DaoraClaw.png' },
        { id: 'mat-daora-dragon-scale', name: 'Daora Dragon Scale', rarity: 5, category: 'Kushala Daora', icon: 'DaoraDragonScale.png' },
        { id: 'mat-daora-gem', name: 'Daora Gem', rarity: 5, category: 'Kushala Daora', icon: 'DaoraGem.png' },
        { id: 'mat-daora-horn', name: 'Daora Horn', rarity: 5, category: 'Kushala Daora', icon: 'DaoraHorn.png' },
        { id: 'mat-daora-tail', name: 'Daora Tail', rarity: 5, category: 'Kushala Daora', icon: 'DaoraTail.png' },
        { id: 'mat-daora-webbing', name: 'Daora Webbing', rarity: 5, category: 'Kushala Daora', icon: 'DaoraWebbing.png' },

        // Nergigante
        { id: 'mat-nergigante-carapace', name: 'Nergigante Carapace', rarity: 5, category: 'Nergigante', icon: 'NergiganteCarapace.png' },
        { id: 'mat-nergigante-gem', name: 'Nergigante Gem', rarity: 5, category: 'Nergigante', icon: 'NergiganteGem.png' },
        { id: 'mat-nergigante-horn', name: 'Nergigante Horn', rarity: 5, category: 'Nergigante', icon: 'NergiganteHorn.png' },
        { id: 'mat-nergigante-regrowth', name: 'Nergigante Regrowth Plate', rarity: 5, category: 'Nergigante', icon: 'NergiganteRegrowthPlate.png' },
        { id: 'mat-nergigante-tail', name: 'Nergigante Tail', rarity: 5, category: 'Nergigante', icon: 'NergiganteTail.png' },
        { id: 'mat-nergigante-talon', name: 'Nergigante Talon', rarity: 5, category: 'Nergigante', icon: 'NergiganteTalon.png'
        }
    ],

    /**
     * Initialize game data into state
     */
    init() {
        const gameData = State.getGameData();

        // Only initialize if game data is empty
        if (gameData.weapons.length === 0) {
            State.update('gameData', {
                weapons: this.weapons,
                armor: this.armor,
                charms: this.charms,
                items: this.items,
                materials: this.materials,
                skills: this.skills
            });

            console.log('Game data initialized with example data');
        }

        this.initialized = true;
    },

    /**
     * Get weapon by ID
     * @param {string} id - Weapon ID
     * @returns {Object|null} Weapon object
     */
    getWeapon(id) {
        return this.weapons.find(w => w.id === id) || null;
    },

    /**
     * Get armor piece by ID
     * @param {string} id - Armor ID
     * @returns {Object|null} Armor object
     */
    getArmor(id) {
        return this.armor.find(a => a.id === id) || null;
    },

    /**
     * Get charm by ID
     * @param {string} id - Charm ID
     * @returns {Object|null} Charm object
     */
    getCharm(id) {
        return this.charms.find(c => c.id === id) || null;
    },

    /**
     * Get item by ID
     * @param {string} id - Item ID
     * @returns {Object|null} Item object
     */
    getItem(id) {
        return this.items.find(i => i.id === id) || null;
    },

    /**
     * Get material by ID
     * @param {string} id - Material ID
     * @returns {Object|null} Material object
     */
    getMaterial(id) {
        return this.materials.find(m => m.id === id) || null;
    },

    /**
     * Get skill by ID
     * @param {string} id - Skill ID
     * @returns {Object|null} Skill object
     */
    getSkill(id) {
        return this.skills.find(s => s.id === id) || null;
    },

    /**
     * Get weapons by type
     * @param {string} type - Weapon type
     * @returns {Array} Array of weapons
     */
    getWeaponsByType(type) {
        return this.weapons.filter(w => w.type === type);
    },

    /**
     * Get armor pieces by slot
     * @param {string} slot - Armor slot
     * @returns {Array} Array of armor pieces
     */
    getArmorBySlot(slot) {
        return this.armor.filter(a => a.slot === slot);
    }
};
