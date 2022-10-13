
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