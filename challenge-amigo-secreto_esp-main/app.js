let amigos = [];

function modificarElementoAlternativa(id, contenido){
    let listaDeNombres = document.getElementById(id);
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = contenido;
    listaDeNombres.appendChild(nuevoElemento);
}

function modificarElemento(id, contenido){
    let lista = document.getElementById(id);
    lista.innerHTML += "<li>" + contenido + "</li>";
}
function limpiarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos=[];
}

function mostrarLista(nombre){
    if (nombre)
        modificarElemento('listaAmigos', nombre);
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(!amigos)
        limpiarLista();

    if(amigo == ''){
        alert("El nombre esta vacio!")
    }
    else{
        amigos.push(amigo);
        mostrarLista(amigo);
        document.getElementById('amigo').value = '';
    }
}

function sortearAmigo(){

    if(amigos){
        // Se eleminan los li para solo mostrar el li en el cual estara el sorteado
        //let listaDeAmigos = document.getElementById('listaAmigos');
        // while (listaDeAmigos.firstChild) {
        //     listaDeAmigos.removeChild(listaDeAmigos.firstChild);
        // }
        /**************************************************************************/
        limpiarLista();

        let numAleatorio = Math.floor(Math.random() * amigos.length);
        modificarElemento('resultado', amigos[numAleatorio]);
    }
    else{
        alert('La lista esta vacia');
    }
}
