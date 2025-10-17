// Dark mode functionality using Tailwind
(function() {
    const THEME_KEY = 'theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    
    // Apply theme using Tailwind's dark mode
    function applyTheme(theme) {
        const html = document.documentElement;
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        
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
    
    // Get saved theme or default to system preference
    function getSavedTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved) return saved;
            
            // Auto-detect system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return DARK_THEME;
            }
            return LIGHT_THEME;
        } catch (e) {
            return LIGHT_THEME;
        }
    }
    
    // Save theme to localStorage
    function saveTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            // Silently fail if localStorage is not available
        }
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = getSavedTheme();
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        saveTheme(newTheme);
        applyTheme(newTheme);
    }
    
    // Initialize theme
    function initTheme() {
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        
        // Add event listener to toggle button
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleTheme);
        }
        
        // Listen for system theme changes (only if no manual preference is saved)
        if (window.matchMedia && !localStorage.getItem(THEME_KEY)) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', function(e) {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem(THEME_KEY)) {
                    applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
                }
            });
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();