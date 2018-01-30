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
        console.log(jsonObj);
        console.log('nie zasuwaj');

        document.getElementById('buy').innerText = jsonObj.PLN.buy;
        document.getElementById('sell').innerText = jsonObj.PLN.sell;


    };

    httpReq.send();
}


ajax('get', 'https://blockchain.info/pl/ticker')

setInterval(odswiez, 1500);

function odswiez() {
    ajax('get', 'https://blockchain.info/pl/ticker');
}