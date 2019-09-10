export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const createTodo = todo => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
);

export const updateTodo = todo => (
  $.ajax({
    method: 'PUT',
    url: `/api/todos/${todo.todo.id}`,
    data: todo
  })
);
