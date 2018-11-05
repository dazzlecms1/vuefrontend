<template>
<div class="field">
  <div class="control">
    <input 
      v-model="search"
      class="input is-info is-large" 
      type="text" 
      placeholder="Search">
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {

  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      
    })
  },
  computed: {
    search: {
      get() {
        return this.$store.state['tv/search'];
      },
      set(val) {
        this.$store.commit('tv/search', val);
      }
    }
  
  },
  async mounted(){
    // console.log(this.$store.getters['tv/search']);
  },
  watch: {
    
  }
}
</script>
