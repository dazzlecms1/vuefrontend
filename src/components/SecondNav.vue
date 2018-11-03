<template>
  <div class="columns box">
    <div class="column is-3">
      <button 
        @click="$store.commit('ideas/quickAddIdea', {active: true})"
        class="button is-fullwidth">Quick Add</button>
    </div>
    <div class="column is-3">
      <button 
        @click="$store.commit('ideas/setFilter', {filter: 'current'})"
        class="button is-fullwidth">Currently Watching</button>
    </div>
    <div class="column is-3">
      <button 
        @click="$store.commit('ideas/setFilter', {filter: 'high'})"
        class="button is-fullwidth">High priority</button>
    </div>
    <div class="column is-3">
      <button 
        @click="$store.commit('ideas/setFilter', {filter: 'low'})"
        class="button is-fullwidth">Low priority</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

