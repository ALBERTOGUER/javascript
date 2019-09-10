let btn = document.getElementById('btnCalcular');

event();

function event() {
    btn.addEventListener('click', hola);
}

function hola() {
    let edad1 = Number(document.getElementById('edad1').value);
    let edad2 = Number(document.getElementById('edad2').value);
    let imprimir = document.getElementById('resultado')
    if (edad1 > edad2) {
        let diferecia = edad1 - edad2;
        imprimir.innerHTML = `<h1>El mayor es:<span class="badge badge-secondary">${edad1}<span></h1>
                      <br><h1>La diferencia es:<span class="badge badge-secondary">${diferecia}<span></h1>`

    }
    else if (edad2 == edad1){
        
        imprimir.innerHTML = `<h1>La edad es la misma<span class="badge badge-secondary"><span></h1>`

    }
    else{
        let diferecia = edad2 - edad1;
        imprimir.innerHTML = `<h1>El mayor es:<span class="badge badge-secondary">${edad2}<span></h1>
                      <br><h1>La diferencia es:<span class="badge badge-secondary">${diferecia}<span></h1>`

    }
}
