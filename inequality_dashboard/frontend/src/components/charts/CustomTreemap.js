/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const dataTest = [
  {
    name: 'Choose Country and Year',
    size: 50000,
  },
  // {
  //   name: 'Rich',
  //   children: [
  //     { name: 'AnchorControl', size: 2138 },
  //     { name: 'ClickControl', size: 3824 },
  //     { name: 'Control', size: 1353 },
  //     { name: 'ControlList', size: 4665 },
  //     { name: 'DragControl', size: 2649 },
  //     { name: 'ExpandControl', size: 2832 },
  //     { name: 'HoverControl', size: 4896 },
  //     { name: 'IControl', size: 763 },
  //     { name: 'PanZoomControl', size: 5222 },
  //     { name: 'SelectionControl', size: 7862 },
  //     { name: 'TooltipControl', size: 8435 },
  //   ],
  // },
  // {
  //   name: 'Middle Class',
  //   children: [
  //     { name: 'Data', size: 20544 },
  //     { name: 'DataList', size: 19788 },
  //     { name: 'DataSprite', size: 10349 },
  //     { name: 'EdgeSprite', size: 3301 },
  //     { name: 'NodeSprite', size: 19382 },
  //     { name: 'ScaleBinding', size: 11275 },
  //     { name: 'Tree', size: 7147 },
  //     { name: 'TreeBuilder', size: 9930 },
  //   ],
  // },
  // {
  //   name: 'Poorest ',
  //   children: [
  //     { name: 'DataEvent', size: 7313 },
  //     { name: 'SelectionEvent', size: 6880 },
  //     { name: 'TooltipEvent', size: 3701 },
  //     { name: 'VisualizationEvent', size: 2117 },
  //   ],
  // },
];

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;


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
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
            {name}
          </text>
        ) : null}
        {/* {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
            {index + 1}
          </text>
        ) : null} */}
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
      var top1 = { name: "Richest", size:data.p99p100};
      var top10 = { name: "Top 10"};
      top10.children = [];
      let top10Child = data.p90p100 / 9;
      for (var i = 0; i < 9; i++){
        top10.children.push({size:top10Child});
      }

      var top50 = { name: "Middle Class (50-90)",};
      top50.children = [];
      let top50Child = data.p50p90 / 40;
      for (var i = 0; i < 40; i++){
        top50.children.push({size:top50Child});
      }

      var bottom50 = { name: "Poorest Half",};
      bottom50.children = [];
      let bottom50Child = data.p0p50 / 50;
      for (var i = 0; i < 50; i++){
        bottom50.children.push({size:bottom50Child});
      }

      chartData= [top1,top10,top50,bottom50];
    }

    return (
        <Treemap
          width={600}
          height={300}
          data={chartData}
          dataKey="size"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        />
    );
  }
}
