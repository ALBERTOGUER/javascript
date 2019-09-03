let btn= document.getElementById('btnCalcular');
let clave = document. getElementById('clave');
let precio = document.getElementById('precio');

addEventListener();

function addEventListener(){

    btn.addEventListener('click', hola);
    clave.addEventListener('blur', revision);
    precio.addEventListener('blur', revision);
}

function revision(event){
    if(isNaN(event.target.value)){
        event.target.focus();
    }
    
    if((clave.value != "01" && clave.value != "02" )){
        event.target.focus();
    }
   

    
}

function hola(){
    let imprimir = document.getElementById('resultado');

     if(clave.value==01){
         let resultadin= Number(precio.value)-((Number(precio.value)/100)*10);
         imprimir.innerText=resultadin;
     }
     else{
        let resultadin= Number(precio.value)-((Number(precio.value)/100)*20);
        imprimir.innerText=resultadin;
     }


}