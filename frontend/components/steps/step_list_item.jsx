import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={};

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
      <div>
        <h4>{step.title}</h4>
        <p>{step.body}</p>

        <button onClick={this.handleToggleStatus} >
          { step.done ? 'Undo' : 'Done' }
        </button>

        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default StepListItem;
