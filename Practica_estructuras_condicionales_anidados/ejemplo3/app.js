let btn= document.getElementById('btnCalcular');

let grade1 = document.getElementById('grade1');
let grade2 = document.getElementById('grade2');
let grade3 = document.getElementById('grade3');

event();

function event(){
btn.addEventListener('click',calcularProm);

}

function calcularProm(){
let resultado= Number(grade1.value) + Number(grade2.value) + Number(grade3.value);
//Esta operación es similar a escribir "resultado = resultado/3" 
resultado /=3;
let imprimir = document.getElementById('resultado');

    if(resultado>=9){
        imprimir.innerHTML=`<h1>El promedio es: <span id="resultado" class="badge badge-secondary"> ${resultado} Aprobado </span></h1>`;
    }else if(resultado < 9 && resultado >= 6){

        imprimir.innerHTML=`<h1>El promedio es: <span id="resultado" class="badge badge-secondary"> ${resultado} Regular  </span></h1>`;
    
    }else{
        imprimir.innerHTML=`<h1>El promedio es: <span id="resultado" class="badge badge-secondary"> ${resultado} Reprobado  </span></h1>`;
    
    }
}