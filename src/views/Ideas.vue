<template>
<div class="section columns is-multiline">

  <div
    v-if="!idea.archived"
    v-for="idea in ideas" :key="idea._id" 
    class="column is-12 border">

    <div class="level">
      <div class="level-left">
        <a :href="idea.idea" class="is-size-4">{{idea.video.snippet.title}}</a>
      </div>
      <div class="level-right">
        <a :href="`https://www.youtube.com/channel/${idea.video.snippet.channelId}/videos`"
        >{{idea.video.snippet.channelTitle}}</a>
      </div>
      
    </div> <!-- name and channel -->

    <div class="level">
      <div class="level-left">
        
        <div class="level-item">
          <img
            v-if="idea.category === 'youtube'" 
            src="@/assets/images/youtube.png" width="60" height="30"> 
        </div> <!-- logo -->
        <div
          @click="$store.dispatch('ideas/deleteIdea', {id: idea._id})" 
          class="level-item">
          <i v-if="idea.finished" class="fas fa-check fa-2x"></i>
          <i v-if="!idea.finished" class="fas fa-times fa-2x"></i>
        </div> <!-- check or x icon -->
        <div class="level-item">
          <i 
            @click="$store.dispatch('ideas/addToArchive', {id: idea._id})"
            class="fas fa-archive fa-2x"></i>
        </div> <!-- archive icon -->
        <div class="level-item">
          <span class="is-size-5">
            Published: {{moment(idea.video.snippet.publishedAt).startOf('day').fromNow()}}
          </span>
        </div> <!-- moment -->  
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

    <a :href="idea.idea">
      <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr>
    </a>

    

    <progress-bar
      :duration="moment.duration(idea.video.contentDetails.duration).asMinutes()"
      :id="idea._id" 
      :progress="idea.progress">
    </progress-bar><hr> <!-- progress -->

    
    
    
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
