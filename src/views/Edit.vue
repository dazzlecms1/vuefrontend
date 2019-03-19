<template>
  <div>
    Edit: {{currentUrl}}
    <p>Status: {{currentSite.status}}</p>
    <p>Title: {{currentSite.title}}</p>
    <p>Compliance: {{currentSite.compliance}}</p>
    <p>Created At: {{currentSite.createdAt}}</p>
    <p>Updated At: {{currentSite.updatedAt}}</p>
    <a
      @click="duplicatePage(currentSite)"
      class="button is-link">Duplicate page
    </a>
    &nbsp;
    <a 
      @click="$store.dispatch('sites/publish', currentSite)"
      class="button is-link">Publish
    </a>
    &nbsp;
    <a 
      
      class="button is-link">Update
    </a>
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
      let date = this.moment();
      let dateNow = date.format('YYYY-MM-DD HH:mm:ss');
      this.$store.dispatch('sites/createSite', {
        title: page.title + "-" + dateNow, 
        status: page.status, 
        compliance: page.compliance, 
        template: page.template._id,
        brands: page.brands._id,
      })
    },
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









