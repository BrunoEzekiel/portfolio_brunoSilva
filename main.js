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
const carousel = document.querySelector('.portfolio-cards');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
let currentIndex = 0;
const cardWidth = 350 + 32; // largura máxima do card + gap
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
if(nextBtn && prevBtn && carousel){
    nextBtn.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    window.addEventListener('resize', () => {
        updateCarousel();
    });
}
