const header = document.querySelector('.header');
const menu = document.querySelector('.icon-mobile-nav[name="grid-outline"]');
const close = document.querySelector('.icon-mobile-nav[name="close-outline"]');
const year = document.querySelector('.year');
const links = document.querySelectorAll('.main-nav-link');

const currDate = new Date().getFullYear();
year.textContent = currDate


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

const clickHandler = () => {
    header.classList.remove('nav-open');
    menu.style.display = 'block';
    close.style.display = 'none';
}


menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
links.forEach(link => {
    console.log(link);
    link.addEventListener('click', clickHandler);
});