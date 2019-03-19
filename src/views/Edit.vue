<template>
  <div>
    Edit: {{currentUrl}}
    <p>Status: {{currentSite.status}}</p>
    <p>Title: {{currentSite.title}}</p>
    <p>Compliance: {{currentSite.compliance}}</p>
    <p>Created At: {{currentSite.createdAt}}</p>
    <p>Updated At: {{currentSite.updatedAt}}</p>
    <button 
      @click="duplicatePage(currentSite)"
      class="button is-link">Duplicate page</button>
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
  methods: {
    duplicatePage(page) {
      this.$store.dispatch('sites/createSite', {
        title: page.title + page.updatedAt, 
        status: page.status, 
        compliance: page.compliance, 
        template: page.template._id,
        brands: page.brands._id,
      })
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









