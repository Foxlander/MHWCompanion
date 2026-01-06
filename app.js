/**
 * MHW Board Game Companion
 * Main Application Controller
 *
 * Version: 1.0.0
 * Description: Local web application for Monster Hunter World board game
 */

const App = {
    // Application state
    initialized: false,

    /**
     * Initialize the application
     */
    init() {
        console.log('=== MHW Companion v1.0.0 ===');
        console.log('Initializing application...');

        try {
            // Check localStorage availability
            if (!Storage.isAvailable()) {
                console.warn('localStorage not available - using export/import only');
                Helpers.showToast('Stockage local non disponible. Utilisez Export/Import pour sauvegarder.', 'warning', 5000);
            }

            // Initialize state from storage
            State.init();

            // Initialize game data
            GameData.init();

            // Initialize modal system
            Modal.init();

            // Initialize navigation
            Navigation.init();

            // Initialize views
            HunterView.init();

            // Set up event listeners
            this.setupEventListeners();

            // Mark as initialized
            this.initialized = true;

            console.log('Application initialized successfully');
            Helpers.showToast('Application chargée', 'success', 2000);

        } catch (error) {
            console.error('Error initializing application:', error);
            Helpers.showToast('Erreur lors de l\'initialisation', 'error');
        }
    },

    /**
     * Set up global event listeners
     */
    setupEventListeners() {
        // Header actions
        const btnImport = Helpers.getElement('btn-import');
        const btnMenu = Helpers.getElement('btn-menu');

        if (btnImport) {
            btnImport.addEventListener('click', () => this.handleImport());
        }

        if (btnMenu) {
            btnMenu.addEventListener('click', () => this.handleMenu());
        }

        // Footer actions
        const btnNew = Helpers.getElement('btn-new');
        const btnExport = Helpers.getElement('btn-export');
        const btnSettings = Helpers.getElement('btn-settings');

        if (btnNew) {
            btnNew.addEventListener('click', () => this.handleNew());
            // Set "New" button text
            const textSpan = btnNew.querySelector('.btn-text');
            if (textSpan) {
                textSpan.textContent = 'Nouveau Chasseur';
            }
        }

        if (btnExport) {
            btnExport.addEventListener('click', () => this.handleExport());
        }

        if (btnSettings) {
            btnSettings.addEventListener('click', () => this.handleSettings());
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });

        console.log('Event listeners set up');
    },

    /**
     * Handle import button click
     */
    handleImport() {
        // Create file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';

        input.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                // Ask user if they want to merge or replace
                const merge = confirm(
                    'Voulez-vous fusionner avec les données existantes ?\n\n' +
                    'OK = Fusionner (conserver les données actuelles)\n' +
                    'Annuler = Remplacer (effacer les données actuelles)'
                );

                await Storage.importFromFile(file, merge);

                // Refresh views would happen here in later phases
                console.log('Data imported successfully');

            } catch (error) {
                console.error('Import error:', error);
            }
        });

        input.click();
    },

    /**
     * Handle export button click
     */
    handleExport() {
        try {
            Storage.exportToFile();
        } catch (error) {
            console.error('Export error:', error);
        }
    },

    /**
     * Handle new button click
     */
    handleNew() {
        // Always create a new hunter
        Components.showHunterForm();
    },

    /**
     * Handle menu button click
     */
    handleMenu() {
        console.log('Menu clicked (future feature)');
        Helpers.showToast('Menu disponible prochainement', 'info');
    },

    /**
     * Handle settings button click
     */
    handleSettings() {
        console.log('Settings clicked (Phase 5)');
        Helpers.showToast('Paramètres disponibles en Phase 5', 'info');
    },

    /**
     * Handle keyboard shortcuts
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleKeyboard(e) {
        // Ctrl/Cmd + S = Export
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            this.handleExport();
        }

        // Ctrl/Cmd + O = Import
        if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
            e.preventDefault();
            this.handleImport();
        }

        // Ctrl/Cmd + N = New Hunter
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            this.handleNew();
        }
    },

    /**
     * Reset application to defaults
     * @param {boolean} keepGameData - Whether to keep game data
     */
    reset(keepGameData = false) {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser l\'application ?')) {
            State.reset(keepGameData);
            Helpers.showToast('Application réinitialisée', 'success');
            console.log('Application reset');
        }
    }
};

// Initialize application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        App.init();
    });
} else {
    // DOM already loaded
    App.init();
}
