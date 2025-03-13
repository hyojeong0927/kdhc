// 백신 업데이트 현황
const vaccineOptions = {
    container: document.getElementById("vaccineChart"),
    
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getVaccineData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "vaccine",
            yName: "vaccine",
            fill: "#D774F2",
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
                fontFamily: 'Arial',
                color: '#A5A5A5',
                rotation: -45
            },
            paddingInner: 0.6,
            paddingOuter: 0,
        },
        {
            type: "number",
            position: "left",
            interval: {
                step: 10
            },
            gridLine: {
                enabled: true,
                style: [
                    {
                        stroke: '#A5A5A5',
                        lineDash: [],
                    },
                ]
            },
            label: {
                fontSize: 12,
                fontWeight: 'normal',
                fontFamily: 'Arial',
                color: '#A5A5A5',
                rotation: 0
            }
        },
    ],
    legend: {
        enabled: false,
    },
};
const chart = agCharts.AgCharts.create(vaccineOptions)

export default vaccineOptions;