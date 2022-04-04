import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,Router,browserHistory } from '@version/react-router-v3';


ReactDOM.render(
  <React.StrictMode>
    <Router history={browserHistory}>
      <Route path ='/' component ={App}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

