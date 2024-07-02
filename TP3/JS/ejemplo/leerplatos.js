let platos = document.querySelector(".contenedor_tarjeta");

fetch('json/platos.json')
    .then(response => {
        return response.json()
    })

    .then((plato) => {

        for (let i = 0; i < 10  ; i++) {
            
           platos.innerHTML +=
                    `<a href="plato.html" class="tarjeta">
    <div class="foto pr">
        <img src="${plato[i].menu[0].image}" alt="" class="img_fit">
        <div class="tag pa sombra">${plato[i].precio}</div>

    </div>

    <div class="plato_descripcion pd25">
        <h5> ${plato[i].nombre}</h5>
        <span><h6>
            ${plato[i].descripcion}</h6>
        </span>
    </div>
</a>`;
        }
    

    });
