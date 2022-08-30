$('.mod_culture07 .slide_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
    prevArrow: $('.mod_culture07 .prev_arrow'),
    nextArrow: $('.mod_culture07 .next_arrow'),
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
});