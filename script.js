//declare global variables
let num1 = null;
let num2 = null;
let input = ""
let operatorId =""
const display = document.getElementById("display");

//add event listener to number buttons and store the value in input
const numberButtons = document.querySelectorAll(".numberButton");

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', ()=>{
        input += numberButton.value;
        display.textContent = input;
    })
})

//operator functions
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener('click', ()=>{

        //if num1 is empty, convert input string to an integer and store it in num 1
        //if num1 has a value, convert input string to and integer and store it in num2 and execute calculation
        if(num1 === null){
            num1 = parseInt(input); 
        } else {                      
            num2 = parseInt(input);
            calculation(num1, num2);
        }

        //store the operation id in the operatorId variable for the next calculation
        operatorId = operator.id; 

        //clear input
        input = ""

        //display
        display.textContent = num1; 

        console.log(`num1 ${num1}`);
        console.log(`input ${input}`)
        console.log(`num2 ${num2}`);
        console.log(`operatorId ${operatorId}`);
    })
 })


// equal function
const equal = document.getElementById("equal");

equal.addEventListener('click', ()=>{

    //store input in num2. It's always num2
    num2 = parseInt(input);

    //perform calculation
    calculation(num1, num2);

    //store num1 in input so that a subsequent calculation will have an input value
    input = num1;

    //display
    display.textContent = num1;

    //reset num1 and num2;
    num1 = null;
    num2 = null;

    console.log(`num1 ${num1}`);
    console.log(`input ${input}`)
    console.log(`num2 ${num2}`);
    console.log(`operatorId ${operatorId}`);
})

//clear function
const clear = document.getElementById("clear");

clear.addEventListener('click', ()=>{
    num1 = null;
    num2 = null;
    input = "";
    display.textContent = ""
})

//calculation function
function calculation(a, b) {

    //perform calculation
    if (operatorId === "division") {
        num1 = a / b;
    } else if (operatorId === "multiplication") {
        num1 = a * b;
    } else if (operatorId === "addition") {
        num1 = a + b;
    } else {
        num1 = a - b;
    }
}


