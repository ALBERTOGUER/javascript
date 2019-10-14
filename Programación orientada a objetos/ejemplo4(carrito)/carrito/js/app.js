const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const objectCar = new Carrito();
const vaciarCarrito=document.getElementById('vaciar-carrito',vaciarCarritoCursos)


EVENLISTENER();

function EVENLISTENER() {
    cursos.addEventListener('click', Getcourse);
    carrito.addEventListener('click', EliminarCourse );
    document.addEventListener('DOMContentLoaded', mostrarCurosCARRITO);
    vaciarCarrito.addEventListener('click', vaciarCarritoCursos)
}

function mostrarCurosCARRITO(){
    objectCar.ShowCoursesLSCar();
}

function Getcourse(event) {


    event.preventDefault();
    

    if (event.target.classList.contains('agregar-carrito')) {
        let Course = event.target.parentElement.parentElement;
        // console.log(Courses);
        objectCar.readDataCourse(Course, listaCursos);
        objectCar.existente(event);
    }

}

function EliminarCourse(event){
    objectCar.EliminarcursoCarrito(event);
}

function vaciarCarritoCursos(){
    objectCar.vaciarCarrito(listaCursos);
    
}




        
    

