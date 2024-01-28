function toggleMenu() {
    let menuIcon = document.querySelector('.menu-icon');
    let navList = document.querySelector('.nav-list');

    menuIcon.classList.toggle('open');
    navList.classList.toggle('open');
}