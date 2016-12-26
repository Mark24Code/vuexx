<template>
  <div id="app">
    <h1>Hello World</h1>
    <count></count>
  </div>
</template>

<script>
import Count from './components/Count'

export default {
  name: 'app',
  components: {
    Count
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
