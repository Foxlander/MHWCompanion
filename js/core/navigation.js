/**
 * Navigation Manager
 * Handles hunter-based tab navigation with sub-tabs
 */

const Navigation = {
    // Current active hunter and sub-tab
    currentHunter: null,
    currentSubTab: 'chest',
    currentView: null, // 'hunter' or 'quests'

    /**
     * Initialize navigation
     */
    init() {
        this.renderMainTabs();
        this.setupSubTabs();

        // Listen to hunter changes to update tabs
        Events.on(EVENT_NAMES.HUNTER_CREATED, () => this.renderMainTabs());
        Events.on(EVENT_NAMES.HUNTER_UPDATED, () => this.renderMainTabs());
        Events.on(EVENT_NAMES.HUNTER_DELETED, () => this.renderMainTabs());

        console.log('Navigation initialized');
    },

    /**
     * Render main tabs (hunters + quests)
     */
    renderMainTabs() {
        const mainTabsContainer = document.getElementById('main-tabs');
        if (!mainTabsContainer) return;

        const hunters = Hunters.getAll();
        let html = '';

        // Create tab for each hunter
        hunters.forEach((hunter, index) => {
            const isActive = this.currentHunter === hunter.id ||
                            (this.currentHunter === null && index === 0);

            html += `
                <button class="tab-btn ${isActive ? 'active' : ''}"
                        data-hunter-id="${hunter.id}"
                        role="tab">
                    <span class="tab-icon">🎯</span>
                    <span class="tab-label">${Helpers.escapeHtml(hunter.name)}</span>
                </button>
            `;
        });

        // Add quests tab
        const questsActive = this.currentView === 'quests';
        html += `
            <button class="tab-btn ${questsActive ? 'active' : ''}"
                    data-view="quests"
                    role="tab">
                <span class="tab-icon">📜</span>
                <span class="tab-label">Quêtes</span>
            </button>
        `;

        mainTabsContainer.innerHTML = html;

        // Add click listeners
        mainTabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.dataset.hunterId) {
                    this.switchToHunter(btn.dataset.hunterId);
                } else if (btn.dataset.view === 'quests') {
                    this.switchToQuests();
                }
            });
        });

        // If we have hunters and no current selection, select first hunter
        if (hunters.length > 0 && this.currentHunter === null && this.currentView === null) {
            this.switchToHunter(hunters[0].id);
        } else if (hunters.length === 0) {
            // No hunters, hide sub-tabs and show empty state
            this.showEmptyState();
        } else if (this.currentHunter) {
            // Refresh current hunter view
            this.renderHunterContent(this.currentHunter, this.currentSubTab);
        } else if (this.currentView === 'quests') {
            this.renderQuestsContent();
        }
    },

    /**
     * Setup sub-tabs (Chest/Forge/Equipment)
     */
    setupSubTabs() {
        const subTabsContainer = document.getElementById('sub-tabs');
        if (!subTabsContainer) return;

        subTabsContainer.querySelectorAll('.sub-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const subTab = btn.dataset.subtab;
                this.switchSubTab(subTab);
            });
        });
    },

    /**
     * Switch to a hunter
     * @param {string} hunterId - Hunter ID
     */
    switchToHunter(hunterId) {
        const hunter = Hunters.getById(hunterId);
        if (!hunter) return;

        // Update state
        this.currentHunter = hunterId;
        this.currentView = 'hunter';

        // Update main tabs
        document.querySelectorAll('#main-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.hunterId === hunterId) {
                btn.classList.add('active');
            }
        });

        // Show sub-tabs
        const subTabsContainer = document.getElementById('sub-tabs');
        if (subTabsContainer) {
            subTabsContainer.style.display = 'flex';
        }

        // Hide quests view
        const questsView = document.getElementById('view-quests');
        if (questsView) {
            questsView.style.display = 'none';
        }

        // Render hunter content
        this.renderHunterContent(hunterId, this.currentSubTab);

        // Update document title
        document.title = `${hunter.name} - MHW Companion`;

        // Emit event
        Events.emit(EVENT_NAMES.VIEW_CHANGED, {
            type: 'hunter',
            hunterId: hunterId
        });
    },

    /**
     * Switch to quests view
     */
    switchToQuests() {
        // Update state
        this.currentHunter = null;
        this.currentView = 'quests';

        // Update main tabs
        document.querySelectorAll('#main-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === 'quests') {
                btn.classList.add('active');
            }
        });

        // Hide sub-tabs
        const subTabsContainer = document.getElementById('sub-tabs');
        if (subTabsContainer) {
            subTabsContainer.style.display = 'none';
        }

        // Hide all hunter views
        document.querySelectorAll('[id^="view-hunter-"]').forEach(view => {
            view.style.display = 'none';
        });

        // Show quests view
        const questsView = document.getElementById('view-quests');
        if (questsView) {
            questsView.style.display = 'block';
        }

        // Render quests content
        this.renderQuestsContent();

        // Update document title
        document.title = 'Quêtes - MHW Companion';

        // Emit event
        Events.emit(EVENT_NAMES.VIEW_CHANGED, {
            type: 'quests'
        });
    },

    /**
     * Switch sub-tab
     * @param {string} subTab - Sub-tab name (chest, forge, equipment)
     */
    switchSubTab(subTab) {
        if (!this.currentHunter) return;

        this.currentSubTab = subTab;

        // Update sub-tabs active state
        document.querySelectorAll('#sub-tabs .sub-tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.subtab === subTab) {
                btn.classList.add('active');
            }
        });

        // Render hunter content for this sub-tab
        this.renderHunterContent(this.currentHunter, subTab);
    },

    /**
     * Render hunter content based on sub-tab
     * @param {string} hunterId - Hunter ID
     * @param {string} subTab - Sub-tab name
     */
    renderHunterContent(hunterId, subTab) {
        const hunter = Hunters.getById(hunterId);
        if (!hunter) return;

        // Get or create hunter view container
        let viewContainer = document.getElementById(`view-hunter-${hunterId}`);
        if (!viewContainer) {
            viewContainer = document.createElement('section');
            viewContainer.id = `view-hunter-${hunterId}`;
            viewContainer.className = 'view-container hunter-view';
            document.querySelector('.app-main').appendChild(viewContainer);
        }

        // Hide all hunter views
        document.querySelectorAll('[id^="view-hunter-"]').forEach(view => {
            view.style.display = 'none';
        });

        // Show current hunter view
        viewContainer.style.display = 'block';

        // Render content based on sub-tab
        switch (subTab) {
            case 'chest':
                Components.renderChestView(hunterId, viewContainer);
                break;
            case 'forge':
                Components.renderForgeView(hunterId, viewContainer);
                break;
            case 'equipment':
                Components.renderEquipmentView(hunterId, viewContainer);
                break;
        }
    },

    /**
     * Render quests content
     */
    renderQuestsContent() {
        const questsContent = document.getElementById('quests-content');
        if (!questsContent) return;

        // For now, just show placeholder
        questsContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📜</div>
                <h3>Quêtes</h3>
                <p>Cette section sera développée prochainement</p>
            </div>
        `;
    },

    /**
     * Show empty state when no hunters exist
     */
    showEmptyState() {
        // Hide sub-tabs
        const subTabsContainer = document.getElementById('sub-tabs');
        if (subTabsContainer) {
            subTabsContainer.style.display = 'none';
        }

        // Clear main content
        const mainContent = document.querySelector('.app-main');
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="empty-state" style="margin: 2rem;">
                    <div class="empty-icon">🎯</div>
                    <h3>Aucun chasseur</h3>
                    <p>Créez votre premier chasseur pour commencer</p>
                </div>
            `;
        }

        this.currentHunter = null;
        this.currentView = null;
    },

    /**
     * Get current hunter ID
     * @returns {string|null} Current hunter ID
     */
    getCurrentHunter() {
        return this.currentHunter;
    },

    /**
     * Get current sub-tab
     * @returns {string} Current sub-tab
     */
    getCurrentSubTab() {
        return this.currentSubTab;
    },

    /**
     * Get current view type
     * @returns {string|null} 'hunter' or 'quests'
     */
    getCurrentView() {
        return this.currentView;
    }
};
