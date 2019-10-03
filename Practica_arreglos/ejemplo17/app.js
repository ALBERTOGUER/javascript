let btnadd = document.getElementById('btnadd');
let btnCalcular = document.getElementById('btnCalcular');
let concat = "";
let contador = 0;
let array = [];


evento();

function evento() {
    btnadd.addEventListener('click', addelement);
    btnCalcular.addEventListener('click', calculate);

}

function addelement() {

    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mt-2');

    let inputG = document.createElement('div');
    inputG.setAttribute('class', 'input-group mb-3')



    let input = document.createElement('input');
    input.setAttribute('id', `idarray${contador}`);
    input.setAttribute('type', `text`);
    input.setAttribute('class', `form-control`);



    let ul = document.getElementById('array');

    ul.appendChild(li);
    li.appendChild(inputG);
    inputG.appendChild(input);
    contador++;

}

function calculate() {

    let calculateselected = document.getElementById('calculateselected').value;
    let newvalue = 0;
    let media = 0;
    let suma = 0;
    let arraymediana = [];
    let mediana = 0;
    let arraymoda = [];


    if (calculateselected == "a") {


        for (let i = 0; i < contador; i++) {

            newvalue = Number(document.getElementById(`idarray${i}`).value)

            array[i] = newvalue;
            suma += array[i];


        }
        arraymediana = array;

        for (let x = 0; x < contador; x++) {


            for (let j = 0; j < contador; j++) {


                if (arraymediana[j] > arraymediana[j + 1]) {
                    let help = arraymediana[j + 1];
                    arraymediana[j + 1] = arraymediana[j];
                    arraymediana[j] = help;
                }

            }


        }


        media = suma / contador;

        if (arraymediana.length % 2 == 0) {
            mediana = (arraymediana[mediana] + arraymediana[mediana + 1]) / 2;


        } else {
            mediana = Math.ceil(arraymediana.length / 2);
            mediana = arraymediana[mediana - 1];
        }

        arraymoda = arraymediana;
        let counter = 0;
        let mayor = 0;

        for (let y = 0; y < contador; y++) {
            let moda = arraymoda[y];

            for (let t = 0; t < contador; t++) {
                if (moda == arraymoda[t]) {
                    counter++;
                }
            }
            if (counter > mayor) {
                mayor = arraymoda[y];
            }
        }
        console.log(array);


        console.log(media);
        console.log(arraymediana);
        // console.log(arraymediana.length);
        console.log(mediana);
        console.log(mayor);
        document.getElementById('resultado').innerHTML=`La media es: <br>${media}<br> La mediana es:<br>${mediana}<br>La moda es: <br>${mayor} `;

    }

    if(calculateselected=="b"){
       
        let suma2 = 0; 
        
    
        for (let i = 0; i < contador; i++) {
    
            newvalue = Number(document.getElementById(`idarray${i}`).value)
    
            array[i] = newvalue;
            suma += array[i];
    
    
        }
        media = suma / contador;
        console.log(media);
    
        for(let x=0;x<contador;x++){
    
            array[x]=Math.pow((array[x]-media),2)
        }
    
        for(let y = 0; y<contador;y++){
            suma2+=array[y];
    
        }
        varianza = suma2/contador;
        document.getElementById('resultado').innerHTML=`La varianza es:<br>${varianza}`;
    
    }

    if(calculateselected=="c"){

        let suma2 = 0; 
        let desviacioin_estandar=0;
        
    
        for (let i = 0; i < contador; i++) {
    
            newvalue = Number(document.getElementById(`idarray${i}`).value)
    
            array[i] = newvalue;
            suma += array[i];
    
    
        }
        media = suma / contador;
        console.log(media);
    
        for(let x=0;x<contador;x++){
    
            array[x]=Math.pow((array[x]-media),2)
        }
    
        for(let y = 0; y<contador;y++){
            suma2+=array[y];
    
        }
        varianza = suma2/contador;
        desviacioin_estandar=Math.sqrt(varianza);
        

        document.getElementById('resultado').innerHTML=`La varianza es:<br>${varianza}`;
    

    }
}


console.log(calculateselected);
