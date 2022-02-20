<template>
  <div class="home pa-6">
    <FieldAddTask />
    <v-list v-if="getTasks.length" class="pt-0" flat>
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

    <div v-else class="no-task">
      <v-icon color="primary" size="100">
        mdi-check
      </v-icon>
      <h3 class="primary--text">
        No Task
      </h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FieldAddTask from '../components/Todo/FieldAddTask';

export default {
  name: 'IndexPage',
  components: {
    FieldAddTask,
  },
  data() {
    return {
      icons: {
        delete: 'mdi-delete',
      },
      todo: '',
      checkedNames: [],
    };
  },
  computed: {
    ...mapGetters('store', ['getTasks']),
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

.no-task {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
}
</style>
