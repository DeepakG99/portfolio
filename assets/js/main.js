(function($) {
    "use strict";

    //Preloader
    $('#preloader').delay(350).fadeOut('slow');


    // WOW Init
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();

    // Portfolio Gallery
    $(window).on("load", function() {
        if ($('.isotope_items').length) {
            var $container = $('.isotope_items');
            $container.isotope();

            $('.portfolio-filter ul li').on("click", function() {
                $(".portfolio-filter ul li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".isotope_items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }

    }); // window load end 

    //Navbar Fixed
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 80) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });

    // Popup Video
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Popup Portfolio
    $('.isotope_items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });

    // testimonial
    $('.testimonial').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //Back to top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 700) {
            $('#backtotop').fadeIn(500);
        } else {
            $('#backtotop').fadeOut(500);
        }
    });

    $('#backtotop').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


})(jQuery);