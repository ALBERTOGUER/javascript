let btn = document.getElementById('btnCalcular');

event();

function event() {

    btn.addEventListener('click', hola);

}

function hola() {
    let imprimir = document.getElementById('resultado');
    let numero = Number(document.getElementById('numero').value);

    if(isNaN(numero)){
        return;
    }
    if (numero > 9999) {
        imprimir.innerHTML = `<h1>Error el número es mayor a 4 dígitos: <span class="badge badge-secondary"></span></h1> `;

    }
    else if (numero <= 9999 && numero >= 1000) {
        let modulo1 = numero % 10;
        let valor1 = Math.floor(numero / 10);
        let modulo2 = valor1 % 10;
        let valor2 = Math.floor(valor1 / 10);
        let modulo3 = valor2 % 10;
        let valor3 = Math.floor(valor2 / 10);
        let modulo4 = valor3 % 10;
        let valor4 = Math.floor(valor3 / 10);

        let modulo1_prueba1 = modulo1 * 1000;
        let modulo2_prueba1 = modulo2 * 100;
        let modulo3_prueba1 = modulo3 * 10;
        let modulo4_prueba1 = modulo4 * 1;

        let modulo1_prueba2 = modulo4 * 1000;
        let modulo2_prueba2 = modulo3 * 100;
        let modulo3_prueba2 = modulo2 * 10;
        let modulo4_prueba2 = modulo1 * 1;

        let suma_prueba1 = modulo1_prueba1 + modulo2_prueba1 + modulo3_prueba1 + modulo4_prueba1;
        let suma_prueba2 = modulo1_prueba2 + modulo2_prueba2 + modulo3_prueba2 + modulo4_prueba2;



        if ( suma_prueba1 == suma_prueba2) {
            imprimir.innerHTML = `<h1>El número de 4 dígitos: <span class="badge badge-secondary">Es capicúa</span></h1> `;
        }else{
            imprimir.innerHTML = `<h1>El número de 4 dígitos: <span class="badge badge-secondary">No es capicúa</span></h1> `;
        }
    }
    else if (numero <= 999 && numero >= 100) {
        let modulo1 = numero % 10;
        let valor1 = Math.floor(numero / 10);
        let modulo2 = valor1 % 10;
        let valor2 = Math.floor(valor1 / 10);
        let modulo3 = valor2 % 10;
        let valor3 = Math.floor(valor2 / 10);
        

        let modulo1_prueba1 = modulo1 * 100;
        let modulo2_prueba1 = modulo2 * 10;
        let modulo3_prueba1 = modulo3 * 1;
        

        let modulo1_prueba2 = modulo3 * 100;
        let modulo2_prueba2 = modulo2 * 10;
        let modulo3_prueba2 = modulo1 * 1;
        

        let suma_prueba1 = modulo1_prueba1 + modulo2_prueba1 + modulo3_prueba1;
        let suma_prueba2 = modulo1_prueba2 + modulo2_prueba2 + modulo3_prueba2;

                console.log (suma_prueba2);
                console.log  (suma_prueba1);

        if ( suma_prueba1 == suma_prueba2) {
            imprimir.innerHTML = `<h1>El número de 3 dígitos: <span class="badge badge-secondary">Es capicúa</span></h1> `;
        }else{
            imprimir.innerHTML = `<h1>El número de 3 dígitos: <span class="badge badge-secondary">No es capicúa</span></h1> `;
        }
    }
    else if (numero <= 99 && numero >= 10) {
        let modulo1 = numero % 10;
        let valor1 = Math.floor(numero / 10);
        let modulo2 = valor1 % 10;
        let valor2 = Math.floor(valor1 / 10);
      

        let modulo1_prueba1 = modulo1 * 10;
        let modulo2_prueba1 = modulo2 * 1;
     

        let modulo1_prueba2 = modulo2 * 10;
        let modulo2_prueba2 = modulo1 * 1;


        let suma_prueba1 = modulo1_prueba1 + modulo2_prueba1  ;
        let suma_prueba2 = modulo1_prueba2 + modulo2_prueba2  ;



        if ( suma_prueba1 == suma_prueba2) {
            imprimir.innerHTML = `<h1>El número de 2 dígitos: <span class="badge badge-secondary">Es capicúa</span></h1> `;
        }else{
            imprimir.innerHTML = `<h1>El número de 2 dígitos: <span class="badge badge-secondary">No es capicúa</span></h1> `;
        }

    }else{
        imprimir.innerHTML = `<h1>El número de un dígito:<span class="badge badge-secondary">Es capcicúa</span></h1> `;
    }

}
