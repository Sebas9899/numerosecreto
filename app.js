

let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Escoje un numero";

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    // console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('P',` Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P', ' el numero secreto es menor');
        } else {
            asignarTextoElemento('P', ' el numero secreto es mayor');
        }
    }
    intentos++;
    limpiarCaja();
    return;
}


function limpiarCaja(){
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

// se puede reducir el codigo anterior de la sieguiente manera


function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p', `escoje un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}


function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 
    //return Math.floor(Math.random()*10)+1; //no hay necesidad de crear una variable, como se va a aplicar otra funcion de listas entonces ya no se retorna
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

    // si el numero generado esta incluido en la lista. 
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); // se pone return para que sea devuelto el valor
        }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}


function reiniciarJuego(params) {
    // limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    // genera el numero aleatorio
    //inicializar el numero de intentos
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();

