<template>

<div class="column is-12">


  <div class="columns box is-multiline">
    <div class="column is-12">
      <button 
        @click="$store.commit('ideas/quickAddIdea', {active: true})"
        :class="button + ' is-rounded'">Quick Add</button>
    </div> <!-- quick add -->


    <div
      v-for="b in watchPriority" :key="b._id" 
      class="column is-3">
      <button 
        @click="$store.commit('ideas/setFilter', {filter: b.filter})"
        :class="filter === b.filter ? activeButton : button">{{b.filter.length === 0 ? 'All' : b.filter}}</button>
    </div> 

    <div
      v-for="b in genre" :key="b._id" 
      class="column is-3">
      <button :class="button"
        >{{b.genre}}
      </button>
    </div> 



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
      watchPriority: [
        {_id: 'p1', filter: ''},
        {_id: 'p2', filter: 'low'},
        {_id: 'p3', filter: 'high'},
        {_id: 'p4', filter: 'current'},
      ],
      genre: [ 
        {_id: 'g1', genre: 'sports',
          channels: [
            {_id: 'c1', name: 'Chael Sonnen'},
            {_id: 'c2', name: 'Behind The Gloves'},
          ],
        },
        {_id: 'g2', genre: 'games'},
        {_id: 'g3', genre: 'dev'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      filter: 'ideas/filter',
    }),
  }
  
}
</script>

