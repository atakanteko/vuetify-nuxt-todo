<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.getters['store/getDialogStatus']"
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
            @click="$store.dispatch('store/setDialogStatus',{ dialogStatus: false, id: null })"
          >
            Decline
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="$store.dispatch('store/removeTodo',$store.getters['store/getRemoveTodoId'])"
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
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
