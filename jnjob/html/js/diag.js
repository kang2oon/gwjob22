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
$(document).ready(function () {
// 직업선호도 진단
	$('.job_selct a').click(function () {
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	});
});