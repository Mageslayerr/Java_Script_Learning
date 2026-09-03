//Creating a function to roll a dice for when the radio d6 button is selected
function rollDiceD6() {
    //Generate a random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
//Creating a function to roll a dice for when the radio d20 button is selected
function rollDiceD20() {
    //Generate a random number between 1 and 20
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
}
//Creating a function to roll a dice for when the radio d100 button is selected
function rollDiceD100() {
    //Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

// Call the function and log the result to the console
//need to create a function that will check which radio button is selected and call the appropriate rollDice function
function rollDice() {
    //Get the value of the selected radio button
    let selectedDice = document.querySelector('input[name="diceType"]:checked');
    if (!selectedDice) {
        console.error("Please select a dice type.");
        return null;
    }

    switch (selectedDice.value) {
        case "d6":
            return rollDiceD6();
        case "d20":
            return rollDiceD20();
        case "d100":
            return rollDiceD100();
        default:
            console.error("Invalid dice type selected.");
            return null;
    }
}

//find the document element for htML tag with element id "rollButton"
let rollButton = document.getElementById("rollButton");

//Event lisdtener for the roll button click event
rollButton.addEventListener("click", function() {
    //Roll the dice and get the result
    let rollResult = rollDice();
    //Find the document element for the HTML tag with element id "rollResult"
    let rollResultElement = document.getElementById("rollResult");
    //Update the text content of the roll result element
    rollResultElement.textContent = rollResult;
});
