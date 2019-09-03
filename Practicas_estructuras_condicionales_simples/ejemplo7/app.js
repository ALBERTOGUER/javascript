let btn = document.getElementById('btnCalcular');
let precio = document.getElementById('valor');

addEvenT();

function addEvenT(){
precio.addEventListener('blur',revision);
btn.addEventListener('click', hola);

}

function revision(event){
    if(isNaN(event.target.value)){
        event.target.focus();
    }
}

function hola(){
    let imprimir = document.getElementById('resultado');

    if(Number(precio.value)>1000){
        let resultado = Number(precio.value) -  ((Number(precio.value)/100)*20) 
        imprimir.innerText= resultado;
    }
    else{
        imprimir.innerText=precio.value;
    }
}