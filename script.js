//declare valuables
let screenValue = "";
let screenValue2 = "";
let screenDisplay = document.getElementById("screen");
let screenDisplay2 = document.getElementById("screen2");
let firstNum = 0;
let operatorValue = ""

//add event listner to buttons 
const numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', ()=>{
        screenValue += numberButton.value;
        screenDisplay.textContent = screenValue;
    })
})

//declare valuable for operators and store value when an operator is clicked
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener('click', ()=>{
        firstNum = parseInt(screenValue); //store the current screenValue to a variable "firstNum"
        screenValue2 = screenValue + operator.value;
        screenDisplay2.textContent = screenValue2; //screen2 will display the current value and an operator
        screenValue = ""; //reset the screenValue
        screenDisplay.textContent = screenValue; //reset the screenDisplay
        operatorValue = operator.id; //store the operator value to an variable
    })
})

//= function
const equal = document.getElementById("equal");

equal.addEventListener('click', ()=>{
    screenDisplay2.textContent = screenValue2 + screenValue + "=";
    screenValue = operate();
    screenDisplay.textContent = screenValue;
})

function operate() {
    if (operatorValue === "dividedBy") {
        return firstNum / parseInt(screenValue);
    } else if (operatorValue === "times") {
        return firstNum * parseInt(screenValue);
    } else if (operatorValue === "add") {
        return firstNum + parseInt(screenValue);
    } else {
        return firstNum - parseInt(screenValue);
    }
}

//clear function
const clear = document.getElementById("clear");

clear.addEventListener('click', ()=>{
    clearValue();
})

function clearValue() {
    screenValue = "";
    screenDisplay.textContent = screenValue;
    screenValue2 = "";
    screenDisplay2.textContent = screenValue2;
}