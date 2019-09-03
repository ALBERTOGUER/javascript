let btnCalcular = document.getElementById('btnCalcular');

addeventlistener();

function addeventlistener() {
    btnCalcular.addEventListener('click', hola);
}

function hola(){
    
    let x1=Number(document.getElementById('x1').value); 
    let y1=Number(document.getElementById('y1').value); 
    let x2=Number(document.getElementById('x2').value); 
    let y2=Number(document.getElementById('y2').value);
    
    resultado=0;

    resultado=Math.sqrt((Math.pow(x2-x1,2)) + (Math.pow(y2-y1,2)));

    let imprimirResultado=document.getElementById('resultado');

    imprimirResultado.innerHTML=resultado;
}