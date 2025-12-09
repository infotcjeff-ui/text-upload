// Theme Management
function getCurrentTheme() {
    // Check localStorage first (user preference)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    
    // If no saved preference, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    
    // Default to light mode
    return 'light';
}

// Function to set the theme
function setTheme(theme) {
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('.theme-icon');
        
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            if (themeIcon) themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    }
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme on page load
function initTheme() {
    const theme = getCurrentTheme();
    setTheme(theme);
}

// Listen for system theme changes (if no manual preference is set)
function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
        // Only apply system preference if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Contact Form Handling
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Simulate form submission (in a real app, you'd send this to a server)
            console.log('Form submitted:', data);
            
            // Show success message
            const submitButton = contactForm.querySelector('.btn-submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Message Sent! ✓';
            submitButton.style.backgroundColor = '#4CAF50';
            submitButton.disabled = true;
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 3000);
        });
    }
}

// Initialize everything when DOM is loaded
function init() {
    // Initialize theme
    initTheme();
    watchSystemTheme();
    
    // Setup theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Setup contact form
    handleContactForm();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

