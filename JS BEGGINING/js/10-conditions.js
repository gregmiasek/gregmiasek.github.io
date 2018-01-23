'use strict';


var number = 10;

/*warunek if*/
if (number > 5) {
    console.log('Liczba jest większa od 5')
}

/*Waruke if-else*/

if (number < 3) {
    console.log('Liczba jest mniejsza od 3')
} else {
    console.log('liczba jest większa lub równa 3')
}

/*warunek else-if*/
if (number < 10) {
    console.log('liczba jest mniejsza od 10');
} else if (number == 10) {
    console.log('liczba wynosi 10')
} else if (number >= 10 && number <= 20) {
    console.log('Liczba z przedziału 10-20')
}

/*warunek switch*/

var color = 'blue';

switch (color) {
    case 'red':
        console.log('Jest czerwone');
        break;

    case 'green':
        console.log('jest zielone');
        break;

    default:
        console.log('Jest niezielone i nieczerwone');
}

class Osoba {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    liczBmi() {
        return this.weight / Math.pow(this.height, 2);
    }

    bmiMessage() {
        if (this.liczBmi()>26) {
            console.log('Masz nadwage')
        } else if (this.liczBmi() > 18 && this.liczBmi() < 26) {
            console.log('Ważysz prawdiłowo')
        } else if (this.liczBmi() < 18) {
            console.log('Masz niedowage')
        }
    }
}

var lukasz = new Osoba(75, 172);


lukasz.bmiMessage();