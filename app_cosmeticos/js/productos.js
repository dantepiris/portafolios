
let idCosmeticoSeleccionado = localStorage.getItem("id_cosmetico");


let containerSeleccionado = document.querySelector("#productos_seleccionado");

if (idCosmeticoSeleccionado) {

    fetch("json/informacion.json")
        .then((response) => response.json())
        .then((data) => {
           
            let cosmeticoSeleccionado = data.cosmeticos.find(
                (cosmetico) => cosmetico.id_cosmetico === idCosmeticoSeleccionado
            );

         
            if (cosmeticoSeleccionado) {
    
                let tituloCosmetico = document.createElement("h2");
                tituloCosmetico.textContent = cosmeticoSeleccionado.name_cosmetico;
                tituloCosmetico.classList.add("titulo-cosmetico"); 
                containerSeleccionado.appendChild(tituloCosmetico);

        
                if (cosmeticoSeleccionado.menu_producto) {
                    cosmeticoSeleccionado.menu_producto.forEach((producto) => {
                        let cardProducto = document.createElement("div");

                        cardProducto.classList.add("product-card");

                        cardProducto.innerHTML = `
                            <img src="${producto.img_producto_miniatura}" alt="${producto.name_producto}" class="producto_image">
                            <div class="product-details">
                                <p class="marca_product">${producto.marca_producto}</p>
                                <p class="descripcion_product">${producto.descripcion_producto}</p>
                                <p class="precio_anterior">${producto.precio_anterior_producto}</p>
                                <p class="precio_producto">${producto.precio_producto}</p>
                                <button class="button_p" data-id="${producto.id_producto}">Comprar</button>
                            </div>
                        `;

                
                        containerSeleccionado.appendChild(cardProducto);
                    });

                    containerSeleccionado.querySelectorAll(".button_p").forEach((button) => {
                        button.addEventListener("click", (event) => {
                            let idProducto = event.target.getAttribute("data-id");
                            localStorage.setItem("id_producto", idProducto);
                            console.log("ID Producto seleccionado:", idProducto);
                            window.location.href = "producto_muestra.html";
                        });
                    });
                } else {
                    console.error("No se encontraron productos para este cosmético.");
                }
            } else {
                console.error("No se encontró el cosmético seleccionado.");
            }
        })
        .catch((error) => {
            console.error("Error al cargar los productos:", error);
        });
}
