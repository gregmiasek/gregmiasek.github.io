$(document).ready(function () {
    console.log("ready!");


    $('input').click(function () {
            $('div').animate({
                left: '100px',
                width: '100px',
                height: '100px'
            }, 3000);


            function tlo() {
                $('div').animate({
                   backgroundColor: 'blue'
                }, 5000)
            }


            setTimeout(tlo, 3000);

            function header() {
                $('div').html('<h2>ANIMACJA ZAKOŃCZONA</h2>');
            }

            setTimeout(header, 8000);

        }

    )

});