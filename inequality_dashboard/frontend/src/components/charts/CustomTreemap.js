/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import { Treemap,  ResponsiveContainer } from 'recharts';

const dataTest = [
  {
    name: 'Choose Country and Year',
    size: 0,
  },
];

const COLORS = ['#f57842', '#8889DD', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name, value, children } = this.props;
    let childrenCount = 1;
    if(children != null) {
      childrenCount = children.length;
    }
  
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontFamily="Roboto, sans-serif" fontWeight={100} fontSize={14}>
            { new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value / 12 / childrenCount ) }
          </text>
        ) : null}
        {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#fff" fontFamily="Roboto, sans-serif" fontWeight={100} fontSize={16} fillOpacity={0.9}>
            {name}
          </text>
        ) : null}
      </g>
    );
  }
}

export default class CustomTreemap extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/treemap-with-customized-content-7qxfp';

  render() {
    var { data } = this.props;

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
      <ResponsiveContainer margin={{ top: 100, left: 100, right: 100, bottom: 100 }} height={400}>
        <Treemap
          class = "test"
          data={chartData}
          dataKey="size"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        >
        </Treemap>
      </ResponsiveContainer>
    );
  }
}
