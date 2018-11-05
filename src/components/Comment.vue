<template>
<div class="column">
    <div class="level-item">
      <i 
        @click="show = !show"
        class="far fa-comments fa-2x"></i>
    </div>

  <div 
    v-show="show"
    class="box column">

    <div >
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

