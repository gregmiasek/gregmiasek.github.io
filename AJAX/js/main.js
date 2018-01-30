'use strict'

//definicja funkcji AJAX

function ajax(method, url) { //tworzenie obiektu xml

    var httpReq = new XMLHttpRequest();

    //otwarcie polaczenia z serwerem prze httpReq

    httpReq.open(method, url);

    //status polacznia
    // 0: polaczenie nienawizane
    // 1: polaczenie nawiazane
    // 2: zadanie odebrane
    // 3: przetwarzane zadania
    // 4: dane zwroconei gotowe do uzycia

    httpReq.onreadystatechange = function() {
        //status polaczenia
        if (httpReq.readyState == 4) {

            //status serwera

            if (httpReq.status == 200) {
                //  responseText - dane z serwera w formie tekstowej

                var returnData = httpReq.responseText;

                httpReq.onsuccess(returnData);
                //zerowanie obiektu
                httpReq = null;
            }
        }
    }
    
    //obsluga danych przed wysylka na serwer
    
    httpReq.onerror = function (response) {
        alert('connection failed');
    }
    
    httpReq.onsuccess = function(response){
        
        var jsonObj= JSON.parse(response);
        console.log(jsonObj)
    }
    //wyslanie zadania do serwera

    httpReq.send();
}

ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');