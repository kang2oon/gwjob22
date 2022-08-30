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