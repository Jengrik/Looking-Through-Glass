// The JS File have two objetives:
//      1. As a method to control the Document Object Model (DOM)
//      2. As one posible solution to the problem described.

// console.log("Developed by: Eng. Jhon Erik Navarrete Gómez")
console.log("     The main functions are enabled.");

// Arrow Functions Definitions
// ----------------------------------------------------------------------

// 1.   Convert Num to Base Characters
//      This function converts the num to the base specified. For num above of 9 it uses [a-z] letters.
//      The max base utilized could be 36th.
//      The output will be an Array of Strings
const ConvertByBase = (Num,Base) =>{
    let Convertion = [];
    while(Num>=Base){
        if(Num%Base <= 9){Convertion.push((Num%Base).toString())}
        else {Convertion.push(String.fromCharCode(65 + Num%Base - 10))}
        Num = Math.floor(Num/Base);
    }
    if(Num%Base <= 9){Convertion.push((Num%Base).toString())}
    else {Convertion.push(String.fromCharCode(65 + Num%Base - 10))}
    Convertion = Convertion.reverse();
    return Convertion;
}

// 2.  Is the array Palyndrome?
//      This function checks the Array. If the array is payndrome returns true, else returns false.
const IsPalyndrome = (StrArray) => {
    let InvStrArray = StrArray.slice();
    let Flag = true;
    InvStrArray.reverse();
    for(let i=0;i<StrArray.length;i++){
        if(StrArray[i] != InvStrArray[i]){
            Flag = false;
            break;
        }
    }
    return Flag;
}

// Main Program
// ----------------------------------------------------------------------
const MainFunction = (Num) => {
    let MaxIteration = Math.min(Num,36);
    let Flag = false;
    let Message = "";

    for(let i=2;i<=MaxIteration;i++){
        if(IsPalyndrome(ConvertByBase(Num,i)) == true){
            Flag = true;
            // Message = `The number is: ${Num}, The base is: ${i} and the Result is: ${ConvertByBase(Num,i).join("")}`;
            Message = `Okay, I will help you.<br><br> If you want to send the number ${Num} through the mirror you should express it in ${i} base. <br><br> In other words... <br> <b>You should send ${ConvertByBase(Num,i).join("")}</b>`
            break;
        }
    }
    if(Flag == false){Message = "I'm sorry. You can't send this number through the mirror.";}

    const Answer = document.querySelector("#Answer");
    Answer.innerHTML = Message;
    // console.log(Answer)
}
