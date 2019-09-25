let btnCalcular = document.getElementById('btnCalcular');

Event();

function Event() {
    btnCalcular.addEventListener('click', hola);
}

function hola() {
    let numero = Number(document.getElementById('numero').value);
    let imprimir = document.getElementById('resultado');
    let strings = "";





    for (let i = 1; i <= numero; i++) {
        let suma = 0;

        
        

        for (let a = 1; a < i; a++) {

            if (i % a == 0) {
                suma += a;
              
           }


        }


        if (suma == i) {
            strings += `${i}<br>`;
            console.log(i);
            console.log(suma);
            
            
        }







    }
    imprimir.innerHTML = strings;
}