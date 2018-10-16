<template>
<div class="section columns is-multiline">
  <div
    v-for="f in features" :key="f._id" 
    class="column is-12 box">

    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title is-3">{{f.name}}</p>
        </div>
        <div class="level-item">
          <p class="title is-5">{{f.description}}</p>
        </div>
      </div> <!-- name and description -->

      <div class="level-right">
        <router-link
          :to="{path: '/features/' + f._id}"
          tag="button"
          class="button"
        >Show</router-link>
        <button
          :class="removeButtonLoading({id: f._id})"
          @click="remove({id: f._id})"
          >Delete<div class="ld ld-square ld-tick"></div>
        </button>
      </div> <!-- buttons -->
    </div>

  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import loading from '@/utils/';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      remove: 'features/remove',
      getOne: 'features/getOne',
    }),
    removeButtonLoading({id}) {
      return loading.complexLoading({loadingId: this.loading.button, id});
    } // remove button loading animation
  },
  computed: {
    ...mapGetters({
      features: 'features/features',
      redirect: 'features/redirect',
      loading: 'features/loading',
      notification: 'features/notification',
      oneFeature: 'features/oneFeature',
    }),
  },
  async mounted(){
    this.$store.dispatch('features/getAll'); // load all notifications

    if(this.redirect) {
      this.$store.commit('features/redirect', false);
    } // set redirect to false

    if(this.notification.show) {
      await delay(2000);
      this.$store.commit('features/notification', {show: false, text: ''}); // hide notification
    } // if notification is shown
  },
  watch: {
    
  }
}
</script>

<style>

</style>
