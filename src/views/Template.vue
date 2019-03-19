<template>
<div>
  <div
    class="box"
    v-for="site in templateData.sites"
    :key="site._id">
    {{site.title}}
    {{site.status}}
    {{site.createdAt}}
    {{site.updatedAt}}
  </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      templateData: [],
      currentTemplate: {},
    }
  },
  computed: {
    ...mapGetters({
      templates: 'sites/templates'
    }),
  },
  async mounted() {
    setTimeout(() => {
      console.log(this.templates)
      this.currentTemplate = this.$route.params.template;
      
      this.templateData = this.templates.filter(t => t.templatename === this.currentTemplate)[0];
      console.log(this.templateData)
    }, 500)

    //this.sitesData = this.sites.filter(s => )[0]
    //this.sitesData = this.sites.filter(s => )
  }
}
</script>
