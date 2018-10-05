<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-start">

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Todos</a>
        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/" exact="">
            Todos
          </router-link>
          <router-link class="navbar-item" to="/create">
            Create
          </router-link>
        </div>
      </div> <!-- todos -->

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Create</a>
        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/" exact="">
            Todos
          </router-link>
          <router-link class="navbar-item" to="/create">
            Create
          </router-link>
        </div>
      </div> <!-- create -->

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">List</a>
        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/" exact="">
            Todos
          </router-link>
          <router-link class="navbar-item" to="/create">
            Create
          </router-link>
        </div>
      </div> <!-- list -->



      <router-link class="navbar-item" to="/learn/createWord">
        Create a word
      </router-link>
      <router-link class="navbar-item" to="/learn/createSentence">
        Create a sentence
      </router-link>
      <router-link class="navbar-item" to="/learn/list">
        List of words
      </router-link>
      <router-link class="navbar-item" to="/sentences">
        Sentences
      </router-link>
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
