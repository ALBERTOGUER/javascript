class Carrito {

    constructor() {
        this.LS = new LocalStorage();

    }

    readDataCourse(curso, listaCursos) {
        const dataCourse = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }

        console.log(dataCourse.id);


       
        this.addCourseCar(dataCourse, listaCursos);
        
        // console.log(dataCourse);

    }

    addCourseCar(dataCourse, listaCursos) {
        const row = document.createElement('tr');
        let flag = this.existente(dataCourse);
        console.log(flag);
        




        if (flag == false) {
        row.innerHTML = `<td><img src="${dataCourse.imagen} " width="100"></td>
        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</a</td>`;
        console.log(listaCursos);

        listaCursos.appendChild(row);
        this.LS.SaveCourseLocalStorage(dataCourse);

        Swal.fire({
            type: 'success',
            html: '<h5>Agregado al carrito</h5>'
        })
        }else{
            Swal.fire({
                type: 'error',
                html: '<h5>El curso ya ha sido agregado</h5>'
            })
        }





    }

    EliminarcursoCarrito(event) {
        event.preventDefault();
        let curso, cursoId;

        if (event.target.classList.contains('borrar-curso')) {
            curso = event.target.parentElement.parentElement;
            console.log(curso);
            cursoId = curso.querySelector('a').getAttribute('data-id')

            curso.remove();

            this.LS.eliminarCursoLS(cursoId);
        }


        Swal.fire({
            type: 'success',
            html: '<h5>Eliminado correctamente</h5>'
        })
    }


    ShowCoursesLSCar() {


        let CoursesLS = this.LS.getcoursesLocalStorage();

        CoursesLS.forEach(function (curso) {
            const row = document.createElement('tr');
            row.innerHTML = `<td><img src="${curso.imagen} " width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a</td>`;
            console.log(listaCursos);

            listaCursos.appendChild(row);

        });



    }

    vaciarCarrito(listaCursos) {
        //forma lenta
        // listaCursos.innerHTML="";

        //forma rapida
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild)
        }
        this.LS.vaciarlocalstorage();

        console.log("aqui");

        Swal.fire({
            type: 'success',
            html: '<h5>Carrito vaciado</h5>'
        })
    }

    existente(dataCourse) {

        let cursosLS;


        console.log(dataCourse.id);

        let existe = false;

        cursosLS = this.LS.getcoursesLocalStorage();



        cursosLS.forEach(function (cursoLS) {
            if (cursoLS.id === dataCourse.id ) {
                existe = true

            }

        })

        return existe

    }

}

