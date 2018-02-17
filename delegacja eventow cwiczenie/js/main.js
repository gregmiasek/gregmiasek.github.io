var guziki = document.getElementsByClassName('guzik');
console.log(guziki);

/* for (var i = 0; i < guziki.length; i++) {
    guziki[i].addEventListener('click', function () {
        console.log(this.innerText);
    });
}; */
var paragrafy = document.querySelectorAll('#accordion p');
console.log(paragrafy);


document.getElementById('accordion').addEventListener('click', function (e) {
    for (var i = 0; i < paragrafy.length; i++) {
        paragrafy[i].classList.remove('shown');
    }

    if (e.target.classList.contains('title')) {
        e.target.nextElementSibling.classList.toggle('shown');
    }
});