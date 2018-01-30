var pusher = document.getElementById('guzik')
var dane = [];

pusher.addEventListener('click', function () {

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        console.log(data);


        var dive1 = document.createElement('div');
        var dive2 = document.createElement('div');
        var dive3 = document.createElement('div');
        var dive4 = document.createElement('div');
        var skrypt = document.getElementById('kuery');

        var ziuta = data;
        console.log('ziuta ' + ziuta);

        var name = document.createTextNode('Imię: ' + ziuta.imie);
        var surname = document.createTextNode('Nazwisko: ' + ziuta.nazwisko);
        var occupation = document.createTextNode('Zawód: ' + ziuta.zawod);
        var company = document.createTextNode('Firma: ' + ziuta.firma);


        dive1.appendChild(name);
        dive2.appendChild(surname);
        dive3.appendChild(occupation);
        dive4.appendChild(company);

        document.body.insertBefore(dive1, skrypt);
        document.body.insertBefore(dive2, skrypt);
        document.body.insertBefore(dive3, skrypt);
        document.body.insertBefore(dive4, skrypt);

    });


});