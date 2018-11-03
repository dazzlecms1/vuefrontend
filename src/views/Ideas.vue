<template>
<div class="section columns is-multiline">
  <div
    v-if="!idea.archived"
    v-for="idea in ideas" :key="idea._id" 
    class="column is-12 border">
    
    <!-- priority -->
    <priority :idea="idea"
    ></priority>
    

    <div class="columns">
      <div class="column is-1">
        <a :href="idea.idea" target="_blank">
          <!-- <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr> -->
          <img :src="idea.video.snippet.thumbnails.default.url" alt=""><hr>
        </a> <!-- img -->
      </div> <!-- 1 -->

      <div class="column is-11">
        <div class="level">
          <a 
            target="_blank" 
            :href="idea.idea" 
            class="is-size-5 has-text-black-bis">{{idea.video.snippet.title}}</a>
        </div>


        <div class="level">
          <div class="level-left">
            <a 
              target="_blank" 
              :href="`https://www.youtube.com/channel/${idea.video.snippet.channelId}/videos`"
              class="has-text-grey-dark"
              >{{idea.video.snippet.channelTitle}}
            </a>
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
          </div> <!-- left -->

          <div class="level-right">
            <div class="level-item">
              <i 
                class="far fa-comments fa-2x"></i>
            </div>
            <div class="level-item">
              <i class="far fa-comment fa-2x"
                @click="$store.commit('ideas/commentModal', {active: true, id: idea._id})">
              </i>
            </div>
          </div> <!-- right -->
        </div>
        <!-- left: logo close archive published | right: showComments addComment-->
      </div> <!-- 11 -->
    </div>

    <progress-bar
      :duration="moment.duration(idea.video.contentDetails.duration).asMinutes()"
      :id="idea._id" 
      :progress="idea.progress">
    </progress-bar> <!-- progress -->
      
    <comment :comments="idea.comments"></comment>

  </div>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import ProgressVue from '../components/Progress.vue';
import CommentVue from '../components/Comment.vue';
import PriorityVue from '../components/Priority.vue';


export default {
  components: {
    progressBar: ProgressVue,
    comment: CommentVue,
    priority: PriorityVue,
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
