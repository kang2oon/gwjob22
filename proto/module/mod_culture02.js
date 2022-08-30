$('.mod_culture02 .slide_wrap').slick({
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
    prevArrow: $('.mod_culture02 .prev_arrow'),
    nextArrow: $('.mod_culture02 .next_arrow'),
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
            }
        },
        {
            breakpoint: 640,
            settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
    ]
});