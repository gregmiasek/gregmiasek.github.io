var ekran = document.getElementById('screen');


document.getElementById('btn-0').addEventListener('click', function () {
    var content = document.createTextNode('0');
    ekran.appendChild(content);

});

document.getElementById('btn-1').addEventListener('click', function () {
    var content = document.createTextNode('1');
    ekran.appendChild(content);

});

document.getElementById('btn-2').addEventListener('click', function () {
    var content = document.createTextNode('2');
    ekran.appendChild(content);

});

document.getElementById('btn-3').addEventListener('click', function () {
    var content = document.createTextNode('3');
    ekran.appendChild(content);
});

document.getElementById('btn-4').addEventListener('click', function () {
    var content = document.createTextNode('4');
    ekran.appendChild(content);

});

document.getElementById('btn-5').addEventListener('click', function () {
    var content = document.createTextNode('5');
    ekran.appendChild(content);
});

document.getElementById('btn-6').addEventListener('click', function () {
    var content = document.createTextNode('6');
    ekran.appendChild(content);

});

document.getElementById('btn-7').addEventListener('click', function () {
    var content = document.createTextNode('7');
    ekran.appendChild(content);
});

document.getElementById('btn-8').addEventListener('click', function () {
    var content = document.createTextNode('8');
    ekran.appendChild(content);
});

document.getElementById('btn-9').addEventListener('click', function () {
    var content = document.createTextNode('9');
    ekran.appendChild(content);
});

document.getElementById('btn-dot').addEventListener('click', function () {
    var content = document.createTextNode('.');
    ekran.appendChild(content);
});

document.getElementById('btn-add').addEventListener('click', function () {
    var content = document.createTextNode('+');
    ekran.appendChild(content);
});

document.getElementById('btn-slash').addEventListener('click', function () {
    var content = document.createTextNode('/');
    ekran.appendChild(content);

})

document.getElementById('btn-mod').addEventListener('click', function () {
    var podstawa= parseInt(ekran.innerHTML);
    console.log(podstawa);
    
    
    var content = document.createTextNode('%');
    ekran.appendChild(content);

})

document.getElementById('btn-min').addEventListener('click', function () {
    var content = document.createTextNode('-');
    ekran.appendChild(content);
});

document.getElementById('btn-prod').addEventListener('click', function () {
    var content = document.createTextNode('*');
    ekran.appendChild(content);
});


document.getElementById('btn-eq').addEventListener('click', function () {
    var wynik = ekran.innerText;
    var policzy = eval(wynik);
    console.log(policzy)
    ekran.innerHTML = policzy;

});

document.getElementById('btn-del').addEventListener('click', function () {
    ekran.innerHTML = '';
});