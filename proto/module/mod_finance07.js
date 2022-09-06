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