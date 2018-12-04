import React from 'react';
import { Icon } from 'antd';

import {
  Container, Menu, MenuButton, styles,
} from './styles';

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Container>
        <MenuButton
          type="primary"
          onClick={this.toggleCollapsed}
          style={styles.buttonStyles}
          size="large"
        >
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </MenuButton>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          style={styles.menuStyles}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>REACT</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>REDUX</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>UDACITY</span>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default Sidebar;
