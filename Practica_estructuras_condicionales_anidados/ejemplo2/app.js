let inputNumber = document.getElementById('numero');

let imprimir=document.getElementById('resultado');

event();
function event(){
    inputNumber.addEventListener('keypress',calcularCifras);
    inputNumber.addEventListener('blur',calcularCifrasblur);
}

function calcularCifrasblur(){
    if(Number(inputNumber.value)<=9){
        imprimir.innerHTML=`<h4 class="alert-heading">El número de cifras es: 1 cifras </h4>
        `;
        return;
    }
    if(Number(inputNumber.value)<=99){
        imprimir.innerHTML=`<h4 class="alert-heading">El número de cifras es: 2 cifras </h4>
        `;
        return;
    }
    if(Number(inputNumber.value)<=999){
        imprimir.innerHTML=`<h4 class="alert-heading">El número de cifras es: 3 cifras </h4>
        `;
        return;
    }
    if(Number(inputNumber.value)>999){
        imprimir.innerHTML=`<h4 class="alert-heading text-danger">Error:número mayor a cuatro cifras </h4>
        `
        return;
    }
    

}

function calcularCifras(event){
    if(event.key=="Enter"){
        console.log(event);
        

        

        if(Number(inputNumber.value)> 999){
            imprimir.innerHTML=`<h4 class="alert-heading text-danger">Error:número mayor a cuatro cifras </h4>
            `
        }

        if (Number(inputNumber.value) <= 999){
            imprimir.innerHTML=`<h4 class="alert-heading">El número de cifras es: 3 cifras </h4>
            `;

        }
        if (Number(inputNumber.value) <= 99){
            imprimir.innerHTML=`<h4 class="alert-heading">El número de cifras es: 2 cifras </h4>
            `;

        }
        if (Number(inputNumber.value) <= 9){
            imprimir.innerHTML=`<h4 class="alert-heading">El número de cifras es: 1 cifras </h4>
            `;

        }



        

    }
}