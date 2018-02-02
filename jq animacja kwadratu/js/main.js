$(document).ready(function () {
    console.log("ready!");


    $('input').click(function () {
        $('div').animate({
            left: '100px',
            width: '100px',
            height: '100px'
        }, 3000).promise().done(function () {
            $('div').animate({
                backgroundColor: 'blue'
            }, 5000).promise().done(function () {
                $('div').html('<h2>ANIMACJA ZAKOŃCZONA</h2>');
            })
        });
    })
});