let btnClacular = document.getElementById('btnCalcular');
let dia1 = document.getElementById('dia1');
let dia2 = document.getElementById('dia2');
let dia3 = document.getElementById('dia3');
let dia4 = document.getElementById('dia4');
let dia5 = document.getElementById('dia5');
let dia6 = document.getElementById('dia6');

addevent()

function addevent() {
    btnCalcular.addEventListener('click', hola);

    dia1.addEventListener('blur', validacion);
    dia2.addEventListener('blur', validacion);
    dia1.addEventListener('blur', validacion);
    dia3.addEventListener('blur', validacion);
    dia4.addEventListener('blur', validacion);
    dia5.addEventListener('blur', validacion);
    dia6.addEventListener('blur', validacion);
}

function validacion() {

    if (isNaN(event.target.value)) {

        event.target.focus();
    }
}

function hola() {
    let imprimiResultado = document.getElementById('resultado');
    

     let promedio = (Number(dia1.value) + Number(dia2.value) + Number(dia3.value) + Number(dia4.value) + Number(dia5.value) + Number(dia6.value))/6;

     if(promedio >= 100){
         imprimiResultado.innerText='Producción mínima cumplida';

     }
     else{
         imprimiResultado.innerText='Producción mínima no cumplida';
     }


}