$(document).ready(function () {
    console.log("ready!");


    $('#count-sum').click(function () {
            var allSums = $('.salary');
            console.log(allSums);

            var kwoty = [];

            for (var i = 0; i < allSums.length; i++) {
                kwoty.push(parseInt(allSums[i].innerHTML));
            }

            console.log(kwoty);

            var suma = 0;
            for (var i = 0; i < kwoty.length; i++) {
                suma += kwoty[i] << 0;


            }

            console.log(suma);
            $('#sum').html(suma);
        }

    )

});