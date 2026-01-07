/**
 * Script to convert equipementsData.js to gameData.js format
 * Run with: node convert-equipments.js
 */

const fs = require('fs');
const path = require('path');

// Load the equipments data
const equipementsDataPath = path.join(__dirname, 'js', 'data', 'equipementsData.js');
let equipementsDataContent = fs.readFileSync(equipementsDataPath, 'utf8');

// Remove export statement and extract the data array
equipementsDataContent = equipementsDataContent.replace('export default defaultEquipementsData;', '');
equipementsDataContent = equipementsDataContent.replace('const defaultEquipementsData =', 'var defaultEquipementsData =');

// Evaluate to get the data
eval(equipementsDataContent);

// Material name to ID mapping
const materialNameToId = {
    // Common materials
    "Carbalite Ore": "mat-carbalite-ore",
    "Cabalite Ore": "mat-carbalite-ore", // Typo in source data
    "Malachite Ore": "mat-machalite-ore",
    "Machalite Ore": "mat-machalite-ore",
    "Dragonite Ore": "mat-dragonite-ore",
    "Fucium Ore": "mat-fucium-ore",
    "Dragonvein Crystal": "mat-dragonvein-crystal",
    "Monster Bone Small": "mat-bone-small",
    "Monster Bone Medium": "mat-bone-medium",
    "Monster Bone Large": "mat-bone-large",
    "Ancient Bone": "mat-ancient-bone",
    "Quality Bone": "mat-quality-bone",
    "Monster Keenbone": "mat-keenbone",
    "Monster Hardbone": "mat-hardbone",
    "Boulder Bone": "mat-boulder-bone",
    "Wingdrake Hide": "mat-wingdrake-hide",

    // Great Jagras
    "Great Jagras Claw": "mat-jagras-claw",
    "Great Jagras Hide": "mat-jagras-hide",
    "Great Jagras Mane": "mat-jagras-mane",
    "Great Jagras Scale": "mat-jagras-scale",

    // Barroth
    "Barroth Carapace": "mat-barroth-carapace",
    "Barroth Claw": "mat-barroth-claw",
    "Barroth Ridge": "mat-barroth-ridge",
    "Barroth Shell": "mat-barroth-shell",

    // Anjanath
    "Anjanath Fang": "mat-anjanath-fang",
    "Anjanath NoseBone": "mat-anjanath-nosebone",
    "Anjanath Pelt": "mat-anjanath-pelt",
    "Anjanath Scale": "mat-anjanath-scale",
    "Anjanath Tail": "mat-anjanath-tail",

    // Jyuratodus
    "Jyuratodus Carapace": "mat-jyuratodus-carapace",
    "Jyuratodus Fang": "mat-jyuratodus-fang",
    "Jyuratodus Fin": "mat-jyuratodus-fin",
    "Jyuratodus Scale": "mat-jyuratodus-scale",
    "Jyuratodus Shell": "mat-jyuratodus-shell",

    // Tobi Kadachi
    "Tobi Kadachi Claw": "mat-tobi-claw",
    "Tobi Kadachi Electrode": "mat-tobi-electrode",
    "Tobi Kadachi Membrane": "mat-tobi-membrane",
    "Tobi Kadachi Pelt": "mat-tobi-pelt",
    "Tobi Kadachi Scale": "mat-tobi-scale",

    // Pukei Pukei
    "Pukei Pukei Carapace": "mat-pukei-carapace",
    "Pukei Pukei Quill": "mat-pukei-quill",
    "Pukei Pukei Sac": "mat-pukei-sac",
    "Pukei Pukei Scale": "mat-pukei-scale",
    "Pukei Pukei Tail": "mat-pukei-tail",
    "Pukei Pukei Wing": "mat-pukei-wing",

    // Kulu Ya Ku
    "Kulu Ya Ku Beak": "mat-kulu-beak",
    "Kulu Ya Ku Hide": "mat-kulu-hide",
    "Kulu Ya Ku Plume": "mat-kulu-plume",
    "Kulu Ya Ku Scale": "mat-kulu-scale",

    // Diablos
    "Diablos Carapace": "mat-diablos-carapace",
    "Diablos Fang": "mat-diablos-fang",
    "Diablos Ridge": "mat-diablos-ridge",
    "Diablos Shell": "mat-diablos-shell",

    // Rathalos
    "Rathalos Carapace": "mat-rathalos-carapace",
    "Rathalos Marrow": "mat-rathalos-marrow",
    "Rathalos Medulla": "mat-rathalos-medulla",
    "Rathalos Plate": "mat-rathalos-plate",
    "Rathalos Scale": "mat-rathalos-scale",
    "Rathalos Shell": "mat-rathalos-shell",
    "Rathalos Tail": "mat-rathalos-tail",
    "Rathalos Webbing": "mat-rathalos-webbing",
    "Rathalos Wing": "mat-rathalos-wing",
    "Rathalos Wingtalon": "mat-rathalos-wingtalon",

    // Black Diablos
    "Black Diablos Carapace": "mat-black-diablos-carapace",
    "Black Diablos Ridge": "mat-black-diablos-ridge",

    // Azure Rathalos
    "Azure Rath Carapace": "mat-azure-carapace",
    "Azure Rath Marrow": "mat-azure-marrow",
    "Azure Rath Plate": "mat-azure-plate",
    "Azure Rath Scale": "mat-azure-scale",
    "Azure Rath Tail": "mat-azure-tail",
    "Azure Rath Wing": "mat-azure-wing",

    // Teostra
    "Teostra Carapace": "mat-teostra-carapace",
    "Teostra Claw": "mat-teostra-claw",
    "Teostra Gem": "mat-teostra-gem",
    "Teostra Horn": "mat-teostra-horn",
    "Teostra Mane": "mat-teostra-mane",
    "Teostra Powder": "mat-teostra-powder",

    // Kushala Daora
    "Daora Carapace": "mat-daora-carapace",
    "Daora Claw": "mat-daora-claw",
    "Daora Dragon Scale": "mat-daora-dragon-scale",
    "Daora Gem": "mat-daora-gem",
    "Daora Horn": "mat-daora-horn",
    "Daora Tail": "mat-daora-tail",
    "Daora Webbing": "mat-daora-webbing",

    // Nergigante
    "Nergigante Carapace": "mat-nergigante-carapace",
    "Nergigante Gem": "mat-nergigante-gem",
    "Nergigante Horn": "mat-nergigante-horn",
    "Nergigante Regrowth Plate": "mat-nergigante-regrowth",
    "Nergigante Tail": "mat-nergigante-tail",
    "Nergigante Talon": "mat-nergigante-talon"
};

function convertMaterials(materials) {
    if (!materials || materials.length === 0) return [];

    return materials.map(mat => {
        const id = materialNameToId[mat.name];
        if (!id) {
            console.warn(`Warning: Material "${mat.name}" not found in mapping`);
        }
        return {
            materialId: id || `mat-unknown-${mat.name.toLowerCase().replace(/\s+/g, '-')}`,
            quantity: mat.quantity
        };
    });
}

function slugify(text) {
    return text.toLowerCase()
        .replace(/['\s]+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// Convert armor
const armor = [];
const armorData = defaultEquipementsData.find(item => item.name === 'Armor');

if (armorData) {
    const slotMap = {
        'helm': 'head',
        'headgear': 'head',
        'mail': 'chest',
        'vest': 'chest',
        'greaves': 'legs',
        'trousers': 'legs'
    };

    armorData.types.forEach(type => {
        type.variants.forEach((variant, index) => {
            // Determine slot from name
            const nameLower = variant.name.toLowerCase();
            let slot = 'chest'; // default
            for (const [key, value] of Object.entries(slotMap)) {
                if (nameLower.includes(key)) {
                    slot = value;
                    break;
                }
            }

            const armorPiece = {
                id: `armor-${slugify(variant.name)}`,
                name: variant.name,
                slot: slot,
                defense: variant.physicalDefense || variant.defense || 0,
                recipe: convertMaterials(variant.materials)
            };

            // Add elemental defense if present
            if (variant.elementalDefense) {
                armorPiece.elementalDefense = {
                    element: variant.element || variant.elementalDefenseElement || 'fire',
                    value: variant.elementalDefense
                };
            }

            // Add affix/skill if present
            if (variant.affix && variant.affix !== 'none') {
                armorPiece.skills = [{
                    id: `skill-${slugify(variant.affix)}`,
                    name: variant.affix,
                    level: 1,
                    maxLevel: 3,
                    description: variant.affixText || ''
                }];
            }

            armor.push(armorPiece);
        });
    });
}

// Convert weapons
const weapons = [];

// Process Great Sword
const greatSwordData = defaultEquipementsData.find(item => item.name === 'Great Sword');
if (greatSwordData) {
    greatSwordData.types.forEach(type => {
        type.variants.forEach(variant => {
            const weapon = {
                id: `weapon-greatsword-${slugify(variant.name)}`,
                name: variant.name,
                type: 'Grande Épée',
                attack: (variant.damage1 || 0) + (variant.damage2 || 0) + (variant.damage3 || 0) + (variant.damage4 || 0),
                damage: {
                    d1: variant.damage1 || 0,
                    d2: variant.damage2 || 0,
                    d3: variant.damage3 || 0,
                    d4: variant.damage4 || 0
                },
                affinity: 0,
                element: null,
                skills: [],
                recipe: convertMaterials(variant.materials)
            };

            // Add affix/skill if present
            if (variant.affix && variant.affix !== 'none') {
                weapon.skills.push({
                    id: `skill-${slugify(variant.affix)}`,
                    name: variant.affix,
                    description: variant.affixText || ''
                });
            }

            weapons.push(weapon);
        });
    });
}

// Process Hammer
const hammerData = defaultEquipementsData.find(item => item.name === 'Hammer');
if (hammerData) {
    hammerData.types.forEach(type => {
        type.variants.forEach(variant => {
            const weapon = {
                id: `weapon-hammer-${slugify(variant.name)}`,
                name: variant.name,
                type: 'Marteau',
                attack: (variant.damage1 || 0) + (variant.damage2 || 0) + (variant.damage3 || 0) + (variant.damage4 || 0),
                damage: {
                    d1: variant.damage1 || 0,
                    d2: variant.damage2 || 0,
                    d3: variant.damage3 || 0,
                    d4: variant.damage4 || 0
                },
                affinity: 0,
                element: null,
                skills: [],
                recipe: convertMaterials(variant.materials)
            };

            // Add affix/skill if present
            if (variant.affix && variant.affix !== 'none') {
                weapon.skills.push({
                    id: `skill-${slugify(variant.affix)}`,
                    name: variant.affix,
                    description: variant.affixText || ''
                });
            }

            weapons.push(weapon);
        });
    });
}

// Output results
console.log('=== ARMOR ===');
console.log(`Converted ${armor.length} armor pieces`);
console.log('');

console.log('=== WEAPONS ===');
console.log(`Converted ${weapons.length} weapons`);
console.log('  - Great Swords:', weapons.filter(w => w.type === 'Grande Épée').length);
console.log('  - Hammers:', weapons.filter(w => w.type === 'Marteau').length);
console.log('');

// Write to files
const armorOutput = JSON.stringify(armor, null, 4);
const weaponsOutput = JSON.stringify(weapons, null, 4);

fs.writeFileSync(path.join(__dirname, 'converted-armor.json'), armorOutput);
fs.writeFileSync(path.join(__dirname, 'converted-weapons.json'), weaponsOutput);

console.log('Files written:');
console.log('  - converted-armor.json');
console.log('  - converted-weapons.json');
console.log('');
console.log('You can now copy these arrays into gameData.js');
