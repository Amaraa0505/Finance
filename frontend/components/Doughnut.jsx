import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale, LinearScale);

const data = {
  labels: ["bills", "Food", "Shopping", "Insurance", "Clothing"],
  datasets: [
    {
      data: [500, 500, 500, 500, 500],
      rate: [15, 15, 15, 15, 15],
      backgroundColor: [
        "#1C64F284",
        "#E74694",
        "#FDBA8C",
        "#16BDCA",
        "#F2901C",
      ],
    },
  ],
};

const piedata = [
  {
    label: "Bills",
    num: 5000000,
    rate: 15,
    color: "#1C64F284",
  },
  {
    label: "Food",
    num: 5000000,
    rate: 15,
    color: "#E74694",
  },
  {
    label: "Shopping",
    num: 5000000,
    rate: 15,
    color: "#FDBA8C",
  },
  {
    label: "Insurance",
    num: 5000000,
    rate: 15,
    color: "#16BDCA",
  },
  {
    label: "Clothing",
    num: 5000000,
    rate: 15,
    color: "#F2901C",
  },
];

const DoughnutChart = () => {
  const options = {};
  return (
    <div>
      <div></div>
      <div className="flex items-center gap-4 w-96 h-96 bg-orange-700">
        <Doughnut className="" data={data} />
        <div className="flex gap-4 flex-col">
          {piedata.map((e, i) => (
            <p key={i}>{e.label}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
