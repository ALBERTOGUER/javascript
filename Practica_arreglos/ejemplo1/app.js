let btnagregarelementos = document.getElementById('AgregarElementos');
let btnmostrarelementos = document.getElementById('MostrarElementos');


//Declaracion global del array

let elementos = [];

//declarar contador global
let contador = 0;

evento();

function evento() {
    btnagregarelementos.addEventListener('click', Agregarelementos);
    btnmostrarelementos.addEventListener('click', Mostrarrelementos);

}

function Agregarelementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        elementos[contador] = valorInput.value;

        valorInput.value="";

        contador++;
    }

}

function Mostrarrelementos() {

    let informacionimprimir = "";

    for (let i = 0; i < elementos.length; i++) {
        informacionimprimir += `<li class="list-group-item mt-2">${elementos[i]}</li>`;
    }
    contador = 0;

    document.getElementById('ListaImprimir').innerHTML = informacionimprimir;
}