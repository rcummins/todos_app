import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from './components/root';

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById("content")
  )
});
