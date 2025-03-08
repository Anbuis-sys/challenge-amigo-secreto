// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Agregar nombres
/* El usuario inserta el nombre de un amigo y se agrega a la lista al clicar "adicionar"*/
const amigos=[];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    const expresionRegular = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    const listaAmigos = document.getElementById('listaAmigos');

    //validar entarada
    if (nombre) {
        //valida que no contenga caracteres especiales ni repeticiones incluyendo el uso de mayusculas y minusculas
       if (expresionRegular.test(nombre)){
        if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
            alert("Este amigo ya esta en la lista");
        } else {
            amigos.push(nombre);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        }
        actualizarLista();
       } else {
        alert("Caracter invalido, ingresa solo letras y espacios");
       }
/*Si el campo esta vacio muestra una alerta*/
    } else {
        alert("Campo vacio, por favor ingresa un nombre");
    }
};

//visualizar la lista
/*Los nombres ingresados se muestran en una lista*/
function actualizarLista() {
    listaAmigos.innerHTML = ''; //Limpia la lista

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    

//Boton para eliminar 
const eliminarBtn = document.createElement('button');
eliminarBtn.textContent = 'x';
eliminarBtn.className = 'delete';
document.body.appendChild(eliminarBtn);
eliminarBtn.onclick = function () {
    eliminarAmigo(i);
};
li.appendChild(eliminarBtn);
listaAmigos.appendChild(li);
    }
}
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

//sorteo aleatorio
/*Al clicar "seleccionar amigo" se sortea la la lista aleatoriamente y se muestra en la pagina*/
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('resultado').textContent = "No hay amigos en la lista para sortear."
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    ;document.getElementById('resultado').textContent = "Tu amigo secreto es: " + amigoSecreto;

    document.querySelector('.button-add').disabled = true;
    document.getElementById('amigo').disabled = true;
    document.querySelector('.button-draw').disabled = false;
    console.log(document.querySelector('.button-draw'));


    document.querySelector('.button-reset').style.display = 'inline';
}


function reiniciarSorteo() {
    // Esperar a que el DOM esté listo antes de buscar elementos
    setTimeout(() => {
        let botonSortear = document.querySelector('.button-draw');

        if (botonSortear) {
            botonSortear.disabled = false; // Habilita el botón de sorteo
            console.log("Botón de sorteo habilitado");
        } else {
            console.log("⚠️ El botón de sorteo no se encontró en el DOM.");
        }
    }, 0);

    document.getElementById('resultado').textContent = ""; // Limpia el resultado

    amigos.length = 0; // Vacía la lista de amigos
    actualizarLista(); // Actualiza la interfaz

    // Habilitar la entrada de nombres y botones
    document.querySelector('.button-add').disabled = false; 
    document.getElementById('amigo').disabled = false; 

    // Ocultar el botón de reinicio
    document.querySelector('.button-reset').style.display = 'none';
}

