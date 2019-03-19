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

  <div v-show="currentEl === 'createTemplate' ? true : false">
    <p class="title has-text-centered">Chosen template {{currentTemplate.templatename}}</p>

    <div class="column is-8 is-offset-2">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="title" 
            class="input" 
            type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Status</label>
        <div class="control">
          <div class="select">
            <select v-model="status">
              <option value="draft">Draft</option>
              <option value="inReview">In Review</option>
              <option value="paused">Paused</option>
              <option value="published">Published</option>
              <option value="rejected">Rejected</option>
              <option value="archived">Archived</option>
              <option value="pending">Pending</option>
              <option value="deleted">Deleted</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Compliance</label>
        <div class="control">
          <div class="select">
            <select v-model="compliance">
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="changed">Changed</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button
            @click="$store.dispatch('sites/createSite', {
              title, 
              status, 
              compliance, 
              template: currentTemplate._id, 
              brands: brandData._id,
            })" 
            class="button is-link">Submit</button>
        </div>
      </div>
    
    </div>
    
  </div>


</div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  components: {
    
  },
  data() {
    return {
      title: '',
      status: 'draft',
      compliance: 'pending',
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
  },
  watch: {
    '$store.state.sites.rooter.refresh'(newVal, oldVal) {
      if(newVal) {
        this.$router.push({path: `/brands/${this.$route.params.brand}`});
        this.$store.commit('sites/toggleRefresh', false)
      }
    }
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
