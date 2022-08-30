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