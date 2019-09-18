import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';
import todoErrorReducer from './todo_error_reducer';
import stepErrorReducer from './step_error_reducer';
import sessionReducer from './session_reducer';
import sessionErrorReducer from './session_error_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  todoErrors: todoErrorReducer,
  stepErrors: stepErrorReducer,
  session: sessionReducer,
  sessionErrors: sessionErrorReducer
});

export default rootReducer;
