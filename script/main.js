var burgerButton = document.querySelector('#mobile-menu-button');
var overlay = document.querySelector('#mobile-menu'); 
var body = document.querySelector('body');
var mobileMenu = document.querySelector('#mobile_menu');
var bgkMenu =document.querySelector('#bgk-menu');

burgerButton.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('clicked');
  overlay .classList.toggle('oppened');
  body.classList.toggle('no-scrol');
  bgkMenu.classList.toggle('overlay-bgk');
});