import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <App />
          </div>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
