<template>
<div>
  <p class="title"> {{currentUrl}} </p>
  {{currentSite}}
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
    this.currentUrl = this.$route.params.site;
    this.currentSite = this.sites.filter(s => s.title === this.currentUrl)[0]
  }
}
</script>
