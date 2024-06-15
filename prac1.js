//Main Description will be found in the README 

//We can use this method 
let count = document.querySelector("#btnResult").value;
document.querySelector("#btnResult").onclick = 
function myFunc () {

 count++;
  document.getElementById ("theResult").textContent = "You have clicked:" + `${count}`
 console.log (count);
  
  
  }

  //OR We can use Event Listener 

let val = document.getElementById("btnResult").value;
let myBtn = document.querySelector("#btnResult");
myBtn.addEventListener("click", () => {
  console.log (val);
  val = Number(val)+1;
  console.log (typeof(val));
  document.querySelector(".theResult").textContent = `You have clicked: ${val}`;
}

)
