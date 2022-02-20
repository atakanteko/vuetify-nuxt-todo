<template>
  <div class="home pa-6">
    <v-text-field
      v-model="todo"
      append-icon="mdi-plus"
      clearable
      label="Add Task"
      outlined
      @keydown.enter="addTodoAction(todo)"
    />
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

export default {
  name: 'IndexPage',
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
      addTodo: 'store/addTodo',
      removeTodo: 'store/removeTodo',
      toggleDone: 'store/toggleDone',
    }),
    addTodoAction(todo) {
      this.addTodo(todo);
      this.todo = '';
    },
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
