import React, { Component } from 'react';

import { Container, Menu } from './styles';

class Categories extends Component {
  state = {
    current: 'react'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
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
          <Menu.Item key="react">REACT</Menu.Item>
          <Menu.Item key="redux">REDUX</Menu.Item>
          <Menu.Item key="udacity">UDACITY</Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default Categories;
