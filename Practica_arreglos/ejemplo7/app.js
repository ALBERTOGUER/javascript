let btnfill = document.getElementById('btnfill');
let first_value=0;

event();

function event(){
btnfill.addEventListener('click',fill)
}

function fill(){
    let sizeArray = Number(document.getElementById('sizeArray').value);
    let multimple = Number(document.getElementById('multiple').value)
    let array=[];
    multiple = multimple;
    
    let concatenar="";

    for(let i=1; i<=sizeArray;i++){
       
        multiple=multimple*[i];
        array[i]=multiple;
       

        concatenar+=`<li class="list-group-item mb-2 mt-2">${array[i]}</li>`;
    }
    hola(concatenar);
    
  
    first_value=0;
}
function hola(x){
    let imprimir=document.getElementById('ArrayList');
    imprimir.innerHTML=x;
}