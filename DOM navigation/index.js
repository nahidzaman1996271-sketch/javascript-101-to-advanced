// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// -- .firstElementChild -- //
/*
const ulElement = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstChild;
    firstChild.style.backgroundColor = "yellow";
});
*/

// -- .lasstElementChild -- //
/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});
*/

// -- .nextElementSibling -- //
/*
const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";
*/

// -- .previousElementSibling -- //
/*
const element = document.getElementById("orange");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "orange";
*/

// -- .parentElement -- //
/*
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "blue";
*/

// -- .children -- //
const element = document.getElementById("vegetables");
const children = element.children;


children[1].style.backgroundColor = "yellow";
