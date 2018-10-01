<template>
<div class="section">
  <div class="columns">

    <nav class="panel column is-10 is-offset-1">
      <p class="panel-heading">
        todos
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">all</a>
      </p>
      <a class="panel-block is-active">
        <span class="panel-icon"><i class="fas fa-book"></i></span>bulma
      </a>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          reset all filters
        </button>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
    }),
    
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    await this.$store.dispatch('todos/getAll');
  },
  watch: {

  }
}
</script>
