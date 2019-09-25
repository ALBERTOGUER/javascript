viajero1 = 150;
viajero2 = 70;

for(let i=1;i<=150;i++){
     viajero1--;
     viajero2++;
     if(viajero1==viajero2){
let resultado= document.getElementById('resultado');
resultado.innerText=viajero1;
break;
     }
    
}