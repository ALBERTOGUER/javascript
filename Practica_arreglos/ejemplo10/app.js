let btnfill = document.getElementById('btnfill');

evento();
aleatorio();

function evento() {
    btnfill.addEventListener('click', fillCalculate)
}

function fillCalculate() {
    let sizeFill = Number(document.getElementById('Sizefill').value);
    let type = document.getElementById('type').value;
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let concat = "";
    let concat2 = "";
    let concat3 = "";
    let print = document.getElementById('array1');
    let print2 = document.getElementById('array2');
    let print3 = document.getElementById('array3');

    for (let i = 0; i < sizeFill; i++) {

        array1[i] = aleatorio();
        array2[i] = aleatorio();

        concat += ` <li class="list-group-item">${array1[i]}</li>`;
        concat2 += ` <li class="list-group-item">${array2[i]}</li>`;


    }

    print.innerHTML = concat;
    print2.innerHTML = concat2;

    if (type == "a") {
        for (let x = 0; x < sizeFill; x++) {

            array3[x] = (array1[x]) + (array2[x]);

            concat3 += ` <li class="list-group-item">${array3[x]}</li>`;
        }

    }
    else if (type == "b") {
        for (let x = 0; x < sizeFill; x++) {
            array3[x] = (array1[x]) - (array2[x]);

            concat3 += ` <li class="list-group-item">${array3[x]}</li>`;
        }

    }
    else if (type == "c") {
        for (let x = 0; x < sizeFill; x++) {
            array3[x] = (array1[x]) * (array2[x]);

            concat3 += ` <li class="list-group-item">${array3[x]}</li>`;
        }

    }
    else{
        swal.fire({
            type:'error',
            title:'Número invalido',
            text:'Favor de ingresar "a" "b" o "c"'
        })
    }
    print3.innerHTML = concat3;




}




function aleatorio() {
    let inferior = -100;
    var numPosibilidades = 100 - inferior;
    var aleat = Math.random() * numPosibilidades
    aleat = Math.round(aleat)
    let random = (parseInt(inferior) + aleat);
    return random;


}