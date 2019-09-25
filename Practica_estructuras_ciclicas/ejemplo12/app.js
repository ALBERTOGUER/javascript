let btnCalcular = document.getElementById('btnCalcular');

addevent();

function addevent(){
    btnCalcular.addEventListener('click',hola);

}

function hola(){
    let numero = Number(document.getElementById('numero').value);
    let sumastrings = '';

    for(let i =1; i<=20; i++){

        if(numero%2==0){
            numero=numero/2;
            sumastrings+= `${numero}<br>`;
        }
        else{
            numero = (numero*3)+1;
            sumastrings+= `${numero}<br>`;
        }
    }
    let imprimir = document.getElementById('resultado');
    imprimir.innerHTML=sumastrings;
}