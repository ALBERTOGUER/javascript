
let boton = document.getElementById('boton');

boton.addEventListener('click',hola);



function hola() {
    let metros = document.getElementById('metros').value;

    let precio = document.getElementById('precioltr').value;

    metros = Number(metros);
    precio = Number(precio);
    let resultado = 0;

   
    resultado = precio * metros;
    console.log(resultado);

    let imprimirResultado = document.getElementById('precio');

    imprimirResultado.innerHTML=resultado;

    //  let resultado = document.getElementById(precio);

}