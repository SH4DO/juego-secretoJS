
let numeroSecreto = 0;
let intentos = 0;
let numerosUsados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        //acerto
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez'  : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //no acerto
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',"El numero secreto es menor");
        }
        else{
            asignarTextoElemento('p',"El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){   
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numRandom =  Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numerosUsados);

    //si ya se usaron todos los numeros
    if(numerosUsados.length == numeroMaximo){

        asignarTextoElemento('p',"ya se usaron todos los numeros posibles");
    }
    else {
        //si el numero generado esta en la lista
        if(numerosUsados.includes(numRandom)){
            return generarNumeroSecreto();
        }
        // si no
        else{
            numerosUsados.push(numRandom);
            return numRandom ; 
        }
    }


}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}: `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //.limpiar caja .generar nuevo numero .desactivar button, reiniciar el numero de intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
