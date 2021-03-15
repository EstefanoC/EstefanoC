import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { HashRouter as Router } from 'react-router-dom';

// Css
import './normalize.css';

// Component
import App from './component/app';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);