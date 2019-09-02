let btnCalcular = document.getElementById('btnCalcular');


//Se invoca función eventListener
eventListener();

// Se crea la función eventListener para encapsular los objetos que llevarán el método del event listener
function eventListener() {

    btnCalcular.addEventListener('click');

}

function ObtenerArea() {

    //Se obtiene el valor de los input y se convierte su tipo de dato a number y se le asigna el valor a la variable correspondiente
    let Base = Number(document.getElementById('Base').value);
    let Altura = Number(document.getElementById('Altura').value);

    resultado =
    

}