// Avail Wellness Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive elements
    initializeTooltips();
    initializeMobileMenu();
    
    // Add smooth transitions
    document.body.classList.add('loaded');
});

function initializeTooltips() {
    // Add tooltips to metric cards and other elements
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.getAttribute('data-tooltip');
    
    document.body.appendChild(tooltip);
    
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

function initializeMobileMenu() {
    // Mobile menu functionality would go here
    // For demo purposes, we'll keep it simple
}

// Chart animations and interactions
function animateMetricCards() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Supplement tracking functionality
function toggleSupplement(supplementId) {
    const supplementElement = document.getElementById(supplementId);
    if (supplementElement) {
        supplementElement.classList.toggle('completed');
        updateAdherenceScore();
    }
}

function updateAdherenceScore() {
    // This would calculate and update the adherence percentage
    // For demo purposes, we'll use static data
    console.log('Adherence score updated');
}

// Lab result trend animations
function animateLabTrends() {
    // This would animate the trend indicators and charts
    // Chart.js handles most animations automatically
}

// Export functions for use in other pages
window.AvailPortal = {
    toggleSupplement,
    updateAdherenceScore,
    animateLabTrends
};