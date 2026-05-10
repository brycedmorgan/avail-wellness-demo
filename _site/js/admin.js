// Admin Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAdminFeatures();
});

function initializeAdminFeatures() {
    // Initialize patient table interactions
    initializePatientTable();
    
    // Initialize dashboard widgets
    initializeDashboardWidgets();
    
    // Initialize notification system
    initializeNotifications();
}

function initializePatientTable() {
    // Patient row click to view details
    const patientRows = document.querySelectorAll('.patient-table tbody tr');
    
    patientRows.forEach(row => {
        const viewBtn = row.querySelector('.action-btn');
        if (viewBtn && viewBtn.textContent === 'View') {
            viewBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const patientName = row.querySelector('.patient-name').textContent;
                const patientId = row.querySelector('.patient-id').textContent.split(' •')[0];
                
                // In a real app, this would navigate to patient detail page
                showPatientModal(patientId, patientName);
            });
        }
    });
    
    // Message button functionality
    const messageBtns = document.querySelectorAll('.action-btn');
    messageBtns.forEach(btn => {
        if (btn.textContent === 'Message') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const patientName = btn.closest('tr').querySelector('.patient-name').textContent;
                showMessageModal(patientName);
            });
        }
    });
}

function showPatientModal(patientId, patientName) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Patient Details: ${patientName}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="patient-summary">
                    <h4>Quick Actions</h4>
                    <div class="quick-actions">
                        <button class="btn btn-primary">View Patient Portal</button>
                        <button class="btn btn-outline">Schedule Appointment</button>
                        <button class="btn btn-outline">Send Message</button>
                        <button class="btn btn-outline">Add Notes</button>
                    </div>
                    
                    <h4>Recent Activity</h4>
                    <div class="recent-activity">
                        <div class="activity-item">
                            <span class="activity-date">Mar 25, 2026</span>
                            <span class="activity-desc">Lab results reviewed - Testosterone optimized</span>
                        </div>
                        <div class="activity-item">
                            <span class="activity-date">Jan 5, 2026</span>
                            <span class="activity-desc">Pellet insertion completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function showMessageModal(patientName) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Message ${patientName}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="message-form">
                    <div class="form-group">
                        <label for="message-subject">Subject</label>
                        <input type="text" id="message-subject" placeholder="Lab results available">
                    </div>
                    <div class="form-group">
                        <label for="message-body">Message</label>
                        <textarea id="message-body" rows="4" placeholder="Hi ${patientName}, your latest lab results are now available in your patient portal..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button class="btn btn-primary">Send Message</button>
                        <button class="btn btn-outline">Save Draft</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function initializeDashboardWidgets() {
    // Revenue card click for detailed view
    const revenueCard = document.querySelector('.revenue-card');
    if (revenueCard) {
        revenueCard.addEventListener('click', function() {
            // Would navigate to detailed revenue analytics
            console.log('Navigate to revenue analytics');
        });
    }
    
    // Real-time updates simulation
    simulateRealTimeUpdates();
}

function simulateRealTimeUpdates() {
    // Auto-fire demo toasts disabled — they overlapped the sticky header during screenshares.
    // Toast infrastructure (showNotification) stays available for user-triggered events.
}

function initializeNotifications() {
    // Create notification container if it doesn't exist
    if (!document.querySelector('.notification-container')) {
        const container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
}

function showNotification(message, type = 'info') {
    const container = document.querySelector('.notification-container');
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const ICONS = {
        success: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        warning: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        info:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };
    const icon = ICONS[type] || ICONS.info;

    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Dismiss">&times;</button>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
    
    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });
}

// Export admin functions
window.AdminPortal = {
    showPatientModal,
    showMessageModal,
    showNotification
};