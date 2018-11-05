<template>
<div class="section columns is-multiline">
  <second-nav></second-nav>
  <div
    class="column is-12" 
    v-for="idea in ideas" 
    :key="idea._id">
    <idea :idea="idea"></idea>
  </div>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import IdeaVue from '../components/Idea.vue';
import SecondNavVue from '../components/SecondNav.vue';



export default {
  components: {
    idea: IdeaVue,
    secondNav: SecondNavVue,
  },  
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      getAll: 'ideas/getAll',
    }),
  },
  computed: {
    ...mapGetters({
      ideas: 'ideas/ideas',
    }),
  },
  async mounted(){
    await this.getAll();
     
    //this.$store.dispatch('ideas/getAll'); // load all notifications
  },
  watch: {
    
  }
}
</script>

<style>

</style>
