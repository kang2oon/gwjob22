interview05 = $('.mod_interview05 .interview');
function interview05_slide(){
    interview05.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: false,
        adaptiveHeight: false,
    });
}
interview05_slide();

$(".mod_interview05 .tabs li a").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
    $(this).closest(".container").find(".tab_content").hide();
    $("#" + tab_id).fadeIn();
    interview05.slick('unslick');
    interview05_slide();
});