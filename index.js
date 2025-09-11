const myText = document.getElementById("myText");
const submitButton = document.getElementById("mySubmit");
const resultText = document.getElementById("resultText");
let age;

submitButton.onclick = function() {
    age = Number(myText.value);

    if (age > 100) {
        resultText.textContent = "You are too old to enter this site.";
    } else if (age < 0) {
        resultText.textContent = "That's impossible. Your age can't be below 0.";
    } else if (age == 0) {
        resultText.textContent = "You can't enter. You were just born.";
    } else if (age >= 18) {
        resultText.textContent = "You are old enough to enter this site.";
    } else {
        resultText.textContent = "You must be 18+ to enter this site.";
    }
}

/*
Code from elsewhere. Pay no mind. :)

let time = 19;
    if (time < 12) {
        console.log("Good morning!");
    } else if (time >= 12 & time < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }

    let isStudent = false;
    if (isStudent) {
        console.log("You are a student.");
    } else {
        console.log("You are not a student.");
    }

    age = 17;
    let hasLicense = false;

    if (age >= 16) {
        console.log("You are old enough to drive.");

        if (hasLicense) {
            console.log("You have your license.");
        } else {
            console.log("You do not have your license yet.");
        }
    } else {
        console.log("You must be 16+ to drive.");
    }
*/
