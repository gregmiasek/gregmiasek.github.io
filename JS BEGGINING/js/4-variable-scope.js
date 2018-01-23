'use strict';

function example() {
    var exampleVariable = 10;
    return exampleVariable;
}

function newExample() {
    var exampleVariable = 12;
    return exampleVariable;
}




var variableOutsideFunction = newExample();
var variableOutsideFunction2 = example();


console.log(variableOutsideFunction);
console.log(variableOutsideFunction2);
