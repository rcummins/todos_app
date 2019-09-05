import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => (
  <div>
    <ul>
      {
        todos.map( (todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            receiveTodo={receiveTodo} />
        ))
      }
    </ul>
    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
