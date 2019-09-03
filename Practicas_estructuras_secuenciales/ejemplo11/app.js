let btnCalcular=document.getElementById('btnCalcular');

addeventlistener();

function addeventlistener(){

    btnCalcular.addEventListener('click',hola);
}

function hola(){
    let metros=Number(document.getElementById('metros').value);

    const pulgadas=Number(39.3701);

    resultado=metros * pulgadas;

    let imprimirResultado=document.getElementById('resultado');

    imprimirResultado.innerHTML=resultado;




}