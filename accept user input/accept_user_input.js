// How to accept user Input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

/*
This is the easy way:

let username;
 username = window.prompt("What's your username?");
 console.log(username);

*/

// Now below is the professional way:

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}