let btn = document.getElementById('btnCalcular');

event();

function event(){
    btn.addEventListener('click', hola);
}
function hola(){
    let dia = document.getElementById('dia').value;
    let dias = "otro";

    if (dia == 1){
        dias = "lunes";

    }else if (dia == 2){
        dias = "martes";
    
    }else if (dia == 3){
        dias = "miercoles";
    
    }else if (dia == 4){
        dias = "jueves";
    
    }else if (dia == 5){
        dias = "viernes";
    
    }else if (dia == 6){
        dias = "sabado";
    
    }else if (dia == 7){
        dias = "domingo";
    }else{
        dias = "No existe";
    }

    let imprimir = document.getElementById('resultado');

    imprimir.innerText=dias;
}