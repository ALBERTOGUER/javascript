SumaCantidades();

function SumaCantidades() {
    let y = 0;

    //estructura ciclica la cual se compone de un (variable incializada, condición lógica, incrementador), la cual nos ayuda a la ejeccuión repetitiva de un bloque de código
    for (let x = 1; x <= 10; x++) {

        //imprime los valores de x e y antes de la suma
        console.log(`${y}+${x}`);

        // y = y + x
        y += x;

        // imprime el valor de y en consola
        console.log(`resultado:${y}`);

        //Se cre el elemento li por medio del método CreateElement y se asigna a la variable newlii
        let newlii = document.createElement('li');

        //Se asigna el atributo id y class a la variable newli
        newlii.setAttribute("id", `listaN${x}`);
        newlii.setAttribute("class", "list-group-item");

        //Se crea el nodo de texto por metodo CreateTextNode
        let newContent = document.createTextNode(y);

        //Se inserta un hijo por medio del método appenChild a la variable newli
        newlii.appendChild(newContent);


        let listaDesordenada = document.getElementById('listaNumerica');
           
        
        listaDesordenada.appendChild(newlii);
    }
}