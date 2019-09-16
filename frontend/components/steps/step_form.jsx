import React from 'react';

class StepForm extends React.Component {
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
    let newStep = {
      title: this.state.title,
      body: this.state.body,
      done: false,
      todo_id: this.props.todo_id
    };
    this.props.createStep({ step: newStep}).then(
      () => {
        this.setState({title: '', body: ''})
        this.props.clearStepErrors(this.props.todo_id);
      }
    );
  }

  render() {
    const { stepErrors } = this.props;

    let errorMessage;
    if (stepErrors.hasOwnProperty(this.props.todo_id)) {
      const errors = stepErrors[this.props.todo_id].errors;
      if (errors.length > 0) {
        errorMessage = (
          <div className="error-message">
            <p>Please fix the following issue(s):</p>
            <ul>
              { errors.map( (error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )
      }
    }

    return(
      <div className="form add-step">

        {errorMessage}

        <div className="form-input">
          <label htmlFor="title">Title:</label>
          <input
            className="input-add-step"
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleInput('title')}>
          </input>
        </div>

        <div className="form-input">
          <label htmlFor="body">Body:</label>
          <textarea
            className="input-add-step"
            id="body"
            value={this.state.body}
            onChange={this.handleInput('body')}>
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
