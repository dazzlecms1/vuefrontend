<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" >
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact>Home</router-link>
      <router-link class="navbar-item" to="/brands" exact>brands</router-link>
      <!-- <router-link class="navbar-item" to="/about" exact>about</router-link> -->
    </div>


  </nav><br><br><br><br>

  <div class="columns">
    <div class="column is-12">
      <router-view/>
    </div>
  </div>
  

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  components: {
    
  },
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
       
    }),
  },
  watch: {
    
  },
  async mounted() {
    await this.$store.dispatch('sites/getAllBrands', {name: 'asd'})
    await this.$store.dispatch('sites/getAllSites', {name: 'asd'})
    await this.$store.dispatch('sites/getAllTemplates', {name: 'asd'})
  }
};
</script>

<style>
* {
  font-size: 24px;
}
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
  padding: 5px;
  white-space: pre-line
}
</style>
