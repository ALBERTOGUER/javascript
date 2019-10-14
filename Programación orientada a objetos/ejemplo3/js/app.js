

EventListener();

let arrayPositionPrize=[];

function EventListener() {
    document.addEventListener('keydown', movecar);
    document.getElementById('contenedor').addEventListener('click',setprize);
    
}




let car = new Car(0, 0);

function movecar(event) {
    // console.log(event);
    let image = document.getElementById('car');

    switch (event.key) {

        case 'ArrowRight':
            car.moveRight(image)
            break;
        case 'ArrowLeft':
            car.moveLeft(image);
            break;
        case 'ArrowUp':
            car.moveTop(image);
            break;
        case 'ArrowDown':
            car.moveBottom(image);
            break;
    }

    if(arrayPositionPrize.length>=0){

      let resultado=  car.currentPosition(arrayPositionPrize,image);

      console.log(resultado);
    }

}

function setprize(event){
    // console.log(event)
    console.log(event.x);
    console.log(event.y);

    let prize = new Prize();

    prize.SetPositionX(event.x);
    prize.SetPositionY(event.y);

    arrayPositionPrize.push(prize.createelementimg());
    
    console.log(arrayPositionPrize);
    
    
}