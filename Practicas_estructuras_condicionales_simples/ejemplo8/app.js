let btn = document.getElementById('btnCalcular');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');

addevent();

function addevent() {
    btn.addEventListener('click', hola);
    edad1.addEventListener('blur', revision);
    edad2.addEventListener('blur', revision);

}


function revision(event) {
    if (isNaN(event.target.value)) {

        event.target.focus();
    }
}

function hola() {
    let nombre1 = document.getElementById('1').value;
    let nombre2 = document.getElementById('2').value;
    let imprimir = document.getElementById('resultado');
    console.log = nombre1;
    if (Number(edad1.value) > Number(edad2.value)) {
        imprimir.innerText = nombre1;
    }
    else {
        imprimir.innerText = nombre2;

    }

}