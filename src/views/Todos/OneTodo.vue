<template>
<div class="section columns">
  <div class="column">
    <div class="box">
      <div class="level">
        <div class="level-left">
          <p class="has-text-weight-bold is-size-4">{{todo.text}}</p>
          <p class="has-text-grey is-size-6">{{todo.category}}</p>
        </div>
        <div class="level-right">
          <div>
            <div class="box">
              <i class="fas fa-edit fa-2x"></i>
            </div>
          </div>

          <div>
            <div class="box">
              <i class="fas fa-times fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
