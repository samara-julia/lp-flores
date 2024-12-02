function showMenu() {
    let menuMobile = document.querySelector('.menu-mobile');
    let menuIcon = document.querySelector('.icon');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); // esconde o menu
        menuIcon.src = "assets/icons8-menu-50.png"; // icone do menu
    } else {
        menuMobile.classList.add('open'); // mostra o menu
        menuIcon.src = "assets/icons8-x-48.png"; // icone de fechar
    }
}
