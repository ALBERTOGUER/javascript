class Car {


    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;

    }


    moveRight(Img) {
        // console.log(Img)

        Img.src = "./imagenes/carro_derecha.png";
        // Img.style.widht="55px"
        if (this.posicionX <= 93) {
            Img.style.left = (this.posicionX++) + "%";
        }

    }
    moveLeft(Img) {
        Img.src = "./imagenes/carro_izquierda.png";
        if (this.posicionX >= 0) {
            Img.style.left = (this.posicionX--) + "%";
        }

    }
    moveTop(Img) {
        Img.src = "./imagenes/carro_arriba.png";
        if (this.posicionY >= 0) {
            Img.style.top = (this.posicionY--) + "%";
        }
    }
    moveBottom(Img) {
        Img.src = "./imagenes/carro_abajo.png"
        if (this.posicionY <= 88) {
            Img.style.top = (this.posicionY++) + "%";
        }

    }

    currentPosition(arrayPositionPrize, image) {

        let PositionCarx = image.x;
        let PositionCary = image.y;

        console.log()


        for (let i = 0; i < arrayPositionPrize.lenght; i++) {
          
            let PositionPrizeX = arrayPositionPrize[i].posX;
            let PositionPrizeY = arrayPositionPrize[i].posY;

            console.log(arrayPositionPrize);

            console.log(`coordenadas carrito`, PositionCarx, PositionCary)
            console.log(`coordenadas imagen`, PositionPrizeX, PositionPrizeY)


            if (PositionCarx >= PositionPrizeX -25 && PositionCarx<=PositionPrizeX+25 && PositionCary >= PositionPrizeY -25 && PositionCary <= PositionPrizeY + 25) {
                return true;
            }
        }


        return false;
    }


}