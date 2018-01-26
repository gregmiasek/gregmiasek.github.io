'use strict';

function paragraphClick() {
    console.log('nie klikaj mnie Stefan');
}

function changeHeaderText() {
    document.querySelector('h1').innerText = 'Zmiana';
}

document.querySelector('h1').onclick = changeHeaderText;


function changeBackground() {
    document.getElementById('parFirst').style.backgroundColor = 'yellow';
}

document.getElementById('parFirst').addEventListener('click', changeBackground);

/*usuwanie add event listenera*/

document.querySelectorAll('.superlink')[1].addEventListener('click', function () {
    document.getElementById('parFirst').removeEventListener('click', changeBackground)
})

document.getElementsByTagName('a')[1].addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.type);
    console.log('no refresh');
    this.style.backgroundColor='pink';
})

