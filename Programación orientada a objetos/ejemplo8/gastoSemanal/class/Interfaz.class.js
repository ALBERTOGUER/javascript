class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;

    }

    imprimirMensaje(mensaje, tipo, nombreGasto, cantidadGasto) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo == 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        divMensaje.appendChild(document.createTextNode(mensaje));
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            nombreGasto.disabled =false;
            cantidadGasto.disabled =false;
            formulario.reset();
        },3500)

    }

    agregarGastosslistado(nombre,cantidad){
        const gastoslistados = document.querySelector('#gastos ul');
        const li = document.createElement('li');

        li.className='list-group-item d-flex justify-content.between align-items-center';
        li.innerHTML=`${nombre}
        <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`

        gastoslistados.appendChild(li);
    }
}