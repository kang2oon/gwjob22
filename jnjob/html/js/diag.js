
$(document).ready(function () {
	// 직업선호도 진단
	$('.job_selct a').click(function () {
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	});
	
	//직업선호도 진단 서비스 팝업
	$('.job_type_area .exp .btn_wrap a').click(function () {
		$(this).toggleClass('active');
		$(this).text($(this).text() == '간단히 보기' ? "자세히 보기 + " : "간단히 보기");
		$(this).parent().parent().next().slideToggle(300);
	});
	
	// 탭메뉴
	// 탭 컨텐츠 숨기기
	$(".tab_content").hide();

	// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {
		$(this).children().children().children("li:first").addClass("active"); //Activate first tab
		$(this).children(".tab_content").first().show();
	});

	//탭메뉴 클릭 이벤트
	$(".tabs li a").click(function () {
		var tab_id = $(this).attr('data-tab');
		$(this).parent().siblings().removeClass("active");
		$(this).parent().addClass("active");
		$(this).parent().parent().parent().parent().find(".tab_content").hide();
		//        var activeTab = $(this).attr("rel");
		//        $("#" + activeTab).fadeIn();
		$("#" + tab_id).fadeIn();
	});

});

function openModal(modalname) {
	document.get
	$("." + modalname).show();
	$('body').addClass('not_scroll');
	$('.shadow').show();
}

function close_pop(flag) {
	$('.diag_pop').hide();
	$('body').removeClass('not_scroll');
	$('.shadow').hide();
};