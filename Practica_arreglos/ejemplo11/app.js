let btnAddRow = document.getElementById('btnAddRow');
let btnfilter = document.getElementById('btnfilter');

let array = [];
counter = 0;

evento();

function evento() {
    btnAddRow.addEventListener('click', addword);
    btnfilter.addEventListener('click', filter);
}

function addword() {

    let newElement = document.getElementById('newElement').value;
    let concat = "";
    let imprimirarray1 = document.getElementById('array1')

    array[counter] = newElement;
    counter++;

    console.log(array);

    for(let i=0; i<array.length;i++){
        
        concat += ` <li class="list-group-item">${array[i]}</li>`;

    }

    imprimirarray1.innerHTML=concat;
}

function filter(){
    let concat2 = "";

    for(let x=0; x<array.length; x++){
       
        let stringsini =  (array[x]);

        if( stringsini.charAt(0)=="a"||stringsini.charAt(0)=="e"||stringsini.charAt(0)=="i"||stringsini.charAt(0)=="o"||stringsini.charAt(0)=="u"){
            
            concat2+=`<li class="list-group-item">${array[x]}</li>`;

        }
      
        document.getElementById('array2').innerHTML=concat2;
      
        
    }
}
