<template>
  <v-row justify="center">
    <v-dialog
      v-model="decline"
      max-width="290"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5">
          Warning
        </v-card-title>
        <v-card-text>
          Are you sure to delete a todo?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
          >
            Decline
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteTodo"
          >
            Accept
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
    taskId: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      decline: null,
    };
  },
  computed: {
    dialogStatus() {
      return this.dialog;
    },
  },
  watch: {
    dialog(newValue) {
      this.decline = newValue;
    },
  },
  methods: {
    deleteTodo() {
      this.decline = false;
      this.$emit('changeDialog', false);
      this.$store.dispatch('store/removeTodo', this.taskId);
    },
    closeDialog() {
      this.decline = false;
      this.$emit('changeDialog', false);
    },
  },
};
</script>
