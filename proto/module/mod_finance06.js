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