import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import store from './redux/store';

import SSRProvider from 'react-bootstrap/SSRProvider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SSRProvider>
        <App />
      </SSRProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

