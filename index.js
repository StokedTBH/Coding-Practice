const MIN = 1;
const MAX = 6;
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const totalLabel = document.getElementById("totalLabel");

let randomNum1;
let randomNum2;
let randomNum3;
let totalNumber

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * MAX) + MIN;
    randomNum2 = Math.floor(Math.random() * MAX) + MIN;
    randomNum3 = Math.floor(Math.random() * MAX) + MIN;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
    totalNumber = randomNum1 + randomNum2 + randomNum3;
    totalLabel.style.display = 'inline-block';
    totalLabel.textContent = "Total = " + totalNumber;
}
