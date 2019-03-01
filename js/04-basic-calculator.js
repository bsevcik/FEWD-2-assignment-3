/*eslint-env browser*/


function calculate(calculateParameters) {
    "use strict";
    switch (calculateParameters[2]) {
    case "add":
        window.alert(calculateParameters[0] + " plus " + calculateParameters[1] + " equals " + (calculateParameters[0] - calculateParameters[1]));
        break;
    case "subtract":
        window.alert(calculateParameters[0] + " minus " + calculateParameters[1] + " equals " + (calculateParameters[0] - calculateParameters[1]));
        break;
    case "multiply":
        window.alert(calculateParameters[0] + " times " + calculateParameters[1] + " equals " + (calculateParameters[0] * calculateParameters[1]));
        break;
    case "divide":
        window.alert(calculateParameters[0] + " divided by " + calculateParameters[1] + " equals " + (calculateParameters[0] / calculateParameters[1]));
        break;
    }
    window.console.log(calculateParameters);
}

function calculator() {
    "use strict";
    var num1 = Number(window.prompt("Type in first number"));
    var num2 = Number(window.prompt("Type in second number"));
    var operation = window.prompt("What operation do you want to do? (add, subtract, multiply, or divide)");
    window.console.log(operation);
    if (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide") {
        window.alert("you must type the word add, subtract, multiply, or divide without any capitalization");
        calculator();

    } else {
        var calculateParameters = [];
        calculateParameters.push(num1);
        calculateParameters.push(num2);
        calculateParameters.push(operation);
    }
    if (typeof (num1) !== "number" || typeof (num2) !== "number") {
        window.alert("You must type in numbers");
    }
    calculate(calculateParameters);
    return calculateParameters;
}

