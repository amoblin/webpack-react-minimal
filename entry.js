import React, {Component} from 'react';
import {render} from 'react-dom';

import "./style.css"; // 载入 style.css

function Title(props) {
  return <h1>Hello, {props.name}</h1>
}

function App(props) {
  return <Title name="amoblin"/>
}

render(App(), document.getElementById('root')
);
