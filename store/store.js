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
});
export const getters = {
  getTasks: state => state.tasks,
};
export const actions = {
  addTodo: (context, todo) => {
    const todoCapitalized = todo.charAt(0).toUpperCase() + todo.slice(1);
    const newTodo = {
      id: context.getters.getTasks.length + 1,
      title: todoCapitalized,
      done: false,
    };
    context.commit('ADD_NEW_TASK', newTodo);
  },
  removeTodo: (context, todoId) => {
    const newTodoList = context.getters.getTasks.filter(item => item.id !== todoId);
    context.commit('REMOVE_TODO', newTodoList);
  },
  toggleDone: (context, taskId) => {
    const task = context.getters.getTasks.filter(item => item.id === taskId)[0];
    context.commit('TOGGLE_DONE_STATUS', task);
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
};
