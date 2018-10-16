<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact>Home</router-link>
      <router-link class="navbar-item" to="/create">Create</router-link>
    </div>


  </nav><br>

  <div 
    v-show="notification.show"
    class="notification is-primary column is-offset-3 is-6">
    <button
      @click="$store.commit('features/notification', {show: false, text: ''})" 
      class="delete"></button>{{notification.text}}
  </div>


  <router-view/>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions({

    }),
  },
  computed: {
    ...mapGetters({
      notification: 'features/notification',
    }),
  },
  watch: {
    '$store.state.todos.redirect'(val) {
      if(val) {
        this.$store.commit('redirect', false);
      }
    },
  },
  async mounted() {
    await delay(5000);
    this.$store.commit('features/notification', {show: false, text: ''});
  }
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
</style>
