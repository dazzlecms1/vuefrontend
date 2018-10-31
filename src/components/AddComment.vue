<template>
<div
  v-show="show"
  :class="show ? 'modal is-active' : 'modal'">
  <div
    @click="$store.commit('ideas/commentModal', {active: false, id: []})" 
    class="modal-background"></div>

  <div class="modal-card">

    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button
        @click="$store.commit('ideas/commentModal', {active: false, id: []})"  
        class="delete"></button>
    </header>

    <section class="modal-card-body">
      <div class="field">
        <div class="label">Comment</div>
        <div class="control">
          <textarea v-model="comment" class="textarea"></textarea>
        </div>
      </div>
    </section>

    <footer class="modal-card-foot">
      <button
        @click="$store.dispatch('ideas/addComment', {comment})"
        class="button is-success is-fullwidth is-medium">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Save</span>
      </button>
    </footer>

  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      comment: '',
    }
  },
  methods: {
    ...mapActions({
      
    })
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
