import React from 'react'; 
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp)

window.onload = function() {
  ReactDom.render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById("app"));
};

