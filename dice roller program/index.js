function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResultEl = document.getElementById("diceResult");
    const diceImagesEl = document.getElementById("dice_images");

    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.jpeg" alt="dice showing ${value}" width="80">`);
    }

    diceResultEl.textContent = `Results: ${values.join(", ")}`;
    diceImagesEl.innerHTML = images.join("");
}