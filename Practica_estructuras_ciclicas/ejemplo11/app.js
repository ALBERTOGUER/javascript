let primerpago=10;
let pagomensual=0;
let sumastrings ="";
let imprimirresultado= document.getElementById('resultado');
let imprimirresultado2= document.getElementById('resultado2');
let total=0;

for(let i = 1; i <=20;i++){
   
     pagomensual =primerpago;
     sumastrings+= `<h1>El pago del mes${i} es de: <span class="badge badge-secondary">${pagomensual}</span></h1><br>`;
     primerpago= primerpago*2;
     total +=pagomensual;

}

imprimirresultado.innerHTML=sumastrings;
imprimirresultado2.innerHTML=`<h1>El total es de: <span class="badge badge-secondary">${total}</span></h1>`;