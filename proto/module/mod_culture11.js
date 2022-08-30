$('.mod_culture11 .culture_wrap .slide_wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: false,
    adaptiveHeight: false,
});

$('.mod_culture11 .welfare_wrap .slide_wrap').slick({
    rows: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                rows: 1,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});
