<template>
<div class="column is-8 is-offset-2">
  <div class="columns is-multiline box">
    <div class="column is-6">
      <span class="is-3 title">{{book.title}}</span>
    </div>
    <div class="column is-6">
      <span class="is-5 title">{{book.author}}</span>
    </div>
  </div>
  <span class="title is-2">Heroes</span><hr>

  <div class="field has-addons">
    <div class="control is-expanded">
      <input class="input is-large is-rounded" type="text" v-model="newHero">
    </div>
    <div 
      class="control"> 
      <a
        class="button is-large is-rounded">
        <span class="icon">
          <i class="fas fa-book"></i>
        </span>
        <span>Name</span>
      </a>
    </div>
  </div>

  <hr>
  <hero></hero>
  <hero></hero>
  <hero></hero>
  <hero></hero>
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import HeroVue from './Hero.vue';


export default {
  components: {
    hero: HeroVue,    
  },  
  data() {
    return {
      newHero: '',
    }
  },
  methods: {
    ...mapActions({
      
    }),
  },
  computed: {
    ...mapGetters({
      book: 'books/book',
    }),
  },
  async mounted(){
    await this.$store.dispatch('books/getBook', {id: this.$route.params.id});
  },
  watch: {
    
  }
}
</script>

<style>

</style>
