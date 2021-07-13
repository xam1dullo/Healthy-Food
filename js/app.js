let elButtonMenuNavbarToggler = document.querySelector('.hamburger');
let elNavbarTogglerMenu = document.querySelector('.navbar-toggler-menu-mini');
elButtonMenuNavbarToggler.addEventListener('click',()=>{
	elNavbarTogglerMenu.classList.toggle('navbar-toggler-show');
})