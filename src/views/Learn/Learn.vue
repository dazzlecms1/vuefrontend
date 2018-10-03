<template>
<div>
  <div class="box columns is-multiline is-centered">

    <div 
      v-for="exercise in exercises" :key="exercise._id"
      class='column is-2 has-text-centered'>
      <div class="box">
        <router-link 
          tag="i"
          :class="'fas fa-chess-' + exercise.type + ' fa-3x'"
          :to="{path: '/learn/' + exercise._id}">
        </router-link>
      </div>
    </div> <!-- exercise icons -->

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
       
    }) 
  },
  computed: {
    ...mapGetters({
      exercises: 'learn/exercises'
    })
  },
  async mounted(){
    
  },
  watch: {
     
  }
}
</script>

<style scoped>
.has-text-centered:hover {
  background-color: #ccd5e0;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
</style>
