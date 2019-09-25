let btnaddelemnts = document.getElementById('btnCalcular');



evenlistener();

function evenlistener() {
    btnaddelemnts.addEventListener('click', fillarray);
}

function fillarray() {
    let inputaddelements = document.getElementById('agregarelemntos');
    
    let dataArray = [];

    for (i = 0; i < Number(inputaddelements.value); i++) {

        dataArray[i] = Math.floor(Math.random() * 10);


    }
    sumar(dataArray);
}

function sumar(dataArray) {
let datosimprimir="";
let sumar=0;
    for (let x = 0; x < (dataArray.length); x++) {
        datosimprimir+=`<li class="list-group-item mt-2">${dataArray[x]}</li>`
        console.log(`${dataArray[x]}`);
        sumar+=dataArray[x];


    }
    let imprimir = document.getElementById('imprimir');
    imprimir.innerHTML=datosimprimir;
    
    document.getElementById('total').innerHTML=sumar;

}
random();
function aleatorio(){
    var numPosibilidades = 100 - (-100);
    var aleat = Math.random() * numPosibilidades
    aleat = Math.round(aleat)
    let random = parseInt(inferior) + aleat;
    console.log(random);
}
