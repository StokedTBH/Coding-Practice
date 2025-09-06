const PI = 3.14159;

let username;
let age;
let radius;
let circumference;

radius = window.prompt(`Enterthe radius of a circle.`);
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);


document.getElementById("submitUsername").onclick = function(){
    username = document.getElementById("myUsernameText").value;
    console.log(username);
};

document.getElementById("submitAge").onclick = function(){
    age = document.getElementById("myAgeText").value;
    age = Number(age) + 1;
    console.log(age);
};

document.getElementById("submitRadius").onclick = function(){
    radius = document.getElementById("myRadiusText").value;
    circumference = 2 * PI * radius;
    document.getElementById("circumferenceText").textContent = "Your circumference is: ";
    document.getElementById("secondCircumference").textContent = circumference;
};
