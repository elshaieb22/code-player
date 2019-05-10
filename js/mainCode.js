/* global $, document, alert */

$(document).ready(function () {

    var fullwindow_H, nav_H, off_H, codearea_H;
    fullwindow_H = $(window).height();
    nav_H = $('nav').height();
    off_H = fullwindow_H - nav_H;
    codearea_H = $('.code-container').height(off_H + 'px');

    $('#CSScode, #JScode').hide();

    $('#toggles .actions li').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('selected');

        var activeDiv = $(this).html();

        $('#' + activeDiv + 'code').toggle();

        var whatShowing = $('.code-container').filter(function () {
            return ($(this).css('display') !== 'none');
        }).length;

        var code_width = 100 / whatShowing;

        $('.code-container').width(code_width + '%');

    });

    $('.btn').click(function () {
        $('#display').contents().find('html').css('font-family', 'Montserrat')
            .html('<style>' + $('#css').val() + '</style>' + $('#html').val());
        $('#comment').hide();
    });

    $('textarea').on('change keyup', function () {
        $('#display').contents().find('html').css('font-family', 'Montserrat')
            .html('<style>' + $('#css').val() + '</style>' + $('#html').val());
        $('#comment').hide();
    });

});
