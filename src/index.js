import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;

      ReactDOM.render(<NextApp />, rootElement);
    });
  }
}
