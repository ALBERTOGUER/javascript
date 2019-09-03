btnCalcular=document.getElementById('btnCalcular');

addevent()

function addevent(){
    btnCalcular.addEventListener('click',hola);
}

function hola(){
let dias=Number(document.getElementById('dias').value);
let hotel=Number(document.getElementById('hotel').value);
let comidas=Number(document.getElementById('comidas').value);
    
let totalcomidas=0,
    totalhotel=0,
    totaldinero=0,
    total=0;

    totalcomidas= comidas*dias;
    totalhotel= hotel*dias;
    totaldinero= 100*dias;
    total= totalcomidas + totalhotel + totaldinero;
    
    let imprimirResultado1= document.getElementById('resultado1');
    
    let imprimirResultado2= document.getElementById('resultado2');
    
    let imprimirResultado3= document.getElementById('resultado3');
    
    let imprimirResultado4= document.getElementById('resultado4');

    imprimirResultado1.innerHTML= totalhotel;
    imprimirResultado2.innerHTML=totalcomidas;
    imprimirResultado3.innerHTML=totaldinero;
    imprimirResultado4.innerHTML=total;

    
}