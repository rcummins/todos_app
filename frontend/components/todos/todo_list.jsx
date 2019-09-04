import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo, toggleStatus }) => (
  <div>
    <ul>
      {
        todos.map( (todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            removeTodo={removeTodo}
            toggleStatus={toggleStatus} />
        ))
      }
    </ul>
    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
