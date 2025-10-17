// Dark mode functionality using Tailwind
(function() {
    const THEME_KEY = 'theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    
    // Get elements
    const darkModeToggle = document.getElementById('darkModeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || LIGHT_THEME;
    }
    
    // Save theme to localStorage
    function saveTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }
    
    // Apply theme using Tailwind's dark mode
    function applyTheme(theme) {
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
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = getSavedTheme();
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        saveTheme(newTheme);
        applyTheme(newTheme);
    }
    
    // Initialize theme on page load
    function initTheme() {
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
    }
    
    // Add event listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    // Initialize theme immediately
    initTheme();
    
    // Also initialize on DOMContentLoaded to handle any timing issues
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    }
})();