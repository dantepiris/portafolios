document.addEventListener('DOMContentLoaded', () => {
    fetch('json/informacion.json')  // Actualiza la ruta aquí
        .then(response => response.json())
        .then(data => {
            const productos = data.product_club;
            const container = document.getElementById('product-container');
            
            container.innerHTML = '';

            const productosPorGrupo = 4;
            const totalGrupos = Math.ceil(productos.length / productosPorGrupo);
            
            // Crea grupos de productos
            for (let i = 0; i < totalGrupos; i++) {
                const productGroup = document.createElement('div');
                productGroup.classList.add('product-group');
                
                const start = i * productosPorGrupo;
                const end = Math.min(start + productosPorGrupo, productos.length);
                
                for (let j = start; j < end; j++) {
                    const producto = productos[j];
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card-ingreso');

                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container-ingreso');
                    
                    const newInLabel = document.createElement('span');
                    newInLabel.classList.add('new-in');
                    newInLabel.textContent = producto.nuevo_club;
                    
                    const productImage = document.createElement('img');
                    productImage.src = producto.img_nuevo;
                    productImage.alt = 'Producto';
                    
                    imageContainer.appendChild(newInLabel);
                    imageContainer.appendChild(productImage);
                    
                    const productName = document.createElement('h3');
                    productName.classList.add('product-name-ingreso');
                    productName.textContent = producto.name_club;
                    
                    const productPoints = document.createElement('p');
                    productPoints.classList.add('product-points-ingreso');
                    productPoints.textContent = `${producto.puntos_club} puntos`;
                    
                    const addToCartButton = document.createElement('button');
                    addToCartButton.classList.add('add-to-cart-ingreso');
                    addToCartButton.textContent = 'Carrito';
                    
                    productCard.appendChild(imageContainer);
                    productCard.appendChild(productName);
                    productCard.appendChild(productPoints);
                    productCard.appendChild(addToCartButton);
                    
                    productGroup.appendChild(productCard);
                }
                
                container.appendChild(productGroup);
            }

            // Configura el carrusel
            const ingresoPapi = document.querySelector('.ingreso_papi');
            const prevButton = document.querySelector('.carousel-control.prevv');
            const nextButton = document.querySelector('.carousel-control.nextt');
            let currentIndex = 0;
            const totalGroups = container.children.length;
            const groupWidth = ingresoPapi.clientWidth; // Ancho del contenedor para cada grupo

            nextButton.addEventListener('click', () => {
                if (currentIndex < totalGroups - 1) {
                    currentIndex++;
                    ingresoPapi.style.transform = `translateX(-${groupWidth * currentIndex}px)`;
                }
            });

            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    ingresoPapi.style.transform = `translateX(-${groupWidth * currentIndex}px)`;
                }
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
