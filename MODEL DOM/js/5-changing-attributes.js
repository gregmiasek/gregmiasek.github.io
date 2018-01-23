'use strict';

document.getElementsByTagName('a')[1].href = 'https://google.com';

function getAllHrefs() {
    var hrefsArray = [];
    var linksCollection = document.getElementsByTagName('a');

    for (var i = 0; i < linksCollection.length; i++) {
        hrefsArray.push(linksCollection[i].href)
    }
    
    return hrefsArray;
}

console.log(getAllHrefs());

var parFirst =document.getElementById('parFirst');

parFirst.className = 'nowa-klasa';

parFirst.classList.add('jeszcze-nowsza-klasa');

parFirst.classList.remove('jeszcze-nowsza-klasa');

parFirst.removeAttribute('class');

document.querySelector('header').style.backgroundColor='#f0f';