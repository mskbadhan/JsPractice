//Main Description will be found in the README 
let addMoneyBtn = document.querySelector("#addMoneyBtn");
addMoneyBtn.addEventListener("click", ()=>{
  let mainBalance = document.querySelector(".mainBalance").textContent;
      mainBalance = Number(mainBalance);
      let addMoney = document.getElementById("addMoney").value;
      addMoney = Number(addMoney);
      ADD = mainBalance+addMoney;
      let finalBalance = document.querySelector(".mainBalance").textContent = `${ADD}`;
      finalBalance;
    })
    
    //Now donation functionality
    let donateTKBtn = document.querySelector("#donateTKBtn");
donateTKBtn.onclick = function donateFunc(){
  let donateTK = document.querySelector("#donateTK").value;
  donateTK = Number (donateTK);
  let mainBalance = document.querySelector(".mainBalance").textContent;
  mainBalance = Number(mainBalance);
  subtract = mainBalance-donateTK;
  let finalsub = document.querySelector(".mainBalance").textContent = `${subtract}`;
  finalsub;
}    