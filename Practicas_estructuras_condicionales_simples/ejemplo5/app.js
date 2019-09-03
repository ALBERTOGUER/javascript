let btn=document.getElementById('btnCalcular');

let ladoA=document.getElementById('ladoA');

let ladoB=document.getElementById('ladoB');

let ladoC=document.getElementById('ladoC');

addevent();

function addevent(){
    btn.addEventListener('click',hola);

    ladoA.addEventListener('blur', validar);
    ladoB.addEventListener('blur', validar);
    ladoc.addEventListener('blur', validar);
}

function validar(event){
    if(isNaN(event.target.value)){

        event.target.focus();

    }

}

function hola(){
    let imprimir = document.getElementById('resultado');

    if(Number(ladoA.value) == Number(ladoB.value) && Number(ladoA.value) == Number(ladoC.value) && Number(ladoB.value) == Number(ladoC.value)){
        imprimir.innerText='triángulo equilatero';
        return;
    }
    else{
        if(Number(ladoA.value) != Number(ladoB.value) && Number(ladoA.value) != Number(ladoC.value) && Number(ladoB.value) != Number(ladoC.value)){
            imprimir.innerText='triángulo escaleno';
        }
        else{
            imprimir.innerText='triángulo isóceles';
        }
    }
}