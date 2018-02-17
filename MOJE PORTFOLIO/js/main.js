'use strict'

var navListItem = document.getElementsByClassName('navli');
var beep = document.getElementById('beep');
var woosh = document.getElementById('woosh');
var muteIc = document.getElementById('volume-icon');
var amient = document.getElementById('ambient');
var tune = document.getElementById('tune');
var innerSection = document.getElementsByClassName('inner-section');
console.log(innerSection);

var skillIc = document.getElementsByClassName('skill');

for (var i = 0; i < skillIc.length; i++) {
    skillIc[i].addEventListener('mouseenter', function () {
        woosh.play();
    });
}


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
var sliderSpan = sliderCount * innerWidth;
var sliderIcons = document.getElementsByClassName('icon');
var innerWidth = innerSection[1].clientWidth;
var clickCount = [];

console.log(sliderSpan + ' sliderspan');

for (var i = 0; i < sliderCount; i++) {
    sliderList[i].style.width = innerWidth + 'px';
}


window.addEventListener('resize', function () {
    console.log("resize");
    var innerWidth = innerSection[1].clientWidth;
    for (var i = 0; i < sliderCount; i++) {
        sliderList[i].style.width = innerWidth + 'px';
    }

    sliderBar.style.left = -innerWidth * clickCount.length + 'px';
});


slideRigth.addEventListener('click', function () {
    console.log('prawo');
    console.log(innerWidth);
    console.log(clickCount);
    var innerWidth = innerSection[1].clientWidth;
    var sliderPositon = sliderBar.offsetLeft;
    var sliderSpan = sliderCount * innerWidth;


    if (sliderPositon != -sliderSpan + innerWidth)

    {
        clickCount.push(1)
        sliderBar.style.left = -innerWidth * clickCount.length + 'px';
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


    console.log(clickCount);
    var innerWidth = innerSection[1].clientWidth;

    var sliderSpan = sliderCount * innerWidth;
    var sliderPositon = sliderBar.offsetLeft;


    if (sliderPositon !== 0)

    {
        clickCount.pop();
        sliderBar.style.left = -innerWidth * clickCount.length + 'px';
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