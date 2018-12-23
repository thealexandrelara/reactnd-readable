import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;

      ReactDOM.render(
        <Provider store={store}>
          <NextApp />
        </Provider>,
        rootElement,
      );
    });
  }
}
