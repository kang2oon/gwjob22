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