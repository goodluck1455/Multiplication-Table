// Variables declarations goes here;
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
                       <td>${number}</td>
                       <td> * </td>
                       <td> ${i}</td>
                       <td>  = </td>
                       <td>${result}</td>
                 </tr> `;

                 tableData.innerHTML += template;
                 text = `Congratulation you have successfully generated a ${number} times table`;
                 output.style.display = "block";
                output.innerHTML = text;
                
                }
               
                
                }

                addBtn.disabled = true;
                setInterval(refresh, 10000);

});

function refresh(){
    alert("You can now generate another multiplication time table");
    localStorage.clear();
    location.reload();
   
}












