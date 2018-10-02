<template>
<div class="section">
  <div class="columns">

    <nav class="panel column is-10 is-offset-1">
      <p class="panel-heading">
        todos {{count}}
      </p> <!-- heading -->
      <div class="panel-block">
        <p class="control has-icons-left">
          <input v-model="search" class="input" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div> <!-- search -->
      <p class="panel-tabs"> <!-- is-active -->
        <a v-for="category in categories" :key="category"
          @click="panelTabsClass(category)" 
          :class="activeTab === category ? 'is-active' : ''">{{category}}</a>
          
      </p> <!-- tabs -->
      <div 
        v-for="todo in filteredTodos" :key="todo._id"
        class="panel-block">

        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="panel-icon"><i class="fas fa-book"></i></span>
              <p 
                @click="getOne({id: todo._id})"
                :class="itemClass({category: todo.category})"
              >{{todo.text}}</p>
            </div>
          </div>

          <div class="level-right">
            <i  
              @click="deleteTodo({id: todo._id, fromOneTodo: false})" 
              class="far fa-trash-alt fa-lg"
            ></i>
          </div>

        </div>

      </div> <!-- is-active -->

      <div class="panel-block">
        <button
          @click="loadMore()" 
          class="button is-link is-outlined is-fullwidth">
          Load more
        </button>
      </div> <!-- load more button -->
    </nav>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';


export default {
  components: {
    
  },
  data() {
    return {
      activeTab: 'all'
    }
  },
  methods: {
    ...mapActions({
      deleteTodo: 'todos/deleteTodo',
      getOne: 'todos/getOne',
      loadMore: 'todos/loadMore'
    }),
    itemClass({category}) {
      const defaultClass = 'level-item is-size-5 '
      switch(category) {
        case 'improve':
          return defaultClass +  'has-text-primary';
        case 'sport':
          return defaultClass +  'has-text-info';
        case 'food':
          return defaultClass +  'has-text-success';
        case 'learn':
          return defaultClass +  'has-text-warning';
        case 'enjoy':
          return defaultClass +  'has-text-danger';
        default: return defaultClass;
      }
      
    },
    panelTabsClass(tab) {
      this.activeTab = tab;
      this.$store.commit('todos/setActiveFilter', tab);
    } 
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos',
      count: 'todos/count',
      categories: 'todos/categories',
    }),
    filteredTodos(arg) {
      return (
        this.$store.getters['todos/todos'].filter(todo => 
          todo.text.match(this.$store.getters['todos/search'])
        )
      )
    },
    search: {
      get() {
        return this.$store.state.todos.search
      },
      set(value) {
        this.$store.commit('todos/search', value)
      }
    }  
  },
  async mounted(){
    await this.$store.dispatch('todos/getAll');
    if(this.$store.state.todos.redirect) {
      this.$store.commit('todos/redirect', false);
    }
  },
  watch: {
    '$store.state.todos.redirect'(v) {
      if(v) this.$router.push({path: '/todos/' + this.$store.getters['todos/oneTodo']._id}) 
    },
    
  }
}
</script>

<style>
.panel-block {
  display: block;
}
.level-item {
  cursor: pointer;
}
</style>
