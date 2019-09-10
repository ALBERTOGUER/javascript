let btn = document.getElementById('btnCalcular');
let tipo = document.getElementById('tipo');


eventin();

function eventin() {
    btn.addEventListener('click', hola);
    tipo.addEventListener('blur', revision);
    

}

function revision() {
    
   

    if (tipo.value != "A" && tipo.value != "B" && tipo.value != "C" && tipo.value != "D") {
        event.target.focus();
    }

}
function hola(){
    let precio = 0;
    let cantidad = Number(document.getElementById('cantidad').value);
    let kms = Number(document.getElementById('kilometros').value);
    let resultado = document.getElementById('resultado');

    if( tipo.value == "A"){
        precio = 1.5;
    }
    else if( tipo.value == "B"){
        precio = 2 ;
    }
    else if( tipo.value == "C"){
        precio = 2.5 ;
    }
    else{
        precio = 3 ;
    }

    console.log(precio);
    console.log(cantidad);
    console.log(kms);

   
    let total =0;
    let valor_persona=0;
    

    if(cantidad < 20){
       let  cantidad2 =20;
        total = cantidad2 * precio * kms;
        valor_persona=total/cantidad;
        
    }
    else{
        total = cantidad * precio * kms;
        valor_persona=precio * kms;
    }
resultado.innerHTML= ` <h1>El total es: <span class="badge badge-secondary">${total}</span></h1> <br>  <h1>El precio por persona es: <span class="badge badge-secondary">${valor_persona}</span></h1>`;


}

