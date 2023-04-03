$(document).ready(function () {
    'use strict';

    // CODE START

    $('header nav .menuResIcon .fa-bars').click(function () {
        $(this).hide();
        $('.mobileMenu').fadeIn();
        $('header nav .menuResIcon .fa-times').fadeIn();
    });

    $('header nav .menuResIcon .fa-times').click(function (){
        $(this).hide();
        $('.mobileMenu').fadeOut();
        $('header nav .menuResIcon .fa-bars').fadeIn();
    });

    $(window).resize(function () {
        let scrSize = $(window).width();
        if ( scrSize > 768 ) {
            $('header nav .menu').removeAttr('style');
        }
    })

    //   owl carousel

        $('.owl-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            navText:['<span><i class="far fa-arrow-alt-circle-right"></i></span>' , '<span><i class="far fa-arrow-alt-circle-left"></i></span>'],
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                900:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })

        // WOW JS
        var wow = new WOW(
            {
              boxClass:     'wow',      // animated element css class (default is wow)
              animateClass: 'animate__animated', // animation css class (default is animated)
              offset:       0,          // distance to the element when triggering the animation (default is 0)
              mobile:       true,       // trigger animations on mobile devices (default is true)
              live:         true,       // act on asynchronously loaded content (default is true)
              callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
              },
              scrollContainer: null,    // optional scroll container selector, otherwise use window,
              resetAnimation: true,     // reset animation on end (default is true)
            }
          );
          wow.init();

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });   
        

    // Arrow button
    $(window).scroll(function() {
        let scrlTop = $(window).scrollTop();
        if (scrlTop > 100) {
            $('.footerFixBtn a i').fadeIn()
        }
        else{
            $('.footerFixBtn a i').fadeOut()
        }
    })


});