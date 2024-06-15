// document.querySelector("#bipul").onclick = function myFunc() {
//    const strlength = document.querySelector("#para").innerHTML;
//    console.log (strlength.length); 
// }

// passing the variables like php
function myFunc (a, b) {
   return a+b;
}
let result = myFunc(5, 6);
console.log (result);

//getting the same result in the arrow function 
const myFunc1 = (c, d) => {
   return c + d;
}
 
const result1 = myFunc1 (5, 6);
console.log (result1); 
