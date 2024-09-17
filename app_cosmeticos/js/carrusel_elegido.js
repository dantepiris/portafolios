const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselSlides.length - 1; 
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselSlides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

