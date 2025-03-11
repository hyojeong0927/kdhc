const { AgCharts } = agCharts;

const options1 = {
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
            fill: "#21B2C5",
            stacked: true,
        },
        {
            type: "bar",
            xKey: "quarter",
            yKey: "외장하드", 
            yName: "외장하드",
            fill: "#738BEA",
            stacked: true,
        },
        {
            type: "bar",
            xKey: "quarter",
            yKey: "CD",
            yName: "CD",
            fill: "#EDB562",
            stacked: true,
        },
    ],
    padding: { top: 14, right: 0, bottom: 0, left: 0 },
    axes: [
        {
            type: "category",
            position: "bottom",
            gridLine: {
                enabled: false,
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
            interval: {
                step: 10
            },
            gridLine: {
                enabled: true,
            },
            label: {
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Noto Sans KR',
                color: '#A5A5A5',
                rotation: 0
            }
        },
    ],
    legend: {
        enabled: false,
        position: 'top',
        spacing: 20,
        item: {
            paddingX: 12,
            paddingY: 0,
            marker: {
                shape: 'circle',
                size: 8,
                padding: 5,
            },
            label: {
                color: '#18191C',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Noto Sans KR',
            }
        }
    },
};
const options2 = {
    container: document.getElementById("assetsChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getAssetsData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "assets",
            yName: "assets",
            fill: "#2FC3AF",
            stacked: true,
        },
    ],
    padding: { top: 14, right: 0, bottom: 0, left: 0 },
    axes: [
        {
            type: "category",
            position: "bottom",
            gridLine: {
                enabled: false,
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
            interval: {
                step: 10
            },
            gridLine: {
                enabled: true,
            },
            label: {
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Noto Sans KR',
                color: '#A5A5A5',
                rotation: 0
            }
        },
    ],
    legend: {
        enabled: false,
        position: 'top',
        spacing: 20,
        item: {
            paddingX: 12,
            paddingY: 0,
            marker: {
                shape: 'circle',
                size: 8,
                padding: 5,
            },
            label: {
                color: '#18191C',
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Noto Sans KR',
            }
        }
    },
};
const chart1 = AgCharts.create(options1);
const chart2 = AgCharts.create(options2);

function updateLegendPosition(value) {
    options.legend.position = value;
    chart1.update(options1);
    chart2.update(options2);
}

function setLegendEnabled(enabled) {
    options1.legend.enabled = enabled;
    options1.legend.enabled = enabled;
    chart1.update(options1);
    chart2.update(options2);
}

function setStep(step) {
    const axis = options.axes?.[1];
    axis.interval = { step: step };
    chart1.update(options);
    chart2.update(options);
}

function resetInterval() {
    const axis = options.axes?.[1];
    axis.interval = {};
    chart1.update(options1);
    chart2.update(options2);
}