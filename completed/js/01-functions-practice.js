/*eslint-env browser*/

//STEP 1
function halfNumber(x) {
    "use strict";
    var y = x / 2;
    window.console.log("Half of " + x + " is " + y);
    return y;
}
//STEP 2
function squareNumber(x) {
    "use strict";
    var y = x * x;
    window.console.log("The result of squaring " + x + " is " + y);
    return y;
}

//STEP 3
function percentOf(x, y) {
    "use strict";
    var z = x / y;
    window.console.log(z*100 + " is the percent of " + x + " divided by " + y);
    return y;
}
//STEP 4
function findModulus(x, y) {
    "use strict";
    var z = x % y;
    window.console.log(z + " is the modulus of " + x + " and " + y);
    return y;
}
//STEP 5
var addedUp;
var x = 0;
function stepFive() {
    "use strict";
    addedUp = window.prompt("Put numbers in, delimited by commas and spaces \nExample: 1, 5, 8");
    addedUp = addedUp.split(', ');
    for (var i = 0; i < addedUp.length; i++) {
        addedUp[i] = Number(addedUp[i]);
    }
    console.log(addedUp);
    window.console.log(addedUp.length, addedUp, addedUp[1], addedUp[2]);
    for (var j = 0; j < addedUp.length; j++) {
        x += Number(addedUp[j]);
    }
    window.alert("The sum of the numbers you entered is " + x);
    return x;
}
