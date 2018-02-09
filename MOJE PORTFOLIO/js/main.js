'use strict'

var navListItem = document.getElementsByClassName('navli');
var beep = document.getElementById('beep');

console.log(navListItem);

for (var i = 0; i < navListItem.length; i++) {
    navListItem[i].addEventListener('mouseenter', function () {
        beep.play();
    });
}