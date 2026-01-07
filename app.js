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

            // Create default hunters if none exist
            this.initializeDefaultHunters();

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
     * Initialize default hunters if none exist
     */
    initializeDefaultHunters() {
        const hunters = Hunters.getAll();

        // Only create default hunters if there are none
        if (hunters.length === 0) {
            console.log('Creating default hunters...');

            // Create Hunter 1
            Hunters.create({
                name: 'Chasseur 1',
                hunterRank: 1,
                stats: {
                    health: 100,
                    stamina: 100,
                    attack: 10,
                    defense: 10,
                    affinity: 0
                }
            });

            // Create Hunter 2
            Hunters.create({
                name: 'Chasseur 2',
                hunterRank: 1,
                stats: {
                    health: 100,
                    stamina: 100,
                    attack: 10,
                    defense: 10,
                    affinity: 0
                }
            });

            console.log('Default hunters created');
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
        const btnExport = Helpers.getElement('btn-export');
        const btnSettings = Helpers.getElement('btn-settings');

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
        const html = `
            <div class="settings-modal">
                <h3>Paramètres</h3>

                <div class="settings-section">
                    <h4>Données</h4>
                    <p class="settings-description">
                        Réinitialiser complètement l'application et supprimer toutes les données sauvegardées.
                    </p>
                    <button class="btn btn-danger" id="btn-reset-all">
                        Réinitialiser toutes les données
                    </button>
                </div>

                <div class="settings-section">
                    <h4>À propos</h4>
                    <p class="settings-description">
                        MHW Board Game Companion v1.0.0<br>
                        Application de gestion pour Monster Hunter World Board Game
                    </p>
                </div>
            </div>
        `;

        Modal.open({
            title: 'Paramètres',
            body: html,
            actions: [
                {
                    label: 'Fermer',
                    class: 'btn-secondary',
                    onClick: () => Modal.close()
                }
            ]
        });

        // Add event listener for reset button after a short delay to ensure DOM is ready
        setTimeout(() => {
            const resetBtn = document.getElementById('btn-reset-all');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    Modal.close();
                    this.handleResetAll();
                });
            }
        }, 100);
    },

    /**
     * Handle complete data reset
     */
    handleResetAll() {
        const confirmed = confirm(
            'ATTENTION : Cette action va supprimer TOUTES les données !\n\n' +
            'Cela inclut :\n' +
            '- Tous les chasseurs\n' +
            '- Tous les équipements craftés\n' +
            '- Tous les matériaux collectés\n' +
            '- Toutes les quêtes\n\n' +
            'Cette action est IRRÉVERSIBLE.\n\n' +
            'Voulez-vous vraiment continuer ?'
        );

        if (confirmed) {
            try {
                // Clear all localStorage
                localStorage.clear();

                // Show success message
                Helpers.showToast('Toutes les données ont été supprimées', 'success', 3000);

                // Reload page to reinitialize
                setTimeout(() => {
                    location.reload();
                }, 1500);

            } catch (error) {
                console.error('Error resetting data:', error);
                Helpers.showToast('Erreur lors de la réinitialisation', 'error');
            }
        }
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
