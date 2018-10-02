<template>
  <div id="app">
    <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
  </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact="">
        Todos
      </router-link>
      <router-link class="navbar-item" to="/create">
        Create
      </router-link>
      <router-link class="navbar-item" to="/learn">
        Learn
      </router-link>
      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Strapi</a>
        <div class="navbar-dropdown is-boxed">
          <router-link class="navbar-item" 
            :to="{name: 'strapi'}">Strapi</router-link>
        </div>
      </div> -->
    </div>

</nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      
    }
  }
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
</style>
