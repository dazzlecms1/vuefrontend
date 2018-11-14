<template>
  <div :class="show ? 'modal is-active' : 'modal'">
    <div
      @click="$store.commit('ideas/quickAddIdea', {active: false})" 
      class="modal-background">
    </div>

    <div class="modal-card">

    <header class="modal-card-head">
      <p class="modal-card-title is-size-3">Quick add comment</p>
      <button
        @click="$store.commit('ideas/quickAddIdea', {active: false})" 
        class="delete is-large">
      </button>
    </header> <!-- header -->

    <section class="modal-card-body">
      <div class="field">
        <div class="label is-size-4">URL</div>
        <div class="control">
          <input v-model="idea" class="input is-large" :autofocus="true">
        </div>
      </div> <!-- input -->
      <div class="field has-addons">
        <p 
          v-for="button in buttons" :key="button._id"
          class="control"> 
          <a
            @click="chooseGenre({genre: button.genre})"
            :class="button.active ? activeBtn : inactiveBtn">
            <span class="icon">
              <i :class="button.icon"></i>
            </span>
            <span>{{button.genre}}</span>
          </a>
        </p>
      </div> <!-- controls -->
      
    </section> <!-- body -->

    <footer class="modal-card-foot">
      <button
        @click="() => {
          $store.dispatch('ideas/quickAddIdea', {idea, genre: buttons.filter(b => b.active)[0]['genre']});
          this.idea = '';
        }"
        class="button is-link is-fullwidth is-large">
        <span class="icon">
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
      buttons: [
        {_id: 1, genre: 'sport',  icon: 'fas fa-football-ball', active: true},
        {_id: 2, genre: 'gaming', icon: 'fas fa-gamepad',       active: false},
        {_id: 3, genre: 'dev',    icon: 'fab fa-js',            active: false},
        {_id: 4, genre: 'podcast',    icon: 'fab fa-js',            active: false},
      ],
      inactiveBtn: 'button is-large',
      activeBtn: 'button is-large is-link',
    }
  },
  computed: {
    ...mapGetters({
      show: 'ideas/showQuickAddModal',
    })
  },
  methods: {
    chooseGenre({genre}) {
      this.buttons = this.buttons.map(button => {
        if(button.active) {
          button.active = false;
        }

        if(button.genre === genre) {
          button.active = true;
        }

        return button;
      });

    },
  },
  mounted() {
    
  }
}
</script>
