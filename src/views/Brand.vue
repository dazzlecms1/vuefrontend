<template>
<div class="column is-10 is-offset-1">
  <p class="title">Active pages</p>
  <ul>
    <div
      class="box"
      v-for="site in sitesData"
      :key="site._id">
      <div>Template: 
        <router-link
          :to="`/brands/${brand}/${site.template.templatename}`">
          {{site.template.templatename}}
        </router-link>
      </div>
      <div>status: {{site.status}}</div>
      <div>title: 
        <router-link
          :to="`/brands/${brand}/${site.template.templatename}/${site.title}`">
          {{site.title}}
        </router-link>
      </div>
      <div>createdAt: {{site.createdAt}}</div>
      <div>updatedAt: {{site.updatedAt}}</div>
    </div>
  </ul>
  <p class="title">Pending pages</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      brand: {},
      brandsData: [],
      sitesData: [],
      allSites: [],
    }
  },
  async mounted() {
    this.brand = this.$route.params.brand;
    this.brandsData = this.brands.filter(item => item.brand1name === this.brand)[0];
    await this.$store.dispatch('sites/getAllSites')

    this.allSites = this.sites;

    this.sitesData = this.allSites.filter(site => site.brands.name === this.brand);
  },
  computed: {
    ...mapGetters({
      brands: 'sites/brands',
      sites: 'sites/sites',
    })
  }
}
</script>
