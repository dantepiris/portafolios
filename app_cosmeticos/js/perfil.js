document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.querySelector(".perfil");

    
    fetch('json/informacion.json')
        .then(response => response.json())
        .then(data => {
        
            const perfiles = data.perfil;

  
            perfiles.forEach(perfil => {
                const perfilCard = document.createElement("div");
                perfilCard.className = "perfil-card";

                perfilCard.innerHTML = `
                    <img src="${perfil.img_usuario}" alt="Foto de perfil">
                    <div class="perfil-info">
                        <p class="name_user">${perfil.name_usuario}</p>
                        <p>${perfil.email_usuario}</p>
                        <p>Membresía: <p class="mem_user">${perfil.membresia_usuario}</p></p>
                         <div class="edit-icon">
                        <i class="fa-solid fa-pen"></i>
                    </div>
                    </div>
                   
                `;

                perfilContainer.appendChild(perfilCard);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
