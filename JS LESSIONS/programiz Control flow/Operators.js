// let numbers =[1,2,3,4,5,6];
// let sum=0;
// for(let i=0; i<=numbers.length; i++){
//   sum +=numbers[i];
//   console.log(sum);
// }


// let ism = window.prompt("state you name plz");
// document.write("Hell " + ism + " how are you today");




function ResultCalc(grade){
  if(grade >=0 && grade<=100){
    if(grade >=75 && grade <=100 ){
     
      document.write("Your Grade is A");
    }
    
    else if(grade >=67 && grade <=74 ){
      document.write("Your Grade is B");
  
    }
  
    else if(grade >=50 && grade <=66 ){
      document.write("Your Grade is D");
  
    } 
  
    else if(grade >=40 && grade <=49 ){
      document.write("Your Grade is C");
  
    } 
  
    else{    document.write("You've failed my friend");
  }
   
  }
}


function user_input(){
  let marks = parseInt( prompt("Enter you Grade please"));
  let resultCaller = ResultGrade(marks);
  // document.write(resultCaller);
 


}

user_input();



