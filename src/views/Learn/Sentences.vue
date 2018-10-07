<template>
<div class="columns is-multiline">

  <div 
    class="column is-12 border" 
    v-for="sentence in sentences" 
    :key="sentence._id"
    @click="$store.commit('learn/setCurrentSentence', {sentence})"
    ><p :class="sentence._id === currentSentence._id ? 'has-text-primary' : ''">{{sentence.text}}</p>
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
      
    }),
  },
  computed: {
    ...mapGetters({
      sentences: 'learn/sentences',
      currentSentence: 'learn/currentSentence',
    }),
  },
  async mounted(){
    this.$store.dispatch('learn/load', {what: 'sentence'});
  },
  watch: {
    
  }
}
</script>

<style scoped>
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
.box:hover {
  background-color: #cecada;
}
p {
  cursor: pointer;
}
</style>
