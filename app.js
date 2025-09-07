// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//input-wrapper

let input = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let arrayAmigos = [];
let amigoSecreto;
//mi funcion para el boton agregar un amigo
function agregarAmigo() {
  if (input.value.trim() === "") {
    alert("Por favor ingresa el nombre de un amigo");
  } else {
    arrayAmigos.push(input.value);
    let li = document.createElement("li");
    li.textContent = input.value;
    listaAmigos.appendChild(li);
    input.value = "";
  }
}

function sortearAmigo() {
  if (arrayAmigos.length === 0) {
    alert("no tienes ningun amigo ingresado");
  } else {
    amigoSecreto = Math.floor(Math.random() * arrayAmigos.length);
    document.getElementById("resultado").innerHTML = arrayAmigos[amigoSecreto];
  }
}
