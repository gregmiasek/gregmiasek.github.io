/*var numerki = document.getElementsByClassName('num');

numerki.sort;

console.log(numerki);

for (var i = 0; i < numerki.length; i++) {
    var nums = numerki[i].defaultValue;*/

var numer1 = [];

var digit1 = 0;
var wynik = []

document.getElementById('btn-0').addEventListener('click', function () {
    numer1.push(0);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})
document.getElementById('btn-1').addEventListener('click', function () {
    numer1.push(1);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-2').addEventListener('click', function () {
    numer1.push(2);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-3').addEventListener('click', function () {
    numer1.push(3);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-4').addEventListener('click', function () {
    numer1.push(4);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);

})

document.getElementById('btn-5').addEventListener('click', function () {
    numer1.push(5);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-6').addEventListener('click', function () {
    numer1.push(6);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);

})

document.getElementById('btn-7').addEventListener('click', function () {
    numer1.push(7);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-8').addEventListener('click', function () {
    numer1.push(8);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-9').addEventListener('click', function () {
    numer1.push(9);
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})

document.getElementById('btn-dot').addEventListener('click', function () {
    numer1.push('.');
    var digit1 = Number(numer1.join(''));
    document.getElementById('screen').value = digit1;
    console.log(digit1);
})




document.getElementById('btn-add').addEventListener('click', function () {
            var digit1 = Number(numer1.join(''));
            console.log(digit1);
            wynik.push(digit1);
            s = 0;
            for (i = 0; i < wynik.length; i += 1) {
                s += wynik[i];
                console.log(s);}
                numer1.length = 0;
                document.getElementById('screen').value = digit1;
    document.getElementById('screen').value=s;
            
            })


document.getElementById('btn-slash').addEventListener('click', function () {
            var digit1 = Number(numer1.join(''));
            console.log(digit1);
            wynik.push(digit1);
            s = 1;
            for (i = 0; i < wynik.length; i += 1) {
                s /= wynik[i];
                console.log(s);}
                numer1.length = 0;
                document.getElementById('screen').value = digit1;
    document.getElementById('screen').value=s;
            
            })

document.getElementById('btn-min').addEventListener('click', function () {
            var digit1 = Number(numer1.join(''));
            console.log(digit1);
            wynik.push(digit1);
            s = 0;
            for (i = 0; i < wynik.length; i += 1) {
                s -= wynik[i];
                console.log(s);}
                numer1.length = 0;
                document.getElementById('screen').value = digit1;
    document.getElementById('screen').value=s;
            
            })

document.getElementById('btn-prod').addEventListener('click', function () {
            var digit1 = Number(numer1.join(''));
            console.log(digit1);
            wynik.push(digit1);
            s = 1;
            for (i = 0; i < wynik.length; i += 1) {
                s *= wynik[i];
                console.log(s);}
                numer1.length = 0;
                document.getElementById('screen').value = digit1;
    document.getElementById('screen').value=s;
    return s;
            
            })




        document.getElementById('btn-eq').addEventListener('click', function () {
              console.log(s);
            numer1.length = 0;
            console.log(digit1);
            numer1.length = 0;
            digit1.length = 0;
            wynik.length = 0;

        })

        document.getElementById('btn-del').addEventListener('click', function () {
            document.getElementById('screen').value = '';
            var final=Number(wynik.join(''));
          
            numer1.length = 0;
            digit1.length = 0;
            wynik.length = 0;

        })