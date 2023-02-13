

let myNodelist = document.getElementsByTagName("li");
document.creat
var i;
for  (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  //var span2 = document.createElement("span")
  var close =  document.createTextNode(" \u00D7");
  //var edit = document.createTextNode("Edit")
  
  span.className="close";
  //span.id="yellow";
  
  span.appendChild(close);
 // span2.appendChild(edit)
  myNodelist[i].appendChild(span)
  //myNodelist[i].appendChild(span2)
  
}

//access the span thru it's class name
var close = document.getElementsByClassName("close");
//create a loop that hides/deletes the last element of the list
var i;
for ( i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display ="none"
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement(){
  var ul = document.querySelector('.myUL');
  var li = document.createElement('li');
  var inputvalue = document.getElementById('myInput').value;
  var t = document.createTextNode(inputvalue)
  li.appendChild(t);
 if(inputvalue === ''){
  alert("Enter a task to do")
 } else{
  ul.appendChild(li);
}
 document.getElementById("myInput").value = "";

 var span = document.createElement("sapan");
 var text = document.createTextNode(" \u00D7")

 span.className = "close";
 span.appendChild(text);
 li.appendChild(span);


 var close = document.getElementsByClassName("close");
 var i;
 for (i=0; i<close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display= "none";
  }
 }





 
}

