/**
 * Hunter Data Management
 * CRUD operations for hunters
 */

const Hunters = {
    /**
     * Get all hunters from state
     * @returns {Array} Array of hunters
     */
    getAll() {
        return State.getHunters();
    },

    /**
     * Get a hunter by ID
     * @param {string} id - Hunter ID
     * @returns {Object|null} Hunter object or null
     */
    getById(id) {
        const hunters = this.getAll();
        return hunters.find(h => h.id === id) || null;
    },

    /**
     * Create a new hunter
     * @param {Object} hunterData - Hunter data
     * @returns {Object} Created hunter
     */
    create(hunterData) {
        const now = new Date().toISOString();

        // Create hunter with default values
        const hunter = {
            id: UUID.generate(),
            name: hunterData.name || 'Nouveau Chasseur',
            hunterRank: hunterData.hunterRank || 1,
            stats: {
                health: hunterData.stats?.health || 100,
                stamina: hunterData.stats?.stamina || 100,
                attack: hunterData.stats?.attack || 10,
                defense: hunterData.stats?.defense || 10,
                affinity: hunterData.stats?.affinity || 0
            },
            equipment: {
                weapon: hunterData.equipment?.weapon || null,
                armor: {
                    head: hunterData.equipment?.armor?.head || null,
                    chest: hunterData.equipment?.armor?.chest || null,
                    arms: hunterData.equipment?.armor?.arms || null,
                    waist: hunterData.equipment?.armor?.waist || null,
                    legs: hunterData.equipment?.armor?.legs || null
                },
                charm: hunterData.equipment?.charm || null
            },
            skills: hunterData.skills || [],
            inventory: {
                items: hunterData.inventory?.items || [],
                materials: hunterData.inventory?.materials || []
            },
            chest: hunterData.chest || [], // Materials storage with quantities
            craftedItems: {
                weapons: hunterData.craftedItems?.weapons || [],
                armor: hunterData.craftedItems?.armor || []
            },
            completedQuests: hunterData.completedQuests || [],
            createdAt: now,
            updatedAt: now
        };

        // Add to state
        const hunters = this.getAll();
        hunters.push(hunter);
        State.set('hunters', hunters);

        // Emit event
        Events.emit(EVENT_NAMES.HUNTER_CREATED, hunter);

        console.log('Hunter created:', hunter.name);
        return hunter;
    },

    /**
     * Update a hunter
     * @param {string} id - Hunter ID
     * @param {Object} updates - Updates to apply
     * @returns {Object|null} Updated hunter or null
     */
    update(id, updates) {
        const hunters = this.getAll();
        const index = hunters.findIndex(h => h.id === id);

        if (index === -1) {
            console.error('Hunter not found:', id);
            return null;
        }

        // Update hunter
        hunters[index] = {
            ...hunters[index],
            ...updates,
            id: hunters[index].id, // Preserve ID
            createdAt: hunters[index].createdAt, // Preserve creation date
            updatedAt: new Date().toISOString()
        };

        // Update state
        State.set('hunters', hunters);

        // Emit event
        Events.emit(EVENT_NAMES.HUNTER_UPDATED, hunters[index]);

        console.log('Hunter updated:', hunters[index].name);
        return hunters[index];
    },

    /**
     * Delete a hunter
     * @param {string} id - Hunter ID
     * @returns {boolean} Success status
     */
    delete(id) {
        const hunters = this.getAll();
        const index = hunters.findIndex(h => h.id === id);

        if (index === -1) {
            console.error('Hunter not found:', id);
            return false;
        }

        const deletedHunter = hunters[index];

        // Remove from array
        hunters.splice(index, 1);

        // Update state
        State.set('hunters', hunters);

        // Emit event
        Events.emit(EVENT_NAMES.HUNTER_DELETED, { id, name: deletedHunter.name });

        console.log('Hunter deleted:', deletedHunter.name);
        return true;
    },

    /**
     * Equip a weapon to a hunter
     * @param {string} hunterId - Hunter ID
     * @param {Object} weapon - Weapon object
     * @returns {Object|null} Updated hunter
     */
    equipWeapon(hunterId, weapon) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        return this.update(hunterId, {
            equipment: {
                ...hunter.equipment,
                weapon: weapon
            }
        });
    },

    /**
     * Equip an armor piece to a hunter
     * @param {string} hunterId - Hunter ID
     * @param {string} slot - Armor slot (head, chest, arms, waist, legs)
     * @param {Object} armorPiece - Armor piece object
     * @returns {Object|null} Updated hunter
     */
    equipArmor(hunterId, slot, armorPiece) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const validSlots = ['head', 'chest', 'arms', 'waist', 'legs'];
        if (!validSlots.includes(slot)) {
            console.error('Invalid armor slot:', slot);
            return null;
        }

        return this.update(hunterId, {
            equipment: {
                ...hunter.equipment,
                armor: {
                    ...hunter.equipment.armor,
                    [slot]: armorPiece
                }
            }
        });
    },

    /**
     * Equip a charm to a hunter
     * @param {string} hunterId - Hunter ID
     * @param {Object} charm - Charm object
     * @returns {Object|null} Updated hunter
     */
    equipCharm(hunterId, charm) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        return this.update(hunterId, {
            equipment: {
                ...hunter.equipment,
                charm: charm
            }
        });
    },

    /**
     * Calculate total stats for a hunter including equipment bonuses
     * @param {string} hunterId - Hunter ID
     * @returns {Object} Total stats
     */
    calculateTotalStats(hunterId) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        // Start with base stats
        const totalStats = { ...hunter.stats };

        // Add equipment bonuses
        const equipmentStats = Helpers.calculateTotalStats(hunter.equipment);

        totalStats.attack += equipmentStats.attack;
        totalStats.defense += equipmentStats.defense;
        totalStats.health += equipmentStats.health;
        totalStats.stamina += equipmentStats.stamina;
        totalStats.affinity += equipmentStats.affinity;

        return totalStats;
    },

    /**
     * Calculate active skills for a hunter based on equipment
     * @param {string} hunterId - Hunter ID
     * @returns {Array} Array of active skills
     */
    calculateSkills(hunterId) {
        const hunter = this.getById(hunterId);
        if (!hunter) return [];

        return Helpers.aggregateSkills(hunter.equipment);
    },

    /**
     * Add item to hunter inventory
     * @param {string} hunterId - Hunter ID
     * @param {string} itemId - Item ID
     * @param {number} quantity - Quantity to add
     * @returns {Object|null} Updated hunter
     */
    addItem(hunterId, itemId, quantity = 1) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const items = [...hunter.inventory.items];
        const existingIndex = items.findIndex(i => i.id === itemId);

        if (existingIndex !== -1) {
            items[existingIndex].quantity += quantity;
        } else {
            // Get item data from game data
            const gameData = State.getGameData();
            const itemData = gameData.items.find(i => i.id === itemId);

            if (itemData) {
                items.push({
                    ...itemData,
                    quantity: quantity
                });
            }
        }

        return this.update(hunterId, {
            inventory: {
                ...hunter.inventory,
                items: items
            }
        });
    },

    /**
     * Remove item from hunter inventory
     * @param {string} hunterId - Hunter ID
     * @param {string} itemId - Item ID
     * @param {number} quantity - Quantity to remove
     * @returns {Object|null} Updated hunter
     */
    removeItem(hunterId, itemId, quantity = 1) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const items = [...hunter.inventory.items];
        const existingIndex = items.findIndex(i => i.id === itemId);

        if (existingIndex !== -1) {
            items[existingIndex].quantity -= quantity;

            // Remove if quantity is 0 or less
            if (items[existingIndex].quantity <= 0) {
                items.splice(existingIndex, 1);
            }
        }

        return this.update(hunterId, {
            inventory: {
                ...hunter.inventory,
                items: items
            }
        });
    },

    /**
     * Add material to hunter inventory
     * @param {string} hunterId - Hunter ID
     * @param {string} materialId - Material ID
     * @param {number} quantity - Quantity to add
     * @returns {Object|null} Updated hunter
     */
    addMaterial(hunterId, materialId, quantity = 1) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const materials = [...hunter.inventory.materials];
        const existingIndex = materials.findIndex(m => m.id === materialId);

        if (existingIndex !== -1) {
            materials[existingIndex].quantity += quantity;
        } else {
            // Get material data from game data
            const gameData = State.getGameData();
            const materialData = gameData.materials.find(m => m.id === materialId);

            if (materialData) {
                materials.push({
                    ...materialData,
                    quantity: quantity
                });
            }
        }

        return this.update(hunterId, {
            inventory: {
                ...hunter.inventory,
                materials: materials
            }
        });
    },

    /**
     * Mark a quest as completed for a hunter
     * @param {string} hunterId - Hunter ID
     * @param {string} questId - Quest ID
     * @returns {Object|null} Updated hunter
     */
    completeQuest(hunterId, questId) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        if (!hunter.completedQuests.includes(questId)) {
            return this.update(hunterId, {
                completedQuests: [...hunter.completedQuests, questId]
            });
        }

        return hunter;
    },

    /**
     * Update material quantity in chest
     * @param {string} hunterId - Hunter ID
     * @param {string} materialId - Material ID
     * @param {number} quantity - New quantity
     * @returns {Object|null} Updated hunter
     */
    updateChestMaterial(hunterId, materialId, quantity) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const chest = [...hunter.chest];
        const existingIndex = chest.findIndex(m => m.id === materialId);

        if (quantity <= 0) {
            // Remove material if quantity is 0 or less
            if (existingIndex !== -1) {
                chest.splice(existingIndex, 1);
            }
        } else {
            // Get material data
            const gameData = State.getGameData();
            const materialData = gameData.materials.find(m => m.id === materialId);

            if (!materialData) return null;

            if (existingIndex !== -1) {
                chest[existingIndex].quantity = quantity;
            } else {
                chest.push({
                    ...materialData,
                    quantity: quantity
                });
            }
        }

        return this.update(hunterId, { chest });
    },

    /**
     * Increment material in chest
     * @param {string} hunterId - Hunter ID
     * @param {string} materialId - Material ID
     * @param {number} amount - Amount to add
     * @returns {Object|null} Updated hunter
     */
    incrementChestMaterial(hunterId, materialId, amount = 1) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const existing = hunter.chest.find(m => m.id === materialId);
        const currentQty = existing ? existing.quantity : 0;

        return this.updateChestMaterial(hunterId, materialId, currentQty + amount);
    },

    /**
     * Decrement material in chest
     * @param {string} hunterId - Hunter ID
     * @param {string} materialId - Material ID
     * @param {number} amount - Amount to remove
     * @returns {Object|null} Updated hunter
     */
    decrementChestMaterial(hunterId, materialId, amount = 1) {
        const hunter = this.getById(hunterId);
        if (!hunter) return null;

        const existing = hunter.chest.find(m => m.id === materialId);
        const currentQty = existing ? existing.quantity : 0;
        const newQty = Math.max(0, currentQty - amount);

        return this.updateChestMaterial(hunterId, materialId, newQty);
    },

    /**
     * Check if hunter has enough materials for crafting
     * @param {string} hunterId - Hunter ID
     * @param {Array} recipe - Array of {materialId, quantity} required
     * @returns {boolean} True if has all materials
     */
    hasRequiredMaterials(hunterId, recipe) {
        const hunter = this.getById(hunterId);
        if (!hunter) return false;

        return recipe.every(req => {
            const material = hunter.chest.find(m => m.id === req.materialId);
            return material && material.quantity >= req.quantity;
        });
    },

    /**
     * Craft an item (weapon or armor)
     * @param {string} hunterId - Hunter ID
     * @param {string} itemId - Item ID to craft
     * @param {string} itemType - 'weapon' or 'armor'
     * @returns {Object} Result object {success, message, hunter}
     */
    craftItem(hunterId, itemId, itemType) {
        const hunter = this.getById(hunterId);
        if (!hunter) return { success: false, message: 'Chasseur introuvable' };

        const gameData = State.getGameData();
        const item = itemType === 'weapon'
            ? gameData.weapons.find(w => w.id === itemId)
            : gameData.armor.find(a => a.id === itemId);

        if (!item || !item.recipe) {
            return { success: false, message: 'Recette introuvable' };
        }

        // Check if already crafted
        const craftedList = itemType === 'weapon'
            ? hunter.craftedItems.weapons
            : hunter.craftedItems.armor;

        if (craftedList.includes(itemId)) {
            return { success: false, message: 'Déjà crafté' };
        }

        // Check materials
        if (!this.hasRequiredMaterials(hunterId, item.recipe)) {
            return { success: false, message: 'Matériaux insuffisants' };
        }

        // Deduct materials from chest
        let updatedHunter = hunter;
        item.recipe.forEach(req => {
            updatedHunter = this.decrementChestMaterial(hunterId, req.materialId, req.quantity);
        });

        // Mark as crafted
        const newCraftedList = [...craftedList, itemId];
        const newCraftedItems = { ...hunter.craftedItems };

        if (itemType === 'weapon') {
            newCraftedItems.weapons = newCraftedList;
        } else {
            newCraftedItems.armor = newCraftedList;
        }

        updatedHunter = this.update(hunterId, { craftedItems: newCraftedItems });

        return {
            success: true,
            message: `${item.name} crafté avec succès !`,
            hunter: updatedHunter
        };
    },

    /**
     * Check if an item is crafted
     * @param {string} hunterId - Hunter ID
     * @param {string} itemId - Item ID
     * @param {string} itemType - 'weapon' or 'armor'
     * @returns {boolean} True if crafted
     */
    isItemCrafted(hunterId, itemId, itemType) {
        const hunter = this.getById(hunterId);
        if (!hunter) return false;

        const craftedList = itemType === 'weapon'
            ? hunter.craftedItems.weapons
            : hunter.craftedItems.armor;

        return craftedList.includes(itemId);
    }
};
