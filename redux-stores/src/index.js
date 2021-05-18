import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';


//create store
const store = createStore(rootReducer);

ReactDOM.render(

  //warp the root application with the provider to allow react app accessing the store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,

  document.getElementById('root')
);

