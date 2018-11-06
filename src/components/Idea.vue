<template>
<div class="box columns">
  <div class="column is-3">
    <a :href="idea.idea" target="_blank">
      <!-- <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr> -->
      <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr>
    </a> 
  </div> <!-- img -->

  <div class="column is-9">
    <div class="columns is-multiline">
      <div class="column is-8">
        <a 
          target="_blank" 
          :href="idea.idea" 
          class="is-size-3 has-text-black-bis">{{idea.video.snippet.title}}
        </a>
      </div> <!-- title -->

      <div class="column is-4">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <priority :idea="idea"></priority>
            </div>
          </div> <!-- priority -->
          <div class="level-right">

            <div class="field has-addons">
              <p class="control"> 
                <a
                  @click="click({id: idea._id})"
                  :class="loading.button">
                  <span class="icon">
                    <i class="fas fa-archive"></i>
                  </span>
                  <span>Archive</span>
                  <div :class="loadingElement({id: idea._id})"></div> 
                </a>
              </p> <!-- archive -->
              <p class="control"> 
                <a
                  @click="$store.dispatch('ideas/deleteIdea', {id: idea._id})"
                  :class="loading.button">
                  <span class="icon">
                    <i class="fas fa-times"></i>
                  </span>
                  <span>Remove</span>
                </a>
              </p> <!-- remove -->
            </div> <!-- archive and remove -->

          </div>
        </div> <!-- priority | archive, delete --> 
      </div> <!-- right from title -->

      <div class="column is-4">
        <a 
          target="_blank" 
          :href="`https://www.youtube.com/channel/${idea.video.snippet.channelId}/videos`"
          class="has-text-grey-dark is-size-4"
          >{{idea.video.snippet.channelTitle}} {{moment(idea.video.snippet.publishedAt).startOf('day').fromNow()}}
        </a>
      </div> <!-- channel -->

      <div class="column is-8">
        <div class="field has-addons">
          <p class="control"> 
            <a
              @click="$store.commit('ideas/commentModal', {active: true, id: idea._id})"  
              class="button is-large">
              <span class="icon">
                <i class="far fa-comment"></i>
              </span>
              <span>Add comment</span>
            </a>
          </p>
          <p class="control"> 
            <a
              @click="showComments = !showComments" 
              class="button is-large">
              <span class="icon">
                <i class="far fa-comments"></i>
              </span>
              <span>Comments</span>
            </a>
          </p>
          <p class="control"> 
            <a
              @click="showProgress = !showProgress" 
              class="button is-large">
              <span class="icon">
                <i class="fas fa-spinner"></i>
              </span>
              <span>Progress</span>
            </a>
          </p>
        </div> <!-- controls -->
      </div> <!-- add a comment, show progress bar, show all comments -->
    </div>
    
    <progress-bar
      :show="showProgress"
      :progress="idea.progress"
      :duration="moment.duration(idea.video.contentDetails.duration).asMinutes()"
      :id="idea._id"
    ></progress-bar> <!-- shown by default -->

    <comment
      :show="showComments" 
      :comments="idea.comments">
    </comment> <!-- hidden by default -->

  </div> <!-- progress bar | comments -->
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';
import ProgressVue from '../components/Progress.vue';
import CommentVue from '../components/Comment.vue';
import PriorityVue from '../components/Priority.vue';
import SecondNavVue from '../components/SecondNav.vue';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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
      showProgress: true,
      showComments: false,
    }
  },
  methods: {
    ...mapActions({
      getAll: 'ideas/getAll',
    }),
    async click({id}) {
      this.$store.commit('ideas/loading', {id});
      this.loading.button += 'running';
      await delay(1200);
      this.loading.button = this.loading.btn; 
      this.$store.dispatch('ideas/addToArchive', {id: this.idea._id})
    },
    loadingElement({id}) {
      if(id === this.loading.current) {
        const animation = this.loading.animations[Math.floor(Math.random()*this.loading.animations.length)];
        const loader = this.loading.loaders[Math.floor(Math.random()*this.loading.loaders.length)];
        
        return `ld ${loader} ${animation}`;
      } 

    }
  },
  computed: {
    ...mapGetters({
      ideas: 'ideas/ideas',
      loading: 'ideas/loading',
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
