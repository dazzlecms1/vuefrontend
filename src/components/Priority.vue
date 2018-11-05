<template>
<div>
  <span
      class="is-size-5"
      @click="show = !show"
    >{{idea.priority}}
  </span>
  
  <div 
    v-show="show"
    class="field has-addons">
    <div class="control">
      <div class="select">
        <select v-model="priority">
          <option>current</option>
          <option>high</option>
          <option>low</option>
        </select>
      </div>
    </div>
    <div class="control">
      <button 
        @click="$store.dispatch('ideas/setPriority', {id: idea._id, priority})"
        class="button">Choose</button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: {
    idea: Object,
  },
  data() {
    return {
      show: false,
      priority: 'high',
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
