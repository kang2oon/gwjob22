$('.mod_business_area01 .bizDiv_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
    prevArrow: $('.mod_business_area01 .prev_arrow'),
    nextArrow: $('.mod_business_area01 .next_arrow'),
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