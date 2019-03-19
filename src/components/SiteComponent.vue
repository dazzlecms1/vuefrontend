<template>
<div>
  <div>Template: 
    <router-link
      :to="`/brands/${brand}/${site.template.templatename}`">
      {{site.template.templatename}}
    </router-link> |
    <router-link
      :to="`/brands/${brand}/${site.template.templatename}/${site.title}/edit`">
      Edit
    </router-link>
  </div>
    
 
  <div
    class="status"
    @click="status.show = !status.show;">Status: {{site.status}}
  </div>

  <div v-show="status.show">
    <select v-model="status.val">
      <option value="draft">Draft</option>
      <option value="inReview">In Review</option>
      <option value="paused">Paused</option>
      <option value="published">Published</option>
      <option value="rejected">Rejected</option>
      <option value="archived">Archived</option>
      <option value="pending">Pending</option>
      <option value="deleted">Deleted</option>
    </select>
    <button 
      class="button"
      @click="changePageStatus({site, status: status.val})">
      Set Status
    </button>
  </div>

  <div>title: 
    <router-link
      :to="`/brands/${brand}/${site.template.templatename}/${site.title}`">
      {{site.title}}
    </router-link>
  </div>
  <div>compliance: {{site.compliance}}</div>
  <div>createdAt: {{site.createdAt}}</div>
  <div>updatedAt: {{site.updatedAt}}</div>
</div>
</template>


<script>

export default {
  props: {
    site: Object,
    status: Object,
    brand: String,
  },
  methods: {
    async changePageStatus({site, status}) {
      await this.$store.dispatch('sites/changePageStatus', {site, status})
      this.$router.go();
    }
  }
}
</script>

<style scoped>
.status {
  cursor: pointer;
}
.status:hover {
  text-decoration: underline;
}
</style>