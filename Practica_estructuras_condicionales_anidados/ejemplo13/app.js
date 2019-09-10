btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', hola);
}

function hola() {

    let cali1 = Number(document.getElementById('Cali1').value);
    let cali2 = Number(document.getElementById('Cali2').value);
    let cali3 = Number(document.getElementById('Cali3').value);
    let cali4 = Number(document.getElementById('Cali4').value);
    let total = 0;

    if (cali1 <= cali2 && cali1 <= cali3 && cali1 <= cali4) {
        total = (cali2 + cali3 + cali4 )/ 3;

    }
    if (cali2 <= cali1 && cali2 <= cali3 && cali2 <= cali4) {
        total = (cali1 + cali3 + cali4 )/ 3;

    }
    if (cali3 <= cali1 && cali3 <= cali2 && cali3 <= cali4) {
        total = (cali2 + cali1 + cali4) / 3;

    }
    if (cali4 <= cali1 && cali4 <= cali2 && cali4 <= cali3) {
        total = (cali2 + cali3 + cali1 )/ 3;

    }
    console.log = total;
    let imprimir = document.getElementById('resultado');

    imprimir.innerHTML = `<h1>El promedio de las tre calificaciones más altas es:<span class="badge badge-secondary">${total}<span></h1>`
}