// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

//Agrega un amigo a la lista.
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == '') {
        alert('Escribe un nombre válido.');
        return; 
    }

    amigos.push(nombreAmigo);

    actualizarLista();

    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    //Verificar que haya suficientes amigos para un sorteo
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para poder sortear.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSecreto = amigos[indiceAleatorio];
    
    let resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
}

//Actualiza la lista de amigos mostrada en la página.
//Recorre el array `amigos` y crea los elementos de la lista.
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual antes de actualizar

    //Crea y añade cada amigo a la lista en el HTML
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i]; // Asigna el nombre del amigo
        lista.appendChild(item); // Agrega el elemento a la lista <ul>
    }
}