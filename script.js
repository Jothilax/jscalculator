
"use strict";

let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");

function add(a,b){
    let x = Number(a);
    let y = Number(b);
   let c=x+y;
   console.log("Addition:", c); 
//    document.write("Addition:", c);
   return c;
}
add(a,b);


function sub(a,b){
    let x = Number(a);
    let y = Number(b);
   let c=x-y;
   console.log("Subraction:", c); 
//    document.write("Subraction:", c);
   return c;
}
sub(a,b);


function mul(a,b){
    let x = Number(a);
    let y = Number(b);
   let c=x+y;
   console.log("Multiplication:", c); 
//    document.write("Multiplication:", c);
   return c;
}
mul(a,b);


function div(a,b){
    let x = Number(a);
    let y = Number(b);
   let c=x/y;
   console.log("Division:", c); 
//    document.write("Division:", c);
   return c;
}
div(a,b);

