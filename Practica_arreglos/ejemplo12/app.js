let btnarray = document.getElementById('btnarray');
let Size = "";
let array1 = [];

Evento();

function Evento() {
    btnarray.addEventListener('click', Sizefunction);
}

function Sizefunction() {
    Size = Number(document.getElementById('Size').value);
    let concat = "";


    for (let i = 0; i < Size; i++) {

        array1[i] = Math.floor(Math.random() * 100);

        concat += `<li class="list-group-item">${array1[i]}</li>`;

    }

    console.log(array1);
    document.getElementById('array1').innerHTML = concat;
    pares();

}

function pares() {
    let concat2="";
    
    for(x=0;x<Size;x++){
        if(array1[x]%2==0){

            concat2 += `<li class="list-group-item">${array1[x]}</li>`;
        }
    }
    document.getElementById('array2').innerHTML = concat2;

}