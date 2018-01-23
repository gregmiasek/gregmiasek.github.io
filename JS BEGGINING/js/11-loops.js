'use script';

/*
for (var i = 0; i < 10; i++) {
    console.log(i)
}
*/

var randomNumber = Math.round(Math.random() * 10);

/*
while (randomNumber > 2) {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random() * 10);
}
*/

/*do  {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random() * 10);
} while (randomNumber > 2);*/

var jakasTablica = [0, 2, 17, 'Cześć', '', -12.3, false, true, 30];

/*Napisz funkcję ktora przyjmnie tablice jako parametr izwroci liczbe elementow typu numer, ktore sa w tablicy*/

function countNumbers(arr) {

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            ++count;
        }
    }


    return count;
}

console.log(countNumbers(jakasTablica));

/*Break i continue*/

for (var i = 1; i <= 10; i++) {
    console.log(i);
    if (i % 5 == 0) {
        break;
    }
}

for (var i = 1; i <= 10; i++) {
    if (i % 5 == 0) {
        continue;
    }
    console.log(i);
}