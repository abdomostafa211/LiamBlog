const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Default theme = dark
body.classList.add('dark-mode');

// Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    // Override default if user prefers light
    body.classList.remove('dark-mode');
}

darkModeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
