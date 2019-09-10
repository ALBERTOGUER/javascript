let btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', hola);
}

function hola() {
    let horas = Number(document.getElementById('horas').value);
    let resultado= document.getElementById('resultado');
    let valor = 0;
    let total = 0;
    let valor1 = 5;
    let valor2 = 4;
    let valor3 = 3;
    let valor4 = 2;
    let resta = 0;

    let valor1_= valor1*2;
    let valor2_= valor2*3;
    
    

    if (horas <= 2) {


        total = valor1 * horas;
    }
    else if (horas > 2 && horas <= 5) {
       
        resta = horas - 2;
        total = (resta * valor2) + valor1_;



    }
    else if (horas > 5 && horas <= 10) {

        resta = horas - 5;
     
        total = (resta* valor3) + valor1_+ valor2_;


        
    }
    else{
        total=horas*valor4;
    }
    resultado.innerHTML= ` <h1>El total es: <span class="badge badge-secondary">${total}</span></h1> `;



}

