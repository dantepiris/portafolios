document.addEventListener("DOMContentLoaded", () => {
    let idProducto = localStorage.getItem("id_producto");

    // Función para actualizar el contador en el ícono del carrito
    function actualizarContadorCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let contador = carrito.length;
        document.querySelector('#cart-count').textContent = contador;
    }

    // Función para mostrar la tarjeta de notificación
    function mostrarNotificacion(mensaje) {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');

        // Establecer el mensaje de la notificación
        notificationText.textContent = mensaje;

        // Mostrar la notificación
        notification.classList.remove('hidden');
        notification.classList.add('show');

        // Ocultar la notificación después de 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 3000);
    }

    // Llama a la función para mostrar el contador actualizado al cargar la página
    actualizarContadorCarrito();

    if (idProducto) {
        console.log("ID Producto en la vista de producto:", idProducto);

        fetch("json/informacion.json")
            .then((response) => response.json())
            .then((data) => {
                let producto = data.cosmeticos
                    .flatMap(cosmetico => cosmetico.menu_producto || [])
                    .find(producto => producto.id_producto === idProducto);

                console.log(producto); // Verificar que se encuentra el producto

                if (producto) {
                    document.querySelector("#producto-nombre").textContent = producto.name_producto;
                    document.querySelector("#producto-marca").textContent = producto.marca_producto;
                    document.querySelector("#producto-descripcion").textContent = producto.descripcion_producto;
                    document.querySelector("#producto-anterior").textContent = producto.precio_anterior_producto;
                    document.querySelector("#producto-precio").textContent = producto.precio_producto;

                    const carouselImages = document.getElementById("carousel_images");

                    // Inserta las imágenes del producto
                    carouselImages.innerHTML = `
                        <img src="${producto.img_producto_1}" alt="${producto.name_producto}">
                        <img src="${producto.img_producto_2}" alt="${producto.name_producto}">
                        <img src="${producto.img_producto_3}" alt="${producto.name_producto}">
                    `;

                    // Manejo del carrusel
                    let currentIndex = 0;
                    const images = document.querySelectorAll('.carousel-images img');
                    const totalImages = images.length;

                    // Función para mostrar la imagen actual
                    function showImage(index) {
                        images.forEach(img => img.style.display = 'none'); // Oculta todas las imágenes
                        images[index].style.display = 'block'; // Muestra la imagen actual
                    }

                    // Función para la siguiente imagen
                    function nextImage() {
                        currentIndex = (currentIndex + 1) % totalImages; // Siguiente imagen
                        showImage(currentIndex);
                    }

                    // Función para la imagen anterior
                    function prevImage() {
                        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Imagen anterior
                        showImage(currentIndex);
                    }

                    // Controladores de los botones
                    document.querySelector('#nextBtn').addEventListener('click', nextImage);
                    document.querySelector('#prevBtn').addEventListener('click', prevImage);

                    // Muestra la primera imagen al cargar
                    showImage(0);

                    // Manejo del botón "Comprar"
                    document.querySelector('#comprar').addEventListener('click', () => {
                        // Obtener el carrito desde localStorage
                        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

                        // Verificar si el producto ya está en el carrito
                        let productoEnCarrito = carrito.find(item => item.id_producto === producto.id_producto);

                        if (productoEnCarrito) {
                            // Mostrar una notificación si el producto ya está en el carrito
                            mostrarNotificacion(`Producto ya está agregado al carrito.`);
                        } else {
                            // Agregar el producto al carrito
                            carrito.push(producto);

                            // Guardar el carrito actualizado en localStorage
                            localStorage.setItem('carrito', JSON.stringify(carrito));

                            // Actualizar el contador del carrito
                            actualizarContadorCarrito();

                            // Mostrar la notificación de que el producto fue agregado
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
