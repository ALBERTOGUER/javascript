let btnaddelement = document.getElementById('btnnaddelement');
let btninvert = document.getElementById('btninvert');
let imprimir = document.getElementById('array1');
let size = 0;

let array1 = [];
let array2 = []
let concat = "";
let concat2 = "";

evento();

function evento() {
    btnaddelement.addEventListener('click', newelement);
    btninvert.addEventListener('click', invert);
}

function newelement() {
    size = Number(document.getElementById('Size').value);

    for (let i = 0; i < size; i++) {

        concat += `<li class="list-group-item mt-2" ><input id="idarray${[i]}"></input></li>`;
       

    }
    imprimir.innerHTML = concat;
    concat="";

    

}

function invert() {

    
    for (let x = 0; x < size; x++) {
        array1[x] = document.getElementById(`idarray${[x]}`).value;

        

    }

    console.log(array1);
    array2 = array1.reverse();
    console.log(array2);
    for( let y=0; y< size; y++){
        concat2 += `<li class="list-group-item mt-2" >${array2[y]}</li>`;
    }

    document.getElementById('array2').innerHTML=concat2;


    
}









