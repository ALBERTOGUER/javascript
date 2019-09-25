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
        
        fibonaccianterior =fibonaccinuevo;
        fibonaccinuevo = fibonacci;


        if (numero < fibonaccinuevo && numero >= fibonaccianterior) {
            imprimir.innerHTML = `<h1>La posición es : <span class="badge badge-secondary">${i}</span></h1>`;
            break;
        }








    }
}