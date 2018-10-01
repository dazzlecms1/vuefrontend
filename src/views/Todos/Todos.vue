<template>
<div class="section">
  <div class="columns">

    <nav class="panel column is-10 is-offset-1">
      <p class="panel-heading">
        todos
      </p> <!-- heading -->
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div> <!-- search -->
      <p class="panel-tabs">
        <a class="is-active">all</a>
      </p> <!-- tabs -->
      <div 
        v-for="todo in todos" :key="todo._id"
        class="panel-block">

        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="panel-icon"><i class="fas fa-book"></i></span>
              <p 
                @click="getOne({id: todo._id})"
                class="level-item">{{todo.text}}</p>
            </div>
          </div>

          <div class="level-right">
            <i  
              @click="deleteTodo({id: todo._id})" 
              class="far fa-trash-alt"></i>
          </div>


        </div>


      </div> <!-- is-active -->

      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          reset all filters
        </button>
      </div> <!-- reset all button -->
    </nav>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      deleteTodo: 'todos/deleteTodo',
      getOne: 'todos/getOne',
    }),
    
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos'
    })  
  },
  async mounted(){
    await this.$store.dispatch('todos/getAll');
    if(this.$store.state.todos.redirect) {
      this.$store.commit('todos/redirect', false);
    }
  },
  watch: {
    
  }
}
</script>

<style>
.panel-block {
  display: block;
}
</style>
