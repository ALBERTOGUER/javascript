let btn = document.getElementById('btnCalcular');


eventp();
function eventp() {
    btn.addEventListener('click', hola);
}

function hola() {

    let numberA = Number(document.getElementById('numberA').value);
    let numberB = Number(document.getElementById('numberB').value);
    let numberC = Number(document.getElementById('numberC').value);

    if (numberA > numberB) {
        if (numberB > numberC) {
            resultado.innerHTML = ` <h1>El mayor es: <span class="badge badge-secondary">${numberA}</span></h1>
            <br> <h1>El el segundo es: <span class="badge badge-secondary">${numberB}</span></h1>
            <br> <h1>El menor es: <span class="badge badge-secondary">${numberC}</span></h1>`;
            return;
        } else {
            resultado.innerHTML = ` <h1>El mayor es: <span class="badge badge-secondary">${numberA}</span></h1>
            <br> <h1>El el segundo es: <span class="badge badge-secondary">${numberC}</span></h1>
            <br> <h1>El menor es: <span class="badge badge-secondary">${numberB}</span></h1>`;
            return;
        }

    }

    else if (numberB > numberC) {
        if (numberC > numberA) {
            resultado.innerHTML = ` <h1>El mayor es: <span class="badge badge-secondary">${numberB}</span></h1>
            <br> <h1>El el segundo es: <span class="badge badge-secondary">${numberC}</span></h1>
            <br> <h1>El menor es: <span class="badge badge-secondary">${numberA}</span></h1>`;
            return;
        } else {
            resultado.innerHTML = ` <h1>El mayor es: <span class="badge badge-secondary">${numberB}</span></h1>
            <br> <h1>El el segundo es: <span class="badge badge-secondary">${numberA}</span></h1>
            <br> <h1>El menor es: <span class="badge badge-secondary">${numberC}</span></h1>`;
            return;
        }

    }
    else if (numberC > numberA) {
        if (numberB > numberA) {
            resultado.innerHTML = ` <h1>El mayor es: <span class="badge badge-secondary">${numberC}</span></h1>
            <br> <h1>El segundo es: <span class="badge badge-secondary">${numberB}</span></h1>
            <br> <h1>El menor es: <span class="badge badge-secondary">${numberA}</span></h1>`;
            return;
        } else {
            resultado.innerHTML = ` <h1>El mayor es: <span class="badge badge-secondary">${numberC}</span></h1>
            <br> <h1>El el segundo es: <span class="badge badge-secondary">${numberA}</span></h1>
            <br> <h1>El menor es: <span class="badge badge-secondary">${numberB}</span></h1>`;
            return;
        }
     



    }

   
}