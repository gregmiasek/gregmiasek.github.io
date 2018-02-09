var ekran = document.getElementById('screen');
var screener = [];
var perbuff = [0];
var perRoot = [0];
var podstawaG = [];


function numbutton(digit) {
    screener.push(digit);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    perbuff.push(digit);
    console.log(perbuff);
    
}

function opbutton(sign) {
    screener.push(sign);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    var perTemp = perbuff.join('');
    perRoot.push(perTemp);
    var perPodstawa = perRoot[perRoot.length - 1];
    podstawaG.push(perPodstawa);
    console.log('perbuff=' + perbuff);
    console.log('pertemp=' + perTemp);
    console.log('perRoot=' + perRoot);
    perbuff.length = 0;
    console.log('perPodstawa=' + perPodstawa);
    console.log('podstawaG=' + podstawaG);
}

document.getElementById('btn-mod').addEventListener('click', function () {
    var podstawa = podstawaG[podstawaG.length - 1];
    var procentString = perbuff.join('');
    var procent = eval(procentString);
    var czynnik = podstawa / 100;
    var percentage = czynnik * procent;
    for (i = 0; i < perbuff.length; i++) {
        screener.pop();
    }
    screener.push(percentage);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    console.log('podstawa=' + podstawa);
    console.log('procent=' + procent);
    console.log('percentage-wynik=' + percentage);
    perbuff.length = 0;
    perbuff.push(percentage);
    podstawaG.length = 0;
    perRoot.length = 1;
});


document.getElementById('btn-0').addEventListener('click', function () {
    numbutton(0);

});


document.getElementById('btn-1').addEventListener('click', function () {
    numbutton(1);
});

document.getElementById('btn-2').addEventListener('click', function () {
    numbutton(2);
});

document.getElementById('btn-3').addEventListener('click', function () {
    numbutton(3);
});

document.getElementById('btn-4').addEventListener('click', function () {
    numbutton(4);
});

document.getElementById('btn-5').addEventListener('click', function () {
    numbutton(5);
});

document.getElementById('btn-6').addEventListener('click', function () {
    numbutton(6);
});

document.getElementById('btn-7').addEventListener('click', function () {
    numbutton(7);
});

document.getElementById('btn-8').addEventListener('click', function () {
    numbutton(8);
});

document.getElementById('btn-9').addEventListener('click', function () {
    numbutton(9);
});

document.getElementById('btn-dot').addEventListener('click', function () {
    numbutton('.');
});

document.getElementById('btn-add').addEventListener('click', function () {
    opbutton('+');
});


document.getElementById('btn-slash').addEventListener('click', function () {
    opbutton('/');
});

document.getElementById('btn-min').addEventListener('click', function () {
    opbutton('-');
});


document.getElementById('btn-prod').addEventListener('click', function () {
    opbutton('*');
});

document.getElementById('btn-del').addEventListener('click', function () {
    ekran.innerHTML = '';
    screener.length = 0;
    podstawaG.length = 0;
});


document.getElementById('btn-eq').addEventListener('click', function () {
    var wynik = screener.join('');
    var policzy = eval(wynik);
    console.log(policzy)
    ekran.innerHTML = policzy;
    screener.length = 0;
    screener.push(policzy);
    perbuff.length = 0;
    podstawaG.length = 0;
});