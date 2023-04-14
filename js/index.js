var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
//   document.getElementById("loader").style.display = "none";
  document.getElementById("show").style.display = "block";
}


let list = document.querySelectorAll('.nav li');
function active(){
  list.forEach((i)=>
  i.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((i)=>
i.addEventListener('click', active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onClick = function(){
  header.classList.toggle('active');
}