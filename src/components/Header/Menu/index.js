import React from 'react';

const Menu = () => (
  <Menu selectedKeys={['mail']} mode="horizontal" style={{ border: 0 }}>
    <Menu.Item key="mail">
      {/* <Icon type="mail" /> */}
        Home
    </Menu.Item>
    <Menu.Item key="app">
      {/* <Icon type="appstore" /> */}
        React
    </Menu.Item>
    <Menu.Item key="alipay">
      {/* <Icon type="mail" /> */}
        Redux
    </Menu.Item>
  </Menu>
);

export default Menu;
