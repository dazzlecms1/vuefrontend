<template>
  <div :class="show ? 'modal is-active' : 'modal'">
    <div
      @click="$store.commit('ideas/quickAddIdea', {active: false})" 
      class="modal-background">
    </div>

    <div class="modal-card">

    <header class="modal-card-head">
      <p class="modal-card-title">Quick add comment</p>
      <button
        @click="$store.commit('ideas/quickAddIdea', {active: false})" 
        class="delete"></button>
    </header> <!-- header -->

    <section class="modal-card-body">
      <div class="field">
        <div class="label">URL</div>
        <div class="control">
          <input v-model="idea" class="input" :autofocus="true">
        </div>
      </div>
    </section> <!-- body -->

    <footer class="modal-card-foot">
      <button
        @click="() => {
          $store.dispatch('ideas/quickAddIdea', {idea});
          this.idea = '';
        }"
        class="button is-link is-fullwidth is-medium">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Save</span>
      </button>
    </footer> <!-- button -->

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      idea: '',
    }
  },
  computed: {
    ...mapGetters({
      show: 'ideas/showQuickAddModal',
    })
  },
  mounted() {
    
  }
}
</script>
