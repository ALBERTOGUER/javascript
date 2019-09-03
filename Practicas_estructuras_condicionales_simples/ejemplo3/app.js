let btnCalcular = document.getElementById('btnCalcular');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');

addevent();

function addevent() {
    edad1.addEventListener('blur', validacion);
    edad2.addEventListener('blur', validacion);

    btnCalcular.addEventListener('click', hola);

}

function validacion(event) {

    if (isNaN(event.target.value)) {
        event.target.focus();
    }

}

function hola() {
    let imprimirResultado = document.getElementById('resultado');

    if (Number(edad1.value) == Number(edad2.value)) {
        imprimirResultado.innerText = 'tienen la misma edad';
    }
    else {
        if (Number(edad1.value) > Number(edad2.value)) {
            imprimirResultado.innerText = 'el primero es mayor';
        }
        else {
            imprimirResultado.innerText = 'el segundo es mayor';
        }
    }
}
