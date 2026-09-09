// -------- EXAMPLE 1 <h1> ---------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newH1);
document.getElementById("fruits").prepend(newListItem);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box3);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[0]);

// REMOVE THE ELEMENT
// document.getElementById("box1").removeChild(newLink);