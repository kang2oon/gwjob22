	$(document).mouseup(function (e) {
		var movewrapp = $(".ja_diag .jt_inner");
		var moveinnerr = $(".ja_diag .more_btn");
		if (moveinnerr.has(e.target).length === 0) {
			movewrapp.removeClass("active");
		}
	});
	

$(document).ready(function () {
	
	//직업역량진단 더보기
	$('.ja_diag .more_btn').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().parent().parent().parent().parent().siblings().find('.more').removeClass('active')
	});
	

	$(".imgFill").imgLiquid();

	/*footer 유관사이트*/
	$('.fm_site').click(function () {
		$(this).toggleClass('on');
	});

	/*서비스 한줄평 롤링*/
	$('.list_wrap').slick({
		slide: 'div',
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		vertical: true,
		slidesToShow : 5,		// 한 화면에 보여질 컨텐츠 개수
	});

	// 자소서 직무별 필터
	$('.filter_wrap li').on('click', function () {
		$(this).toggleClass('on');
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

	// 자소서 직무 선택
	$('.job_select div .bar_list li a').click(function () {
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active')

	});



	// 페이지 nav
	$('.page_nav a').click(function () {
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');

	});

	$('.page_nav li:first-child a').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);

	});


	// 스크롤 배너
	var currentPosition = parseInt($(".nav_view").css("top"));
	var height = $(".nav_view").height();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 520) {
			var position = $(window).scrollTop();
			$(".nav_view").stop().animate({
				"top": position - height + "px"
			}, 300);
		} else {
			var position = $(window).scrollTop();
			$(".nav_view").stop().animate({
				"top": position + "px"
			}, 300);

		}


	});

	// target 위치 표시와, 이동 
	var sections = $('.target'),
		section_height = sections.height(),
		nav = $('.nav_view'),
		nav_height = nav.outerHeight();
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').parent().removeClass('active');
				sections.removeClass('active');
				$(this).parent().addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
			}
		});
	});


	$('.btnAdd').on('click', function () {
		$('.text_filed').append('<div class="text_filed_area"><div class="post_write_table pw_item_two mt_30"><table><caption>자기소개서 작성</caption><colgroup><col style="width: 10%"><col /></colgroup><tbody><tr><th scope="row" class="pw_tit"><label for="self_tit">항목(제목)</label></th><td class="pw_txt"><input type="text" placeholder="제목을 입력해주세요." id="self_tit" name="self_tit" class="w100" /></td></tr></tbody></table></div>   <div class="txt_area"><textarea class="textarea" placeholder="내용이 들어갑니다."></textarea></div></div>')
	});




	// 별점 select
	$(".score_select .selected_option a").click(function () {
		//$(".drop-down .options ul").toggle();
		var $options = $(this).parent().siblings('.options');
		$options.toggle();
		$options.addClass('show');
		$(this).parent().toggleClass('show');
	});

	//옵션 선택 및 선택 후 옵션 숨기기
	$(".score_select .options li").click(function () {
		var $options = $(this).parent().siblings('.options')
		var text = $(this).html();
		//$(".drop-down .selected a span").html(text);
		//$(".drop-down .options ul").hide();

		var $selected = $(this).closest('.options').siblings('.selected_option');
		$selected.find('a').html(text);
		$options.removeClass('show');
		$(this).parent().parent().find('.selected_option').removeClass('show');

		$(this).closest('ul').hide();
	});


	//페이지의 다른 위치를 클릭하면 옵션 숨기기
	$(document).bind('click', function (e) {
		var $options = $(this).parent().siblings('.options');
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("score_select")) {
			$(".score_select .options").hide();
			$options.removeClass('show');
			$('.score_select .selected_option').removeClass('show');

		}
	});

	$('.popup_area').each(function () {
		if ($(".popup_area").css("display") == "block") {
			$(this).children('.shadow').show();
			$('body').addClass('not_scroll');
		} else {
			$(this).children('.shadow').hide();
			$('body').removeClass('not_scroll');
		}
	});

		// a href='#' 클릭 무시 스크립트
		$('a[href="#"]').click(function (ignore) {
			ignore.preventDefault();
		});




		
		if (window.innerWidth > 1260) {
			// 온라인 참여기업 if문 추가
		$('.online_slider').each(function () {
			if ($(this).find('li').length < 9) {
				$(this).parent().find('.slider_scrollbar').hide();
			} else {
				$(this).parent().find('.slider_scrollbar').show();
			}
		});
		} else {
			$('.online_slider').find('.slider_scrollbar').show();
		}


	
	
	$(".online_slider .logo").imgLiquid({
		fill: false,
		horizontalAlign: "center",
		verticalAlign: "50%"
	});
	
	// 온라인 참여기업  슬라이드
	var $slider = $('.online_slider');
	var $progressBar = $('.progress');
	var $progressBarLabel = $('.slider__label');

	$slider.on("init", function () {
		setTimeout(function () {
			$slider.slick("slickGoTo", 0, true);
		}, 0);
	});
	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var calc = ((nextSlide + 1) / (slick.slideCount)) * 100;
		$progressBarLabel
			.css('width', calc + '%')
			.attr('aria-valuenow', calc);

		$progressBarLabel.text(calc + '% completed');
	});

	$slider.slick({
		infinite: true,
		rows: 2,
		slidesPerRow: 4,
		arrows: true,
		infinite: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					rows: 2,
					slidesPerRow: 3
				}
        },
			{
				breakpoint: 768,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
        },
			{
				breakpoint: 480,
				settings: {
					rows: 2,
					slidesPerRow: 2
				}
        },

  ]
	});


	// 달력
	$(".datepicker-wrap input").datepicker({
		dateFormat: 'yy-mm-dd' //달력 날짜 형태
			,
			showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
			,
			showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
				,
		changeYear: true //option값 년 선택 가능
			,
			changeMonth: true //option값  월 선택 가능                
			,
			showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
			,
			buttonImage: "https://gwjob.kgoon.pw/html/images/sub/calendar_ico.png" //버튼 이미지 경로//버튼 이미지 경로
			,
			buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
				,
				buttonText: "선택" //버튼 호버 텍스트              
				,
			yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
				,
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
			,
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
				,
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
				,
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
				,
			minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
				,
			maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
	});


	// 자격증 입력
	$('.certi_add').on('click', function () {
		$(this).parent().parent().parent().parent('.pw_txt').append('<div class="certi_wrap"><div><input type="text" value="자격증 명칭을 입력하세요." id="certificate" class="tit"><select><option>자격증 발행기관</option> </select></div><div><div class="datepicker-wrap"><input type="text"  placeholder="입력"></div><div class="btn_wrap"><input type="button" value="- 자격증 삭제" class="btn_line btn_pink_line02 btn certi_rmv"></div></div></div>');

		// 달력
		$(".datepicker-wrap input").datepicker({
			dateFormat: 'yy-mm-dd' //달력 날짜 형태
				,
			showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
				,
			showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
				,
			changeYear: true //option값 년 선택 가능
				,
			changeMonth: true //option값  월 선택 가능                
				,
			showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
				,
			buttonImage: "./images/sub/calendar_ico.png" //버튼 이미지 경로
				,
			buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
				,
			buttonText: "선택" //버튼 호버 텍스트              
				,
			yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
				,
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
				,
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
				,
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
				,
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
				,
			minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
				,
			maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
		});
		$('.certi_rmv').on('click', function () {
			$(this).parent().parent().parent().remove();
		})
	});

	//파일 업로드
	var fileTarget = $('.filebox .upload-hidden');

	fileTarget.on('change', function () {
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}

		$(this).siblings('.upload-name').val(filename);
	});
	$(".file_reset").click(function () {
		$(this).parent().find('.upload-name').val('');
	});


	var wrapper = $(".input_fields_wrap"); //Fields wrapper
	var add_button = $(".add_field_button"); //Add button ID
	var x = 1; //initlal text box count
	$('.file_wrap_inbtn .add_field_button').click(function (e) {
		e.preventDefault();
		x++;
		$('.file_wrap_inbtn').parent().append('<div class="file_wrap_inbtn"><div class="file_wrap mt_10"><div class="filebox"><div class="btn_wrap"><label for="filenew' + x + '" class="btn_line btn_pink_line02 file_btn">파일 찾아보기</label></div><input type="file" id="filenew' + x + '" class="upload-hidden"><input class="upload-name" disabled="disabled"><a href="#" class="file_reset">파일 지우기</a></div></div><div class="btn_wrap"><a href="javascript:void(0)" class="btn_line btn_pink_line02 remove_field_button">- 삭제</a></div></div>');


		var fileTarget = $('.filebox .upload-hidden');

		fileTarget.on('change', function () {
			if (window.FileReader) {
				var filename = $(this)[0].files[0].name;
			} else {
				var filename = $(this).val().split('/').pop().split('\\').pop();
			}

			$(this).siblings('.upload-name').val(filename);
		});

		$('.remove_field_button').on('click', function (e) {
			$(this).parent().parent().remove();

		});
	});

	//프린트 -> 취업활동증명서 출력
	$('#prt_btn').on("click", function () {
		$('#print-layer').printThis({
			importCSS: true,
			base: "https://gwjob.kgoon.pw/html/%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%B1%84%EC%9A%A9%EB%B0%95%EB%9E%8C%ED%9A%8C_main_%ED%8C%9D%EC%97%85.html", //출력안되면 주소변경,
			importStyle: true,
			printContainer: true,
			debug: false
		});
	});

	//프린트 -> 취업활동증명서 출력
	$('#prt_btn2').on("click", function () {
		$('#print-layer').printThis({
			importCSS: true,
			base: "https://gwjob.kgoon.pw/html/%EC%9D%B4%EB%9F%AC%EB%8B%9D%ED%95%99%EC%8A%B5_%EB%82%98%EC%9D%98%EC%A7%84%EB%8F%84%EC%9C%A8_%EC%88%98%EB%A3%8C%EC%A6%9D%ED%8C%9D%EC%97%85.html", //출력안되면 주소변경,
			importStyle: true,
			printContainer: true,
			debug: false
		});
	});



	//온라인채용박람회>입사지원현황
	$('.mng_result_list li a').click(function () {
		$(this).parent().addClass('active')
		$(this).parent().siblings().removeClass('active');
	});


	// 파일찾아보기 2
	$('.form-group input[type="file"]').each(function () {
		// get label text
		var label = $(this).parents('.form-group').find('label').text();
		label = (label) ? label : 'Upload File';

		// wrap the file input
		$(this).wrap('<div class="input-file"></div>');
		// display label
		$(this).before('<span class="btn">' + label + '</span>');
		// we will display selected file here
		$(this).before('<span class="file-selected"></span>');

		// file input change listener 
		$(this).change(function (e) {
			// Get this file input value
			var val = $(this).val();

			// Let's only show filename.
			// By default file input value is a fullpath, something like 
			// C:\fakepath\Nuriootpa1.jpg depending on your browser.
			var filename = val.replace(/^.*[\\\/]/, '');

			// Display the filename
			$(this).siblings('.file-selected').text(filename);
		});
	});

	// Open the file browser when our custom button is clicked.
	$('.input-file .btn').click(function () {
		$(this).siblings('input[type="file"]').trigger('click');
	});

	// 사전질문 추가
	$('.qusetion_tit .q_add').on('click', function () {
		$('.qusetion_wrap').children('.qusetion_cont').children().append('<li><input type="text" placeholder="사전질문을 입력해주세요." class="w100 br_none"></li>')
	});

	// 사전질문 삭제
	$('.qusetion_tit .q_remove').on('click', function () {
		$(this).parent().parent().parent().parent().find('.qusetion_cont').find('ul li:last-child').remove();
	});


	// 사전진단 그렇다 아니오 선택시 이벤트
	$('.diag_list_area .btn_radio input:checked').each(function () {
		$(this).parent().parent().parent().parent().children('.txt').children().addClass('highLight');
	});

	$('.diag_list_area .btn_radio input').change(function () {
		$(this).parent().parent().parent().parent().children('.txt').children().addClass('highLight');
	})

	// 직업선호도 진단
	$('.job_selct_wrap  a').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active');
	});


	//직업선호도 진단 서비스 팝업
	$('.job_type_area .exp .btn').click(function () {
		$(this).toggleClass('on');
		$(this).text($(this).text() == '간단히 보기 -' ? "자세히 보기 + " : "간단히 보기 -");
		$(this).parent().parent().next().slideToggle(200);
	});


	//진단 결과 더보기
	$('.bar_area .more_btn').click(function () {
		$(this).parent().toggleClass('active');
		$(this).parent().parent().siblings().find('.more').removeClass('active')
	});
	$(document).mouseup(function (e) {
		var movewrap03 = $(".bar_area .more");
		var moveinner03 = $(".bar_area .more_btn");
		if (moveinner03.has(e.target).length === 0) {
			movewrap03.removeClass("active");
		}
	});


	//진단결과 차트 
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



	// 희망직업선택 아코디언
	$('.emab_hope_cont .eh_tit').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass('active')
	});
	$('.emab_hope_wrap .btn_wrap a').click(function () {
		var text = '- 전체닫기';
		var $this = $('#activate');
		if ($this.text() === text) {
			$(this).text('+ 전체펼침');
			$(this).parent().parent().parent().find('.eh_text').slideUp();
			$(this).parent().parent().next().children().find('.eh_tit').removeClass('active')
		} else {
			$(this).text(text)
			$(this).parent().parent().parent().find('.eh_text').slideDown();
			$(this).parent().parent().next().children().find('.eh_tit').addClass('active')
		}


	});

	//진단결과 차트 
	$('.oj_table_wrap .sblue01').click(function () {
		$('.bar-blue02').addClass('off')
		$('.bar-blue01').removeClass('off');
	});

	$('.oj_table_wrap .sblue02').click(function () {
		$('.bar-blue02').removeClass('off')
		$('.bar-blue01').addClass('off');
	});

	//진단결과 차트 
	$('.jr_table_wrap .sblue01').click(function () {
		$('.bar-blue02').addClass('off')
		$('.bar-blue01').removeClass('off');
	});

	$('.jr_table_wrap .sblue02').click(function () {
		$('.bar-blue02').removeClass('off')
		$('.bar-blue01').addClass('off');
	});


	$(document).mouseup(function (e) {
		var movewrap05 = $(".jr_table_wrap");
		var moveinner05 = $(".jr_table_wrap .bar > div");
		if (movewrap05.has(e.target).length === 0) {
			moveinner05.removeClass("off");
		}
	});



	$(document).mouseup(function (e) {
		var movewrap = $(".oj_table_wrap");
		var moveinner = $(".oj_table_wrap .bar > div");
		if (movewrap.has(e.target).length === 0) {
			moveinner.removeClass("off");
		}
	});

	$(document).mouseup(function (e) {
		var movewrap02 = $(".ja_diag");
		var moveinner02 = $(".jt_inner .more");
		if (movewrap02.has(e.target).length === 0) {
			moveinner02.removeClass("active");
		}
	});

	$('.di_type02 .tit_02 .more_text').click(function () {});


	$(".popup.fixed").each(function () {
		$(this).addClass('menu_rh');
	});

	// 스크롤
	$(window).scroll(function () {
		if ($(window).scrollTop() < 100) {
			var position = $(window).scrollTop();
			$(".popup.fixed").addClass('menu_rh');
		} else {
			var position = $(window).scrollTop();
			$(".popup.fixed").removeClass('menu_rh');


		}


	});


	$('.tab_slider li button').click(function () {
		$(this).toggleClass('active');
	});



	// 온라인 교육 슬라이드
	$('.en_slider02').slick({
		slide: 'div',
		infinite: true,
		arrows: false,
		rows: 2,
		centerPadding: '60px',
		slidesPerRow: 4,
		pauseOnHover: true,
		dots: true,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1400, //화면 사이즈 960px
				settings: {
					slidesPerRow: 3,
				}
                    },
			{
				breakpoint: 640, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesPerRow: 2,
				}
                    },
			{
				breakpoint: 480, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesPerRow: 1,
				}
                    }

                ]
	});

	$('.en_slider03').slick({
		slide: 'div',
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll : 4,
		pauseOnHover: true,
		dots: false,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1400, //화면 사이즈 960px
				settings: {
					slidesToShow: 3,
					slidesToScroll : 3
				}
                    },
			{
				breakpoint: 641, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2,
					slidesToScroll : 2
				}
                    },
			{
				breakpoint: 480, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1,
					slidesToScroll :1
				}
                    }

                ]
	});


//	$('.like').click(function () {
//		$(this).toggleClass('active');
//	});
//
//	$('.en_like').click(function () {
//		$(this).toggleClass('active');
//	});

	$('.view-menus li a').click(function (e) {
		e.preventDefault(); //a태그이기때문에 버벅거림?빼기
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 53
		}, 500); //부드럽게 스크롤 이동하는부분 - 53부분은 고정 header이기때문에 추가됨, 고정 header가 아닌 경우 삭제
	});


	// 프로세스바
	(function () {
		var doms = '';
		var $m = $('.es_progress');
		var $data = $m.find('.value span');
		var data = $m.data('percent');
		var com = Math.round(data / 100 * 360);
		var dur = 1000;

		var getVendorPrefix = function () {
			var body = document.body || document.documentElement,
				style = body.style,
				transition = "Transition",
				vendor = ["Moz", "Webkit", "ms"],
				lastGage,
				i = 0;
			while (i < vendor.length) {
				if (typeof style[vendor[i] + transition] === "string") {
					return vendor[i];
				}
				i++;
			}
			return false;
		};
		var prefix = getVendorPrefix();
		var transform = prefix + 'Transform';

		for (var i = 0; i <= com; i++) {
			doms = '<div class="gage-bar"></div>';
			$m.append(doms);
			$('.gage-bar:last').css(transform, 'rotate(' + i + 'deg)');
		}

		//$m.append(doms);

		$m.find('div').each(function (index, item) {
			$(item).stop().delay(index * 5).fadeIn(50);
		});

		for (var j = 0; j <= data; j++) {
			(function (index) {
				var time = (360 / 100 * index) * 5;
				setTimeout(function () {
					$data.text(index + '%');
				}, time);
			})(j);
		}
	})();


	// 사전질문 추가
	$('.qusetion_cont02_wrap .q_add').on('click', function () {
		$('.qusetion_cont02_wrap').children('.qusetion_cont02').children().append('<li><input type="text" placeholder="사전질문을 입력해주세요." class="w100 br_none"></li>')
	});

	// 사전질문 삭제
	$('.qusetion_cont02_wrap .q_remove').on('click', function () {
		$(this).parent().parent().parent().find('.qusetion_cont02').find('ul li:last-child').remove();
	});


	// 이러닝학습 하단 스크롤


	// 스크롤 높이
	$(".ern_view_wrap").each(function () {

		var $minHeight = 2500;
		//you need the height of the div you are currently iterating on: use this
		if ($(this).height() > $minHeight) {
			//find the img in this div and hide it
			$(window).scroll(function () {
				if ($(window).scrollTop() > 100) {
					var position = $(window).scrollTop();
					$(".enrolment").addClass('active');
				} else {
					var position = $(window).scrollTop();
					$(".enrolment").removeClass('active');
				}
			});
		}

	});

	$('.local_tag a').click(function () {
		$(this).toggleClass('active')
	});
	
	//left_wing
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 226) {
			$('.left_wing').addClass("fixed");
		} else {
			$('.left_wing').removeClass("fixed");
		}
	});
    
    /* 고용정보서비스 */
	$('.pick_slide').slick({
		slide: 'div',
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		pauseOnHover: true,
		dots: false,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1400, //화면 사이즈 960px
				settings: {
					slidesToShow: 3,
				}
                    },
			{
				breakpoint: 641, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2,
				}
                    },
			{
				breakpoint: 480, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1,
				}
                    }

                ]
	});
    
    $('.detail_search .tit_more').click(function(){
       $(this).toggleClass('active'); 
       $(this).next().slideToggle();
    });
    
    $('.emp_infor_view .share .open').click(function(){
        $(this).toggleClass('acitve');
        $(this).next().fadeToggle(0)
    });
    
    
    /* 상시이벤트 페이지 작성예시*/
    	$('.ev_ex_slider').slick({
		slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '0',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
      adaptiveHeight: false,
        responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1400, //화면 사이즈 960px
				settings: {
					slidesToShow: 2,
				}
                    },
			{
				breakpoint: 768, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1,
				}
                    },
			{
				breakpoint: 480, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1,
				}
                    }

                ]
            
	});
    
    if($(window).width() < 768) {
         var max_h=0; // 최대 높이 구하기

    $(".ev_ex_slider .item").each(function(){

        var h = parseInt($(this).css("height"));

        if(max_h<h){ max_h = h; }

    });

    $(".ev_ex_slider").each(function(){ // 최대 높이로 설정

        $(this).css({height:max_h + 100});

    });
} else {
// window 크기가 768보다 클때
}
    
    $(window).resize(function() {
	if($(window).width() < 768) {
	   var max_h=0; // 최대 높이 구하기

    $(".ev_ex_slider .item").each(function(){

        var h = parseInt($(this).css("height"));

        if(max_h<h){ max_h = h; }

    });

    $(".ev_ex_slider").each(function(){ // 최대 높이로 설정

        $(this).css({height:max_h + 100});

    });
	} else {
    $(".ev_ex_slider").each(function(){ // 최대 높이로 설정

        $(this).css({height:'auto'});

    });
	}
});
    


    
    
});


function openModal(modalname) {
	document.get
	$("." + modalname).show();
	$('body').addClass('not_scroll');
}

function close_pop(flag) {
	$('.popup_area').hide();
	$('body').removeClass('not_scroll');
};





//자소서 컨설팅 하단 height 맞추기


window.onload = function(){

	
/*here we place our logic
  we take each sizes, compares which one is largest and then
  set other's height.*/
	// .innerHeight() returns height of an element
	var a = $(".self_intro_main .main_section05 #tab1 .js_wrap .scrollbar").innerHeight();
	var b = $(".self_intro_main .main_section05 #tab1 .job_aricle > div").innerHeight();
	//alert(a + " " + b);
	// .height() sets height of an element
	// we can pass an integer value, which will be converted into px
	// otherwise we can pass a string, mentioning the unit such as px or in or cm or dp
	if (a > b) {
		$(".self_intro_main .main_section05 #tab1 .job_aricle > div").height(a);
	} else {
		$(".self_intro_main .main_section05 #tab1 .js_wrap .scrollbar").height(b);
	}






	// .innerHeight() returns height of an element
	var c = $(".self_intro_main .main_section05 #tab2 .js_wrap .scrollbar").innerHeight();
	var d = $(".self_intro_main .main_section05 #tab2 .job_aricle > div").innerHeight();
	//alert(a + " " + b);
	// .height() sets height of an element
	// we can pass an integer value, which will be converted into px
	// otherwise we can pass a string, mentioning the unit such as px or in or cm or dp
	if (c > d) {
		$(".self_intro_main .main_section05 #tab2 .js_wrap .scrollbar").height(c);
	} else {
		$(".self_intro_main .main_section05 #tab2 .job_aricle > div").height(d);
	}
}


