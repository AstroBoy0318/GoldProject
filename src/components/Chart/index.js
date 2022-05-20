import React from "react";
import { Bar } from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

import { Chart as ChartJS, registerables } from "chart.js";

import "./style.css";

ChartJS.register(
  // CategoryScale,
  // LinearScale,
  // PointElement,
  // LineElement,
  // BarElement,
  // Title,
  // Tooltip,
  // Legend
  ...registerables
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "",
      type: "line",
      data: [600, 900, 850, 800, 1200, 1900, 2200, 1850, 950, 800, 1200, 1200],
      fill: false,
      borderColor: "#06D7F6",
      backgroundColor: "#555555",
      pointBorderColor: "#06D7F6",
      pointBackgroundColor: "#154C1E",
      // pointHoverBackgroundColor: "#EC932F",
      // pointHoverBorderColor: "#EC932F",
      pointHoverRadius: 6,
      pointHoverBorderWidth: 4,
      pointRadius: 5,
      pointBorderWidth: 3,
      tension: 0.4,
      // yAxisID: "y-axis-1",
    },
    {
      type: "bar",
      label: "",
      data: [
        2000, 2700, 1100, 1100, 2000, 3000, 3000, 1900, 2300, 1200, 1700, 3000,
      ],
      fill: false,
      backgroundColor: "#4807EA",
      borderColor: "#28B7F7",
      hoverBackgroundColor: "#4807EA",
      hoverBorderColor: "#4807EA",
      borderWidth: 0,
      borderRadius: 3,
      borderSkipped: false,
      barThickness: 17,
      backgroundColor: "#4807EA",
      // yAxisID: "y-axis-2"
    },
  ],
};

const options = {
  maintainAspectRation: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    "left-y-axis": {
      type: "linear",
      position: "left",
      grid: {
        display: true,
        lineWidth: 1.5,
        color: "#2C2C35",
      },
      ticks: {
        callback: (v) => v / 1000 + "k",
        maxTicksLimit: 4,
      },
    },
    "right-y-axis": {
      type: "linear",
      position: "right",
      grid: {
        display: false,
      },
      ticks: {
        callback: (v) => "$" + v,
        maxTicksLimit: 4,
      },
      suggestedMax: 600,
      suggestedMin: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
      align: "center",
      reverse: true,
      labels: {
        font: { size: 18, weight: 600, lineHeight: 20 },
        boxWidth: 0,
        boxHeight: 0,
        padding: 20,
        filter: function (legendItem, data) {
          // console.log(legendItem);
          if (legendItem.text == "Spend") {
            legendItem.fontColor = "#06D7F6";
            legendItem.textAlign = "right";
          } else {
            legendItem.fontColor = "#0062FF";
            legendItem.textAlign = "left";
          }
          return true;
        },
      },
    },
  },
};

const plugins = [{}];

class Chart extends React.Component {
  render() {
    return (
      <div className="chart-show">
        <h2 className="ms-4 pt-4 chart-title">FTM Dividends Distributed</h2>
        <div className="d-flex justify-content-center chat-grid">
          <Bar
            data={data}
            options={options}
            plugins={plugins}
            width={10}
            height={3}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
