let btnagregarelementos = document.getElementById('AgregarElementos');

let elementos = [];

let contador = 0;

evento();

function evento() {
    btnagregarelementos.addEventListener('click', agregarelementos);
}

function agregarelementos() {

    let valor = document.getElementById('InputNumero');
    let i = 0

    for (i = 0; i < elementos.length; i++) {

        if (Number(valor.value) === elementos[i]) return


    }

    elementos[i] = Number(valor.value);

    let datosimprimir = "";

    for (let x = 0; x < elementos.length; x++) {
        datosimprimir += `<li class="list-group-item">${elementos[x]}</li>`;
    }
    console.log(datosimprimir);

    document.getElementById('ListaImprimir').innerHTML=datosimprimir;
    
}