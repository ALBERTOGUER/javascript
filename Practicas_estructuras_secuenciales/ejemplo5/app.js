let btnCalcular = document.getElementById('btnCalcular');

eventListener();

function eventListener() {
    btnCalcular.addEventListener('click',obtenerArea);
}

function obtenerArea() {
    let ladoA = Number(document.getElementById('ladoA').value);

    let ladoB = Number(document.getElementById('ladoB').value);

    let ladoC = Number(document.getElementById('ladoC').value);


    let resultadoAreaRectangulo = 0,
        resultadoAreatriángulo = 0,
        resultadoSumasAreas = 0;

        resultadoAreaRectangulo=ladoB*ladoC;
        resultadoAreatriángulo=(((ladoA-ladoC)*ladoB)/2);

        resultadoSumasAreas=resultadoAreaRectangulo+resultadoAreatriángulo;

        let imprimirresultado = document.getElementById('resultado');
        imprimirresultado.innerHTML = resultadoSumasAreas;





}