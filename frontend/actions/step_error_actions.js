export const RECEIVE_STEP_ERRORS = "RECEIVE_STEP_ERRORS";
export const CLEAR_STEP_ERRORS = "CLEAR_STEP_ERRORS";

export const receiveStepErrors = errors => ({
  type: RECEIVE_STEP_ERRORS,
  errors
});

export const clearStepErrors = () => ({
  type: CLEAR_STEP_ERRORS
});
