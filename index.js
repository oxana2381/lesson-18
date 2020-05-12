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

let elem=document.querySelectorAll('li')[2];
let elemlastChild;

elem.remove();


//5//
let total=document.querySelector("p1");
total=prompt('Your total price will be:')
let price=document.getElementById("your-total-price");
price.textContent=total;









    









  


















