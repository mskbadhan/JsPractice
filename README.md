//getting a single alert with button clicked
document.getElementById("bipul").onclick = function myFunc() {
    alert ("Hey This is me!");
}
//getting the same result with querySelector, mind to put # or .
document.querySelector("#bipul").onclick = function myFunc() {
    alert ("Hey This is me!");
}
//changing the innerHTML after button clicked
document.querySelector("#bipul").onclick = function myFunc() {
    document.querySelector("#para").innerHTML = "This is my text";
}
//changing the text color or css with js
document.querySelector("#bipul").onclick = function myFunc() {
    document.querySelector("#para").innerHTML = "red";
}

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
