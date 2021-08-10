<template>
  <div>
    <Header />
    <IncomeLineChart />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TestChart from './components/TestChart.vue'
import IncomeLineChart from './components/IncomeLineChart.vue'
import Header from './components/Header.vue'
// test from https://www.youtube.com/watch?v=CYPZBK8zUik
export default {
  name: 'App',
  components: {
    Header,
    IncomeLineChart
  }
}
</script>

<style>
    body{
      background: #eee;
      max-width: 960px;
      margin: 20px auto;
    }
    p, h3, ul{
      margin: 0;
      padding: 0;
    }
    li{
      list-style-type: none;
      background: #fff;
      margin: 20px auto;
      padding: 10px 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li.fav{
      background: #ff9ed2;
      color: white;
    }
</style>
