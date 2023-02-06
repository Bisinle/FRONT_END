let operator = prompt("Enter the operator");


let num1 = parseInt(prompt("Enter the first  number "));
let num2 = parseInt(prompt("Enter the second  number "));

switch(operator){
  case "+":
    document.write(`<h1>${num1 + num2 }</h1>`);
    break;

    case "-":
      document.write(num1 - num2);
      break;
  case "*":
    document.write(num1 * num2);
    break;

  case "-":
    document.write(num1 / num2);
    break;

    default:
      document.write("SYNTAX ERROR!!")
  
      
}




// let day = prompt("Enter day of the week");
// //CODE TO TEST IF THE ENTERED DAY IS A WEEKDAY OR A WEEKEND
// switch(day){
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     document.write("Weekday");
//     break;
//   case "Saturday":
//   case "Sunday":
//     document.write("Weekend");
//     break;

//   default:
//     document.write("INVALID DAY!!! ")
  
// }
// /*
// switch(day){
//   case 1:
//     document.write("Monday <br>" );
//     break;
//   case 2:
//     document.write("Tuesday <br>");
//     break;
//   case 3:
//     document.write("Wednesday <br>");
//     break;
//   case 4:
//     document.write("Thursday <br>");
//     break;
//   case 5:
//     document.write("Friday <br>");
//     break;
//   case 6:
//     document.write("Satruday <br>");
//     break;
//   case 7:
//     document.write("Sunday <br>");
//     break;


//   default:
//    document.write("INVALID DAYY!!");
    

// }
//  */



