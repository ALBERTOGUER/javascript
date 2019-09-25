let salario = 1500;
let anual=0;
let imprimir = document.getElementById('resultado');
let total = document.getElementById('total');
let impresiones="";
let totalini = 0;
for(let i= 1; i <=6;i++){
    
    impresiones += ` <h1>el año ${i} obtendrá: : <span class="badge badge-secondary">${salario}</span></h1><br>`;
    

    totalini +=salario;
    salario= salario+(salario * .1);


}

imprimir.innerHTML=impresiones;
total.innerText=totalini;