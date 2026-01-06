/**
 * Hunter View
 * Hunter management interface
 */

const HunterView = {
    gridContainer: null,
    searchInput: null,
    searchTerm: '',

    /**
     * Initialize hunter view
     */
    init() {
        this.gridContainer = Helpers.getElement('hunters-grid');
        this.searchInput = Helpers.getElement('search-hunters');

        // Set up search
        if (this.searchInput) {
            this.searchInput.addEventListener('input', Helpers.debounce((e) => {
                this.searchTerm = e.target.value;
                this.render();
            }, 300));
        }

        // Listen for hunter changes
        Events.on(EVENT_NAMES.HUNTER_CREATED, () => this.render());
        Events.on(EVENT_NAMES.HUNTER_UPDATED, () => this.render());
        Events.on(EVENT_NAMES.HUNTER_DELETED, () => this.render());

        // Initial render
        this.render();

        this.initialized = true;
        console.log('Hunter view initialized');
    },

    /**
     * Render hunter list
     */
    render() {
        if (!this.gridContainer) return;

        let hunters = Hunters.getAll();

        // Apply search filter
        if (this.searchTerm) {
            hunters = Helpers.filterBySearch(hunters, this.searchTerm, ['name']);
        }

        // Clear grid
        this.gridContainer.innerHTML = '';

        // Show empty state or hunters
        if (hunters.length === 0) {
            this.showEmptyState();
        } else {
            hunters.forEach(hunter => {
                const card = Components.createHunterCard(hunter);
                this.gridContainer.appendChild(card);
            });
        }
    },

    /**
     * Show empty state
     */
    showEmptyState() {
        const message = this.searchTerm
            ? `<div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h3>Aucun résultat</h3>
                <p>Aucun chasseur ne correspond à votre recherche</p>
               </div>`
            : `<div class="empty-state">
                <div class="empty-icon">🎯</div>
                <h3>Aucun chasseur</h3>
                <p>Créez votre premier chasseur pour commencer l'aventure</p>
               </div>`;

        this.gridContainer.innerHTML = message;
    },

    /**
     * Show create hunter form
     */
    showCreateForm() {
        Components.showHunterForm();
    }
};
