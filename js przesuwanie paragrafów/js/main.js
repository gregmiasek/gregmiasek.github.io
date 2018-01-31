$(document).ready(function () {

    var up = document.querySelector('#btn-start');
    var down = document.querySelector('#btn-end');
    var body = document.querySelector('body');

    up.addEventListener('click', function () {

        var pLastText = document.querySelector('p:last-of-type').innerHTML;
        var pnew = document.createElement('p');
        var node = document.createTextNode(pLastText);
        pnew.appendChild(node);

        console.log(pnew);

        document.querySelector('p:last-of-type').remove();

        body.insertBefore(pnew, document.querySelector('p'));




    });

    down.addEventListener('click', function () {

        var par1 = document.querySelector('p').innerHTML;

        var pnew = document.createElement('p');
        var node = document.createTextNode(par1)
        console.log(node);
        pnew.appendChild(node);
        console.log(pnew);

        body.insertBefore(pnew, document.getElementById('btn-end'));

        document.querySelector('p').remove();

    });

});