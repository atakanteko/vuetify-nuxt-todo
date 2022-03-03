<template>
  <v-row justify="center">
    <v-dialog
      v-model="decline"
      max-width="600px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Todo</span>
        </v-card-title>
        <v-card-text>
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="title"
              :rules="[isInputEmpty]"
              counter
              label="Title"
              maxlength="70"
            />
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
            :disabled="disabledBtn"
            color="blue darken-1"
            text
            @click="saveEdit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false,
    },
    todoTitle: {
      type: String,
      required: true,
    },
    taskId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      disabledBtn: false,
      isInputEmpty: true,
      decline: null,
      title: null,
    };
  },
  watch: {
    todoTitle() {
      this.title = this.todoTitle;
    },
    title(val) {
      this.isInputEmpty = val.trim().length !== 0 || 'This field cannot be left blank.';
      val.trim().length === 0 ? this.disabledBtn = true : this.disabledBtn = false;
    },
    dialog(newValue) {
      this.decline = newValue;
    },
  },
  methods: {
    closeDialog() {
      this.decline = false;
      this.$emit('changeEditDialogStatus', false);
    },
    saveEdit() {
      console.log('Task ID', this.taskId);
      console.log('Title', this.title);
      this.$store.dispatch('store/updateEditedTodo', { id: this.taskId, title: this.title });
      this.decline = false;
      this.$emit('changeEditDialogStatus', false);
    },
  },
};
</script>
