let btnagregarelementos = document.getElementById('AgregarElementos');
let btnmostrarelementos = document.getElementById('MostrarElementos');


//Declaracion global del array

let elementos = [];

//declarar contador global
let contador = 0;

evento();

function evento() {
    btnagregarelementos.addEventListener('click', Agregarelementos);
    btnmostrarelementos.addEventListener('click', CalcularMedia);

}

function Agregarelementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        elementos[contador] = Number(valorInput.value);
        console.log(elementos);

        valorInput.value = "";

        contador++;
    }

}

function CalcularMedia() {
     let promedio = 0;

    for (let i = 0; i < elementos.length; i++) {

        promedio += elementos[i];

    }

    promedio/=elementos.length;

    contador=0;
    elementos=[];

    let imprimir=`<li class="list-group-item"> El promedio de los números otrogados es:${promedio}</li>`;

    document.getElementById('ListaImprimir').innerHTML=imprimir;
}