<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-start">
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create</router-link>
    </div>


  </nav><br>
      <router-view/>

</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
    })
  },
  watch: {
    
  },
  async mounted() {
    
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
