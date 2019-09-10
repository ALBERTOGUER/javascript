let btn = document.getElementById('btnCalcular');

event();

function event(){
    btn.addEventListener('click',hola);
}

function hola(){
    let numero = document.getElementById('numero').value;
    let resultado = 0;

    if(numero=="10"){
        resultado="A";
    }
    else if(numero=="9"){
        resultado="B";
    }
    else if(numero=="8"){
        resultado="C";
    }
    else if(numero=="7" || numero =="6"){
        resultado="D";
    }
    else {
        resultado="E";
    }

    let imprimir = document.getElementById('resultado');

    imprimir.innerText=resultado;
}