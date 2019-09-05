import React from 'react';

const StepListItem = ({ step, removeStep, toggleStepStatus }) => (
  <div>
    <h4>{step.title}</h4>
    <p>{step.body}</p>
    <p>Buttons to toggle step status and remove step will go here</p>
  </div>
);

export default StepListItem;
