document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    });

    // Set initial theme based on checkbox status
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});
