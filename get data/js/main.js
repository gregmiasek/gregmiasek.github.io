'use strict'

function ajax(method, url) {

    var httpReq = new XMLHttpRequest();



    httpReq.open(method, url);


    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {

            if (httpReq.status == 200) {

                var returnData = httpReq.responseText;

                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }


    httpReq.onerror = function (response) {
        alert('connection failed');
    }

    httpReq.onsuccess = function (response) {

        var jsonObj = JSON.parse(response);
        console.log(jsonObj)

        var divek1 = document.createElement('p');
        var divek2 = document.createElement('p');
        var divek3 = document.createElement('p');

        document.body.appendChild(divek1);
        document.body.appendChild(divek2);
        document.body.appendChild(divek3);

        divek1.innerHTML = jsonObj.userId;
        divek2.innerHTML = jsonObj.userName;
        divek3.innerHTML = jsonObj.userURL;

    }

    httpReq.send();
}


document.getElementById('guzik').addEventListener('click', function () {
    ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');
});