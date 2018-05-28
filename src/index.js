// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// styling
import './index.css';

const feedbackData = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FEELING':
      console.log('feeling: ', action.payload);
      return { ...state, feeling: action.payload };
    case 'ADD_UNDERSTANDING':
      console.log('understanding: ', action.payload);
      return { ...state, understanding: action.payload };
    case 'ADD_SUPPORT':
      console.log('support: ', action.payload);
      return { ...state, support: action.payload };
    case 'ADD_COMMENTS':
      console.log('comments: ', action.payload);
      return { ...state, comments: action.payload };
    case 'RESET':
      return {};
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackData,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();