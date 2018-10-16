<template>
<div class="section columns is-multiline">
  <div
    v-for="f in features" :key="f._id" 
    class="column is-12 box">

    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title is-3">{{f.name}}</p>
        </div>
        <div class="level-item">
          <p class="title is-5">{{f.description}}</p>
        </div>
      </div>

      <div class="level-right">
        <button
          :class="removeButtonClass({id: f._id})"
          @click="remove({id: f._id})"
          >Delete<div class="ld ld-square ld-tick"></div>
        </button>
      </div>
    </div>

  </div>
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
      remove: 'features/remove',
    }),
    removeButtonClass() {
      return 'button ld-ext-right';
    }
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
    this.$store.dispatch('features/getAll'); // load all notifications

    if(this.redirect) {
      this.$store.commit('features/redirect', false);
    } // set redirect to false
    await delay(2000);
    this.$store.commit('features/notification', {show: false, text: ''}); // hide notification

   

  },
  watch: {
    
  }
}
</script>

<style>

</style>
