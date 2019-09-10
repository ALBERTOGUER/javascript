let btn = document.getElementById('btnCalcular');



Event();

function Event() {
    btn.addEventListener('click', revision);
}

function revision() {
   
    let numero_personas = Number(document.getElementById('persona').value);
  
    let imprimir = document.getElementById('resultado');

    if (numero_personas <= 200) {
        imprimir.innerText = 'El precio es 95$';
    }
    else if (numero_personas > 200 && numero_personas <= 300) {
        imprimir.innerText = 'El precio es 85$';
    }
    else {
        imprimir.innerText = 'El precio es 75$';
    }
}