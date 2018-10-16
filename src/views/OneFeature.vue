<template>
<div class="border section is-multiline">
  <div class="level">

    <div class="level-left">
      <div class="level-item">
        <p
          @click="edit.name.show = !edit.name.show"      
          class="title is-1">{{f.name}}</p>
      </div>
      <div v-show="edit.name.show" class="field has-addons">
        <div class="control">
          <input v-model="edit.name.value" class="input" type="text">
        </div>
        <div class="control">
          <a
            @click="update({element: 'name', value: edit.name.value})" 
            class="button is-info">Update</a>
        </div>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item"><i class="fas fa-edit fa-4x"></i></div>
      <div class="level-item"><i class="fas fa-trash-alt fa-4x"></i></div>
    </div>
  </div> <!-- name edit and delete icons -->

  <div class="level">
    <div class="level-left">
      <p
        @click="edit.description.show = !edit.description.show" 
        class="is-size-4">{{f.description}}
      </p>
      <div v-show="edit.description.show">
        <textarea v-model="edit.description.value" class="textarea"></textarea>  
        <button 
          @click="update({element: 'description', value: edit.description.value})"
          class="button">Update</button>
      </div>
      
    </div>
    

  </div> <!-- description -->
  
  <!-- below are comments -->
  <div class="column is-6">
    <p class="is-size-3">Comments</p><hr>

    <div v-for="c in f.comments" :key="c._id">
      {{c.comment}}
    </div>

    <div class="field">
      <label class="label">Add a comment</label>
      <div class="control">
        <textarea v-model="comment.value" class="textarea"></textarea>
      </div>
    </div> <!-- textarea -->
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button 
          @click="postComment({comment: comment.value})"
          class="button is-link">Submit</button>
      </div>
    </div> <!-- submit button -->
  </div> <!-- comments -->

</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      edit: {
        name: {
          show: false,
          value: '',
        },
        description: {
          show: false,
          value: '',
        },
      },
      comment: {
        show: true,
        value: '',
      }
    }
  },
  methods: {
    ...mapActions({
      update: 'features/update',
      postComment: 'features/postComment',
    }),
  },
  computed: {
    ...mapGetters({
      f: 'features/oneFeature'
    }),
  },
  async mounted(){
    await this.$store.dispatch('features/getOne', {id: this.$route.params.id});
  },
  watch: {
    
  }
}
</script>

