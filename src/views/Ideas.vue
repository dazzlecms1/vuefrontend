<template>
<div class="section columns is-multiline">


  <div
    v-if="!idea.archived"
    v-for="idea in ideas" :key="idea._id" 
    class="column is-12 box">

    <div class="level">
      <div class="level-left">
        <a :href="idea.idea">{{idea.name}}</a>
      </div>
      <div class="level-right">
        <div class="level-item">{{idea.category}}</div>
        <div class="level-item">{{idea.finished ? 'finished' : 'not yet'}}</div>
        <div class="level-item">archive?</div>
      </div>
    </div>

    <div class="level">
      <div class="level-left">
        {{idea.author}}
      </div>
      <div class="level-right"><i class="far fa-comment fa-2x"></i></div>
    </div>
    
    

  </div>


</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';


export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      // remove: 'ideas/remove',
      getAll: 'ideas/getAll',
    }),
  },
  computed: {
    ...mapGetters({
      ideas: 'ideas/ideas',
      // oneFeature: 'ideas/oneFeature',
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
