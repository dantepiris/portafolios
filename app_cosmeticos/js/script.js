
async function cargarDatos() {
  try {

    const respuesta = await fetch('json/informacion.json');
    if (!respuesta.ok) throw new Error('Error en la carga de datos');

    const datosJSON = await respuesta.json();
    return datosJSON;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
    return { contenedores: [] }; 
  }
}


let datos = { contenedores: [] };


cargarDatos().then(data => {
  datos = data;

 
  function mostrarContenido(id) {
    
    document.querySelectorAll('.conteiner-desplegado, .conteiner-local, .conteiner-contacto, #formulario-arrepentimiento').forEach(el => el.style.display = 'none');
    
   
    const contenedor = datos.contenedores.find(c => c.id === id);
    
    if (contenedor) {
      const titulo = document.getElementById('titulo');
      const contenido = document.getElementById('contenido');
      const contenedorLocal = document.getElementById('conteiner-local');
      const tituloLocal = document.getElementById('titulo-local');
      const contenidoLocal = document.getElementById('contenido-local');
      const contenedorContacto = document.getElementById('conteiner-contacto');
      const tituloContacto = document.getElementById('titulo-contacto');
      const contenidoContacto = document.getElementById('contenido-contacto');
      const formularioArrepentimiento = document.getElementById('formulario-arrepentimiento');

      if (contenedor.id === 'id_2') {
  
        contenedorLocal.style.display = 'flex';
        tituloLocal.textContent = contenedor.titulo;
        contenidoLocal.innerHTML = contenedor.contacto.map(c => `
    
          <div class="tarjet_local">
            <i class="fa ${c.icono}"></i>
            <h6 class="title">${c.titulo}</h6>
            <p class="texto_local">${c.contenido}</p>
            <p class="texto_local">${c.hora}</p>
            </div>
      
        `).join('');
      } else if (contenedor.id === 'id_3') {
 
        contenedorContacto.style.display = 'flex';
        tituloContacto.textContent = contenedor.titulo;
        contenidoContacto.innerHTML = contenedor.contacto.map(c => `
        
          <div class="contact-item">
            <i class="fa ${c.icono}"></i>
            <h3>${c.titulo}</h3>
            <p>${c.contenido}</p>
            <p>${c.semana}</p>
            <p>${c.hora}</p>
          </div>
        `).join('');
      } else if (contenedor.id === 'id_4') {

        formularioArrepentimiento.style.display = 'flex';
      } else {
  
        document.getElementById('conteiner-desplegado').style.display = 'flex';
        titulo.textContent = contenedor.titulo;
        if (Array.isArray(contenedor.contenido)) {
          contenido.innerHTML = contenedor.contenido.map(parte => `<li>${parte}</li>`).join('');
        } else {
          contenido.textContent = contenedor.contenido;
        }
      }
      

      document.body.classList.add('no-scroll');
    }
  }

 
  document.querySelectorAll('.conteiner-desplegable').forEach(el => {
    el.addEventListener('click', () => mostrarContenido(el.id));
  });


  function cerrarContenedor(contenedorId) {
    document.getElementById(contenedorId).style.display = 'none';
    document.body.classList.remove('no-scroll');
  }

 
  document.getElementById('close-btn-text').addEventListener('click', () => cerrarContenedor('conteiner-desplegado'));
  document.getElementById('close-btn-local').addEventListener('click', () => cerrarContenedor('conteiner-local'));
  document.getElementById('close-btn-contacto').addEventListener('click', () => cerrarContenedor('conteiner-contacto'));
  document.getElementById('boton-form-btn').addEventListener('click', () => cerrarContenedor('formulario-arrepentimiento'));
});
