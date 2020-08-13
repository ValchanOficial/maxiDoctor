import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './styles/normalize.css';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
