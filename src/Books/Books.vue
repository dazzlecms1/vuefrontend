<template>
<div class="columns">
  <div class="column is-8 is-offset-2">
    <p class="title is-2">Book title</p>
    <add-char></add-char><hr>
    <div class="columns">
      <div class="column is-4">
        <menu-comp></menu-comp>
      </div>
      <div class="column is-8">
        {{selectedCharacter.info}}
      </div>
    </div>
  </div> <!-- home -->
</div>
</template>

<script>
import MenuVue from './Menu.vue';
import {mapActions, mapGetters} from 'vuex'
import AddCharVue from './AddChar.vue';

export default {
  components: {
    addChar: AddCharVue,
    menuComp: MenuVue,
  },
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
      selectedCharacter: 'books/selectedCharacter',
    }),
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
