<template>
<div class="column is-10 is-offset-1">
  <router-link
    :to="`/brands/${$route.params.brand}/create`"
  >Create
  </router-link>
  <ul>
    <site-component
      class="box"
      v-for="site in sitesData"
      :key="site._id"
      :site="site"
      :status="status"
      :brand="brand"
      >
    </site-component>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  components: {
    siteComponent: () => import('@/components/SiteComponent.vue'),
  },
  data() {
    return {
      status: {
        show: false,
        val: 'draft',
      },
      brand: {},
      brandsData: [],
      sitesData: [],
      allSites: [],
    }
  },
  methods: {
    
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



