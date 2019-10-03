let array1 = [];
let array2 = [];
let aleatorios_50_100 = 0;
let concat="";
let concat2="";


for (let i = 0; i < 10; i++) {

    aleatorios();

    if (aleatorios_50_100 >= 50 && aleatorios_50_100 <= 100) {

        array1[i] = aleatorios_50_100;
        concat+= `<li class="list-group-item">${array1[i]}</li>`;
    }
    else {
        i--;
    }
    

}
document.getElementById('array1').innerHTML=concat;

function aleatorios() {

    aleatorios_50_100 = Math.floor(Math.random() * 100);

    return aleatorios_50_100;


}

for(let x=0;x<10;x++){
    array2[x]=(array1[x] * (.5));
    concat2+= `<li class="list-group-item">${array2[x]}</li>`;

}
document.getElementById('array2').innerHTML=concat2;

console.log(array1);