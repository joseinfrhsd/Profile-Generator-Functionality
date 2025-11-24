
var nameBox = document.getElementById('nameInput');
var nameAge = document.getElementById('ageInput');
var favColor = document.getElementById('colorInput');
var favPet = document.getElementsByName('pet');
var favPet = document.querySelectorAll("input[type='radio']");
var hoBby = document.getElementsByClassName('hobby');
var hoBy = document.querySelectorAll("input[type='checkbox']");
var buTton = document.getElementById('submitBtn');
var outPut = document.getElementById('output');
const element = document.getElementById("myBtn");

buTton.addEventListener("click",info);
function info(){
console.log(nameBox.value);
console.log(nameAge.value);
console.log(favColor.value);
output.innerHTML=nameBox.value +" "+ nameAge.value +" "+ favColor.value;
}

console.log(buTton);

console.log("nameInput", nameBox, "ageInput", nameAge);