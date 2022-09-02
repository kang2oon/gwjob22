$(document).ready(function(){
    var navOffset = $('#mod_select').offset();
    //console.log(navOffset);
    $(window).scroll(function(){
        if( $(document).scrollTop() > navOffset.top ){	
            $('#mod_select').addClass('fixed');
        } else {
            $('#mod_select').removeClass('fixed');
        }
    });

    $('.mod_tab_wrap > div').click(function(){
        var tab = $(this).attr('data-tab');
        //console.log(tab); 
        $('.mod_tab_wrap > div').removeClass('active');
        //$('.tab_wrap > div, .tcont_wrap > div').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({scrollTop:$('#'+tab+'').offset().top-128}, '500');
        //console.log(tab);   
        //$('.tcont_wrap > div[data-tab="'+tab+'"]').addClass('active');
    });

    
    setTimeout(function(){
        $.ajax({
            complete : function(){

                $('.mod_history02 .history').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: false,
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 1025,
                            settings: {
                                arrows: false,
                                }
                        },
                        {
                            breakpoint: 821,
                            settings: {
                                slidesToShow: 2,
                                arrows: false,
                                }
                        },
                        {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            }
                        }
                    ]
                });
    
    
                interview01 = $('.mod_interview01 .interview');
                function interview01_slide(){
                    interview01.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                interview01_slide();
    
                $('.mod_interview01 .iv_tab > div').click(function(){
                    var tab = $(this).attr('data-tab');
                    $('.mod_interview01 .iv_tab > div, .mod_interview01 .iv_cont > div').removeClass('active');
                    $(this).addClass('active');
                    $('.mod_interview01 .iv_cont > div[data-tab="'+tab+'"]').addClass('active');
                    interview01.slick('unslick');
                    interview01_slide();
                });
    
                interview02 = $('.mod_interview02 .interview');
                function interview02_slide(){
                    interview02.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: false,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                interview02_slide();
    
                interview03 = $('.mod_interview03 .interview');
                function interview03_slide(){
                    interview03.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: false,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                interview03_slide();

                interview04 = $('.mod_interview04 .interview');
                function interview04_slide(){
                    interview04.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: false,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                interview04_slide();

                var interview04Cnt = 0;
                $('.mod_interview04 .iv_tab .btn_g button').click(function(){
                    var textSpan = $(this).closest('.iv_tab').find("h2");
                    var classArr = ["ceo","mng","emp"];
                    var textArr = ["CEO","인사담당자","재직자"];
                    var buttonName = $(this).attr("class");
                    
                    if(buttonName == "next"){
                        interview04Cnt++;
                        if(interview04Cnt > classArr.length - 1){
                            interview04Cnt = 0;
                        }
                    }else{
                        interview04Cnt--;
                        if(interview04Cnt < 0){
                            interview04Cnt = classArr.length - 1;
                        }
                    }
                    textSpan.find("p").text(textArr[interview04Cnt]);
                    $('.mod_interview04 .iv_cont > div').removeClass('active');
                    $('.mod_interview04 .iv_cont > div[data-tab="'+classArr[interview04Cnt]+'"]').addClass('active');
                    interview04.slick('unslick');
                    interview04_slide();
                });

                interview05 = $('.mod_interview05 .interview');
                function interview05_slide(){
                    interview05.slick({
                        rows: 3,
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

                interview06 = $('.mod_interview06 .interview');
                function interview06_slide(){
                    interview06.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        prevArrow: $('.mod_interview06 .prev_arrow'),
                        nextArrow: $('.mod_interview06 .next_arrow'),
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                interview06_slide();

                $(".mod_interview06 .bg .q").click(function() {
                    var $this = $(this);
                    var $parent = $this.parent().siblings();
                    $parent.find(".q").removeClass("active");
                    $this.addClass("active");
                });

                interview07 = $('.mod_interview07 .interview');
                function interview07_slide(){
                    interview07.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                interview07_slide();

                culture01 = $('.mod_culture01 .slide_wrap');
                function culture01_slide(){
                    culture01.slick({
                        rows: 2,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_culture01 .prev_arrow'),
                        nextArrow: $('.mod_culture01 .next_arrow'),
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                                breakpoint: 640,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                    arrows: false,
                                }
                            }
                        ]
                    });
                }
                culture01_slide();

                culture02 = $('.mod_culture02 .slide_wrap');
                function culture02_slide(){
                    culture02.slick({
                        rows: 2,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_culture02 .prev_arrow'),
                        nextArrow: $('.mod_culture02 .next_arrow'),
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                                breakpoint: 640,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                    arrows: false,
                                }
                            }
                        ]
                    });
                }
                culture02_slide();

                culture03 = $('.mod_culture03 .slide_wrap');
                function culture03_slide(){
                    culture03.slick({
                        rows: 2,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_culture03 .prev_arrow'),
                        nextArrow: $('.mod_culture03 .next_arrow'),
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                            breakpoint: 640,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                    arrows: false,
                                }
                            }
                        ]
                    });
                }
                culture03_slide();

                culture04 = $('.mod_culture04 .slide_wrap');
                function culture04_slide(){
                    culture04.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                culture04_slide();

                culture05 = $('.mod_culture05 .slide_wrap');
                function culture05_slide(){
                    culture05.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: true,
                        arrows: false,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                culture05_slide();

                culture06 = $('.mod_culture06 .slide_wrap');
                function culture06_slide(){
                    culture06.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                culture06_slide();


                culture07 = $('.mod_culture07 .slide_wrap');
                function culture07_slide(){
                    culture07.slick({
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_culture07 .prev_arrow'),
                        nextArrow: $('.mod_culture07 .next_arrow'),
                        responsive: [
                            {
                                breakpoint: 850,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: false,
                                    dots: true,
                                }
                            }
                        ]
                    });
                }
                culture07_slide();

                culture08 = $('.mod_culture08 .slide_wrap');
                function culture08_slide(){
                    culture08.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                culture08_slide();

                culture09 = $('.mod_culture09 .slide_wrap');
                function culture09_slide(){
                    culture09.slick({
                        rows: 2,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_culture09 .prev_arrow'),
                        nextArrow: $('.mod_culture09 .next_arrow'),
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    dots: true,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                }
                            }
                        ]
                    });
                }
                culture09_slide();

                culture10 = $('.mod_culture10 .slide_wrap');
                function culture10_slide(){
                    culture10.slick({
                        rows: 2,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_culture10 .prev_arrow'),
                        nextArrow: $('.mod_culture10 .next_arrow'),
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    rows: 1,
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                }
                            }
                        ]
                    });
                }
                culture10_slide();

                culture11_culture = $('.mod_culture11 .culture_wrap .slide_wrap');
                culture11_welfare = $('.mod_culture11 .welfare_wrap .slide_wrap');
                function culture11_culture_slide(){
                    culture11_culture.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: false,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                function culture11_welfare_slide(){
                    culture11_welfare.slick({
                        rows: 3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                    });
                }
                culture11_culture_slide();
                culture11_welfare_slide();

                business01 = $('.mod_business_area01 .bizDiv_slide');
                function business01_slide(){
                    business01.slick({
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: false,
                        prevArrow: $('.mod_business_area01 .prev_arrow'),
                        nextArrow: $('.mod_business_area01 .next_arrow'),
                        responsive: [
                            
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                            breakpoint: 560,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
                business01_slide();

                business02 = $('.mod_business_area02 .bizDiv_slide');
                function business02_slide(){
                    business02.slick({
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: true,
                        prevArrow: $('.mod_business_area02 .prev_arrow'),
                        nextArrow: $('.mod_business_area02 .next_arrow'),
                        responsive: [
                            
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                            breakpoint: 560,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
                business02_slide();

                business03 = $('.mod_business_area03 .bizDiv_slide');
                function business03_slide(){
                    business03.slick({
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: true,
                        prevArrow: $('.mod_business_area03 .prev_arrow'),
                        nextArrow: $('.mod_business_area03 .next_arrow'),
                        responsive: [
                            
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                            breakpoint: 560,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
                business03_slide();

                business04 = $('.mod_business_area04 .bizDiv_slide');
                function business04_slide(){
                    business04.slick({
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: true,
                        prevArrow: $('.mod_business_area04 .prev_arrow'),
                        nextArrow: $('.mod_business_area04 .next_arrow'),
                        responsive: [
                            
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                            breakpoint: 560,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
                business04_slide();

                business05 = $('.mod_business_area05 .bizDiv_slide');
                function business05_slide(){
                    business05.slick({
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: false,
                        dots: false,
                        arrows: true,
                        infinite: false,
                        adaptiveHeight: true,
                        prevArrow: $('.mod_business_area05 .prev_arrow'),
                        nextArrow: $('.mod_business_area05 .next_arrow'),
                        responsive: [
                            
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                }
                            },
                            {
                            breakpoint: 560,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
                business05_slide();

                
                
                $(".mod_finance01 .tab > div").click(function() {
                    var item = $(this).attr("data-tab");
                    $(".mod_finance01 .tab > div").removeClass("on");
                    $(this).addClass("on");
                    $(".mod_finance01 .conts > div").hide();
                    $(".mod_finance01 .conts > ." + item).show();
                    setTimeout(function() {
                        finance01_chart1.resize();
                        finance01_chart2.resize();
                        finance01_chart3.resize();
                    }, 300);	
                });
                var finance01_chart1 = bb.generate({
                    bindto: ".mod_finance01 #graph_fiCapital",
                    data: {
                        type: "bar",
                        columns: [
                            ["자본금", 50, 50, 50]
                        ],
                        colors: {
                            자본금: "#ff8e8e"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 60
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance01_chart2 = bb.generate({
                    bindto: ".mod_finance01 #graph_fiSales",
                    data: {
                        type: "bar",
                        columns: [
                            ["매출액", 3103, 2920, 2767]
                        ],
                        colors: {
                            매출액: "#ff8e8e"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 60
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance01_chart3 = bb.generate({
                    bindto: ".mod_finance01 #graph_fiProfit",
                    data: {
                        type: "bar",
                        columns: [
                            ["당기순이익", 208, 48, 50]
                        ],
                        colors: {
                            당기순이익: "#ff8e8e"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 60
                        }
                    },
                    legend: {
                        show: false
                    }
                });


                $(".mod_finance02 .tab > div").click(function() {
                    var item = $(this).attr("data-tab");
                    $(".mod_finance02 .tab > div").removeClass("on");
                    $(this).addClass("on");
                    $(".mod_finance02 .conts > div").hide();
                    $(".mod_finance02 .conts > ." + item).show();
                    setTimeout(function() {
                        finance02_chart1.resize();
                        finance02_chart2.resize();
                        finance02_chart3.resize();
                    }, 100);	
                });
                var finance02_chart1 = bb.generate({
                    bindto: ".mod_finance02 #graph_fiCapital",
                    data: {
                        type: "line",
                        columns: [
                            ["자본금", 50, 50, 50]
                        ],
                        colors: {
                            자본금: "#ff8e8e"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 60
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance02_chart2 = bb.generate({
                    bindto: ".mod_finance02 #graph_fiSales",
                    data: {
                        type: "line",
                        columns: [
                            ["매출액", 3103, 2920, 2767]
                        ],
                        colors: {
                            매출액: "#ff8e8e"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 60
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance02_chart3 = bb.generate({
                    bindto: ".mod_finance02 #graph_fiProfit",
                    data: {
                        type: "line",
                        columns: [
                            ["당기순이익", 208, 48, 50]
                        ],
                        colors: {
                            당기순이익: "#ff8e8e"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 60
                        }
                    },
                    legend: {
                        show: false
                    }
                });


                $(".mod_finance03 .tab > div").click(function() {
                    var item = $(this).attr("data-tab");
                    $(".mod_finance03 .tab > div").removeClass("on");
                    $(this).addClass("on");
                    $(".mod_finance03 .conts > div").hide();
                    $(".mod_finance03 .conts > ." + item).show();
                    setTimeout(function() {
                        finance03_chart1.resize();
                        finance03_chart2.resize();
                        finance03_chart3.resize();
                    }, 100);	
                });
                var finance03_chart1 = bb.generate({
                    bindto: ".mod_finance03 #graph_fiCapital",
                    data: {
                        type: "bar",
                        columns: [
                            ["자본금", 50, 50, 50]
                        ],
                        colors: {
                            자본금: "#f7873e",
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 60
                        },
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance03_chart2 = bb.generate({
                    bindto: ".mod_finance03 #graph_fiSales",
                    data: {
                        type: "bar",
                        columns: [
                            ["매출액", 3103, 2920, 2767]
                        ],
                        colors: {
                            매출액: "#b4622d"
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 60
                        },
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance03_chart3 = bb.generate({
                    bindto: ".mod_finance03 #graph_fiProfit",
                    data: {
                        type: "bar",
                        columns: [
                            ["당기순이익", 208, 48, 50]
                        ],
                        colors: {
                            당기순이익: "#666"
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 60
                        },
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });

                var finance04Cnt = 0;
                $('.mod_finance04 .tab .btn_g button').click(function(){
                    var classArr = ["summary","capital","sales","profit"];
                    var textArr = ["재무평가 요약","자본금","매출액","당기순이익"];
                    var buttonName = $(this).attr("class");
                    
                    if(buttonName == "next"){
                        finance04Cnt++;
                        if(finance04Cnt > classArr.length - 1){
                            finance04Cnt = 0;
                        }
                    }else{
                        finance04Cnt--;
                        if(finance04Cnt < 0){
                            finance04Cnt = classArr.length - 1;
                        }
                    }
                    $('.mod_finance04 .graph_tit').text(textArr[finance04Cnt]);
                    $('.mod_finance04 .conts > div').hide();
                    $('.mod_finance04 .conts > div.' +classArr[finance04Cnt]).show();
                    setTimeout(function() {
                        finance04_chart1.resize();
                        finance04_chart2.resize();
                        finance04_chart3.resize();
                    }, 100);	
                });

                var finance04_chart1 = bb.generate({
                    bindto: ".mod_finance04 #graph_fiCapital",
                    data: {
                        type: "line",
                        columns: [
                            ["자본금", 50, 50, 50]
                        ],
                        colors: {
                            자본금: "#f7873e",
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 60
                        },
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance04_chart2 = bb.generate({
                    bindto: ".mod_finance04 #graph_fiSales",
                    data: {
                        type: "line",
                        columns: [
                            ["매출액", 3103, 2920, 2767]
                        ],
                        colors: {
                            매출액: "#b4622d"
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 60
                        },
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance04_chart3 = bb.generate({
                    bindto: ".mod_finance04 #graph_fiProfit",
                    data: {
                        type: "line",
                        columns: [
                            ["당기순이익", 208, 48, 50]
                        ],
                        colors: {
                            당기순이익: "#666"
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 60
                        },
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });

                setTimeout(function() {
                    chart5_finance05.resize();
                }, 300);

                var chart5_finance05 = bb.generate({
                    bindto: "#graph_three",
                    data: {
                        type: "bar",
                        columns: [
                            ["자본금", 150, 50, 50],
                            ["매출액", 200, 500, 350],
                            ["당기순이익", 208, 48, 120]
                        ],
                        colors: {
                            자본금: "#999",
                            매출액: "#ffd55f",
                            당기순이익: "#0971ce"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 10
                        },
                        padding: 3,
                        radius: {
                            ratio: 0.5
                        }
                    },
                    legend: {
                        show: false
                    }
                });

                setTimeout(function() {
                    chart_finance06.resize();
                }, 300);

                var chart_finance06 = bb.generate({
                    bindto: ".mod_finance06 #graph_three",
                    data: {
                        type: "bar",
                        columns: [
                            ["자본금", 150, 50, 50],
                            ["매출액", 200, 500, 350],
                            ["당기순이익", 208, 48, 120]
                        ],
                        groups: [
                            [
                                "자본금",
                                "매출액",
                                "당기순이익"
                            ]
                        ],
                        colors: {
                            자본금: "#d84059",
                            매출액: "#ce1030",
                            당기순이익: "#9b0c24"
                        }
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        }
                    },
                    bar: {
                        width: {
                            max: 50
                        },
                        padding: 3
                    },
                    legend: {
                        show: false
                    }
                });


                $(".mod_finance07 .tab > div").click(function() {
                    var item = $(this).attr("data-tab");
                    $(".mod_finance07 .tab > div").removeClass("on");
                    $(this).addClass("on");
                    $(".mod_finance07 .conts > div").hide();
                    $(".mod_finance07 .conts > ." + item).show();
                    setTimeout(function() {
                        finance07_chart1.resize();
                        finance07_chart2.resize();
                        finance07_chart3.resize();
                    }, 100);	
                });
                var finance07_chart1 = bb.generate({
                    bindto: ".mod_finance07 #graph_fiCapital",
                    data: {
                        type: "bar",
                        columns: [
                            ["자본금", 50, 50, 50]
                        ],
                        colors: {
                            자본금: "#527f9e",
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 20
                        },
                        radius: {
                            ratio: 0.1
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance07_chart2 = bb.generate({
                    bindto: ".mod_finance07 #graph_fiSales",
                    data: {
                        type: "bar",
                        columns: [
                            ["매출액", 3103, 2920, 2767]
                        ],
                        colors: {
                            매출액: "#65b3bf"
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 20
                        },
                        radius: {
                            ratio: 0.1
                        }
                    },
                    legend: {
                        show: false
                    }
                });
                var finance07_chart3 = bb.generate({
                    bindto: ".mod_finance07 #graph_fiProfit",
                    data: {
                        type: "bar",
                        columns: [
                            ["당기순이익", 208, 48, 50]
                        ],
                        colors: {
                            당기순이익: "#64b18c"
                        },
                        labels: {
                            colors: "white",
                            centered: true
                        },
                    },
                    padding: {
                        top: 20,
                        left: 40
                    },
                    grid: {
                        x: {
                            show: true
                        },
                        y: {
                            show: true
                        }
                    },
                    axis: {
                        x: {
                            type: "category",
                            categories: [2021, 2020, 2019],
                            padding: {
                                left: .2,
                                right: .2
                            }
                        },
                        rotated: true
                    },
                    bar: {
                        width: {
                            max: 20
                        },
                        radius: {
                            ratio: 0.1
                        }
                    },
                    legend: {
                        show: false
                    }
                });
            }
        });
    },400);
    
});