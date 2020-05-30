let burgerMenu = document.querySelector('.nav-menu-containerBurger');
let header = document.querySelector('.header');
let headerNavigation = document.querySelector('.header-navigation');
let active = true;

burgerMenu.addEventListener('click', () => {
    if(active == true){
        console.log("Ouvert")
        header.classList.add('header-active')
        headerNavigation.classList.remove('header-navigation')
        headerNavigation.classList.add('header-navigation-active')
        active = false;
    } else {
        console.log("Fermé")
        header.classList.remove('header-active')
        headerNavigation.classList.add('header-navigation')
        headerNavigation.classList.remove('header-navigation-active')
        active = true; 
    }
});