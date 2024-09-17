const carouselContainerWidow = document.querySelector('.carousel-container-widow');
const carouselItemsWidow = document.querySelectorAll('.carousel-item-widow');
const totalItemsWidow = carouselItemsWidow.length;
let indexWidow = 0;

function moveToNextSlideWidow() {
  indexWidow = (indexWidow + 1) % totalItemsWidow;
  const offsetWidow = -indexWidow * 100; 
  carouselContainerWidow.style.transform = `translateX(${offsetWidow}%)`;
}


setInterval(moveToNextSlideWidow, 3000);
