<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
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
              :rules="[rules.required, rules.counter]"
              counter
              label="Title"
              maxlength="20"
            />
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="false"
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
  },
  data() {
    return {
      title: 'Preliminary report',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
      },
    };
  },
};
</script>
