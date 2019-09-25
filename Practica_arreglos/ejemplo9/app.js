let inputNumber = document.getElementById('InputNumbers');
let Printstring = "";
let Arrayletras=[];

evento();
fillArray();

function evento(){
    inputNumber.addEventListener('change', GetLetter);
}



function fillArray(){
    for(let i=0;i<=25;i++){
        Arrayletras[i]=String.fromCharCode(i+65);
    }
}

function GetLetter(event){
    
let value = Number(inputNumber.value);

if(value>=0 && value < 26){

Printstring+=`    <li class="list-group-item">${Arrayletras[value]}</li> `;

document.getElementById('alertPrint').innerHTML=Printstring;

}

else{
    swal.fire({
        type:'error',
        title:'Limite de rango',
        text:'favor de ingresar numeros entre 0 y 25(puto)'
    })
}

inputNumber.value="";
}