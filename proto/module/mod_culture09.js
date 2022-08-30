$('.mod_culture09 .slide_wrap').slick({
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
    prevArrow: $('.mod_culture09 .prev_arrow'),
    nextArrow: $('.mod_culture09 .next_arrow'),
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