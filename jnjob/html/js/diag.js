
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
	
	//직업역량진단 더보기
	$('.jc_list .more_btn').click(function () {
		$(this).parent().toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var moveinnerr = $(".jt_inner .more");
		if (moveinnerr.has(e.target).length === 0) {
			moveinnerr.removeClass("active");
		}
	});
	
	//진단 결과 더보기
	$('.bar_area .txt a').click(function () {
		$(this).parent().parent().toggleClass('active');
		$(this).parent().parent().siblings('.bar_area').removeClass('active')
	});


	//직업역량진단 진단결과 차트 
	$('.ja_chart  .lg_blue').click(function () {
		$('.bar-blue').removeClass('off')
		$('.bar-pink').addClass('off');
	});

	$('.ja_chart  .lg_pink').click(function () {
		$('.bar-blue').addClass('off');
		$('.bar-pink').removeClass('off');
	});

	$(document).mouseup(function (e) {
		var movewrap04 = $(".ja_chart");
		var moveinner04 = $(".ja_chart .bars .bar > div");
		if (movewrap04.has(e.target).length === 0) {
			moveinner04.removeClass("off");
		}
	});
	
	//취업준비도 진단 차트 
	$('.jr_table_wrap .spink').click(function () {
		$('.bar-gray').addClass('off')
		$('.bar-pink').removeClass('off');
	});

	$('.jr_table_wrap .sgray').click(function () {
		$('.bar-gray').removeClass('off');
		$('.bar-pink').addClass('off');
	});
	
		$(document).mouseup(function (e) {
		var movewrap05 = $(".jr_table_wrap");
		var moveinner05 = $(".jr_table_wrap .bar > div");
		if (movewrap05.has(e.target).length === 0) {
			moveinner05.removeClass("off");
		}
		});
	
	// 취업가능성진단 check 선택
	$('.emab_select .item').click(function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	// 취업가능성진단 희망직접선택
	$('.es_emab_hope .btn_style07').click(function () {
		var text = '전체닫기 -';
		var $this = $('#activate');
		if ($this.text() === text) {
			$(this).text('전체펼침 +');
			$(this).parent().parent().parent().find('.eh_text').slideUp();
			$('.emab_select .cont').removeClass('active');
		} else {
			$(this).text(text)
			$(this).parent().parent().parent().find('.eh_text').slideDown();
			$('.emab_select .cont').addClass('active');
		}
	});
	
	$('.es_emab_hope .tit').click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	
	/*취업가능성진단 결과보기 차트 */
	$('.oj_table_wrap .spink').click(function () {
		$('.bar-gray').addClass('off')
		$('.bar-pink').removeClass('off');
	});

	$('.oj_table_wrap .sgray').click(function () {
		$('.bar-gray').removeClass('off');
		$('.bar-pink').addClass('off');
	});
	
	$(document).mouseup(function (e) {
		var movewrap = $(".oj_table_wrap");
		var moveinner = $(".oj_table_wrap .bar > div");
		if (movewrap.has(e.target).length === 0) {
			moveinner.removeClass("off");
		}
	});
	
	// 탭메뉴
	// 탭 컨텐츠 숨기기
	$(".tab_content").hide();

	// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {$(this).children().children("li:first").addClass("active"); //Activate first tab
		$(this).children(".tab_content").first().show();
	});

	//탭메뉴 클릭 이벤트
	$(".rs_tabs li a").click(function () {
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