// function = A section of reusable code.
//            Declare code once, use it whenvever you want.
//            Call the function to execute that code.

function add(x,y){
    let result = x + y;
    return result;
}
function substract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divided(x,y){
    return x / y;
}
function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("nahid@zaman.com"));
console.log(isValidEmail("elonMusk.com"));