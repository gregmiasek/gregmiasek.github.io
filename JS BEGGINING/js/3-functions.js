'use strict';

/*deklaracja funkcji*/
function example() {
    console.log('To jest przykładowa funkcja')
}

example();

var anonim = function () {
    console.log('to jest funkcja anonim')
}

anonim();

function dodajDwieLiczby(num1, num2) {

    console.log(num1 + num2);
    return num1 + num2;
}

dodajDwieLiczby(15, 30);
dodajDwieLiczby(3, 6);

function whoAmI(name, surname, height) {
    console.log('Moje imię to:' + name + ", Moje nazwisko to:" + surname + ' i mam ' + height + ' cm.')
}

whoAmI('Greg', 'Miąsek', '178');

var wynikDodawania = dodajDwieLiczby(7+32);

console.log(wynikDodawania);