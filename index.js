//1//
let title=document.querySelector('h1');

title.innerHTML="Today we manipulate with DOM";



//2//

let suggestion= document.querySelector('p');
let answer=document.getElementById("answer-frontend");
if(confirm('Do you like frontend?')){
    answer.textContent='YES';
}else{
    answer.textContent= 'NO';
}
 
 

 //3//

let ul=document.querySelector('ul')

let li =document.createElement('li');

let prodact=prompt('insert product to shopping-list');

li.textContent=prodact;
ul.append (li);

//4//

let lo=document.querySelectorAll('li ');

let elem=document.getElementById('bread');
 let k=elem
for ( let k of lo ){

 elem.remove(); };

 
//5//
let total=document.querySelector("p1");
total=prompt('Your total price will be:')
let price=document.getElementById("your-total-price");
price.textContent=total;

//6//
 let product= 
{ name:"Carrot" ,
 price: 2.50 
}

    
let quant=product.name;
let number=product.price;


if(prompt(' write item name')==product.name){
 let quant=prompt(' quantity for this item','')

let sum=quant*number ;
 
price.textContent=sum;}

else(alert( "Sorry the item you are searching is not found"));
 
 
   









//for (let item in product){
 //alert(product.name )


    














    /*let user= prompt('name','Carrot')
 if (user="Carrot"){
   prompt('write quantity ','')}
else{(alert( "Sorry the item you are searching is notfound"))};*/


//for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    








    









  


















