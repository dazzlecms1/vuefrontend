<template>
  <div>
    <button
      @click="$store.dispatch('ideas/createIdea')" 
      class="button">Create -> {{$moment.duration('PT15M33S').asMinutes()}}
    </button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    
  }
}
</script>
