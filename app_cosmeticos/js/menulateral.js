document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const body = document.body;

    menuIcon.addEventListener('click', () => {
        body.classList.add('menu-open', 'no-scroll');
    });

    closeBtn.addEventListener('click', () => {
        body.classList.remove('menu-open', 'no-scroll');
    });

    overlay.addEventListener('click', () => {
        body.classList.remove('menu-open', 'no-scroll');
    });
});
