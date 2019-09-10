let btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', hola);


}

function hola() {
    let años = Number(document.getElementById('años').value);
    let sueldo = Number(document.getElementById('sueldo').value);
    let bono_antiguedad = 0;
    let bono_sueldo=0;
    let bono_final=0;

    if (años > 2 && años < 5) {
        bono_antiguedad = sueldo * .20;
    }
    else if(años>= 5){
        bono_antiguedad = sueldo * .30;
    }
    else {
        
    }

    if(sueldo<=1000){
        bono_sueldo = sueldo *.25;
        
    }
    else if(sueldo>1000 && sueldo<3500){
        bono_sueldo = sueldo *.15;
        
    }

    else{
        bono_sueldo = precio *.10;
    }

    if(bono_sueldo >= bono_antiguedad){
         bono_final = bono_sueldo;
    }
    else{
        bono_final = bono_antiguedad;
    
    }

    let imprimir= document.getElementById('resultado');

    imprimir.innerText=bono_final;


}