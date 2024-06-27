let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);
  if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    //el usuario no acerto
       if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','el número secreto es menor');  
      }else {
        asignarTextoElemento('p', 'el número secreto es mayor');
      }
   intentos++;
   limpiarCaja();


  }
  return;
}



function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego Del Número secreto!');
  asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);

  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}


function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario');
  valorCaja.value = ''


}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los nùmeros mostrar mensaje en la pantalla y cerrar el juego
  
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    
  } else {

      //si el numero generado esta incluido en la lista 
      if (listaNumerosSorteados.includes(numeroGenerado)) {
          return generarNumeroSecreto();   
      } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }

    }
}

function reiniciarJuego() {
  
  limpiarCaja();

  condicionesIniciales();

  document.querySelector('#reiniciar').setAttribute('disabled','true');
  
}


condicionesIniciales();




