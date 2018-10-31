<template>
<div class="box">
  <div class="level">
    <div class="level-left">
      <button 
        @click="show = !show" 
        class="button is-fullwidth is-lg">Show/Hide comments
      </button>
    </div>
    <div class="level-right">
      <button 
        class="button is-fullwidth is-lg">Show/Hide Changes
      </button>
    </div>
  </div> <!-- buttons -->

  <div v-show="show">
    <div class="level" v-for="c in comments" :key="c._id">
      <div class="level-left">
        <div class="level-item">{{c.text}}</div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <i 
            @click="$store.dispatch('ideas/deleteComment', {id: c._id})"
            class="far fa-trash-alt fa-lg"></i>
        </div>
      </div>
    </div>
  </div> <!-- comments -->

</div>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>

