'use strict'

$(document).ready();


var sections = document.getElementsByTagName('section');
console.log(sections);




$(window).resize(function previewerPosition() {
    console.log(headerHeigth);
    var headerHeigth = $('header').height();

    $('.preveiwer').css('top', headerHeigth + 30 + 'px');
});


var links = $('nav>ul>li>a');

$('nav>ul>li>a').mouseenter(function (event) {
    $($(this).attr('href')).addClass('darker')
});

$('nav>ul>li>a').mouseleave(function (event) {
    $($(this).attr('href')).removeClass('darker');
});


$('section').addClass('appear');


$('nav>ul>li>a').click(function (event) {
    event.preventDefault();
});

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', previewLink);
}

function previewLink() {


    if ($('section').hasClass('appear')) {
        for (var i = 0; i < links.length; i++) {
            links[i].removeEventListener('click', previewLink);
        }


        $(framer).remove();
        var ident = $('a').index(this);
        console.log(ident);
        $('section').removeClass('appear');
        $('footer').removeClass('appear');
        $('section').addClass('vanished');
        $('footer').addClass('vanished');
        $('#larger').remove;
        $('body').append('<div class="preveiwer" id="larger"></div>');
        var headerHeigth = $('header').height();

        $('.preveiwer').css('top', headerHeigth + 30 + 'px');
        var framer = document.getElementById('larger');
        framer.innerHTML = sections[ident].innerHTML;
        $('html,body').animate({
            scrollTop: headerHeigth - 100
        }, 3000);
        $(framer).append('<i id="close" class="fas fa-times"></i>');

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', previewLink);
        }

        $('#close').click(function () {
            $('section').removeClass('vanished');
            $('footer').removeClass('vanished');
            $('section').addClass('appear');
            $('footer').addClass('appear');
            $(framer).addClass('vanished');

            for (var i = 0; i < links.length; i++) {
                links[i].removeEventListener('click', previewLink);
            }

            setTimeout(function () {
                $(framer).remove();

                for (var i = 0; i < links.length; i++) {
                    links[i].addEventListener('click', previewLink);
                }
            }, 2000);
        });
    } else {
        var framer = document.getElementById('larger');
        var ident = $('a').index(this);
        $(framer).removeClass('appear');
        $(framer).removeClass('visible');
        $(framer).addClass('transparent');


        setTimeout(function () {
            framer.innerHTML = sections[ident].innerHTML;
            $(framer).removeClass('transparent');
            $(framer).append('<i id="close" class="fas fa-times"></i>');
            $(framer).addClass('visible');

            $('#close').click(function () {
                $('section').removeClass('vanished');
                $('footer').removeClass('vanished');
                $('section').addClass('appear');
                $('footer').addClass('appear');
                $(framer).removeClass('appear');
                $(framer).addClass('vanished');
           
                for (var i = 0; i < links.length; i++) {
                    links[i].removeEventListener('click', previewLink);
                }

                setTimeout(function () {
                    $(framer).remove();
                    for (var i = 0; i < sections.length; i++) {
                        sections[i].addEventListener('click', preview);
                    }

                    for (var i = 0; i < links.length; i++) {
                        links[i].addEventListener('click', previewLink);
                    }
                }, 2000);
            });
        }, 2000);
    }
}


for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', preview);
}

function preview() {

    for (var i = 0; i < sections.length; i++) {
        sections[i].removeEventListener('click', preview);
    }

    $(framer).remove();
    var ident = $('section').index(this);
    console.log(ident);
    $('section').removeClass('appear');
    $('footer').removeClass('appear');
    $('section').addClass('vanished');
    $('footer').addClass('vanished');
    $('#larger').remove;
    $('body').append('<div class="preveiwer" id="larger"></div>');
    var headerHeigth = $('header').height();

    $('.preveiwer').css('top', headerHeigth + 30 + 'px');
    var framer = document.getElementById('larger');
    framer.innerHTML = sections[ident].innerHTML;
    $('html,body').animate({
        scrollTop: headerHeigth - 100
    }, 3000);

    $(framer).append('<i id="close" class="fas fa-times"></i>');

    $('#close').click(function () {
        $('section').removeClass('vanished');
        $('footer').removeClass('vanished');
        $('section').addClass('appear');
        $('footer').addClass('appear');
        $(framer).addClass('vanished');

        for (var i = 0; i < links.length; i++) {
            links[i].removeEventListener('click', previewLink);
        }

        setTimeout(function () {
            $(framer).remove();
            for (var i = 0; i < sections.length; i++) {
                sections[i].addEventListener('click', preview);
            }

            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener('click', previewLink);
            }
        }, 2000);


    });

}