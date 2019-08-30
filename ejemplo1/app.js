//esta linea crea una variable la cual se encaraga de obtener por medio del objeto document el elemento button con el id ""btnCalcular"
let btnCalcular = document.getElementById('btnCalcular');

/*Por medio del método "addEvenListener" se le asigno el evento clic al elemento button y al momento de ejecutar dicho evento se ejecutarála 
función suma*/
btnCalcular.addEventListener('click', suma);

//Función :bloque de código que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizará ninguna acción en el código

function suma() {
    //Se obtendrá los valores de los inputs por medio del método "value"

    let numero1 = document.getElementById('Numero1').value;
    let numero2 = document.getElementById('Numero2').value;


    //Se reasigna el valor de la variable numero dos convirtiendolo de string a numero
    numero1 = Number(numero1);
    numero2 = Number(numero2);


    //Se declara variable "resultado" y se inicializa con valor '0'
    let resultado = 0;

    //Después de obtener los datos de los elemmentks input se realiza elprocesp de suma y se le asigna dicho valor a la varibale "resultado"
    resultado = numero1 + numero2;

    //Se asigno a la variable imprimir resultado el elemento con el ID "Resultado"
    let imprimirResultado = document.getElementById('resultado');

    //Por medio del metodo "innerHTML" se asigna el vlaor de la variable resultado para que se pueda imprimir en el elemento
    imprimirResultado.innerHTML = resultado;

}