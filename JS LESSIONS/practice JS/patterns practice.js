//FROM TOP TO BOTTOM
function pattern1(){
  for(let i=5; i>=0; i--){
    //process.stdout.write( i+" ");//this is to see what i does
    for(let j=0; j<=i; j++){
        process.stdout.write( "*" + " ");
    }
    console.log(" \n");
  }
}



function pattern2(){
  let i,j;
  for(i=1; i<6; i++){
    //process.stdout.write( "R" + "- ")
    for(j=1; j<=i;j++){
      process.stdout.write("*" + " ")
    }
    console.log("\n")
  }
}

function pattern3(){
  let i,j;
  for(i=1; i<6; i++){
    //process.stdout.write( "R" + "- ")
    for(j=1; j<=i;j++){
      process.stdout.write(j + " ")
    }
    console.log("\n")
  }
}


function pattern4(){
  for(let i=5; i>=0; i--){
    //process.stdout.write( i+" ");//this is to see what i does
    for(let j=1; j<=i; j++){
        process.stdout.write( j + " ");
    }
    console.log(" \n");
  }
}

  function pattern5(){    
    let sum=0;
    for(let i=5; i>=0; i--){
      //process.stdout.write( "R-" + i+" ");//this is to see what i does
      for(let j=1; j<=i; j++){
        // process.stdout.write( j + " ");            
          if (i % i==0){
                    sum+=i; 
            process.stdout.write( sum + " ");              
          }        
      } 
      //reset sum so it does not keep the previous line's result
      sum =0;    
      console.log(" \n");
    }
    
}






//FUCNTION CALLS  
// pattern1(); 
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n");
// pattern2();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n");
// pattern3();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n");
//pattern4();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n");
//pattern5();