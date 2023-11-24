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
  const piedata = [1, 2, 3, 4];
  const options = {};
  return (
    <div className="w-[400px] h-46 bg-white rounded-xl">
      <div className="flex justify-between p-8">
        <h1 className="font-semibold text-xl">Income - Expense</h1>
        <h1 className="text-gray-500">Jun1 - Nov 30</h1>
      </div>
      <div className="w-20">
        <Doughnut className="" data={data} />
      </div>
      <div className="flex gap-4 bg-black flex-col ">
        {piedata.map((e, i) => (
          <p className="" key={i}>
            {e.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
