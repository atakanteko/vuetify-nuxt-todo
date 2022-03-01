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
        <MenuItems :index-info="indexInfo" :task-id="item.id" />
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MenuItems from './MenuItems';

export default {
  name: 'SingleTask',
  components: {
    MenuItems,
  },
  props: {
    indexInfo: {
      type: Number,
      required: true,
    },
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
