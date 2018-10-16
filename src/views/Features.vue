<template>
<div class="section columns is-multiline">
  <div
    v-for="f in features" :key="f._id" 
    class="column is-12"></div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';


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
      features: 'features/features',
    }),
    // filteredTodos(arg) {
    //   return (
    //     this.$store.getters['todos/todos'].filter(todo => 
    //       todo.text.match(this.$store.getters['todos/search'])
    //     )
    //   )
    // },
    // search: {
    //   get() {
    //     return this.$store.state.todos.search
    //   },
    //   set(value) {
    //     this.$store.commit('todos/search', value)
    //   }
    // }  
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>

<style>

</style>
