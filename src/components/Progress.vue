<template>
<div class="columns">
  <span class="is-size-4">{{progress}} / {{duration}}</span>
  <div class="column is-8">
    <progress
      @click="showInput = !showInput"
      class="progress is-link" :value="((progress/duration) * 100)" :max="100"></progress>
  </div>
  <div v-show="showInput" class="column is-2">
    <input v-model="newProgress" class="input" :min="1" :max="duration" type="number">
  </div>
  <div class="column is-1">
    <!-- Old: {{progress}}  -->
    <i @click="setDuration({type: 'subtract'})" 
      class="fas fa-minus-circle fa-2x"></i>
    <!-- New: {{newProgress}}  -->
    <i @click="setDuration({type: 'add'})"  
      class="fas fa-plus-circle fa-2x"></i>
  </div>
  
  <div class="column is-1">
    <button
      @click="$store.dispatch('ideas/setProgress', {val: newProgressData, id})"
      class="button is-small">
      <span class="icon is-small">
        <i class="fas fa-check"></i>
      </span>
      <span>Set</span>
    </button>
  </div>
  


</div>
</template>

<script>
export default {
  props: {
    progress: Number,
    duration: Number,
    id: String,
  },
  data() {
    return {
      showInput: false,
      newProgressData: this.progress,
    }
  },
  computed: {
    newProgress: {
      get() {
        return this.newProgressData;
      },
      set(val) {
        if(+val <= 100 && +val >= 0) {
          this.newProgressData = +val;
        }
      }
    },
  },
  methods: {
    setDuration({type}) {
      if(type === 'add' && this.newProgressData < this.duration) {
        this.newProgressData ++;
      } else if(type === 'subtract' && this.newProgressData >= 1) {
        this.newProgressData --;
      }
    },
  }
}
</script>
