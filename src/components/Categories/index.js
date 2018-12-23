import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { Container, Menu } from './styles';

const Categories = ({ categories, currentCategory, ...rest }) => {
  return (
    <Container>
      <Menu
        selectedKeys={[currentCategory]}
        mode="horizontal"
        style={{ border: 'none', fontSize: 12, fontWeight: 'bold' }}
      >
        <Menu.Item key="all">
          <Link to="/">ALL</Link>
        </Menu.Item>
        {categories &&
          categories.map(category => (
            <Menu.Item key={category.name}>
              <Link to={`/category/${category.path}`}>
                {category.name.toUpperCase()}
              </Link>
            </Menu.Item>
          ))}
      </Menu>
    </Container>
  );
};

export default withRouter(Categories);
