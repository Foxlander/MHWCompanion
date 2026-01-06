/**
 * Helper Utilities
 * Common utility functions used throughout the application
 */

const Helpers = {
    /**
     * Debounce function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Format a date to a readable string
     * @param {string|Date} date - Date to format
     * @returns {string} Formatted date string
     */
    formatDate(date) {
        if (!date) return '';
        const d = new Date(date);
        return d.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    /**
     * Format a timestamp to a short date string
     * @param {string|Date} date - Date to format
     * @returns {string} Short formatted date string
     */
    formatDateShort(date) {
        if (!date) return '';
        const d = new Date(date);
        return d.toLocaleDateString('fr-FR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        });
    },

    /**
     * Escape HTML to prevent XSS
     * @param {string} str - String to escape
     * @returns {string} Escaped string
     */
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    /**
     * Get element by ID safely
     * @param {string} id - Element ID
     * @returns {HTMLElement|null} Element or null
     */
    getElement(id) {
        return document.getElementById(id);
    },

    /**
     * Get elements by selector
     * @param {string} selector - CSS selector
     * @param {HTMLElement} parent - Parent element (default: document)
     * @returns {NodeList} List of elements
     */
    getElements(selector, parent = document) {
        return parent.querySelectorAll(selector);
    },

    /**
     * Add class to element
     * @param {HTMLElement} element - Element
     * @param {string} className - Class name
     */
    addClass(element, className) {
        if (element) element.classList.add(className);
    },

    /**
     * Remove class from element
     * @param {HTMLElement} element - Element
     * @param {string} className - Class name
     */
    removeClass(element, className) {
        if (element) element.classList.remove(className);
    },

    /**
     * Toggle class on element
     * @param {HTMLElement} element - Element
     * @param {string} className - Class name
     */
    toggleClass(element, className) {
        if (element) element.classList.toggle(className);
    },

    /**
     * Check if element has class
     * @param {HTMLElement} element - Element
     * @param {string} className - Class name
     * @returns {boolean} True if has class
     */
    hasClass(element, className) {
        return element ? element.classList.contains(className) : false;
    },

    /**
     * Deep clone an object
     * @param {Object} obj - Object to clone
     * @returns {Object} Cloned object
     */
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    /**
     * Filter array by search term
     * @param {Array} array - Array to filter
     * @param {string} searchTerm - Search term
     * @param {string[]} keys - Keys to search in
     * @returns {Array} Filtered array
     */
    filterBySearch(array, searchTerm, keys) {
        if (!searchTerm) return array;
        const term = searchTerm.toLowerCase();
        return array.filter(item => {
            return keys.some(key => {
                const value = this.getNestedProperty(item, key);
                return value && value.toString().toLowerCase().includes(term);
            });
        });
    },

    /**
     * Get nested property from object using dot notation
     * @param {Object} obj - Object
     * @param {string} path - Property path (e.g., 'equipment.weapon.name')
     * @returns {*} Property value
     */
    getNestedProperty(obj, path) {
        return path.split('.').reduce((current, prop) => {
            return current && current[prop] !== undefined ? current[prop] : null;
        }, obj);
    },

    /**
     * Sort array by property
     * @param {Array} array - Array to sort
     * @param {string} key - Property key to sort by
     * @param {string} order - 'asc' or 'desc'
     * @returns {Array} Sorted array
     */
    sortBy(array, key, order = 'asc') {
        return [...array].sort((a, b) => {
            const aVal = this.getNestedProperty(a, key);
            const bVal = this.getNestedProperty(b, key);

            if (aVal < bVal) return order === 'asc' ? -1 : 1;
            if (aVal > bVal) return order === 'asc' ? 1 : -1;
            return 0;
        });
    },

    /**
     * Show toast notification
     * @param {string} message - Message to display
     * @param {string} type - Type: 'success', 'error', 'warning', 'info'
     * @param {number} duration - Duration in ms (default: 3000)
     */
    showToast(message, type = 'info', duration = 3000) {
        const container = this.getElement('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span class="toast-message">${this.escapeHtml(message)}</span>`;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    /**
     * Calculate total stats from equipment
     * @param {Object} equipment - Equipment object
     * @returns {Object} Total stats
     */
    calculateTotalStats(equipment) {
        const stats = {
            attack: 0,
            defense: 0,
            health: 0,
            stamina: 0,
            affinity: 0
        };

        // Add weapon stats
        if (equipment.weapon) {
            stats.attack += equipment.weapon.attack || 0;
            stats.affinity += equipment.weapon.affinity || 0;
        }

        // Add armor stats
        if (equipment.armor) {
            Object.values(equipment.armor).forEach(piece => {
                if (piece) {
                    stats.defense += piece.defense || 0;
                    stats.health += piece.health || 0;
                    stats.stamina += piece.stamina || 0;
                }
            });
        }

        return stats;
    },

    /**
     * Aggregate skills from equipment
     * @param {Object} equipment - Equipment object
     * @returns {Array} Array of skills with levels
     */
    aggregateSkills(equipment) {
        const skillMap = new Map();

        // Helper to add skills from an item
        const addSkills = (item) => {
            if (!item || !item.skills) return;
            item.skills.forEach(skill => {
                if (skillMap.has(skill.id)) {
                    const existing = skillMap.get(skill.id);
                    existing.level = Math.min(
                        existing.level + (skill.level || 1),
                        skill.maxLevel || 7
                    );
                } else {
                    skillMap.set(skill.id, { ...skill });
                }
            });
        };

        // Add weapon skills
        addSkills(equipment.weapon);

        // Add armor skills
        if (equipment.armor) {
            Object.values(equipment.armor).forEach(addSkills);
        }

        // Add charm skills
        addSkills(equipment.charm);

        return Array.from(skillMap.values());
    }
};
