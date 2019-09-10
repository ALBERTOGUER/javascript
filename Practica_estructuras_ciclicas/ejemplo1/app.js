SumaCantidades();

function SumaCantidades() {
    let y = 0;
    for (let x = 1; x <= 10; x++) {

        console.log(`${y}+${x}`);
        // y = y + x
        y += x;

        console.log(`resultado:${y}`);

        let newlii=document.createElement('li');
        newlii.setAttribute("id", `listaN${x}`);
        newlii.setAttribute("class","list-group-item");

        let newContent=document.createTextNode(y);

        newlii.appendChild(newContent);

        let listaDesordenada = document.getElementById('listaNumerica');

        listaDesordenada.appendChild(newlii);
    }
}