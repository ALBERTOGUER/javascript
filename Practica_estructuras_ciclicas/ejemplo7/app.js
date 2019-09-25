for(i=0;i<=100;i++){
    let contenedor = document.getElementById('contenedor');
    if(i%2==0){
        let divRow=document.createElement('div');
        divRow.setAttribute('class','row');
        let divCol=document.createElement('div');
        divCol.setAttribute('class','col-12');
        let alert = document.createElement('div');
        alert.setAttribute('class','alert alert-success');
        alert.setAttribute('role','alert');
        let parragraph = document.createElement('p');
        parragraph.setAttribute('id',`resultado${i}`);
 
        contenedor.appendChild(divRow);
        divRow.appendChild(divCol);
        divCol.appendChild(alert);
        alert.appendChild(parragraph);

       
        let resltado = document.getElementById(`resultado${i}`);
        resltado.innerText=i;




    }
}