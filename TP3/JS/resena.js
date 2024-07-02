fetch('json/restaurantes.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(restaurante => {
      if (restaurante.truck_id === localStorage.getItem("id")) {
       

 
        const menuSection = document.getElementById("menu_section");

      
        restaurante.resenas.forEach(plato => {
        
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta");
     

       
          tarjeta.innerHTML = `
            
        
            <div class="foto pr">
                <img src="${plato.img_url_pers}" alt="" class="img_fit_reseña">
                <div class="tag pa sombra "><div class="iconos">star</div>${plato.puntuacion_rese}</div>

            </div>

            <div class="plato_descripcion pd25">
                <h5>${plato.namepers}</h5>
                <h6>Plato: ${plato.plato_desgusto}</h6>
                <span>
                    <h6>"${plato.descripcion_rese}"</h6>
                </span>
            </div>
     
          `;

    
          menuSection.appendChild(tarjeta);
        });
      }
    });
  })
 