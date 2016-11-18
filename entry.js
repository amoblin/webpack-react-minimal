import React, {Component} from 'react';
import {render} from 'react-dom';

import "./style.css"; // 载入 style.css

function Title(props) {
  return <h1>Hello, world!</h1>
}

function App(props) {
  return <Title />
}

render(App(), document.getElementById('root')
);
