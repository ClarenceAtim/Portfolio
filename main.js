const hamberger = document.getElementById('hamberger');
const menu = document.getElementById('menu');

const mobileMenu = () => {
    menu.classList.toggle('active');
    hamberger.classList.toggle('close');
}

hamberger.addEventListener('click', mobileMenu)
menu.addEventListener('click', mobileMenu);