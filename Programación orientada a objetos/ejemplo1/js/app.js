let btn = document.getElementById('btn');

evento();

function evento() {
    btn.addEventListener('click', calcular);
}

async function calcular() {

    let velocidad = Number(document.getElementById('velocidad').value);
    let angulo = Number(document.getElementById('angulo').value);
    if (angulo <= 90) {
        let proyectil = new Proyectil(velocidad, angulo);

        console.log(proyectil.velocidadInicial);
        console.log(proyectil.angulo);

        for (let tiempo = 0; tiempo <= 10; tiempo += 0.01) {

            let posicionX = proyectil.CalcularVelocidadX(tiempo);
            let posicionY = proyectil.CalcularVelocidadY(tiempo);


            if (posicionX >= 0 && posicionY >= 0 && posicionX <= 100 && posicionY <= 100) {
                await stop(proyectil,posicionX, posicionY);
            }
        }
    }
}

  function stop(proyectil,posicionX,posicionY){
     return new Promise((res,rej)=>{
         setTimeout(()=> 
         res (proyectil.CrearSpan(posicionX, posicionY), 1000))
     })
 }
