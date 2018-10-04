<template>
<div class="section">
  <h1>List of</h1>
  <div class="columns">

    <nav class="panel column is-10 is-offset-1">
      <p class="panel-heading">
        Heading
      </p> <!-- heading -->
      <div class="panel-block">
        <p class="control has-icons-left">
          <input v-model="search" class="input" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div> <!-- search -->
      <p class="panel-tabs"> <!-- is-active -->
        <a 
          @click="activeTab = ''"
          :class="activeTab === '' ? 'is-active' : ''">All
        </a>

        <a 
          @click="activeTab = 'verb'"
          :class="activeTab === 'verb' ? 'is-active' : ''">verbs
        </a>

        <a 
          @click="activeTab = 'noun'"
          :class="activeTab === 'noun' ? 'is-active' : ''">nouns
        </a>
      </p> <!-- tabs -->

      <div class="panel-block">
        
        <div class="level" v-for="word in filteredWords" :key="word.id">
            <div class="level-left" >
              <div class="level-item">
                <span class="panel-icon"><i class="fas fa-book"></i></span>
                <p class="level-item is-size-5">{{word.name}}</p>
              </div>
            </div> <!-- end of level-left -->
            <div class="level-right">
              <i 
                @click="$store.commit('learn/showModal', true)" 
                class="far fa-edit fa-lg"></i>&nbsp;&nbsp;
              <i
                @click="deleteWord({id: word._id})" 
                class="far fa-trash-alt fa-lg"></i>
            </div> <!-- end of level-right -->
        </div> <!-- end of level -->

      </div> <!-- words end of panel block -->

      <div class="panel-block">
        <button
          class="button is-link is-outlined is-fullwidth">
          Inactive button
        </button>
      </div> <!-- load more button -->
    </nav>
  </div>
  
  <modal></modal>

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import UpdateModalVue from '@/views/Learn/UpdateModal.vue';

export default {
  components: {
    modal: UpdateModalVue
  },
  data() {
    return {
      activeTab: 'verb',
    }
  },
  methods: {
    ...mapActions({
      deleteWord: 'learn/deleteWord',
      updateWord: 'learn/updateWord',
    }),

  },
  computed: {
    ...mapGetters({
      words: 'learn/words'
    }),
    filteredWords() {
      return (
        this.$store.getters['learn/words'].filter(word => 
          word.name.match(this.$store.getters['learn/search'])
        )
      )
    },
    search: {
      get() {
        return this.$store.state.learn.search
      },
      set(value) {
        this.$store.commit('learn/search', value)
      }
    } // simple setter and getter.
  },
  async mounted(){
    this.$store.dispatch('learn/load');
  },
  watch: {
    activeTab(filter) {
      this.$store.commit('learn/setFilter', filter);
    }
  }
}
</script>
<style>
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
.panel-block {
  display: block;
}
.level-item {
  cursor: pointer;
}
</style>
