import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {
      todos,
      createTodo,
      updateTodo,
      todoErrors,
      clearTodoErrors,
      currentUser} = this.props;
    return(
      <div className="todo-list">
        <ul>
          {
            todos.map( (todo, index) => (
              <TodoListItem
                key={index}
                todo={todo}
                updateTodo={updateTodo} />
            ))
          }
        </ul>
        <TodoForm
          createTodo={createTodo}
          todoErrors={todoErrors}
          clearTodoErrors={clearTodoErrors}
          currentUser={currentUser} />
      </div>
    );
  }
}

export default TodoList;
