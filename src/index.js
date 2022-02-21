import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

  export let render = () => {
    ReactDOM.render(
                <App/>,
      document.getElementById('root')
    );
  }

  render();
