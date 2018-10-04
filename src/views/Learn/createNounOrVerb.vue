<template>
<div class="column is-6 is-offset-3">
<h1>Creating Nouns and Verbs Here.</h1>
<div class="field">
  <label class="label">What type</label>
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select v-model="element">
        <option>noun</option>
        <option>verb</option>
      </select>
    </div>
  </div>
</div> <!-- noun verb or sentence -->

<div class="field">
  <label class="label">Text</label>
  <div class="control">
    <input class="input" type="text" v-model="text">
  </div>
</div>

<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button
      @click="createNounOrVerb({element, text})"
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
      text: 'defaultval',
      element: 'noun'
    }
  },
  methods: {
    ...mapActions({
      createNounOrVerb: 'learn/createNounOrVerb'
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
