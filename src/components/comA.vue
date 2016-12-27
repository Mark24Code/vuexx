<template>
  <div class="comA">
    <div><p>COmponentA</p></div>
    <div>
      {{nameA}}
    </div>
    <div>
      <button @click="addA">加A</button>
      <button @click="addB">加B</button>
    </div>
  </div>
</template>
<script>
import * as atype from '../vuex/modules/mA/type'
import {mapGetters} from 'vuex'
export default {
  name: 'comA',
  data () {
    return {

    }
  },
  computed:{
    nameA:function(){
      return this.$store.getters["mA/nameA"]
    }
  },
  methods:{
    addA:function(){
      console.log(atype.ACTION_addA)
      this.$store.dispatch("mA/add_a")
    },
    addB:function(){
      console.log("addB")
      this.$store.dispatch("mA/add_b")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
