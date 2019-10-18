let imagen = document.getElementById('imagen');

const parte = new cuerpo();
const idini = document.getElementById('idini');


evento();

function evento() {
    imagen.addEventListener('mousemove', movimiento);
    // option.addEventListener('DOMContentLoaded',iniciarAplicacion);

}

function movimiento(event) {
    let idioma = document.getElementById('idioma').value;
    console.log('se esta moviendo');
    console.log(event);
    // event.preventDefault();
    console.log(event.pageX, event.pageY);
    console.log(idioma);

    let partes = parte.coordenada(event.pageX, event.pageY);
    //    console.log(partes)
    let traduccion = parte.partedelcuerpo(idioma, partes);
    if (traduccion != undefined) {
        // console.log(traduccion);
        idini.innerHTML = traduccion;
    }

}