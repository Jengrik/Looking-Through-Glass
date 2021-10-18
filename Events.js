// The JS File have two objetives:
//      1. To Enable de Event Following of the User Activities.
//      2. To generate an alert when the key pressed wouldn't be a number.

// Presentation
console.log("Developed by: Eng. Jhon Erik Navarrete Gómez");
console.log("     The events are enabled.");

// Searching for the HTML Elements
const InputNumber = document.querySelector(".InputNumberClass");
const Testing = document.querySelector(".GoodCheckParagraph");
const SolveButton = document.querySelector(".SolveButtonClass");

InputNumber.addEventListener("input", CheckKeyPressed);
SolveButton.addEventListener("click",Do_TheSolution);

function CheckKeyPressed(Event){
    if(Event.target.value.length == 0){
        // The input isn't a number.
        Testing.setAttribute("class","BadCheckParagraph");
        Testing.innerHTML = "Didn't you read?<br><b>Please, just write numbers, ergo [0-9] characters.</b>"
        SolveButton.disabled = true;
    }else{
        // The input is a number.
        Testing.setAttribute("class","GoodCheckParagraph");
        Testing.innerHTML = "Please, just write numbers, ergo [0-9] characters."
        SolveButton.disabled = false;
    }
}

function Do_TheSolution(Event){
    let Num = parseInt(InputNumber.value);
    MainFunction(Num);
}