
let counterIncrement = document.querySelector(".btn1");
let counterDecrement = document.querySelector(".btn2");
let counterReset = document.querySelector(".reset")
let DisplayNumber = document.querySelector(".number");

let integer =0;

counterIncrement.addEventListener("click",()=>{
  integer++;
  DisplayNumber.innerHTML = integer;
})


counterDecrement.addEventListener("click",()=>{
  integer--;
  DisplayNumber.innerHTML = integer;
})

counterReset.addEventListener("click",()=>{
  integer =0;
  DisplayNumber.innerHTML = integer;
})

