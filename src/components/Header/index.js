import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LogoContainer, NavMenu } from './styles';
import Logo from '../../assets/images/logo.png';

const Header = () => (
  <Container>
    <Link to="/">
      <LogoContainer src={Logo} alt="Logo" />
    </Link>
    <NavMenu />
  </Container>
);

export default Header;
