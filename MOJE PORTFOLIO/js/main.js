'use strict'

var navListItem = document.getElementsByClassName('navli');
var beep = document.getElementById('beep');
var muteIc = document.getElementById('volume-icon');
var amient = document.getElementById('ambient');

for (var i = 0; i < navListItem.length; i++) {
    navListItem[i].addEventListener('mouseenter', function () {
        beep.play();
    });
}

var muteBtn = document.getElementById('volume');

muteBtn.addEventListener('click', function (event) {
    event.preventDefault();
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