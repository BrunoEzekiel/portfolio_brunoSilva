// JS para menu hambúrguer e carrossel
// Menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
function handleResize() {
    if(window.innerWidth <= 995){
        menuToggle.style.display = 'block';
        nav.classList.remove('active');
    }else{
        menuToggle.style.display = 'none';
        nav.classList.remove('active');
    }
}
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

// Carrossel do portfólio
// Carrossel removido: cards agora são exibidos em lista vertical, sem navegação JS.
