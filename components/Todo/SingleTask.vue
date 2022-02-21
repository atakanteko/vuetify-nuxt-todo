<template>
  <div>
    <v-list-item @click="toggleDone(item.id)">
      <template #default>
        <v-list-item-action>
          <v-checkbox
            :input-value="item.done"
          />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
            :class="{'`text-decoration-line-through`':item.done}"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            icon
            @click.stop="$store.dispatch('store/setDialogStatus',{dialogStatus:true,id:item.id})"
          >
            <v-icon color="primary">
              {{ icons.delete }}
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SingleTask',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      icons: {
        delete: 'mdi-delete',
      },
    };
  },
  methods: {
    ...mapActions({
      removeTodo: 'store/removeTodo',
      toggleDone: 'store/toggleDone',
    }),
  },
};
</script>
<style scoped></style>
