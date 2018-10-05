<template>
<div class="section columns is-multiline">

  <div class="column is-8 is-offset-2 border" v-for="sentence in sentences" :key="sentence._id">
    {{sentence.text}}
  </div>

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      rightItem: '',
    }
  },
  methods: {
    ...mapActions({
      
    })
  },
  computed: {
    ...mapGetters({
      sentences: 'learn/sentences',
    })
  },
  async mounted(){
    this.$store.dispatch('learn/load', {what: 'sentence'});
  },
  watch: {
    
  }
}
</script>

<style>
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
.box:hover {
  background-color: #cecada;
}
</style>
