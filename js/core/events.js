/**
 * Event Bus
 * Pub-Sub pattern for decoupled component communication
 */

const Events = {
    // Store event listeners
    listeners: new Map(),

    /**
     * Subscribe to an event
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     * @returns {Function} Unsubscribe function
     */
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }

        this.listeners.get(event).push(callback);

        // Return unsubscribe function
        return () => this.off(event, callback);
    },

    /**
     * Unsubscribe from an event
     * @param {string} event - Event name
     * @param {Function} callback - Callback function to remove
     */
    off(event, callback) {
        if (!this.listeners.has(event)) return;

        const callbacks = this.listeners.get(event);
        const index = callbacks.indexOf(callback);

        if (index !== -1) {
            callbacks.splice(index, 1);
        }

        // Clean up if no more listeners
        if (callbacks.length === 0) {
            this.listeners.delete(event);
        }
    },

    /**
     * Publish an event
     * @param {string} event - Event name
     * @param {*} data - Data to pass to listeners
     */
    emit(event, data) {
        if (!this.listeners.has(event)) return;

        this.listeners.get(event).forEach(callback => {
            try {
                callback(data);
            } catch (error) {
                console.error(`Error in event listener for "${event}":`, error);
            }
        });
    },

    /**
     * Subscribe to an event once
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    once(event, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(event, onceCallback);
        };

        this.on(event, onceCallback);
    },

    /**
     * Clear all listeners for an event
     * @param {string} event - Event name (if not provided, clears all)
     */
    clear(event) {
        if (event) {
            this.listeners.delete(event);
        } else {
            this.listeners.clear();
        }
    }
};

// Define application event names
const EVENT_NAMES = {
    // State events
    STATE_CHANGED: 'state:changed',
    HUNTERS_UPDATED: 'hunters:updated',
    MONSTERS_UPDATED: 'monsters:updated',
    QUESTS_UPDATED: 'quests:updated',

    // Hunter events
    HUNTER_CREATED: 'hunter:created',
    HUNTER_UPDATED: 'hunter:updated',
    HUNTER_DELETED: 'hunter:deleted',

    // Monster events
    MONSTER_SELECTED: 'monster:selected',

    // Quest events
    QUEST_STARTED: 'quest:started',
    QUEST_COMPLETED: 'quest:completed',
    QUEST_FAILED: 'quest:failed',

    // UI events
    VIEW_CHANGED: 'view:changed',
    MODAL_OPENED: 'modal:opened',
    MODAL_CLOSED: 'modal:closed',

    // Data events
    DATA_IMPORTED: 'data:imported',
    DATA_EXPORTED: 'data:exported',
    DATA_LOADED: 'data:loaded'
};
