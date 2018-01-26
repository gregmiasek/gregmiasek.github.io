'use strict';
/*Opertory arytmetyczne*/
var winnaGrosika = 6 % 4;
console.log(winnaGrosika);

console.log(winnaGrosika++);

var liczba = 10;
console.log(++liczba);
console.log(++liczba);

/*Operatory przypisania*/

var number = 100;
console.log(number);

number += 20; //alternatywa dla number = number +20
console.log(number);

number *= 2;
console.log(number);

/*Opeartory porównania*/

console.log(2 == 2);s

console.log(3 !== 3);

console.log(3 > 3);
console.log(3 >= 3);

/*Operstory logiczne*/

console.log((2 == 2) && (3< 2)); //i - and
console.log((2 == 2) && (3< 2));

console.log((2 == 2) || (3< 2));
console.log((2 == 2) || (3< 2)); //lub

console.log(!(2==2)); //! przed nawiasem tozaprzeczenie logiczne

console.log((2>1)||(1>1)&&(2==2));

var parzystaCzyNie = (101%2 == 0)?'parzysta':'nieparzysta';

console.log (parzystaCzyNie);

var parzystaCzyNie = (number%2 == 0)?'parzysta':'nieparzysta';

console.log (parzystaCzyNie);



