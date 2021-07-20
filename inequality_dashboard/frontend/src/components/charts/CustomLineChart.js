import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const dataTest = [
  {
    name: 'Choose Country and Year',
    value: 0,
  },
];

export default function CustomLineChart(props) {
  var { data } = props;

  var chartData = [];
  if (data != "" && data != undefined && data != null) {
    for (var year in data) {
      chartData.push({year:year,top1:data[year].p99p100.avg_income,top10:data[year].p90p99.avg_income,top50:data[year].p50p90.avg_income,bottom50:data[year].p0p50.avg_income});
    }
  } else {
    chartData = dataTest;
  }

  return (
    <ResponsiveContainer margin={{ top: 100, left: 100, right: 100, bottom: 100 }} height={400}>
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
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="top1" stroke="#82ca9d" />
        <Line type="monotone" dataKey="top10" stroke="#52ca5d" />
        <Line type="monotone" dataKey="top50" stroke="#42ca1d" />
        <Line type="monotone" dataKey="bottom50" stroke="#320a9d" />

      </LineChart>
    </ResponsiveContainer>
  );
}