let btnAgregarAhorro = document.getElementById('btnAgregarAhorro');

let contador = 0;

eventListener();

function eventListener() {

    btnAgregarAhorro.addEventListener('click', AgregarAhorro);
}

function AgregarAhorro() {
    if (contador < 12) {

        contador++;

        let ahorro = document.getElementById('ahorroMensual').value;

        let spanAhorro = document.createElement('span');

        spanAhorro.setAttribute('id',`ahorroMensual${contador}`)

        let textoSpan = document.createTextNode(`${ahorro}`);

        spanAhorro.appendChild(textoSpan);

        let ImprimirSpan = document.getElementById(`mes${contador}`);

        ImprimirSpan.appendChild(spanAhorro);

        calcularAhorro();

        
    }
}

function calcularAhorro(){

let suma=0;

for(let i=1;i<=contador;i++){

    let valorObtenido= document.getElementById(`ahorroMensual${i}`).textContent;

    suma += Number(valorObtenido);
}

let imprimirahorrototal=document.getElementById('Total');

imprimirahorrototal.innerHTML=`<span>Total$${suma}</span>`


}