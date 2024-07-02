fetch('json/restaurantes.json')
      .then(response => response.json())
      .then(data => {
        const restaurantId = localStorage.getItem("id");
        const menuSection = document.getElementById("menu_section");

        data.forEach(restaurante => {
          if (restaurante.truck_id === restaurantId) {
            document.getElementById("restaurant_name").innerText = restaurante.name;

            restaurante.menu.forEach(plato => {
              const tarjeta = document.createElement("a");
              tarjeta.classList.add("tarjeta");
              tarjeta.href = "plato.html";

              tarjeta.addEventListener("click", () => {
                localStorage.setItem("id_plato", plato.id_plato);
              });

              tarjeta.innerHTML = `
                <div class="foto pr">
                  <img src="${plato.img_url}" alt="" class="img_fit">
                  <div class="tag pa sombra">${plato.precio}</div>
                </div>
                <div class="plato_descripcion pd25">
                  <h5>${plato.nombre}</h5>
                  <span><h6>${plato.descripcion}</h6></span>
                </div>
              `;

              menuSection.appendChild(tarjeta);
            });
          }
        });
      })