'use strict';
/*Zmienna przechowująca tablicę*/

var emptyArray = [];
console.log(emptyArray);

var exampleArray = [1, 'cześć', true, null];
console.log(exampleArray);

/*Przypisaywanie elementów*/
var arrayElement = exampleArray[3];
console.log(arrayElement);

exampleArray[3] = 60;
exampleArray[2] = 'Dude';
exampleArray[4] = false;
//exampleArray[10] = 'kotek';

/*Metody tablicowe*/

exampleArray.push('Hello');
console.log(exampleArray);

exampleArray.pop();
var lastArrayElement = exampleArray.pop();
console.log(lastArrayElement);
console.log(exampleArray);

exampleArray.unshift('siema');
console.log(exampleArray);

exampleArray.shift();
console.log(exampleArray);

/*Wstwa dwa elementy na 2 i 3 indexie tablicy exampleArray*/

exampleArray.splice(2, 0, 'koteczek', 71);
console.log(exampleArray);

/*Długość tablicy*/

console.log(exampleArray.length);

/*Tablica dwuwyiarowa*/

var twoDArray = [['cześć', 'dude'], ['grer', 'miasek']];
console.log(twoDArray[0][1]);

/*odwracanie i sortowanie*/
exampleArray.reverse();
console.log(exampleArray);

exampleArray.sort();
console.log(exampleArray);