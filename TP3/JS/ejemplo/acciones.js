// //capturo solo un nodo con ID
// let listaProductos = document.getElementById("productos")
// console.log(listaProductos.innerHTML)

// // // captura nodos ,selectores id o selectores de calses= un solo elemento
// // let listaProductos = document.querySelector(".contenedor")
// // console.log(listaProductos.innerHTML)

// //captura clases y las convierte a un array
// let contenedor = document.querySelectorAll(".contenedor")
// setTimeout(()=>{
//     alert(contenedor[0].innerHTML)
// },1000);

// //capturo clases y las convierte en un array
// let conteiner = document.getElementByClassName("contenedor")
// console.log(conteiner[0].innerHTML)


// ---------------crear LISTA-------------------------------------------

let nuevalista = document.createElement("ul")

document.body.appendChild(nuevalista)

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "primer item lista";
nuevalista.appendChild(listaElemento1)

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "segundo item";
nuevalista.appendChild(listaElemento2)


//--------------------------------------------------

let futer = document.querySelector("footer")

let resta = document.getElementById("restar")
let cont = document.getElementById("cont")
let sumar = document.getElementById("sumar")
let counter = 1
cont.innerText = counter

function restamorfi(){
    if(counter > 1){
    counter = counter - 1
    cont.innerText = counter
}else{
    cont.style.color="red";
    resta.style.cursor="not-allowed";
}
}

function sumamorfi(){
    if (counter < 5) {
        cont.style.color="black";
        resta.style.cursor="pointer";
        counter = counter +1;
        cont.innerText = counter;
        
    }else{
        cont.style.color="red";
        resta.style.cursor="not-allowed";

    }
   
}

console.log(counter)


