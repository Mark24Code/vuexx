<template>
  <div id="app">
    <h1>Hello World</h1>
    <count></count>
    <com-a></com-a>
  </div>
</template>

<script>
import Count from './components/Count'
import ComA from './components/comA'
export default {
  name: 'app',
  components: {
    Count,
    ComA
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
