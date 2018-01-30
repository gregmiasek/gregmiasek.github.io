$(document).ready(function () {
    click()
});


function wezDaneWklejNaStrone() {


    console.log('nie jeb krów')

    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
            console.log(data);

            $('body').append('<p>' + data.userId + '</p>'); $('body').append($('<p>').text(data.userName)); $('body').append($('<p>').text(data.userURL));

    })

}

function click() {
    $('#guzik').click(function () {
        wezDaneWklejNaStrone()
    });
}