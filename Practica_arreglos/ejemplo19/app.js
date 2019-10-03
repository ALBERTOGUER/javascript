let array1 = [];
let array2 = [];
let numero = 0;
let concat = "";
let concat2 = "";
let aumento = 0;

for (let i = 0; i < 30; i++) {

    let value = cien_trecientos();
    if (value >= 100 && value <= 300) {
        array1[i] = value;
        concat += `<li class="list-group-item mt-2" >${array1[i]}</li>`;
    }
    else {
        i--;
    }



}
document.getElementById('array1').innerHTML = concat;


for (let x = 0; x < array1.length; x++) {
    let value = array1[x];
   
    if(value%2!=0){
     array2[aumento]=array1[x];
     concat2 += `<li class="list-group-item mt-2" >${array2[aumento]}</li>`;
    }
    else{
        aumento--;

    }
    aumento++;
   
}
document.getElementById('array2').innerHTML = concat2;

console.log(array2);


function cien_trecientos() {
    numero = (Math.round(Math.random() * 1000));


    return numero;



}