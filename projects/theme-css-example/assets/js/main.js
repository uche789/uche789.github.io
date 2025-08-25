(function() {
    const themeSelectEl = document.getElementById('theme-selection');

    themeSelectEl.addEventListener('change', function() {
        const selectedTheme = themeSelectEl.value;
        const getElements = document.querySelectorAll(`link[id=css-theme]`);

        getElements.forEach(link => link.remove());

        const mainThemeLink = document.createElement('link');
        mainThemeLink.rel = 'stylesheet';
        mainThemeLink.type = 'text/css';
        mainThemeLink.id = 'css-theme';
        mainThemeLink.href = `assets/css/${selectedTheme}/index.css`;
        document.head.appendChild(mainThemeLink);
    });
})()