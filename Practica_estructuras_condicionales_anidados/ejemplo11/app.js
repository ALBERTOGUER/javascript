let btn = document.getElementById('btnCalcular');

event();
function event() {
    btn.addEventListener('click', hola);
}

function hola() {
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let articulo1 = Number(document.getElementById('articulo1').value);
    let articulo2 = Number(document.getElementById('articulo2').value);
    let articulo3 = Number(document.getElementById('articulo3').value);
    let articulo4 = Number(document.getElementById('articulo4').value);

    let total = articulo1 + articulo2 + articulo3 + articulo4;
    let resultado = document.getElementById('resultado');
    console.log(total);


    if (total <= presupuesto) {
resultado.innerHTML=` <h1> <span class="badge badge-secondary">El precio está dentro del presupuesto</span>`
    }
    else{
        resultado.innerHTML=`   <h1><span class="badge badge-secondary">El precio está fuera de presupuesto</span>
        `    }
}