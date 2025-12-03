var namebox = document.getElementById('nameInput');
//console.log(namebox);


var nameAge = document.getElementById('ageInput');
//console.log(nameAge);




var favColor = document.getElementById('colorInput');
//console.log(favColor);


var pet = document.querySelectorAll("input[type='radio']");
//console.log(pet);


var hobby = document.querySelectorAll("input[type='checkbox']");
//console.log(hobbies);


var button = document.getElementById('submitBtn');
//console.log(button);


button.addEventListener("click", info);


let favPet;
let hobbies = [];


function info() {
    //console.log(nameAge.value);
    //console.log(favColor.value);
    hobbies = [];
    

    //check for pets
    for (let i = 0; i < pet.length; i++) {
        if (pet[i].checked) {
            favPet = pet[i].value;
        }
    }
    console.log(favPet);
    
    
    //check hobbies
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            hobbies.push(" " + hobby[i].value);
        }
    }
    
    
    console.log(hobbies);
    
    outPut.innerHTML = namebox.value + " " + nameAge.value + " " + favColor.value + " " + favPet + " " + hobbies;



}


var outPut = document.getElementById('output');
//console.log(outPut);


const element = document.getElementById('mybtn');


