<template>
  <v-list class="pt-0" flat>
    <v-list-item-group multiple>
      <div
        v-for="(item,index) in getTasks"
        :key="index"
        :class="{ shadow:item.done }"
      >
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
                @click.stop="removeTodo(item.id)"
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
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FieldTaskList',
  props: {
    getTasks: {
      type: Array,
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
<style lang='scss' scoped>
@import 'assets/variables';

.shadow {
  background-color: $light-blue;
}
</style>
