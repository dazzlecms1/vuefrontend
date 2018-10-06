<template>
<div>
  word {{word}}
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      
    })
  },
  computed: {
    ...mapGetters({
      word: 'learn/currentWord',
    })
  },
  async mounted(){
    await this.$store.dispatch('learn/loadWord', {id: this.$route.params.id});
  },
  watch: {
    
  }
}
</script>
