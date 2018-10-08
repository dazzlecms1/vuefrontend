<template>
<div class="columns is-multiline">

  <div 
    class="column is-12 border" 
    v-for="sentence in sentences" 
    :key="sentence._id"
    @click="$store.commit('learn/setCurrentSentence', {sentence})">
    <div class="level">
      <div class="level-left">
        <div 
          :class="sentence._id === current.sentence._id ? 'has-text-primary' : ''"
          >{{sentence.text}} 
        </div>
      </div>
      <div v-show="showLevelRight" class="level-right">
        <div 
          v-for="item in current.words" :key="item._id"
          @click="$store.commit('learn/moveWord', {word, operation: 'toSidebar'})"
          class="level-item">{{item.name}}</div>
      </div>
    </div>

  </div>

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      rightItem: '',
      showLevelRight: false,
    }
  },
  methods: {
    ...mapActions({}),
  },
  computed: {
    ...mapGetters({
      sentences: 'learn/sentences',
      current: 'learn/currentSentence',
    }),
  },
  async mounted(){
    this.$store.dispatch('learn/load', {what: 'sentence'});
  },
  watch: {
    'current.words'(val) {
      if(this.current.words.length > 0) {
        this.showLevelRight = true;
      } else {
        this.showLevelRight = false;
      }
    }
  }
}
</script>

<style scoped>
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
.box:hover {
  background-color: #cecada;
}
</style>
