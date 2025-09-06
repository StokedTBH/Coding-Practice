//console.log(`Hello, World!`);

// Alerts baby
//window.alert(`This is an alert!`);
//window.alert(`This is another alert!`);

let x = 100;
let y;
y = 200;

console.log(y);

let age = 22;
console.log(age);

let price = 10.99;
console.log(price);

let gpa = 3.31
console.log(gpa);

console.log(`You are ${age} years old, and your gpa is ${gpa}`);
console.log(`The price is ${price}`);

let firstName = "Ethan";
let favoriteFood = "burgers";
let email = "12345678@gmail.com"
console.log(typeof firstName);
console.log(typeof favoriteFood);
console.log(`Your email is ${email}`);

let online = false;
console.log(`${firstName} is online: ${online}}`);
let forSale = true;
console.log(`Is this car for sale?: ${forSale}`);
let isStudent = true;
console.log(`Enrolled: ${isStudent}`)

let lastName = "Stokey";

console.log(`${firstName} ${lastName} is ${age} years old, and he is a student: ${isStudent}`)
document.getElementById("paragraph_number_one").textContent = `${firstName} ${lastName} is ${age} years old, and he is a student: ${isStudent}`;

/*
Strings, numbers (ints and demcimal numbers 
all included), booleans
*/

// Affecting age. Rules of PEMDAS apply
let doubleAge = age * 2;
let halfAge = age / 2;
let evenOrOdd = age % 2;

console.log(doubleAge);
console.log(halfAge);
console.log(evenOrOdd);

age += 12;
console.log(`I will hopefully retire by age ${age}.`);
age++;
console.log(`I will be ${age} years old after 1 year of retirement.`);

let username;
username = window.prompt("What is your username?");

console.log(username);