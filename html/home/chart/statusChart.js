// 저장매체 보유현황
import { getStatusData } from './data.js';

const statusOptions = {
    container: document.getElementById("statusChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getStatusData,
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
                fontFamily: 'Arial',
            }
        }
    },
};
const chart = agCharts.AgCharts.create(statusOptions)

export default statusOptions;