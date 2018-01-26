'use strict';

var newParagraph = document.createElement('p');
console.log(newParagraph);

var paragraphText = document.createTextNode('Kotki i pieski niemają domu.')
console.log(paragraphText);

newParagraph.appendChild(paragraphText);
console.log(newParagraph);

newParagraph.setAttribute('class','akapicio');
console.log(newParagraph);

parSecond.parentElement.insertBefore(newParagraph,parSecond);

document.getElementById('sectionFirst').removeChild(document.querySelector('header'));

var parFirst=document.getElementById('parFirst');

parFirst.innerHTML="<h1>Nagłówek</h1>";
parFirst.innerText="<h1>Nagłówek</h1>";

parFirst.outerHTML="<h1>Nagłówek</h1>"; 





