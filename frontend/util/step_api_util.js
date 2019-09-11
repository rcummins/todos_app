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
