let btn = document.getElementById('btnCalcular');
event();

function event() {
    btn.addEventListener('click', hola);
}

function hola() {
    let numeroA = Number(document.getElementById('numeroA').value);
    let numeroB = Number(document.getElementById('numeroB').value);
    console.log(numeroB);
    console.log(numeroA);
    let imprimir = document.getElementById('resultado');
    if (numeroB % numeroA == 0) {
        imprimir.innerHTML = `<h1><span class="badge badge-secondary">Es múltiplo<span></h1>`
    }else{
        imprimir.innerHTML = `<h1><span class="badge badge-secondary">No es múltiplo<span></h1>`
    }
}
