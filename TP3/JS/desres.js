fetch('json/restaurantes.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(plato => {
      if (plato.truck_id === localStorage.getItem("id")) {
        document.querySelector(".resto_titulo h2").innerText = plato.name;
        document.querySelector(".esp").innerText = plato.category;
        document.querySelector(".horario").innerText = plato.horario;
        document.querySelector(".kilometro").innerText = plato.km;
        document.querySelector(".delivery").innerText = plato.delivery;
        document.querySelector(".resto_desc span").innerText = plato.bio;
        document.querySelector(".resto_precio").innerText = plato.puntuacion;
        document.querySelector(".img_fit").src = plato.cover_photo.src;
      }
    });
  })
  .catch(error => console.error('Error fetching the JSON:', error));