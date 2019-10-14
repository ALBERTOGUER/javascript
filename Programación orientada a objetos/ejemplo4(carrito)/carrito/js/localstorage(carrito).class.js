class LocalStorage {

    constructor() {

    }

    SaveCourseLocalStorage(curso) {

        

        let arraycourse = this.getcoursesLocalStorage();

        arraycourse.push(curso);

        localStorage.setItem('courses', JSON.stringify(arraycourse));
    }

    getcoursesLocalStorage() {
        let cursosLS;

        if (localStorage.getItem('courses') === null) {
            cursosLS = [];
        } else {
            cursosLS = JSON.parse(localStorage.getItem('courses'))
        }
        return cursosLS;
    }

     eliminarCursoLS(cursoid){
        let cursosLS;
        
        cursosLS= this.getcoursesLocalStorage();
        console.log(cursoid);
        
        cursosLS.forEach(function(cursoLS,index) {
            if(cursoLS.id===cursoid){
                cursosLS.splice(index,1)
            }
        });

        localStorage.setItem('courses',JSON.stringify(cursosLS))
        
    }

    vaciarlocalstorage(){
        localStorage.clear();
      
    }

}