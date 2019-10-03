class Proyectil{
/* ===============
   Propiedades de objetos
================ */
    velocidadInicial = 0;
    angulo=0;

    constructor(velocidadInicial,Angulo){

     this.velocidadInicial=velocidadInicial;
     this.angulo=Angulo;

    }

    /* ===============
       Métodos de objetos
    ================ */
    

    CalcularVelocidadX(t){
      

       let  Velocidadx = (this.velocidadInicial*Math.cos(this.angulo * (Math.PI/180)))*t;
       return Velocidadx

    };

    CalcularVelocidadY(t){
       let  Velocidady = (this.velocidadInicial*Math.sin(this.angulo * (Math.PI/180)));

       Velocidady = Velocidady*t-.5*9.8*Math.pow(t,2);



       return Velocidady;
    };

    CrearSpan(PosicionX,PosicionY){
        let spanCrear=document.createElement('span');

        spanCrear.style.left=`${PosicionX}%`;
        spanCrear.style.bottom=`${PosicionY}%`;

        document.getElementById('contenedor').appendChild(spanCrear);

    }

}

