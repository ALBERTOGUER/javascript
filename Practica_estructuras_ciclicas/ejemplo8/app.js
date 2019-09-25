let contenedor = document.getElementById('contenedor');
let i = 0;

for ( i = 1; i <= 6; i++) {
    let alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success');
    alert.setAttribute('role', 'alert');
    let headinh = document.createElement('h4');
    headinh.setAttribute('class', 'alert-heading')
    let parragraph = document.createElement('input');
    parragraph.setAttribute('id', `resultado${i}`);

    contenedor.appendChild(alert);
    alert.appendChild(headinh);
    alert.appendChild(parragraph);
    headinh.appendChild(document.createTextNode(`dia${i}`));

}

let calcular = document.getElementById('btnCalcular');

event();

function event() {
    calcular.addEventListener('click',hola);
}

function hola() {
    let suma = 0;
    let sueldo = Number(document.getElementById('sueldo').value);
    for(let a=1;a<i;a++){
        let horas = Number(document.getElementById(`resultado${a}`).value);
        suma+=horas;

    }
    resultado =suma*sueldo;
    let imprimir=document.getElementById('resultado');
    imprimir.innerText=resultado;

}