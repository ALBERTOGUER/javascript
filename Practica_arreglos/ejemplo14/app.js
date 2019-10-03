let array = [];
let valor = 0;
let contador = 0;
let concat = "";

let flag=0;


for (let i = 1000; i >= 1; i--) {


    for (let x = 2; x < i; x++) {

        if (i % x == 0) {
            // contador--;
            //    i--;
            flag=1
            break;
        }


  

    }

    if(flag!=1){

        array[contador] = i;
        concat += `<li class="list-group-item">${array[contador]}</li>`;
      }

      flag=0;


    contador++;




}
document.getElementById('array1').innerHTML = concat;

console.log(array);