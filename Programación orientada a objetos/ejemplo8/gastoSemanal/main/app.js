const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

eventlistener();

function eventlistener(){
    formulario.addEventListener('submit',guardarPresupuesto);
document.addEventListener('DOMContentLoaded',iniciarAplicacion);
}

function guardarPresupuesto(event){
    event.preventDefault();
    
    const nombreGasto= document.querySelector('#gasto');
    const cantidadGasto = document.querySelector('#cantidad');
    
    nombreGasto.disabled=true;
    cantidadGasto.disabled=true;
    
    const ui = new Interfaz();
    
    console.log(cantidadGasto.value);
    if(isNaN(cantidadGasto.value)){
        console.log('si');
        
        ui.imprimirMensaje('Solo datos numericos en cantidad','error', nombreGasto,cantidadGasto);
        return
    }

    if(nombreGasto.value ===''||cantidadGasto.value===''){
        ui.imprimirMensaje('Hubo un error','error', nombreGasto,cantidadGasto);
        return
    }
}

async function iniciarAplicacion(){
    const { value: PresupuestoIngresado } = await Swal.fire({
        title: 'Ingrese presupuesto',
        input: 'text',
        inputPlaceholder: 'Ingresa tu presupuesto'
      })
      
      if (!PresupuestoIngresado) {
       window.location.reload();
       return;
      }

      if(isNaN(PresupuestoIngresado)){
        window.location.reload();
        return;
      }

      cantidadPresupuesto=new Presupuesto(PresupuestoIngresado);


      const ui = new Interfaz();

      ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);


}