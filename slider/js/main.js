'use strict'


var slideShow = $('.slide-show');
var slideCount = $('.single-slide').lenght;
var slideWidth = 100 / slideCount;
var slideIndex = 0;

slideShow.css('width', slideCount * 100 + '%');
slideShow.find('single-slide').each(function () {
    $(this).css({
        width: slideWidth + '%',
        marginLeft: (slideWith * index) + '%'

    })
});

$('.prev-slide').click(function () {
    slide(slideIndex - 1);
});

$('.next-slide').click(function () {
    slide(slideIndex + 1);
});

function slide(newSlideindex) {
    if (newSlideIndex < 0 || newSlideIndex > slideCount) {
        return;
    }

    var slideCaption = slideShow.find('.slide-caption').eq(newSlideindex);

    var marginLeft = (newSlideindex * (-100) + '%');

    slideCaption.hide();

    slideShow.animate({
        'margin-left': marginLeft,
    }, 800, function () {
        slideIndex = newsSlideIndex;
        slideCaption.fadeIn();
    });

}