let btnCalcular = document.getElementById('btnCalcular');

Event();

function Event() {
    btnCalcular.addEventListener('click', hola);
}

function hola() {
    let numero = Number(document.getElementById('numero').value);
    let fibonaccianterior = 0;
    let fibonaccinuevo = 1;
    let fibonacci = 0;
    let imprimir = document.getElementById('resultado');

    for (i = 1; i <= 100; i++) {


        fibonacci = fibonaccinuevo + fibonaccianterior;

        fibonaccianterior = fibonaccinuevo;
        fibonaccinuevo = fibonacci;


        if (numero == fibonacci) {
            imprimir.innerHTML = `<h1>fibonacci anterior : <span class="badge badge-secondary">${fibonacci}</span></h1>`;
            break;
        }
        else if (numero < fibonacci && numero > fibonaccianterior) {
            imprimir.innerHTML = `<h1>fibonacci anterior : <span class="badge badge-secondary">${fibonaccianterior}</span></h1>`;
            break;
        }

    }
}