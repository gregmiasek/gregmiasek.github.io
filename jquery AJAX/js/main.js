//podpinanie zdzarzenia 'ready' do obiektu
//$ przywołuje zasoby jquery
//$ = jQuery
//jQuery(document)
//
$(document).ready(function () {
    changeColorShowHide();
    changeLinkColor();
    getText();
    setText();
    getHtml();
    setHtml();
    addContentEndTag();
    addContentFrontTag();
    addElementAfterFirst();
    addElementBeforeFirst();
    usunLink();
    delContentFromParagraph();
    linkFont();
    getValue();
    putValue();
    changeLinkColorInBox();
    boxClick();
    fewEvents();
    zniknijPokaz();


});

//zdarzenie scroll dla okna

$(window).scroll(function () {

});


//funkcja zmienia kolor tla, ukrywa i pokazuje element za pomoca metod .show() i .hide()

function changeColorShowHide() {
    $('#first').css('background-color', 'red').hide(3000).show('slow');
}

function changeLinkColor() {
    $('.list-item:first-of-type a').css('text-decoration', 'none');
}

function getText() {
    console.log($('#first h1').text());
}

function setText() {
    console.log($('#first h1').text('lorem'));
}
//pobiera wartość selectora
function getHtml() {
    console.log($('#first').html());
}

function setHtml() {
    $('#first').html('<span>lorem</span>');
}

//manipulowanie dom -dodawanie tresci

function addContentEndTag() {
    $('.green').append(' Kotki i pieski');

}

function addContentFrontTag() {
    $('.green').prepend('<span>Span ci w odbyt.<br></span>');
}

//after doklada tresc za wybranym selektorem
function addElementAfterFirst() {
    $('#first').after('<div id="third"><h2>metoda after</h2></div>');
}
//before doklada tresc przed wybranym selektorem

function addElementBeforeFirst() {
    $('#first').before('<div id="fourth"><h2>metoda before</h2></div>');
}

function usunLink() {
    $('.list-item:last-child() a').remove();
}

function delContentFromParagraph() {
    $('.green:first-of-type').empty();
}

//metoda css() z kilkoma właśiciwościami:
//css.{
//wlasciwosc: 'wartosc';
//wlasciwosc: 'wartosc''

function linkFont() {
    $('#main-nav .list-item a').css({
        fontSize: '24px',
        color: 'pink'
    });
}

function getValue() {
    console.log($('#formularz form input:first-child').val());
}

function putValue() {
    console.log($('#formularz form input').val('45667'));
}


function changeLinkColorInBox() {
    var parent = $('.box');
    parent.each(function () {
        $(this).find('a').css('color', '#fff');
    });
}


function boxClick() {
    var parent = $('.box');
    parent.each(function () {
        $(this).click(function () {
            $(this).css('background-color', 'red')
        })
    });
}

function fewEvents() {
    var parent = $('.list-item');
    parent.each(function () {
        $(this).on({
            'mouseenter': function () {
                $(this).find('a').css('color', 'yellow');
            },
            'mouseout': function () {
                $(this).find('a').css('color', 'pink');
            }

        });

    });


}

function zniknijPokaz(){
    $('#each').fadeOut(2000).fadeIn(2000);
    $('#each').slideUp(2000).slidedown(2000);
    
}