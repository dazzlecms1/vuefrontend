<template>
<div class="column is-6 is-offset-3">

<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" v-model="name">
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea class="textarea" v-model="description"></textarea>
  </div>
</div>

<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button
      @click="create({name, description})"
      :class="loadingClass"
      >Submit
      <div class="ld ld-square ld-tick"></div>
    </button>
  </p>
  <p class="control">
    <button @click="reset()" class="button">Reset</button>
  </p>
</div>


  

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import loading from '@/utils/';

export default {
  data() {
    return {
      name: '',
      description: '',
      loadingClass: 'button is-link ld-ext-right'
    }
  },
  methods: {
    ...mapActions({
      create: 'features/create'
    }),
    // reset() {
    //   console.log('reset button');
    // }
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
    '$store.state.features.redirect'(val) {
      if(val) {
        console.log('redirect in create');
        this.$router.push({path: '/'}); 
      }
    },
    '$store.state.features.loading.value'(val) {
      this.loadingClass = loading.simpleLoading(val);
    },
    
  }
}
</script>
