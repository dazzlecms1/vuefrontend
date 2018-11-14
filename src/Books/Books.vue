<template>
<div class="section columns is-multiline box">
  <div class="column is-8 is-offset-2">
    <div class="field">
      <div class="control">
        <input class="input is-large" type="text" v-model="newBook">
      </div>
    </div>
    <button
      @click="addBook()" 
      class="button is-large is-fullwidth">Add a book</button><hr>
  </div> <!-- add book -->

  <div class="column is-8 is-offset-2">
    <div class="field">
      <div class="control">
        <input class="input is-large" type="text" v-model="search">
      </div>
    </div>
  </div><hr> 

  <div
    class="column is-8 box is-offset-2"
    v-for="book in filteredBooks" 
    :key="book._id">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <router-link 
            :to="{path: '/books/' + book._id}"  
            class="has-text-black-bis is-size-3">
            {{book.title}}
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button
            @click="$store.dispatch('books/removeBook', {id: book._id})" 
            class="button">Remove</button>
        </div>
      </div>
    </div>
  </div> <!-- books -->

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    
  },  
  data() {
    return {
      newBook: '',
    }
  },
  methods: {
    addBook() {
      this.$store.dispatch('books/createBook', {title: this.newBook})
      this.newBook = '';
    },
  },
  computed: {
    ...mapGetters({
      
    }),
    search: {
      get() {
        return this.$store.getters['books/search'];
      },
      set(val) {
        this.$store.commit('books/search', val);
      },
    },
    // hello
    filteredBooks(arg) {
      return (
        this.$store.getters['books/books'].filter(book => 
          book.title.match(this.$store.getters['books/search'])
        )
      );
    }
  },
  async mounted(){
    await this.$store.dispatch('books/getAll');
  },
  watch: {
    
  }
}
</script>















