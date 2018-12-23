import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu } from './styles';

class NavMenu extends Component {
  state = {
    current: 'react',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Container>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ border: 'none', fontSize: 12, fontWeight: 'bold' }}
        >
          <Menu.Item key="react">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="redux">Create New Post</Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default NavMenu;
