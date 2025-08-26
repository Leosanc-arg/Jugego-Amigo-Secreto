El juego del amigo secreto!
El juego consiste en escribir los nombres de tus diferentes amigos, el sistema los sorteará aleatoriamente y te mostrará tu amigo secreto.
Pasos a seguir:
1° establecer el array para almacenar los nombres de los amigos ingresados:
let nombresAmigos = [];
2° creamos una funcion para agregar un amigo a la lista
function agregarAmigo() {
  // a. Captura el valor del campo de entrada
  let nombreAmigo = document.getElementById("amigo").value;

  // b. Valida la entrada
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return; //Detiene la función si el campo está vacío//
  }

  // c. Actualiza el array de amigos
  nombresAmigos.push(nombreAmigo);

  // d. Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // e. Mostrar los nombres en la lista en el HTML
  mostrarAmigosEnLista();
}

3° Con la siguiente accion generamos y mostramos la lista de amigos ingresados
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

4° Sorteamos para conseguir el amigo secreto
function sortearAmigo() {
  // a. Valida que haya amigos disponibles
  if (nombresAmigos.length === 0) {
    alert("Por favor, añade amigos antes de sortear.");
    return; //Detiene la función si no hay amigos//
  }

  // b. Genera un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);

  // c. Obtiene el nombre sorteado
  let amigoSorteado = nombresAmigos[indiceAleatorio];

  // d. Muestra el resultado
  document.getElementById("resultado").innerHTML =
    "El amigo sorteado es: " + amigoSorteado;
}
    
