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
    

  </div><hr> <!-- description -->
  
<div class="columns">
  <!-- below are comments -->

  <div class="column is-6">
    <p class="is-size-3">Comments</p><hr>

    <div class="box" v-for="c in f.comments" :key="c._id">
      <div class="level">
        <div class="level-left">
          <div class="level-item">{{c.createdAt.substr(0, 10)}}</div>
        </div>
        <div class="level-right">
          <i 
            @click="editCommentMethod(c)"
            class="fas fa-edit fa-lg"></i>&nbsp;
          <i 
            @click="deleteComment({id: c._id})"
            class="fas fa-trash-alt fa-lg"></i>
        </div>
      </div> <!-- left - date; right - edit and remove buttons -->
      <div class="level">
        {{c.comment}}
      </div> <!-- comment itself -->
    </div><hr>

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

  <div v-show="comment.showEdit" class="column is-6">
    <div class="level">
      <div class="level-left">
        <p class="is-size-3">Edit comment</p>
      </div>
      <div class="level-right">
        <i @click="comment.showEdit = false"
          class="fas fa-window-close fa-2x"></i>
      </div>
    </div><hr>
    
    <div class="control">
      <textarea v-model="comment.editValue" class="textarea"></textarea>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button 
          @click="editComment({editValue: comment.editValue})"
          class="button is-link">Update</button>
      </div>
    </div> <!-- submit button -->
  </div> <!-- edit comment form -->

</div>
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
        editValue: '',
        showEdit: false,
      }
    }
  },
  methods: {
    ...mapActions({
      update: 'features/update',
      postComment: 'features/postComment',
      editComment: 'features/editComment',
      deleteComment: 'features/deleteComment',
    }),
    editCommentMethod(c) {
      this.comment.showEdit = !this.comment.showEdit;
      if(this.comment.showEdit) {
        this.$store.commit('features/setOneComment', c);
      } else {
        this.$store.commit('features/setOneComment', []);
      }
    }
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
    '$store.state.features.oneFeature': {
      handler: function(after, before) {
        console.log('watch');
      },
      deep: true,
    }
  }
}
</script>

