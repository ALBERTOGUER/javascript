let btnCalcular = document.getElementById('btnCalcular');

let btnCalcular2 = document.getElementById('btnCalcular2');



EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerArea);

    btnCalcular2.addEventListener('click', obtenerAreaSimplificada);
}



function obtenerAreaSimplificada() {

    console.time('obtenerAreaSimplificada');

    let radio = Number(document.getElementById('radioCirculo').value);

    let resultado = 0;

    //Se invoca el objeto math y se utiliza su propiedad PI (el cual nos manda el valor de dicha constante) y su método pow(eleva un elemnto numérico hacia la potencia que se le quita)
    resultado = Math.PI * Math.pow(radio, 2);

    let resultadoImprimir = document.getElementById('resultado');

    resultadoImprimir.innerHTML = resultado;

    console.timeEnd('obtenerAreaSimplificada');
}

function obtenerArea() {

    console.time('obtenerArea');
    //se declara un elemento constante el cual funcionara para obtener el calculo de pi
    const Pi = 3.1416;

    let radio = Number(document.getElementById('radioCirculo').value);

    let resultado = 0;

    resultado = Pi * (radio * radio);

    let resultadoImprimir = document.getElementById('resultado');

    resultadoImprimir.innerHTML = resultado;

    console.timeEnd('obtenerArea');

}