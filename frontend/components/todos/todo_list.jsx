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
      clearTodoErrors} = this.props;
    return(
      <div>
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
          clearTodoErrors={clearTodoErrors} />
      </div>
    );
  }
}

export default TodoList;
