/**
 * Modal Manager
 * Handles modal dialogs
 */

const Modal = {
    container: null,
    dialog: null,
    titleElement: null,
    bodyElement: null,
    footerElement: null,
    closeButton: null,
    currentModal: null,

    /**
     * Initialize modal system
     */
    init() {
        this.container = Helpers.getElement('modal-container');
        this.dialog = this.container?.querySelector('.modal-dialog');
        this.titleElement = Helpers.getElement('modal-title');
        this.bodyElement = Helpers.getElement('modal-body');
        this.footerElement = Helpers.getElement('modal-footer');
        this.closeButton = Helpers.getElement('modal-close');

        // Set up close button
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.close());
        }

        // Close on overlay click
        if (this.container) {
            this.container.addEventListener('click', (e) => {
                if (e.target === this.container) {
                    this.close();
                }
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });

        this.initialized = true;
        console.log('Modal system initialized');
    },

    /**
     * Open a modal
     * @param {Object} config - Modal configuration
     * @param {string} config.title - Modal title
     * @param {string|HTMLElement} config.body - Modal body content
     * @param {Array} config.actions - Array of action buttons
     * @param {Function} config.onClose - Callback on close
     */
    open(config) {
        if (!this.initialized) this.init();

        // Set title
        if (this.titleElement) {
            this.titleElement.textContent = config.title || '';
        }

        // Set body
        if (this.bodyElement) {
            if (typeof config.body === 'string') {
                this.bodyElement.innerHTML = config.body;
            } else if (config.body instanceof HTMLElement) {
                this.bodyElement.innerHTML = '';
                this.bodyElement.appendChild(config.body);
            }
        }

        // Set footer actions
        if (this.footerElement) {
            this.footerElement.innerHTML = '';

            if (config.actions && config.actions.length > 0) {
                config.actions.forEach(action => {
                    const button = document.createElement('button');
                    button.className = `btn ${action.class || 'btn-secondary'}`;
                    button.textContent = action.label;

                    if (action.onClick) {
                        button.addEventListener('click', () => {
                            action.onClick();
                            if (action.closeOnClick !== false) {
                                this.close();
                            }
                        });
                    }

                    this.footerElement.appendChild(button);
                });
            }
        }

        // Store current modal config
        this.currentModal = config;

        // Show modal
        if (this.container) {
            Helpers.addClass(this.container, 'active');
            this.container.setAttribute('aria-hidden', 'false');

            // Focus first input if exists
            setTimeout(() => {
                const firstInput = this.bodyElement?.querySelector('input, textarea, select');
                if (firstInput) firstInput.focus();
            }, 100);
        }

        Events.emit(EVENT_NAMES.MODAL_OPENED, config);
    },

    /**
     * Close the modal
     */
    close() {
        if (this.container) {
            Helpers.removeClass(this.container, 'active');
            this.container.setAttribute('aria-hidden', 'true');
        }

        // Call onClose callback if provided
        if (this.currentModal?.onClose) {
            this.currentModal.onClose();
        }

        // Clear current modal
        this.currentModal = null;

        Events.emit(EVENT_NAMES.MODAL_CLOSED);
    },

    /**
     * Check if modal is open
     * @returns {boolean} True if open
     */
    isOpen() {
        return this.container && Helpers.hasClass(this.container, 'active');
    },

    /**
     * Show a confirmation dialog
     * @param {string} message - Confirmation message
     * @param {Function} onConfirm - Callback on confirm
     * @param {Function} onCancel - Callback on cancel
     */
    confirm(message, onConfirm, onCancel) {
        this.open({
            title: 'Confirmation',
            body: `<p>${Helpers.escapeHtml(message)}</p>`,
            actions: [
                {
                    label: 'Annuler',
                    class: 'btn-secondary',
                    onClick: () => {
                        if (onCancel) onCancel();
                    }
                },
                {
                    label: 'Confirmer',
                    class: 'btn-primary',
                    onClick: () => {
                        if (onConfirm) onConfirm();
                    }
                }
            ]
        });
    },

    /**
     * Show an alert dialog
     * @param {string} message - Alert message
     * @param {string} title - Alert title
     */
    alert(message, title = 'Information') {
        this.open({
            title: title,
            body: `<p>${Helpers.escapeHtml(message)}</p>`,
            actions: [
                {
                    label: 'OK',
                    class: 'btn-primary',
                    onClick: () => {}
                }
            ]
        });
    }
};
