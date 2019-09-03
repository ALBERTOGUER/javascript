let btnComparar=document.getElementById('btnComparar');

event();

function event(){
    btnComparar.addEventListener('click',CompararDatos);
}

function CompararDatos(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    let imprimir = document.getElementById('resultado');


    if(numero1>numero2){
        if(numero1>numero3){
            imprimir.innerHTML=`
            <H4 class="alert-Heading text-center text-info">El número  ${numero1} es numero mayor </H4> 
            `

        }
        else{
            imprimir.innerHTML=`
            <H4 class="alert-Heading text-center text-info">El número  ${numero3} es numero mayor </H4> 
            `
        }
    }
    else{
        if(numero2>numero3){
            imprimir.innerHTML=`
            <H4 class="alert-Heading text-center text-info">El número  ${numero2} es numero mayor </H4> 
            `

        }
        else{
            imprimir.innerHTML=`
            <H4 class="alert-Heading text-center text-info">El número  ${numero3} es numero mayor </H4> 
            `

        }
    }
}