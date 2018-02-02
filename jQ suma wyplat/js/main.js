$(document).ready(function () {
    console.log("ready!");


    $('#count-sum').click(function () {
        var allSums = $('.salary');
        console.log(allSums);

        var suma = 0;

        for (var i = 0; i < allSums.length; i++) {
            suma += (parseInt(allSums[i].innerHTML));
        }

        console.log(suma);
        $('#sum').html(suma);
    })
});