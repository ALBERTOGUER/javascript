let array = [];
let array2 = [];
let btnfind = document.getElementById('btnfind');
let varhelp = 0;
let valor = 0;
let contador = 0;

Evento();

function Evento() {

    btnfind.addEventListener('click', find);
}

function find() {
    valor = Number(document.getElementById('valor').value);
    console.log(valor);

    for (let i = 0; i < 25; i++) {
        array[i] = Math.floor(Math.random() * 100);



    }
    for (let y = 0; y < 25; y++) {

        for (let x = 0; x < 25; x++) {

            if (array[x] > array[x + 1]) {
                varhelp = array[x + 1];

                array[x + 1] = array[x];
                array[x] = varhelp;
            }

        }
    }

    let sizerray = array.length
    sizerray = Math.ceil(sizerray / 2);
    console.log(sizerray);



    for (let n = 0; n < 5; n++) {
        // console.log(array[sizerray].value);

        if (valor == array[sizerray]) {
            console.log(`el numero esta en la posicion ${sizerray}`);


        }

        else if (valor < array[sizerray]) {
            for (let t = 0; t < sizerray; t++) {
                array2[t] = array[t];
                

            }

        } else if(valor > array[sizerray]){
            for (let t = sizerray; t<array.length; t++) {

                array2[contador] = array[t];
                contador++;

            }
            contador =0;

        }
        // sizerray = Math.ceil(sizerray / 2);
    }
    // console.log(array[sizerray]);


    console.log(array);
    console.log(array2);
}


