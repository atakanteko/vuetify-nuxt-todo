export const state = () => ({
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
  isSnackbarOpen: false,
  snackBarMessage: '',
  isDialogOpen: false,
  removeTodoId: null,
});
export const getters = {
  getTasks: state => state.tasks,
  getSnackbarStatus: state => state.isSnackbarOpen,
  getSnackbarMessage: state => state.snackBarMessage,
  getDialogStatus: state => state.isDialogOpen,
  getRemoveTodoId: state => state.removeTodoId,
};
export const actions = {
  addTodo: async (context, todo) => {
    const todoCapitalized = todo.charAt(0).toUpperCase() + todo.slice(1);
    const newTodo = {
      id: context.getters.getTasks.length + 1,
      title: todoCapitalized,
      done: false,
    };
    await context.dispatch('toggleSnackbarStatus', true);
    await context.dispatch('setSnackbarMessage', 'New todo has been added.');
    context.commit('ADD_NEW_TASK', newTodo);
  },
  removeTodo: async (context, todoId) => {
    const newTodoList = context.getters.getTasks.filter(item => item.id !== todoId);
    await context.dispatch('toggleSnackbarStatus', true);
    await context.dispatch('setSnackbarMessage', 'A todo has been removed.');
    context.commit('REMOVE_TODO', newTodoList);
    await context.dispatch('setDialogStatus', { dialogStatus: false, id: null });
  },
  toggleDone: (context, taskId) => {
    const task = context.getters.getTasks.filter(item => item.id === taskId)[0];
    context.commit('TOGGLE_DONE_STATUS', task);
  },
  toggleSnackbarStatus: (context, snackbarStatus) => {
    context.commit('TOGGLE_SNACKBAR', snackbarStatus);
  },
  setSnackbarMessage: (context, message) => {
    context.commit('SET_SNACKBAR_MESSAGE', message);
  },
  setDialogStatus: async (context, { dialogStatus, id }) => {
    await context.dispatch('setRemoveTodoId', id);
    context.commit('SET_DIALOG_STATUS', dialogStatus);
  },
  setRemoveTodoId: (context, id) => {
    context.commit('SET_REMOVE_TODO_ID', id);
  },
  updateEditedTodo: (context, { id, title }) => {
    const editTodo = context.getters.getTasks.find(item => item.id === id);
    context.commit('EDIT_TODO', { editTodo, title });
  },
};
export const mutations = {
  ADD_NEW_TASK(state, todo) {
    state.tasks.push(todo);
  },
  REMOVE_TODO(state, newTodoList) {
    state.tasks = newTodoList;
  },
  TOGGLE_DONE_STATUS(state, targetTask) {
    targetTask.done = !targetTask.done;
  },
  TOGGLE_SNACKBAR(state, snackbarStatus) {
    state.isSnackbarOpen = snackbarStatus;
  },
  SET_SNACKBAR_MESSAGE(state, dialogStatus) {
    state.snackBarMessage = dialogStatus;
  },
  SET_DIALOG_STATUS(state, message) {
    state.isDialogOpen = message;
  },
  SET_REMOVE_TODO_ID(state, id) {
    state.removeTodoId = id;
  },
  EDIT_TODO(state, { editTodo, title }) {
    state.tasks.forEach(item => {
      if (item.id === editTodo.id) {
        item.title = title;
      }
    });
  },
};
