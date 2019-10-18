class Interfaz{
    mostrarMensaje(mensaje,tipo){

        const div = document.createElement('div');

        if(tipo=='error'){
            div.classList.add('mensaje','error')
        }else{
            div.classList.add('mensaje','correcto')
        }

        div.innerHTML=`${mensaje}`;

        formulario.insertBefore(div,document.querySelector('.form-group'));

        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        }, 5000)

        alert('inicial');



    }

    mostrarResultado(seguro,total){
        const resultado = document.getElementById('resultado');

        let marca;

        switch(seguro.marca){
            case '1':
                marca='Americano';
                break;
            case '2':
                marca='Asiático';
                break;
            case '3':
                marca='Europeo';
                break;
        }
        const div = document.createElement('div');
        div.innerHTML =`
        <p class="header"> Cotización:</p>
        <p>Marca:${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: ${total}</p>`

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        setTimeout(function(){
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000)
    }
}