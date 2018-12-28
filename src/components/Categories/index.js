import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import { Container, Menu } from './styles';

const Categories = ({ categories, currentCategory }) => (
  <Container>
    <Menu
      selectedKeys={[currentCategory]}
      mode="horizontal"
      style={{ border: 'none', fontSize: 12, fontWeight: 'bold' }}
    >
      <Menu.Item key="all">
        <Link to="/">ALL</Link>
      </Menu.Item>
      {categories.map(category => (
        <Menu.Item key={category.name}>
          <Link to={`/${category.path}`}>{category.name.toUpperCase()}</Link>
        </Menu.Item>
      ))}
    </Menu>
  </Container>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default withRouter(Categories);
