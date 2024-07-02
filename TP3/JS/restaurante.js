let resto = document.querySelector(".resultados");
let guardarid = (id) => {
    localStorage.setItem("id", id);
};

fetch("json/restaurantes.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((restaurante, index) => {
            let puntu = "";

            if (restaurante.puntuacion === "5") {
                puntu = "star star star star star";
            } else if (restaurante.puntuacion === "4") {
                puntu = "star star star star";
            } else if (restaurante.puntuacion === "3") {
                puntu = "star star star";
            } else if (restaurante.puntuacion === "2") {
                puntu = "star star";
            } else {
                puntu = "star";
            }

            let cartaRestaurante = document.createElement("a");
            cartaRestaurante.setAttribute("id", restaurante.truck_id);
            cartaRestaurante.setAttribute("href", "resto1.html");
            cartaRestaurante.setAttribute("onClick", `guardarid(${restaurante.truck_id})`);
            cartaRestaurante.classList.add("resto");

            cartaRestaurante.innerHTML = `
                <div class="resto">
                    <div class="img_resto"><img src="${restaurante.avatar.src}" alt=""></div>
                    <div class="des1">
                        <div class="deshijo">
                            <h3>${restaurante.name}</h3>
                            <h5 class="je">${restaurante.direccion}</h5>
                            <h6 class="je">${restaurante.horario}</h6><br>
                        </div>
                        <div class="pun flex101">
                            <div class="iconos icon_s col">${puntu}</div>
                            <div class="euro">
                                <div class="iconos icon_s col2">euro euro euro</div>
                            </div>
                        </div>
                    </div>
                    <div class="punt1">${restaurante.puntuacion}</div>
                </div>
            `;

            cartaRestaurante.addEventListener("click", function () {
                let idRestauranteSeleccionado = restaurante.truck_id;
                localStorage.setItem("indiceCache", idRestauranteSeleccionado);
                console.log(idRestauranteSeleccionado);
            });

            resto.appendChild(cartaRestaurante);
        });
    });

// Obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");