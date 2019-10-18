let listaAgenda= document.getElementById('lista-agenda');

const classContact = new Contacto();
addEventlistener();

function addEventlistener() {
    
    document.querySelector('#formulario').addEventListener('submit', addperson);
    listaAgenda.addEventListener('click',eliminarcontactos);
    document.addEventListener('DOMContentLoaded', mostraragenda);

}

// let contacto = new Contacto();

function addperson() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    // console.log(name, phone);
    

    classContact.getcontent(name, phone);

    // document.getElementById('name').value = '';
    // document.getElementById('phone').value = '';

}

function mostraragenda(){
    classContact.showcontactsLS();
}

function eliminarcontactos(event){
    
    classContact.Erasecontactscreen(event);

    

}