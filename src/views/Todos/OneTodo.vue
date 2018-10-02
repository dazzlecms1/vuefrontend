<template>
<div class="section columns">
  <div class="column is-8 is-offset-2">
    <div class="box">
      <div class="level">
        <div class="level-left">
          <div class="has-text-weight-bold is-size-4">{{todo.text}}</div>
          <div class="has-text-grey is-size-6">{{todo.category}}</div>
        </div>
        <div class="level-right">
          <div>
            <div
              @click="showModal(true)" 
              class="box" id="icon">
              <i class="fas fa-edit fa-2x"></i>
            </div>
          </div>

          <div>
            <div class="box" id="icon">
              <i class="fas fa-times fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div :class="modalClass">
    <div
      @click="showModal(false)" 
      class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          @click="showModal(false)"
          class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Text</label>
          <div class="control">
            <input class="input" type="text" v-model="text">
          </div>
        </div>

        <div class="field">
          <label class="label">Category</label>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select v-model="category">
                <option>improve</option>
                <option>sport</option>
                <option>food</option>
                <option>learn</option>
                <option>enjoy</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button 
          @click="updateTodo({text, category})"
          :class="loadingClass">Save changes
          <div class="ld ld-square ld-spin-fast"></div>
        </button>
        <button
          @click="showModal(false)"
          class="button">Cancel</button>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      modalClass: 'modal',
      text: '',
      category: '',
      loadingClass: 'button is-link ld-ext-right'
    }
  },
  methods: {
    ...mapActions({
      updateTodo: 'todos/updateTodo'
    }),
    showModal(bool) {
      if(bool) {
        this.modalClass += ' is-active';
      } else {
        this.modalClass = 'modal';
      }
    }
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
    '$store.state.todos.loading'(v) {
      if(v) {
        this.loadingClass += ' running';
      } else {
        this.loadingClass = 'button is-link ld-ext-right';
        this.modalClass = 'modal';
      }
    },
  },
}
</script>

<style>
.level-left {
  display: block;
}
.fas {
  cursor: pointer;
}
#icon:hover {
  background-color: azure;
}
</style>
