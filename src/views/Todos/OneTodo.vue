<template>
<div>one todo </div>
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
      
    })
  },
  computed: {
    ...mapGetters({
      todo: 'todos/oneTodo'
    })
  },
  async mounted(){
    if(this.$store.state.todos.redirect) {
      this.$store.commit('todos/redirect', false);
    } // reset redirect
    if(Object.keys(this.$store.getters['todos/oneTodo']).length === 0) {
      this.$store.dispatch('todos/getOne', {id: this.$route.params.id})
    } // if the page is refreshed from the current id
  },
  watch: {
   
  },
}
</script>
