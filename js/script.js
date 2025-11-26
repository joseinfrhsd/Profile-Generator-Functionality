
var nameBox = document.getElementById('nameInput');
var nameAge = document.getElementById('ageInput');
var favColor = document.getElementById('colorInput');
var pet = document.getElementsByName('pet');
var favPet = document.querySelectorAll("input[type='radio']");
var hoBby = document.getElementsByClassName('hobby');
var hoBy = document.querySelectorAll("input[type='checkbox']");
var buTton = document.getElementById('submitBtn');
var outPut = document.getElementById('output');
const element = document.getElementById("myBtn");
let c = [];
buTton.addEventListener("click",info);
function info(){
    hobbies = [];
 console.log(nameBox.value);
 console.log(nameAge.value);
console.log(favColor.value);
for(let i = 0; i < favPet.length; i++){
    if(favPet[i].checked){
        favPet = pet[i].value;
    }
}
console.log(favPet);

for(let i = 0; i < hoBy.length; i++){
    if(hoBy[i].checked){
        hobbies.push(" "+ hoBy[i].value);
    }
}
console.log(hobbies);

console.log("nameInput", nameBox, "ageInput", nameAge);
}

// console.log(buTton);

// console.log("nameInput", nameBox, "ageInput", nameAge);