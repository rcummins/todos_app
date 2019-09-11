export const RECEIVE_TODO_ERRORS = "RECEIVE_TODO_ERRORS";
export const CLEAR_TODO_ERRORS = "CLEAR_TODO_ERRORS";

export const receiveTodoErrors = errors => ({
  type: RECEIVE_TODO_ERRORS,
  errors
});

export const clearTodoErrors = () => ({
  type: CLEAR_TODO_ERRORS
});
