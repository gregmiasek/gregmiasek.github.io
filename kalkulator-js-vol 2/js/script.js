var ekran = document.getElementById('screen');
var screener = []
var perbuff = [];
var perRoot = [0];
var podstawaG = [];


document.getElementById('btn-add').addEventListener('click', function () {
    screener.push('+')
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    console.log(onScreen);
    var perTemp = perbuff.join('');
    perRoot.push(perTemp);
    var perPodstawa = perRoot[perRoot.length - 1];
    podstawaG.push(perPodstawa);
    console.log('perbuff=' + perbuff);
    console.log('pertemp=' + perTemp)
    console.log('perRoot=' + perRoot);
    perbuff.length = 0;
    console.log('perPodstawa=' + perPodstawa);
    console.log('podstawaG=' + podstawaG);
});

document.getElementById('btn-mod').addEventListener('click', function () {
    var podstawa = podstawaG[podstawaG.length - 1];
    var procentString = perbuff.join('');
    var procent = parseInt(procentString);
    var percentage = podstawa / 100 * procent;
    screener.pop();
    screener.push(percentage);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    console.log('podstawa=' + podstawa);
    console.log('procent=' + procent);
    console.log('percentage-wynik=' + percentage);
    perbuff.length = 0;
    podstawaG.length = 0;
    perRoot.length = 1;
})


document.getElementById('btn-0').addEventListener('click', function () {
    screener.push(0);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(0);
    console.log(perbuff);


});

document.getElementById('btn-1').addEventListener('click', function () {
    screener.push(1);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(1);
    console.log(perbuff);



});

document.getElementById('btn-2').addEventListener('click', function () {
    screener.push(2);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(2);
    console.log(perbuff);


});

document.getElementById('btn-3').addEventListener('click', function () {
    screener.push(3);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(3);
    console.log(perbuff);

});

document.getElementById('btn-4').addEventListener('click', function () {
    screener.push(4);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(4);
    console.log(perbuff);


});

document.getElementById('btn-5').addEventListener('click', function () {
    screener.push(5);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(5);
    console.log(perbuff);

});

document.getElementById('btn-6').addEventListener('click', function () {
    screener.push(6)
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(6);
    console.log(perbuff);


});

document.getElementById('btn-7').addEventListener('click', function () {
    screener.push(7);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(7);
    console.log(perbuff);

});

document.getElementById('btn-8').addEventListener('click', function () {
    screener.push(8);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(8);
    console.log(perbuff);

});

document.getElementById('btn-9').addEventListener('click', function () {
    screener.push(9);
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push(9);
    console.log(perbuff);

});

document.getElementById('btn-dot').addEventListener('click', function () {
    screener.push('.')
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;


    perbuff.push('.');
    console.log(perbuff);


});



document.getElementById('btn-slash').addEventListener('click', function () {
    screener.push('/');
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    var perTemp = perbuff.join('');
    perRoot.push(perTemp);
    var perPodstawa = perRoot[perRoot.length - 1];
    podstawaG.push(perPodstawa);
    console.log('perbuff=' + perbuff);
    console.log('pertemp=' + perTemp)
    console.log('perRoot=' + perRoot);
    perbuff.length = 0;
    console.log('perPodstawa=' + perPodstawa);
    console.log('podstawaG=' + podstawaG);



})

document.getElementById('btn-min').addEventListener('click', function () {
    screener.push('-');
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    var perTemp = perbuff.join('');
    perRoot.push(perTemp);
    var perPodstawa = perRoot[perRoot.length - 1];
    podstawaG.push(perPodstawa);
    console.log('perbuff=' + perbuff);
    console.log('pertemp=' + perTemp)
    console.log('perRoot=' + perRoot);
    perbuff.length = 0;
    console.log('perPodstawa=' + perPodstawa);
    console.log('podstawaG=' + podstawaG);


});

document.getElementById('btn-prod').addEventListener('click', function () {
    screener.push('*')
    var onScreen = screener.join('');
    ekran.innerHTML = onScreen;
    var perTemp = perbuff.join('');
    perRoot.push(perTemp);
    var perPodstawa = perRoot[perRoot.length - 1];
    podstawaG.push(perPodstawa);
    console.log('perbuff=' + perbuff);
    console.log('pertemp=' + perTemp)
    console.log('perRoot=' + perRoot);
    perbuff.length = 0;
    console.log('perPodstawa=' + perPodstawa);
    console.log('podstawaG=' + podstawaG);



});



document.getElementById('btn-del').addEventListener('click', function () {
    ekran.innerHTML = '';
    screener.length = 0;

});


document.getElementById('btn-eq').addEventListener('click', function () {
    var wynik = screener.join('');
    var policzy = eval(wynik);
    console.log(policzy)
    ekran.innerHTML = policzy;

});