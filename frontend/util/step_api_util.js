export const fetchSteps = () => (
  $.ajax({
    method: 'GET',
    url: '/api/steps'
  })
);

export const createStep = step => (
  $.ajax({
    method: 'POST',
    url: '/api/steps',
    data: step
  })
);

export const updateStep = step => (
  $.ajax({
    method: 'PUT',
    url: `/api/steps/${step.step.id}`,
    data: step
  })
);
