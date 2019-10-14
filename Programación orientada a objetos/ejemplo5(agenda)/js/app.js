let listaAgenda= document.getElementById('lista-agenda');

const classContact = new Contacto();
addEventlistener();

function addEventlistener() {
    
    document.querySelector('#formulario').addEventListener('submit', addperson);
    listaAgenda.addEventListener('click',eliminarcontactos);

}

let contacto = new Contacto();

function addperson() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    // console.log(name, phone);
    

    contacto.getcontent(name, phone);

    // document.getElementById('name').value = '';
    // document.getElementById('phone').value = '';

}

function eliminarcontactos(event){
    
    classContact.Erasecontactscreen(event);

    

}