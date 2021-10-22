const hamburger = document.querySelector ('.header-right > a');
const navMenu = document.querySelector ('.header-right');
const closeMenu = document.querySelector ('.hamburger-menu > a');

hamburger.addEventListener('click', function() {
   console.log('abbiamo cliccato hamburger menu');

   const elementToShow = document.querySelector('.hamburger-menu');
   elementToShow.classList.add('active');
}); 

closeMenu.addEventListener('click', function()  {
   console.log('abbiamo chiuso la page');

   const Menuchiuso = document.querySelector('.hamburger-menu');
   Menuchiuso.classList.remove('active');
})