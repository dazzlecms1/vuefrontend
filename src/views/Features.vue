<template>
<div class="section columns is-multiline">
  <div
    v-for="f in features" :key="f._id" 
    class="column is-12"></div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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
      redirect: 'features/redirect',
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
    if(this.redirect) {
      this.$store.commit('features/redirect', false);
    }
    await delay(2000);
    this.$store.commit('features/notification', {show: false, text: ''});
  },
  watch: {
    
  }
}
</script>

<style>

</style>
