import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleStatus = this.handleToggleStatus.bind(this);
  }

  handleDelete() {
    this.props.removeStep(this.props.step.id);
  }

  handleToggleStatus() {
    let updatedStep = Object.assign({}, this.props.step);
    updatedStep.done = !updatedStep.done;
    this.props.receiveStep(updatedStep);
  }

  render() {
    const { step } = this.props;

    return(
      <div className="step-item">
        <div className="step-header">
          <h4>{step.title}</h4>

          <button
            className={ step.done ? 'button-undo' : 'button-done' }
            onClick={this.handleToggleStatus} >
            { step.done ? 'Undo' : 'Done' }
          </button>
        </div>

        <p>{step.body}</p>

        <button
          className='button-delete'
          onClick={this.handleDelete}>
          Delete step
        </button>
      </div>
    )
  }
}

export default StepListItem;
