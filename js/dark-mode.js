// Dark mode functionality using Tailwind
(function() {
    const THEME_KEY = 'theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    
    console.log('Dark mode script loaded');
    
    // Apply theme using Tailwind's dark mode
    function applyTheme(theme) {
        const html = document.documentElement;
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        
        console.log('Applying theme:', theme);
        
        if (theme === DARK_THEME) {
            html.classList.add('dark');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        } else {
            html.classList.remove('dark');
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        }
    }
    
    // Get saved theme or default to light
    function getSavedTheme() {
        try {
            return localStorage.getItem(THEME_KEY) || LIGHT_THEME;
        } catch (e) {
            console.warn('LocalStorage not available, using default theme');
            return LIGHT_THEME;
        }
    }
    
    // Save theme to localStorage
    function saveTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            console.warn('Could not save theme to localStorage');
        }
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = getSavedTheme();
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        console.log('Toggling from', currentTheme, 'to', newTheme);
        saveTheme(newTheme);
        applyTheme(newTheme);
    }
    
    // Initialize theme
    function initTheme() {
        const savedTheme = getSavedTheme();
        console.log('Initializing with theme:', savedTheme);
        applyTheme(savedTheme);
        
        // Add event listener to toggle button
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            console.log('Dark mode toggle found, adding event listener');
            darkModeToggle.addEventListener('click', toggleTheme);
        } else {
            console.warn('Dark mode toggle button not found');
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();