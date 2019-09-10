let btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', calculo);
    
}

function porcentaje(x, y) {
    let resultado = (y * x) / 100;
    return resultado;
}

function calculo() {
    let imprimir = document.getElementById('resultado');
    let precio = Number(document.getElementById('precio').value);
    let x;
    if (precio > 3600) {
        x = precio - porcentaje(precio, 16);


    }
    else {
        x = precio - porcentaje(precio, 7);
    }
    imprimir.innerHTML = ` <h1>El precio es: <span class="badge badge-secondary">${x}</span></h1>`;

}