// let myArr =[0,1,2,3,4,5,6,7,8,9];
// myArr.push(55);

// myArr.toString();
// console.log(myArr);
// myArr.forEach(item=>{
//   item +=item;
//   //console.log(item);  
  
// })




// let sum=0;
// for (let i=0; i<=myArr.length-1; i++){
//   sum = sum + myArr[i];  
// }
// // console.log(sum);

/*promt the use to enter a number in the HTML DOC and evaluate if its -ve or +ve */
document.getElementById("myBotton").onclick = function(){
  let user_input =document.getElementById("myText"); 
  /***********************TERNARY OPERATOR****************************
      (parseInt(user_input.value) <0)? (user_input.value ="-ve") : (user_input.value ="+ve")  
   **************************************************************************/
  UserInput(user_input);
}


  
  function UserInput(user_input){
    let num = parseInt(user_input.value)
    if(num ===0){
      user_input.value ="Your entered zero";
      
    }
    else if(num > 0){
      user_input.value =num +1;
    }
    else if(num< 0){
      user_input.value ="negative number";
    }
    
    
  }
