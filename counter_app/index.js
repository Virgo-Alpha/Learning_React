import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let counter = 0;
function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(el, document.getElementById('root'));
}

setInterval(show, 1000);
