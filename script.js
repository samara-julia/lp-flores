function showMenu() {
    let menuMobile = document.querySelector('.menu-mobile');
    let menuIcon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIcon.src = "assets/icons8-menu-50.png";
    } else {
        menuMobile.classList.add('open');
        menuIcon.src = "assets/icons8-x-48.png";
    }
}
