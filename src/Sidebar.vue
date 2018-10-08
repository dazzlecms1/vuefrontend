<template>
<ul>
  <li class="has-text-centered" v-for="word in sidebar" :key="word._id">
    
  <span 
    :class="'tag is-medium ' + (word.type === 'verb' ? 'is-primary' : 'is-link')"
    @click="$store.commit('learn/moveWord', {word, operation: 'toSentence'})"
  >{{word.name}}
    <button
      @click="$store.commit('learn/sidebar', {word, operation: 'remove'})"
      class="delete is-small">
    </button>
  </span>
  </li>
</ul>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      
    }),
  },
  computed: {
    ...mapGetters({
      sidebar: "learn/sidebar",
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
<style scoped>
span {
  cursor: pointer;
}
</style>
