/* global $ */


// gallery
$(function () {
    "use strict";
    $('.portfolio .gallery ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
});

$('.portfolio .gallery ul li').click(function () {
    var value = $(this).attr('data-filter');
    if (value ==='all')
    {
        $('.nine-mobile').fadeIn(500);
    }
    else {
        $('.nine-mobile').not('.' + value).hide();
        $('.nine-mobile').filter('.' + value).fadeIn(500);}
});


//link to section
    $('.navbar div a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
        }, 1000,(function () {
                if ($(document).width() <= 768) {
                    $('.navbar-collapse').removeClass("show");
                } 
        }));
    });




    
    // button  UP
    var ScrollUp = $('.scroll-up');
    $(window).scroll(function () {
        // will appear
        if ($(window).scrollTop() >= 600) {
            ScrollUp.fadeIn(500);
        }
        // disappear
        else{
            ScrollUp.fadeOut();}
    });
    // UP go to top
    $('.scroll-up').click(function () {
        $('html,body').animate({
            scrollTop : 0 
        }, 3000);
    });



    // counter (nummbers)
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  });


