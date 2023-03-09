const screen = document.querySelector("#screen");
const td = document.querySelectorAll("td");

//GET THE CLICKED BUTTON AND PRINT ON TEXTBOX
function readButton(e) {

    switch (e.getAttribute("name")) {
        case "por": return "%";
            break;
        case "ce": return "clear";
            break;
        case "c": return "clear";
            break;
        case "erase": return "erase";
            break;
        case "oneDivided": return "1/";
            break;
        case "square": return "²";
            break;
        case "squareRoot": return "√";
            break;
        case "divide": return "÷";
            break;
        case "seven": return "7";
            break;
        case "eight": return "8";
            break;
        case "nine": return "9";
            break;
        case "multiply": return "x";
            break;
        case "four": return "4";
            break;
        case "five": return "5";
            break;
        case "six": return "6";
            break;
        case "minus": return "-";
            break;
        case "one": return "1";
            break;
        case "two": return "2";
            break;
        case "three": return "3";
            break;
        case "plus": return "+";
            break;
        case "plusminus": return "+-";
            break;
        case "zero": return "0";
            break;
        case "dot": return ".";
            break;
        case "equal": return "=";
            break;
        default: return "";
    }

}
td.forEach(function (e) {

    e.addEventListener('click', function () {
        let buttonValue = readButton(e);
        if (buttonValue === "clear" ||
            buttonValue === "erase" ||
            buttonValue === "1/" ||
            buttonValue === "+-" ||
            buttonValue === "=") {
            return "";
        } else screen.value += buttonValue;
    })
}


)
/*
GET THE CLICKED BUTTON AND PRINT ON TEXTBOX
|
|
|
*/

//AUTO ADJUST FONT-SIZE
document.addEventListener('click', adjustFontSize = () => {
    const textLength = screen.value.length;
    if (textLength >= 12) { screen.style.fontSize = '20px' }
}
)
/*
|
|
|
AUTO ADJUST FONT-SIZE*/

//FUNCTION BUTTONS
operations = (e) => {

    switch (e) {
        case "clear": screen.value = "";
            break;
        case "erase": screen.value = screen.value.slice(0, -1);
            break;
        case "1/": screen.value = dividedByOne(e);
            break;
        case "+-": screen.value = minusplus(e);
            break;
        case "=": screen.value = equal(e);
            break;
    };
}
td.forEach(function (e) {

    e.addEventListener('click', () => operations(readButton(e)))
}
)

//MATH OPERATIONS
dividedByOne = (e) => { return 1 / screen.value; }

minusplus = (e) => {if (screen.value < 0) { return -screen.value; 
        } else return -screen.value;
        };

equal = (e) => {         // ²     √     ÷
    const operators = /[%\u00b2\u221a\u00f7x\-+]/g;
    const split = screen.value.split(operators); // ex for(1+2+3-4): [0]1 [1]2 [2]3 [3]4
    const usedOperators = screen.value.match(operators); // ex for(1+2+3-4): [0]+ [1]+ [2]- 
    let result = parseFloat(split[0]); // ex for(1+2+3-4): result === 1

    for (let arrayPosition = 0; arrayPosition <= split.length; arrayPosition++) {
        let numbers = parseFloat(split[arrayPosition + 1]);

        switch (usedOperators[arrayPosition]) {

            case "%": result *= 100 / numbers;
                break;
            case "²": result **= 2;
                break;
            case "√": result = Math.sqrt(result);
                break;
            case "÷": result /= numbers;
                break;
            case "x": result *= numbers;
                break;
            case "-": result -= numbers;
                break;
            case "+": result += numbers;
                break;
        }

    }
    return result;
};
