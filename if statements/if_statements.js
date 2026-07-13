// IF STATEMENTS = if a condition is true, execute some code, if not, do something else..

/* let isStudent = false;

if(isStudent){
    console.log("Yes you are a student");
}
else{
    console.log("You are not a student");
}

let age = 25;
let hasLicense = true;

if(age >= 16){
    console.log("You're old enough to drive");

    if(hasLicense){
        console.log("You've your license");
    }
    else{
        console.log("You do not have your license yet!")
    }
}
else{
    console.log("You must be 16+ to have a license");
}
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {

    // BUG FIX: "ariaValueMax" is an accessibility property and is never set on
    // a text input, so it always returned null/undefined. We need ".value"
    // to read what the user actually typed.
    age = myText.value;
    age = Number(age);

    // Handle empty input or non-numeric text (Number("") is 0, Number("abc") is NaN)
    if (myText.value.trim() === "" || Number.isNaN(age)) {
        resultElement.textContent = `Please enter a valid number`;
    }
    else if (age < 0) {
        resultElement.textContent = `Your age can't be below zero`;
    }
    else if (age >= 100) {
        resultElement.textContent = `You shouldn't enter this site, you're halfway to the graveyard!`;
    }
    else if (age >= 18) {
        resultElement.textContent = `Welcome! You're old enough to enter this site`;
    }
    else {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
};