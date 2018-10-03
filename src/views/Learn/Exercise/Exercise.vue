<template>
<div class="border columns is-multiline">

  <div class="column is-12">
    <div class="level">
      <div class="level-left border">
        <i class="fas fa-university fa-2x"></i>
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
  </div><!-- left - main menu | right - previous, current, next-->

  <div class="column is-12">
    <p class="title is-3">Title</p>
  </div><!-- title ex. Translate, fill in the gaps, choose etc  -->


  <div class="column is-12">
    <p class="is-size-4">Sentence in spanish</p>
  </div><!-- the sentence in spanish -->

  <div class="column is-12">
    <textarea class="textarea"></textarea>
  </div>

  <div class="column is-12">
    <button class="button is-rounded">Skip</button>
    <button class="button is-rounded">Check</button>
  </div>
</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
       
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
