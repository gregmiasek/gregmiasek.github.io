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
        //jsonObj.for (function (element,index) 
        
        for (var index in jsonObj) {
            
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');

            p1.innerHTML = jsonObj[index].id;
            p2.innerHTML = jsonObj[index].username;
            p3.innerHTML = jsonObj[index].website + '<br>';
            
            document.body.appendChild(p1);
            document.body.appendChild(p2);
            document.body.appendChild(p3);
            
        };
    }

    httpReq.send();
}

window.addEventListener('scroll', function () {
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight);
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        ajax('get', 'https://jsonplaceholder.typicode.com/users');
    }
})

//window.scroll = function () {
//    
//};