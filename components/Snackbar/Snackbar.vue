<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
      timeout="-1"
    >
      {{ $store.getters['store/getSnackbarMessage'] }}

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
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      snackbar: this.$store.state.isSnackbarOpen,
      text: '',
    };
  },
  computed: {
    ...mapGetters('store', ['getSnackbarStatus', 'getSnackbarMessage']),
  },
  methods: {
    ...mapActions({
      setSnackBarStatus: 'store/toggleSnackbarStatus',
    }),
    doSnackbarStatusFalse() {
      this.setSnackBarStatus(false);
    },
  },
  watch: {
    getSnackbarStatus() {
      this.snackbar = this.getSnackbarStatus;
    },
  },
};
</script>
