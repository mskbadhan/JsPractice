#                            Exploring JS after 6 Years
*After a long time, exploring JS. To be true, I forgot almost everything. I loved back-end and then CMS but forgot the real beauty of JS. In this vacation of Eid, I am just trying the lost treasure buried in my mind. So followings are the developmental note for a time being...*

#### getting a single alert with button clicked
```ruby
document.getElementById("bipul").onclick = function myFunc() {
    alert ("Hey This is me!");
} 
```

#### getting the same result with querySelector, mind to put # or .
``` ruby
document.querySelector("#bipul").onclick = function myFunc() {
    alert ("Hey This is me!");
}
```
#### changing the innerHTML after button clicked
```ruby
document.querySelector("#bipul").onclick = function myFunc() {
    document.querySelector("#para").innerHTML = "This is my text";
}
```
#### changing the text color or css with js
```ruby
document.querySelector("#bipul").onclick = function myFunc() {
    document.querySelector("#para").innerHTML = "red";
}
```
#### passing the variables like php
```ruby
function myFunc (a, b) {
   return a+b;
}
let result = myFunc(5, 6);
console.log (result);
```
#### getting the same result in the arrow function 
```ruby
const myFunc1 = (c, d) => {
   return c + d;
}
 
const result1 = myFunc1 (5, 6);
console.log (result1); 
```
#### I can hide a section or class with JS
```ruby
let thatSection = document.querySelector(".class or #id");
thatSection.style = "display: none/block";

 ```
#### Getting Input value in the paragraph section of a page
```ruby

<body>
    Input your data: 
    <input type="text" name="Input here" id="myInput" placeholder="Enter your data here">
    <button id="btnResult">Send Result</button>
    <p id="theResult"></p>
</body>
<script>
document.querySelector("#btnResult").onclick = 
function myFunc () {
   let result = document.getElementById ('myInput').value;
   document.getElementById ("theResult").innerHTML = result;
  return result; 
  //console.log (result);
}

</script>
```


#### I want to count How many times I have clicked a button with JS
###### We can use this method 
```ruby
let count = document.querySelector("#btnResult").value;
document.querySelector("#btnResult").onclick = 
function myFunc () {
 count++;

 //This is we can not get the text content by calling document.querySelector(".theResult").textContent outside the function
  document.getElementById ("theResult").textContent = "You have clicked:" + `${count}`
 console.log (count);
  }
```

###### OR We can use Event Listener 
```ruby
let val = document.getElementById("btnResult").value;
let myBtn = document.querySelector("#btnResult");
myBtn.addEventListener("click", () => {
  console.log (val);
  val = Number(val)+1;
  console.log (typeof(val));

  //This is we can not get the text content by calling document.querySelector(".theResult").textContent outside the Event listener
  document.querySelector(".theResult").textContent = `You have clicked: ${val}`;
}
)
```

#### My own wallet System
*This is a simple practice. With these simple code, one can practice element and Query catch and change values inside HTML. I preferred Querryselector to getElement. And one thing, disgusted though, that is: I needed to call vars with let in event listeners or functions, without this it doesnt work. Will see next js or react, if they help*

```ruby
<body style="width:70%; margin:50px auto; rgb(2,0,36);background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(118,201,119,1) 0%, rgba(0,212,255,1) 100%); font-size: 30px;">
<div style="left: auto; text-align: center; color: rgba(255, 255, 255, 0.886); font-size: 54px;">My Own Wallet</div>
<div style="width:auto; margin: 20px;text-align: center"><p style="margin:0; display: inline; float:left;;">My Balance: &nbsp;</p><p class="mainBalance" style="margin:0; display: inline; float: left;">1000000</p></div>
<br><br>Add Money : <input type="number" name="addMoney" id="addMoney" value=100 style="font-size: 30px;">&nbsp;<button id="addMoneyBtn" style="border: royalblue; border-radius: 5px; background-color: rgb(163, 83, 229); padding:1px 10px 1px 10px; font-size: 30px;">Add Money</button><p></p>
Donate TK :&nbsp; &nbsp;<input type="number" name="donateTK" id="donateTK" value=100 style="font-size: 30px;">&nbsp;<button id="donateTKBtn" style="border: royalblue; border-radius: 5px; background-color: rgb(175, 48, 171); padding: 1px 10px 1px 10px; font-size: 30px;">Donate TK</button>
<p id="result"></p>
</body>
<script>
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

</script>
```