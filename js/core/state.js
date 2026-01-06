/**
 * State Management
 * Centralized reactive state management for the application
 */

const State = {
    // Application version for data migration
    VERSION: '1.0.0',

    // Application data
    data: {
        version: '1.0.0',
        hunters: [],
        monsters: [],
        quests: [],
        gameData: {
            weapons: [],
            armor: [],
            items: [],
            materials: [],
            skills: []
        },
        settings: {
            theme: 'dark',
            language: 'fr'
        },
        lastModified: null
    },

    // Flag to prevent storage save during initialization
    initializing: false,

    /**
     * Initialize state from storage
     */
    init() {
        this.initializing = true;

        // Try to load from storage
        const savedData = Storage.load();

        if (savedData) {
            // Merge saved data with defaults
            this.data = {
                ...this.data,
                ...savedData,
                version: this.VERSION
            };

            console.log('State loaded from storage');
            Events.emit(EVENT_NAMES.DATA_LOADED, this.data);
        } else {
            console.log('State initialized with defaults');
        }

        this.initializing = false;
    },

    /**
     * Get entire state
     * @returns {Object} Application state
     */
    getState() {
        return Helpers.deepClone(this.data);
    },

    /**
     * Get a specific part of state
     * @param {string} key - State key
     * @returns {*} State value
     */
    get(key) {
        return Helpers.deepClone(this.data[key]);
    },

    /**
     * Set a specific part of state
     * @param {string} key - State key
     * @param {*} value - New value
     */
    set(key, value) {
        this.data[key] = value;
        this.data.lastModified = new Date().toISOString();

        // Emit specific event
        const eventName = `${key}:updated`;
        Events.emit(eventName, value);

        // Emit general state changed event
        Events.emit(EVENT_NAMES.STATE_CHANGED, { key, value });

        // Save to storage (unless initializing)
        if (!this.initializing) {
            Storage.save(this.data);
        }
    },

    /**
     * Update state by merging with existing data
     * @param {string} key - State key
     * @param {Object} updates - Updates to merge
     */
    update(key, updates) {
        if (typeof this.data[key] === 'object' && !Array.isArray(this.data[key])) {
            this.set(key, { ...this.data[key], ...updates });
        } else {
            this.set(key, updates);
        }
    },

    /**
     * Reset state to defaults
     * @param {boolean} keepGameData - Whether to keep game data
     */
    reset(keepGameData = false) {
        const gameData = keepGameData ? this.data.gameData : {
            weapons: [],
            armor: [],
            items: [],
            materials: [],
            skills: []
        };

        this.data = {
            version: this.VERSION,
            hunters: [],
            monsters: [],
            quests: [],
            gameData,
            settings: {
                theme: 'dark',
                language: 'fr'
            },
            lastModified: new Date().toISOString()
        };

        Storage.save(this.data);
        Events.emit(EVENT_NAMES.STATE_CHANGED, { reset: true });

        console.log('State reset');
    },

    /**
     * Import state from external data
     * @param {Object} importedData - Data to import
     * @param {boolean} merge - Whether to merge with existing data
     * @returns {boolean} Success status
     */
    importData(importedData, merge = false) {
        try {
            if (merge) {
                // Merge arrays (concatenate and remove duplicates by ID)
                this.data.hunters = this.mergeArraysById(
                    this.data.hunters,
                    importedData.hunters || []
                );
                this.data.monsters = this.mergeArraysById(
                    this.data.monsters,
                    importedData.monsters || []
                );
                this.data.quests = this.mergeArraysById(
                    this.data.quests,
                    importedData.quests || []
                );

                // Merge game data
                if (importedData.gameData) {
                    this.data.gameData = {
                        weapons: this.mergeArraysById(
                            this.data.gameData.weapons,
                            importedData.gameData.weapons || []
                        ),
                        armor: this.mergeArraysById(
                            this.data.gameData.armor,
                            importedData.gameData.armor || []
                        ),
                        items: this.mergeArraysById(
                            this.data.gameData.items,
                            importedData.gameData.items || []
                        ),
                        materials: this.mergeArraysById(
                            this.data.gameData.materials,
                            importedData.gameData.materials || []
                        ),
                        skills: this.mergeArraysById(
                            this.data.gameData.skills,
                            importedData.gameData.skills || []
                        )
                    };
                }
            } else {
                // Replace entire state
                this.data = {
                    ...importedData,
                    version: this.VERSION,
                    lastModified: new Date().toISOString()
                };
            }

            Storage.save(this.data);
            Events.emit(EVENT_NAMES.DATA_IMPORTED, this.data);

            // Emit update events for each data type
            Events.emit(EVENT_NAMES.HUNTERS_UPDATED, this.data.hunters);
            Events.emit(EVENT_NAMES.MONSTERS_UPDATED, this.data.monsters);
            Events.emit(EVENT_NAMES.QUESTS_UPDATED, this.data.quests);

            console.log('Data imported successfully');
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    },

    /**
     * Merge two arrays by ID, preferring items from the second array
     * @param {Array} arr1 - First array
     * @param {Array} arr2 - Second array
     * @returns {Array} Merged array
     */
    mergeArraysById(arr1, arr2) {
        const map = new Map();

        // Add items from first array
        arr1.forEach(item => {
            if (item.id) map.set(item.id, item);
        });

        // Add/override with items from second array
        arr2.forEach(item => {
            if (item.id) map.set(item.id, item);
        });

        return Array.from(map.values());
    },

    /**
     * Get hunters
     * @returns {Array} Hunters array
     */
    getHunters() {
        return Helpers.deepClone(this.data.hunters);
    },

    /**
     * Get monsters
     * @returns {Array} Monsters array
     */
    getMonsters() {
        return Helpers.deepClone(this.data.monsters);
    },

    /**
     * Get quests
     * @returns {Array} Quests array
     */
    getQuests() {
        return Helpers.deepClone(this.data.quests);
    },

    /**
     * Get game data
     * @returns {Object} Game data object
     */
    getGameData() {
        return Helpers.deepClone(this.data.gameData);
    },

    /**
     * Get settings
     * @returns {Object} Settings object
     */
    getSettings() {
        return Helpers.deepClone(this.data.settings);
    }
};
