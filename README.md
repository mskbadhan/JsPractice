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