# Guide d'ajout d'armes et d'armures

Ce guide vous permet d'ajouter de nouvelles armes et armures dans l'application **sans avoir besoin d'aide**.

---

## 📋 Vue d'ensemble du processus

```
1. Modifier equipementsData.js (ajouter vos armes/armures)
   ↓
2. Exécuter convert-equipments.js (conversion automatique)
   ↓
3. Copier les données générées dans gameData.js
   ↓
4. Réinitialiser l'app pour charger les nouvelles données
```

---

## 🔧 Étape 1: Ajouter vos équipements dans equipementsData.js

### Localisation du fichier
`js/data/equipementsData.js`

### Pour ajouter une ARME

Trouvez la catégorie d'arme existante (Great Sword, Hammer, Longsword, etc.) ou créez-en une nouvelle:

```javascript
{
    name: 'Great Sword',  // Nom anglais du type d'arme
    icon: 'GreatSwordRarity1.png',
    types: [
        {
            typeName: 'Iron',
            icon: 'Ores.png',
            variants: [
                {
                    name: 'Ma Nouvelle Épée',  // ← NOM DE VOTRE ARME
                    icon: 'GreatSwordRarity3.png',  // ← La rareté est extraite du nom (Rarity3 = rareté 3)
                    damage1: 7,   // Dés de dégâts
                    damage2: 4,
                    damage3: 2,
                    damage4: 0,
                    affinity: 0,
                    element: null,  // ou 'fire', 'water', 'thunder', etc.
                    affix: 'none',  // ou le nom d'une compétence
                    materials: [
                        { name: "Carbalite Ore", quantity: 2 },
                        { name: "Dragonite Ore", quantity: 1 }
                    ]
                }
            ]
        }
    ]
}
```

**Important:** Le champ `icon` détermine la rareté de l'arme. Utilisez:
- `GreatSwordRarity1.png` pour rareté 1
- `GreatSwordRarity2.png` pour rareté 2
- `GreatSwordRarity3.png` pour rareté 3
- `GreatSwordRarity4.png` pour rareté 4
- `GreatSwordRarity5.png` pour rareté 5

### Pour ajouter une ARMURE

Dans la catégorie 'Armor', ajoutez vos pièces:

```javascript
{
    name: 'Mon Casque',  // ← NOM (doit contenir: helm/headgear/hood pour tête)
    icon: 'HelmetRarity2.png',  // ← La rareté est extraite du nom (Rarity2 = rareté 2)
    physicalDefense: 2,  // Défense physique
    element: 'fire',     // Type élémentaire
    elementalDefense: 5, // Défense élémentaire
    affix: 'Attack Boost',  // Compétence (optionnel)
    affixText: 'Augmente l\'attaque',
    materials: [
        { name: "Rathalos Scale", quantity: 3 }
    ]
}
```

**Mots-clés pour les emplacements:**
- **Tête**: `helm`, `headgear`, `hood`
- **Torse**: `mail`, `vest`
- **Jambes**: `greaves`, `trousers`

**Important:** Le champ `icon` détermine la rareté de l'armure. Utilisez:
- `HelmetRarity1.png` / `ChestRarity1.png` / `LegRarity1.png` pour rareté 1
- `HelmetRarity2.png` / `ChestRarity2.png` / `LegRarity2.png` pour rareté 2
- `HelmetRarity3.png` / `ChestRarity3.png` / `LegRarity3.png` pour rareté 3
- `HelmetRarity4.png` / `ChestRarity4.png` / `LegRarity4.png` pour rareté 4
- `HelmetRarity5.png` / `ChestRarity5.png` / `LegRarity5.png` pour rareté 5

---

## ⚙️ Étape 2: Convertir les données

Ouvrez un terminal dans le dossier `MHWCompanion` et exécutez:

```bash
node convert-equipments.js
```

**Résultat attendu:**
```
📋 Processing weapon type: Great Sword (Grande Épée)
   ✓ Converted 17 Grande Épée weapons

==================================================
📦 CONVERSION COMPLETE
==================================================

🛡️  ARMOR
   Total: 45 armor pieces

⚔️  WEAPONS
   Total: 65 weapons
   - Grande Épée: 17
   - Marteau: 18
   - Épée Longue: 30

📁 FILES WRITTEN:
   ✓ converted-armor.json
   ✓ converted-weapons.json
```

Cela crée deux fichiers:
- `converted-armor.json`
- `converted-weapons.json`

---

## 📝 Étape 3: Mettre à jour gameData.js

### Localisation du fichier
`js/data/gameData.js`

### Pour les ARMES

1. Ouvrez `converted-weapons.json`
2. Copiez **tout le contenu** (c'est un tableau JSON)
3. Dans `gameData.js`, trouvez la ligne `weapons: [` (environ ligne 9)
4. **Remplacez** tout le tableau `weapons` par le contenu copié

**Avant:**
```javascript
const GameData = {
    weapons: [
        { id: 'weapon-greatsword-buster-sword', name: 'Buster Sword', ... },
        // ... anciennes armes
    ],
```

**Après:**
```javascript
const GameData = {
    weapons: [
        // Collez ici le contenu de converted-weapons.json
    ],
```

### Pour les ARMURES

Même processus avec `converted-armor.json`:
1. Ouvrez `converted-armor.json`
2. Copiez tout le contenu
3. Dans `gameData.js`, trouvez `armor: [` (environ ligne 51)
4. **Remplacez** tout le tableau `armor`

---

## 🔄 Étape 4: Recharger l'application

1. Ouvrez l'application dans votre navigateur
2. Cliquez sur le bouton **⚙️ Réglages** en bas
3. Cliquez sur **"Réinitialiser toutes les données"**
4. Confirmez l'action
5. L'application se recharge automatiquement

**Vos nouvelles armes et armures sont maintenant disponibles dans la Forge!**

---

## 🎨 Gestion des icônes

### Pour les matériaux

Si vous utilisez un nouveau matériau, ajoutez-le dans `convert-equipments.js`:

**Ligne 28** - Section `materialNameToId`:
```javascript
const materialNameToId = {
    // ... matériaux existants

    // Votre nouveau matériau ← AJOUTEZ ICI
    "Nom du Matériau": "mat-nom-du-materiau",
};
```

Le script vous avertira si des matériaux ne sont pas mappés:
```
⚠️  WARNING: Unmapped materials found:
   - nouveau-materiau
   Add these to materialNameToId mapping in convert-equipments.js
```

### Pour les icônes d'armes

Dans `js/data/iconMapping.js`, section `weapons` (ligne 181):

```javascript
weapons: {
    "Grande Épée": {
        1: "GreatSwordRarity1.webp",
        2: "GreatSwordRarity2.webp",
        // ...
    },
    // Ajoutez votre nouveau type d'arme ici
}
```

**La rareté est extraite automatiquement du nom de l'icône dans `equipementsData.js`.**

Par exemple:
- `icon: 'GreatSwordRarity1.webp'` → rareté 1
- `icon: 'GreatSwordRarity3.webp'` → rareté 3
- `icon: 'GreatSwordRarity5.webp'` → rareté 5

### Pour les icônes d'armures

Dans `js/data/iconMapping.js`, section `armor` (ligne 156):

```javascript
armor: {
    head: {
        1: "HelmetRarity1.webp",
        // ...
    },
    // ...
}
```

**La rareté est extraite automatiquement du nom de l'icône dans `equipementsData.js`.**

Par exemple:
- `icon: 'HelmetRarity1.webp'` → rareté 1
- `icon: 'ChestRarity3.webp'` → rareté 3
- `icon: 'LegRarity5.webp'` → rareté 5

---

## 🆕 Ajouter un nouveau TYPE d'arme

Si vous voulez ajouter un type d'arme complètement nouveau (ex: Arc, Lance):

### 1. Dans equipementsData.js
Ajoutez une nouvelle catégorie:
```javascript
{
    name: 'Bow',  // ← Nom anglais
    icon: 'BowRarity1.png',
    types: [
        {
            typeName: 'Iron Bow',
            icon: 'Ores.png',
            variants: [
                // Vos arcs ici
            ]
        }
    ]
}
```

### 2. Dans convert-equipments.js
Ajoutez le mapping du nom (ligne 151):
```javascript
const weaponTypeMapping = {
    "Great Sword": "Grande Épée",
    "Hammer": "Marteau",
    "Longsword": "Épée Longue",
    "Bow": "Arc",  // ← AJOUTEZ ICI
};
```

### 3. Dans iconMapping.js
Ajoutez les icônes (ligne 196):
```javascript
weapons: {
    // ... armes existantes
    "Arc": {  // ← Nom français
        1: "BowRarity1.webp",
        2: "BowRarity2.webp",
        3: "BowRarity3.webp",
        4: "BowRarity4.webp",
        5: "BowRarity5.webp"
    }
}
```

Et le dossier (ligne 250):
```javascript
let weaponFolder = 'greatSword';
if (type === 'Marteau') weaponFolder = 'hammer';
else if (type === 'Épée Longue') weaponFolder = 'longsword';
else if (type === 'Arc') weaponFolder = 'bow';  // ← AJOUTEZ ICI
```

### 4. Placez les images
Créez le dossier: `assets/weapons/bow/`
Ajoutez vos fichiers: `BowRarity1.webp`, `BowRarity2.webp`, etc.

---

## ❓ Résolution de problèmes

### ⚠️ "Material not found in mapping"
**Solution:** Ajoutez le matériau dans `convert-equipments.js` section `materialNameToId`

### ⚠️ Les nouvelles armes n'apparaissent pas
**Vérifications:**
1. Avez-vous remplacé le tableau `weapons` dans `gameData.js`?
2. Avez-vous cliqué sur "Réinitialiser toutes les données"?
3. Le type d'arme est-il dans `weaponTypeMapping`?

### ⚠️ Les icônes ne s'affichent pas
**Vérifications:**
1. Le fichier image existe-t-il dans le bon dossier?
2. Le nom dans `iconMapping.js` correspond-il au fichier?
3. Le mapping de dossier dans `getWeaponIcon()` est-il correct?

---

## 📚 Résumé rapide

```bash
# 1. Modifier
vim js/data/equipementsData.js

# 2. Convertir
node convert-equipments.js

# 3. Copier
# converted-weapons.json → gameData.js (weapons array)
# converted-armor.json → gameData.js (armor array)

# 4. Recharger
# App → Réglages → Réinitialiser toutes les données
```

**C'est tout! Vous pouvez maintenant gérer vos équipements en autonomie.**
