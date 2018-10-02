<template>
<div class="column is-8 is-offset-2">
  <div class="box columns is-multiline is-centered">
    <div class="column is-1 has-text-centered">
      <div class="box">
        <i class="fas fa-chess-pawn fa-3x"></i>
      </div>
    </div>

    <div class="column is-1 has-text-centered">
      <div class="box">
        <i class="fas fa-chess-pawn fa-3x"></i>
      </div>
    </div>

    <div class="column is-1 has-text-centered">
      <div class="box">
        <i class="fas fa-chess-pawn fa-3x"></i>
      </div>
    </div>
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
<style>
.has-text-centered:hover {
  background-color: #ccd5e0;
}
</style>
