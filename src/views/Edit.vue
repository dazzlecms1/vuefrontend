<template>
  <div>
    Edit: {{currentUrl}}
    <p>{{currentSite}}</p>
    <button class="button is-link">Duplicate page</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      currentSite: {},
      currentUrl: {},
    }
  },
  computed: {
    ...mapGetters({
      sites: 'sites/sites'
    }),
  },
  async mounted() {
    setTimeout(() => {
      this.currentUrl = this.$route.params.site;
      this.currentSite = this.sites.filter(s => s.title === this.currentUrl)[0]  
    }, 500);    
  }
}
</script>









