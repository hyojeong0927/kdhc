const { AgCharts } = agCharts;

// 저장매체 보유현황
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
// 공개취약점 자산현황
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
    },
};
// 백신 업데이트 현황
const options3 = {
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
                fontFamily: 'Noto Sans KR',
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
    },
};
// 전사 자산현항
const options4 = {
    container: document.getElementById("propertyChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getPropertyData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "property",
            yName: "property",
            fill: "#3FB3E4",
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
    },
};
// TEST
const options5 = {
    container: document.getElementById("testChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getTestData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "test",
            yName: "test",
            fill: "#EFD125",
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
    },
};
// 지원종료운영체제자산현황
const options6 = {
    container: document.getElementById("systemChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getSystemData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "system",
            yName: "system",
            fill: "#3BBC5D",
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
    },
};
// 정기점검 (주간/월간)
const options7 = {
    container: document.getElementById("checkChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getCheckData(),
    series: [
        {
            type: "bar",
            xKey: "quarter",
            yKey: "check",
            yName: "check",
            fill: "#9FA1EE",
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
    },
};

const chart1 = AgCharts.create(options1);
const chart2 = AgCharts.create(options2);
const chart3 = AgCharts.create(options3);
const chart4 = AgCharts.create(options4);
const chart5 = AgCharts.create(options5);
const chart6 = AgCharts.create(options6);
const chart7 = AgCharts.create(options7);