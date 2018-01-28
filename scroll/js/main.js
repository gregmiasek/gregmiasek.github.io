'use strict'



$(document).ready(function () {
            showBackground(); 
});

$(window).scroll(function () {
            showBackground() ;
});


        function showBackground() {

            var wys = $('nav').outerHeight();
            var actPos = $(window).scrollTop();

            if (actPos >= wys) {
                $('nav').addClass('backsee');
            } else {
                $('nav').removeClass('backsee');
            }
        }