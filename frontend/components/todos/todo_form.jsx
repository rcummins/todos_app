import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  setBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleClick() {
    let todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    this.props.receiveTodo(todo)
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    const { title, body } = this.state;
    return(
      <div className="form">

        <div className="form-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={this.setTitle}
            value={title}>
          </input>
        </div>

        <div className="form-input">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            onChange={this.setBody}
            value={body}>
          </textarea>
        </div>

        <button
          className='button-submit'
          onClick={this.handleClick}>
          Add todo
        </button>

      </div>
    );
  }
}

export default TodoForm;
