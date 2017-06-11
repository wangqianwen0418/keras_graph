import React from 'react';
import ReactDOM from 'react-dom';
import MainView from '../views/mainView.jsx';

window.onload = function(){
  ReactDOM.render(<MainView />, document.getElementById('app'));
}