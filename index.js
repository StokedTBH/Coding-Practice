const maleCheckBox = document.getElementById("maleCheckBox");
const femaleCheckBox = document.getElementById("femaleCheckBox");
const whiteButton = document.getElementById("whiteCaucasian");
const hispanicButton = document.getElementById("hispanicLatino");
const blackButton = document.getElementById("blackAfricanAmerican");
const asianButton = document.getElementById("asian");
const mySubmit = document.getElementById("mySubmit");
const genderResult = document.getElementById("genderResult");
const ethnicityResult = document.getElementById("ethnicityResult");

let gender;
let ethnicity;

mySubmit.onclick = function() {

    if (maleCheckBox.checked) {
        gender = "male";
    } else if (femaleCheckBox.checked) {
        gender = "male";
    } else {

    }

    if (whiteButton.checked) {

    } else if (hispanicButton.checked) {

    } else if (blackButton.checked) {
        
    } else if (asianButton.checked) {
        
    } else {

    }

    genderResult.textContent = "You are a " + gender;
    ethnicityResult.textContent = "You are " + ethnicity;

}
