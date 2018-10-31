<template>
<div class="section columns is-multiline">

  <div
    v-if="!idea.archived"
    v-for="idea in ideas" :key="idea._id" 
    class="column is-12 box">

    <progress-bar :progress="idea.progress"></progress-bar><hr>

    <div class="level">
      <div class="level-left">
        <a :href="idea.idea" class="is-size-4">{{idea.name}}</a>
      </div>
      <div class="level-right">
        
        <div class="level-item">
          <img
            v-if="idea.category === 'yt'" 
            src="@/assets/images/youtube.png" width="60" height="30"> 
        </div>
        <div class="level-item">
          <i v-if="idea.finished" class="fas fa-check fa-lg"></i>
          <i v-if="!idea.finished" class="fas fa-times fa-lg"></i>
        </div>
        <div class="level-item">
          <i class="fas fa-archive"></i>
        </div>
      </div>
    </div>

    <div class="level">
      <div class="level-left">
        {{idea.author}}
      </div>
      <div class="level-right">
        <i 
          @click="$store.commit('ideas/commentModal', {active: true, id: idea._id})"
          class="far fa-comment fa-2x"></i></div>
    </div><hr>
    
    <div v-for="c in idea.comments" :key="c._id">
      {{c.text}}
    </div>

  </div>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import ProgressVue from '../components/Progress.vue';


export default {
  components: {
    progressBar: ProgressVue,
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
