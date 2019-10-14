class Prize {
    posicionX = 0;
    PosicionY = 0;
     sizeMargin = 0;

    constructor() {
        this.calculatesizemargin();
     }



    SetPositionX(posicionX) {
        this.posicionX = posicionX;

    }

    SetPositionY(posicionY) {
        this.PosicionY = posicionY


    }

     calculatesizemargin() {
        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));
        let marginLeft = marginContainer.getPropertyValue('margin-left');
        this.sizeMargin = marginLeft.substring(0, marginLeft.length - 2)
    }
    // get PositionX(){
    //     this.posicionX=posicionX;

    // }

    // get PositionY(){
    //     this.PosicionY=posicionY


    // }


    createelementimg() {
        // let margincontainer= window.getComputedStyle(document.getElementById('contenedor')).marginLeft;

        // margincontainer=margincontainer.substring(0,margincontainer.length-2);

        let imagecreate = document.createElement('img');

        imagecreate.setAttribute('src', './imagenes/popo.png');
        imagecreate.style.width = "50px";

        let posX=(this.posicionX - this.sizeMargin)-25;
        let posY=this.PosicionY-25


        imagecreate.style.left = `${posX}px`;
        imagecreate.style.top = `${posY}px`;


        document.getElementById('contenedor').appendChild(imagecreate);

        return {posX,posY}
    }
}


