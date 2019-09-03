let btnCalcular = document.getElementById('btnCalcular');

addeventListener();

function addeventListener() {
    btnCalcular.addEventListener('click', hola);
}

function hola() {
    let aciertos = Number(document.getElementById('aciertos').value);
    let incorrectos = Number(document.getElementById('incorrectos').value);
    let blanco = Number(document.getElementById('blanco').value);

    let resultadoAciertos = 0,
        resultadoBlanco=0,
        resultadoTotal = 0;

        resultadoBlanco=blanco*0;

    resultadoAciertos = aciertos * 4;

    resultadoTotal = resultadoAciertos - incorrectos + resultadoBlanco;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultadoTotal;

}