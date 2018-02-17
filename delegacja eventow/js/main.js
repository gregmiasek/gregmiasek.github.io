var guziki = document.getElementsByClassName('guzik');
console.log(guziki);

/* for (var i = 0; i < guziki.length; i++) {
    guziki[i].addEventListener('click', function () {
        console.log(this.innerText);
    });
}; */

document.getElementById('calc').addEventListener('click', function (event) {
    console.log(event.target);
    var buttonValue = event.target.innerHTML;
    if (buttonValue === '1') {
        console.log('jeden');
    } else {
        console.log('niejeden');
    }
});