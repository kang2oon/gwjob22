$('.mod_business_area02 .bizDiv_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: true,
    prevArrow: $('.mod_business_area02 .prev_arrow'),
    nextArrow: $('.mod_business_area02 .next_arrow'),
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