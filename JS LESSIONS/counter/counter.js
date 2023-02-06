
let add = document.querySelector(".btn1");
let remove =  document.querySelector(".btn2");
let reset = document.querySelector(".reset");
let DisplayNumber = document.querySelector(".number");

let int=0;


add.addEventListener("click", function(){
  /*below line is just going keep the result as a string, we know tha JS  does not allow us to add strings and numbers together, so we'll just have bunch of string one 1's next to each other,then  it'll take it to the inne.HTML and output it as a bunch of strings next ot each other



  to change that we need it to upadate result as a single number  and get rid of the string by converting it as a number  , using the Number() function
  
  ##similar to it, we could increment it like below, we name a variable and equate it to zero and then increment by one inside the fucntoin and take the result in our DOCUMENT

  */
  // let result = Number(DisplayNumber.innerHTML)+1;
  int +=1; //int ++;
  DisplayNumber.innerHTML =  int;
})


//create the remove variable 


remove.addEventListener("click", function(){
  int--;
  DisplayNumber.innerHTML = int;
})


reset.addEventListener("click", function(){
  int =0;
  DisplayNumber.innerHTML = int;
})

function updateInput(){
  DisplayNumber.innerHTML =  int
}
