export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
export const TOGGLE_STEP_STATUS = "TOGGLE_STEP_STATUS";

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = id => ({
  type: REMOVE_STEP,
  id
});

export const toggleStepStatus = id => ({
  type: TOGGLE_STEP_STATUS,
  id
});
