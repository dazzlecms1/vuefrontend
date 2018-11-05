<template>
<div>
  <navComponent></navComponent>
  <search></search>
  <item></item>
  <item></item>
  <item></item>
  <item></item>
  
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import navComponentVue from './navComponent.vue';
import searchVue from './search.vue';
import itemVue from './item.vue';

export default {
  components: {
    navComponent: navComponentVue,
    search: searchVue,
    item: itemVue,
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
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
