<template>
  <div>
    <button
      @click="$store.dispatch('ideas/createIdea')" 
      class="button">Create -> 
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
