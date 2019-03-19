<template>
<div>
  <p class="title"> {{currentUrl}} </p>
  
  <p>{{currentSite.status}}</p>
  <p>{{currentSite.draft}}</p>
  <p>{{currentSite.compliance}}</p>
  <p>{{currentSite.createdAt}}</p>
  <p>{{currentSite.updatedAt}}</p>
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
