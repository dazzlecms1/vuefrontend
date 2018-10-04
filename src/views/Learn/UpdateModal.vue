<template>
  <div :class="modalClass">
    <div
      @click="$store.commit('learn/showModal', {bool: false, id: null})" 
      class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          @click="$store.commit('learn/showModal', {bool: false, id: null})"
          class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">

        <div class="field">
          <label class="label">Text</label>
          <div class="control">
            <input class="input" type="text" v-model="name">
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <button 
          @click="updateWord({name})"
          class="button is-primary"
          >Save changes
          <!-- <div class="ld ld-square ld-spin-fast"></div> -->
          <!-- :class="loadingClass" -->
        </button>
        <button
          @click="$store.commit('learn/showModal', {bool: false, id: null})"
          class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    ...mapActions({
      showModal: 'learn/showModal',
      updateWord: 'learn/updateWord',
    }),
  },
  computed: {
    ...mapGetters({
      modalClass: 'learn/modalClass'
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
