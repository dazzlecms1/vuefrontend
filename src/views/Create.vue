<template>
<div>
  <div
    v-show="currentEl === 'chooseTemplate' ? true : false"
    class="template"
    v-for="template in brandData.templates"
    :key="template._id"
    @click="chooseTemplate(template)"
    >{{template.templatename}}
  </div>

  <div>
    <p class="title">Chosen template {{currentTemplate.templatename}}</p>

    {{currentTemplate}}

  </div>


</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      brandData: {},
      currentEl: "chooseTemplate",
      currentTemplate: {},
    }
  },
  methods: {
    chooseTemplate(template) {
      this.currentTemplate = template;
      this.currentEl = "createTemplate";
    }
  },
  computed: {
    ...mapGetters({
      brands: 'sites/brands',
    })
  },
  async mounted() {
    setTimeout(() => {
      const currentBrand = this.$route.params.brand;
      this.brandData = this.brands.filter(b => b.name === currentBrand)[0];
      console.log(this.brandData)
    }, 500)
  }
}
</script>

<style scoped>
.template {
  cursor: pointer;
}
.template:hover {
  text-decoration: underline;
}
</style>
