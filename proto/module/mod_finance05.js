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