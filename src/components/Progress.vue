<template>
<div class="column">
  <i class="fas fa-spinner fa-2x" @click="show = !show"></i>
  

  <div
    v-show="show" 
    class="columns">
    <span class="is-size-4">{{Math.trunc(progress)}} / {{Math.trunc(duration)}}</span>

    <div class="column is-8">
      <progress
        @click="showInput = !showInput"
        class="progress is-link" :value="((progress/duration) * 100)" :max="100"></progress>
    </div> <!-- progress bar itself -->

    <div v-show="showInput" class="column is-2">
      <input v-model="newProgress" class="input" :min="1" :max="duration" type="number">
    </div> <!-- hidden input -->

    <div class="column is-1">
      <!-- Old: {{progress}}  -->
      <i @click="setDuration({type: 'subtract'})" 
        class="fas fa-minus-circle fa-2x"></i>
      <!-- New: {{newProgress}}  -->
      <i @click="setDuration({type: 'add'})"  
        class="fas fa-plus-circle fa-2x"></i>
      <i @click="setDuration({type: 'skip forward'})"  
        class="fas fa-fast-forward fa-2x"></i>
    </div> <!-- icons -->
    
    <div class="column is-1">
      {{Math.trunc(newProgressData)}}
      <button
        @click="$store.dispatch('ideas/setProgress', {val: newProgressData, id})"
        class="button is-small">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Set</span>
      </button>
    </div> <!-- set button -->

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
      show: false,
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
      } else if(type === 'skip forward') {
        this.newProgressData = this._props.duration
      }
    },
  }
}
</script>
