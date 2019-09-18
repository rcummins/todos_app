export const todosByUserId = ({ todos }, userId) => {
  let todoIds = Object.keys(todos);
  let todosArray = [];
  todoIds.forEach( todoId => {
    if (todos[todoId].user_id === userId) {
      todosArray.push(todos[todoId]);
    }
  });
  return todosArray;
};

export const stepsByTodoId = ({ steps }, todoId) => {
  let stepIds = Object.keys(steps);
  let stepsArray = [];
  stepIds.forEach( stepId => {
    if (steps[stepId].todo_id === todoId) {
      stepsArray.push(steps[stepId]);
    }
  });
  return stepsArray;
};
