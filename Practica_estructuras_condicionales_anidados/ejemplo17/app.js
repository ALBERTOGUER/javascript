let btn = document.getElementById('btnCalcular');

event();
function event() {
    btn.addEventListener('click', hola);
}

function hola() {
    let precio_inicial = Number(document.getElementById('precio_inicial').value);
    let tipo = document.getElementById('tipo').value;
    let tamaño = Number(document.getElementById('tamaño').value);
    let imprimir = document.getElementById('resultado');
    let total = 0;

    if (tipo == "A") {
        if (tamaño == 1) {
             total = precio_inicial + .20;

        }
        else {
             total = precio_inicial + .30;
        }
    } else {
        if (tamaño == 1) {
             total = precio_inicial - .20;
        }
        else {
             total = precio_inicial - .50;
        }

    }

    imprimir.innerHTML = `<h1>El precio es:<span class="badge badge-secondary">${total}<span></h1>`;
}