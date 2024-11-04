// Generate dots
const dotsContainer = document.querySelector('.dots-container');
const inputWidth = document.querySelector('.tracking-input').offsetWidth;
const numberOfDots = 40; // Adjust this number to change dot density

for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dotsContainer.appendChild(dot);
}

// Handle checkbox and loading animation
const checkbox = document.querySelector('input[type="checkbox"]');
const submitBtn = document.querySelector('.submit-btn');
const trackingInput = document.querySelector('.tracking-input');
const loadingOverlay = document.querySelector('.loading-overlay');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        loadingOverlay.style.display = 'flex';
        
        // Disable interaction during loading
        checkbox.disabled = true;
        trackingInput.disabled = true;
        submitBtn.disabled = true;

        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            
            // Re-enable interaction
            checkbox.disabled = false;
            trackingInput.disabled = false;
            submitBtn.disabled = false;
            
            updateSubmitButton();
        }, 5000);
    }
});

function updateSubmitButton() {
    submitBtn.style.opacity = checkbox.checked && trackingInput.value ? '1' : '0.5';
    submitBtn.style.cursor = checkbox.checked && trackingInput.value ? 'pointer' : 'not-allowed';
}

trackingInput.addEventListener('input', function() {
    let value = trackingInput.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (value.length > 4) value = value.slice(0, 4) + '-' + value.slice(4);
    if (value.length > 9) value = value.slice(0, 9) + '-' + value.slice(9);
    trackingInput.value = value;
    updateSubmitButton();
});

// Initial state
updateSubmitButton();