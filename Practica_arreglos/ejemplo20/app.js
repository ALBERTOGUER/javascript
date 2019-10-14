let array = [];
let array2 = [];
let btnfind = document.getElementById('btnfind');
let varhelp = 0;


Evento();

function Evento() {

    btnfind.addEventListener('click', find);
}

function find() {

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
    let valor = Number(document.getElementById('valor').value)

    for(let n=0;n<5;n++){
         sizerray = Math.ceil(sizerray/2);
         if(valor==array[sizerray]){
          console.log(`el numero esta en la posicion${sizerray}`)
         }

         else if(valor<array[sizerray].value){
             for(let t = 0; t<sizerray;t++){
                 array2[t]=sizerray[2];
             }

         }else{
             for(let t=sizerray;t=)

         }
    }
    console.log(array);

}
