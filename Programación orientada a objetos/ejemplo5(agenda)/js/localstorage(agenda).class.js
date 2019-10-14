class LocalStorage{
    construtor() {

    }

    SaveContactLocalStorage(dataContact) {

        

        let arraycontact = this.getcontactLocalStorage();

        arraycontact.push(dataContact);

        localStorage.setItem('contacts', JSON.stringify(arraycontact));
    }

    getcontactLocalStorage() {
        let contactLS;

        if (localStorage.getItem('contacts') === null) {
            contactLS = [];
        } else {
            contactLS = JSON.parse(localStorage.getItem('contacts'))
        }
        return contactLS;
    }

    eliminarContactoLS(Contacto){
        let contactosls;
        let stringcontacto;
        console.log(Contacto.textContent);
    
        contactosls = this.getcontactLocalStorage();

        console.log(contactosls);
        

        contactosls.forEach(function(contactols,index) {
            contactols = JSON.stringify(contactols);
            stringcontacto= Contacto.textContent.slice(0, -1);
            console.log(contactols,stringcontacto);

            if(contactols==stringcontacto){
                contactosls.splice(index,1)
            }
            else{
                console.log(contactols,stringcontacto);
                
            }
        });

        localStorage.setItem('contacts',JSON.stringify(contactosls))



    }
}