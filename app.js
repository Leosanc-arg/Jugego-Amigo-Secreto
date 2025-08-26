// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
  // 1. Capturar el valor del campo de entrada
  let nombreAmigo = document.getElementById("amigo").value;

  // 2. Validar la entrada
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detiene la función si el campo está vacío
  }

  // 3. Actualizar el array de amigos
  nombresAmigos.push(nombreAmigo);

  // 4. Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // 5. Mostrar los nombres en la lista en el HTML
  mostrarAmigosEnLista();
}

console.log(nombresAmigos);

function mostrarAmigosEnLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; 


  for (let i = 0; i < nombresAmigos.length; i++) {
    let nombre = nombresAmigos[i];
    let listItem = document.createElement("li");
    listItem.textContent = nombre;
    listaAmigos.appendChild(listItem);
  }
}

function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (nombresAmigos.length === 0) {
    alert("Por favor, añade amigos antes de sortear.");
    return; // Detiene la función si no hay amigos
  }

  // 2. Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

  // 3. Obtener el nombre sorteado
  let amigoSorteado = nombresAmigos[indiceAleatorio];

  // 4. Mostrar el resultado
  document.getElementById("resultado").innerHTML =
    "El amigo sorteado es: " + amigoSorteado;
}