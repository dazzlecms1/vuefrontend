<template>
<div class="section column is-8 is-offset-2">

  <div class="column is-12">
    <div class="level">
      <div class="level-left border">
        <router-link 
          tag="i"
          class="fas fa-university fa-2x"
          :to="{path: '/learn'}">
        </router-link>
      </div>
      <div class="level-right">
        <div class="level-item border">
          <i class="fas fa-chevron-left fa-2x"></i>
        </div>
        <div class="level-item border">
          <p class="title is-3">1</p>
        </div>
        <div class="level-item border">
          <i class="fas fa-chevron-right fa-2x"></i>
        </div>
      </div>
    </div>
  </div> <!-- left - main menu | right - previous, current, next-->

  <div class="column is-12">
    <p class="title is-3">Title</p>
  </div> <!-- title ex. Translate, fill in the gaps, choose etc  -->

  <div class="column is-12">
    sentece
  </div> <!-- the sentence in spanish -->

  <div class="column is-12">
    <textarea class="textarea"></textarea>
  </div> <!-- textarea -->

  <div class="column is-12">
    <button class="button is-rounded">Skip</button>
    <button class="button is-rounded">Check</button>
  </div> <!-- buttons -->
</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      currentSentence: 1
    }
  },
  methods: {
    ...mapActions({
       
    }) 
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
     
  }
}
</script>

<style scoped>
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
  display: inline-block;
  padding: 1.25rem;
}
.border .border:hover {
  background-color: #F5FFF4;
}
</style>
