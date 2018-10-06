<template>
<ul>
  <li v-for="word in sidebar" :key="word._id">
    
  <span :class="'tag is-medium ' + (word.type === 'verb' ? 'is-primary' : 'is-link')">
    {{word.name}}
    <button
      @click="$store.commit('learn/sidebar', {word, operation: 'remove'})"
      class="delete is-small"></button>
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
      sidebar: 'learn/sidebar',
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
