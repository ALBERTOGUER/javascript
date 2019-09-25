let btnAgregarArticulo = document.getElementById('btnAgregarArticulo');
let contador = 0;
let contadorPrecioArticulo = 0;
let btnCalcularTotal = document.getElementById('btnCalcularTotal');

event();

function event() {
    btnAgregarArticulo.addEventListener('click', agregararticulo);
    btnCalcularTotal.addEventListener('click', calcularTotal);
}

function agregararticulo() {

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
    inputarticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');

    let inputGproupappen = document.createElement('div');
    inputGproupappen.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`);
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary'); +

        buttonAgregarPrecio.appendChild(document.createTextNode('Agregar precio'));

    let listaarticulos = document.getElementById('listaaarticulos');


    listaarticulos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputGproup);
    inputGproup.appendChild(inputarticulo);
    inputGproup.appendChild(inputGproupappen);
    inputGproupappen.appendChild(buttonAgregarPrecio);

    eventlisteneragregarpecio();

}

function eventlisteneragregarpecio() {
    let buttonAgregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`);

    buttonAgregarPrecio.addEventListener('click', CrearInputprecio);


}

function CrearInputprecio(event) {
    contadorPrecioArticulo++;

    event.target.setAttribute('disabled', true);


    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let inputGproup = document.createElement('div');
    inputGproup.setAttribute('class', 'form-group mb-3');

    let inputprecioarticulo = document.createElement('input');
    inputprecioarticulo.setAttribute('type', 'number');
    inputprecioarticulo.setAttribute('class', 'form-control');
    inputprecioarticulo.setAttribute('placeholder', 'Precio del articulo articulo');
    inputprecioarticulo.setAttribute('id', `valorArticulo${contadorPrecioArticulo}`);

    let listaarticulos = event.target.parentElement.parentElement.parentElement.parentElement;

    listaarticulos.appendChild(divCol);
    divCol.appendChild(inputGproup);
    inputGproup.appendChild(inputprecioarticulo);
}

function calcularTotal() {
    let suma = 0;
    let imprimir = document.getElementById('resultado');

    for (let i = 1; i <= contadorPrecioArticulo; i++) {
        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value);

        if (valorInput >= 200) {

            suma += valorInput * .85;
        } else if (valorInput < 200 && valorInput >= 100) {
            suma += valorInput * .88;
        }
        else {
            suma += valorInput * .90;
        }
    }

    imprimir.innerText=suma;
}
