<template>
<div class="section columns is-multiline">

  <div
    v-if="!idea.archived"
    v-for="idea in ideas" :key="idea._id" 
    class="column is-12 box">

    <progress-bar
      :duration="idea.duration"
      :id="idea._id" 
      :progress="idea.progress"></progress-bar><hr>

    <div class="level">
      <div class="level-left">
        <a :href="idea.idea" class="is-size-4">{{idea.name}}</a>
      </div>
      <div class="level-right">
        
        <div class="level-item">
          <img
            v-if="idea.category === 'youtube'" 
            src="@/assets/images/youtube.png" width="60" height="30"> 
        </div> <!-- logo -->
        <div
          @click="$store.dispatch('ideas/deleteIdea', {id: idea._id})" 
          class="level-item">
          <i v-if="idea.finished" class="fas fa-check fa-lg"></i>
          <i v-if="!idea.finished" class="fas fa-times fa-lg"></i>
        </div> <!-- check or x icon -->
        <div class="level-item">
          <i 
            @click="$store.dispatch('ideas/addToArchive', {id: idea._id})"
            class="fas fa-archive"></i>
        </div> <!-- archive icon -->

      </div>
    </div>

    <div class="level">
      <div class="level-left">
        {{idea.author}}
      </div>
      <div class="level-right">
        <div class="level-item">
          <i class="far fa-comments fa-2x"></i>
        </div>
        <div class="level-item">
          <i class="far fa-comment fa-2x"
            @click="$store.commit('ideas/commentModal', {active: true, id: idea._id})">
          </i>
        </div>
      </div>
    </div><hr>
    
    <div 
      class="column is-10 is-offset-1">
      <comment :comments="idea.comments"></comment>
    </div> <!-- one comment -->

  </div>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import ProgressVue from '../components/Progress.vue';
import CommentVue from '../components/Comment.vue';


export default {
  components: {
    progressBar: ProgressVue,
    comment: CommentVue,
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
