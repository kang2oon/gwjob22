var navOffset = $(".com_navi").offset();
$(window).scroll(function () {
    if ($(document).scrollTop() > 30) {
    $(".com_navi, .com_navi_header").addClass("fixed");
    } else {
    $(".com_navi, .com_navi_header").removeClass("fixed");
    }
});

$("ul.navi > li").click(function () {
    var items = $(this).attr("data-tab");
    $("ul.navi > li").removeClass("active");
    $(this).addClass("active");
    if ($(".com_navi, .com_navi_header").hasClass("fixed")) {
    $("html, body").animate(
        { scrollTop: $("#" + items + "").offset().top - 171 },
        "500"
    );
    } else {
    $("html, body").animate(
        { scrollTop: $("#" + items + "").offset().top - 422 },
        "500"
    );
    }
});