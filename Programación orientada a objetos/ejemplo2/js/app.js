let btn = document.getElementById('btn');
let btnfavor = document.getElementById('btnfavor');
let btncontra = document.getElementById('btncontra');
let btnabstencion = document.getElementById('btnabstencion');
let finalizar = document.getElementById('finalizar');


let voto = new votos();

evento();

function evento() {
  btn.addEventListener('click', sometervotacion);
  btnfavor.addEventListener('click', favor);
  btncontra.addEventListener('click', contra);
  btnabstencion.addEventListener('click', abstencion);


  finalizar.addEventListener('click', comparar)
}

function sometervotacion() {
  let texto_votar = document.getElementById('texto').value;
  document.getElementById('newtext').innerHTML = texto_votar;


}

function favor() {

  voto.aumentar_favor();
  // console.log(pp);
  Swal.fire({
    title: `Voto registrado:A favor`,
    animation: false,
    customClass: {
      popup: ``
    }
  })


}

function contra() {

   voto.aumentar_contra();
  Swal.fire({
    title: `Voto registrado:En contra`,
    animation: false,
    customClass: {
      popup: ``
    }
  })

}

function abstencion() {

   voto.aumentar_abstencion();
  Swal.fire({
    title: `Voto registrado Abstencion`,
    animation: false,
    customClass: {
      popup: ``
    }
  })

}

function comparar() {

  voto.comparar();

  
}

