<template>
<div class="box">
  


  <div class="columns">
    <div class="column is-3">
      <a :href="idea.idea" target="_blank">
        <!-- <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr> -->
        <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr>
      </a> <!-- img -->
    </div> <!-- img -->
    <div class="column is-9">
      <div class="columns is-multiline">
        <div class="column is-8">
          <a 
            target="_blank" 
            :href="idea.idea" 
            class="is-size-5 has-text-black-bis">{{idea.video.snippet.title}}
          </a>
        </div> <!-- title -->
        <div class="column is-4">


          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <priority :idea="idea"></priority>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <i 
                  @click="$store.dispatch('ideas/addToArchive', {id: idea._id})"
                  class="fas fa-archive fa-2x">
                </i>
              </div>
              <div class="level-item">
                <div
                  @click="$store.dispatch('ideas/deleteIdea', {id: idea._id})" 
                  class="level-item">
                  <i v-if="idea.finished" class="fas fa-check fa-2x"></i>
                  <i v-if="!idea.finished" class="fas fa-times fa-2x"></i>
                </div> 
              </div>
            </div>
          </div> <!-- priority | archive, delete --> 



        </div> <!-- right from title -->
        <div class="column is-12">
          <a 
            target="_blank" 
            :href="`https://www.youtube.com/channel/${idea.video.snippet.channelId}/videos`"
            class="has-text-grey-dark"
            >{{idea.video.snippet.channelTitle}}
          </a>
        </div> <!-- 2nd column -->
      </div>
    </div>


  </div>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import ProgressVue from '../components/Progress.vue';
import CommentVue from '../components/Comment.vue';
import PriorityVue from '../components/Priority.vue';
import SecondNavVue from '../components/SecondNav.vue';


export default {
  props: ['idea'],
  components: {
    progressBar: ProgressVue,
    comment: CommentVue,
    priority: PriorityVue,
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
    
     
    //this.$store.dispatch('ideas/getAll'); // load all notifications
  },
  watch: {
    
  }
}
</script>

<style>

</style>
