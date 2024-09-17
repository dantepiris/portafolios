document.addEventListener("DOMContentLoaded", () => {
    let idProducto = localStorage.getItem("id_producto");


    function actualizarContadorCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let contador = carrito.length;
        document.querySelector('#cart-count').textContent = contador;
    }


    function mostrarNotificacion(mensaje) {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');

  
        notificationText.textContent = mensaje;

    
        notification.classList.remove('hidden');
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 3000);
    }

    actualizarContadorCarrito();

    if (idProducto) {
        console.log("ID Producto en la vista de producto:", idProducto);

        fetch("json/informacion.json")
            .then((response) => response.json())
            .then((data) => {
                let producto = data.cosmeticos
                    .flatMap(cosmetico => cosmetico.menu_producto || [])
                    .find(producto => producto.id_producto === idProducto);

                console.log(producto);

                if (producto) {
                    document.querySelector("#producto-nombre").textContent = producto.name_producto;
                    document.querySelector("#producto-marca").textContent = producto.marca_producto;
                    document.querySelector("#producto-descripcion").textContent = producto.descripcion_producto;
                    document.querySelector("#producto-anterior").textContent = producto.precio_anterior_producto;
                    document.querySelector("#producto-precio").textContent = producto.precio_producto;

                    const carouselImages = document.getElementById("carousel_images");

           
                    carouselImages.innerHTML = `
                        <img src="${producto.img_producto_1}" alt="${producto.name_producto}">
                        <img src="${producto.img_producto_2}" alt="${producto.name_producto}">
                        <img src="${producto.img_producto_3}" alt="${producto.name_producto}">
                    `;

      
                    let currentIndex = 0;
                    const images = document.querySelectorAll('.carousel-images img');
                    const totalImages = images.length;

       
                    function showImage(index) {
                        images.forEach(img => img.style.display = 'none'); 
                        images[index].style.display = 'block';
                    }

                 
                    function nextImage() {
                        currentIndex = (currentIndex + 1) % totalImages; 
                        showImage(currentIndex);
                    }

                  
                    function prevImage() {
                        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                        showImage(currentIndex);
                    }

                 
                    document.querySelector('#nextBtn').addEventListener('click', nextImage);
                    document.querySelector('#prevBtn').addEventListener('click', prevImage);

                    showImage(0);

                 
                    document.querySelector('#comprar').addEventListener('click', () => {
                       
                        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

                       
                        let productoEnCarrito = carrito.find(item => item.id_producto === producto.id_producto);

                        if (productoEnCarrito) {
                        
                            mostrarNotificacion(`Producto ya está agregado al carrito.`);
                        } else {
                     
                            carrito.push(producto);

                        
                            localStorage.setItem('carrito', JSON.stringify(carrito));

                            actualizarContadorCarrito();

                          
                            mostrarNotificacion(`${producto.name_producto} agregado al carrito.`);
                        }
                    });

                } else {
                    console.error("Producto no encontrado.");
                }
            })
            .catch((error) => {
                console.error("Error al cargar los datos del producto:", error);
            });
    }
});
