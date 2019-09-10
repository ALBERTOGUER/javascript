let btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', hola);
}

function hola() {
    let zona = document.getElementById('zona').value;
    let gramos = document.getElementById('gramos').value;
    let total = 0;
    if (gramos <= 5000) {
        if (zona == 1) {
            total = gramos * 11;
        }

        else if (zona == 2) {
            total = gramos * 10;
        }

        else if (zona == 3) {
            total = gramos * 12;
        }

        else if (zona == 4) {
            total = gramos * 24;
        }

        else if (zona == 5) {
            total = gramos * 27;
        }
        else {
            total = "Ingrese zona válida";
        }
    }
    else{
        total = "Exedente de peso";
    }

    let imprimir = document.getElementById('resultado');

    imprimir.innerText= total;
}