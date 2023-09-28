let menuImg = document.querySelector('.menu-img');
let closeImg = document.querySelector('.close-img');
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('nav a');

function showMenu() {
    nav.classList.add('active');       // Mostrar el menú
    menuImg.style.display = 'none';    // Ocultar el menú de hamburguesa
    closeImg.style.display = 'block';  // Mostrar el icono de cerrar
}

function hideMenu() {
    nav.classList.remove('active');    // Ocultar el menú
    menuImg.style.display = 'block';   // Mostrar el menú de hamburguesa
    closeImg.style.display = 'none';   // Ocultar el icono de cerrar
}

menuImg.addEventListener('click', showMenu);
closeImg.addEventListener('click', hideMenu);
navLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});





