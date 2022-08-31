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