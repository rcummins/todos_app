export const fetchSteps = () => (
  $.ajax({
    method: 'GET',
    url: '/api/steps'
  })
);
