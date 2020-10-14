import decisionStep from '../examples/decision.json';
import formStep from '../examples/form.json';
import finalStep from '../examples/final.json';
import layoutStep from '../examples/layout.json';

import review from '../examples/review.json';
import reviewLayout from '../../layout/layouts/review.json';

const reviewStep = {
  type: 'form',
  schemas: [],
  layout: reviewLayout,
};

async function request(action, data) {
  console.log('request', action.url, data); // eslint-disable-line

  switch (action.url) {
    case '/decision':
      return Promise.resolve(decisionStep);
    case '/recipient':
      return Promise.resolve(formStep);
    case '/layout':
      return Promise.resolve(layoutStep);
    case '/review':
      return Promise.resolve(review);
    case '/confirm':
      return Promise.resolve(reviewStep);
    case '/final':
      return Promise.resolve(finalStep);
    case '/error':
      return Promise.reject({
        error: 'Something went wrong',
        validation: {},
      });
    default:
      return Promise.resolve({});
  }
}

export { request };
