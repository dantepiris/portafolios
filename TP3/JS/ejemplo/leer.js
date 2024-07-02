let resto = document.querySelector(".resultados")

fetch('json/restaurantes.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (let i = 0; i < 5; i++) {

            let puntu = ""   

            if (data[i].puntuacion === "5"){
                puntu = "star star star star star"
            }
            else if(data[i].puntuacion === "4")
                {
                    puntu="star star star star"
                }
            else if(data[i].puntuacion === "3")
            {
                puntu="star star star "
            }
            else if(data[i].puntuacion === "2")
                {
                    puntu="star star "
                }
                else
                    {
                        puntu="star"
                    }

            document.querySelector('.resultados').innerHTML +=
   
                    `<a href="resto1.html" class="resto">

     
     <div class="img_resto"><img src=${data[i].avatar.src} alt=""></div>


     <div class="des1">
         <div class="deshijo">
             <h3>${data[i].name}</h3>
             <h5 class="je">${data[i].direccion}
                 
             </h5>

             <h6 class="je">${data[i].horario}</h6><br>
         </div>
         <div class="pun flex101">

             <div class="iconos icon_s col"> ${puntu}</div>
             

             <div class="euro">
                 <div class="iconos icon_s col2">euro euro euro</div>
             </div>
         </div>

     </div>

     <div class="punt1">${data[i].puntuacion}</div>
 </a>`
        }
    })
