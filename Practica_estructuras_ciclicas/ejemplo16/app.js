let btnCalcular = document.getElementById('btnCalcular');

Event();

function Event() {
    btnCalcular.addEventListener('click', hola);
}

function hola() {
    let numero = Number(document.getElementById('numero').value);
    let imprimir = document.getElementById('resultado');
    let strings = "";
    // let contador = 0;



    for (let i = 1; i <= numero; i++) {
        let contador = 0

        for (let a = 1; a <= i; a++) {


            if (i % a == 0) {
                contador++;
            }

            

        }
        if (contador == 2) {
            strings += `${i}<br>`;

        }




    }
    imprimir.innerHTML = strings;
}