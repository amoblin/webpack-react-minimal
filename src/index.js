import React, {Component} from 'react';
import {render} from 'react-dom';

import { NavBar, Icon } from 'antd-mobile';

function Title(props) {
  return <h1>Hello, {props.name}</h1>
}

function App(props) {
  return (
    <div>
      <NavBar leftContent="返回"
              mode="light"
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
      >NavBar</NavBar>
    </div>
  );
}

render(App(), document.getElementById('root'));
