class Car{


    posicionX=0;
    posicionY=0;

    constructor(posicionX,posicionY){
        this.posicionX=posicionX;
        this.posicionY=posicionY;

    }


    moveRight(Img){
        // console.log(Img)

        Img.src="./imagenes/carro_derecha.png";
        // Img.style.widht="55px"
        if(this.posicionX<=93){
        Img.style.left=(this.posicionX++)+"%";
        }

    }
    moveLeft(Img){
        Img.src="./imagenes/carro_izquierda.png";
        if(this.posicionX>=0){
        Img.style.left=(this.posicionX--)+"%";
        }

    }
    moveTop(Img){
        Img.src="./imagenes/carro_arriba.png";
        if(this.posicionY>=0){
        Img.style.top=(this.posicionY--)+"%";
        }
    }
    moveBottom(Img){
        Img.src="./imagenes/carro_abajo.png"
        if(this.posicionY<=88){
        Img.style.top=(this.posicionY++)+"%";
        }

    }

   
}