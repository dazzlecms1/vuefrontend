<template>
<div class="column is-6 is-offset-3">
<h1>Create Sentence.</h1>

<div class="field">
  <label class="label">Text</label>
  <div class="control">
    <input class="input" type="text" v-model="text">
  </div>
</div>

<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button
      @click="create({what: 'sentence', text})"
      class="button"
      >Submit
    </button>
  </p>
</div>


  

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions({
      create: 'learn/create'
    }),
  },
  computed: {
    ...mapGetters({
      
    }),
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
