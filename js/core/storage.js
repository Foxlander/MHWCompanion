/**
 * Storage Manager
 * Handles data persistence via localStorage and JSON import/export
 */

const Storage = {
    // LocalStorage key
    STORAGE_KEY: 'mhw_companion_data',

    /**
     * Save data to localStorage
     * @param {Object} data - Data to save
     * @returns {boolean} Success status
     */
    save(data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(this.STORAGE_KEY, serialized);
            return true;
        } catch (error) {
            if (error.name === 'QuotaExceededError') {
                console.error('localStorage quota exceeded');
                Helpers.showToast('Espace de stockage insuffisant. Utilisez Export pour sauvegarder vos données.', 'error', 5000);
            } else {
                console.error('Error saving to localStorage:', error);
                Helpers.showToast('Erreur lors de la sauvegarde', 'error');
            }
            return false;
        }
    },

    /**
     * Load data from localStorage
     * @returns {Object|null} Loaded data or null
     */
    load() {
        try {
            const serialized = localStorage.getItem(this.STORAGE_KEY);
            return serialized ? JSON.parse(serialized) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            Helpers.showToast('Erreur lors du chargement des données', 'error');
            return null;
        }
    },

    /**
     * Clear localStorage
     */
    clear() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            console.log('localStorage cleared');
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    },

    /**
     * Export data to JSON file
     * @param {Object} data - Data to export
     * @param {string} filename - Custom filename (optional)
     */
    exportToFile(data = null, filename = null) {
        try {
            // Use provided data or load from storage
            const exportData = data || this.load() || State.getState();

            // Generate filename with timestamp
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
            const defaultFilename = `mhw-companion-${timestamp}.json`;
            const finalFilename = filename || defaultFilename;

            // Create JSON blob
            const json = JSON.stringify(exportData, null, 2);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            // Create download link and trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = finalFilename;
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            Helpers.showToast('Données exportées avec succès', 'success');
            Events.emit(EVENT_NAMES.DATA_EXPORTED, exportData);

            console.log('Data exported to file:', finalFilename);
        } catch (error) {
            console.error('Error exporting data:', error);
            Helpers.showToast('Erreur lors de l\'export', 'error');
        }
    },

    /**
     * Import data from JSON file
     * @param {File} file - File object from input
     * @param {boolean} merge - Whether to merge with existing data
     * @returns {Promise<boolean>} Success status
     */
    importFromFile(file, merge = false) {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject(new Error('No file provided'));
                return;
            }

            // Check file type
            if (!file.name.endsWith('.json')) {
                Helpers.showToast('Le fichier doit être au format JSON', 'error');
                reject(new Error('Invalid file type'));
                return;
            }

            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const json = e.target.result;
                    const data = JSON.parse(json);

                    // Validate data structure
                    if (!this.validateData(data)) {
                        Helpers.showToast('Format de données invalide', 'error');
                        reject(new Error('Invalid data format'));
                        return;
                    }

                    // Import to state
                    const success = State.importData(data, merge);

                    if (success) {
                        Helpers.showToast('Données importées avec succès', 'success');
                        resolve(true);
                    } else {
                        Helpers.showToast('Erreur lors de l\'import', 'error');
                        reject(new Error('Import failed'));
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    Helpers.showToast('Fichier JSON invalide', 'error');
                    reject(error);
                }
            };

            reader.onerror = (error) => {
                console.error('Error reading file:', error);
                Helpers.showToast('Erreur lors de la lecture du fichier', 'error');
                reject(error);
            };

            reader.readAsText(file);
        });
    },

    /**
     * Validate imported data structure
     * @param {Object} data - Data to validate
     * @returns {boolean} Valid status
     */
    validateData(data) {
        // Check for required top-level properties
        const requiredKeys = ['hunters', 'monsters', 'quests'];
        const hasRequiredKeys = requiredKeys.every(key =>
            data.hasOwnProperty(key) && Array.isArray(data[key])
        );

        if (!hasRequiredKeys) {
            console.error('Missing required data structure');
            return false;
        }

        // Optional: Check for game data structure
        if (data.gameData) {
            const gameDataKeys = ['weapons', 'armor', 'items', 'materials', 'skills'];
            const hasGameData = gameDataKeys.every(key =>
                data.gameData.hasOwnProperty(key) && Array.isArray(data.gameData[key])
            );

            if (!hasGameData) {
                console.warn('Invalid game data structure, skipping game data');
                data.gameData = {
                    weapons: [],
                    armor: [],
                    items: [],
                    materials: [],
                    skills: []
                };
            }
        }

        return true;
    },

    /**
     * Get storage size in bytes
     * @returns {number} Size in bytes
     */
    getSize() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? new Blob([data]).size : 0;
        } catch (error) {
            console.error('Error getting storage size:', error);
            return 0;
        }
    },

    /**
     * Get storage size in human-readable format
     * @returns {string} Formatted size
     */
    getSizeFormatted() {
        const bytes = this.getSize();
        const kb = bytes / 1024;
        const mb = kb / 1024;

        if (mb >= 1) {
            return `${mb.toFixed(2)} MB`;
        } else if (kb >= 1) {
            return `${kb.toFixed(2)} KB`;
        } else {
            return `${bytes} bytes`;
        }
    },

    /**
     * Check if localStorage is available
     * @returns {boolean} Availability status
     */
    isAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    }
};
