let btnVerificar = document.getElementById('btnVerificar');

let numero1 = document.getElementById('numero1');

let numero2 = document.getElementById('numero2');



addEventListener();

function addEventListener() {
    //Se está asignando el evento change al input qu pertenece el id "numero1"
    numero1.addEventListener('blur', validarDatos);
    numero2.addEventListener('blur', validarDatos);

    btnVerificar.addEventListener('click', compararValores);

}

//estamos recibiendo el parámetro event debido a que el método "addeventListener" está invocando la función validarDatos

function validarDatos(event) {
    console.log(event.target.value);

    //Se utilizo la funciónNaN para comprobar si el valor escrito en un número en caso de que no sea un número, se utilizó el método focus para no permitirle al usuario cambiar de input
    if (isNaN(event.target.value)) {

        event.target.focus();
    }
}

function compararValores() {
    let imprimirResultado = document.getElementById('imprimirResultado');

    if(Number(numero1.value) == Number(numero2.value)){
        imprimirResultado.innerText='Los dos números son iguales';
        return;

    }
    if (Number(numero1.value) > Number(numero2.value)) {
        imprimirResultado.innerText ='El numero 1 es el valor más grande';
    }
    else{
        imprimirResultado.innerText ='El numero 2 es el valor más grande';
    }
}