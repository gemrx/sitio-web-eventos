const navItems = document.querySelectorAll('.nav__item');

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        const anchorTag = navItem.querySelector('a');
        if (anchorTag) {
            anchorTag.click();
        }
    });
});
