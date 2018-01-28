'use strict'

document.addEventListener('DOMContentLoaded', function () {

    showNav();

});

function showNav() {
    document.getElementById('toggle').addEventListener('click', function (event) {
        document.body.classList.add('active');
        event.stopPropagation();
    })

    document.body.addEventListener('click', function () {
        document.body.classList.remove('active');

    });

    document.getElementById('menu').addEventListener('click', function (event) {
        event.stopPropagation();

    });
}