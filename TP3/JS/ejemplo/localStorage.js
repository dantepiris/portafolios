let valorAc = document.getElementById("valorA");
let valorBc = document.querySelector("#valorB");

function pintarDato() {
  let a = valorAc.value;
  console.log(a);
  let resultadoA = document.getElementById("resulA");
  resultadoA.innerText = a;
}

function pintarDatoLocal() {
  let b = valorBc.value;
  localStorage.setItem("titulo", b);
  alert("El valor ingresado es: " + b);
}

function Borrarlocal(){
    localStorage.clear();
}

let resultadoB = document.getElementById("resulB");
resultadoB.innerHTML = localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));