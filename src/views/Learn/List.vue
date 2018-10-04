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
          @click="activeTab = 'verb'"
          :class="activeTab === 'verb' ? 'is-active' : ''">verbs
        </a>

        <a 
          @click="activeTab = 'noun'"
          :class="activeTab === 'noun' ? 'is-active' : ''">nouns
        </a>
      </p> <!-- tabs -->
      <div 
        class="panel-block">

        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="panel-icon"><i class="fas fa-book"></i></span>
              <p class="level-item is-size-5">text</p>
            </div>
          </div>

          <div class="level-right"><i class="far fa-trash-alt fa-lg"></i></div>

        </div>

      </div> <!-- is-active -->

      <div class="panel-block">
        <button
          class="button is-link is-outlined is-fullwidth">
          Inactive button
        </button>
      </div> <!-- load more button -->
    </nav>
  </div>
  

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      search: '',
      activeTab: 'verb'
    }
  },
  methods: {
    ...mapActions({
      load: 'learn/load'
    }),
    async load(element) {
      if(this[element].length === 0 && this.activeTab === element) {
        return this.$store.dispatch('learn/load', {element});
      }
    }
  },
  computed: {
    ...mapGetters({
      verb: 'learn/verb',
      noun: 'learn/noun',
    })
  },
  async mounted(){
    this.load(this.activeTab); 
  },
  watch: {
    activeTab(val) {
      this.load(val);
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
