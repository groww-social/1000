$(document).ready(function() {
    $('.desktopslider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 5000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000 // Auto-swipe every second
    });
});

$(document).ready(function() {
    $('.servSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Auto-swipe every second
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.featslider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Auto-swipe every second
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
