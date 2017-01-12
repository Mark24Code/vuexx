<template>
  <div class="suba">
    <p>This is sub A</p>
    <button @click="emitEvent">emit</button>
  </div>
</template>
<script>
export default {
  name: 'suba',
  mounted(){
    this.$on("KKK",function(s){
      console.log("[I'm on ]this is suba:[msg]:"+s)
    })
  },
  data () {
    return {

    }
  },
  computed:{

  },
  methods:{
    emitEvent:function(){
      console.log("emit-->")
      this.$emit("KKK","[I'm emmit]this is from sub a")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
