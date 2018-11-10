<template>
<div class="section columns is-multiline box">
  <button class="button is-fullwidth is-info">Add an url.</button>


</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';




export default {
  components: {
    
  },  
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      
    }),
  },
  computed: {
    ...mapGetters({
      articles: 'articles/articles',
    }),
  },
  async mounted(){
    this.$store.dispatch('articles/getArticles');
  },
  watch: {
    
  }
}
</script>

<style>

</style>
