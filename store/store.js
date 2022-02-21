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
});
export const getters = {
  getTasks: state => state.tasks,
  getSnackbarStatus: state => state.isSnackbarOpen,
  getSnackbarMessage: state => state.snackBarMessage,
};
export const actions = {
  addTodo: async (context, todo) => {
    const todoCapitalized = todo.charAt(0).toUpperCase() + todo.slice(1);
    const newTodo = {
      id: context.getters.getTasks.length + 1,
      title: todoCapitalized,
      done: false,
    };
    if (context.getters.getSnackbarStatus) {
      console.log('32');
    }
    await context.dispatch('toggleSnackbarStatus', true);
    await context.dispatch('setSnackbarMessage', 'New todo has been added.');
    context.commit('ADD_NEW_TASK', newTodo);
  },
  removeTodo: async (context, todoId) => {
    const newTodoList = context.getters.getTasks.filter(item => item.id !== todoId);
    await context.dispatch('toggleSnackbarStatus', true);
    await context.dispatch('setSnackbarMessage', 'A todo has been removed.');
    context.commit('REMOVE_TODO', newTodoList);
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
  SET_SNACKBAR_MESSAGE(state, message) {
    state.snackBarMessage = message;
  },
};
