/*function getProduct(){
  let product = {
    Id:2334,
    Title: "book",
    Price: 40 };
    return product;
  }

  let p1 = getProduct();
  console.log(p1);
  */

  //FUNCTION AS A STATEMENT
  function greet(a,b){
   let add = a+b;
   
     console.log(add);
   return add;
  }

  // invoke the function
  greet(9,6);


  function getproduct(){
    let product1 = {
        Id:3098,
        Title:'royal blue set',
        price:`KSH ${850} /=`
    };

  
  //console.log(product1);
    return  product1;
  }

  let p1 =getproduct();
  console.log(p1);


  //lets see if f(x) declaration/statement can have objects passed into it
   //create a function that changes the title of the boo
   function updateName( product2){

    product2.Title ='nimnbus 2000';
    return product2;
   }

   
  //lets creat the product first
  let product2 = {
    Title: 'lord of the ring',
    Id: `L${102}`,
    Price: `KSH ${200} /=`
  };

  //lets call the f(x) and pass the prod key we wanna change
  console.log(product2);//old name
  let updated = updateName(product2);//gets updated
  console.log(updated);//updated name

//**********FUNCTION EXPRESSION**************** */
  const add = function (num1,num2){
    let sum = num1+ num2; 
    return sum;
}
let res = add(8,9);
console.log(`result of the cosnt function is -> ${res}`);