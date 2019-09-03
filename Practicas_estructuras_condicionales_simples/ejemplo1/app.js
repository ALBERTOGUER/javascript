let btnVerificar = document.getElementById('btnVerificar');

eventlistener();

function eventlistener() {
    btnVerificar.addEventListener('click', verificar);
}

function verificar() {

    let calificacion = Number(document.getElementById('Calificacion').value);
    let imprimirResultado = document.getElementById('imprimirCalificacion');

    if (calificacion > 8) {

        imprimirResultado.innerHTML = 'Aprobado';
    }

    else {
        let audio=document.getElementById('audioDonRamon');
        
        audio.play();

        imprimirResultado.innerHTML = 'Reprobado';
    }
}