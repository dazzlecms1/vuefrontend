<template>
<div class="column is-6 is-offset-3">

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

<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button
      @click="create({text, category})"
      :class="loadingClass"
      >Submit
      <div class="ld ld-square ld-tick"></div>
    </button>
  </p>
  <p class="control">
    <button @click="reset()" class="button">Reset</button>
  </p>
</div>


  

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      text: '',
      category: '',
      loadingClass: 'button is-link ld-ext-right'
    }
  },
  methods: {
    ...mapActions({
      create: 'todos/create'
    }),
    reset() {
      console.log('reset button');
    }
  },
  computed: {
    ...mapGetters({
      loading: 'todos/loading',
      redirect: 'todos/redirect',
    })
  },
  async mounted(){
  },
  watch: {
    '$store.state.todos.redirect'(v) {
      if(v) this.$router.push({path: '/'}) 
    },
    
    '$store.state.todos.loading'(v) {
      if(v) {
        this.loadingClass += ' running';
      } else {
        this.loadingClass = 'button is-link ld-ext-right'
      }
    },
  }
}
</script>
