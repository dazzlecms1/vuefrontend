<template>
  <div>
    Edit: {{currentUrl}}
    <p>Status: {{currentSite.status}}</p>
    <p
      @click="showInput = !showInput"
      >Title: {{currentSite.title}}</p>
    <div 
      v-show="showInput"
      class="field">
      <input 
        type="text"
        class="input"
        placeholder="title"
        v-model="values.title"
        >
    </div>
    <p>Compliance: {{currentSite.compliance}}</p>
    <p>Created At: {{currentSite.createdAt}}</p>
    <p>Updated At: {{currentSite.updatedAt}}</p>
    <a
      @click="duplicatePage(currentSite)"
      class="button is-link">Duplicate page - works
    </a>
    &nbsp;
    <a 
      @click="$store.dispatch('sites/publish', currentSite)"
      class="button is-link">Publish - works
    </a>
    &nbsp;
    <a 
      @click="updatePage({site: currentSite, title: values.title})"
      class="button is-link">Update - in progress
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      showInput: false,
      values: {
        title: '',
      },
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
    async updatePage({site, title}) {
      await this.$store.dispatch('sites/update', {site, title});
      this.$router.push({path: `/brands/${this.$route.params.brand}`});
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









