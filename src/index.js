import React, {Component} from 'react';
import {render} from 'react-dom';

import { NavBar, Icon } from 'antd-mobile';
import {Button} from 'antd';

import './index.less';

function Title(props) {
  return <h1>Hello, {props.name}</h1>
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar leftContent="返回"
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
        >NavBar</NavBar>
        <Button type="primary">hello</Button>
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
