<template>
<div>

  <div :class="showDropdown ? 'dropdown is-active' : 'dropdown'"> 
    <div 
      @click="showDropdown = !showDropdown"
      class="dropdown-trigger"> <!-- is-active is for dropdown too -->

      
      <button class="button">
        <span class="is-size-5">{{idea.priority}}</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down"></i>
        </span>
      </button> <!-- button to activate it -->

    </div>
    <div class="dropdown-menu" id="dropdown-menu">
      <div  
        v-for="priority in priorities" :key="priority.name"
        class="dropdown-content">
        <a 
          @click="clickedItem(priority.name)"
          :class="priority.active ? 'dropdown-item is-active' : 'dropdown-item'">{{priority.name}}</a>
      </div>
    </div>
  </div> <!-- dropdown is-active -->

  <!-- <a
    @click="show = !show"
    class="button is-large">
    <span class="icon">
      <i class="fas fa-flag"></i>
    </span>
    <span>{{idea.priority}}</span>
  </a> -->
  
  <!-- <div 
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
  </div> -->

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
      priorities: [
        {name: 'current', active: false},
        {name: 'high', active: false},
        {name: 'low', active: false},
      ],
      showDropdown: false,
    }
  },
  computed: {
    
  },
  methods: {
    clickedItem(priority) {
      this.priorities = this.priorities.map(p => {
        if(p.active) {
          p.active = false;
        }

        if(p.name === priority) {
          p.active = true;
        }

        return p;
      });

      this.showDropdown = false;

      if(priority !== this.idea.priority) {
        this.$store.dispatch('ideas/setPriority', {id: this.idea._id, priority})
      }
      
    },
  },
}
</script>
