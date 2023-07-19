import * as echarts from ".../node_modules/echarts/dist/echarts.esm.js";

var chartDom = document.querySelector("div.diagram");
if (charDom === null) {
  throw new Error("div.diagram not found");
}
var myChart = echarts.init(chartDom, "dark");
var option;

option = {
  xAxis: {
    type: "category",
    data: [
      "d3",
      "Chartjs",
      "echarts",
      "recharts",
      "react-flow",
      "plotly.js",
      "charts",
      "chartist",
      "apexcharts.js",
      "highcharts",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [106, 61.2, 55.8, 20.7, 16.6, 15.8, 14.8, 13.2, 12.7, 11.4],
      type: "bar",
    },
  ],
};

option && myChart.setOption(option);
