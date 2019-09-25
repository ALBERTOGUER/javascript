let btnSize = document.getElementById('btnSize');
let btnlenght = document.getElementById('btnlenght');
let Size = 0;

contador = 0;
Evento();

function Evento() {
    btnSize.addEventListener('click', fill);
    btnlenght.addEventListener('click', measure);
}

function fill() {

    Size = Number(document.getElementById('Size').value);
    let concatenar = "";
    let array = [];


    for (let i = 0; i < Size; i++) {
        concatenar += `<li class="list-group-item mb-2 mt-2"><input id="nombresid${i}" class="form control" placeholder="Ingrese nombre"></input></li>`;
    }
    let imprimir = document.getElementById('arraylist1');

    imprimir.innerHTML = concatenar;

}

function measure() {
    let nombres = [];
    let concatenar2 = "";
    

 for (let x = 0; x < Size; x++) {
        nombres = document.getElementById(`nombresid${x}`).value;
        concatenar2 += `<li class="list-group-item mb-2 mt-2">${nombres.length}</li>`;
    }
    let arraylist1 = document.getElementById('arraylist2').innerHTML = concatenar2;
}
