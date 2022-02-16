<template>
  <div class='home pa-6'>
    <v-text-field
      v-model='todo'
      append-icon='mdi-plus'
      clearable
      label='Add Task'
      outlined
      @keydown.enter='addTodo(todo)'
    ></v-text-field>
    <v-list class='pt-0' flat>
      <v-list-item-group multiple>
        <div v-for='(item,index) in this.tasks'
             :key='index'
             :class='{ shadow:item.done }'>
          <v-list-item @click='toggleDone(item.id)'>
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value='item.done'
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  :class='{"text-decoration-line-through":item.done}'>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click.stop='removeTodo(item.id)'>
                  <v-icon color='primary'>{{ icons.delete }}</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      icons: {
        delete: 'mdi-delete',
      },
      todo: '',
      checkedNames: [],
      tasks: [
        {
          id: 1,
          title: 'Wake Up',
          done: false,
        },
        {
          id: 2,
          title: 'Get a Cup of Tea',
          done: false,
        },
        {
          id: 3,
          title: 'Drink Tea',
          done: false,
        },
      ],
    };
  },
  methods: {
    toggleDone(taskId) {
      const task = this.tasks.filter((item) => item.id === taskId)[0];
      task.done = !task.done;
    },
    removeTodo(taskId) {
      this.tasks = this.tasks.filter((item) => item.id !== taskId);
    },
    addTodo(todo) {
      const todoCapitalized = todo.charAt(0).toUpperCase() + todo.slice(1);
      const newTodo = {
        id: this.tasks.length + 1,
        title: todoCapitalized,
        done: false,
      };
      this.tasks.push(newTodo);
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
</style>
