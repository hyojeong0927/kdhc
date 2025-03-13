// 공개취약점 자산현황
import { getAssetsData } from './data.js';

const assetsOptions = {
    container: document.getElementById("assetsChart"),
    title: {
        text: "",
    },
    subtitle: {
        text: "",
    },
    data: getAssetsData,
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
const chart = agCharts.AgCharts.create(assetsOptions)

export default assetsOptions;