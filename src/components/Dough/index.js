import React from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "./style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const chartData = [80, 20];
const showData = chartData[1] + "%";

const data = {
  labels: [],
  datasets: [
    {
      data: chartData,
      backgroundColor: ["#06D7F6", "#E80FE9"],
    },
  ],
};

const options = {
  cutoutPercentage: 0,
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 0,
  offset: 7,
  cutout: 40,
  radius: 48,
  legend: {
    display: false,
  },
};

const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 100).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";
      var text = showData,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.fillText(text, textX, textY);

      ctx.save();
    },
  },
];

class Dough extends React.Component {
  render() {
    return (
      <div className="mb-2">
        <Doughnut
          data={data}
          options={options}
          plugins={plugins}
          width={120}
          height={120}
        />
      </div>
    );
  }
}

export default Dough;
