let btnCalcular=document.getElementById('btnCalcular');

eventListener();

function eventListener(){
    btnCalcular.addEventListener('click',hola);
}

function hola(){
    let tiempo=Number(document.getElementById('tiempo').value);

    let velocidad=Number(document.getElementById('velocidad').value);

    let resultado=0;

    resultado=velocidad*tiempo;

    let imprimirResultado=document.getElementById('resultado');

    imprimirResultado.innerHTML=resultado;

}