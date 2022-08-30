$('.mod_interview06 .interview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
});

$(".mod_interview06 .bg .q").click(function() {
    var $this = $(this);
    var $parent = $this.parent().siblings();
    $parent.find(".q").removeClass("active");
    $this.addClass("active");
});