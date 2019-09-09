import React from 'react';
import { uniqueId } from '../../util/utils';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  handleSubmit() {
    if (this.state.title !== '' && this.state.body !== '') {
      let newStep = {
        id: uniqueId(),
        title: this.state.title,
        body: this.state.body,
        done: false,
        todo_id: this.props.todo_id
      };
      this.props.receiveStep(newStep);
      this.setState({
        title: '',
        body: ''
      });
    }
  }

  setBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  setTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    return(
      <div className="form add-step">

        <div className="form-input">
          <label htmlFor="title">Title:</label>
          <input
            className="input-add-step"
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.setTitle}>
          </input>
        </div>

        <div className="form-input">
          <label htmlFor="body">Body:</label>
          <textarea
            className="input-add-step"
            id="body"
            value={this.state.body}
            onChange={this.setBody}>
          </textarea>
        </div>

        <button
          className='button-add-step'
          onClick={this.handleSubmit}>
          Add step
        </button>

      </div>
    )
  }
}

export default StepForm;
