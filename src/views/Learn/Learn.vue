<template>
<div>
  <div class="box columns is-multiline is-centered">

    <div v-show="!showExercise"
      v-for="exercise in exercises" :key="exercise._id"
      class='column is-2 has-text-centered'>
      <div 
        @click="showExercise = true" 
        class="box">
        <i :class="'fas fa-chess-' + exercise.type + ' fa-3x'"></i>
      </div>
    </div> <!-- exercise icons -->

    <div v-show="showExercise" class="column is-12">
      <exercise></exercise>
    </div>


  </div>



  

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ExerciseVue from '@/views/Learn/Exercise/Exercise.vue';

export default {
  components: {
    exercise: ExerciseVue
  },
  data() {
    return {
      showExercise: false,
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
