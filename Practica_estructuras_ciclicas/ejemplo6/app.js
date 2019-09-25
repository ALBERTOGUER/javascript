let btnCalcular = document.getElementById('btnCalcular');
let btnagregar = document.getElementById('btnAgregar');
let contador=0;

evento();

function evento() {
    // btnCalcular.addEventListener('click',Calculo);
    btnagregar.addEventListener('click',nuevoFG);
    btnCalcular.addEventListener('click',calculo);
}

function nuevoFG(){
    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class','row');
    
    let divCol = document.createElement('div');
    divRow.setAttribute('class','col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class','input-group mb-3');

    let inputarticulo = document.createElement('input');
    inputarticulo.setAttribute('type', 'text');
    inputarticulo.setAttribute('class', 'form-control');
    inputarticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');
    inputarticulo.setAttribute('id',`contador${contador}`);
    
    
    let lista = document.getElementById('lista-numeros');

    lista.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputGroup);
    inputGroup.appendChild(inputarticulo);




}

function calculo(){
    let sumamayores=0;
    let sumamenores=0;
    let imprimir= document.getElementById('menores');
    let imprimir2= document.getElementById('mayores');

    for (let i=1; i<=contador;i++){

        let valorinput = Number(document.getElementById(`contador${i}`).value)
        if(valorinput<=0){
        sumamenores++;
        }
        else{
            sumamayores++;
        }
    }

    imprimir.innerText=sumamenores;
    imprimir2.innerText=sumamayores;


}
 
