const { AgCharts } = agCharts;

const options = {
    container: document.getElementById("statusChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getStatusData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "USB",
            yName: "USB",
            stacked: true,
        },
        {
            type: "bar",
            xKey: "quarter",
            yKey: "외장하드",
            yName: "외장하드",
            stacked: true,
        },
        {
            type: "bar",
            xKey: "quarter",
            yKey: "CD",
            yName: "CD",
            stacked: true,
        },
    ],
    axes: [
        {
            type: "category",
            position: "bottom",
            gridLine: {
                enabled: true,
            },
            label: {
                fontSize: 10,
                fontWeight: 'normal',
                fontFamily: 'Noto Sans KR',
                color: '#A5A5A5',
                rotation: -45
            }
        },
        {
            type: "number",
            position: "left",
            maximum: 50,
            gridLine: {
                enabled: true,
            },
            label: {
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Noto Sans KR',
                color: '#A5A5A5',
            }
        },
    ],
    gridLine: {
        style: [
            {
                stroke: '#A5A5A5',
                lineDash: [10, 5],
            },
            {
                stroke: '#A5A5A5',
                lineDash: [5, 5],
            },
        ],
    },
    legend: {
        position: "top",
    },
};
const chart = AgCharts.create(options);

function updateLegendPosition(value) {
  options.legend.position = value;
  chart.update(options);
}

function setLegendEnabled(enabled) {
  options.legend.enabled = enabled;
  chart.update(options);
}