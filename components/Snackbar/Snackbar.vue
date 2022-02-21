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
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: 'Hello, I\'m a snackbar',
  }),
};
</script>
