const carouselContainerWidow = document.querySelector('.carousel-container-widow');
const carouselItemsWidow = document.querySelectorAll('.carousel-item-widow');
const totalItemsWidow = carouselItemsWidow.length;
let indexWidow = 0;

function moveToNextSlideWidow() {
  indexWidow = (indexWidow + 1) % totalItemsWidow;
  const offsetWidow = -indexWidow * 100; // Desplaza el contenedor según el índice
  carouselContainerWidow.style.transform = `translateX(${offsetWidow}%)`;
}

// Configura el deslizado automático cada 3 segundos
setInterval(moveToNextSlideWidow, 3000);
