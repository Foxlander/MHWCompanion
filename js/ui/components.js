/**
 * UI Components
 * Reusable UI component library
 */

const Components = {
    /**
     * Create a hunter card element
     * @param {Object} hunter - Hunter object
     * @returns {HTMLElement} Hunter card element
     */
    createHunterCard(hunter) {
        const card = document.createElement('div');
        card.className = 'hunter-card';
        card.dataset.hunterId = hunter.id;

        // Calculate total stats
        const totalStats = Hunters.calculateTotalStats(hunter.id);
        const skills = Hunters.calculateSkills(hunter.id);

        // Build weapon info
        const weaponInfo = hunter.equipment.weapon
            ? `<div class="weapon-info">
                <span class="weapon-icon">⚔️</span>
                <span class="weapon-name">${Helpers.escapeHtml(hunter.equipment.weapon.name)}</span>
                <span class="weapon-attack">ATK ${hunter.equipment.weapon.attack}</span>
               </div>`
            : '<div class="weapon-info empty">Aucune arme</div>';

        // Build skills preview (max 3)
        const skillsPreview = skills.slice(0, 3).map(skill =>
            `<span class="skill-badge">${Helpers.escapeHtml(skill.name)} Lv${skill.level}</span>`
        ).join('');

        const moreSkills = skills.length > 3
            ? `<span class="skill-badge more">+${skills.length - 3}</span>`
            : '';

        card.innerHTML = `
            <div class="hunter-card-header">
                <h3 class="hunter-name">${Helpers.escapeHtml(hunter.name)}</h3>
                <span class="hunter-rank">Rang ${hunter.hunterRank}</span>
            </div>
            <div class="hunter-card-body">
                ${weaponInfo}
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-icon">❤️</span>
                        <span class="stat-value">${totalStats.health}</span>
                        <span class="stat-label">PV</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">⚡</span>
                        <span class="stat-value">${totalStats.stamina}</span>
                        <span class="stat-label">END</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">⚔️</span>
                        <span class="stat-value">${totalStats.attack}</span>
                        <span class="stat-label">ATK</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🛡️</span>
                        <span class="stat-value">${totalStats.defense}</span>
                        <span class="stat-label">DEF</span>
                    </div>
                </div>
                ${skills.length > 0 ? `
                <div class="skills-preview">
                    ${skillsPreview}
                    ${moreSkills}
                </div>
                ` : ''}
            </div>
            <div class="hunter-card-footer">
                <button class="btn btn-sm btn-secondary view-btn" data-action="view">
                    <span class="icon">👁️</span> Voir
                </button>
                <button class="btn btn-sm btn-secondary edit-btn" data-action="edit">
                    <span class="icon">✏️</span> Modifier
                </button>
                <button class="btn btn-sm btn-secondary delete-btn" data-action="delete">
                    <span class="icon">🗑️</span> Supprimer
                </button>
            </div>
        `;

        // Add event listeners
        const viewBtn = card.querySelector('[data-action="view"]');
        const editBtn = card.querySelector('[data-action="edit"]');
        const deleteBtn = card.querySelector('[data-action="delete"]');

        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showHunterManagement(hunter.id);
            });
        }

        if (editBtn) {
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showHunterForm(hunter.id);
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.confirmDeleteHunter(hunter.id);
            });
        }

        return card;
    },

    /**
     * Show hunter details in modal
     * @param {string} hunterId - Hunter ID
     */
    showHunterDetails(hunterId) {
        const hunter = Hunters.getById(hunterId);
        if (!hunter) return;

        const totalStats = Hunters.calculateTotalStats(hunterId);
        const skills = Hunters.calculateSkills(hunterId);

        // Build equipment display
        const equipmentHtml = `
            <div class="equipment-display">
                <h4>Équipement</h4>
                <div class="equipment-grid">
                    <div class="equipment-slot">
                        <strong>Arme:</strong> ${hunter.equipment.weapon?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Tête:</strong> ${hunter.equipment.armor.head?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Torse:</strong> ${hunter.equipment.armor.chest?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Bras:</strong> ${hunter.equipment.armor.arms?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Taille:</strong> ${hunter.equipment.armor.waist?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Jambes:</strong> ${hunter.equipment.armor.legs?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Charme:</strong> ${hunter.equipment.charm?.name || 'Aucun'}
                    </div>
                </div>
            </div>
        `;

        // Build skills display
        const skillsHtml = skills.length > 0 ? `
            <div class="skills-display">
                <h4>Compétences actives</h4>
                <div class="skills-list">
                    ${skills.map(skill => `
                        <div class="skill-item">
                            <span class="skill-name">${Helpers.escapeHtml(skill.name)}</span>
                            <span class="skill-level">Niveau ${skill.level}/${skill.maxLevel}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        const bodyHtml = `
            <div class="hunter-details">
                <div class="detail-section">
                    <h4>Statistiques</h4>
                    <div class="stats-detail">
                        <div class="stat-row">
                            <span>Points de vie:</span>
                            <span>${totalStats.health}</span>
                        </div>
                        <div class="stat-row">
                            <span>Endurance:</span>
                            <span>${totalStats.stamina}</span>
                        </div>
                        <div class="stat-row">
                            <span>Attaque:</span>
                            <span>${totalStats.attack}</span>
                        </div>
                        <div class="stat-row">
                            <span>Défense:</span>
                            <span>${totalStats.defense}</span>
                        </div>
                        <div class="stat-row">
                            <span>Affinité:</span>
                            <span>${totalStats.affinity}%</span>
                        </div>
                    </div>
                </div>
                ${equipmentHtml}
                ${skillsHtml}
                <div class="detail-section">
                    <h4>Progression</h4>
                    <p>Quêtes complétées: ${hunter.completedQuests.length}</p>
                    <p>Rang chasseur: ${hunter.hunterRank}</p>
                </div>
            </div>
        `;

        Modal.open({
            title: hunter.name,
            body: bodyHtml,
            actions: [
                {
                    label: 'Modifier',
                    class: 'btn-primary',
                    onClick: () => {
                        Modal.close();
                        this.showHunterForm(hunterId);
                    }
                },
                {
                    label: 'Fermer',
                    class: 'btn-secondary',
                    onClick: () => {}
                }
            ]
        });
    },

    /**
     * Show hunter form (create or edit)
     * @param {string} hunterId - Hunter ID (null for new hunter)
     */
    showHunterForm(hunterId = null) {
        const isEdit = hunterId !== null;
        const hunter = isEdit ? Hunters.getById(hunterId) : null;

        const form = document.createElement('form');
        form.className = 'hunter-form';
        form.innerHTML = `
            <div class="form-group">
                <label for="hunter-name">Nom du chasseur *</label>
                <input type="text" id="hunter-name" name="name"
                       value="${hunter?.name || ''}"
                       placeholder="Entrez un nom" required>
            </div>
            <div class="form-group">
                <label for="hunter-rank">Rang chasseur</label>
                <input type="number" id="hunter-rank" name="hunterRank"
                       value="${hunter?.hunterRank || 1}"
                       min="1" max="999">
            </div>
            <div class="form-section">
                <h4>Statistiques de base</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="hunter-health">Points de vie</label>
                        <input type="number" id="hunter-health" name="health"
                               value="${hunter?.stats.health || 100}"
                               min="1" max="999">
                    </div>
                    <div class="form-group">
                        <label for="hunter-stamina">Endurance</label>
                        <input type="number" id="hunter-stamina" name="stamina"
                               value="${hunter?.stats.stamina || 100}"
                               min="1" max="999">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="hunter-attack">Attaque</label>
                        <input type="number" id="hunter-attack" name="attack"
                               value="${hunter?.stats.attack || 10}"
                               min="0" max="999">
                    </div>
                    <div class="form-group">
                        <label for="hunter-defense">Défense</label>
                        <input type="number" id="hunter-defense" name="defense"
                               value="${hunter?.stats.defense || 10}"
                               min="0" max="999">
                    </div>
                </div>
                <div class="form-group">
                    <label for="hunter-affinity">Affinité (%)</label>
                    <input type="number" id="hunter-affinity" name="affinity"
                           value="${hunter?.stats.affinity || 0}"
                           min="-100" max="100">
                </div>
            </div>
            <div class="form-section">
                <h4>Équipement</h4>
                <div class="form-group">
                    <label for="hunter-weapon">Arme</label>
                    <select id="hunter-weapon" name="weapon">
                        <option value="">Aucune arme</option>
                        ${this.getWeaponOptions(hunter?.equipment.weapon?.id)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="hunter-armor-head">Casque</label>
                    <select id="hunter-armor-head" name="armor-head">
                        <option value="">Aucun casque</option>
                        ${this.getArmorOptions('head', hunter?.equipment.armor.head?.id)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="hunter-armor-chest">Armure</label>
                    <select id="hunter-armor-chest" name="armor-chest">
                        <option value="">Aucune armure</option>
                        ${this.getArmorOptions('chest', hunter?.equipment.armor.chest?.id)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="hunter-armor-arms">Brassards</label>
                    <select id="hunter-armor-arms" name="armor-arms">
                        <option value="">Aucuns brassards</option>
                        ${this.getArmorOptions('arms', hunter?.equipment.armor.arms?.id)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="hunter-armor-waist">Ceinture</label>
                    <select id="hunter-armor-waist" name="armor-waist">
                        <option value="">Aucune ceinture</option>
                        ${this.getArmorOptions('waist', hunter?.equipment.armor.waist?.id)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="hunter-armor-legs">Jambières</label>
                    <select id="hunter-armor-legs" name="armor-legs">
                        <option value="">Aucunes jambières</option>
                        ${this.getArmorOptions('legs', hunter?.equipment.armor.legs?.id)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="hunter-charm">Charme</label>
                    <select id="hunter-charm" name="charm">
                        <option value="">Aucun charme</option>
                        ${this.getCharmOptions(hunter?.equipment.charm?.id)}
                    </select>
                </div>
            </div>
        `;

        Modal.open({
            title: isEdit ? `Modifier ${hunter.name}` : 'Nouveau Chasseur',
            body: form,
            actions: [
                {
                    label: 'Annuler',
                    class: 'btn-secondary',
                    onClick: () => {}
                },
                {
                    label: isEdit ? 'Sauvegarder' : 'Créer',
                    class: 'btn-primary',
                    onClick: () => {
                        this.submitHunterForm(form, hunterId);
                    }
                }
            ]
        });
    },

    /**
     * Get weapon select options
     * @param {string} selectedId - Selected weapon ID
     * @returns {string} HTML options
     */
    getWeaponOptions(selectedId = null) {
        const gameData = State.getGameData();
        return gameData.weapons.map(weapon =>
            `<option value="${weapon.id}" ${weapon.id === selectedId ? 'selected' : ''}>
                ${Helpers.escapeHtml(weapon.name)} (${weapon.type}, ATK ${weapon.attack})
            </option>`
        ).join('');
    },

    /**
     * Get armor select options for a slot
     * @param {string} slot - Armor slot
     * @param {string} selectedId - Selected armor ID
     * @returns {string} HTML options
     */
    getArmorOptions(slot, selectedId = null) {
        const gameData = State.getGameData();
        const armorPieces = gameData.armor.filter(a => a.slot === slot);
        return armorPieces.map(armor =>
            `<option value="${armor.id}" ${armor.id === selectedId ? 'selected' : ''}>
                ${Helpers.escapeHtml(armor.name)} (DEF ${armor.defense})
            </option>`
        ).join('');
    },

    /**
     * Get charm select options
     * @param {string} selectedId - Selected charm ID
     * @returns {string} HTML options
     */
    getCharmOptions(selectedId = null) {
        const gameData = State.getGameData();
        return gameData.charms.map(charm =>
            `<option value="${charm.id}" ${charm.id === selectedId ? 'selected' : ''}>
                ${Helpers.escapeHtml(charm.name)}
            </option>`
        ).join('');
    },

    /**
     * Submit hunter form
     * @param {HTMLFormElement} form - Form element
     * @param {string} hunterId - Hunter ID (null for new)
     */
    submitHunterForm(form, hunterId = null) {
        const formData = new FormData(form);
        const gameData = State.getGameData();

        // Build hunter data
        const hunterData = {
            name: formData.get('name'),
            hunterRank: parseInt(formData.get('hunterRank')) || 1,
            stats: {
                health: parseInt(formData.get('health')) || 100,
                stamina: parseInt(formData.get('stamina')) || 100,
                attack: parseInt(formData.get('attack')) || 10,
                defense: parseInt(formData.get('defense')) || 10,
                affinity: parseInt(formData.get('affinity')) || 0
            },
            equipment: {
                weapon: formData.get('weapon')
                    ? gameData.weapons.find(w => w.id === formData.get('weapon'))
                    : null,
                armor: {
                    head: formData.get('armor-head')
                        ? gameData.armor.find(a => a.id === formData.get('armor-head'))
                        : null,
                    chest: formData.get('armor-chest')
                        ? gameData.armor.find(a => a.id === formData.get('armor-chest'))
                        : null,
                    arms: formData.get('armor-arms')
                        ? gameData.armor.find(a => a.id === formData.get('armor-arms'))
                        : null,
                    waist: formData.get('armor-waist')
                        ? gameData.armor.find(a => a.id === formData.get('armor-waist'))
                        : null,
                    legs: formData.get('armor-legs')
                        ? gameData.armor.find(a => a.id === formData.get('armor-legs'))
                        : null
                },
                charm: formData.get('charm')
                    ? gameData.charms.find(c => c.id === formData.get('charm'))
                    : null
            }
        };

        // Validate
        if (!hunterData.name || hunterData.name.trim() === '') {
            Helpers.showToast('Le nom du chasseur est requis', 'error');
            return;
        }

        // Create or update
        if (hunterId) {
            // Keep existing inventory and completed quests
            const existing = Hunters.getById(hunterId);
            hunterData.inventory = existing.inventory;
            hunterData.completedQuests = existing.completedQuests;

            Hunters.update(hunterId, hunterData);
            Helpers.showToast(`${hunterData.name} modifié avec succès`, 'success');
        } else {
            Hunters.create(hunterData);
            Helpers.showToast(`${hunterData.name} créé avec succès`, 'success');
        }

        Modal.close();
    },

    /**
     * Confirm hunter deletion
     * @param {string} hunterId - Hunter ID
     */
    confirmDeleteHunter(hunterId) {
        const hunter = Hunters.getById(hunterId);
        if (!hunter) return;

        Modal.confirm(
            `Êtes-vous sûr de vouloir supprimer ${hunter.name} ?`,
            () => {
                Hunters.delete(hunterId);
                Helpers.showToast(`${hunter.name} supprimé`, 'success');
            }
        );
    },

    /**
     * Show hunter management modal with 3 tabs (Chest/Forge/Equipment)
     * @param {string} hunterId - Hunter ID
     */
    showHunterManagement(hunterId) {
        const hunter = Hunters.getById(hunterId);
        if (!hunter) return;

        const container = document.createElement('div');
        container.className = 'hunter-management';
        container.innerHTML = `
            <div class="management-tabs">
                <button class="management-tab active" data-tab="chest">
                    <span class="tab-icon">📦</span> Coffre
                </button>
                <button class="management-tab" data-tab="forge">
                    <span class="tab-icon">🔨</span> Forge
                </button>
                <button class="management-tab" data-tab="equipment">
                    <span class="tab-icon">⚔️</span> Équipement
                </button>
            </div>
            <div class="management-content">
                <div id="tab-chest" class="tab-panel active"></div>
                <div id="tab-forge" class="tab-panel"></div>
                <div id="tab-equipment" class="tab-panel"></div>
            </div>
        `;

        // Render initial tabs
        this.renderChestTab(hunterId, container.querySelector('#tab-chest'));
        this.renderForgeTab(hunterId, container.querySelector('#tab-forge'));
        this.renderEquipmentTab(hunterId, container.querySelector('#tab-equipment'));

        // Setup tab switching
        container.querySelectorAll('.management-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;

                // Update active tab
                container.querySelectorAll('.management-tab').forEach(t => t.classList.remove('active'));
                container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                container.querySelector(`#tab-${tabName}`).classList.add('active');
            });
        });

        Modal.open({
            title: `${hunter.name} - Gestion`,
            body: container,
            actions: [
                {
                    label: 'Fermer',
                    class: 'btn-secondary',
                    onClick: () => {}
                }
            ]
        });
    },

    /**
     * Render chest tab content
     * @param {string} hunterId - Hunter ID
     * @param {HTMLElement} container - Container element
     */
    renderChestTab(hunterId, container) {
        const hunter = Hunters.getById(hunterId);
        const gameData = State.getGameData();

        let html = '<div class="chest-view"><h4>Matériaux collectés</h4><div class="materials-list">';

        // Show all available materials with quantities
        gameData.materials.forEach(material => {
            const owned = hunter.chest.find(m => m.id === material.id);
            const quantity = owned ? owned.quantity : 0;

            html += `
                <div class="material-item" data-material-id="${material.id}">
                    <div class="material-info">
                        <span class="material-name">${Helpers.escapeHtml(material.name)}</span>
                        <span class="material-rarity rarity-${material.rarity}">⭐ ${material.rarity}</span>
                    </div>
                    <div class="material-controls">
                        <button class="btn btn-sm btn-decrement" data-action="decrement" ${quantity === 0 ? 'disabled' : ''}>−</button>
                        <span class="material-quantity">${quantity}</span>
                        <button class="btn btn-sm btn-increment" data-action="increment">+</button>
                    </div>
                </div>
            `;
        });

        html += '</div></div>';
        container.innerHTML = html;

        // Add event listeners for increment/decrement
        container.querySelectorAll('.material-item').forEach(item => {
            const materialId = item.dataset.materialId;
            const incrementBtn = item.querySelector('[data-action="increment"]');
            const decrementBtn = item.querySelector('[data-action="decrement"]');
            const quantitySpan = item.querySelector('.material-quantity');

            incrementBtn.addEventListener('click', () => {
                Hunters.incrementChestMaterial(hunterId, materialId, 1);
                const newQty = parseInt(quantitySpan.textContent) + 1;
                quantitySpan.textContent = newQty;
                decrementBtn.disabled = false;
            });

            decrementBtn.addEventListener('click', () => {
                Hunters.decrementChestMaterial(hunterId, materialId, 1);
                const newQty = Math.max(0, parseInt(quantitySpan.textContent) - 1);
                quantitySpan.textContent = newQty;
                if (newQty === 0) decrementBtn.disabled = true;
            });
        });
    },

    /**
     * Render forge tab content
     * @param {string} hunterId - Hunter ID
     * @param {HTMLElement} container - Container element
     */
    renderForgeTab(hunterId, container) {
        const gameData = State.getGameData();

        let html = `
            <div class="forge-view">
                <h4>Forge d'armes</h4>
                <div class="forge-section">
                    ${this.renderWeaponsList(hunterId, gameData.weapons)}
                </div>
                <h4>Forge d'armures</h4>
                <div class="forge-section">
                    ${this.renderArmorsList(hunterId, gameData.armor)}
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Add craft button listeners
        container.querySelectorAll('[data-action="craft"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.dataset.itemId;
                const itemType = btn.dataset.itemType;

                const result = Hunters.craftItem(hunterId, itemId, itemType);

                if (result.success) {
                    Helpers.showToast(result.message, 'success');
                    // Refresh both forge and chest tabs
                    this.renderForgeTab(hunterId, container);
                    const chestTab = document.querySelector('#tab-chest');
                    if (chestTab) this.renderChestTab(hunterId, chestTab);
                } else {
                    Helpers.showToast(result.message, 'error');
                }
            });
        });
    },

    /**
     * Render weapons list for forge
     * @param {string} hunterId - Hunter ID
     * @param {Array} weapons - Weapons array
     * @returns {string} HTML string
     */
    renderWeaponsList(hunterId, weapons) {
        return weapons.map(weapon => {
            const isCrafted = Hunters.isItemCrafted(hunterId, weapon.id, 'weapon');
            const canCraft = Hunters.hasRequiredMaterials(hunterId, weapon.recipe);

            return `
                <div class="craftable-item ${isCrafted ? 'crafted' : ''}">
                    <div class="item-header">
                        <span class="item-name">${Helpers.escapeHtml(weapon.name)}</span>
                        ${isCrafted ? '<span class="crafted-badge">✓ Crafté</span>' : ''}
                    </div>
                    <div class="item-stats">
                        <span>Type: ${weapon.type}</span>
                        <span>ATK: ${weapon.attack}</span>
                    </div>
                    <div class="item-recipe">
                        <strong>Recette:</strong>
                        ${weapon.recipe.map(req => {
                            const material = State.getGameData().materials.find(m => m.id === req.materialId);
                            const hunter = Hunters.getById(hunterId);
                            const owned = hunter.chest.find(m => m.id === req.materialId);
                            const hasEnough = owned && owned.quantity >= req.quantity;

                            return `<span class="recipe-item ${hasEnough ? 'has-enough' : 'missing'}">
                                ${material.name} ${owned?.quantity || 0}/${req.quantity}
                            </span>`;
                        }).join('')}
                    </div>
                    ${!isCrafted ? `
                        <button class="btn btn-sm btn-primary"
                                data-action="craft"
                                data-item-id="${weapon.id}"
                                data-item-type="weapon"
                                ${!canCraft ? 'disabled' : ''}>
                            ${canCraft ? 'Crafter' : 'Matériaux insuffisants'}
                        </button>
                    ` : ''}
                </div>
            `;
        }).join('');
    },

    /**
     * Render armors list for forge
     * @param {string} hunterId - Hunter ID
     * @param {Array} armors - Armors array
     * @returns {string} HTML string
     */
    renderArmorsList(hunterId, armors) {
        // Group by slot
        const slots = {
            head: armors.filter(a => a.slot === 'head'),
            chest: armors.filter(a => a.slot === 'chest'),
            arms: armors.filter(a => a.slot === 'arms'),
            waist: armors.filter(a => a.slot === 'waist'),
            legs: armors.filter(a => a.slot === 'legs')
        };

        let html = '';

        Object.entries(slots).forEach(([slot, pieces]) => {
            const slotNames = {
                head: 'Casques',
                chest: 'Armures',
                arms: 'Brassards',
                waist: 'Ceintures',
                legs: 'Jambières'
            };

            html += `<h5>${slotNames[slot]}</h5>`;

            pieces.forEach(armor => {
                const isCrafted = Hunters.isItemCrafted(hunterId, armor.id, 'armor');
                const canCraft = Hunters.hasRequiredMaterials(hunterId, armor.recipe);

                html += `
                    <div class="craftable-item ${isCrafted ? 'crafted' : ''}">
                        <div class="item-header">
                            <span class="item-name">${Helpers.escapeHtml(armor.name)}</span>
                            ${isCrafted ? '<span class="crafted-badge">✓ Crafté</span>' : ''}
                        </div>
                        <div class="item-stats">
                            <span>DEF: ${armor.defense}</span>
                        </div>
                        <div class="item-recipe">
                            <strong>Recette:</strong>
                            ${armor.recipe.map(req => {
                                const material = State.getGameData().materials.find(m => m.id === req.materialId);
                                const hunter = Hunters.getById(hunterId);
                                const owned = hunter.chest.find(m => m.id === req.materialId);
                                const hasEnough = owned && owned.quantity >= req.quantity;

                                return `<span class="recipe-item ${hasEnough ? 'has-enough' : 'missing'}">
                                    ${material.name} ${owned?.quantity || 0}/${req.quantity}
                                </span>`;
                            }).join('')}
                        </div>
                        ${!isCrafted ? `
                            <button class="btn btn-sm btn-primary"
                                    data-action="craft"
                                    data-item-id="${armor.id}"
                                    data-item-type="armor"
                                    ${!canCraft ? 'disabled' : ''}>
                                ${canCraft ? 'Crafter' : 'Matériaux insuffisants'}
                            </button>
                        ` : ''}
                    </div>
                `;
            });
        });

        return html;
    },

    /**
     * Render equipment tab content
     * @param {string} hunterId - Hunter ID
     * @param {HTMLElement} container - Container element
     */
    renderEquipmentTab(hunterId, container) {
        const hunter = Hunters.getById(hunterId);
        const totalStats = Hunters.calculateTotalStats(hunterId);
        const skills = Hunters.calculateSkills(hunterId);

        const html = `
            <div class="equipment-view">
                <h4>Équipement actuel</h4>
                <div class="current-equipment">
                    <div class="equipment-slot">
                        <strong>Arme:</strong> ${hunter.equipment.weapon?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Tête:</strong> ${hunter.equipment.armor.head?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Torse:</strong> ${hunter.equipment.armor.chest?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Bras:</strong> ${hunter.equipment.armor.arms?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Taille:</strong> ${hunter.equipment.armor.waist?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Jambes:</strong> ${hunter.equipment.armor.legs?.name || 'Aucune'}
                    </div>
                    <div class="equipment-slot">
                        <strong>Charme:</strong> ${hunter.equipment.charm?.name || 'Aucun'}
                    </div>
                </div>

                <h4>Statistiques totales</h4>
                <div class="stats-detail">
                    <div class="stat-row">
                        <span>Points de vie:</span>
                        <span>${totalStats.health}</span>
                    </div>
                    <div class="stat-row">
                        <span>Endurance:</span>
                        <span>${totalStats.stamina}</span>
                    </div>
                    <div class="stat-row">
                        <span>Attaque:</span>
                        <span>${totalStats.attack}</span>
                    </div>
                    <div class="stat-row">
                        <span>Défense:</span>
                        <span>${totalStats.defense}</span>
                    </div>
                    <div class="stat-row">
                        <span>Affinité:</span>
                        <span>${totalStats.affinity}%</span>
                    </div>
                </div>

                ${skills.length > 0 ? `
                    <h4>Compétences actives</h4>
                    <div class="skills-list">
                        ${skills.map(skill => `
                            <div class="skill-item">
                                <span class="skill-name">${Helpers.escapeHtml(skill.name)}</span>
                                <span class="skill-level">Niveau ${skill.level}/${skill.maxLevel}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <button class="btn btn-primary" onclick="Components.showHunterForm('${hunterId}'); Modal.close();">
                    Modifier l'équipement
                </button>
            </div>
        `;

        container.innerHTML = html;
    },

    /**
     * Render chest view as full page
     * @param {string} hunterId - Hunter ID
     * @param {HTMLElement} container - Container element
     */
    renderChestView(hunterId, container) {
        const hunter = Hunters.getById(hunterId);
        const gameData = State.getGameData();

        let html = '<div class="chest-view-page"><h2>Coffre de matériaux</h2><div class="materials-list">';

        // Show all available materials with quantities
        gameData.materials.forEach(material => {
            const owned = hunter.chest.find(m => m.id === material.id);
            const quantity = owned ? owned.quantity : 0;

            html += `
                <div class="material-item" data-material-id="${material.id}">
                    <div class="material-info">
                        <h4>${Helpers.escapeHtml(material.name)}</h4>
                        <span class="material-rarity rarity-${material.rarity}">⭐ ${material.rarity}</span>
                    </div>
                    <span class="material-quantity">${quantity}</span>
                    <div class="material-controls">
                        <button data-action="decrement" ${quantity === 0 ? 'disabled' : ''}>−</button>
                        <button data-action="increment">+</button>
                    </div>
                </div>
            `;
        });

        html += '</div></div>';
        container.innerHTML = html;

        // Add event listeners for increment/decrement
        container.querySelectorAll('.material-item').forEach(item => {
            const materialId = item.dataset.materialId;
            const incrementBtn = item.querySelector('[data-action="increment"]');
            const decrementBtn = item.querySelector('[data-action="decrement"]');
            const quantitySpan = item.querySelector('.material-quantity');

            incrementBtn.addEventListener('click', () => {
                Hunters.incrementChestMaterial(hunterId, materialId, 1);
                const newQty = parseInt(quantitySpan.textContent) + 1;
                quantitySpan.textContent = newQty;
                decrementBtn.disabled = false;
            });

            decrementBtn.addEventListener('click', () => {
                Hunters.decrementChestMaterial(hunterId, materialId, 1);
                const newQty = Math.max(0, parseInt(quantitySpan.textContent) - 1);
                quantitySpan.textContent = newQty;
                if (newQty === 0) decrementBtn.disabled = true;
            });
        });
    },

    /**
     * Render forge view as full page
     * @param {string} hunterId - Hunter ID
     * @param {HTMLElement} container - Container element
     */
    renderForgeView(hunterId, container) {
        const gameData = State.getGameData();

        let html = `
            <div class="forge-view-page">
                <h2>Forge</h2>
                <div class="forge-section">
                    <h3>Armes</h3>
                    <div class="forge-items">
                        ${this.renderWeaponsList(hunterId, gameData.weapons)}
                    </div>
                </div>
                <div class="forge-section">
                    <h3>Armures</h3>
                    <div class="forge-items">
                        ${this.renderArmorsList(hunterId, gameData.armor)}
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Add craft button listeners
        container.querySelectorAll('[data-action="craft"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.dataset.itemId;
                const itemType = btn.dataset.itemType;

                const result = Hunters.craftItem(hunterId, itemId, itemType);

                if (result.success) {
                    Helpers.showToast(result.message, 'success');
                    // Refresh forge view
                    this.renderForgeView(hunterId, container);
                    // If we're on the same hunter, also update chest if it's visible
                    if (Navigation.getCurrentSubTab() === 'chest') {
                        const chestContainer = document.getElementById(`view-hunter-${hunterId}`);
                        if (chestContainer) this.renderChestView(hunterId, chestContainer);
                    }
                } else {
                    Helpers.showToast(result.message, 'error');
                }
            });
        });
    },

    /**
     * Render equipment view as full page
     * @param {string} hunterId - Hunter ID
     * @param {HTMLElement} container - Container element
     */
    renderEquipmentView(hunterId, container) {
        const hunter = Hunters.getById(hunterId);
        const totalStats = Hunters.calculateTotalStats(hunterId);
        const skills = Hunters.calculateSkills(hunterId);

        const html = `
            <div class="equipment-view-page">
                <h2>Équipement</h2>

                <div class="equipment-section">
                    <h3>Équipement actuel</h3>
                    <div class="current-equipment">
                        <div class="equipment-slot">
                            <strong>Arme:</strong>
                            <span class="${hunter.equipment.weapon ? 'item-name' : 'empty'}">
                                ${hunter.equipment.weapon?.name || 'Aucune'}
                            </span>
                        </div>
                        <div class="equipment-slot">
                            <strong>Tête:</strong>
                            <span class="${hunter.equipment.armor.head ? 'item-name' : 'empty'}">
                                ${hunter.equipment.armor.head?.name || 'Aucune'}
                            </span>
                        </div>
                        <div class="equipment-slot">
                            <strong>Torse:</strong>
                            <span class="${hunter.equipment.armor.chest ? 'item-name' : 'empty'}">
                                ${hunter.equipment.armor.chest?.name || 'Aucune'}
                            </span>
                        </div>
                        <div class="equipment-slot">
                            <strong>Bras:</strong>
                            <span class="${hunter.equipment.armor.arms ? 'item-name' : 'empty'}">
                                ${hunter.equipment.armor.arms?.name || 'Aucune'}
                            </span>
                        </div>
                        <div class="equipment-slot">
                            <strong>Taille:</strong>
                            <span class="${hunter.equipment.armor.waist ? 'item-name' : 'empty'}">
                                ${hunter.equipment.armor.waist?.name || 'Aucune'}
                            </span>
                        </div>
                        <div class="equipment-slot">
                            <strong>Jambes:</strong>
                            <span class="${hunter.equipment.armor.legs ? 'item-name' : 'empty'}">
                                ${hunter.equipment.armor.legs?.name || 'Aucune'}
                            </span>
                        </div>
                        <div class="equipment-slot">
                            <strong>Charme:</strong>
                            <span class="${hunter.equipment.charm ? 'item-name' : 'empty'}">
                                ${hunter.equipment.charm?.name || 'Aucun'}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="equipment-section">
                    <h3>Statistiques totales</h3>
                    <div class="total-stats">
                        <div class="stat-box">
                            <strong>Santé</strong>
                            <div class="stat-value">${totalStats.health}</div>
                        </div>
                        <div class="stat-box">
                            <strong>Endurance</strong>
                            <div class="stat-value">${totalStats.stamina}</div>
                        </div>
                        <div class="stat-box">
                            <strong>Attaque</strong>
                            <div class="stat-value">${totalStats.attack}</div>
                        </div>
                        <div class="stat-box">
                            <strong>Défense</strong>
                            <div class="stat-value">${totalStats.defense}</div>
                        </div>
                        <div class="stat-box">
                            <strong>Affinité</strong>
                            <div class="stat-value">${totalStats.affinity}%</div>
                        </div>
                    </div>
                </div>

                ${skills.length > 0 ? `
                    <div class="equipment-section">
                        <h3>Compétences actives</h3>
                        <div class="active-skills">
                            ${skills.map(skill => `
                                <div class="skill-item">
                                    <span class="skill-name">${Helpers.escapeHtml(skill.name)}</span>
                                    <span class="skill-level">Niveau ${skill.level}/${skill.maxLevel}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="equipment-actions">
                    <button class="btn btn-primary" id="btn-edit-equipment">
                        ⚙️ Modifier l'équipement
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Add edit equipment button listener
        const editBtn = container.querySelector('#btn-edit-equipment');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                this.showHunterForm(hunterId);
            });
        }
    },

    initialized: true
};
