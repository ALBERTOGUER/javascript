let array = [];
let btnfind = document.getElementById('btnfind');

Evento();

function Evento() {

    btnfind.addEventListener('click', find);
}

function find() {

    for (let i = 0; i < 25; i++) {
        array[i] = Math.floor(Math.random() * 100);

    }
}