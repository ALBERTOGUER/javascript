let btn= document.getElementById('btnCalcular');
let nombre1=document.getElementById('nombre1').value;
let nombre2=document.getElementById('nombre2').value;
let edad1=document.getElementById('eda1');
let edad2=document.getElementById('edad2');

addevent();

function addevent(){
btn.addEventListener('click', hola);
edad1.addEventListener('blur',revision);
edad2.addEventListener('blur',revision);

}

function revision(event){
    if(event.target.value){

        event.target.focus();
    }
}

function hola(){ 
    
    if(Number(edad1.value) > Number(edad2.value)){

    }

}