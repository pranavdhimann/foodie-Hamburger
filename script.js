const hamburgerMenu= document.querySelector('.hamburger-menu');
const headerContent= document.querySelector('.header-content');
const closeIcon= document.querySelector('.close-icon');
const goToTop= document.querySelector('.go-to-top');
const nav=document.querySelector('nav');

hamburgerMenu.addEventListener('click',(e)=>{
    headerContent.classList.add('menu-open')
    e.stopPropagation()
})

nav.addEventListener('click',(e)=>{
    e.stopPropagation();
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
   
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
   
})

goToTop.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})

