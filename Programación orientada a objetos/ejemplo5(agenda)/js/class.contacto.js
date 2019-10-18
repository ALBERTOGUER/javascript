class Contacto {
    name = "";
    phone = "";
    date = "";

    constructor() {
        this.LS = new LocalStorage();
    }



    getcontent(name, phone) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = String(today.getFullYear());
        let hours = String(today.getHours());
        let minutes = String(today.getMinutes());
        let date = `${dd}/${mm}/${yyyy} ${hours}:${minutes} hrs`;

        if (name != '' && phone != '') {
            this.name = name;
            this.phone = phone;
            console.log(this.name, this.phone);

            const dataContact = {
                Nombre: name,
                Numero: phone,
                Fecha: date
            }
            console.log(dataContact);

            this.createContact(dataContact);


        } else {

            Swal.fire({

                type: 'warning',
                title: 'Falta información',
                showConfirmButton: false,
                timer: 1000
            })
        }


    }

    createContact(dataContact) {

        let flag = this.existente(dataContact);

        if (flag == false) {
            let data = JSON.stringify(dataContact);


            const li = document.createElement('li');
            li.classList = 'list-group-item rounded-pill text-break';


            const btnClose = document.createElement('button');
            btnClose.classList = 'close';

            const spanclose = document.createElement('span');
            spanclose.classList = 'badge badge-pill badge-light text-danger';

            spanclose.setAttribute = ('area-hidden', 'true');
            spanclose.textContent = 'x';


            btnClose.appendChild(spanclose);
            li.innerText = data;
            listaAgenda.appendChild(li);
            li.appendChild(btnClose);



            this.LS.SaveContactLocalStorage(dataContact);
        }else{
            Swal.fire({
                type: 'error',
                html: '<h5>El numero ya existe</h5>'
            })
        }
    }

    showcontactsLS() {
        let ContactosLS = this.LS.getcontactLocalStorage();

        ContactosLS.forEach(function (contacto) {
            contacto = JSON.stringify(contacto);
            // let data = JSON.stringify(dataContact);
            const li = document.createElement('li');
            li.classList = 'list-group-item rounded-pill text-break';


            const btnClose = document.createElement('button');
            btnClose.classList = 'close';

            const spanclose = document.createElement('span');
            spanclose.classList = 'badge badge-pill badge-light text-danger';

            spanclose.setAttribute = ('area-hidden', 'true');
            spanclose.textContent = 'x';


            btnClose.appendChild(spanclose);
            li.innerText = contacto;
            listaAgenda.appendChild(li);
            li.appendChild(btnClose);
        });


    }

    Erasecontactscreen(event) {
        event.preventDefault();

        let Contacto;

        // console.log(event);
        // console.log(event.target);

        if (event.target.classList.contains('badge')) {

            Contacto = event.target.parentElement.parentElement;
            console.log(Contacto);
            // console.log(Contacto.textContent);


            Contacto.remove();

            this.LS.eliminarContactoLS(Contacto);
            Swal.fire({
                type: 'success',
                html: '<h5>Eliminado correctamente</h5>'
            })
        }



    }


    existente(dataCourse) {
        let contactosLS;


        console.log(dataCourse.Numero);

        let existe = false;

        contactosLS = this.LS.getcontactLocalStorage();



        contactosLS.forEach(function (contactoLS) {
            if (contactoLS.Numero === dataCourse.Numero) {
                existe = true

            }

        });

        return existe

    }
}




