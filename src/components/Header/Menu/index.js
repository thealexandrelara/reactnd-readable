import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu } from './styles';
import AddPost from '../../AddPost';

class NavMenu extends Component {
  state = {
    current: 'react',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state;

    return (
      <Container>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            border: 'none',
            fontSize: 12,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="addPost">
            <AddPost />
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default NavMenu;
