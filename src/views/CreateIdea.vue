<template>
  <div class="column is-offset-4 is-4">
    

    <a
      @click="click()"  
      :class="button">
      <span class="icon">
        <i class="far fa-comment"></i>
      </span>
      <span>Add comment</span>
      <div :class="loadingElement()"></div> 
    </a>
    
  </div>
</template>

<script>
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data() {
    return {
      button: 'button ld-ext-right is-large ',
      btn: 'button ld-ext-right is-large ',
      animations: [
        'ld-spin-fast',
        'ld-cycle',
        'ld-spin',
        'ld-heartbeat',
        'ld-squeeze',
        'ld-rubber',
        'ld-tick',
        'ld-jump',
        'ld-bounce',
        'ld-radio',
        'ld-broadcast',
        'ld-bounce-a',
        'ld-clock',
        'ld-skew',
        'ld-shadow',
        'ld-shadow-a',
        'ld-tremble',
        'ld-slide-rtl',
        'ld-slide-ltr',
        'ld-slide-ttb',
        'ld-slide-btt',
        'ld-bounce-rtl',
        'ld-bounce-ltr',
        'ld-hit',
        'ld-wander-h',
        'ld-wander-v',
        'ld-orbit',
        'ld-fade',
        'ld-rush-ltr',
        'ld-rush-rtl',
        'ld-flip',
        'ld-flip-h',
        'ld-flip-v',
        'ld-coin-h',
        'ld-coin-v',
        'ld-surprise',
        'ld-shake',
        'ld-jelly',
        'ld-float',
        'ld-rotate',
        'ld-blur',
        'ld-vortex-out',
        'ld-vortex-in',
        'ld-wrench',
        'ld-breath',
        'ld-blink',
        'ld-pulse',
        'ld-jingle',
        'ld-swim',
        'ld-leaf',
        'ld-slot',
      ],
      loaders: [
        'ld-ball',
        'ld-hourglass',
        'ld-ring',
        'ld-square',
        'ld-cross',
        'ld-spinner',
        'ld-pie',
      ],
    }
  },
  methods: {
    async click() {
      this.button += 'running';
      await delay(1200);
      this.button = this.btn; 
    },
    loadingElement() {
      const animation = this.animations[Math.floor(Math.random()*this.animations.length)];
      const loader = this.loaders[Math.floor(Math.random()*this.loaders.length)];
      
      return `ld ${loader} ${animation}`
    }
  },
  
}
</script>

