let btnaddelements = document.getElementById('Agregarelementos');

evenlisteneer();

function evenlisteneer() {
    btnaddelements.addEventListener('click', fillarray);
}


/* ===============
Inicia parte de aplicación resulta por medio de fuerza bruta
================ */
function fillarray() {
    let inputvalue = document.getElementById('agregarelemntos');
    let ArrayprimeNumbers = [];

    console.time('iniciofuerzabruta');

    for (let x = 0; x < Number(inputvalue.value); x++) {

        let Numberprimerandom = IsPrime();

        if (Numberprimerandom === null) {
            x--
        } else {
            ArrayprimeNumbers[x] = Numberprimerandom;
        }
    }
    console.timeEnd('iniciofuerzabruta');

    console.log(ArrayprimeNumbers);

    let maximo = 0;

    for (let x = 0; x <= ArrayprimeNumbers.length ; x++) {
        if (maximo<ArrayprimeNumbers[x]) {
            
            maximo=ArrayprimeNumbers[x];

        }
    }
    console.log(`el mayor es ${maximo}`);

}

function IsPrime() {
    let NumberRandom = Math.floor(Math.random() * 1000) + 1;

    for (let i = 2; i < NumberRandom; i++) {
        if (NumberRandom % i == 0);
    }

    return NumberRandom;
}

/* ===============
   Termina aplicacion fuerza bruta
================ */

/* ===============
   Inicia aplicacion resuelta por paradigma dinamico
================ */
// let ArrayNumberPrimeDinamyc = [];

// let primenumber = 0;

// function fillarrayDinamic() {

//     for (let i = 0; i <= 1000; i++) {
//         primenumber++;
//         if(primenumber%i==0){
//             ArrayNumberPrimeDinamyc.push(primenumber);
//         }
//     }

// }