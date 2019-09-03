import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

const store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <h1>Todos App</h1>,
    document.getElementById("content")
  )
});