import React from 'react';

export default () => (
  <div className="hero">
    <div className="hero-text">
      <p>Your todos.</p>
      <p>Tracked.</p>
      <p>Organized.</p>
      <ul>
        <li>Quickly create simple todos with a title and description</li>
        <li>For more complex tasks, add detailed steps within a todo</li>
        <li>Mark todos done or delete them when you're finished</li>
      </ul>
    </div>

    <img
      className="hero-image"
      src="https://renatacumminstodosapp.s3.amazonaws.com/todos_app_preview.png"
      alt="app preview" />
  </div>
)
