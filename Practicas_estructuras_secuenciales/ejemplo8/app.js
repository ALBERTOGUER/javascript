let btnCalcular = document.getElementById('btnCalcular');

addeventListener();

function addeventListener() {
    btnCalcular.addEventListener('click', hola);

}

function hola() {

    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);

    let sP = 0,
        area = 0;

    sP = ((ladoA + ladoB + ladoC) / 2);

    area=Math.sqrt(sP* (sP-ladoA)*(sP-ladoB)*(sP-ladoC));

    let imprimirResultado=document.getElementById('resultado');
    let imprimirResultado2=document.getElementById('resultado2');

    imprimirResultado.innerHTML=area;
    imprimirResultado2.innerHTML=sP;

    
}