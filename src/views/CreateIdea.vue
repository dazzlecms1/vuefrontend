<template>
  <div>
    <div class="field has-addons">
      <p class="control">
        <span class="select">
          <select v-model="category">
            <option v-for="c in categories" :key="c">
              {{c}}
            </option>
          </select>
        </span>
      </p>
      <p class="control">
        <input v-model="item" class="input" type="text">
      </p>
      <p class="control">
        <a @click="click" class="button">Click</a>
        <a @click="show = !show" class="button">Show</a>
      </p>
    </div> <!-- input -->

    <transition name="fade">
      <ul v-show="show">
        <li v-for="item in items" :key="item" class="box">
          {{item}}
        </li>
      </ul> <!-- items -->
    </transition>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      categories: ['books', 'tv-series', 'podcasts'],
      category: 'books',
      item: '',
      items: ['hello', 'there', 'how r u'],
    }
  },
  methods: {
    click() {
      if(this.item.length > 1 && this.item.length < 20) {
        this.items.push(this.item);
        this.item = '';
      }
    }
  },
  mounted() {
    
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
