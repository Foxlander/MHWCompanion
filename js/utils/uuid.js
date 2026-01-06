/**
 * UUID Generator
 * Generates unique identifiers for hunters, quests, and other entities
 */

const UUID = {
    /**
     * Generates a UUID v4 compliant unique identifier
     * @returns {string} UUID string
     */
    generate() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    /**
     * Generates a short ID (8 characters) for simpler use cases
     * @returns {string} Short ID string
     */
    short() {
        return Math.random().toString(36).substring(2, 10);
    }
};
