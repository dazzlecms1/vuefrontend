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
    </div>


  </nav><br>
  <p class="title is-3">Just creating a habbit of finishing what I started</p>
  
  <add-comment :show="showCommentModal"></add-comment>

  <router-view/>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddCommentVue from './components/AddComment.vue';

export default {
  components: {
    addComment: AddCommentVue,
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
      showCommentModal: 'ideas/showCommentModal',
    }),
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
