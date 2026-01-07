/**
 * Game Data
 * Static game data (weapons, armor, items, skills, materials)
 * Contains example data - will be replaced with actual game data in Phase 6
 */

const GameData = {
    // Real MHW weapons from equipementsData.js
    weapons: [
    {
        "id": "weapon-grande-pe-buster-sword",
        "name": "Buster Sword",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 1,
        "family": "os",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-medium",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-buster-blade",
        "name": "Buster Blade",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 2,
        "family": "os",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-dragonite-ore",
                "quantity": 1
            },
            {
                "materialId": "mat-machalite-ore",
                "quantity": 1
            },
            {
                "materialId": "mat-bone-medium",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-chrome-razor",
        "name": "Chrome Razor",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "os",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-fucium-ore",
                "quantity": 2
            },
            {
                "materialId": "mat-carbalite-ore",
                "quantity": 2
            },
            {
                "materialId": "mat-dragonite-ore",
                "quantity": 3
            },
            {
                "materialId": "mat-dragonvein-crystal",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-grande-pe-bone-blade",
        "name": "Bone Blade",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 2,
        "family": "Peaux",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-small",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-bone-slasher",
        "name": "Bone Slasher",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 2,
        "family": "Peaux",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-small",
                "quantity": 1
            },
            {
                "materialId": "mat-bone-small",
                "quantity": 1
            },
            {
                "materialId": "mat-boulder-bone",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-giant-jawblade",
        "name": "Giant Jawblade",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Peaux",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-hardbone",
                "quantity": 2
            },
            {
                "materialId": "mat-keenbone",
                "quantity": 2
            },
            {
                "materialId": "mat-quality-bone",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-grande-pe-jagras-blade",
        "name": "Jagras Blade",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Great Jagras",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-jagras-claw",
                "quantity": 2
            },
            {
                "materialId": "mat-jagras-hide",
                "quantity": 1
            },
            {
                "materialId": "mat-jagras-scale",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-sharp-claw",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-jagras-hacker",
        "name": "Jagras Hacker",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Great Jagras",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-jagras-scale",
                "quantity": 2
            },
            {
                "materialId": "mat-jagras-claw",
                "quantity": 2
            },
            {
                "materialId": "mat-jagras-mane",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-piercing-claw",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-carapace-buster",
        "name": "Carapace Buster",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Barroth",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-barroth-claw",
                "quantity": 1
            },
            {
                "materialId": "mat-barroth-shell",
                "quantity": 3
            },
            {
                "materialId": "mat-barroth-ridge",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-grande-pe-barroth-shredder",
        "name": "Barroth Shredder",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Barroth",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-barroth-claw",
                "quantity": 2
            },
            {
                "materialId": "mat-barroth-carapace",
                "quantity": 3
            },
            {
                "materialId": "mat-barroth-ridge",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-grande-pe-blooming-blade",
        "name": "Blooming Blade",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Pukei-Pukei",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-pukei-quill",
                "quantity": 2
            },
            {
                "materialId": "mat-pukei-scale",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-poison-sac",
                "quantity": 1
            },
            {
                "materialId": "mat-pukei-tail",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-datura-blaze",
        "name": "Datura Blaze",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Pukei-Pukei",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-pukei-scale",
                "quantity": 2
            },
            {
                "materialId": "mat-pukei-wing",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-toxin-sac",
                "quantity": 2
            },
            {
                "materialId": "mat-quality-bone",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-grande-pe-flame-blade",
        "name": "Flame Blade",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Ratalos",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-rathalos-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-rathalos-webbing",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-inferno-sac",
                "quantity": 3
            },
            {
                "materialId": "mat-rathalos-marrow",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-grande-pe-red-wing",
        "name": "Red Wing",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Ratalos",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-rathalos-scale",
                "quantity": 2
            },
            {
                "materialId": "mat-rathalos-carapace",
                "quantity": 1
            },
            {
                "materialId": "mat-unknown-inferno-wing",
                "quantity": 1
            },
            {
                "materialId": "mat-rathalos-marrow",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-icesteel-edge",
        "name": "Icesteel Edge",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Kushala daora",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-daora-claw",
                "quantity": 1
            },
            {
                "materialId": "mat-daora-webbing",
                "quantity": 2
            },
            {
                "materialId": "mat-nergigante-carapace",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-grande-pe-daora-s-decimator",
        "name": "Daora's Decimator",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Kushala daora",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-daora-horn",
                "quantity": 4
            },
            {
                "materialId": "mat-daora-claw",
                "quantity": 3
            },
            {
                "materialId": "mat-daora-gem",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-nergal-judicator",
        "name": "Nergal Judicator",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Nergigante",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-nergigante-talon",
                "quantity": 1
            },
            {
                "materialId": "mat-nergigante-regrowth",
                "quantity": 1
            },
            {
                "materialId": "mat-nergigante-tail",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-grande-pe-purgation-s-atrocity",
        "name": "Purgation's Atrocity",
        "type": "Grande Épée",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Nergigante",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-nergigante-horn",
                "quantity": 4
            },
            {
                "materialId": "mat-nergigante-talon",
                "quantity": 3
            },
            {
                "materialId": "mat-nergigante-gem",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-iron-hammer",
        "name": "Iron Hammer",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 1,
        "family": "Mineral",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-carbalite-ore",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-marteau-iron-demon",
        "name": "Iron Demon",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 2,
        "family": "Mineral",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-dragonite-ore",
                "quantity": 2
            },
            {
                "materialId": "mat-machalite-ore",
                "quantity": 5
            },
            {
                "materialId": "mat-bone-medium",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-iron-arch-demon",
        "name": "Iron Arch Demon",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Mineral",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-fucium-ore",
                "quantity": 8
            },
            {
                "materialId": "mat-dragonite-ore",
                "quantity": 5
            },
            {
                "materialId": "mat-carbalite-ore",
                "quantity": 10
            },
            {
                "materialId": "mat-dragonvein-crystal",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-marteau-bone-bludgeon",
        "name": "Bone Bludgeon",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 2,
        "family": "Bone",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-small",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-marteau-fossil-bludgeon",
        "name": "Fossil Bludgeon",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 2,
        "family": "Bone",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-large",
                "quantity": 1
            },
            {
                "materialId": "mat-bone-medium",
                "quantity": 5
            },
            {
                "materialId": "mat-boulder-bone",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-grand-rock",
        "name": "Grand Rock",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Bone",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-hardbone",
                "quantity": 4
            },
            {
                "materialId": "mat-keenbone",
                "quantity": 6
            },
            {
                "materialId": "mat-quality-bone",
                "quantity": 10
            }
        ]
    },
    {
        "id": "weapon-marteau-carapace-sledge",
        "name": "Carapace Sledge",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Barroth",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-barroth-claw",
                "quantity": 1
            },
            {
                "materialId": "mat-barroth-shell",
                "quantity": 2
            },
            {
                "materialId": "mat-barroth-ridge",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-barroth-breaker",
        "name": "Barroth Breaker",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Barroth",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-barroth-claw",
                "quantity": 2
            },
            {
                "materialId": "mat-barroth-carapace",
                "quantity": 3
            },
            {
                "materialId": "mat-barroth-ridge",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-kulu-beak",
        "name": "Kulu Beak",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Kulu Ya Ku",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-kulu-beak",
                "quantity": 1
            },
            {
                "materialId": "mat-kulu-hide",
                "quantity": 2
            },
            {
                "materialId": "mat-kulu-scale",
                "quantity": 4
            },
            {
                "materialId": "mat-unknown-earth-crystal",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-marteau-crushing-beak",
        "name": "Crushing Beak",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Kulu Ya Ku",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-kulu-beak",
                "quantity": 2
            },
            {
                "materialId": "mat-kulu-hide",
                "quantity": 3
            },
            {
                "materialId": "mat-kulu-plume",
                "quantity": 3
            },
            {
                "materialId": "mat-boulder-bone",
                "quantity": 4
            }
        ]
    },
    {
        "id": "weapon-marteau-blooming-hammer",
        "name": "Blooming Hammer",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Pukei Pukei",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-pukei-quill",
                "quantity": 2
            },
            {
                "materialId": "mat-pukei-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-unknown-poison-sac",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-marteau-buon-fiore",
        "name": "Buon Fiore",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Pukei Pukei",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-pukei-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-pukei-wing",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-toxin-sac",
                "quantity": 2
            },
            {
                "materialId": "mat-quality-bone",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-marteau-blazing-hammer",
        "name": "Blazing Hammer",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Anjanath",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-anjanath-fang",
                "quantity": 2
            },
            {
                "materialId": "mat-anjanath-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-unknown-flame-sac",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-marteau-anja-striker",
        "name": "Anja Striker",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Anjanath",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-anjanath-fang",
                "quantity": 4
            },
            {
                "materialId": "mat-anjanath-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-unknown-inferno-sac",
                "quantity": 3
            },
            {
                "materialId": "mat-anjanath-pelt",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-marteau-diablos-sledge",
        "name": "Diablos Sledge",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Diablos",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-unknown-twisted-horn",
                "quantity": 1
            },
            {
                "materialId": "mat-diablos-fang",
                "quantity": 2
            },
            {
                "materialId": "mat-diablos-shell",
                "quantity": 4
            },
            {
                "materialId": "mat-bone-medium",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-marteau-diabos-shatterer",
        "name": "Diabos Shatterer",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Diablos",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-unknown-majestic-horn",
                "quantity": 3
            },
            {
                "materialId": "mat-diablos-carapace",
                "quantity": 6
            },
            {
                "materialId": "mat-diablos-ridge",
                "quantity": 5
            },
            {
                "materialId": "mat-unknown-blos-medulla",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-marteau-icesteel-hammer",
        "name": "Icesteel Hammer",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Kushala Daora",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-daora-claw",
                "quantity": 3
            },
            {
                "materialId": "mat-daora-webbing",
                "quantity": 2
            },
            {
                "materialId": "mat-nergigante-carapace",
                "quantity": 3
            },
            {
                "materialId": "mat-daora-tail",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-daora-s-colossus",
        "name": "Daora's Colossus",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Kushala Daora",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-daora-horn",
                "quantity": 4
            },
            {
                "materialId": "mat-daora-claw",
                "quantity": 3
            },
            {
                "materialId": "mat-daora-gem",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-marteau-nergal-crusher",
        "name": "Nergal Crusher",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Nergigante",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-nergigante-talon",
                "quantity": 1
            },
            {
                "materialId": "mat-nergigante-regrowth",
                "quantity": 1
            },
            {
                "materialId": "mat-nergigante-tail",
                "quantity": 2
            },
            {
                "materialId": "mat-nergigante-carapace",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-marteau-obliteration-s-footfall",
        "name": "Obliteration's Footfall",
        "type": "Marteau",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Nergigante",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-nergigante-horn",
                "quantity": 4
            },
            {
                "materialId": "mat-nergigante-talon",
                "quantity": 3
            },
            {
                "materialId": "mat-nergigante-gem",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-pe-longue-bone-shotel",
        "name": "Bone Shotel",
        "type": "Épée Longue",
        "attack": 10,
        "damage": {
            "d1": 6,
            "d2": 4,
            "d3": 0,
            "d4": 0
        },
        "rarity": 1,
        "family": "Bone Shotel",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-small",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-pe-longue-bone-shotel",
        "name": "Bone Shotel",
        "type": "Épée Longue",
        "attack": 10,
        "damage": {
            "d1": 6,
            "d2": 4,
            "d3": 0,
            "d4": 0
        },
        "rarity": 1,
        "family": "Bone Shotel",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-bone-small",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-pe-longue-iron-katana",
        "name": "Iron Katana",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 9,
            "d2": 3,
            "d3": 0,
            "d4": 0
        },
        "rarity": 1,
        "family": "Iron",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-fucium-ore",
                "quantity": 8
            }
        ]
    },
    {
        "id": "weapon-pe-longue-first-dance",
        "name": "First Dance",
        "type": "Épée Longue",
        "attack": 14,
        "damage": {
            "d1": 6,
            "d2": 3,
            "d3": 5,
            "d4": 0
        },
        "rarity": 3,
        "family": "Kulu Ya Ku",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-kulu-beak",
                "quantity": 1
            },
            {
                "materialId": "mat-kulu-hide",
                "quantity": 2
            },
            {
                "materialId": "mat-kulu-scale",
                "quantity": 4
            },
            {
                "materialId": "mat-unknown-earth-crystal",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-pe-longue-last-dance",
        "name": "Last Dance",
        "type": "Épée Longue",
        "attack": 16,
        "damage": {
            "d1": 5,
            "d2": 7,
            "d3": 4,
            "d4": 0
        },
        "rarity": 4,
        "family": "Kulu Ya Ku",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-kulu-beak",
                "quantity": 2
            },
            {
                "materialId": "mat-kulu-hide",
                "quantity": 3
            },
            {
                "materialId": "mat-kulu-plume",
                "quantity": 3
            },
            {
                "materialId": "mat-boulder-bone",
                "quantity": 4
            }
        ]
    },
    {
        "id": "weapon-pe-longue-blooming-hammer",
        "name": "Blooming Hammer",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Pukei Pukei",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-pukei-quill",
                "quantity": 2
            },
            {
                "materialId": "mat-pukei-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-unknown-poison-sac",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-pe-longue-buon-fiore",
        "name": "Buon Fiore",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Pukei Pukei",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-pukei-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-pukei-wing",
                "quantity": 2
            },
            {
                "materialId": "mat-unknown-toxin-sac",
                "quantity": 2
            },
            {
                "materialId": "mat-quality-bone",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-pe-longue-blazing-hammer",
        "name": "Blazing Hammer",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 3,
        "family": "Anjanath",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-anjanath-fang",
                "quantity": 2
            },
            {
                "materialId": "mat-anjanath-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-unknown-flame-sac",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-pe-longue-anja-striker",
        "name": "Anja Striker",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Anjanath",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-anjanath-fang",
                "quantity": 4
            },
            {
                "materialId": "mat-anjanath-scale",
                "quantity": 3
            },
            {
                "materialId": "mat-unknown-inferno-sac",
                "quantity": 3
            },
            {
                "materialId": "mat-anjanath-pelt",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-pe-longue-diablos-sledge",
        "name": "Diablos Sledge",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 4,
        "family": "Diablos",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-unknown-twisted-horn",
                "quantity": 1
            },
            {
                "materialId": "mat-diablos-fang",
                "quantity": 2
            },
            {
                "materialId": "mat-diablos-shell",
                "quantity": 4
            },
            {
                "materialId": "mat-bone-medium",
                "quantity": 3
            }
        ]
    },
    {
        "id": "weapon-pe-longue-diabos-shatterer",
        "name": "Diabos Shatterer",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 1,
            "d4": 0
        },
        "rarity": 5,
        "family": "Diablos",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-unknown-majestic-horn",
                "quantity": 3
            },
            {
                "materialId": "mat-diablos-carapace",
                "quantity": 6
            },
            {
                "materialId": "mat-diablos-ridge",
                "quantity": 5
            },
            {
                "materialId": "mat-unknown-blos-medulla",
                "quantity": 1
            }
        ]
    },
    {
        "id": "weapon-pe-longue-nergal-reaver",
        "name": "Nergal Reaver",
        "type": "Épée Longue",
        "attack": 12,
        "damage": {
            "d1": 7,
            "d2": 3,
            "d3": 2,
            "d4": 0
        },
        "rarity": 5,
        "family": "Nergigante",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-nergigante-talon",
                "quantity": 1
            },
            {
                "materialId": "mat-nergigante-regrowth",
                "quantity": 1
            },
            {
                "materialId": "mat-nergigante-tail",
                "quantity": 2
            },
            {
                "materialId": "mat-nergigante-carapace",
                "quantity": 2
            }
        ]
    },
    {
        "id": "weapon-pe-longue-extermination-s-edge",
        "name": "Extermination's Edge",
        "type": "Épée Longue",
        "attack": 14,
        "damage": {
            "d1": 7,
            "d2": 4,
            "d3": 3,
            "d4": 0
        },
        "rarity": 5,
        "family": "Nergigante",
        "affinity": 0,
        "element": null,
        "skills": [],
        "recipe": [
            {
                "materialId": "mat-nergigante-horn",
                "quantity": 4
            },
            {
                "materialId": "mat-nergigante-talon",
                "quantity": 3
            },
            {
                "materialId": "mat-nergigante-gem",
                "quantity": 2
            }
        ]
    }
],

    // Real MHW armor from equipementsData.js
    armor: [
        {"id":"armor-leather-headgear","name":"Leather Headgear","slot":"head","defense":0,"recipe":[]},
        {"id":"armor-leather-mail","name":"Leather Mail","slot":"chest","defense":5,"recipe":[{"materialId":"mat-carbalite-ore","quantity":1}],"elementalDefense":{"element":"fire","value":10},"skills":[{"id":"skill-flame-boost","name":"flame boost","level":1,"maxLevel":3,"description":""}]},
        {"id":"armor-leather-trousers","name":"Leather Trousers","slot":"legs","defense":5,"recipe":[{"materialId":"mat-carbalite-ore","quantity":1}],"elementalDefense":{"element":"fire","value":10},"skills":[{"id":"skill-flame-boost","name":"flame boost","level":1,"maxLevel":3,"description":""}]},
        {"id":"armor-chainmail-headgear","name":"Chainmail Headgear","slot":"head","defense":0,"recipe":[]},
        {"id":"armor-chainmail-vest","name":"Chainmail Vest","slot":"chest","defense":5,"recipe":[],"elementalDefense":{"element":"fire","value":10},"skills":[{"id":"skill-flame-boost","name":"flame boost","level":1,"maxLevel":3,"description":""}]},
        {"id":"armor-chainmail-trousers","name":"Chainmail Trousers","slot":"chest","defense":5,"recipe":[],"elementalDefense":{"element":"fire","value":10},"skills":[{"id":"skill-flame-boost","name":"flame boost","level":1,"maxLevel":3,"description":""}]},
        {"id":"armor-alloy-helm","name":"Alloy Helm","slot":"head","defense":1,"recipe":[{"materialId":"mat-machalite-ore","quantity":2},{"materialId":"mat-carbalite-ore","quantity":1},{"materialId":"mat-dragonite-ore","quantity":1}]},
        {"id":"armor-alloy-mail","name":"Alloy Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-machalite-ore","quantity":1},{"materialId":"mat-carbalite-ore","quantity":2},{"materialId":"mat-dragonite-ore","quantity":1}]},
        {"id":"armor-alloy-greaves","name":"Alloy Greaves","slot":"legs","defense":0,"recipe":[{"materialId":"mat-machalite-ore","quantity":1},{"materialId":"mat-carbalite-ore","quantity":2},{"materialId":"mat-dragonite-ore","quantity":1}],"skills":[{"id":"skill-poison-resistance","name":"Poison Resistance","level":1,"maxLevel":3,"description":"You are immune to the poison status."}]},
        {"id":"armor-bone-helm","name":"Bone Helm","slot":"head","defense":1,"recipe":[{"materialId":"mat-bone-small","quantity":2},{"materialId":"mat-ancient-bone","quantity":2}]},
        {"id":"armor-bone-mail","name":"Bone Mail","slot":"chest","defense":0,"recipe":[{"materialId":"mat-bone-small","quantity":1},{"materialId":"mat-ancient-bone","quantity":1}],"skills":[{"id":"skill-slugger","name":"Slugger","level":1,"maxLevel":3,"description":"Once per quest, apply +1 stun token."}]},
        {"id":"armor-bone-greaves","name":"Bone Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-bone-small","quantity":1},{"materialId":"mat-ancient-bone","quantity":1}]},
        {"id":"armor-jagras-helm","name":"Jagras Helm","slot":"head","defense":1,"recipe":[{"materialId":"mat-jagras-hide","quantity":1},{"materialId":"mat-jagras-mane","quantity":1},{"materialId":"mat-jagras-claw","quantity":1},{"materialId":"mat-ancient-bone","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-speed-eating","name":"Speed Eating","level":1,"maxLevel":3,"description":"Once per quest, you may use combat actions and preparation actions during the same turn."}]},
        {"id":"armor-jagras-mail","name":"Jagras Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-jagras-hide","quantity":1},{"materialId":"mat-jagras-claw","quantity":1},{"materialId":"mat-jagras-scale","quantity":1},{"materialId":"mat-bone-small","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-palico-rally","name":"Palico Rally","level":1,"maxLevel":3,"description":"You may use your Palico ability twice per quest."}]},
        {"id":"armor-jagras-greaves","name":"Jagras Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-jagras-scale","quantity":1},{"materialId":"mat-jagras-hide","quantity":1},{"materialId":"mat-jagras-mane","quantity":1}],"elementalDefense":{"element":"water","value":1}},
        {"id":"armor-barroth-helm","name":"Barroth Helm","slot":"head","defense":1,"recipe":[{"materialId":"mat-barroth-ridge","quantity":1},{"materialId":"mat-barroth-claw","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-guard","name":"Guard","level":1,"maxLevel":3,"description":"Gain +1 armor when playing attacks that grant armor"}]},
        {"id":"armor-barroth-mail","name":"Barroth Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-barroth-carapace","quantity":1},{"materialId":"mat-barroth-ridge","quantity":2},{"materialId":"mat-barroth-claw","quantity":1},{"materialId":"mat-quality-bone","quantity":2}],"elementalDefense":{"element":"water","value":1}},
        {"id":"armor-barroth-greaves","name":"Barroth Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-barroth-ridge","quantity":1},{"materialId":"mat-barroth-carapace","quantity":2}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-stun-resistance","name":"Stun Resistance","level":1,"maxLevel":3,"description":" You're immune to the stun status ailment."}]},
        {"id":"armor-pukei-hood","name":"Pukei Hood","slot":"chest","defense":1,"recipe":[{"materialId":"mat-pukei-carapace","quantity":1},{"materialId":"mat-pukei-tail","quantity":1},{"materialId":"mat-pukei-wing","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-sporepuff-expert","name":"Sporepuff Expert","level":1,"maxLevel":3,"description":"When you recover health from anything that isn't a potion, recover 1 additional health."}]},
        {"id":"armor-pukei-mail","name":"Pukei Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-pukei-scale","quantity":2},{"materialId":"mat-pukei-carapace","quantity":1},{"materialId":"mat-carbalite-ore","quantity":3}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-poison-resistance","name":"Poison resistance","level":1,"maxLevel":3,"description":"You are immune to the poison status."}]},
        {"id":"armor-pukei-greaves","name":"Pukei Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-pukei-carapace","quantity":2},{"materialId":"mat-pukei-sac","quantity":2},{"materialId":"mat-pukei-scale","quantity":1},{"materialId":"mat-keenbone","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-botanist","name":"Botanist","level":1,"maxLevel":3,"description":"During the gathering phase, when the hunters gain a potion, they may all immediately recover to full health."}]},
        {"id":"armor-jyura-helm","name":"Jyura Helm","slot":"head","defense":1,"recipe":[{"materialId":"mat-jyuratodus-scale","quantity":1},{"materialId":"mat-jyuratodus-carapace","quantity":1},{"materialId":"mat-jyuratodus-fin","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-aquatic-expert","name":"Aquatic Expert","level":1,"maxLevel":3,"description":"Gain immunity to pond nodes."}]},
        {"id":"armor-jyura-mail","name":"Jyura Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-jyuratodus-scale","quantity":1},{"materialId":"mat-jyuratodus-fin","quantity":1},{"materialId":"mat-jyuratodus-fang","quantity":1}],"elementalDefense":{"element":"water","value":1},"skills":[{"id":"skill-water-attack","name":"Water Attack","level":1,"maxLevel":3,"description":"Draw +1 damage card on water attacks."}]},
        {"id":"armor-jyura-greaves","name":"Jyura Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-jyuratodus-carapace","quantity":1},{"materialId":"mat-jyuratodus-fang","quantity":1},{"materialId":"mat-jyuratodus-fin","quantity":1}],"elementalDefense":{"element":"water","value":2}},
        {"id":"armor-kadachi-helm","name":"Kadachi Helm","slot":"head","defense":0,"recipe":[{"materialId":"mat-tobi-pelt","quantity":1},{"materialId":"mat-tobi-claw","quantity":1}],"elementalDefense":{"element":"thunder","value":2},"skills":[{"id":"skill-constitution","name":"Constitution","level":1,"maxLevel":3,"description":"Once per quest, discard attack cards when dodging."}]},
        {"id":"armor-kadachi-mail","name":"Kadachi Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-tobi-pelt","quantity":1},{"materialId":"mat-tobi-electrode","quantity":1},{"materialId":"mat-tobi-membrane","quantity":2},{"materialId":"mat-wingdrake-hide","quantity":1}],"elementalDefense":{"element":"thunder","value":1},"skills":[{"id":"skill-evade-extender","name":"Evade Extender","level":1,"maxLevel":3,"description":"Move +1 when dodging"}]},
        {"id":"armor-kadachi-greaves","name":"Kadachi Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-tobi-scale","quantity":2},{"materialId":"mat-tobi-pelt","quantity":1}],"elementalDefense":{"element":"thunder","value":2},"skills":[{"id":"skill-thunder-attack","name":"Thunder Attack","level":1,"maxLevel":3,"description":"Draw +1 damage card on thunder attacks."}]},
        {"id":"armor-anja-helm","name":"Anja Helm","slot":"head","defense":1,"recipe":[{"materialId":"mat-anjanath-pelt","quantity":1},{"materialId":"mat-anjanath-scale","quantity":1},{"materialId":"mat-anjanath-tail","quantity":1}],"elementalDefense":{"element":"fire","value":1},"skills":[{"id":"skill-fire-attack","name":"Fire Attack","level":1,"maxLevel":3,"description":"Draw +1 damage card on fire attacks."}]},
        {"id":"armor-anja-mail","name":"Anja Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-anjanath-pelt","quantity":1},{"materialId":"mat-anjanath-fang","quantity":1},{"materialId":"mat-anjanath-nosebone","quantity":1}],"elementalDefense":{"element":"fire","value":1},"skills":[{"id":"skill-marathon-runner","name":"Marathon Runner","level":1,"maxLevel":3,"description":"Move 2 instead of 1 when walking."}]},
        {"id":"armor-anja-greaves","name":"Anja Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-anjanath-scale","quantity":1},{"materialId":"mat-anjanath-pelt","quantity":1},{"materialId":"mat-machalite-ore","quantity":2}],"elementalDefense":{"element":"fire","value":2}},
        {"id":"armor-rathalos-helm","name":"Rathalos Helm","slot":"head","defense":2,"recipe":[{"materialId":"mat-rathalos-scale","quantity":1},{"materialId":"mat-rathalos-shell","quantity":1},{"materialId":"mat-rathalos-marrow","quantity":1}],"elementalDefense":{"element":"fire","value":1},"skills":[{"id":"skill-set-bonus-rathalos-mastery","name":"Set Bonus: Rathalos Mastery","level":1,"maxLevel":3,"description":"When applying fire, draw an elemental damage card instead of placing a fire token"}]},
        {"id":"armor-rathalos-mail","name":"Rathalos Mail","slot":"chest","defense":1,"recipe":[{"materialId":"mat-rathalos-scale","quantity":1},{"materialId":"mat-rathalos-webbing","quantity":1},{"materialId":"mat-rathalos-plate","quantity":1}],"elementalDefense":{"element":"fire","value":1},"skills":[{"id":"skill-weakness-exploit","name":"Weakness Exploit","level":1,"maxLevel":3,"description":"Once per quest, you may swap your hunter token with another player, maintaining token facing."}]},
        {"id":"armor-rathalos-greaves","name":"Rathalos Greaves","slot":"legs","defense":1,"recipe":[{"materialId":"mat-rathalos-shell","quantity":1},{"materialId":"mat-rathalos-wingtalon","quantity":1},{"materialId":"mat-rathalos-tail","quantity":1}],"elementalDefense":{"element":"fire","value":1},"skills":[{"id":"skill-sleep-resistance","name":"Sleep Resistance","level":1,"maxLevel":3,"description":"You're immune to the sleep status."}]}
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
                materials: this.materials
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
