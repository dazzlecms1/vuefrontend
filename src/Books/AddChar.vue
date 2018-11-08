<template>
<div class="field has-addons">
  <div class="control is-expanded">
    <input 
      class="input" 
      type="text" 
      v-model="name">
  </div>
  <div class="control">
    <a
      @click="click({name})" 
      class="button is-info">Click</a>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    ...mapActions({
      add: 'books/add'
    }),
    click({name}) {
      if(name.length < 15 && this.name.length >= 2) {
        this.add({name});
        this.name = '';
      }
    },
  }
}
</script>