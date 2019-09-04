export const allTodos = state => {
  let todoIds = Object.keys(state.todos);
  let todos = todoIds.map( id => (
    state.todos[id]
  ));
  return todos;
};

export const stepsByTodoId = (state, todoId) => {
  let stepIds = Object.keys(state.steps);
  let steps = [];
  for (let i = 0; i < stepIds.length; i++) {
    if (state.steps[stepIds[i]].todo_id === todoId) {
      steps.push(state.steps[stepIds[i]]);
    }
  }
  return steps;
};
