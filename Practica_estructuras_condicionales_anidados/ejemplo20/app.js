let btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', hola);
}


function hola() {
    let plan = document.getElementById('plan').value;
    let precio = 0;
    let imprimir = document.getElementById('resultado');

    let ebrio = document.getElementById('ebrio').value;
    let ciego = document.getElementById('ciego').value;
    let enfermo = document.getElementById('enfermo').value;
    let viejo = document.getElementById('viejo').value;

    let porcentaje_viejo = 0;
    let porcentaje_ciego = 0;
    let porcentaje_ebrio = 0;
    let porcentaje_enfermo = 0;

    if (plan == "A") {
        precio = 1200;

    }
    else if (plan == "B") {
        precio = 950;
    }
    else {
        imprimir.innerHTML = `<h1>Plan inválido <span class="badge badge-secondary"></span></h1> `;
        return;
    }



    if (ebrio == "s") {
        porcentaje_ebrio = precio  * .10;

    }
    else if (ebrio == "n") {
        porcentaje_ebrio = 0;
    }
    else {
        imprimir.innerHTML = `<h1>Dato incorrecto <span class="badge badge-secondary"></span></h1> `;
        return;
    }



    if (ciego == "s") {
        porcentaje_ciego = precio  * .5;

    }
    else if (ciego == "n") {
        porcentaje_ciego = 0;
    }
    else {
        imprimir.innerHTML = `<h1>Dato incorrecto <span class="badge badge-secondary"></span></h1> `;
        return;
    }



    if (enfermo == "s") {
        porcentaje_enfermo = precio  * .5;

    }
    else if (enfermo == "n") {
        porcentaje_enfermo = 0;
    }
    else {
        imprimir.innerHTML = `<h1>Dato incorrecto <span class="badge badge-secondary"></span></h1> `;
        return;
    }





    if (viejo == "s") {
        porcentaje_viejo = precio  * .20;
        

    }
    else if (viejo == "n") {
        porcentaje_viejo = precio * .10;
    }
    else {
        imprimir.innerHTML = `<h1>Dato incorrecto <span class="badge badge-secondary"></span></h1> `;
        return;
    }

    let total = precio + porcentaje_ebrio + porcentaje_enfermo + porcentaje_ciego + porcentaje_viejo;

    imprimir.innerHTML = `<h1>El precio total de la póliza es de: <span class="badge badge-secondary"></span>${total}</h1> `;




}