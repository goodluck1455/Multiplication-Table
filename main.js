// alert("am working now");
let tableData = document.querySelector("table");
let numberInput = document.querySelector("#number");
let rangeInput = document.querySelector("#range");
let addBtn = document.querySelector("#addBtn");
let output = document.querySelector(".output");

// pasting values environment
addBtn.addEventListener("click", ()=> {
    
 let number = numberInput.value;
 let range = rangeInput.value;
 
  
      if(number == "" && range == ""){
    let text = "Please input your values";
    output.style.display = "block";
    output.innerHTML = text;}
    
    else{
        for(let i = 1; i<=range; i++){
    let result = i * number;

    let template = `
                 <tr>
                       <td>${number} * ${i}</td>
                       <td>${result}</td>
                 </tr> `;

                 tableData.innerHTML += template;
                 text = `Congratulation you have successfully generated a ${number} times table`;
                 output.style.display = "block";
                output.innerHTML = text;
                }
                
                
                
                }

                setInterval(refresh, 10000);

});

function refresh(){
    alert("You can now generate another multiplication time table");
    localStorage.clear();
    location.reload();
   
}












// example of how to insert a content into a table using javascript

// the HTML PART GOES HERE

/*  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
 
    <div class="container">
        <div id="data">
            <input type="text" id="name" placeholder="Enter Name">
            <input type="number" id="age" placeholder="Enter Age">
            <input type="text" id="country" placeholder="Enter Country">
            <button>Add</button>
        </div>
 
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
            </tr>
 
            <tr>
                <td>Peter</td>
                <td>20</td>
                <td>USA</td>
            </tr>
 
            <tr>
                <td>James</td>
                <td>40</td>
                <td>UK</td>
            </tr>
 
            <tr>
                <td>Ronald</td>
                <td>30</td>
                <td>Canada</td>
            </tr>
        </table>
 
    </div>
 
 
    <script src="script.js"></script>
    
</body>
</html> */


// THE CSS PART OF THE CODE GOES HERE
/*  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
 
th,td {
    border: 1px solid black;
    padding: 10px;
}
 
#data {
    margin-bottom: 10px;
}
 
#data input, button {
    padding: 10px;
    width: 90px;
}  .............. */

// AND FINALLY THE JAVASCRIPT PART OF IT THAT DOES THE MAIN THING GOES HERE

/*.............let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
 
 
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let countryInput = document.querySelector('#country');
 
 
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let age = ageInput.value;
    let country = countryInput.value;
 
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${country}</td>
                </tr>`;
 
    table.innerHTML += template;
});........................*/
