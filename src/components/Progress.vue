<template>
<div class="columns">
  
  <div class="column is-8">
    <progress
      @click="showInput = !showInput"
      class="progress is-link" :value="progress" max="100"></progress>
  </div>
  <div v-show="showInput" class="column is-2">
    <input v-model="newProgress" class="input" :min="0" :max="100" type="number">
  </div>
  <div class="column is-1">
    Old: {{progress}}
    New: {{newProgress}}
  </div>
  <div class="column is-1">
    <button
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
  },
  data() {
    return {
      showInput: false,
      newProgressData: 0,
    }
  },
  computed: {
    newProgress: {
      get() {
        return this.newProgressData;
      },
      set(val) {
        if(+val <= 100 && +val >= 0) {
          this.newProgressData = val;
        }
      }
    }
  },
  methods: {
    
  }
}
</script>
