
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

