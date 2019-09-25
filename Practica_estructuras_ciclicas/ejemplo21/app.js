let imprimir = document.getElementById('resultados');
let total = document.getElementById('año');
let impresiones="";
let ahorro = 3;
let totalini=0;
for(let i=1;i<=365;i++){
    impresiones += ` <h1>el dia ${i} ahorrará: : <span class="badge badge-secondary">${ahorro/100}</span> pesos</h1><br>`;
    ahorro=ahorro*3;
    totalini+=ahorro;

}
imprimir.innerHTML=impresiones;
totalini = totalini/100;
total.innerText=totalini;
