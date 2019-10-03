
let array1=[];
let array2 = [];
let concat="";
let concat2="";
for(let i=0; i<=9;i++){
    array1[i]=i;
    console.log(array1[i]);

concat+= `<li class="list-group-item mt-2" >${array1[i]}</li>`;
       
}

array2=array1.reverse();

for(let x=0; x<=9;x++){
    concat2+= `<li class="list-group-item mt-2" >${array2[x]}</li>`;
}

document.getElementById('array1').innerHTML=concat;
document.getElementById('array2').innerHTML=concat2;