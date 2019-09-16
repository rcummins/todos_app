import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit() {
    let todo = {
      todo: {
        title: this.state.title,
        body: this.state.body,
        done: false
      }
    };
    this.props.createTodo(todo).then(
      () => {
        this.setState({ title: '', body: ''});
        this.props.clearTodoErrors();
      }
    );
  }

  render() {
    const { title, body } = this.state;
    const { todoErrors } = this.props;

    let errorMessage;
    if (todoErrors.length > 0) {
      errorMessage = (
        <div className="error-message">
          <p>Please fix the following issue(s):</p>
          <ul>
            { todoErrors.map( (error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      );
    }

    return(
      <div className="form add-todo">

        {errorMessage}

        <div className="form-input">
          <label htmlFor="title">Title:</label>
          <input
            className="input-add-todo"
            type="text"
            id="title"
            onChange={this.handleInput('title')}
            value={title}>
          </input>
        </div>

        <div className="form-input">
          <label htmlFor="body">Body:</label>
          <textarea
            className="input-add-todo"
            id="body"
            onChange={this.handleInput('body')}
            value={body}>
          </textarea>
        </div>

        <button
          className='button-add-todo'
          onClick={this.handleSubmit}>
          Add todo
        </button>

      </div>
    );
  }
}

export default TodoForm;
