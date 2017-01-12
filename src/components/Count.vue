<template>
  <div class="hello">
    <div><p>Hello Components</p></div>
    <div>
      {{count}}
    </div>
    <div>
      <button @click="increment">Inc</button>
      <button @click="decrement">Dec</button>
    </div>
    <div>
      <suba @KKK="faKKK('s')"></suba>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import suba from './suba.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){

  },
  computed:mapGetters([
      'count'
  ]),
  components:{
    suba
  },
  methods:{
    increment(){
      this.$store.dispatch("inc")
    },
    decrement(){
      this.$store.dispatch("dec")
    },
    faKKK(s){
      console.log("this is COUNT Father [msg]:"+s)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
