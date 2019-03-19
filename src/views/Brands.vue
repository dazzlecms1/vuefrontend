<template>
  <div>
    <p class="title">Brands</p>
    <ul>
      <li
        v-for="brand in brands"
        :key="brand._id">
        
        <router-link 
          :to="'brands/' + brand.brand1name">
          {{brand.brand1name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      brands: 'sites/brands'
    }),
  },
  async mounted() {
    console.log("brands.vue mounted")
    
  },
  watch:{
    // $route (to, from){
    //     console.log(to, 'to')
    //     console.log(from, 'from')
    // }
  } 
}
</script>
