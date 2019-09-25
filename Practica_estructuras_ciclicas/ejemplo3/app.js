let btnAgregar = document.getElementById('btnAgregar');
let btnCalcular = document.getElementById('btnCalcular');
let numeroInput = 0;

event();

function event() {
    btnAgregar.addEventListener('click', agregarMiembro);
    btnCalcular.addEventListener('click', Calculo);
}

function Calculo(){
    let suma = 0;
    let promedio = 0;

    for (let x=1; x<=numeroInput;x++){
        let edad = Number(document.getElementById(`estatura${x}`).value);
        suma +=edad;
        
    }
    promedio = suma/numeroInput;

    let imprimir = document.getElementById('imprimir');
    imprimir.innerText=promedio;
}

function agregarMiembro() {
    numeroInput++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let formGroup = document.createElement('div');
    formGroup.setAttribute('class','form-group');
    
    let labelFG = document.createElement('label');
    formGroup.setAttribute('class','form-group');
    let textLabel = document.createTextNode(`Ingresa la estatura : ${numeroInput}`);
    labelFG.appendChild(textLabel);

    let inputFG = document.createElement('input');
    inputFG.setAttribute('type','number');
    inputFG.setAttribute('class','form-control');
    inputFG.setAttribute('placeholder','Ingresa la estatura');
    inputFG.setAttribute('id',`estatura${numeroInput}`);

    let contiene = document.getElementById('contiene');

    contiene.appendChild(divRow);

    divRow.appendChild(divCol);

    divCol.appendChild(formGroup);

    formGroup.appendChild(labelFG);

    formGroup.appendChild(inputFG);
}
