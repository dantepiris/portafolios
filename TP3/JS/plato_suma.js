fetch('json/restaurantes.json')
  .then(response => response.json())
  .then(data => {
    const restaurantId = localStorage.getItem("id");
    const menuSection = document.getElementById("menu_section");
    const platoId = localStorage.getItem("id_plato");

    data.forEach(restaurante => {
      if (restaurante.truck_id === restaurantId) {
        restaurante.menu.forEach(plato => {
          if (plato.id_plato === platoId) {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
            
              <section class="resto_image pr">
                <a href="index.html" class="volver iconos pa">close</a>
          
                <img class="img_fit_plato" src="${plato.img_url}" alt="">
                <div class="resto_precio pa cengrid sombra">$${plato.precio}</div>
          
                </section>

              <div class="flex100">
                <div class="resto_titulo">
                  <h2>${plato.nombre}</h2>
                  <h6 class="esp">${plato.category}</h6>
                </div>
              </div>
              <span class="span">${plato.descripcion}</span>
            `;

            menuSection.appendChild(tarjeta);
          }
        });
      }
    });
  })