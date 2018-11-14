<template>
<div class="box columns">
  <div class="column is-3">
    <a :href="idea.idea" target="_blank">
      <!-- <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr> -->
      <img :src="idea.video.snippet.thumbnails.high.url" alt=""><hr>
    </a> 


        <div :class="showDropdown ? 'dropdown is-active' : 'dropdown'"> 
          <div 
            @click="showDropdown = !showDropdown"
            class="dropdown-trigger"> <!-- is-active is for dropdown too -->
     
      
      
          <p class="control">
            <a
              class="button is-large">
              <span class="icon">
                <i :class="genreIcons({genre: idea.genre})"></i>
              </span>
              <span class="is-size-4">{{idea.genre}}</span>
              <span class="icon">
                <i class="fas fa-angle-down"></i>
              </span>
            </a>
          </p>

          </div>
          <div class="dropdown-menu" id="dropdown-menu">
            <div  
              v-for="g in genres" :key="g.name"
              class="dropdown-content">
              <a
                @click="clickedItem({genre: g, idea})"
                :class="g.active ? 'dropdown-item is-active is-size-4' : 'dropdown-item is-size-4'">{{g.name}}</a>
            </div>
          </div>
        </div> <!-- dropdown is-active -->



    
  </div> <!-- img -->

  <div class="column is-9">
    <div class="columns is-multiline">
      <div class="column is-8">
        <a 
          target="_blank" 
          @click="goToUrl({url: idea.idea})" 
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
                  @click="$store.dispatch('ideas/addToArchive', {id: idea._id})"
                  class="button is-large">
                  <span class="icon">
                    <i class="fas fa-archive"></i>
                  </span>
                  <span>Archive</span>
                </a>
              </p> <!-- archive -->
              <p class="control"> 
                <a
                  @click="$store.dispatch('ideas/deleteIdea', {id: idea._id})"
                  class="button is-large">
                  <span class="icon">
                    <i class="fas fa-times"></i>
                  </span>
                  <span>Remove</span>
                </a>
              </p> <!-- remove -->
            </div> <!-- archive and remove -->

          </div> <!-- archive, delete -->
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
      genres: [
        {name: 'sport', active: false},
        {name: 'dev', active: false},
        {name: 'gaming', active: false},
        {name: 'podcast', active: false},
      ],
      showDropdown: false,
    }
  },
  methods: {
    ...mapActions({
      getAll: 'ideas/getAll',
    }),
    genreIcons({genre}) {
      if(genre === 'sport') {
        return 'fas fa-football-ball';
      } else if (genre === 'gaming') {
        return 'fas fa-gamepad';
      } else if (genre === 'dev') {
        return 'fab fa-js';
      } else {
        return 'fas fa-plus'
      }
    },
    async goToUrl({url}) {
      
      const minutes = this.idea.progress;
      if(minutes !== 0) {
        url += `&t=${minutes}m0s`;
      }
      window.open(url, '_blank');

      await this.$store.dispatch('ideas/setPriority', {id: this.idea._id, priority: 'current'});

    },
    clickedItem({genre, idea}) {
      this.genres = this.genres.map(g => {
        if(g.active) {
          g.active = false;
        }

        if(g.name === genre) {
          g.active = true;
        }

        return g;
      });

      this.showDropdown = false;

      if(genre.name !== this.idea.genre) {
        this.$store.dispatch('ideas/setGenre', {genre: genre.name, id: idea._id})
      }
      
    },
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
