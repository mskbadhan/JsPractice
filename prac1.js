//Main Description will be found in the README 

document.querySelector("#btnResult").onclick = 
function myFunc () {
   let result = document.getElementById ('myInput').value;
   document.getElementById ("theResult").innerHTML = result;
  
  console.log (result);
}