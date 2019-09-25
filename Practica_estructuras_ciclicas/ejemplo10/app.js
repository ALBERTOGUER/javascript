let btnAgregar = document.getElementById('btnAgregar');
letbtnCalcular = document.getElementById('btnCalcular');
let contador = 0;

btnAgrega();

function btnAgrega() {
    btnAgregar.addEventListener('click', new_element);
    btnCalcular.addEventListener('click', hola)

}

function new_element() {

    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');


    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let inputGproup = document.createElement('div');
    inputGproup.setAttribute('class', 'input-group mb-3');

    let inputarticulo = document.createElement('input');
    inputarticulo.setAttribute('type', 'text');
    inputarticulo.setAttribute('class', 'form-control');
    inputarticulo.setAttribute('placeholder', 'Ingresa el precio del articulo');
    inputarticulo.setAttribute('id', `input${contador}`);



    let contenedor = document.getElementById('contenedor');


    contenedor.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputGproup);
    inputGproup.appendChild(inputarticulo);


   
}

function hola() {

    let contadormayoramil = 0;
    let contadormenormil = 0;
    let contadormenorquinientos = 0;
    let sumamayores = 0;
    let sumamenoresmil =0;
    let sumamenoresquinientos=0;
    let total = 0; 
    for (let i = 1; i <= contador; i++) {
        let input = Number(document.getElementById(`input${i}`).value);

        if (input > 1000) {
            contadormayoramil++;
            sumamayores+=input;
        }
        else if (input<=1000 && input>500){
            contadormenormil++;
            sumamenoresmil+=input;
        }
        else {
            contadormenorquinientos++;
            sumamenoresquinientos+=input;

        }

        
    }
     total = sumamenoresquinientos + sumamayores + sumamenoresmil;

    let imprimir1= document.getElementById('resultado1');
    let imprimir2= document.getElementById('resultado2');
    let imprimir3= document.getElementById('resultado3');
    let imprimir4= document.getElementById('resultado4');
    let imprimir5= document.getElementById('resultado5');
    let imprimir6= document.getElementById('resultado6');
    let imprimir7= document.getElementById('resultado7');

    imprimir1.innerText=contadormayoramil;
    imprimir2.innerText=contadormenormil;
    imprimir3.innerText=contadormenorquinientos;
    imprimir4.innerText=sumamayores;
    imprimir5.innerText=sumamenoresmil;
    imprimir6.innerText=sumamenoresquinientos;
    imprimir7.innerText=total;

    

}

