'use strict'

var navListItem = document.getElementsByClassName('navli');
var beep = document.getElementById('beep');
var muteIc = document.getElementById('volume-icon');
var amient = document.getElementById('ambient');
var tune = document.getElementById('tune');


for (var i = 0; i < navListItem.length; i++) {
    navListItem[i].addEventListener('mouseenter', function () {
        beep.play();
    });
}

var muteBtn = document.getElementById('volume');

muteBtn.addEventListener('click', function (event) {
    event.preventDefault();
    tune.play();

    if (muteIc.classList.contains("fa-volume-up")) {
        muteIc.classList.remove("fa-volume-up");
        muteIc.classList.add("fa-volume-off");
        ambient.muted = true;
    } else {
        muteIc.classList.remove("fa-volume-off");
        muteIc.classList.add("fa-volume-up");
        ambient.muted = false;
    }
});


var slideLeft = document.getElementById('left');
var slideRigth = document.getElementById('right');
var slideSnd = document.getElementById('slide-sound');
var sliderBar = document.getElementById('slider-bar');
var sliderList = document.getElementsByClassName('slider-content');
console.log(sliderList);
var sliderCount = sliderList.length;
var sliderSpan = sliderCount * 500;
sliderBar.style.width = sliderSpan + 'px';
var sliderIcons = document.getElementsByClassName('icon');
console.log(sliderIcons);


slideRigth.addEventListener('click', function () {
    console.log('prawo');
    var sliderPositon = sliderBar.offsetLeft;

    if (sliderPositon != -sliderSpan + 500)

    {
        sliderBar.style.left = sliderPositon - 500 + 'px';
        sliderIcons[1].classList.add('fa-chevron-right');
        sliderIcons[0].classList.add('fa-chevron-left');
        sliderIcons[0].classList.remove('fa-times');
        sliderIcons[1].classList.remove('fa-times');
        slideSnd.play();

    } else {
        sliderIcons[1].classList.remove('fa-chevron-right');
        sliderIcons[1].classList.add('fa-times');
    };
    console.log(sliderPositon);

});

slideLeft.addEventListener('click', function () {
    console.log('lewo');
    var sliderPositon = sliderBar.offsetLeft;

    if (sliderPositon !== 0)

    {
        sliderBar.style.left = sliderPositon + 500 + 'px';
        sliderIcons[0].classList.add('fa-chevron-left');
        sliderIcons[1].classList.add('fa-chevron-right');
        sliderIcons[0].classList.remove('fa-times');
        sliderIcons[1].classList.remove('fa-times');
        slideSnd.play();
    } else {
        sliderIcons[0].classList.remove('fa-chevron-left');
        sliderIcons[0].classList.add('fa-times');
    };
    console.log(sliderPositon);

});