const div =document.querySelector(".container");
const p = document.createElement("p");
let text = document.createTextNode("this is my parahrap");

p.appendChild(text);
div.appendChild(p);