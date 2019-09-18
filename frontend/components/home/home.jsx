import React from 'react';

export default () => (
  <div className="home">
    <div className="home-description">
      <h2>Your todos. Tracked. Organized.</h2>
      <ul>
        <li>Quickly create simple todos with a title and description</li>
        <li>For more complex tasks, add detailed steps within a todo</li>
        <li>Mark todos done or delete them when you're finished</li>
      </ul>
    </div>

    <img
      className="home-preview"
      src="https://renatacumminstodosapp.s3.amazonaws.com/todos_app_preview.png"
      alt="app preview" />
  </div>
)
