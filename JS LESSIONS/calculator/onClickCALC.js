/*
  let main = document.querySelector(".main");
  let htmlString = "";

  for(let i=1; i<=10; i++){
    htmlString +=`<div class="box">${i}</div>`;
    
  }
main.innerHTML = htmlString;  */


// let buttons = Array.from( document.querySelectorAll(".numbers"));
// console.log(buttons);


let result = document.getElementById("display");
let digits = document.querySelectorAll(".numbers")
let clear = document.querySelector(".clear");
let DEL = document.querySelector(".DEL");
let addition = document.querySelector(".addition")
let equal = document.querySelector(".equal");


//UPDATING THE DISPLAY BUTTON EACH TIME A BUTTON IS PRESSED
let calc=(number)=>{
  result.value +=number;


}
  let results=(number)=>{  
   result.value= eval(result.value);
  }

// FOR THE CLEAR BUTTON
clear.addEventListener("click", function(){
  result.value=" ";
})

//FOR THE BACKSPACE BUTTON
DEL.addEventListener("click",function(){
  result.value =result.value.slice(0,-1); 
})



