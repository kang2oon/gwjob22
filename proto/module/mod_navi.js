$(".com_navi").simpleMenu({
    stickyMenu: true,
    slidingLine: true,
    slidingLineColor: 'transparent',
    pageNavigationSpeedAnimate: 500,
    winMobWidth: 0,
});

var navOffset = $(".com_navi_header").offset().top;
$(window).scroll(function () {
  if ($(document).scrollTop() > navOffset) {
    $(".com_navi_header").addClass("fixed");
  } else {
    $(".com_navi_header").removeClass("fixed");
  }
});