import React from 'react';

import { Container, Content } from './styles';
import Menu from './Menu';

const Header = () => (
  <Container>
    <Content>
      <Menu />
      <div>Search input</div>
    </Content>
  </Container>
);

export default Header;
