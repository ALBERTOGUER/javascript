let btnCalcular = document.getElementById('btnCalcular');

addevent();

function addevent() {
    btnCalcular.addEventListener('click', hola);
}

function hola() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let altura = Number(document.getElementById('altura').value);
    let precio = Number(document.getElementById('precio').value);

    let area = 0;
    let volumen = 0;
    let preciototal = 0;

    area = ladoA * ladoB;

    volumen = altura * area;

     preciototal = volumen * 1000 * precio;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = preciototal;


}