// let test = document.querySelector("#testBTN");
// test.addEventListener ("click", ()=>{
//     let dataGot = document.querySelector("#inputID").value;
//     console.log(dataGot);
// })
document.querySelector("#testBTN").onclick =
sendData= () => {
    let dataGot = document.querySelector("#inputID").value;
    if (dataGot != "") {
        const dataArray = [];
        dataArray.push(dataGot);
        let dataShow = document.querySelector("#testID");
        
        dataArray.map(a => dataShow.innerHTML = dataArray);
        console.log(dataArray);
        //dataShow.innerHTML = "<li>"+`${dataGot}`+"</li><br>";
        //dataShow = dataShow + dataGot;
        //console.log (dataGot);
        
    } else{
        alert ("Data Field Empty!");
    }
   }
   
   //sendData();

