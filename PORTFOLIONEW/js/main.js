'use strict'

$(document).ready();

var sections = document.getElementsByTagName('section');
console.log(sections);

for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', preview);
}

function preview() {

    for (var i = 0; i < sections.length; i++) {
        sections[i].removeEventListener('click', preview);
    }

    $(framer).remove();
    var ident = $('section').index(this);
    $('section').removeClass('appear');
    $('section').addClass('vanished');
    $('#larger').remove;
    $('body').append('<div class="preveiwer" id="larger"></div>');
    var framer = document.getElementById('larger');
    framer.innerHTML = sections[ident].innerHTML;
    $(framer).append('<div id="close">X</div>');

    $('#close').click(function () {
        $('section').removeClass('vanished');
        $('section').addClass('appear');
        $(framer).addClass('vanished');

        setTimeout(function () {
            $(framer).remove();
            for (var i = 0; i < sections.length; i++) {
                sections[i].addEventListener('click', preview);
            }
        }, 2000);


    });

}

