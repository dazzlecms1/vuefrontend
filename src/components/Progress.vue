<template>
<div class="column">
  <!-- <i class="fas fa-spinner fa-2x" @click="show = !show"></i> -->

  <div
    v-show="show" 
    class="columns is-multiline">
    <span class="is-size-3">{{Math.trunc(progress)}} / {{Math.trunc(duration)}}</span>

    <div class="column is-12">
      <progress
        @click="showInput = !showInput"
        class="progress is-link" 
        :value="progress" 
        :max="Math.trunc(duration)">
      </progress>
    </div> <!-- progress bar itself -->

    <span class="is-size-3">{{Math.trunc(red.value)}} / {{Math.trunc(duration)}}</span>

    <div class="column is-12">
      <progress
        class="progress is-danger" 
        :value="red.value" 
        :max="Math.trunc(duration)">
      </progress>
    </div> <!-- future progress bar -->
 
    <div class="field has-addons">
      <p 
        v-for="button in buttons" :key="button._id"
        class="control"> 
        <a
          @click="setBar({type: button.val})" 
          class="button is-large">
          <span class="icon">
            <i :class="button.icon"></i>
          </span>
          <span>{{button.name}}</span>
        </a>
      </p>
    </div> <!-- controls -->

  </div>
</div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    progress: Number,
    duration: Number,
    id: String,
  },
  data() {
    return {
      showInput: false,
      red: {
        value: this._props.progress,
      },
      buttons: [
        {_id: 3, val: 'min', name: 'backward', icon: 'fas fa-fast-backward'},
        {_id: 5, val: 'subtract', name: '1', icon: 'fas fa-minus'},
        {_id: 1, val: 'add', name: '1', icon: 'fas fa-plus'},
        {_id: 4, val: 'max', name: 'forward', icon: 'fas fa-fast-forward'},
        {_id: 2, val: 'set', name: 'set', icon: 'fas fa-save'},
        {_id: 6, val: 'reset', name: 'reset', icon: 'fas fa-undo'},
      ],
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
    // new progress bar
    setBar({type}) {
      if(type === 'add' && this.red.value < this.duration) {
        this.red.value ++;
      } else if(type === 'subtract' && this.red.value >= 1) {
        this.red.value --;
      } else if(type === 'min') {
        this.red.value = 0;
      } else if(type === 'max') {
        this.red.value = this.duration;
      } else if(type === 'reset') {
        this.red.value = this.progress;
      } else if(type === 'set') {
        this.$store.dispatch('ideas/setProgress', {
          val: this.red.value, 
          id: this._props.id
        });
      }
    },
  }
}
</script>
