// jquery start 

// window scroler start
$(window).scroll(function () {
    var scrollValue = $(window).scrollTop();
    var navbar = $('#navbar');

    if (scrollValue < 150) {
        navbar.removeClass('bgColor');
    } else {
        navbar.addClass('bgColor');
    }
});
// window scroler end 

// slick slider start
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrow: true,
    speedautoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false

            }
        }
    ]
});
// slick slider end