import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const dataTest = [
  {
    name: 'Choose Country and Year',
    size: 0,
  },
];

export default function CustomLineChart(props) {
  var { data } = props;

  var chartData = dataTest;
  if (data != "") {
    var top1 = { name: "Top 1 %", size:data.p99p100.avg_income};
    var top10 = { name: "Top 10 %"};
    top10.children = [];
    let top10Child = data.p90p99.avg_income;
    for (var i = 0; i < 9; i++){
      top10.children.push({size:top10Child});
    }

    var top50 = { name: "Middle Class (50-90)",};
    top50.children = [];
    let top50Child = data.p50p90.avg_income;
    for (var i = 0; i < 40; i++){
      top50.children.push({size:top50Child});
    }

    var bottom50 = { name: "Poorest Half",};
    bottom50.children = [];
    let bottom50Child = data.p0p50.avg_income;
    for (var i = 0; i < 50; i++){
      bottom50.children.push({size:bottom50Child});
    }

    chartData = [top1,top10,top50,bottom50];
  }

  return (
    <LineChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="size"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}