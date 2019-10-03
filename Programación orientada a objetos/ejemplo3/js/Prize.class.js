class Prize{
    posicionX = 0;

    PosicionY=0;

    constructor(){}



 SetPositionX(posicionX){
    this.posicionX=posicionX;

}

 SetPositionY(posicionY){
    this.PosicionY=posicionY


}
// get PositionX(){
//     this.posicionX=posicionX;

// }

// get PositionY(){
//     this.PosicionY=posicionY


// }


createelementimg(){
    let margincontainer= window.getComputedStyle(document.getElementById('contenedor')).marginLeft;

    margincontainer=margincontainer.substring(0,margincontainer.length-2);

    let imagecreate =document.createElement('img');

    imagecreate.setAttribute('src','./imagenes/popo.png');
    imagecreate.style.width="50px";

    imagecreate.style.left=`${this.posicionX-margincontainer}px`;
    imagecreate.style.top=`${this.PosicionY}px`;


    document.getElementById('contenedor').appendChild(imagecreate);
}
}


