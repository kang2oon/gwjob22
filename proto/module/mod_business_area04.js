$('.mod_business_area04 .bizDiv_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: true,
    prevArrow: $('.mod_business_area04 .prev_arrow'),
    nextArrow: $('.mod_business_area04 .next_arrow'),
    responsive: [
        
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
        breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});