export const allTodos = ({ todos }) => {
  let todoIds = Object.keys(todos);
  let todosArray = todoIds.map( id => (
    todos[id]
  ));
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
