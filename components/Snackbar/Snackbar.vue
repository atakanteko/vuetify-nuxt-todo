<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="$store.dispatch('store/toggleSnackbarStatus',false)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    snackbar: false,
    text: 'New todo has been added.',
  }),
  computed: {
    ...mapGetters('store', ['getSnackbarStatus']),
  },
  watch: {
    getSnackbarStatus() {
      this.snackbar = this.getSnackbarStatus;
    },
  },
};
</script>
