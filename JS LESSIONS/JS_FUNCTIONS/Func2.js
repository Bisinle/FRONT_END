//NORMAL FUNCTION TO SUM  array number using normal forlooooop
let myArray1=[10,20,30,40];
let arraysum1=0;
function arraySum(myArray1){
  for (let i = 0; i < myArray1.length; i++) {
    arraysum1+=myArray1[i];
    console.log(arraysum1);//print outside to only get the final value
  }
} arraySum(myArray1);



console.log("********")

//FOR EACH LOOP WITH ARROW FUNCTION TO SUM ARRAY ELEMENTS
let myArray2 = [1,2,3,4,5];
let arraysum2=0;
myArray2.forEach((myArray2)=>{ 
  arraysum2+=myArray2;
  console.log(arraysum2);//print outside to only get the final value
})


console.log("********")

//CALLING THE FUNCTIONN INSIDE THE FOREACH LOOP
function sqr(myArray2) {
  process.stdout.write(myArray2 *myArray2 + ",")
}
myArray2.map(sqr);

console.log("\n");

console.log("******iterating over objects********");
//USING forEach METHOD TO create an array that contanins USERFULLNAMES
let users1 = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

users1.forEach((users)=>{
  console.log(users.firstName + " "+users.lastName);
})
console.log("\n")




//%%%%%%%%%%%%%%%%%%%  MAP  Method  %%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log("****map****")
///USING MAP METHOD TO GET THE SQRT OF ARRAY

//let mapsqrt = myArray3.map(Math.sqrt);
//console.log(mapsqrt);

let maparr = [3, 4, 5, 6];
        

// Task: multiply each number of the array by 3. 

let modifiedArr = maparr.map((item)=>{
    return item *3;  
});
console.log(modifiedArr);

console.log("\n");
console.log("****sqrt map****")
//SQUARE ROOT OF THE ARRAY BELOW
let sqrArray=[25,64,144,324];
let sqrModified=sqrArray.map(Math.sqrt)
console.log(sqrModified);

//USING MAP METHOD TO create an array that contanins USERFULLNAMES
let users2 = [
  {firstName : "Appion", lastName: "Fluffina"},
  {firstName : "Hanah", lastName: "Kachumbari"},
  {firstName : "Jacob", lastName: "Ndizi"},
  {firstName : "Alan", lastName: "Avacado"}
];
 let usersFullNames2 = users2.map((element)=>{
   return `${element.firstName}  ${element.lastName}`;
  
 })
 console.log(usersFullNames2)






