
var numer1 = [];
var numer2 = [];
var digit1 = 0;

document.getElementById('btn-0').addEventListener('click', function(){
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
    var digit2 = Number(numer2.join(''));
    sum = eval(digit1 + digit2);
    numer2.length = 0;
    numer2.push(sum);
    numer1.length = 0;
    console.log(digit1);
    console.log(sum + ' suma');
});

document.getElementById('btn-slash').addEventListener('click', function () {})

document.getElementById('btn-min').addEventListener('click', function () {
    var digit1 = Number(numer1.join(''));
    var digit2 = Number(numer2.join(''));
    dif = digit2 - digit1;
    numer2.length = 0;
    numer2.push(dif);
    numer1.length = 0;
    console.log(digit1);
    console.log(dif + ' roznica');

});

document.getElementById('btn-prod').addEventListener('click', function () {
    var digit1 = Number(numer1.join(''));
    var digit2 = Number(numer2.join(''));
    ilocz = digit1 * digit2;
    numer2.length = 0;
    numer2.push(ilocz);
    numer1.length = 0;
    console.log(digit1);
    console.log(ilocz + ' iloczyn');
});


document.getElementById('btn-eq').addEventListener('click', function () {
    console.log(s);
    numer1.length = 0;
    console.log(digit1);
    numer1.length = 0;
    digit1.length = 0;
    wynik.length = 0;

});

document.getElementById('btn-del').addEventListener('click', function () {
    document.getElementById('screen').value = '';
    numer1.length = 0;
    numer2.length = 0;
    sum = 0;
    dif = 0;
    divi = 0;
    ilocz = 0;
});