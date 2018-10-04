<template>
<div class="column is-6 is-offset-3">
<h1>Create word.</h1>
<div class="field">
  <label class="label">Type</label>
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select v-model="type">
        <option>noun</option>
        <option>verb</option>
      </select>
    </div>
  </div>
</div> <!-- noun verb or sentence -->

<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" v-model="name">
  </div>
</div>

<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button
      @click="createWord({name, type})"
      class="button"
      >Submit
    </button>
  </p>
  <p class="control">
    <button class="button">Empty</button>
  </p>
</div>


  

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      name: '',
      type: ''
    }
  },
  methods: {
    ...mapActions({
      createWord: 'learn/createWord'
    }),
  },
  computed: {
    ...mapGetters({
      // loading: 'todos/loading',
      // redirect: 'todos/redirect',
    })
  },
  async mounted(){
    
  },
  watch: {
    // '$store.state.todos.redirect'(v) {
    //   if(v) this.$router.push({path: '/'}) 
    // },
    
    // '$store.state.todos.loading'(v) {
    //   if(v) {
    //     this.loadingClass += ' running';
    //   } else {
    //     this.loadingClass = 'button is-link ld-ext-right'
    //   }
    // },
  }
}
</script>
