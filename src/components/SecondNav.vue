<template>

<div class="column is-12">


  <div class="columns box is-multiline">
    <div class="column is-12">
      <button 
        @click="$store.commit('ideas/quickAddIdea', {active: true})"
        :class="button + ' is-rounded'">Quick Add</button>
    </div> <!-- quick add -->


    <div
      v-for="b in buttons" :key="b._id" 
      class="column is-3">
      <button 
        @click="$store.commit('ideas/setFilter', {filter: b.filter})"
        :class="filter === b.filter ? activeButton : button">{{b.filter.length === 0 ? 'All' : b.filter}}</button>
    </div> <!-- high priority -->

  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      button: 'button is-large is-fullwidth is-rounded',
      activeButton: 'button is-large is-fullwidth is-rounded is-link',
      buttons: [
        {_id: 1, filter: ''},
        {_id: 2, filter: 'low'},
        {_id: 3, filter: 'high'},
        {_id: 4, filter: 'current'},
      ],
    }
  },
  computed: {
    ...mapGetters({
      filter: 'ideas/filter',
    }),
  }
  
}
</script>

