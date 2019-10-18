const formulario = document.getElementById('cotizar-seguro');

eventListener();
llenarSelectAnio();

function eventListener(){
    formulario.addEventListener('submit',CotizarSeguro)
}

 function CotizarSeguro(event){
     event.preventDefault();

     const marcaSeleccionada= document.getElementById('marca').value;
     console.log(marcaSeleccionada);
     
     const anio = document.getElementById('anio').value;

     const tipo = document.querySelector('input[name="tipo"]:checked').value;

     const interfaz = new Interfaz();

     if(marcaSeleccionada =="" || anio =="" || tipo==""){
         interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo','error')
     }else{
         const resultado = document.querySelector('#resultado div');

         if(resultado != null){
             resultado.remove();
         }

         const seguro = new Seguro(marcaSeleccionada,anio,tipo);
         const cantidad = seguro.cotizarseguro();

        interfaz.mostrarResultado(seguro, cantidad)
         interfaz.mostrarMensaje('Cotizando...', 'exito');
     }

 }

 function llenarSelectAnio(){
     const max = new Date().getFullYear();
     const min = max - 20;

     const SelectAnios = document.getElementById('anio');

     for (let i=max; i> min;i--){
         let option = document.createElement('option');
         option.value = i;
         option.innerHTML = i;
         SelectAnios.appendChild(option)
     }
 }