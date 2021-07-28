<template>
  <v-chart class="chart" :option="option" />
</template>

<script>

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

const ROOT_PATH ="http://localhost:8000" ;
let currentCountry = 'BE';


export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "white"
  },
  setup () {
    let option = ref({
        title: {
            text: 'YEAh'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Top 1',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: []
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: []
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: []
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: []
            }
        ]
    });

    return { option};
  } ,
  mounted () {
    //replace filler data with actual values
    fetch(ROOT_PATH + '/api/avg-income-list/' + currentCountry)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        let newYears = [];
        let top1s = [];
        let top10s = [];
        let top40s = [];
        let bottom50s = [];

        for (var year in data) {
            //if( year > 2005){
            newYears.push(year);
                //top1s.push(data[year].p99p100.percent);
                top10s.push(data[year].p90p99.percent);
                //top40s.push(data[year].p50p90.percent);
                //bottom50s.push(data[year].p0p50.percent);
            //}
        }

        this.option.xAxis[0].data = newYears;
        this.option.series[0].data = top1s;
        this.option.series[1].data = top10s;
        this.option.series[2].data = top40s;
        this.option.series[3].data = bottom50s;
    });
  }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
