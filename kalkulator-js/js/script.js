var numer1 = [];
var digit1 = 0;
var suma = [];
var roznica = [];
var iloczyn = [];
var iloraz = [];

document.getElementById('btn-0').addEventListener('click', function () {
    numer1.push(0);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-1').addEventListener('click', function () {
    numer1.push(1);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-2').addEventListener('click', function () {
    numer1.push(2);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-3').addEventListener('click', function () {
    numer1.push(3);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-4').addEventListener('click', function () {
    numer1.push(4);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);

});

document.getElementById('btn-5').addEventListener('click', function () {
    numer1.push(5);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-6').addEventListener('click', function () {
    numer1.push(6);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);

});

document.getElementById('btn-7').addEventListener('click', function () {
    numer1.push(7);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-8').addEventListener('click', function () {
    numer1.push(8);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-9').addEventListener('click', function () {
    numer1.push(9);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-dot').addEventListener('click', function () {
    numer1.push('.');
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
});

document.getElementById('btn-add').addEventListener('click', function () {
    var digit1 = Number(numer1.join(''));
    suma.push(digit1);
    numer1.length = 0;
    console.log(suma);
});

document.getElementById('btn-slash').addEventListener('click', function () {

    var digit1 = Number(numer1.join(''));
    iloraz.push(digit1);
    numer1.length = 0;
    console.log(iloraz);

})

document.getElementById('btn-min').addEventListener('click', function () {
    var digit1 = Number(numer1.join(''));
    roznica.push(digit1);
    numer1.length = 0;
    console.log(roznica);

});

document.getElementById('btn-prod').addEventListener('click', function () {
    var digit1 = Number(numer1.join(''));
    iloczyn.push(digit1);
    numer1.length = 0;
    console.log(iloczyn);
});

document.getElementById('btn-eq').addEventListener('click', function () {
    var sum = 0;
    for (var i = 0; i < suma.length; i++) {
        sum += suma[i]
    }


    console.log(sum);
    console.log(roz);




    numer1.length = 0;
    suma.length = 0;
    iloczyn.length = 0;
    iloraz.length = 0;
    roznica.length = 0;
});

document.getElementById('btn-del').addEventListener('click', function () {
    document.getElementById('screen').value = '';
    numer1.length = 0;
    suma.length = 0;
    iloczyn.length = 0;
    iloraz.length = 0;
    roznica.length = 0;
});