let btnAgregar = document.getElementById('btnAgregareleemtos');
let btnCalculateArray = document.getElementById('btnCalculateArray');
let counterclicksaddelement = 0;

evenlistener();

function evenlistener() {
    btnAgregar.addEventListener('click', addelement);
    btnCalculateArray.addEventListener('click', calculatearray);
}

function addelement() {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Ingrese un digito');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `listarrayR${counterclicksaddelement}`);

    let li2 = document.createElement('li');
    li2.setAttribute('class', 'list-group-item mb-2');

    let input2 = document.createElement('input');
    input2.setAttribute('placeholder', 'Ingrese un digito');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', `listarrayL${counterclicksaddelement}`);

    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);



    document.getElementById('ArrayList2').appendChild(li2);
    li2.appendChild(input2);

    counterclicksaddelement++;

}

function calculatearray() {
    let array1 = [];
    let array2 = [];
    let array3 = [];

    for (let i = 0; i < counterclicksaddelement; i++) {


        array1[i] = Number(document.getElementById(`listarrayR${i}`).value);
        array2[i] = Number(document.getElementById(`listarrayL${i}`).value);

        if (isNaN(array1[i]) || isNaN(array2[i])) {
            Swal.fire({
                type: 'error',
                title: 'Carambolas ingresaste un caracter invalido',
                text: 'Se ha ingresado un digito incorrecto!',
               
            })

            array1=[];
            array2=[];
            document.getElementById(`listarrayR${i}`).focus;
            document.getElementById(`listarray ${i}`).focus;
             return;
        }

    }

    for (let x = 0; x < array1.length; x++) {
        array3[x] = array1[x] + array2[x]
    }
    let concatenarresultado = "";
    for (let y = 0; y < array1.length; y++) {
        concatenarresultado += `<li class="list-group-item mb-2">${array3[y]}</li>`;
    }

    document.getElementById('ArrayList3').innerHTML = concatenarresultado;
}



