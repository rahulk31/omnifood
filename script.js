const header = document.querySelector('.header');
const menu = document.querySelector('.icon-mobile-nav[name="grid-outline"]');
const close = document.querySelector('.icon-mobile-nav[name="close-outline"]');


const openMenu = () => {
    header.classList.add('nav-open');
    menu.style.display = 'none';
    close.style.display = 'block';
}
const closeMenu = () => {
    header.classList.remove('nav-open');
    menu.style.display = 'block';
    close.style.display = 'none';
}


menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);