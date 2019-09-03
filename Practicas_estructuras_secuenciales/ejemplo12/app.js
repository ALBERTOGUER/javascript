let btnCalcular= document.getElementById('btnCalcular');

addeventlistener();


function addeventlistener(){
    btnCalcular.addEventListener('click',hola);
}

function hola(){
    let ladoA=Number(document.getElementById('ladoA').value);
    let ladoB=Number(document.getElementById('ladoB').value);

    let ladoC=0;

    ladoC=Math.sqrt(Math.pow(ladoA,2) + Math.pow(ladoB,2));

    let imprimirResultado=document.getElementById('resultado');

    imprimirResultado.innerHTML=ladoC;
}