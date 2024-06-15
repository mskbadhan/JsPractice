//Main Description will be found in the README 
let addMoneyBtn = document.querySelector("#addMoneyBtn");
let donateTKBtn = document.querySelector("#donateTKBtn");
let donateMoney = document.getElementById("donateTK").value;
addMoneyBtn.addEventListener("click", ()=>{
  let mainBalance = document.querySelector(".mainBalance").textContent;
      mainBalance = Number(mainBalance);
  let addMoney = document.getElementById("addMoney").value;
      addMoney = Number(addMoney);
    ADD = mainBalance+addMoney;
   let finalBalance = document.querySelector(".mainBalance").textContent = `${ADD}`;
   finalBalance;
})