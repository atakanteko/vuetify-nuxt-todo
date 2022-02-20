<template>
  <v-text-field
    v-model="todo"
    append-icon="mdi-plus"
    clearable
    label="Add Task"
    outlined
    @keydown.enter="addTodoAction(todo)"
  />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FieldAddTask',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    ...mapActions({
      addTodo: 'store/addTodo',
    }),
    addTodoAction(todo) {
      this.addTodo(todo);
      this.todo = '';
    },
  },
};
</script>
<style scoped></style>
