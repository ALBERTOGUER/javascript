let btnencriptar = document.getElementById('btnencriptar');
let array1 = [];
let array2 = [];
let array3 = [];
let imprimir = "";

evento();
function evento() {

    btnencriptar.addEventListener('click', getstring);
}

function getstring() {
    let encriptation = document.getElementById('encriptation').value;

    for (let x = 0; x < encriptation.length; x++) {
        array1[x] = encriptation.charAt(x);
        array2[x] = Number(encriptation.charCodeAt(x)) + 3;
        array3[x] = String.fromCharCode(array2[x]);


    }

    imprimir=array3.join("");
    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(imprimir);
    document.getElementById('resultado').innerText=imprimir;

}

