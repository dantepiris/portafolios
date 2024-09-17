let container = document.querySelector("#productos-container");

let guardarIdCosmetico = (id) => {
    localStorage.setItem("id_cosmetico", id);
};

fetch("json/informacion.json")
    .then((response) => response.json())
    .then((data) => {
        data.cosmeticos.forEach((producto) => {
            let cardProducto = document.createElement("a");
            cardProducto.classList.add("container_produc");
            cardProducto.setAttribute("href", "productos.html");
            cardProducto.setAttribute("onClick", `guardarIdCosmetico('${producto.id_cosmetico}')`);

            cardProducto.innerHTML = `
                <img src="${producto.img_cosmetico}" alt="${producto.name_cosmetico}" class="product-image">
                <p class="name_produc">${producto.name_cosmetico}</p>
            `;

            container.appendChild(cardProducto);
        });
    });

// Obtiene desde la caché el valor almacenado en id_cosmetico
console.log("Cosmético almacenado: " + localStorage.getItem("id_cosmetico"));
