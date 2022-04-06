import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route,Router,browserHistory } from '@version/react-router-v3';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import Profile from './component/profile'


ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router history = { browserHistory }>
        <Route exact path ='/' component ={App}/>
        <Route path ='/profile' component ={Profile}/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

