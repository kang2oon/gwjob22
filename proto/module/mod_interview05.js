$('.mod_interview05 .interview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: false,
    adaptiveHeight: false,
});

$(".mod_interview05 .tabs li a").click(function() {
    var tab_id = $(this).attr("data-tab");
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
    $(this).closest(".container").find(".tab_content").hide();
    $("#" + tab_id).fadeIn();
});