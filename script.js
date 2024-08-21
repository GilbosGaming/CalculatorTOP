let num1 = "";
let num2 = "";
let operator = "";
let result = ""
let display = document.getElementById('display');
const buttons = document.querySelectorAll("button");

function addition(a, b) {
  return a + b;
   
};

function subtraction(a, b) {
    return a - b;
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    if (operator == '+') {
        return addition(a, b);
    }
    else if (operator == '-') {
        return subtraction(a, b);
    }
    else if (operator == '*'){
        return multiplication(a, b);
    }
    else if (operator == '/'){
        return division(a, b);
    }
    else {
        return 'Error';
    }
};


function changeDisplay(input) {
    display.textContent = input;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let displayText = button.textContent;
        
        if(displayText >= '0' && displayText <= '9') {
            if(operator) {
                num2 += displayText;
                changeDisplay(num2);
            }
            else {
                num1 += displayText;
                changeDisplay(num1);
            }
        } else if (displayText === '+' || displayText === '-' || displayText === '/' || displayText === 'x') {
            if (num2) {
                num1 = operate(parseFloat(num1), parseFloat(num2), operator);
                changeDisplay(num1);
                num2 = "";
            }
            operator = displayText === 'x' ? '*' : displayText;
            
        } else if (displayText === '=') {
            let result = operate(parseFloat(num1), parseFloat(num2), operator);
            changeDisplay(result);
            num1 = result;
            num2 = "";
            operator = "";
        } else if (displayText === 'Clr.') {
            num1 = "";
            num2 = "";
            operator = "";
            changeDisplay("");
        }
    });
});